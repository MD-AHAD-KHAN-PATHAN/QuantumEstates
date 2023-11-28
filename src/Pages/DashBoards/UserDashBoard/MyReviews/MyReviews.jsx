import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import MyReviewCard from "../MyReviewCard/MyReviewCard";

const MyReviews = () => {

    const {user} = useAuth();

    const axiosPublic = useAxiosPublic();

    const {data: userReviews = [], refetch} = useQuery({
        queryKey: ['userReviews'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/reviews/user/${user?.email}`)
            return res?.data
        }
    })

    console.log(userReviews?.length);

    return (

        <div className="lg:m-20 md:m-10 m-6">
            <h1 className="text-4xl font-bold text-center text-lime-400 mb-10">All My Reviews</h1>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-10">
            {
                userReviews?.map(item => <MyReviewCard key={item?._id} item={item} refetch={refetch}></MyReviewCard>)
            }
        </div>
        
        </div>

    );
};

export default MyReviews;