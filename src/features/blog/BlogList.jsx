import { useQuery } from "@tanstack/react-query";
import { getAllBlogs } from "../../services/apiBlogs";
import { Link } from "react-router-dom";
import {
  BiCalendarHeart,
  BiCategory,
  BiTag,
  BiTagAlt,
  BiUser,
} from "react-icons/bi";
import dayjs from "dayjs";
import { IconContext } from "react-icons";

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

  function getFirstParaTextSummary(content) {
    return (
      JSON.parse(content)
        .content.find((n) => n.type === "paragraph")
        .content.find((n) => n.type === "text")
        .text.split(" ")
        .slice(0, 15)
        .join(" ") + "..."
    );
  }

  return (
    <div className="p-2 max-w-6xl xl:gap-12 2xl:gap-x-18 2xl:max-w-screen-7xl  mx-auto lg:p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <Link
          className="border-2 border-violet-500 border-opacity-50 p-2 block rounded-lg"
          key={blog.id}
          to={`/blog/${blog.id}`}
        >
          <p className="text-3xl mb-2 text-neutral-300 capitalize font-bold">
            {blog.title}
          </p>
          <p className="text-sm">{getFirstParaTextSummary(blog.content)}</p>

          <div className="flex flex-wrap gap-4 mt-4">
            <IconContext.Provider value={{ className: "text-violet-500" }}>
              <div className="flex items-center gap-2">
                <BiUser />
                {blog.userId.slice(0, 15)}
              </div>
              <div className="flex items-center gap-2">
                <BiCalendarHeart />
                {dayjs(blog.createdAt.toDate()).format("MMM DD, YYYY")}
              </div>
              <div className="flex items-center gap-2">
                <BiCategory />
                {blog.category.id}
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {blog.tags.length !== 0 && <BiTagAlt />}
                {blog.tags.map((tag) => (
                  <span
                    className="flex items-center gap-3 rounded-lg bg-neutral-800 px-2 py-1"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </IconContext.Provider>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BlogList;
