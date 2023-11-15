import { EditorProvider, FloatingMenu, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from "lowlight";
import Document from "@tiptap/extension-document";
import Heading from "@tiptap/extension-heading";
import Placeholder from "@tiptap/extension-placeholder";
import { textblockTypeInputRule } from "@tiptap/react";
import { Node, mergeAttributes } from "@tiptap/core";

const BlogDocument = Document.extend({
  content: "title customNode block+",
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

const CustomNode = Node.create({
  name: "customNode",
  group: "customNode",
  content: "inline*",
  draggable: false,
  attrs: {
    date: { default: null },
    category: { default: null },
    tags: { default: [] },
  },
  parseDOM: [
    {
      tag: 'div[data-type="customNode"]',
      getAttrs: (dom) => ({
        date: dom.getAttribute("data-date"),
        category: dom.getAttribute("data-category"),
        tags: dom.getAttribute("data-tags").split(","),
      }),
    },
  ],
  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      ["p", {}, `Date: ${HTMLAttributes.date || ""}`],
      ["p", {}, `Category: ${HTMLAttributes.category || ""}`],
      [
        "p",
        {},
        `Tags: ${HTMLAttributes.tags ? HTMLAttributes.tags.join(", ") : ""}`,
      ],
    ];
  },
  addOptions: () => ({ HTMLAttributes: {} }),
});

function Editor({ initialContent, editable }) {
  const lowlight = createLowlight(common);

  const extensions = [
    BlogDocument,
    Title,
    AdjustedHeading,
    CustomNode.configure({
      HTMLAttributes: {
        class:
          "flex not-prose flex-wrap justify-around gap-x-20 gap-y-6 text-lg lg:mb-10 lg:w-auto lg:justify-start",
      },
    }),
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
      content={initialContent}
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
