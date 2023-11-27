import { BiBookAdd, BiLogOut, BiWrench } from "react-icons/bi";
import { Navigate, useParams } from "react-router-dom";
import BlogList from "../features/blog/BlogList";
import LoadSpinner from "../ui/LoadSpinner";
import UserContacts from "../ui/UserContacts";
import { useUser } from "../services/apiUsers";
import Button from "../ui/Button";
import { logOut } from "../services/auth";
import { useAuth } from "../features/user/AuthContext";

function User() {
  const { id } = useParams();
  const auth = useAuth();
  const { isPending, user, error } = useUser(id);

  if (error) return <p>There was an error: {error.message}</p>;

  if (isPending)
    return (
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <LoadSpinner size="lg" />
      </div>
    );

  if (!user?.displayName) return <Navigate to="/notFound" />;

  return (
    <>
      <div className="lg:flex items-center lg:max-w-6xl lg:mx-auto">
        <div className="flex lg:w-full items-center justify-around mt-8 mb-8 max-w-lg lg:mx-0 mx-auto">
          <div className="w-24 h-24 relative border-2 border-violet-500">
            <img
              className="w-full h-full object-cover"
              src={user.photoURL}
              alt="Author's profile picture"
            />
            <div className="hero-overlay block"></div>
          </div>

          <div className="w-60 lg:w-72">
            <p className="text-2xl lg:text-3xl text-neutral-300 underline decoration-violet-500">
              {user.displayName}
            </p>
            <div className="text-neutral-500 lg:text-lg flex flex-wrap gap-4 mt-4 items-center">
              <p>
                <span className="text-neutral-300">21</span> followers
              </p>
              <p>
                <span className="text-neutral-300">42</span> following
              </p>
              <p>
                <span className="text-neutral-300">12</span> posts
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 w-full">
          <UserContacts id={id} />
          {auth?.uid === id && (
            <div className="gap-4 flex">
              <Button size="sm" type="primary" link="/blog/new">
                <BiBookAdd /> New Blog
              </Button>
              <Button size="sm" link="/user/settings">
                <BiWrench /> Settings
              </Button>
              <Button click={logOut} size="sm">
                <BiLogOut />
                Log Out
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="border-t-2 border-violet-500 opacity-20 mb-4"></div>

      <BlogList initialFilter={{ userId: user.id }} />
    </>
  );
}

export default User;
