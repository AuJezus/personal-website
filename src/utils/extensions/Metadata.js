import { Node, mergeAttributes } from "@tiptap/core";
import { Timestamp } from "firebase/firestore";
import { ReactNodeViewRenderer } from "@tiptap/react";
import BlogMetadata from "../../features/blog/BlogMetadata";

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

export default Metadata;
