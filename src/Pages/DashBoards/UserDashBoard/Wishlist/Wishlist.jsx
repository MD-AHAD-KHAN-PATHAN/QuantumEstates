import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import WishlistCard from "../WishlistCard/WishlistCard";
import useAuth from "../../../../Hooks/useAuth";
// import { useLoaderData } from "react-router-dom";

const Wishlist = () => {


    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();
    // const wishlists = useLoaderData();
    const { data: wishlists = [], refetch } = useQuery({
        queryKey: ['wishlists'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/wishlists/user/${user?.email}`);

            return res?.data;
        }
    })

    console.log('wishlist data : ', wishlists);


    return (
        <div>
            <SectionTitle heading="My Wishlist" subHeading="Explore the Pinnacle of Personal Desires. Unveil Your Dream Lifestyle with Our Curated Selections. Elevate Your Experience, One Coveted Item at a Time."></SectionTitle>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:mx-16 md:mx-10 mx-4 mb-10">

                {
                    wishlists?.map(list => <WishlistCard key={list?._id} list={list} refetch={refetch}></WishlistCard>)
                }
            </div>
        </div>
    );
};

export default Wishlist;