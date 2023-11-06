import { Outlet } from "react-router-dom";
import TopNav from "../ui/TopNav";
import SideNav from "../ui/SideNav";
import { useRef } from "react";

function BlogPage() {
  const scrollRef = useRef();

  return (
    <div className="flex h-full flex-col">
      <TopNav scrollRef={scrollRef} />
      <SideNav scrollRef={scrollRef}>
        <Outlet />
      </SideNav>
    </div>
  );
}

export default BlogPage;
