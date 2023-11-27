import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import useAuth from "../../Hooks/useAuth";


const VerifyedCard = ({ item }) => {

    const { user } = useAuth();

    const { _id, name, email, verify, image, title, area, address, city, country, maximum, minimum, agentImage } = item;

    return (
        <div>
            <div className="bg-base-100 drop-shadow-xl relative">
                <figure><img className="" src={image} alt="Picture" /></figure>
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

                    <div>
                        <div className="flex gap-3 font-bold">
                            <div className="rounded-full w-12 h-12">
                                <img className="rounded-full" src={agentImage} alt="photo" />
                            </div>
                            <div>
                                <h1>{name}</h1>
                                <p className="text-sm font-normal">{email}</p>
                            </div>
                        </div>

                    </div>
                    <div className="divider"></div>
                    <p className="flex items-center gap-2"><span className="text-lg text-teal-200"><FaLocationDot /></span>{city}, {country} </p>
                    <h2 className="card-title font-bold text-teal-500">{title}</h2>
                    <p className="font-semibold">${maximum} - ${minimum} </p>
                    <div className="flex justify-end mt-8 font-bold">

                        <Link to={`/propertys/${_id}`}> <button className="text-white rounded-full p-2 bg-teal-500">Details</button> </Link>

                    </div>



                </div>
            </div>
        </div>
    );
};

export default VerifyedCard;