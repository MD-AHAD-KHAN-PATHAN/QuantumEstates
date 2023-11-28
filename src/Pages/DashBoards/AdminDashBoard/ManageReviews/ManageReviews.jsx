import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import AllReviewCard from "../../AllReviewCard/AllReviewCard";

const ManageReviews = () => {

    const axiosSecure = useAxiosSecure();

    const {data: allReviews = [], refetch} = useQuery({
        queryKey: ['allReviews'],
        queryFn: async () => {
            const res = await axiosSecure.get('/reviews/admin')
            return res?.data;
        }
    })

    console.log(allReviews);

    return (
        <div>
            <h1 className="text-4xl font-bold text-center text-lime-400 my-10">All Reviews add by users</h1>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:mx-20 md:mx-10 mx-6 mb-10">
                {
                    allReviews?.map(item => <AllReviewCard key={item?._id} item={item} refetch={refetch}></AllReviewCard>)
                }
            </div>
        </div>
    );
};

export default ManageReviews;