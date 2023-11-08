import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../services/apiCategories";
import * as BiIcons from "react-icons/bi";
import CategoryItem from "./CategoryItem";
import useScrollUp from "../utils/useScrollUp";
import { useState } from "react";

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

  const isScrollUp = useScrollUp();
  const [isOpen, setIsOpen] = useState(false);

  if (isError) return <p>There was an error: {error.message}</p>;

  if (isPending) return <p>Loading...</p>;

  return (
    <>
      <button
        className={`${
          isScrollUp || isOpen ? "translate-y-0" : "translate-y-20"
        } fixed bottom-4 right-4 z-30 rounded-full border-2 border-violet-500 border-opacity-20 bg-neutral-900 p-2 text-4xl text-violet-500 transition-all md:hidden`}
        onClick={() => setIsOpen((o) => !o)}
      >
        {isOpen ? <BiIcons.BiX /> : <BiIcons.BiCategoryAlt />}
      </button>

      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } fixed top-0 z-20 h-screen w-full flex-col items-center justify-center overflow-hidden border-violet-500 border-opacity-20 bg-neutral-900 py-6 transition-all md:sticky md:flex md:w-auto md:min-w-[47px] md:max-w-[47px] md:items-stretch md:justify-between md:border-r-2 md:hover:min-w-[150px]`}
      >
        <ul className="flex flex-col gap-20 md:gap-6">
          {categories.map((category) => (
            <CategoryItem
              key={category.id}
              Icon={BiIcons[category.icon]}
              name={category.id}
            />
          ))}
        </ul>
        <ul className="mt-20 md:mt-0">
          <CategoryItem Icon={BiIcons["BiTagAlt"]} name="tags" />
        </ul>
      </nav>
    </>
  );
}

export default SideNav;
