import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const DashboardNavbar = () => {

    const isAdmin = true;
    const isAgent = false;

    const navLink = <>

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
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <a className="btn">Button</a> */}
            </div>
        </div>
    );
};

export default DashboardNavbar;