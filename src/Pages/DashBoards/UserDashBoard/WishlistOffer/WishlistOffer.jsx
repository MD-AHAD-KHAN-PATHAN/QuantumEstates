import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useState } from "react";


const WishlistOffer = () => {

    const wishlistData = useLoaderData();

    const axiosPublic = useAxiosPublic();

    const [offerData, setOffeerData] = useState({});

    const {id} = useParams();

    const navigate = useNavigate();

    const { PropertyImage, title, verify, agentName, agentEmail, agentImage, area, address, city, country, maximum, minimum, bedroom, bathrooms, buyerName, buyerEmail, buyerImage } = wishlistData;



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: `${title}`,
            country: `${country}`,
            agentName: `${agentName}`,
            agentEmail: `${agentEmail}`,
            buyerEmail: `${buyerEmail}`,
            buyerName: `${buyerName}`,

        },
    })

    const onSubmit = async (data) => {

        const offer = parseInt(data?.offer);

        if(offer > maximum || offer < minimum) {
            console.log(offer, maximum, minimum);
            Swal.fire({
                title: "Oh no !",
                text: "Please Offer your amount between the maximum and minimum price",
                icon: "error"
            });

            return;
        }

        const propertyAddress = `${area},${city},${country}`;

        const offerInfo = {
            propertyImage: PropertyImage,
            buyerImage: buyerImage,
            buyerEmail: buyerEmail,
            buyerName: buyerName,
            title: title,
            agentName: agentName,
            agentImage: agentImage,
            agentEmail: agentEmail,
            location: propertyAddress,
            status: 'pending',
            offer: data.offer,
            date: data.buyingDate
        }

        console.log(offerInfo);
        axiosPublic.post('/propertyBought', offerInfo)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "This property buying request sent",
                        showConfirmButton: false,
                        timer: 2000
                    });

                    navigate('/dashboard/propertyBought');

                }
            })
    }


    return (

        <div className="md:my-20 my-10">
            <div className="lg:m-32 md:m-20 mx-6">
                <div>
                    <h1 className="text-center text-3xl text-lime-500 font-semibold mb-4">Property Buying offer Form</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lime-500">Property title</span>
                            </label>
                            <input type="text" {...register("title")} readOnly className="border-1 border-lime-500 input input-bordered" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lime-500">Country</span>
                            </label>
                            <input type="url" className="file-input w-full border-lime-400" {...register("country")} readOnly />
                        </div>
                    </div>
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lime-500">Agent Name</span>
                            </label>
                            <input type="text" {...register("agentName")} readOnly className="border-1 border-lime-500 input input-bordered" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lime-500">Agent Email</span>
                            </label>
                            <input type="text" {...register("agentEmail")} readOnly className="border-1 border-lime-500 input input-bordered" />
                        </div>
                    </div>

                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lime-500">Buyer Name</span>
                            </label>
                            <input type="text" {...register("buyerName")} readOnly className="border-1 border-lime-500 input input-bordered" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lime-500">Buyer email</span>
                            </label>
                            <input type="text" {...register("buyerEmail")} readOnly className="border-1 border-lime-500 input input-bordered" />
                        </div>
                    </div>
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lime-500">Buying Date</span>
                            </label>
                            <input type="date" {...register("buyingDate", { required: true })} className="border-1 border-lime-500 input input-bordered" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lime-500">Offer amount</span>
                            </label>
                            <input type="number" {...register("offer", { required: true })} className="border-1 border-lime-500 input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6 p-0 col-span-2">
                        <button className="btn bg-white  hover:bg-lime-400 hover:text-white text-lime-500 border-1 border-lime-400 font-bold">Offer</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default WishlistOffer;