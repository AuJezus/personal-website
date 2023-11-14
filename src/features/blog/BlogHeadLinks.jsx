import getHeadings from "../../utils/getHeadings";
import useScrollUp from "../../utils/useScrollUp";
import { useBlog } from "./BlogContext";

function BlogHeadLinks() {
  const { content } = useBlog();
  const headings = getHeadings(content);
  const isScrollUp = useScrollUp();

  return (
    <div className="flex w-full flex-col items-center lg:w-auto">
      <div className="w-full md:w-auto lg:hidden">
        <span className="mb-2 inline-block text-lg">On this page:</span>
      </div>
      <ul
        className={`${
          isScrollUp ? "top-20" : "top-6"
        } sticky w-fit rounded-md border-2 border-violet-500 p-4 text-sm transition-all duration-700 md:text-2xl lg:w-auto lg:text-sm`}
      >
        {headings.map((item) => (
          <li
            key={item.text}
            className="flex"
            style={{ marginLeft: `${item.level * 20}px` }}
          >
            <span className="mr-2 text-violet-500">&rarr;</span>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogHeadLinks;
