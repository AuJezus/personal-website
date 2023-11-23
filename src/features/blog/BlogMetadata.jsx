import { useQuery } from "@tanstack/react-query";
import * as BiIcons from "react-icons/bi";
import { getAllCategories } from "../../services/apiCategories";
import { NodeViewWrapper } from "@tiptap/react";
import { IconContext } from "react-icons";
import dayjs from "dayjs";
import { Link, useParams } from "react-router-dom";
import { useBlog } from "../../services/apiBlogs";
import { useBlog as shit } from "./BlogContext";
import { useEffect } from "react";

function BlogMetadata({ editor }) {
  return editor.isEditable ? (
    <BlogMetadataEdit editor={editor} />
  ) : (
    <BlogMetadataRead />
  );
}

function BlogMetadataEdit({ editor }) {
  const { setEditor } = shit();
  setEditor(editor);
  return <div></div>;
}

function BlogMetadataRead() {
  const { id } = useParams();
  const { isPending, error, blog } = useBlog(id);

  const CategoryIcon = BiIcons[blog.category.icon];

  if (error) return <p>There was an error: {error.message}</p>;

  if (isPending) return <p>Loading...</p>;

  return (
    <NodeViewWrapper className="react-component">
      <div className="flex w-full flex-wrap px-4 justify-between gap-x-20 gap-y-6 text-lg lg:mb-10 lg:w-auto lg:justify-start">
        <IconContext.Provider value={{ className: "text-violet-500" }}>
          <div className="flex items-center gap-3 text-neutral-400">
            <BiIcons.BiCalendarHeart />
            {dayjs(blog.createdAt.toDate()).format("MMM DD, YYYY")}
          </div>

          <Link
            to={`/blogs/${blog.category.id}`}
            className="flex items-center font-normal gap-3 no-underline hover:underline decoration-violet-500 hover:text-neutral-300 text-neutral-400"
          >
            <CategoryIcon />
            {blog.category.id}
          </Link>

          <div className="flex items-center justify-center gap-3">
            <BiIcons.BiTagAlt />
            {blog.tags.map((tag) => (
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

// function BlogMetadata({ editor }) {
//   const { id } = useParams();
//   const { isPendingBlog, errorBlog, blog } = useBlog(id);

//   const {
//     isPending,
//     isError,
//     data: categories,
//     error,
//   } = useQuery({
//     queryKey: ["categories"],
//     queryFn: getAllCategories,
//     enabled: editor.isEditable,
//   });

//   const [curTag, setCurTag] = useState();

//   const CategoryIcon = BiIcons[category.icon];

//   function addTag(e) {
//     e.preventDefault();

//     const normalizedTag = curTag.toLowerCase();

//     if (!curTag || tags.includes(normalizedTag)) return;

//     setTags((tags) => [...tags, normalizedTag.split(" ").join("-")]);
//     setCurTag("");
//   }

//   function removeTag(e) {
//     e.preventDefault();
//     console.log(e.target.innerText);
//     setTags((tags) => tags.filter((t) => t !== e.target.textContent));
//   }

//   if (isError) return <p>There was an error: {error.message}</p>;

//   if (isPending) return <p>Loading...</p>;

//   return (
//     <NodeViewWrapper className="react-component">
//       <div className="flex w-full flex-wrap justify-around gap-x-20 gap-y-6 text-lg lg:mb-10 lg:w-auto lg:justify-start">
//         <IconContext.Provider value={{ className: "text-violet-500" }}>
//           <div className="flex items-center gap-3">
//             <BiIcons.BiCalendarHeart />
//             {dayjs(createdAt.toDate()).format("MMM DD, YYYY")}
//           </div>

//           <div className="flex items-center gap-3">
//             <CategoryIcon />
//             {!editor.isEditable && category.id}
//             {editor.isEditable && (
//               <Listbox value={category} onChange={setCategory}>
//                 <Listbox.Button>{category.id}</Listbox.Button>
//                 <Listbox.Options>
//                   {categories.map((c) => (
//                     <Listbox.Option key={c.id} value={c}>
//                       {c.id}
//                     </Listbox.Option>
//                   ))}
//                 </Listbox.Options>
//               </Listbox>
//             )}
//           </div>

//           <div className="flex items-center justify-center gap-3">
//             <BiIcons.BiTagAlt />
//             {tags.map((tag) => (
//               <span
//                 className="flex items-center gap-3 rounded-lg bg-neutral-800 px-2 py-1"
//                 key={tag}
//                 onClick={editor.isEditable ? removeTag : null}
//               >
//                 {tag}
//                 {editor.isEditable && <BiIcons.BiX className="text-red-500" />}
//               </span>
//             ))}

//             {editor.isEditable && (
//               <span className="flex items-center gap-3 rounded-lg bg-neutral-800 px-2 py-1">
//                 <form>
//                   <input
//                     className="bg-transparent w-24 outline-none"
//                     placeholder="New Tag"
//                     value={curTag}
//                     onChange={(e) => setCurTag(e.target.value)}
//                   />
//                   <button
//                     onClick={addTag}
//                     className="text-violet-500 hover:scale-125 transition-transform"
//                   >
//                     +
//                   </button>
//                 </form>
//               </span>
//             )}
//           </div>
//         </IconContext.Provider>
//       </div>
//     </NodeViewWrapper>
//   );
// }

// export default BlogMetadata;
