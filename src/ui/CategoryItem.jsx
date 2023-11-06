function CategoryItem({ Icon, name }) {
  return (
    <li className="group flex w-fit cursor-pointer items-center gap-2 text-neutral-300 transition-colors hover:bg-violet-500">
      <Icon className="ml-2 text-3xl text-violet-500 transition-colors group-hover:text-neutral-900" />
      <span className="mr-2 whitespace-nowrap text-lg hover:text-neutral-900">
        {name}
      </span>
    </li>
  );
}

export default CategoryItem;
