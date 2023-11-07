import TopNav from "../ui/TopNav";
import SideNav from "../ui/SideNav";
import { Outlet } from "react-router-dom";

function BlogPage() {
  return (
    <div className="flex items-start">
      <SideNav />
      <div className="w-full flex-grow lg:w-auto">
        <TopNav />
        <Outlet />
      </div>
    </div>
  );
}

export default BlogPage;
