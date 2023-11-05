import getHeadings from "../../utils/getHeadings";

function BlogHeadLinks({ content }) {
  const headings = getHeadings(JSON.parse(content));

  return (
    <div>
      <ul className="sticky top-6 rounded-md border-2 border-violet-500 p-4 text-sm ">
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
