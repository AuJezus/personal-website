import useScrollUp from "../utils/useScrollUp";
import { useState } from "react";
import CategoriesList from "../features/blog/CategoriesList";
import { BiCategoryAlt, BiX } from "react-icons/bi";

function SideNav() {
  const isScrollUp = useScrollUp();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={`${
          isScrollUp || isOpen ? "translate-y-0" : "translate-y-20"
        } fixed bottom-4 right-4 z-30 rounded-full border-2 border-violet-500 border-opacity-20 bg-neutral-900 p-2 text-4xl text-violet-500 transition-all lg:hidden`}
        onClick={() => setIsOpen((o) => !o)}
      >
        {isOpen ? <BiX /> : <BiCategoryAlt />}
      </button>

      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } fixed top-0 z-20 h-screen w-full flex-col items-center justify-center overflow-hidden border-violet-500 border-opacity-20 bg-neutral-900 py-6 transition-all md:sticky lg:flex md:w-auto md:min-w-[47px] md:max-w-[47px] md:items-stretch md:justify-between md:border-r-2 md:hover:min-w-[150px]`}
      >
        <CategoriesList />
      </nav>
    </>
  );
}

export default SideNav;
