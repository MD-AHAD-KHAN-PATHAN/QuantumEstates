import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaFacebookF, FaInstagramSquare, FaTwitter, FaLinkedinIn, FaEnvelopeOpenText, FaPhone } from "react-icons/fa";

const RealStateAgent = () => {


    return (

        <div className="lg:mx-20 md:mx-10 mx-4 mb-20">
            <div>
                <SectionTitle heading="Real Estate Agents" subHeading="With the “list agents shortcode” you can show your agents in any page, alognside with their contact details and link to their agent profile."></SectionTitle>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">

                <div className="bg-base-100 drop-shadow-xl rounded-md">
                    <figure><img className="p-4" src="https://i.ibb.co/7Wf5x9G/lily.jpg" alt="Picture" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Lily Bicharm</h2>
                        <p className="font-semibold">Realtor</p>
                        <p className="text-justify">I am a licensed real estate broker, an active member in local and national real estate industry organizations.</p>
                        <div className="flex justify-between mt-8 text-lime-500 text-xl font-bold">
                            <div className="flex gap-2">
                                <p className="bg-gray-200 p-2 rounded-full "><FaFacebookF /></p>
                                <p className="bg-gray-200 p-2 rounded-full "><FaInstagramSquare /></p>
                                <p className="bg-gray-200 p-2 rounded-full "><FaTwitter /></p>
                                <p className="bg-gray-200 p-2 rounded-full "><FaLinkedinIn /></p>                                
                            </div>
                            <div className="flex gap-2">
                            <p className="bg-gray-200 p-2 rounded-full "><FaEnvelopeOpenText /></p>
                            <p className="bg-gray-200 p-2 rounded-full "><FaPhone /></p>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 drop-shadow-xl rounded-md">
                    <figure><img className="p-4" src="https://i.ibb.co/mC0vksc/jack.jpg" alt="Picture" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Jack London</h2>
                        <p className="font-semibold">Commercial Broker</p>
                        <p className="text-justify">A commercial broker is a professional who facilitates the buying, selling, or leasing of commercial properties.</p>
                        <div className="flex justify-between mt-8 text-lime-500 text-xl font-bold">
                            <div className="flex gap-2">
                                <p className="bg-gray-200 p-2 rounded-full "><FaFacebookF /></p>
                                <p className="bg-gray-200 p-2 rounded-full "><FaInstagramSquare /></p>
                                <p className="bg-gray-200 p-2 rounded-full "><FaTwitter /></p>
                                <p className="bg-gray-200 p-2 rounded-full "><FaLinkedinIn /></p>                                
                            </div>
                            <div className="flex gap-2">
                            <p className="bg-gray-200 p-2 rounded-full "><FaEnvelopeOpenText /></p>
                            <p className="bg-gray-200 p-2 rounded-full "><FaPhone /></p>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-base-100 drop-shadow-xl rounded-md">
                    <figure><img className="p-4" src="https://i.ibb.co/wQbbJfn/dennis.jpg" alt="Picture" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Dennis Albo</h2>
                        <p className="font-semibold">Salesperson</p>
                        <p className="text-justify">A salesperson is responsible for actively seeking out and engaging customer prospects to sell products or services. </p>
                        <div className="flex justify-between mt-8 text-lime-500 text-xl font-bold">
                            <div className="flex gap-2">
                                <p className="bg-gray-200 p-2 rounded-full "><FaFacebookF /></p>
                                <p className="bg-gray-200 p-2 rounded-full "><FaInstagramSquare /></p>
                                <p className="bg-gray-200 p-2 rounded-full "><FaTwitter /></p>
                                <p className="bg-gray-200 p-2 rounded-full "><FaLinkedinIn /></p>                                
                            </div>
                            <div className="flex gap-2">
                            <p className="bg-gray-200 p-2 rounded-full "><FaEnvelopeOpenText /></p>
                            <p className="bg-gray-200 p-2 rounded-full "><FaPhone /></p>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};


export default RealStateAgent;
