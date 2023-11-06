function CategoryItem({ Icon, name }) {
  return (
    <li className="group cursor-pointer text-neutral-300 transition-colors marker:hidden hover:bg-violet-500">
      <div className="flex w-fit items-center gap-2">
        <Icon className="ml-2 text-3xl text-violet-500 transition-colors group-hover:text-neutral-900" />
        <span className="mr-2 whitespace-nowrap text-lg hover:text-neutral-900">
          {name}
        </span>
      </div>
    </li>
  );
}

export default CategoryItem;
