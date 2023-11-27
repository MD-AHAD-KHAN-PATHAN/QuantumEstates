import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";


const WishlistCard = ({list, refetch}) => {

    const {_id, PropertyImage, title, verify, agentName, agentEmail, agentImage, area, address, city, country, maximum, minimum, bedroom, bathrooms, buyerName, buyerEmail, buyerImage} = list;

    const axiosPublic = useAxiosPublic();

    const handleRemove = (id) => {
        console.log(id);

        axiosPublic.delete(`/wishlists/${id}`)
            .then(res => {

                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "oH!",
                        text: "Successfully deleted your wishlist property!",
                        icon: "success"
                    });
                    refetch();
                }
            })
    }

    return (

        <div>
            <div className="bg-base-100 drop-shadow-xl relative">
                <figure><img className="" src={PropertyImage} alt="Picture" /></figure>
                {
                    verify === "verified" && <h1 className="absolute top-4 right-4 bg-lime-400 p-1.5 font-semibold text-white rounded-md">{verify}</h1>
                }
                {
                    verify === "rejected" && <h1 className="absolute top-4 right-4 bg-red-400 p-1.5 font-semibold text-white rounded-md">{verify}</h1>
                }
                {
                    verify === "pending" && <h1 className="absolute top-4 right-4 bg-green-400 p-1.5 font-semibold text-white rounded-md">{verify}</h1>
                }
                <div className="p-5">
                    <p className="flex items-center gap-2"><span className="text-lg text-teal-200"><FaLocationDot /></span>{city}, {country} </p>
                    <h2 className="card-title font-bold text-teal-500">{title}</h2>
                    <p className="font-semibold">${maximum} - ${minimum} </p>
                    <div className="flex justify-between mt-8 font-bold">

                        <button onClick={() => handleRemove(_id)} className="text-white rounded-full p-2 bg-red-500">Remove</button>
                        <Link to={`/wishlists/${_id}`}> <button className="text-white rounded-full p-2 bg-teal-500">Make an offer</button> </Link>

                    </div>

                    <div className="divider"></div>
                    <div>
                        <div className="flex gap-3 font-bold">
                            <div className="rounded-full w-12 h-12">
                                <img className="rounded-full" src={agentImage} alt="photo" />
                            </div>
                            <div>
                                <h1>{name}</h1>
                                <p className="text-sm font-normal">{agentName}</p>
                                <p>{agentEmail}</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>

    );
};

export default WishlistCard;