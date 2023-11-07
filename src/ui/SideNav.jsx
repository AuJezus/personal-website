import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../services/apiCategories";
import * as BiIcons from "react-icons/bi";
import CategoryItem from "./CategoryItem";

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

  return (
    <nav className="sticky top-0 hidden h-screen min-w-[47px] max-w-[47px] flex-col justify-between overflow-hidden border-r-2 border-violet-500 border-opacity-20 py-6 transition-all hover:min-w-[150px] lg:flex">
      <ul className="flex flex-col gap-6">
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            Icon={BiIcons[category.icon]}
            name={category.id}
          />
        ))}
      </ul>
      <ul className="mt-auto">
        <CategoryItem Icon={BiIcons["BiTagAlt"]} name="tags" />
      </ul>
    </nav>
  );
}

export default SideNav;
