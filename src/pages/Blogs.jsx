import { Link } from "react-router-dom";
import BlogList from "../features/blog/BlogList";

function Blogs() {
  return (
    <div className="pt-12">
      <div className="mb-8 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl mb-4 text-center capitalize text-neutral-300 font-bold underline decoration-violet-500">
          Discover community blogs
        </h1>
        <p className="text-neutral-500 hover:text-neutral-400 transition-colors group">
          Browse blog posts created from developers all over the world! You can
          also create one yourself, for zero cost. More info on using this
          website{" "}
          <Link
            to="/blog/how"
            className="text-violet-900 hover:underline group-hover:text-violet-500 transition-colors"
          >
            here
          </Link>
          .
        </p>
      </div>
      <BlogList initialFilter={{}} />
    </div>
  );
}

export default Blogs;
