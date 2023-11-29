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

    const sum = solds.reduce((a, c) => {
        return a + parseInt(c.sold);
    }, 0)


    return (
        <>

            <div className="overflow-x-auto lg:m-20 m-4">
            <h1 className="text-5xl font-bold text-lime-400 text-center mb-8">Sold Propertys</h1>
                <div className="flex justify-end mr-20 mb-4">
                    <div className="p-4 bg-green-100 rounded-md">
                        <h1 className="font-bold text-lime-600">Total Sold Amount</h1>
                        <h1 className="font-bold text-2xl text-green-500">$ {sum}</h1>
                    </div>
                </div>
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
        </>
    );
};

export default SoldProperties;