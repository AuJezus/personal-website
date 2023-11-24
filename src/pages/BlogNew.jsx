import { useNavigate } from "react-router-dom";
import Editor from "../features/blog/Editor";
import BlogSaveBtn from "../features/blog/BlogSaveBtn";
import { BiSave } from "react-icons/bi";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useBlogMutation } from "../services/apiBlogs";
import { useAuth } from "../features/user/AuthContext";

function BlogNew() {
  const blogMutation = useBlogMutation();
  const { uid } = useAuth();

  const [editor, setEditor] = useState({});
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  async function saveBlog() {
    const contentObj = editor.getJSON();
    const { category, tags, createdAt } = contentObj.content.find(
      (n) => n.type === "metadata"
    ).attrs;
    const title = contentObj.content
      .find((n) => n.type === "title")
      .content.find((n) => n.type === "text").text;

    const blog = await blogMutation.mutateAsync({
      content: JSON.stringify(contentObj),
      category,
      createdAt,
      tags,
      userId: uid,
      title,
    });

    await queryClient.setQueryData(["blog", blog.id], blog);
    navigate(`/blog/${blog.id}`);
  }

  return (
    <div className="mx-auto flex max-w-7xl grid-cols-[700px_250px] flex-col justify-center items-start gap-6 px-2 py-6 align-top lg:grid xl:grid-cols-[850px_300px] 2xl:px-0">
      <div className="order-1 lg:order-none">
        <Editor saveFn={saveBlog} editable={true} setEditor={setEditor} />
      </div>

      <BlogSaveBtn isPending={blogMutation.isPending} saveFn={saveBlog}>
        <BiSave />
        Post Blog
      </BlogSaveBtn>
    </div>
  );
}

export default BlogNew;
