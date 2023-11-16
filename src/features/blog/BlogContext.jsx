import { Timestamp } from "firebase/firestore";
import { useContext, useState } from "react";
import { createContext } from "react";

const BlogContext = createContext();

function BlogProvider({ children, initialState }) {
  const id = initialState.id ?? "";
  const [editor, setEditor] = useState(null);
  const [category, setCategory] = useState(
    initialState?.category ?? { id: "web-dev", icon: "BiTerminal" }
  );
  const [tags, setTags] = useState(initialState?.tags || []);
  const createdAt = initialState?.createdAt || Timestamp.now();

  return (
    <BlogContext.Provider
      value={{
        editor,
        setEditor,
        id,
        createdAt,
        category,
        setCategory,
        tags,
        setTags,
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
