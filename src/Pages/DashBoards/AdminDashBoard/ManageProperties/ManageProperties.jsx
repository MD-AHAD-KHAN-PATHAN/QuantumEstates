import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import usePropertys from "../../../../Hooks/usePropertys";

const ManageProperties = () => {

    const [propertys, refetch] = usePropertys();

    const axiosSecure = useAxiosSecure();


    const handleVerify = (id) => {

        console.log(id);
        const verifiedStatus = {
            status: "verified",
        };

        axiosSecure.patch(`/propertys/${id}`, verifiedStatus)
            .then(res => {
                if (res.data?.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Property Verified",
                        showConfirmButton: false,
                        timer: 2000

                    });
                    refetch();
                }
            })




    }

    const handleReject = (id) => {

        console.log(id);
        const rejectedStatus = {
            status: "rejected",
        };

        axiosSecure.patch(`/propertys/${id}`, rejectedStatus)
            .then(res => {
                if (res.data?.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Property Rejected",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    refetch();
                }
            })



    }


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
                        <th>Status</th>
                        <th>Status</th>
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
                                {
                                    property?.verify === "verified" && <p>{property?.verify}</p>
                                }
                                {
                                    property?.verify === "rejected" && <p>{property?.verify}</p>
                                }
                                {
                                    property?.verify === "pending" && <button onClick={() => handleVerify(property?._id)} className="bg-red-400 text-white p-2 rounded-full font-semibold">verify</button>
                                }
                            </td>
                            <td>
                                {
                                    property?.verify === "pending" && <button onClick={() => handleReject(property?._id)} className="bg-red-700 text-white p-2 rounded-full font-semibold">reject</button>
                                }
                                {
                                    property?.verify === "verified" && <p>{property?.verify}</p>
                                }
                                {
                                    property?.verify === "rejected" && <p>{property?.verify}</p>
                                }
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageProperties;