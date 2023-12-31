import { createBrowserRouter } from "react-router-dom";

import Error from "../Pages/Error/Error";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Registration from "../Pages/Authentication/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/DashBoards/Dashboard/Dashboard";
import AdminProfile from "../Pages/DashBoards/AdminDashBoard/AdminProfile/AdminProfile";
import AgentProfile from "../Pages/DashBoards/AgentDashBoard/AgentProfile/AgentProfile";
import UserProfile from "../Pages/DashBoards/UserDashBoard/UserProfile/UserProfile";
import AddProperty from "../Pages/DashBoards/AgentDashBoard/AddProperty/AddProperty";
import AddedProperties from "../Pages/DashBoards/AgentDashBoard/addedProperties/AddedProperties";
import SoldProperties from "../Pages/DashBoards/AgentDashBoard/SoldProperties/SoldProperties";
import RequestedProperties from "../Pages/DashBoards/AgentDashBoard/RequestedProperties/RequestedProperties";
import ManageProperties from "../Pages/DashBoards/AdminDashBoard/ManageProperties/ManageProperties";
import ManageUsers from "../Pages/DashBoards/AdminDashBoard/ManageUsers/ManageUsers";
import ManageReviews from "../Pages/DashBoards/AdminDashBoard/ManageReviews/ManageReviews";
import Wishlist from "../Pages/DashBoards/UserDashBoard/Wishlist/Wishlist";
import PropertyBought from "../Pages/DashBoards/UserDashBoard/PropertyBought/PropertyBought";
import MyReviews from "../Pages/DashBoards/UserDashBoard/MyReviews/MyReviews";
import PropertyDetails from "../Pages/PropertyDetailsPage/PropertyDetails/PropertyDetails";
import UpdateProperty from "../Pages/DashBoards/AgentDashBoard/UpdateProperty/UpdateProperty";
import VerifyedPropertys from "../Pages/VerifyedPropertys/VerifyedPropertys";
import WishlistOffer from "../Pages/DashBoards/UserDashBoard/WishlistOffer/WishlistOffer";
import Payment from "../Pages/DashBoards/UserDashBoard/Payment/Payment";
import AdvertiseProperties from "../Pages/DashBoards/AdminDashBoard/AdvertiseProperties/AdvertiseProperties";


const Routes = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error></Error>,
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/verifyedPropertyes',
                element: <PrivateRoute><VerifyedPropertys></VerifyedPropertys></PrivateRoute>
            },
            {
                path: '/propertys/:id',
                element: <PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/propertys/${params?.id}`)
            },
            {
                path: '/wishlists/:id',
                element: <PrivateRoute><WishlistOffer></WishlistOffer></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/wishlists/${params?.id}`)
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
        children: [
            // Admin Related Routes
            {
                path: 'adminProfile',
                element: <AdminProfile></AdminProfile>
            },
            {
                path: 'manageProperties',
                element: <ManageProperties></ManageProperties>
            },
            {
                path: 'manageUsers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'manageReviews',
                element: <ManageReviews></ManageReviews>
            },
            {
                path: 'advertise',
                element: <AdvertiseProperties></AdvertiseProperties>
            },

            // Agent Related Routes
            {
                path: 'agentProfile',
                element: <AgentProfile></AgentProfile>
            },
            {
                path: 'addProperty',
                element: <PrivateRoute><AddProperty></AddProperty></PrivateRoute>
            },
            {
                path: 'addedPropertys',
                element: <AddedProperties></AddedProperties>
            },
            {
                path: 'soldPropertys',
                element: <SoldProperties></SoldProperties>
            },
            {
                path: 'requestedPropertys',
                element: <RequestedProperties></RequestedProperties>
            },
            {
                path: 'updateProperty/:id',
                element: <UpdateProperty></UpdateProperty>,
                loader: ({params}) => fetch(`http://localhost:5000/propertys/${params.id}`) 
            },

            // User Related Routes
            {
                path: 'userProfile',
                element: <UserProfile></UserProfile>
            },
            {
                path: 'wishlist',
                element: <Wishlist></Wishlist>,
            },
            {
                path: 'propertyBought',
                element: <PropertyBought></PropertyBought>,
                // loader: ({params}) => fetch(`http://localhost:5000/propertyBought/user/${params.email}`)
            },
            {
                path: 'propertyBought/user/pay/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`http://localhost:5000/propertyBought/user/pay/${params?.id}`)
            },
            {
                path: 'myReviews',
                element: <MyReviews></MyReviews>
            },
            
        ]
    }
])

export default Routes;