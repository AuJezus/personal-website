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
    <div className="mx-auto flex max-w-7xl grid-cols-[auto_1fr] flex-col gap-6 px-2 py-6 align-top lg:grid xl:grid-cols-[1000px_1fr] 2xl:px-0">
      <BlogHeader blog={blog} />
      <BlogProfile blog={blog} />
      <BlogContent blog={blog} />
      <BlogHeadLinks content={blog.content} />
    </div>
  );
}

export default Blog;
