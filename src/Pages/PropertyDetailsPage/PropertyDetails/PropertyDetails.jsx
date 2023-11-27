import { useLoaderData, useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const PropertyDetails = () => {

    const HomeDetails = useLoaderData();
    const navigate = useNavigate();

    const { _id, name, email, description, verify, image, title, area, address, city, country, maximum, minimum, agentImage, bedroom, bathrooms, size, phone } = HomeDetails;

    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const handleWishlist = () => {

        const wishlistData = {
            agentName: HomeDetails.name,
            agentEmail: HomeDetails.email,
            agentImage: HomeDetails.agentImage,
            agentPhone: HomeDetails.phone,
            title: HomeDetails.title,
            description: HomeDetails.description,
            PropertyImage: HomeDetails.image,
            verify: HomeDetails.verify,
            area: HomeDetails.area,
            address: HomeDetails.address,
            city: HomeDetails.city,
            country: HomeDetails.country,
            maximum: HomeDetails.maximum,
            minimum: HomeDetails.minimum,
            bedroom: HomeDetails.bedroom,
            bathrooms: HomeDetails.bathrooms,
            size: HomeDetails.size,
            offerStatus: 'none',
            buyerName: user?.displayName,
            buyerEmail: user?.email,
            buyerImage: user?.photoURL,

        }
        console.log(wishlistData);
        axiosPublic.post('/wishlists', wishlistData)
        .then(res => {
            if (res.data.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "This property added your wishlist",
                    showConfirmButton: false,
                    timer: 2000
                });

                navigate('/dashboard/wishlist');

            }
        })

    }


    return (
        <>
            <div className=" lg:mx-20 md:mx-10 mx-6 mt-10">
                <div className="md:flex justify-between">
                    <div>
                        <button className="p-1.5 bg-teal-400 text-white rounded-md font-bold">{verify}</button>
                        <h1 className="lg:text-4xl md:text-2xl text-xl font-bold text-lime-400 my-4">{title}</h1>
                        <p className="font-semibold flex items-center gap-2"><FaLocationDot /> {area}, {address}, {city}, {country}</p>
                    </div>
                    <div className="flex items-center">
                        <p className="text-3xl font-bold text-lime-400">$ {maximum}</p>
                    </div>
                </div>
                <div className="my-6">
                    <div className="">
                        <img className="max-h-[500px] w-full" src={image} alt="" />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 py-6 bg-slate-100">
                    <div className="ml-6 p-4 rounded-md bg-white">
                        <h1 className="text-lg font-bold my-2">Description</h1>
                        <p>{description}</p>
                    </div>
                    <div>
                        <div className="p-4 rounded-md mr-6 bg-white">
                            <h1 className="text-lg font-bold my-2">Property Address</h1>
                            <div className="grid grid-cols-2 gap-2">
                                <p><span className="font-bold">Address : </span>{address}</p>
                                <p><span className="font-bold">City : </span>{city}</p>
                                <p><span className="font-bold">Area : </span>{area}</p>
                                <p><span className="font-bold">Country : </span>{country}</p>
                            </div>
                        </div>
                    </div>
                    <div className="ml-6 p-4 rounded-md bg-white">
                        <h1 className="text-lg font-bold my-2">Property Details</h1>
                        <div className="grid grid-cols-2 gap-2">
                            <p><span className="font-bold">Property size : </span>{size} sq<sup>2</sup></p>
                            <p><span className="font-bold">Maximum Price : </span>${maximum}</p>
                            <p><span className="font-bold">Minimum Price : </span>${minimum}</p>
                            <p><span className="font-bold">Bedroom : </span>{bedroom}</p>
                            <p><span className="font-bold">Bathroom : </span>{bathrooms}</p>
                            <p><span className="font-bold">Floors No : </span>1</p>
                        </div>
                    </div>
                    <div>
                        <div className="p-4 rounded-md mr-6 bg-white">
                            <h1 className="text-lg font-bold my-2">Agent Details</h1>
                            <img className="max-w-[200px] flex justify-center" src={agentImage} alt="" />
                            <div className="grid grid-cols-2 gap-2 mt-4">
                                <p><span className="font-bold">Name : </span>{name}</p>
                                <p><span className="font-bold">Email : </span>{email}</p>
                                <p><span className="font-bold">Phone : </span>{phone}</p>
                                <p><span className="font-bold">Country : </span>{country}</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleWishlist} className="p-4 bg-lime-400 font-bold text-white rounded-xl m-4">Add to wishlist</button>
                </div>

            </div>

        </>
    );
};

export default PropertyDetails;