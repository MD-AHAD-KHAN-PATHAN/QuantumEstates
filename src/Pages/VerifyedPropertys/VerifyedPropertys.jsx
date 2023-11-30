import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import VerifyedCard from "../VerifyedCard/VerifyedCard";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";


const VerifyedPropertys = () => {

    const axiosPublic = useAxiosPublic();
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [verifiedProperty, setVerifiedProperty] = useState([]);

    console.log('minPrice : ', minPrice);
    console.log('maxPrice : ', maxPrice);

    const handleSort = (e) => {
        e.preventDefault();

        setMinPrice(e.target.minPrice.value);
        setMaxPrice(e.target.maxPrice.value);

        axiosPublic.get(`/property/sort?minPrice=${minPrice}&maxPrice=${maxPrice}`)
            .then(res => {
                console.log(res?.data)
                setVerifiedProperty(res?.data);
            })


    }

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
            <div className="lg:flex justify-between lg:mx-20 md:mx-10 mx-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        <label className="label">
                            <span className="label-text text-lime-500">Property Title</span>
                        </label>
                        <input type="text" {...register("title", { required: true })} placeholder="type here property title" className="border-1 border-lime-400 input input-bordered w-full" required />
                    </div>
                    <div className="mt-2 p-0">
                        <button className="btn bg-white  hover:bg-lime-400 hover:text-white text-lime-500 border-1 border-lime-400 font-bold">Search</button>
                    </div>
                </form>

                <div className="">
                    <form onSubmit={handleSort}>
                        <div className="flex gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lime-500">Minimum Price</span>
                                </label>
                                <input type="number" name="minPrice" placeholder="type here price" className="border-1 border-lime-400 input input-bordered w-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lime-500">Maximum Price</span>
                                </label>
                                <input type="number" name="maxPrice" placeholder="type here price" className="border-1 border-lime-400 input input-bordered w-full" required />
                            </div>
                        </div>
                        <div className="mt-2 p-0">
                            <button className="btn bg-white  hover:bg-lime-400 hover:text-white text-lime-500 border-1 border-lime-400 font-bold">Sort</button>
                        </div>
                    </form>

                </div>
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