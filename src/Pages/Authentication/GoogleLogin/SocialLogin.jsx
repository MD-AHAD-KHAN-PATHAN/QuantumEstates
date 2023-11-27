import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const SocialLogin = () => {

    const { googleLogin } = useAuth();
    const axiosPublic = useAxiosPublic();

    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = () => {
        googleLogin()
            .then((res) => {
                const userInfo = {
                    name: res?.user?.displayName,
                    email: res?.user?.email,
                    photo: res?.user?.photoURL,
                    role: 'user'
                }

                axiosPublic.post('/users', userInfo)
                    .then(res => {

                        console.log(res.data);

                        if (res.data.insertedId) {
                            Swal.fire({
                                icon: "success",
                                title: "Google login successfull.",
                                showConfirmButton: false,
                                timer: 2000
                            });

                            navigate(location?.state ? location.state : '/');
                        }
                    })
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