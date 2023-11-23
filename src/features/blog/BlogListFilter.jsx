import { Menu } from "@headlessui/react";
import {
  BiCategory,
  BiFilter,
  BiSearchAlt2,
  BiTagAlt,
  BiX,
} from "react-icons/bi";
import { useCategories } from "../../services/apiCategories";
import LoadSpinner from "../../ui/LoadSpinner";
import { useTags } from "../../services/apiTags";
import { useState } from "react";

function BlogListFilter({ filter, setFilter }) {
  const {
    isPending: isPendingCategories,
    errorCategories,
    categories,
  } = useCategories();
  const { isPending: isPendingTags, errorTags, tags } = useTags();

  const [query, setQuery] = useState("");
  const filteredTags = tags?.filter((tag) => tag.id.includes(query));
  const filteredCategories = categories?.filter((category) =>
    category.id.includes(query)
  );

  function addFilter(type, id) {
    if (filter[type]?.includes(id)) return;
    if (filter[type]) setFilter((f) => ({ ...f, [type]: [id, ...f[type]] }));
    else setFilter((f) => ({ ...f, [type]: [id] }));
  }

  function removeFilter(type, id) {
    if (filter[type])
      setFilter((f) => ({
        ...f,
        [type]: [...f[type].filter((n) => n !== id)],
      }));
  }

  if (isPendingCategories || isPendingTags) return <LoadSpinner />;

  if (errorCategories || errorTags)
    return <span>Error: {errorCategories?.message || errorTags?.message}</span>;

  return (
    <Menu as="div" className="relative flex mb-4">
      <Menu.Button className="flex items-center gap-2 mr-8">
        Filters <BiFilter />
      </Menu.Button>
      <div className="flex gap-4 items-center flex-wrap">
        {filter.categories?.length > 0 &&
          filter.categories.map((category) => (
            <span
              key={category}
              onClick={() => removeFilter("categories", category)}
              className="hover:bg-red-900 cursor-pointer bg-violet-500 text-sm flex items-center gap-2 text-neutral-300 bg-opacity-30 py-1 px-2 rounded-full"
            >
              <BiCategory /> {category} <BiX className="text-red-500" />
            </span>
          ))}
        {filter.tags?.length > 0 &&
          filter.tags.map((tag) => (
            <span
              key={tag}
              onClick={() => removeFilter("tags", tag)}
              className="hover:bg-red-900 cursor-pointer bg-neutral-700 text-sm flex items-center gap-2 text-neutral-300 py-1 px-2 rounded-full"
            >
              <BiTagAlt /> {tag} <BiX className="text-red-500" />
            </span>
          ))}
      </div>

      <Menu.Items
        as="div"
        className="top-8 absolute max-h-96 bg-neutral-800 p-4 flex flex-col items-start border-2 border-violet-500 z-50"
      >
        <div className="flex items-center gap-4 rounded-md bg-neutral-700 px-2 py-1 w-full mb-4">
          <BiSearchAlt2 />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            type="text"
            className="w-full bg-neutral-700 outline-none placeholder:text-neutral-500"
          />
        </div>
        <div className="flex gap-8">
          <div>
            <p className="text-xl flex items-center gap-2 font-bold text-neutral-300">
              <BiCategory className="text-violet-500" /> Categories
            </p>
            <div className="flex flex-col ml-2 gap-0">
              {filteredCategories.map((category) => (
                <Menu.Item
                  as="button"
                  className="text-lg text-left hover:underline decoration-violet-500 hover:text-neutral-300 transition-all"
                  key={category.id}
                  onClick={() => addFilter("categories", category.id)}
                >
                  {category.id}
                </Menu.Item>
              ))}
            </div>
          </div>

          <div className="">
            <p className="text-xl flex items-center gap-2 font-bold text-neutral-300">
              <BiTagAlt className="text-violet-500" /> Tags
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ml-2 gap-x-6 flex-wrap ring-violet-500 overflow-y-auto max-h-64">
              {filteredTags.map((tag) => (
                <Menu.Item
                  as="button"
                  className="text-lg text-left hover:underline decoration-violet-500 hover:text-neutral-300 transition-all"
                  key={tag.id}
                  onClick={() => addFilter("tags", tag.id)}
                >
                  {tag.id}
                </Menu.Item>
              ))}
            </div>
          </div>
        </div>
      </Menu.Items>
    </Menu>
  );
}

export default BlogListFilter;
