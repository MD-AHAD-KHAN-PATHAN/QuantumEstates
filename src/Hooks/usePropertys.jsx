import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const usePropertys = () => {


    const axiosSecure = useAxiosSecure();

    const { data: propertys = [], refetch } = useQuery({
        queryKey: ['propertys'],
        queryFn: async () => {

            const res = await axiosSecure.get('/propertys');

            return res.data;
        }


    })

    return [propertys, refetch];
};

export default usePropertys;