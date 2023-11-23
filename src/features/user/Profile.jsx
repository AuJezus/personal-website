import { BiWrench } from "react-icons/bi";

import Button from "../../ui/Button";
import { Navigate, useParams } from "react-router-dom";
import BlogList from "../blog/BlogList";
import { useQuery } from "@tanstack/react-query";
import LoadSpinner from "../../ui/LoadSpinner";
import { getUser } from "../../services/apiUsers";
import UserContacts from "../../ui/UserContacts";

function Profile() {
  const { id } = useParams();
  const {
    isPending,
    isError,
    data: user,
    error,
  } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
  });

  console.log(user);

  if (user === false) return <Navigate to="/notFound" />;

  if (isError) return <p>There was an error: {error.message}</p>;

  if (isPending)
    return (
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <LoadSpinner size="lg" />
      </div>
    );

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
              <Button size="sm" link="settings">
                <BiWrench /> Settings
              </Button>
            </div>
          </div>
        </div>
        <UserContacts id={id} />
      </div>

      <div className="border-t-2 border-violet-500 opacity-20 mb-4"></div>

      <BlogList />
    </>
  );
}

export default Profile;
