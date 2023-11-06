import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../services/apiCategories";
import * as BiIcons from "react-icons/bi";

function SideNav() {
  const {
    isPending,
    isError,
    data: categories,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  if (isError) return <p>There was an error: {error.message}</p>;

  if (isPending) return <p>Loading...</p>;

  const categoriesWithIcons = categories.map((category) => {
    const Icon = BiIcons[category.icon];
    return { ...category, Icon };
  });

  return (
    <nav className="sticky top-0 h-screen max-w-[47px] overflow-hidden border-r-2 border-violet-500 border-opacity-20 py-6 transition-all hover:max-w-[200px]">
      <ul>
        {categoriesWithIcons.map((category) => (
          <li
            key={category.id}
            className="group flex w-fit cursor-pointer items-center gap-2 text-neutral-300 transition-colors hover:bg-violet-500"
          >
            <category.Icon className="ml-2 text-3xl text-violet-500 transition-colors group-hover:text-neutral-900" />
            <span className="mr-2 whitespace-nowrap text-lg hover:text-neutral-900">
              {category.id}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideNav;
