import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import RequestedTable from "../RequestedTable/RequestedTable";

const RequestedProperties = () => {

    const { user } = useAuth();

    const axiosSecure = useAxiosSecure();

    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/propertyBought/agent/${user?.email}`)

            return res.data
        }
    })

    console.log(buyers);

    return (
        <div>
            <h1 className="text-4xl font-bold text-center text-lime-400 my-10"> Rquested Properties</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Property Info</th>
                            <th>Buyer Info</th>
                            <th>Offer Price</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            buyers.map(item => <RequestedTable key={item?._id} item={item} refetch={refetch}></RequestedTable>)
                        }



                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default RequestedProperties;