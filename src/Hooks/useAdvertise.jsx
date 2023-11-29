import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAdvertise = () => {
    

    const axiosPublic = useAxiosPublic();

    const {data: advertise = []} = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await axiosPublic.get('/advertise')
            return res.data
        }
    })
    
    return [advertise];


};

export default useAdvertise;