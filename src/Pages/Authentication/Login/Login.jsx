import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import loginImage from "../../../assets/login.svg"
import SocialLogin from "../GoogleLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BiLogInCircle } from "react-icons/bi";


const Login = () => {

    const { signInUser } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {

        console.log(data);

        signInUser(data.email, data.password)
            .then(() => {
                Swal.fire({
                    title: "Good job!",
                    text: "Login Successfull !",
                    icon: "success"
                  });
                  navigate(location?.state ? location.state : '/')
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.code}`,
                  });
            })
    }

    


    return (
        <>
            <div className="justify-center md:my-0 my-10">
                <div className="lg:hero-content lg:flex lg:flex-row-reverse md:m-20 mx-6">
                    <div className="text-center">
                        <img className='md:max-w-lg max-w-sm' src={loginImage} alt="" />
                    </div>
                    <div className="card flex-shrink-0 max-w-3xl shadow-2xl">
                        <div className='bg-lime-600 p-6 text-white rounded-t-lg'>
                            <h1 className='text-3xl font-semibold'>Sign in</h1>
                            <label className="label font-semibold md:text-lg">
                                Don't have an account ? <Link to="/registration" className="label-text-alt md:text-lg link link-hover text-white font-bold underline ml-4">Create account</Link>
                            </label>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lime-500">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} placeholder="email" className="border-1 border-lime-400 input input-bordered w-full" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lime-500">Password</span>
                                    </label>
                                    <input type="password" {...register("password", { required: true })} placeholder="password" className="border-1 border-lime-400 input input-bordered" required />
                                </div>
                                <div className="form-control mt-6 p-0">
                                    <button className="btn bg-white  hover:bg-lime-400 hover:text-white text-lime-500 border-1 border-lime-400 font-bold"> <BiLogInCircle/> Login</button>
                                </div>
                            </form>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;