import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {

    const { googleLogin } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = () => {
        googleLogin()
            .then(() => {
                Swal.fire({
                    title: "Good job!",
                    text: "Google Login Successfull !",
                    icon: "success"
                });
                navigate(location?.state ? location.state : '/')
            })
            .then((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.code}`,
                });
            })
    }
    return (
        <>
            <div className="divider text-lime-500">continue with</div>
            <div className="">
                <button onClick={handleLogin} className="btn bg-white  hover:bg-lime-400 hover:text-white text-lime-500 border-1 border-lime-400"> <FaGoogle /> Google</button>
            </div>
        </>
    );
};

export default SocialLogin;