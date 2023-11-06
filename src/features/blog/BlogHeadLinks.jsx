import getHeadings from "../../utils/getHeadings";
import useScrollUp from "../../utils/useScrollUp";

function BlogHeadLinks({ content }) {
  const headings = getHeadings(JSON.parse(content));
  const isScrollUp = useScrollUp();

  return (
    <div>
      <ul
        className={`${
          isScrollUp ? "top-20" : "top-6"
        } sticky rounded-md border-2 border-violet-500 p-4 text-sm transition-all duration-700`}
      >
        {headings.map((item) => (
          <li
            key={item.id}
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
