import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";


const BoughtCard = ({ item }) => {

    const { _id, propertyImage, status, title, location, offer, agentName, agentEmail, agentImage, transactionId } = item;

    return (

        <div className="bg-base-100 drop-shadow-xl">
            <figure><img className="" src={propertyImage} alt="Picture" /></figure>

            <div className="p-5">
                <p className="flex items-center gap-2"><span className="text-lg text-teal-200"><FaLocationDot /></span>{location} </p>
                <h2 className="card-title font-bold text-teal-500">{title}</h2>
                <p className="font-bold">Offer Price : {offer}</p>

                <div className="flex justify-between mt-8 font-bold">

                    {
                        status === "accepted" && <Link to={`/dashboard/propertyBought/user/pay/${_id}`}><button className="bg-lime-400 p-1.5 font-semibold text-white rounded-md">Pay</button></Link>
                    }
                    {
                        status === "rejected" && <h1 className="bg-red-400 p-1.5 font-semibold text-white rounded-md">{status}</h1>
                    }
                    {
                        status === "pending" && <h1 className="bg-yellow-300 p-1.5 font-semibold text-white rounded-md">{status}</h1>
                    }
                    {
                        status === "bought" && <h1 className="bg-green-500 p-1.5 font-semibold text-white rounded-md">bought</h1>
                    }

                </div>
                {
                    transactionId && <p>TransactionId: {transactionId}</p>
                }

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


    );
};

export default BoughtCard;