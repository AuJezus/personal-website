import { useCurrentEditor } from "@tiptap/react";
import { serverTimestamp } from "firebase/firestore";
import { useContext, useState } from "react";
import { createContext } from "react";

const BlogContext = createContext();

function BlogProvider({ children, initialState }) {
  const { editor } = useCurrentEditor();
  const [title, setTitle] = useState(initialState?.title || "");
  const [category, setCategory] = useState(initialState?.category || {});
  const [tags, setTags] = useState(initialState?.tags || tags);
  const createdAt = initialState?.createdAt || serverTimestamp();
  const content = initialState?.content || "";

  return (
    <BlogContext.Provider
      value={{
        editor,
        title,
        setTitle,
        createdAt,
        category,
        setCategory,
        tags,
        setTags,
        content,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

function useBlog() {
  const context = useContext(BlogContext);
  if (context === undefined)
    throw new Error("useBlog was used outside of the BlogProvider");
  return context;
}

export { BlogProvider, useBlog };
