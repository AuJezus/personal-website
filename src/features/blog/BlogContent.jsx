import { BlockNoteView, useBlockNote } from "@blocknote/react";

function BlogContent({ blog }) {
  const editor = useBlockNote(
    {
      editable: false,
      initialContent: blog ? JSON.parse(blog.content) : null,
    },
    [blog],
  );

  return (
    <div className="order-last lg:order-none">
      <BlockNoteView editor={editor} content={JSON.parse(blog.content)} />
    </div>
  );
}

export default BlogContent;
