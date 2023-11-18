import { BiSave } from "react-icons/bi";
import Button from "../../ui/Button";
import { useMutation } from "@tanstack/react-query";
import LoadSpinner from "../../ui/LoadSpinner";
import { useBlog } from "./BlogContext";
import { createBlog, updateBlog } from "../../services/apiBlogs";
import { updateTags } from "../../services/apiTags";
import { useNavigate } from "react-router-dom";

function BlogSaveBtn() {
  const { id, userId, createdAt, category, tags, editor } = useBlog();

  const saveMutation = useMutation({
    mutationFn: (blog) => (id ? updateBlog(id, blog) : createBlog(blog)),
  });

  const tagsMutation = useMutation({
    mutationFn: updateTags,
  });

  const navigate = useNavigate();

  async function saveBlog() {
    const blog = {
      category,
      content: JSON.stringify(editor.getJSON()),
      createdAt,
      tags,
      title: editor.view.state.doc.firstChild?.textContent,
      userId,
    };

    const { id: savedBlogId } = await saveMutation.mutateAsync(blog);
    tagsMutation.mutate(tags);

    navigate(`/blog/${savedBlogId}`);
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
