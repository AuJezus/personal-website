import { useParams } from "react-router-dom";
import { useBlog } from "../services/apiBlogs";
import BlogProfile from "../features/blog/BlogProfile";
import LoadSpinner from "../ui/LoadSpinner";
import Editor from "../features/blog/Editor";
import useScrollUp from "../utils/useScrollUp";
import { useAuth } from "../features/user/AuthContext";
import Button from "../ui/Button";
import { BiEdit } from "react-icons/bi";

function Blog() {
  const { id } = useParams();
  const auth = useAuth();
  const { isPending, error, blog } = useBlog(id);
  const isScrollUp = useScrollUp();

  if (error) return <p>There was an error: {error.message}</p>;

  if (isPending)
    return (
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <LoadSpinner size="lg" />
      </div>
    );

  if (!blog.userId) return <p>Could not find this blog :(</p>;

  return (
    <div className="mx-auto flex max-w-7xl grid-cols-[700px_250px] flex-col justify-center items-start gap-6 px-2 py-6 align-top lg:grid xl:grid-cols-[850px_300px] 2xl:px-0">
      <div className="order-1 lg:order-none">
        <Editor content={JSON.parse(blog.content)} />
      </div>
      <div
        className={`lg:sticky w-full transition-all ${
          isScrollUp ? "top-24" : "top-12"
        }`}
      >
        <BlogProfile userId={blog.userId} />
        {auth?.uid === blog.userId && (
          <div className="flex justify-center mt-12">
            <Button type="primary" link="edit">
              <BiEdit /> Edit Blog
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog;
