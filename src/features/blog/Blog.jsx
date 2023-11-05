import { useParams } from "react-router-dom";
import { getBlog } from "../../services/apiBlogs";
import { useQuery } from "@tanstack/react-query";
import BlogContent from "./BlogContent";
import BlogHeader from "./BlogHeader";
import BlogProfile from "./BlogProfile";
import BlogHeadLinks from "./BlogHeadlinks";

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

  if (isPending) return <p>Loading...</p>;

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-[1000px_1fr] gap-6 py-6 align-top">
      <BlogHeader blog={blog} />
      <BlogProfile blog={blog} />
      <BlogContent blog={blog} />
      <BlogHeadLinks content={blog.content} />
    </div>
  );
}

export default Blog;
