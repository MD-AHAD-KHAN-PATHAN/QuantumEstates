import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/');
    }
    return (
        <div className="">
            <img className="w-3/4 mx-auto" src="https://i.ibb.co/zm0Vd37/undraw-Page-not-found-re-e9o6.png" alt="error image" />
            <div className="flex justify-center">
                <button onClick={handleClick} className="px-4 py-3 bg-teal-500 font-bold text-white rounded-md">Back To Home</button>
            </div>
        </div>
    );
};

export default Error;