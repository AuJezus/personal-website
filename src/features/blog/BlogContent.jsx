import { EditorProvider, FloatingMenu, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from "lowlight";
import "../../styles/tokyo-night-dark.css";

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
    <div className="order-1 lg:order-none">
      <EditorProvider
        extensions={extensions}
        content={JSON.parse(blog.content)}
        editable={true}
        injectCSS={false}
        editorProps={{
          attributes: {
            class:
              "prose prose-neutral max-w-prose md:max-w-none prose-lg prose-invert",
          },
        }}
      >
        <FloatingMenu>This is the floating menu</FloatingMenu>
        <BubbleMenu>This is the bubble menu</BubbleMenu>
      </EditorProvider>
    </div>
  );
}

export default BlogContent;
