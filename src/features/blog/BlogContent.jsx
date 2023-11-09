import { EditorProvider, FloatingMenu, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from "lowlight";

function BlogContent({ blog }) {
  const lowlight = createLowlight(common);

  const extensions = [
    StarterKit.configure({
      codeBlock: false,
    }),
    CodeBlockLowlight.configure({
      lowlight,
    }),
  ];

  return (
    <div>
      <EditorProvider
        extensions={extensions}
        content={JSON.parse(blog.content)}
        editable={false}
        injectCSS={false}
      >
        <FloatingMenu>This is the floating menu</FloatingMenu>
        <BubbleMenu>This is the bubble menu</BubbleMenu>
      </EditorProvider>
    </div>
  );
}

export default BlogContent;
