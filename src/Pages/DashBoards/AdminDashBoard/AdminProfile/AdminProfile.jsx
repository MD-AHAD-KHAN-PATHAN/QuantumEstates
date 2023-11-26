import useAuth from "../../../../Hooks/useAuth";

const AdminProfile = () => {

    const {user} = useAuth();

    return (
        <div className="md:m-20 flex justify-center m-10">
            <div className="md:flex gap-4">
                <div className="">
                    <img className="max-h-52 rounded-3xl" src={user?.photoURL} alt="" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold">Name : {user?.displayName}</h1>
                    <p className="font-semibold">Email : {user?.email}</p>
                    <p className="text-xl font-bold">Role : Admin</p>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;