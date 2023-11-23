import { Link, useParams } from "react-router-dom";
import { getUser } from "../services/apiUsers";
import { useQuery } from "@tanstack/react-query";
import Button from "./Button";
import {
  BiEnvelope,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiPlus,
} from "react-icons/bi";
import LoadSpinner from "./LoadSpinner";

const contactIcons = {
  github: <BiLogoGithub />,
  instagram: <BiLogoInstagram />,
  email: <BiEnvelope />,
  linkedIn: <BiLogoLinkedin />,
  twitter: <BiLogoTwitter />,
};

function UserContacts({ id }) {
  const {
    isPending,
    isError,
    data: user,
    error,
  } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
  });

  return (
    <div className="flex lg:gap-y-4 lg:gap-x-8 lg:mb-0 lg:w-full lg:flex-wrap justify-around lg:justify-center text-4xl text-neutral-300 flex-wrap">
      {Object.entries(user.contacts).map(([type, value]) => {
        if (type === "email") {
          if (value.public)
            return (
              <Link key={type} to={`mailto:${value.address}`}>
                {contactIcons[type]}
              </Link>
            );
        } else
          return (
            <Link key={type} to={value.url}>
              {contactIcons[type]}
            </Link>
          );
      })}
    </div>
  );
}

export default UserContacts;
