import { useQuery } from "@tanstack/react-query";
import { getAllBlogs } from "../../services/apiBlogs";
import { Link } from "react-router-dom";
import { BiCalendarHeart, BiCategory, BiTagAlt, BiUser } from "react-icons/bi";
import dayjs from "dayjs";
import { IconContext } from "react-icons";
import { getAllUsers, getUser } from "../../services/apiUsers";

function BlogList() {
  const {
    isPending,
    isError,
    data: blogs,
    error,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: getAllBlogs,
  });

  const {
    isPendingUser,
    isErrorUser,
    data: users,
    errorUser,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => getAllUsers(),
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  function getFirstParaTextSummary(content) {
    return (
      JSON.parse(content)
        .content.find((n) => n.type === "paragraph")
        .content.find((n) => n.type === "text")
        .text.split(" ")
        .slice(0, 10)
        .join(" ") + "..."
    );
  }

  // return (
  //   <div className="p-2 max-w-6xl xl:gap-12 2xl:gap-x-18 2xl:max-w-screen-7xl  mx-auto lg:p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  //     {blogs.map((blog) => {
  //       const user = users.find((u) => u.id === blog.userId);
  //       return (
  //         <Link
  //           className="border-2 border-violet-500 border-opacity-50 p-2 block rounded-lg"
  //           key={blog.id}
  //           to={`/blog/${blog.id}`}
  //         >
  //           <p className="text-3xl mb-2 text-neutral-300 capitalize font-bold">
  //             {blog.title}
  //           </p>
  //           <p className="text-sm">{getFirstParaTextSummary(blog.content)}</p>

  //           <div className="flex flex-wrap gap-4 mt-4">
  //             <IconContext.Provider value={{ className: "text-violet-500" }}>
  //               <div className="flex items-center gap-2">
  //                 <BiUser />
  //                 {user ? user.displayName : "Deleted User"}
  //               </div>
  //               <div className="flex items-center gap-2">
  //                 <BiCalendarHeart />
  //                 {dayjs(blog.createdAt.toDate()).format("MMM DD, YYYY")}
  //               </div>
  //               <div className="flex items-center gap-2">
  //                 <BiCategory />
  //                 {blog.category.id}
  //               </div>
  //               <div className="flex items-center gap-2 flex-wrap">
  //                 {blog.tags.length !== 0 && <BiTagAlt />}
  //                 {blog.tags.map((tag) => (
  //                   <span
  //                     className="flex items-center gap-3 rounded-lg bg-neutral-800 px-2 py-1"
  //                     key={tag}
  //                   >
  //                     {tag}
  //                   </span>
  //                 ))}
  //               </div>
  //             </IconContext.Provider>
  //           </div>
  //         </Link>
  //       );
  //     })}
  //   </div>
  // );

  return (
    <div className="grid grid-cols-1 gap-4 lg:gap-8 p-4 2xl:px-0 lg:p-8 sm:grid-cols-2 xl:grid-cols-3 max-w-screen-xl mx-auto ">
      {blogs.map((blog) => {
        const user = users.find((u) => u.id === blog.userId);

        return (
          <div
            key={blog.id}
            className="bg-neutral-800 py-4 px-2 flex flex-col justify-between hover:ring-2 hover:-translate-y-2 rounded-br-2xl ring-violet-500 hover:rounded-lg transition-all"
          >
            <div>
              <div className="flex justify-between mb-4">
                <Link
                  to={`/user/${user ? user.id : "deleted"}`}
                  className="flex items-center gap-2 group"
                >
                  <img
                    className="w-8 h-8 object-cover rounded-full"
                    src={user ? user.photoURL : ""}
                    alt="Profile image"
                  />
                  <span className="italic font-bold group-hover:underline group-hover:decoration-violet-500 transition-all decoration-transparent">
                    {user ? user.displayName : "Deleted User"}
                  </span>
                </Link>

                <div className="flex items-center gap-2">
                  <span className="text-sm">In</span>
                  <Link
                    to=""
                    className="flex items-center gap-1 text-violet-500 hover:scale-105 transition-transform"
                  >
                    <BiCategory />
                    {blog.category.id}
                  </Link>
                </div>
              </div>

              <Link to={`/blog/${blog.id}`}>
                <p className="text-3xl font-bold text-neutral-300 mb-4">
                  {blog.title}
                </p>
                <p className="mb-6">{getFirstParaTextSummary(blog.content)}</p>
              </Link>

              <div className="flex gap-2 text-sm mb-6">
                {blog.tags.map((tag) => (
                  <div key={tag} className="group">
                    <span className="group-hover:bg-violet-500 group-hover:text-neutral-900 group-hover:font-bold group-hover:-translate-y-4 transition-all flex items-center gap-3 rounded-lg bg-neutral-700 px-2 py-1">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-violet-500 text-xs italic mb-0">
              {dayjs(blog.createdAt.toDate()).format("MMM DD, YYYY")}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default BlogList;
