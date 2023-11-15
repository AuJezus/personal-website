import { useParams } from "react-router-dom";
import LoadSpinner from "../../ui/LoadSpinner";
import { useQuery } from "@tanstack/react-query";
import { getBlog } from "../../services/apiBlogs";
import { BlogProvider } from "./BlogContext";
import BlogContent from "./BlogContent";
import BlogHeadLinks from "./BlogHeadLinks";
import BlogHeader from "./BlogHeader";

function BlogEditable() {
  const { id: blogId } = useParams();
  const {
    isPending,
    isError,
    data: blog,
    error,
  } = useQuery({
    queryKey: ["blogs", blogId || "new"],
    queryFn: () => (blogId ? getBlog(blogId) : {}),
  });

  if (isError) return <p>There was an error: {error.message}</p>;

  if (isPending)
    return (
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <LoadSpinner size="lg" />
      </div>
    );

  return (
    <div className="w-[700px]">
      <BlogProvider initialState={blog}>
        <BlogHeader editable={true} />
        <BlogContent editable={true} />
        <BlogHeadLinks />
      </BlogProvider>
    </div>
  );
}

export default BlogEditable;
