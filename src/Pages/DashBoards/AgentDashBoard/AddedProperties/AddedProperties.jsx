import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import PropertyCard from "../PropertyCard/PropertyCard";

const AddedProperties = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: agentPropertys = [], refetch } = useQuery({
        queryKey: ['agentPropertys'],
        queryFn: async () => {

            const res = await axiosSecure.get(`/property/agent/${user?.email}`)

            return res.data;
        }


    })


    return (
        <div className="mx-12">
            <SectionTitle heading="All Property"></SectionTitle>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    agentPropertys.map(property => <PropertyCard key={property?._id} property={property}></PropertyCard>)
                }
            </div>

        </div>
    );
};

export default AddedProperties;