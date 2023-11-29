import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";

const SoldProperties = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: solds = [] } = useQuery({
        queryKey: ['solds'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/sold/agent/${user?.email}`)
            return res?.data;
        }
    })

    return (
        <div className="overflow-x-auto lg:m-20 m-4">
            <h1 className="text-5xl font-bold text-lime-400 text-center mb-8">All Users</h1>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Property Info</th>
                        <th>Buyer Info</th>
                        <th>Sold Price</th>
                        <th>TransactionId</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        solds?.map((sold, indx) => <tr key={sold?._id}>
                            <th>
                                {indx + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div>
                                        <div className="font-bold">{sold?.title}</div>
                                        <div className="text-sm opacity-50">{sold?.location}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h3>{sold?.buyerName}</h3>
                                <p>{sold?.buyerEmail}</p>
                            </td>

                            <td>
                                <h2>${sold?.sold}</h2>
                            </td>
                            <td>
                                <p>{sold?.transactionId}</p>
                            </td>


                        </tr>
                        )}
                </tbody>
            </table>
        </div>
    );
};

export default SoldProperties;