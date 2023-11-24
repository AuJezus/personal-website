import * as BiIcons from "react-icons/bi";
import { useCategories } from "../../services/apiCategories";
import { NodeViewWrapper } from "@tiptap/react";
import { IconContext } from "react-icons";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Listbox } from "@headlessui/react";

function BlogMetadata({ editor, node, updateAttributes }) {
  return editor.isEditable ? (
    <BlogMetadataEdit node={node} updateAttributes={updateAttributes} />
  ) : (
    <BlogMetadataRead node={node} />
  );
}

function BlogMetadataEdit({ node, updateAttributes }) {
  const { isPending, error, categories } = useCategories();

  const [newTag, setNewTag] = useState("");
  const { category, tags, createdAt } = node.attrs;
  const CategoryIcon = BiIcons[category.icon];

  function addTag() {
    const normalizedTag = newTag.toLowerCase().split(" ").join("-");

    if (!newTag || tags.includes(normalizedTag)) return;

    updateAttributes({
      tags: [...tags, normalizedTag],
    });
    setNewTag("");
  }

  function removeTag(e) {
    const tagToRemove = e.target.textContent;
    updateAttributes({
      tags: tags.filter((t) => t !== tagToRemove),
    });
  }

  function setCategory(e) {
    updateAttributes({
      category: e,
    });
  }

  if (error)
    return (
      <NodeViewWrapper>
        <p>There was an error: {error.message}</p>
      </NodeViewWrapper>
    );

  if (isPending)
    return (
      <NodeViewWrapper>
        <p>Loading...</p>
      </NodeViewWrapper>
    );

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
          </div>

          <div className="flex items-center justify-center gap-3">
            <BiIcons.BiTagAlt />
            {tags.map((tag) => (
              <span
                className="flex items-center gap-3 rounded-lg bg-neutral-800 px-2 py-1"
                key={tag}
                onClick={removeTag}
              >
                {tag}
                <BiIcons.BiX className="text-red-500" />
              </span>
            ))}

            <span className="flex items-center gap-3 rounded-lg bg-neutral-800 px-2 py-1">
              <input
                className="bg-transparent w-24 outline-none"
                placeholder="New Tag"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
              />
              <button
                onClick={addTag}
                className="text-violet-500 hover:scale-125 transition-transform"
              >
                +
              </button>
            </span>
          </div>
        </IconContext.Provider>
      </div>
    </NodeViewWrapper>
  );
}

function BlogMetadataRead({ node }) {
  const { category, tags, createdAt } = node.attrs;
  const CategoryIcon = BiIcons[category.icon];

  return (
    <NodeViewWrapper className="react-component">
      <div className="flex w-full flex-wrap px-4 justify-between gap-x-20 gap-y-6 text-lg lg:mb-10 lg:w-auto lg:justify-start">
        <IconContext.Provider value={{ className: "text-violet-500" }}>
          <div className="flex items-center gap-3 text-neutral-400">
            <BiIcons.BiCalendarHeart />
            {dayjs(createdAt.toDate()).format("MMM DD, YYYY")}
          </div>

          <Link
            to={`/blogs/${category.id}`}
            className="flex items-center font-normal gap-3 no-underline hover:underline decoration-violet-500 hover:text-neutral-300 text-neutral-400"
          >
            <CategoryIcon />
            {category.id}
          </Link>

          <div className="flex items-center justify-center gap-3">
            <BiIcons.BiTagAlt />
            {tags.map((tag) => (
              <span
                className="flex items-center gap-3 rounded-lg hover:bg-violet-700 hover:text-neutral-300 transition-colors bg-neutral-800 text-neutral-400 px-2 py-1"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </IconContext.Provider>
      </div>
    </NodeViewWrapper>
  );
}

export default BlogMetadata;
