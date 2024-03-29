import { Link } from "react-router-dom";
import { BiBookAdd, BiSearchAlt2, BiUserPlus } from "react-icons/bi";
import Button from "./Button";
import useScrollUp from "../utils/useScrollUp";
import { useAuth } from "../features/user/AuthContext";
import { useUser } from "../services/apiUsers";
import LoadSpinner from "./LoadSpinner";

function TopNav() {
  const auth = useAuth();
  const isScrollUp = useScrollUp();

  const { isPending, error, user } = useUser(auth?.uid);

  return (
    <nav
      className={`${
        isScrollUp ? "" : "-translate-y-full"
      } sticky top-0 z-20 flex items-center justify-around border-b-2 border-violet-500 border-opacity-20 bg-neutral-900 px-2 py-2 transition-transform md:justify-between md:gap-2 lg:gap-10 lg:px-12`}
    >
      <span className="hidden text-4xl font-bold uppercase text-neutral-300 md:inline-block">
        <Link to="/">aujezus</Link>
      </span>

      <div className="w-max-32 flex items-center gap-4 rounded-md bg-neutral-800 px-2 py-1 sm:w-80 md:w-96">
        <BiSearchAlt2 />
        <input
          placeholder="This no work man"
          type="text"
          className="w-full bg-neutral-800 outline-none placeholder:text-neutral-500"
        />
      </div>

      <div className="flex w-full items-center justify-around md:w-auto md:gap-4 lg:gap-6">
        {isPending && auth?.uid && <LoadSpinner />}
        {error && auth?.uid && <span>Error loading user: {error.message}</span>}
        {!auth?.uid && (
          <Button link="/auth" type="primary">
            <BiUserPlus />
            Log In
          </Button>
        )}
        {user && (
          <>
            <Link to={`/user/${user.id}`}>
              <img
                src={user.photoURL}
                alt="Profile picture"
                className="w-8 h-8 rounded-full"
              />
            </Link>
            <Button link="/blog/new" type="primary" size="xs">
              <BiBookAdd className="text-lg sm:text-xl" />
              <span className="hidden sm:inline-block">New Blog</span>
            </Button>
          </>
        )}
      </div>
    </nav>
  );
}

export default TopNav;
