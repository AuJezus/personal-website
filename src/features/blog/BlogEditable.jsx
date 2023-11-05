import { BlockNoteView, useBlockNote } from "@blocknote/react";
import TextareaAutosize from "react-textarea-autosize";
import "@blocknote/core/style.css";
import {
  BiCalendarHeart,
  BiCategoryAlt,
  BiChevronDown,
  BiTagAlt,
  BiX,
} from "react-icons/bi";
import dayjs from "dayjs";
import { IconContext } from "react-icons";
import { useState } from "react";
import { Listbox } from "@headlessui/react";
import Button from "../../ui/Button";
import { db } from "../../services/firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

function BlogEditable() {
  // Creates a new editor instance.
  const editor = useBlockNote({});

  const categories = [
    { id: 1, name: "Web Dev" },
    { id: 2, name: "Design" },
    { id: 3, name: "Life" },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");

  async function printContent() {
    const content = JSON.stringify(editor.topLevelBlocks);
    await addDoc(collection(db, "blogs"), {
      title: "How to structure data in react",
      content,
      createdAt: serverTimestamp(),
    });
    console.log(content);
  }

  function addTag(e) {
    e.preventDefault();
    const normalizedTag = tag.toLowerCase();

    if (!tag || tags.includes(normalizedTag)) return;

    setTags((tags) => [...tags, normalizedTag.split(" ").join("-")]);
    setTag("");
  }

  function removeTag(e) {
    e.preventDefault();

    console.log(e.target.innerText);
    setTags((tags) => tags.filter((t) => t !== e.target.textContent));
  }

  return (
    <div className="mx-auto px-2 py-6 sm:p-10 lg:max-w-[1200px]">
      <form>
        <TextareaAutosize
          className="mb-6 w-full resize-none bg-transparent text-5xl font-bold capitalize leading-normal text-neutral-300 underline decoration-violet-500 outline-none  placeholder:text-neutral-500 md:text-7xl"
          placeholder="Your best blog title ever..."
        ></TextareaAutosize>

        <div className="mb-10 flex flex-col gap-4 text-3xl md:flex-row md:flex-wrap md:justify-around">
          <IconContext.Provider value={{ className: "text-violet-500" }}>
            <div className="flex items-center gap-3">
              <BiCalendarHeart />
              {dayjs().format("MMM DD, YYYY")}
            </div>
            <div className="flex items-center gap-3">
              <BiCategoryAlt />
              <div className="relative w-1/2 md:w-full">
                <Listbox
                  value={selectedCategory}
                  onChange={setSelectedCategory}
                >
                  <Listbox.Button className="flex items-center gap-3">
                    {selectedCategory.name} <BiChevronDown />
                  </Listbox.Button>
                  <Listbox.Options className="absolute top-full z-10 flex flex-col gap-4 bg-neutral-700 p-4">
                    {categories.map((category) => (
                      <Listbox.Option
                        key={category.id}
                        value={category}
                        className="border-b-2 border-violet-500"
                      >
                        {category.name}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:max-w-xs">
              <BiTagAlt className="flex-shrink-0" />
              <input
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                type="text"
                className="w-full bg-transparent outline-none ring-neutral-500 placeholder:text-neutral-500 focus:ring-1"
                placeholder="New Tag..."
              />
              <Button click={addTag} size="sm">
                Add tag
              </Button>
            </div>
          </IconContext.Provider>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-6 text-sm sm:text-lg">
          {tags.map((t) => (
            <span
              key={t}
              onClick={removeTag}
              className="flex items-center gap-2 rounded-lg bg-neutral-800 px-2 py-1 sm:text-lg"
            >
              {t}
              <BiX className="text-red-500" />
            </span>
          ))}
        </div>
      </form>

      <BlockNoteView editor={editor} />
      <button onClick={printContent}>helo helo</button>
    </div>
  );
}

export default BlogEditable;