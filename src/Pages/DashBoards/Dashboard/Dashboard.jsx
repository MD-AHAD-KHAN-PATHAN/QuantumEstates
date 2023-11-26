import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

    const isAdmin = true;
    const isAgent = false;

    return (

        <>
            <div className="md:flex">
                <div className="lg:w-60 md:w-40 min-h-screen w-full bg-lime-600">
                    <ul className="menu">
                        {
                            isAdmin && <>

                                <li><NavLink to="/dashboard/adminProfile"> <FaHome></FaHome>Admin Profile</NavLink></li>
                                <li><NavLink to="/dashboard/manageProperties"> <FaHome></FaHome>Manage Properties</NavLink></li>
                                <li><NavLink to="/dashboard/manageUsers"> <FaHome></FaHome>Manage Users</NavLink></li>
                                <li><NavLink to="/dashboard/manageReviews"> <FaHome></FaHome>Manage reviews</NavLink></li>

                            </>
                        }
                        {
                            isAgent && <>
                                <li><NavLink to="/dashboard/agentProfile"> <FaHome></FaHome>Agent Profile</NavLink></li>
                                <li><NavLink to='/dashboard/addProperty'>Add Property</NavLink></li>
                                <li><NavLink to='/dashboard/addedPropertys'>Added Propertys</NavLink></li>
                                <li><NavLink to='/dashboard/soldPropertys'>Sold Propertys</NavLink></li>
                                <li><NavLink to='/dashboard/requestedPropertys'>Requested Propertys</NavLink></li>
                            </>
                        }
                        {
                            !isAdmin && !isAgent && <>

                                <li><NavLink to="/dashboard/userProfile"> <FaHome></FaHome>User Profile</NavLink></li>
                                <li><NavLink to="/dashboard/wishlist"> <FaHome></FaHome>Wishlist</NavLink></li>
                                <li><NavLink to="/dashboard/propertyBought"> <FaHome></FaHome>Property Bought</NavLink></li>
                                <li><NavLink to="/dashboard/myReviews"> <FaHome></FaHome>My Rreviews</NavLink></li>

                            </>
                        }


                        {/* Shared nav links */}
                        <div className="divider"></div>

                        <li><NavLink to="/"> <FaHome></FaHome>Home</NavLink></li>


                    </ul>

                </div>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>

            </div>
        </>

    );
};

export default Dashboard;