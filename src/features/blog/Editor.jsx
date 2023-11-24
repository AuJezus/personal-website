import {
  EditorProvider,
  FloatingMenu,
  BubbleMenu,
  ReactNodeViewRenderer,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from "lowlight";
import Document from "@tiptap/extension-document";
import Heading from "@tiptap/extension-heading";
import Placeholder from "@tiptap/extension-placeholder";
import { textblockTypeInputRule } from "@tiptap/react";
import { Node, mergeAttributes } from "@tiptap/core";
import BlogMetadata from "./BlogMetadata";
import { Timestamp } from "firebase/firestore";

const BlogDocument = Document.extend({
  content: "title metadata block+",
});

const Title = Heading.extend({
  name: "title",
  group: "title",
  parseHTML: () => [{ tag: "h1:first-child" }],
}).configure({ levels: [1] });

const adjustLevel = (level) => (level == 1 ? 2 : level);
const AdjustedHeading = Heading.extend({
  parseHTML() {
    return this.options.levels.map((level) => ({
      tag: `h${level}`,
      attrs: { level: adjustLevel(level) },
    }));
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce(
      (items, level) => ({
        ...items,
        ...{
          [`Mod-Alt-${level}`]: () =>
            this.editor.commands.toggleHeading({
              level: adjustLevel(level),
            }),
        },
      }),
      {}
    );
  },
  addInputRules() {
    return this.options.levels.map((level) => {
      return textblockTypeInputRule({
        find: new RegExp(`^(#{1,${level}})\\s$`),
        type: this.type,
        getAttributes: {
          level: adjustLevel(level),
        },
      });
    });
  },
});

const Metadata = Node.create({
  name: "metadata",
  group: "metadata",
  atom: true,
  selectable: false,

  addNodeView() {
    return ReactNodeViewRenderer(BlogMetadata);
  },

  addAttributes() {
    return {
      category: {
        default: { id: "web-dev", icon: "BiTerminal" },
      },
      tags: {
        default: [],
      },
      createdAt: {
        default: Timestamp.now(),
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "react-component",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["react-component", mergeAttributes(HTMLAttributes)];
  },
});

function Editor({ content, updateFn, saveFn, editable = false, setEditor }) {
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
