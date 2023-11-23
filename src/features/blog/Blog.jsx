import { useParams } from "react-router-dom";
import { useBlog } from "../../services/apiBlogs";
import BlogProfile from "./BlogProfile";
import LoadSpinner from "../../ui/LoadSpinner";
import Editor from "./Editor";
import useScrollUp from "../../utils/useScrollUp";

function Blog() {
  const { id } = useParams();
  const { isPending, error, blog } = useBlog(id);
  const isScrollUp = useScrollUp();

  if (error) return <p>There was an error: {error.message}</p>;

  if (isPending)
    return (
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <LoadSpinner size="lg" />
      </div>
    );

  if (!blog.title) return <p>Could not find this blog :(</p>;

  return (
    <div className="mx-auto flex max-w-7xl grid-cols-[700px_250px] flex-col justify-center items-start gap-6 px-2 py-6 align-top lg:grid xl:grid-cols-[850px_300px] 2xl:px-0">
      <div className="order-1 lg:order-none">
        <Editor initialContent={JSON.parse(blog.content)} />
      </div>
      <div
        className={`lg:sticky w-full transition-all ${
          isScrollUp ? "top-24" : "top-12"
        }`}
      >
        <BlogProfile userId={blog.userId} />
      </div>
    </div>
  );
}

export default Blog;
