import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import LatestReviewCard from "../Home/LatestReviewCard/LatestReviewCard";

const LatestReview = () => {

    const [latestReviews, setLatestReviews] = useState([]);

    const axiosPublic = useAxiosPublic();


    useEffect(() => {
        axiosPublic.get('/latestreviews')
        .then(res => {
            setLatestReviews(res?.data);
        })
    }, [axiosPublic])



    console.log(latestReviews);

    const lastReview = latestReviews.slice(-6)

    console.log(lastReview);
    lastReview.reverse();

    return (
        <div className="lg:px-20 md:px-10 px-4 py-20 bg-lime-100">
            <div>
                <SectionTitle heading="Testimonials" subHeading="Publish the best of your client testimonials and let the world know what a great agent or real estate agency you are. Testimonials build trust."></SectionTitle>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    lastReview.map(item => <LatestReviewCard key={item?._id} item={item}></LatestReviewCard>)
                }
            </div>

        </div>
    );
};

export default LatestReview;