import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import BoughtCard from "../BoughtCard/BoughtCard";

const PropertyBought = () => {

    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();

    const { data: bought = [] } = useQuery({
        queryKey: ['bought'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/propertyBought/user/${user?.email}`)
            return res.data;
        }
    })

    console.log(bought);

    return (
        <div>
            <h1 className="text-4xl font-bold text-lime-400 text-center my-16">My Bid Property</h1>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:mx-16 md:mx-10 mx-4 mb-10">
                {
                    bought.map(item => <BoughtCard key={item?._id} item={item}></BoughtCard>)
                }
            </div>

        </div>
    );
};

export default PropertyBought;