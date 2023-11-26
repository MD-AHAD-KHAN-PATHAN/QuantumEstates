import { Outlet } from "react-router-dom";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";

const Dashboard = () => {

    return (

        <>
            
            <div>
                <DashboardNavbar></DashboardNavbar>
                <Outlet></Outlet>
            </div>
        </>

    );
};

export default Dashboard;