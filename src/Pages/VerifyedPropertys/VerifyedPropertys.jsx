import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import VerifyedCard from "../VerifyedCard/VerifyedCard";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { useState } from "react";


const VerifyedPropertys = () => {

    const axiosPublic = useAxiosPublic();
    const [verifiedProperty, setVerifiedProperty] = useState([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {

        const searchData = {
            title: data.title,
            status: 'verified'
        }
        console.log(searchData);
        axiosPublic.get(`/property/search/${data?.title}`)
        .then(res => {
            setVerifiedProperty(res?.data);
        })
        
    }

    const verify = {
        status: "verified",
    };

    const { data: verifyed = [], refetch } = useQuery({
        queryKey: ['verifyed'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/propertys/verified/${verify?.status}`)
            setVerifiedProperty(res.data);
            return res.data
        }
    })


    

    return (
        <>
            <SectionTitle heading="Verified Propertys" subHeading="These are the verified properties in the Sales category. You can choose the home and see the latest property and buy your beautiful Home."></SectionTitle>
            <div className="flex lg:ml-20 md:ml-10 ml-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        <label className="label">
                            <span className="label-text text-lime-500">Property Title</span>
                        </label>
                        <input type="text" {...register("title", { required: true })} placeholder="type here property title" className="border-1 border-lime-400 input input-bordered w-full" required />
                    </div>
                    <div className="mt-2 p-0">
                        <button className="btn bg-white  hover:bg-lime-400 hover:text-white text-lime-500 border-1 border-lime-400 font-bold">search</button>
                    </div>
                </form>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:mx-20 md:mx-10 m-4 mb-10">
                {
                    verifiedProperty?.map((item) => <VerifyedCard key={item?._id} item={item}></VerifyedCard>)
                }
            </div>
        </>
    );
};

export default VerifyedPropertys;