import axios from "axios";
import useAuth from "./useAuth";

const axiosSecure = axios.create({

    baseURL: 'https://quantumstate-server.vercel.app',

})
// https://quantumstate-server.vercel.app

const useAxiosSecure = () => {


    return axiosSecure;
};

export default useAxiosSecure;