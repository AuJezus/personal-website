import { Link } from "react-router-dom";
import { BiBell, BiBookAdd, BiMenu, BiSearchAlt2 } from "react-icons/bi";
import Button from "./Button";
import useScrollUp from "../utils/useScrollUp";

function TopNav() {
  const isScrollUp = useScrollUp();

  return (
    <nav
      className={`${
        isScrollUp ? "" : "-translate-y-full"
      } sticky top-0 z-10 flex items-center justify-around border-b-2 border-violet-500 border-opacity-20 bg-neutral-900 px-2 py-2 transition-transform md:justify-between md:gap-2 lg:gap-10 lg:px-12`}
    >
      <span className="hidden text-4xl font-bold uppercase text-neutral-300 md:inline-block">
        <Link to="/">aujezus</Link>
      </span>

      <div className="w-max-32 flex items-center gap-4 rounded-md bg-neutral-800 px-2 py-1 sm:w-80 md:w-96">
        <BiSearchAlt2 />
        <input
          placeholder="Search"
          type="text"
          className="w-full bg-neutral-800 outline-none placeholder:text-neutral-500"
        />
      </div>

      <div className="flex w-full items-center justify-around md:w-auto md:gap-4 lg:gap-6">
        <BiBell className="text-2xl text-neutral-300" />
        <img
          src="https://randomuser.me/api/portraits/women/90.jpg"
          alt="Profile picture"
          className="w-8 rounded-full"
        />
        <Button type="primary" size="xs">
          <BiBookAdd className="text-lg sm:text-xl" />
          <span className="hidden sm:inline-block">New Blog</span>
        </Button>
      </div>
    </nav>
  );
}

export default TopNav;
