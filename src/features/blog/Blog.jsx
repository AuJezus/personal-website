import { BlockNoteView, useBlockNote } from "@blocknote/react";
import TextareaAutosize from "react-textarea-autosize";
import "@blocknote/core/style.css";
import { BiCalendarHeart, BiCategoryAlt, BiTagAlt } from "react-icons/bi";
import * as dayjs from "dayjs";
import { IconContext } from "react-icons";
import { useState } from "react";
import { Listbox } from "@headlessui/react";

function Blog() {
  async function printContent() {
    const content = await JSON.stringify(editor.topLevelBlocks);
    console.log(content);
  }
  // Creates a new editor instance.
  const editor = useBlockNote({});

  const categories = [
    { id: 1, name: "Web Dev" },
    { id: 2, name: "Design" },
    { id: 3, name: "Life" },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="px-2 py-6">
      <form>
        <TextareaAutosize
          className="mb-6 w-full resize-none bg-transparent text-5xl font-bold capitalize text-neutral-300  outline-none placeholder:text-neutral-500"
          placeholder="Your best blog title ever..."
        ></TextareaAutosize>

        <div className="flex flex-col gap-4 text-3xl">
          <IconContext.Provider value={{ className: "text-violet-500" }}>
            <div className="flex items-center gap-3">
              <BiCalendarHeart />
              {dayjs().format("MMM DD, YYYY")}
            </div>
            <div className="flex items-center gap-3">
              <BiCategoryAlt />
              <div className="relative w-1/2">
                <Listbox
                  value={selectedCategory}
                  onChange={setSelectedCategory}
                >
                  <Listbox.Button>{selectedCategory.name}</Listbox.Button>
                  <Listbox.Options className="absolute top-full flex flex-col gap-4 bg-neutral-700 p-4">
                    {categories.map((category) => (
                      <Listbox.Option
                        key={category.id}
                        value={category.id}
                        className="border-b-2 border-violet-500"
                      >
                        {category.name}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BiTagAlt />
              Web Dev
            </div>
          </IconContext.Provider>
        </div>
      </form>

      {/* <BlockNoteView editor={editor} />
      <button onClick={printContent}>Print the shit</button> */}
    </div>
  );
}

export default Blog;
