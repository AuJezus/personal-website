import { useParams } from "react-router-dom";
import { getBlog } from "../../services/apiBlogs";
import { useQuery } from "@tanstack/react-query";
import BlogProfile from "./BlogProfile";
import LoadSpinner from "../../ui/LoadSpinner";
import { BlogProvider } from "./BlogContext";
import Editor from "./Editor";

function Blog() {
  const { id: blogId } = useParams();
  const {
    isPending,
    isError,
    data: blog,
    error,
  } = useQuery({
    queryKey: ["blogs", blogId],
    queryFn: () => getBlog(blogId),
  });

  if (isError) return <p>There was an error: {error.message}</p>;

  if (isPending)
    return (
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <LoadSpinner size="lg" />
      </div>
    );

  return (
    <div className="mx-auto flex max-w-7xl grid-cols-[700px_250px] flex-col justify-center gap-6 px-2 py-6 align-top lg:grid xl:grid-cols-[850px_300px] 2xl:px-0">
      <BlogProvider initialState={blog}>
        <div className="order-1 lg:order-none">
          <Editor initialContent={JSON.parse(blog.content)} />
        </div>
        <BlogProfile />
      </BlogProvider>
    </div>
  );
}

export default Blog;
