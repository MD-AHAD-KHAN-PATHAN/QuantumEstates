import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import registerImage from "../../../assets/signup.svg"

const Registration = () => {


    const {createUser, updateUserProfile} = useAuth();
    const navigate = useNavigate();


    const handleRegistration = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const url = form.url.value;
        const password = form.password.value;

        if (password.length < 6) {

            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password must be at least 6 characters long!",
              });
        }

        if (!/[A-Z]/.test(password)) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password must contain at least one uppercase letter!",
              });
        }

        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password must contain at least one special character!",
              });
        }

        createUser(email, password)
            .then(() => {
                updateUserProfile(name, url)
                    .then(() => {
                        Swal.fire({
                            title: "Good job!",
                            text: "Registation Successfull!",
                            icon: "success"
                          });
                          navigate('/');
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
                                Already Have account ? <button to="/login" className="label-text-alt link link-hover text-lg text-white font-bold underline">Please Login</button>
                            </label>
                        </div>
                        <div className="p-16">
                            <form onSubmit={handleRegistration} className='grid grid-cols-2 gap-4'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lime-500">Full Name</span>
                                    </label>
                                    <input type="name" name="name" placeholder="Full name" className="border-1 border-lime-500 input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lime-500">Image Url</span>
                                    </label>
                                    <input type="text" name="url" placeholder="image url" className="border-1 border-lime-500 input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lime-500">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="border-1 border-lime-500 input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lime-500">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="border-1 border-lime-500 input input-bordered" required />
                                </div>
                                <div className="form-control mt-6 p-0 col-span-2">
                                    <button className="btn bg-white  hover:bg-lime-400 hover:text-white text-lime-500 border-1 border-lime-400">Register</button>
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