import { Link } from "react-router-dom";
import BlogList from "../features/blog/BlogList";

function BlogsAujezus() {
  return (
    <div className="pt-12">
      <div className="mb-8 text-center max-w-3xl mx-auto px-2">
        <h1 className="text-5xl mb-4 text-center capitalize text-neutral-300 font-bold underline decoration-violet-500">
          Blogs by AuJezus
        </h1>
        <p className="text-neutral-500 hover:text-neutral-400 transition-colors group">
          This is list of blogs from the creator of this website. You can also
          check out community blogs created by other people by navigating the
          side bar or learn more about this website{" "}
          <Link
            to="/blog/how"
            className="text-violet-900 hover:underline group-hover:text-violet-500 transition-colors"
          >
            here
          </Link>
          .
        </p>
      </div>
      <BlogList initialFilter={{ userId: "UyG428JPa4TUUH73kkDd32jQjGp1" }} />
    </div>
  );
}

export default BlogsAujezus;
