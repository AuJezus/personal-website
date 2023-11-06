import TopNav from "../ui/TopNav";
import SideNav from "../ui/SideNav";
import Blog from "../features/blog/Blog";

function BlogPage() {
  return (
    <div className="flex items-start">
      <SideNav />
      <div className="flex-grow">
        <TopNav />
        <Blog />
      </div>
    </div>
  );
}

export default BlogPage;
