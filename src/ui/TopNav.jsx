import { Link } from "react-router-dom";
import { BiBell, BiSearchAlt2 } from "react-icons/bi";
import Button from "./Button";

function TopNav({ scrollRef }) {
  return (
    <nav
      className={`flex items-center justify-between gap-10 border-b-2 border-violet-500 border-opacity-20 px-12 py-2 transition-transform`}
    >
      <span className="text-4xl font-bold uppercase text-neutral-300">
        <Link to="/">aujezus</Link>
      </span>

      <div className="flex items-center gap-4 rounded-md bg-neutral-800 px-2 py-1">
        <BiSearchAlt2 />
        <input
          placeholder="Search"
          type="text"
          className="w-96 bg-neutral-800 outline-none placeholder:text-neutral-500"
        />
      </div>

      <div className="flex items-center gap-6">
        <BiBell className="text-2xl text-neutral-300" />
        <img
          src="https://randomuser.me/api/portraits/women/90.jpg"
          alt="Profile picture"
          className="w-8 rounded-full"
        />
        <Button type="primary" size="xs">
          + New Blog
        </Button>
      </div>
    </nav>
  );
}

export default TopNav;
