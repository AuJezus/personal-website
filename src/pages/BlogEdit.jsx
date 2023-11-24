import { useParams } from "react-router-dom";
import { useBlog } from "../services/apiBlogs";
import LoadSpinner from "../ui/LoadSpinner";
import Editor from "../features/blog/Editor";

function BlogEdit() {
  const { id } = useParams();
  const { isPending, error, blog } = useBlog(id);

  function updateBlog({ editor }) {
    console.log(editor.storage);
    console.log(editor.getJSON());
  }

  function saveBlog() {}

  if (isPending) return <LoadSpinner />;

  if (error) return <p>There was an error: {error}</p>;

  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <div className="w-[700px]">
          <Editor
            content={JSON.parse(blog.content)}
            updateFn={updateBlog}
            saveFn={saveBlog}
            editable={true}
          />
        </div>
        {/* <BlogSaveBtn /> */}
      </div>
    </div>
  );
}

export default BlogEdit;
