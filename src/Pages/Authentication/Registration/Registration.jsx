// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaRegistered } from "react-icons/fa6";

import registerImage from "../../../assets/signup.svg"
import useAxiosPublic from "../../../Hooks/useAxiosPublic";



const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const Registration = () => {


    const {createUser, updateUserProfile} = useAuth();
    const axiosPublic = useAxiosPublic();

    const navigate = useNavigate();
    const location = useLocation();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {

        console.log(data);
        if (data.password.length < 6) {

            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password must be at least 6 characters long!",
            });
        }

        if (!/[A-Z]/.test(data.password)) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password must contain at least one uppercase letter!",
            });
        }

        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(data.password)) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password must contain at least one special character!",
            });
        }

        // Image hosting imageBB
        const profileImage = { image: data.image[0] };
        const res = await axiosPublic.post(img_hosting_api, profileImage, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        
        createUser(data.email, data.password)
            .then(() => {
                updateUserProfile(data.name, res.data.data.display_url)
                    .then(() => {

                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            photo: res.data.data.display_url,
                            admin: false,
                            agent: false,
                            fraud: false,
                        }

                        axiosPublic.post('/users', userInfo)
                            .then(res => {

                                console.log(res.data);

                                if (res.data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        icon: "success",
                                        title: "Registration successfull.",
                                        showConfirmButton: false,
                                        timer: 2000
                                    });

                                    navigate(location?.state ? location.state : '/');
                                }
                            })
                          
                    })
                    .catch(error => {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: `${error.code}`,
                          });
                    })
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.code}`,
                  });
            })

    }

    return (
        <>
            <div className="md:my-20 my-10">
                <div className="lg:hero-content lg:flex lg:flex-row-reverse md:m-20 mx-6">
                    <div className="text-center md:text-left">
                        <img className='md:max-w-lg max-w-sm' src={registerImage} alt="" />
                    </div>
                    <div className="card flex-shrink-0 max-w-2xl shadow-2xl bg-base-100">
                        <div className='bg-lime-600 p-6 text-white rounded-t-lg'>
                            <h1 className='text-3xl font-semibold'>create account</h1>
                            <label className="label font-semibold text-lg">
                                Already Have account ? <Link to="/login" className="label-text-alt link link-hover text-lg text-white font-bold underline">Please Login</Link>
                            </label>
                        </div>
                        <div className="p-16">
                            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-4'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lime-500">Full Name</span>
                                    </label>
                                    <input type="name" {...register("name", { required: true })} placeholder="Full name" className="border-1 border-lime-500 input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lime-500">Profile Image</span>
                                    </label>
                                    <input type="file" className="file-input w-full border-lime-400" {...register("image", { required: true })} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lime-500">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} placeholder="email" className="border-1 border-lime-500 input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lime-500">Password</span>
                                    </label>
                                    <input type="password" {...register("password", { required: true })} placeholder="password" className="border-1 border-lime-500 input input-bordered" required />
                                </div>
                                <div className="form-control mt-6 p-0 col-span-2">
                                    <button className="btn bg-white  hover:bg-lime-400 hover:text-white text-lime-500 border-1 border-lime-400 font-bold"> <FaRegistered/> Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Registration;