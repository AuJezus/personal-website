import { EditorProvider, FloatingMenu, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from "lowlight";
import Document from "@tiptap/extension-document";
import Placeholder from "@tiptap/extension-placeholder";
import Title from "../../utils/extensions/Title";
import AdjustedHeading from "../../utils/extensions/AdjustedHeading";
import Metadata from "../../utils/extensions/Metadata";

const BlogDocument = Document.extend({
  content: "title metadata block+",
});

function Editor({ content, updateFn, editable = false, setEditor }) {
  const lowlight = createLowlight(common);

  const extensions = [
    BlogDocument,
    Title,
    AdjustedHeading,
    Metadata,
    StarterKit.configure({
      document: false,
      codeBlock: false,
      heading: false,
    }),
    CodeBlockLowlight.configure({
      lowlight,
    }),
    Placeholder.configure({
      showOnlyCurrent: false,
      placeholder: ({ node }) => {
        if (node.type.name === "title") {
          return `What's the title?`;
        }

        return "What's the story?";
      },
    }),
  ];

  return (
    <EditorProvider
      extensions={extensions}
      content={content}
      onBlur={(e) => updateFn && updateFn(e)}
      onTransaction={(e) => setEditor && setEditor(e.editor)}
      editable={editable}
      injectCSS={false}
      editorProps={{
        attributes: {
          class:
            "prose prose-neutral prose-lg prose-invert max-w-prose md:max-w-none",
        },
      }}
    >
      <FloatingMenu>This is the floating menu</FloatingMenu>
      <BubbleMenu>This is the bubble menu</BubbleMenu>
    </EditorProvider>
  );
}

export default Editor;
