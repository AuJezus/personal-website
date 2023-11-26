import {
  BiEnvelope,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";
import LoadSpinner from "./LoadSpinner";
import { useUser } from "../services/apiUsers";

const contactIcons = {
  github: <BiLogoGithub />,
  instagram: <BiLogoInstagram />,
  email: <BiEnvelope />,
  linkedIn: <BiLogoLinkedin />,
  twitter: <BiLogoTwitter />,
};

function UserContacts({ id }) {
  const { isPending, error, user } = useUser(id);

  if (isPending) return <LoadSpinner />;

  if (error) return <p>There was an error: {error}</p>;

  return (
    <div className="flex lg:gap-y-4 lg:gap-x-8 lg:mb-0 lg:w-full lg:flex-wrap justify-around lg:justify-center text-4xl text-neutral-300 flex-wrap">
      {Object.entries(user.contacts).map(([type, value]) => {
        return (
          <a
            className="hover:scale-110 transition-transform"
            key={type}
            href={type === "email" ? `mailto:${value.address}` : value}
          >
            {contactIcons[type]}
          </a>
        );
      })}
    </div>
  );
}

export default UserContacts;
