import { Outlet } from "react-router-dom";
import SideNav from "../ui/SideNav";
import TopNav from "../ui/TopNav";

function AppLayout() {
  return (
    <div className="flex items-start">
      <SideNav />
      <div className="relative w-full flex-grow lg:w-auto">
        <TopNav />
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
