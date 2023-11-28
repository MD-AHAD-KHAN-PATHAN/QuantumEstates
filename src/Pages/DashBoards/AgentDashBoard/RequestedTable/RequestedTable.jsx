import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";


const RequestedTable = ({ item, refetch }) => {

    const { _id, propertyImage, title, location, buyerName, buyerEmail, offer, status } = item;

    const axiosSecure = useAxiosSecure();

    const handleAccept = (id) => {

        const statusChange = {
            statuss: 'accepted'
        }

        axiosSecure.patch(`/propertyBought/agent/${id}`, statusChange)
            .then(res => {
                if (res.data?.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "This bid is Accepted",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    refetch();
                }
            })
    }

    const handleReject = (id) => {

        const statusChange = {
            statuss: 'rejected'
        }

        axiosSecure.patch(`/propertyBought/agent/${id}`, statusChange)
            .then(res => {
                if (res.data?.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "This bid is Rejected",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    refetch();
                }
            })
    }

    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={propertyImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                        <div className="text-sm opacity-50">{location}</div>
                    </div>
                </div>
            </td>
            <td>
                {buyerName}
                <br />
                <span className="badge badge-ghost badge-sm">{buyerEmail}</span>
            </td>
            <td>{offer}</td>
            <th>
                {
                    status === 'accepted' && <button className="btn btn-ghost btn-xs bg-lime-700 font-bold text-white">Accepted</button>
                }
                {
                    status === 'bought' && <button className="btn btn-ghost btn-xs">Sold out</button>
                }
                {
                    status === 'rejected' && <button className="btn btn-ghost btn-xs bg-red-700 font-bold text-white">Rejected</button>
                }
                {
                    status === 'pending' && <button onClick={() => handleAccept(_id)} className="btn btn-ghost btn-xs bg-yellow-300 font-bold text-white">Accept</button>
                }

            </th>
            <th>
                {
                    status === 'accepted' && <button className="btn btn-ghost btn-xs bg-lime-400 font-bold text-white">Accepted</button>
                }
                {
                    status === 'rejected' && <button className="btn btn-ghost btn-xs bg-red-400 font-bold text-white">Rejected</button>
                }
                {
                    status === 'pending' && <button onClick={() => handleReject(_id)} className="btn btn-ghost btn-xs bg-red-700 font-bold text-white">Reject</button>
                }
                {
                    status === 'bought' && <button className="btn btn-ghost btn-xs">Sold out</button>
                }
            </th>
        </tr>
    );
};

export default RequestedTable;