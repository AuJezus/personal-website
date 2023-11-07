import TopNav from "../ui/TopNav";
import SideNav from "../ui/SideNav";
import { Outlet } from "react-router-dom";

function BlogPage() {
  return (
    <div className="flex items-start">
      <SideNav />
      <div className="flex-grow">
        <TopNav />
        <Outlet />
      </div>
    </div>
  );
}

export default BlogPage;
