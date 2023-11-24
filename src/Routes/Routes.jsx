import { createBrowserRouter } from "react-router-dom";

import Error from "../Pages/Error/Error";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import AddProperty from "../Pages/AddProperty/AddProperty";


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
                
            },
            {
                path: '/login',
                
            },
            {
                path: '/addProperty',
                element: <AddProperty></AddProperty>
            }
        ]
    }
])

export default Routes;