import dayjs from "dayjs";
import { IconContext } from "react-icons";
import { BiCalendarHeart, BiCategoryAlt, BiTagAlt } from "react-icons/bi";
import * as BiIcons from "react-icons/bi";
import { getCategoryWIthRef } from "../../services/apiCategories";
import { useQuery } from "@tanstack/react-query";
import { useBlog } from "./BlogContext";

function BlogHeader({ editable = false }) {
  const { title, createdAt, category, tags } = useBlog();
  const {
    isPending,
    isError,
    data: categoryRef,
    error,
  } = useQuery({
    queryKey: ["category", category.id],
    queryFn: () => getCategoryWIthRef(category),
  });

  if (isError) return <p>There was an error: {error.message}</p>;

  if (isPending) return <p>Loading...</p>;

  const CategoryIcon = BiIcons[categoryRef.icon];

  return (
    <div className="mb-4 lg:mb-0">
      <h1 className="mb-10 text-5xl font-bold capitalize text-neutral-100 underline decoration-violet-500 md:text-7xl">
        {title}
      </h1>
      <div className="flex w-full flex-wrap justify-around gap-x-20 gap-y-6 text-lg lg:mb-10 lg:w-auto lg:justify-start">
        <IconContext.Provider value={{ className: "text-violet-500" }}>
          <div className="flex items-center gap-3">
            <BiCalendarHeart />{" "}
            {dayjs(createdAt.toDate()).format("MMM DD, YYYY")}
          </div>

          <div className="flex items-center gap-3">
            <CategoryIcon />
            <span className="capitalize">{category.id.replace("-", " ")}</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <BiTagAlt />
            {tags.map((tag) => (
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
