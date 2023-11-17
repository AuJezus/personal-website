import { useQuery } from "@tanstack/react-query";
import * as BiIcons from "react-icons/bi";
import { getAllCategories } from "../../services/apiCategories";
import { NodeViewWrapper } from "@tiptap/react";
import { IconContext } from "react-icons";
import dayjs from "dayjs";
import { useBlog } from "./BlogContext";
import { Listbox } from "@headlessui/react";
import { useEffect, useState } from "react";

function BlogMetadata({ editor }) {
  const { createdAt, category, setCategory, tags, setTags, setEditor } =
    useBlog();

  const {
    isPending,
    isError,
    data: categories,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  const [curTag, setCurTag] = useState();

  useEffect(() => {
    setEditor(editor);
  }, [editor, setEditor]);

  if (isError) return <p>There was an error: {error.message}</p>;

  if (isPending) return <p>Loading...</p>;

  const CategoryIcon = BiIcons[category.icon];

  function addTag(e) {
    e.preventDefault();

    const normalizedTag = curTag.toLowerCase();

    if (!curTag || tags.includes(normalizedTag)) return;

    setTags((tags) => [...tags, normalizedTag.split(" ").join("-")]);
    setCurTag("");
  }

  function removeTag(e) {
    e.preventDefault();
    console.log(e.target.innerText);
    setTags((tags) => tags.filter((t) => t !== e.target.textContent));
  }

  return (
    <NodeViewWrapper className="react-component">
      <div className="flex w-full flex-wrap justify-around gap-x-20 gap-y-6 text-lg lg:mb-10 lg:w-auto lg:justify-start">
        <IconContext.Provider value={{ className: "text-violet-500" }}>
          <div className="flex items-center gap-3">
            <BiIcons.BiCalendarHeart />
            {dayjs(createdAt.toDate()).format("MMM DD, YYYY")}
          </div>

          <div className="flex items-center gap-3">
            <CategoryIcon />
            {!editor.isEditable && category.id}
            {editor.isEditable && (
              <Listbox value={category} onChange={setCategory}>
                <Listbox.Button>{category.id}</Listbox.Button>
                <Listbox.Options>
                  {categories.map((c) => (
                    <Listbox.Option key={c.id} value={c}>
                      {c.id}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
            )}
          </div>

          <div className="flex items-center justify-center gap-3">
            <BiIcons.BiTagAlt />
            {tags.map((tag) => (
              <span
                className="flex items-center gap-3 rounded-lg bg-neutral-800 px-2 py-1"
                key={tag}
                onClick={editor.isEditable ? removeTag : null}
              >
                {tag}
                {editor.isEditable && <BiIcons.BiX className="text-red-500" />}
              </span>
            ))}

            {editor.isEditable && (
              <span className="flex items-center gap-3 rounded-lg bg-neutral-800 px-2 py-1">
                <form>
                  <input
                    className="bg-transparent w-24 outline-none"
                    placeholder="New Tag"
                    value={curTag}
                    onChange={(e) => setCurTag(e.target.value)}
                  />
                  <button
                    onClick={addTag}
                    className="text-violet-500 hover:scale-125 transition-transform"
                  >
                    +
                  </button>
                </form>
              </span>
            )}
          </div>
        </IconContext.Provider>
      </div>
    </NodeViewWrapper>
  );
}

export default BlogMetadata;
