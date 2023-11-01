import { IconContext } from "react-icons";
import {
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoInstagram,
  BiLogoGithub,
  BiEnvelope,
} from "react-icons/bi";
import Contact from "./Contact";

function ConctactList({ classes, size = "md" }) {
  const sizeClasses = {
    sm: { className: "text-3xl lg:text-3xl md:text-4xl text-neutral-300" },
    md: {},
  };

  return (
    <div className={`${classes} flex justify-center gap-10`}>
      <IconContext.Provider value={sizeClasses[size]}>
        <Contact href="https://twitter.com/AuJezus">
          <BiLogoTwitter />
        </Contact>

        <Contact href="https://www.linkedin.com/in/augustas-vaivada-2a9ba326a/">
          <BiLogoLinkedin />
        </Contact>

        <Contact href="https://www.instagram.com/augustas_wa/">
          <BiLogoInstagram />
        </Contact>

        <Contact href="https://github.com/AuJezus">
          <BiLogoGithub />
        </Contact>

        <Contact href="mailto:augustasv16@gmail.com">
          <BiEnvelope />
        </Contact>
      </IconContext.Provider>
    </div>
  );
}

export default ConctactList;
