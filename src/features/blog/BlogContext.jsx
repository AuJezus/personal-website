import { Timestamp } from "firebase/firestore";
import { useContext, useState } from "react";
import { createContext } from "react";
import { useAuth } from "../auth/AuthContext";

const BlogContext = createContext();

function BlogProvider({ children, initialState }) {
  const user = useAuth();

  const id = initialState.id ?? "";
  const userId = initialState.userId ?? user.uid;
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
        userId,
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
