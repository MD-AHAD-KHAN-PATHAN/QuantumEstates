import { createBrowserRouter } from "react-router-dom";

import Error from "../Pages/Error/Error";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";


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
            }
        ]
    }
])

export default Routes;