import {
  BiEnvelope,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiPlus,
  BiWrench,
  BiX,
} from "react-icons/bi";
import { useAuth } from "./AuthContext";
import { IconContext } from "react-icons";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import BlogList from "../blog/BlogList";

function Profile() {
  const user = useAuth();

  const contactIcons = {
    github: <BiLogoGithub />,
    instagram: <BiLogoInstagram />,
    email: <BiEnvelope />,
    linkedIn: <BiLogoLinkedin />,
    twitter: <BiLogoTwitter />,
  };

  const contacts = [
    { type: "github", url: "github.com", public: true },
    { type: "instagram", url: "instagram.com", public: true },
    { type: "email", url: "instagram.com", public: true },
    { type: "linkedIn", url: "linkedin.com", public: true },
    { type: "twitter", url: "linkedin.com", public: true },
  ];

  return (
    <>
      <div className="lg:flex items-center lg:max-w-6xl lg:mx-auto">
        <div className="flex lg:w-full items-center justify-around mt-8 mb-8 max-w-lg lg:mx-0 mx-auto">
          <div className="w-24 h-24 relative border-2 border-violet-500">
            <img
              className="w-full h-full"
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

        <div className="flex lg:gap-y-4 lg:gap-x-8 mb-8 lg:mb-0 lg:w-full lg:flex-wrap justify-around lg:justify-center text-4xl text-neutral-300 flex-wrap">
          {contacts.map(
            (c) =>
              c.public && (
                <Link key={c.type} to={c.url}>
                  {contactIcons[c.type]}
                </Link>
              )
          )}
          <div className="lg:w-full lg:flex lg:justify-center">
            <Button type="primary" size="sm">
              <BiPlus />
              Follow
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-violet-500 opacity-20 mb-4"></div>

      <BlogList />
    </>
  );
}

export default Profile;
