import usePropertys from "../../../../Hooks/usePropertys";

const ManageProperties = () => {

    const [propertys, refetch] = usePropertys();
    return (
        <div className="overflow-x-auto lg:m-16 md:m-10 m-4">
            <h1 className="text-5xl font-bold text-lime-400 text-center mb-8">All propertys</h1>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Property Info</th>
                        <th>Agent Info</th>
                        <th>Price Range</th>
                        <th>Verify</th>
                        <th>Reject</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        propertys.map((property, indx) => <tr key={property?._id}>
                            <th>
                                {indx + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={property?.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{property?.title}</div>
                                        <div className="text-sm opacity-50">{property?.area}, {property?.city}, {property?.address}, {property?.country}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="font-bold">{property?.name}</div>
                                <div className="text-sm opacity-50">{property?.email}</div>
                            </td>

                            <td>
                                <div>${property?.maximum} - ${property?.minimum}</div>
                            </td>
                            <td>
                                <button className="bg-red-400 text-white p-2 rounded-full font-semibold">verify</button>
                            </td>
                            <td>
                                <button className="bg-red-700 text-white p-2 rounded-full font-semibold">reject</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageProperties;