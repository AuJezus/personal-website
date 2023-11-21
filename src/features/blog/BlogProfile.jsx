import { useQuery } from "@tanstack/react-query";
import ConctactList from "../../ui/ConctactList";
import { useBlog } from "./BlogContext";
import LoadSpinner from "../../ui/LoadSpinner";
import { getUser } from "../../services/apiUsers";
import UserContacts from "../../ui/UserContacts";

function BlogProfile() {
  const { userId } = useBlog();

  const {
    isPending,
    isError,
    data: user,
    error,
  } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUser(userId),
  });

  if (isError) return <p>There was an error: {error.message}</p>;

  if (isPending)
    return (
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <LoadSpinner size="lg" />
      </div>
    );

  return (
    <div className="mb-4 flex items-center justify-center gap-4 text-lg text-violet-500 md:gap-16 lg:mb-0 lg:flex-col lg:gap-4">
      <div className="relative h-12 w-12 border-2 border-violet-500 lg:w-24 lg:h-24">
        <img src={user.photoURL} alt="Author's profile picture" />
        <div className="hero-overlay hidden lg:block"></div>
      </div>
      <span>
        {user === false ? "User was Deleted" : `@${user.displayName}`}
      </span>
      {user !== false && <UserContacts id={userId} />}
    </div>
  );
}

export default BlogProfile;
