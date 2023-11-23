import { useParams } from "react-router-dom";
import BlogList from "../features/blog/BlogList";

function BlogsCategory() {
  const { category } = useParams();
  return (
    <div className="pt-12">
      <div className="mb-8 text-center max-w-3xl mx-auto px-2">
        <h1 className="text-5xl mb-4 text-center capitalize text-neutral-300 font-bold underline decoration-violet-500">
          Browse in {category}
        </h1>
        <p className="text-neutral-500 hover:text-neutral-400 transition-colors group">
          List of community blogs in {category} category. Happy reading!
        </p>
      </div>
      <BlogList
        initialFilter={{
          categories: [category],
        }}
      />
    </div>
  );
}

export default BlogsCategory;
