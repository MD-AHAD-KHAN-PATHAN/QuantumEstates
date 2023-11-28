import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useFraud = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: isFraud, isPending: isFraudLoading } = useQuery({
        queryKey: [user?.email, 'isFraud'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/fraud/${user?.email}`)
            console.log(res.data);
            return res.data?.fraud;
        }
    })
    return [isFraud, isFraudLoading];
};

export default useFraud;