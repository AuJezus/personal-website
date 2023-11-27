import LoadSpinner from "../../ui/LoadSpinner";
import UserContacts from "../../ui/UserContacts";
import { useUser } from "../../services/apiUsers";
import { Link } from "react-router-dom";

function BlogProfile({ userId }) {
  const { isPending, error, user } = useUser(userId);

  if (error) return <p>There was an error loading user</p>;

  if (isPending)
    return (
      <div>
        <LoadSpinner size="lg" />
      </div>
    );

  return (
    <div className="flex items-center justify-center px-2 gap-4 text-lg text-violet-500 md:gap-16 lg:mb-0 lg:flex-col lg:gap-4">
      <div className="relative h-12 w-12 shrink-0 border-2 border-violet-500 lg:w-24 lg:h-24">
        <img
          src={user.photoURL}
          alt="Author's profile picture"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay hidden lg:block"></div>
      </div>
      <Link to={`/user/${userId}`}>
        {user === false ? "User was Deleted" : `@${user.displayName}`}
      </Link>
      <div className="w-full">
        {user !== false && <UserContacts id={userId} />}
      </div>
    </div>
  );
}

export default BlogProfile;
