import "../../styles/tokyo-night-dark.css";
import { useBlog } from "./BlogContext";
import Editor from "./Editor";

function BlogContent({ editable = false }) {
  const { content } = useBlog();

  return (
    <div className="order-1 lg:order-none">
      <Editor initialContent={JSON.parse(content)} editable={editable} />
    </div>
  );
}

export default BlogContent;
