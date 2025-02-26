import { Outlet } from "react-router";
import MenuDashboard from "../components/MenuDashboard";

const AdminLayout = () => {
    return (
        <div className="h-screen flex">
            <MenuDashboard />
            <div className="overflow-auto flex-1 p-[20px]">
                <Outlet />
            </div>
        </div>
    );
}

export default AdminLayout;