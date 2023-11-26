

import useAllUsers from "../../../../Hooks/useAllUsers";

const ManageUsers = () => {

    const [users, refetch] = useAllUsers();
    

    return (
        <div className="overflow-x-auto m-20">
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
                            <button className="bg-green-400 text-white p-2 rounded-full font-semibold">Make Admin</button>
                        </td>

                        <td><button className="bg-yellow-300 text-white p-2 rounded-full font-semibold">Make Agent</button></td>
                        <td>
                            <button className="bg-red-400 text-white p-2 rounded-full font-semibold">Make Fraud</button>
                        </td>
                        <td>
                            <button className="bg-red-700 text-white p-2 rounded-full font-semibold">Delete user</button>
                        </td>
                    </tr>)
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;