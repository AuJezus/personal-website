import { Link } from "react-router-dom";

function CategoryItem({ Icon, name, to }) {
  return (
    <Link
      to={to ? to : `/blogs/${name}`}
      className="group/item cursor-pointer border-b-2 border-violet-500 text-neutral-300 transition-colors marker:hidden hover:bg-violet-500 md:border-0"
    >
      <div className="flex w-fit items-center gap-2">
        <Icon className="ml-2 text-5xl text-violet-500 transition-colors group-hover/item:text-neutral-900 md:text-3xl" />
        <span className="mr-2 whitespace-nowrap text-4xl group-hover/item:text-neutral-900 md:text-lg">
          {name}
        </span>
      </div>
    </Link>
  );
}

export default CategoryItem;
