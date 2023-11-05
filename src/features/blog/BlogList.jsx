import { useQuery } from "@tanstack/react-query";
import { getAllBlogs } from "../../services/apiBlogs";

function BlogList() {
  const {
    isPending,
    isError,
    data: blogs,
    error,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: getAllBlogs,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  blogs.map((b) => console.log(b));
  return (
    <div>
      {blogs.map((blog) => (
        <a key={blog.id} href={`/blog/${blog.id}`}>
          {blog.title}
        </a>
      ))}
    </div>
  );
}

export default BlogList;
