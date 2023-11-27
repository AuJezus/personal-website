import { useNavigate, useParams } from "react-router-dom";
import { useBlog, useBlogMutation } from "../services/apiBlogs";
import LoadSpinner from "../ui/LoadSpinner";
import Editor from "../features/blog/Editor";
import BlogSaveBtn from "../features/blog/BlogSaveBtn";
import { BiSave } from "react-icons/bi";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useTagsMutation } from "../services/apiTags";
import { useAuth } from "../features/user/AuthContext";

function BlogEdit() {
  const { id } = useParams();
  const auth = useAuth();
  const { isPending, error, blog } = useBlog(id);
  const blogMutation = useBlogMutation(id);
  const tagsMutation = useTagsMutation();

  const [editor, setEditor] = useState({});
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  async function updateBlog({ editor }) {
    const contentObj = editor.getJSON();
    const { category, tags, createdAt } = contentObj.content.find(
      (n) => n.type === "metadata"
    ).attrs;
    const title = contentObj.content
      .find((n) => n.type === "title")
      .content.find((n) => n.type === "text").text;

    await blogMutation.mutateAsync({
      content: JSON.stringify(contentObj),
      category,
      createdAt,
      tags,
      title,
    });

    const tagsResult = await tagsMutation.mutateAsync(tags);
  }

  async function saveBlog() {
    await updateBlog({ editor });
    await queryClient.invalidateQueries({ queryKey: ["blog", id] });
    navigate(`/blog/${id}`);
  }

  if (isPending) return <LoadSpinner />;

  if (error) return <p>There was an error: {error}</p>;

  if (auth?.uid !== blog.userId)
    return <p>You&apos;re not the author of this blog!</p>;

  return (
    <div className="mx-auto flex max-w-7xl grid-cols-[700px_250px] flex-col justify-center items-start gap-6 px-2 py-6 align-top lg:grid xl:grid-cols-[850px_300px] 2xl:px-0">
      <div className="order-1 lg:order-none">
        <Editor
          content={JSON.parse(blog.content)}
          updateFn={updateBlog}
          saveFn={saveBlog}
          editable={true}
          setEditor={setEditor}
        />
      </div>
      <BlogSaveBtn isPending={blogMutation.isPending} saveFn={saveBlog}>
        <BiSave />
        Save Changes
      </BlogSaveBtn>
    </div>
  );
}

export default BlogEdit;
