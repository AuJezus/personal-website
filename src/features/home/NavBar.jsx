import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import useScrollUp from "../../utils/useScrollUp";

function NavBar() {
  const links = [
    {
      name: "about-me",
      url: "#about",
    },
    {
      name: "skills",
      url: "#skills",
    },
    {
      name: "projects",
      url: "#projects",
    },
    {
      name: "contacts",
      url: "#contacts",
    },
    {
      name: "blog",
      url: "/blogs/aujezus",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const isScrollUp = useScrollUp();

  return (
    <nav
      className={`${
        isScrollUp ? "translate-y-0" : "-translate-y-full"
      } fixed left-0 top-0 z-30 flex h-screen w-full items-center justify-center transition-transform  md:block  md:h-auto `}
    >
      <ul
        className={`${
          isOpen ? "scale-y-100" : "scale-y-0 delay-300"
        } flex h-full w-full origin-top flex-col justify-around bg-neutral-800 px-4 py-3 text-5xl text-neutral-100  transition-all duration-500 md:flex md:scale-y-100 md:flex-row md:justify-around md:gap-8 md:bg-transparent md:text-2xl lg:justify-end lg:text-lg`}
      >
        {links.map((link) => (
          <li
            className={`${
              isOpen ? "scale-y-100 delay-500" : "scale-y-0"
            } group relative origin-bottom border-b-2 border-violet-500 pb-4 transition-all md:scale-y-100 md:border-0 md:pb-0`}
            key={link.name}
          >
            <a href={link.url}>_{link.name}</a>
            <div className="absolute bottom-[4px] h-[2px] w-0 bg-neutral-100 transition-all duration-300 ease-in-out group-hover:w-full "></div>
          </li>
        ))}
      </ul>
      <button
        className="absolute right-0 top-0 text-5xl text-neutral-300 md:hidden"
        onClick={() => setIsOpen((o) => !o)}
      >
        {isOpen ? <BiX /> : <BiMenu />}
      </button>
    </nav>
  );
}

export default NavBar;
