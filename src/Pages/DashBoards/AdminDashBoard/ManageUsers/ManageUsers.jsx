

import Swal from "sweetalert2";
import useAdmin from "../../../../Hooks/useAdmin";
import useAgent from "../../../../Hooks/useAgent";
import useAllUsers from "../../../../Hooks/useAllUsers";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useFraud from "../../../../Hooks/useFraud";

const ManageUsers = () => {

    const [users, refetch] = useAllUsers();

    const [isAdmin] = useAdmin();
    const [isAgent] = useAgent();
    const [isFraud] = useFraud();

    const axiosSecure = useAxiosSecure();

    const handleAdmin = (id, email) => {
        console.log(id);
        const changeRole = {
            role: 'admin'
        }

        axiosSecure.patch(`/users/admin/${id}`, changeRole)
            .then(res => {
                if (res.data?.modifiedCount > 0) {
                    Swal.fire({
                        title: "Good job!",
                        text: `${email} is now Admin`,
                        icon: "success"
                    });
                    refetch();
                }
            })

    }

    const handleAgent = (id, email) => {
        console.log(id);
        const changeRole = {
            role: 'agent'
        }

        axiosSecure.patch(`/users/admin/${id}`, changeRole)
            .then(res => {
                if (res.data?.modifiedCount > 0) {
                    Swal.fire({
                        title: "Good job!",
                        text: `${email} is now Agent`,
                        icon: "success"
                    });
                    refetch();
                }
            })

    }

    const handleFraud = (id, email) => {
        console.log(id);
        const changeRole = {
            role: 'fraud'
        }

        axiosSecure.patch(`/users/admin/${id}`, changeRole)
            .then(res => {
                if (res.data?.modifiedCount > 0) {
                    Swal.fire({
                        title: "Good job!",
                        text: `${email} is Fraud`,
                        icon: "success"
                    });
                    refetch();
                }
            })

    }

    const handleDelete = (id, email) => {
        console.log(id);

        axiosSecure.delete(`/users/admin/${id}`)
            .then(res => {
                if (res.data?.deletedCount > 0) {
                    Swal.fire({
                        title: "Good job!",
                        text: `${email} user is Deleted successfull`,
                        icon: "success"
                    });
                    refetch();
                }
            })

    }

    return (
        <div className="overflow-x-auto lg:m-20 m-4">
            <h1 className="text-5xl font-bold text-lime-400 text-center mb-8">All Users</h1>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Picture</th>
                        <th>Admin Role</th>
                        <th>Agent Role</th>
                        <th>Fraud</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, indx) => <tr key={user?._id}>
                            <th>
                                {indx + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user?.photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user?.name}</div>
                                        <div className="text-sm opacity-50">{user?.email}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {
                                    user?.role === 'admin' && <p>Admin</p>
                                }
                                {
                                    user?.role === 'agent' && <p>Agent</p>
                                }
                                {
                                    user?.role === 'fraud' && <p>Fraud</p>
                                }
                                {
                                    user?.role === 'user' && <button onClick={() => handleAdmin(user?._id, user?.email)} className="bg-green-400 text-white p-2 rounded-full font-semibold">Make Admin</button>
                                }
                            </td>

                            <td>
                                {
                                    user?.role === 'admin' && <p>Admin</p>
                                }
                                {
                                    user?.role === 'agent' && <p>Agent</p>
                                }
                                {
                                    user?.role === 'fraud' && <p>Fraud</p>
                                }
                                {
                                    user?.role === 'user' && <button onClick={() => handleAgent(user?._id, user?.email)} className="bg-yellow-300 text-white p-2 rounded-full font-semibold">Make Agent</button>
                                }

                            </td>
                            <td>
                                {
                                    user?.role === 'admin' && <p>Admin</p>
                                }
                                {
                                    user?.role === 'agent' && <p>Agent</p>
                                }
                                {
                                    user?.role === 'fraud' && <p>Fraud</p>
                                }
                                {
                                    user?.role === 'user' && <button onClick={() => handleFraud(user?._id, user?.email)} className="bg-red-400 text-white p-2 rounded-full font-semibold">Make Fraud</button>
                                }

                            </td>
                            <td>
                                <button onClick={() => handleDelete(user?._id, user?.email)} className="bg-red-700 text-white p-2 rounded-full font-semibold">Delete user</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;