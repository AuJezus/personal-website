import { useBlogsWithUserInfo } from "../../services/apiBlogs";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import LoadSpinner from "../../ui/LoadSpinner";
import { BiCategory } from "react-icons/bi";
import { useEffect, useState } from "react";
import BlogListFilter from "./BlogListFilter";
import { Timestamp } from "firebase/firestore";

function BlogList({ initialFilter = {} }) {
  const [filter, setFilter] = useState(initialFilter);
  const { isPending, error, blogs } = useBlogsWithUserInfo(filter);

  useEffect(() => setFilter(initialFilter), [initialFilter]);

  function getFirstParaTextSummary(content) {
    return (
      JSON.parse(content)
        .content.find((n) => n.type === "paragraph")
        .content?.find((n) => n.type === "text")
        .text.split(" ")
        .slice(0, 10)
        .join(" ") + "..."
    );
  }

  function addTag(tag) {
    if (!filter.tags) setFilter((f) => ({ ...f, tags: [] }));

    if (!filter.tags?.includes(tag))
      setFilter((f) => ({ ...f, tags: [...f.tags, tag] }));
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="p-4 2xl:px-0 lg:p-8 max-w-screen-xl mx-auto ">
      <BlogListFilter filter={filter} setFilter={setFilter} />
      {isPending && (
        <div className="flex justify-center">
          <LoadSpinner size="lg" />
        </div>
      )}
      {!isPending && (
        <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {blogs.length === 0 && <p>Could not find any posts :(</p>}
          {blogs.map((blog) => {
            return (
              <div
                key={blog.id}
                className="bg-neutral-800 py-4 px-2 flex flex-col justify-between hover:ring-2 hover:-translate-y-2 rounded-br-2xl ring-violet-500 hover:rounded-lg transition-all"
              >
                <div>
                  <div className="flex justify-between mb-4">
                    <Link
                      to={`/user/${blog.user.id ? blog.user.id : "deleted"}`}
                      className="flex items-center gap-2 group"
                    >
                      <img
                        className="w-8 h-8 object-cover rounded-full"
                        src={blog.user.id ? blog.user.photoURL : ""}
                        alt="Profile image"
                      />
                      <span className="italic font-bold group-hover:text-neutral-300 group-hover:underline group-hover:decoration-violet-500 transition-all decoration-transparent">
                        {blog.user.id ? blog.user.displayName : "Deleted User"}
                      </span>
                    </Link>

                    <div className="flex items-center gap-2">
                      <span className="text-sm">In</span>
                      <Link
                        to=""
                        className="flex items-center gap-1 text-violet-500 hover:scale-105 transition-transform"
                      >
                        <BiCategory />
                        {blog.category.id}
                      </Link>
                    </div>
                  </div>

                  <Link to={`/blog/${blog.id}`}>
                    <p className="text-3xl font-bold text-neutral-300 mb-4">
                      {blog.title}
                    </p>
                    <p className="mb-6">
                      {getFirstParaTextSummary(blog.content)}
                    </p>
                  </Link>

                  <div className="flex gap-2 text-sm mb-6">
                    {blog.tags.map((tag) => (
                      <div
                        key={tag}
                        className="group"
                        onClick={() => addTag(tag)}
                      >
                        <span className="group-hover:bg-violet-500 group-hover:text-neutral-900 group-hover:font-bold group-hover:-translate-y-4 transition-all flex items-center gap-3 rounded-lg bg-neutral-700 px-2 py-1">
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-violet-500 text-xs italic">
                  {dayjs(
                    new Timestamp(
                      blog.createdAt.seconds,
                      blog.createdAt.nanoseconds
                    ).toDate()
                  ).format("MMM DD, YYYY")}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default BlogList;
