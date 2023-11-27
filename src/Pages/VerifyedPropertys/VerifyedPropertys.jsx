import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import VerifyedCard from "../VerifyedCard/VerifyedCard";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";


const VerifyedPropertys = () => {

    const axiosPublic = useAxiosPublic();

    const verify = {
        status: "verified",
    };

    const { data: verifyed = [], refetch } = useQuery({
        queryKey: ['verifyed'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/propertys/verified/${verify?.status}`)

            return res.data
        }
    })

    return (
        <>
            <SectionTitle heading="Verified Propertys" subHeading="These are the verified properties in the Sales category. You can choose the home and see the latest property and buy your beautiful Home."></SectionTitle>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:mx-20 md:mx-10 m-4 mb-10">
                {
                    verifyed.map((item) => <VerifyedCard key={item?._id} item={item}></VerifyedCard>)
                }
            </div>
        </>
    );
};

export default VerifyedPropertys;