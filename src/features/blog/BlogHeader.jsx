import dayjs from "dayjs";
import { IconContext } from "react-icons";
import { BiCalendarHeart, BiCategoryAlt, BiTagAlt } from "react-icons/bi";

function BlogHeader({ blog }) {
  return (
    <div>
      <h1 className="mb-10 text-7xl font-bold capitalize text-neutral-300 underline decoration-violet-500">
        {blog.title}
      </h1>
      <div className="mb-10 flex flex-wrap justify-start gap-20 text-lg">
        <IconContext.Provider value={{ className: "text-violet-500" }}>
          <div className="flex items-center gap-3">
            <BiCalendarHeart />{" "}
            {dayjs(blog.createdAt.toDate()).format("MMM DD, YYYY")}
          </div>

          <div className="flex items-center gap-3">
            <BiCategoryAlt />
            <span className="capitalize">
              {blog.category.id.replace("-", " ")}
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <BiTagAlt />
            {blog.tags.map((tag) => (
              <span
                className="flex items-center gap-3 rounded-lg bg-neutral-800 px-2 py-1"
                key={tag.id}
              >
                {tag.id}
              </span>
            ))}
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default BlogHeader;
