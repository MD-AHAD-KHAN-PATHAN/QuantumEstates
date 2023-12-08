import axios from "axios";
import useAuth from "./useAuth";

const axiosSecure = axios.create({

    baseURL: 'http://localhost:5000',

})
// https://quantumstate-server.vercel.app

const useAxiosSecure = () => {


    return axiosSecure;
};

export default useAxiosSecure;