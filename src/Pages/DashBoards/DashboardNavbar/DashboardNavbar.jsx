import { NavLink } from "react-router-dom";
import { FaHome, FaProductHunt, FaStar, FaUser, FaCommentDollar, FaList, FaDollarSign } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";

import { MdBookmarkAdded } from "react-icons/md";
import useAdmin from "../../../Hooks/useAdmin";
import useAgent from "../../../Hooks/useAgent";
import useFraud from "../../../Hooks/useFraud";


const DashboardNavbar = () => {

    const [isAdmin] = useAdmin();
    const [isAgent] = useAgent();
    const [isFraud] = useFraud();

    const navLink = <>

        {
            isAdmin && <>
                <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                <li><NavLink to="/dashboard/adminProfile"> <FaUser></FaUser>Admin Profile</NavLink></li>
                <li><NavLink to="/dashboard/manageProperties"> <FaHome></FaHome>Manage Properties</NavLink></li>
                <li><NavLink to="/dashboard/manageUsers"> <MdManageAccounts ></MdManageAccounts >Manage Users</NavLink></li>
                <li><NavLink to="/dashboard/manageReviews"> <FaStar></FaStar>Manage reviews</NavLink></li>
                <li><NavLink to="/dashboard/advertise"> <RiAdvertisementFill />Advertise property</NavLink></li>

            </>
        }
        {
            isAgent && <>
                <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                <li><NavLink to="/dashboard/agentProfile"> <FaUser></FaUser>Agent Profile</NavLink></li>
                <li><NavLink to='/dashboard/addProperty'><FaHome></FaHome> Add Property</NavLink></li>
                <li><NavLink to='/dashboard/addedPropertys'> <MdBookmarkAdded></MdBookmarkAdded>  Added Propertys</NavLink></li>
                <li><NavLink to='/dashboard/soldPropertys'> <FaCommentDollar></FaCommentDollar> Sold Propertys</NavLink></li>
                <li><NavLink to='/dashboard/requestedPropertys'> <FaProductHunt></FaProductHunt> Requested Propertys</NavLink></li>
            </>
        }
        {
            isFraud && <>
                <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                <li><NavLink to="/dashboard/agentProfile"> <FaUser></FaUser>Agent Profile</NavLink></li>
                <li><NavLink to='/dashboard/addProperty'><FaHome></FaHome> Add Property</NavLink></li>
                <li><NavLink to='/dashboard/addedPropertys'> <MdBookmarkAdded></MdBookmarkAdded>  Added Propertys</NavLink></li>
                <li><NavLink to='/dashboard/soldPropertys'> <FaCommentDollar></FaCommentDollar> Sold Propertys</NavLink></li>
                <li><NavLink to='/dashboard/requestedPropertys'> <FaProductHunt></FaProductHunt> Requested Propertys</NavLink></li>
            </>
        }
        {
            !isAdmin && !isAgent && !isFraud && <>
                <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                <li><NavLink to="/dashboard/userProfile"> <FaUser></FaUser>User Profile</NavLink></li>
                <li><NavLink to="/dashboard/wishlist"> <FaList></FaList>Wishlist</NavLink></li>
                <li><NavLink to="/dashboard/propertyBought"> <FaDollarSign></FaDollarSign>Property Bought</NavLink></li>
                <li><NavLink to="/dashboard/myReviews"> <FaStar></FaStar>My Reviews</NavLink></li>

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