import { BiSave } from "react-icons/bi";
import Button from "../../ui/Button";
import { useMutation } from "@tanstack/react-query";
import LoadSpinner from "../../ui/LoadSpinner";
import { useBlog } from "./BlogContext";
import { createBlog, updateBlog } from "../../services/apiBlogs";
import { updateTags } from "../../services/apiTags";

function BlogSaveBtn() {
  const { id, createdAt, category, tags, editor } = useBlog();

  const saveMutation = useMutation({
    mutationFn: (blog) => (id ? updateBlog(id, blog) : createBlog(blog)),
  });

  const tagsMutation = useMutation({
    mutationFn: updateTags,
  });

  function saveBlog() {
    const blog = {
      category,
      content: JSON.stringify(editor.getJSON()),
      createdAt,
      tags,
      title: editor.view.state.doc.firstChild?.textContent,
    };

    saveMutation.mutate(blog);
    tagsMutation.mutate(tags);
  }

  return (
    <Button
      type="primary"
      click={saveMutation.isPending ? undefined : saveBlog}
    >
      {saveMutation.isPending ? (
        <LoadSpinner />
      ) : (
        <>
          <BiSave /> Save
        </>
      )}
    </Button>
  );
}

export default BlogSaveBtn;
