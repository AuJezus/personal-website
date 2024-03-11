import { EditorProvider, FloatingMenu, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from "lowlight";
import Document from "@tiptap/extension-document";
import Placeholder from "@tiptap/extension-placeholder";
import Title from "../../utils/extensions/Title";
import AdjustedHeading from "../../utils/extensions/AdjustedHeading";
import Metadata from "../../utils/extensions/Metadata";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { useStorageMutation } from "../../services/apiStorage";
import { useAuth } from "../user/AuthContext";
import uniqid from "uniqid";

const BlogDocument = Document.extend({
  content: "title metadata block+",
});

function Editor({ content, updateFn, editable = false, setEditor }) {
  const lowlight = createLowlight(common);
  const storageMutation = useStorageMutation();
  const auth = useAuth();

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
    Link.configure({
      protocols: ["mailto"],
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
    Image,
  ];

  const editorProps = {
    attributes: {
      class:
        "prose prose-neutral prose-lg prose-invert max-w-prose md:max-w-none",
    },
    handleDrop: async (view, event, slice, moved) => {
      // Check if dropped a file
      if (
        moved &&
        !event.dataTransfer &&
        !event.dataTransfer.files &&
        !event.dataTransfer.files[0]
      )
        return false;

      let file = event.dataTransfer.files[0];
      const imageTypes = ["image/jpeg", "image/png", "image/gif"];
      // Check if file is an image
      if (!imageTypes.includes(file.type)) return false;

      // Upload image
      const fileName = file.name.split(".")[0];
      const fileExtension = file.name.split(".")[1];
      const path = `/${auth.uid}/${fileName}-${uniqid()}.${fileExtension}`;
      const imageURL = await storageMutation.mutateAsync({ path, file });
      if (!imageURL) return false;

      // Add image to the editor
      const { schema } = view.state;
      const coordinates = view.posAtCoords({
        left: event.clientX,
        top: event.clientY,
      });
      const node = schema.nodes.image.create({ src: imageURL }); // creates the image element
      const transaction = view.state.tr.insert(coordinates.pos, node); // places it in the correct position
      view.dispatch(transaction);

      return true; // handled
    },
  };

  return (
    <EditorProvider
      extensions={extensions}
      content={content}
      onBlur={(e) => updateFn && updateFn(e)}
      onTransaction={(e) => setEditor && setEditor(e.editor)}
      editable={editable}
      injectCSS={false}
      editorProps={editorProps}
    >
      <FloatingMenu>This is the floating menu</FloatingMenu>
      <BubbleMenu>This is the bubble menu</BubbleMenu>
    </EditorProvider>
  );
}

export default Editor;
