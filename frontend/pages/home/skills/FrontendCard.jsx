import Skill from "../../../reusable/Skill";
import SkillContainer from "../../../reusable/SkillContainer";
import CardDescription from "./CardDescription";
import SkillCard from "./SkillCard";
import {
  BiChalkboard,
  BiLogoCss3,
  BiLogoGithub,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { SiReactquery, SiReactrouter, SiRedux } from "react-icons/si";

function FrontendCard() {
  return (
    <SkillCard icon={<BiChalkboard />} name="front-end">
      <CardDescription>
        I specialize in using React to transform designs into dynamic and
        user-friendly web experiences, making your digital projects both
        visually appealing and highly interactive.
      </CardDescription>
      <SkillContainer>
        <Skill name="html" logo={<BiLogoHtml5 />} color="hover:bg-orange-700" />
        <Skill
          name="javascript"
          logo={<BiLogoJavascript />}
          color="hover:bg-yellow-700"
        />
        <Skill
          name="router"
          logo={<SiReactrouter />}
          color="hover:bg-red-700"
        />
        <Skill name="react" logo={<BiLogoReact />} color="hover:bg-blue-700" />
        <Skill name="css" logo={<BiLogoCss3 />} color="hover:bg-sky-700" />
        <Skill
          name="tailwind"
          logo={<BiLogoTailwindCss />}
          color="hover:bg-cyan-700"
        />
        <Skill
          name="query"
          logo={<SiReactquery />}
          color="hover:bg-amber-700"
        />
        <Skill
          name="github"
          logo={<BiLogoGithub />}
          color="hover:bg-neutral-700"
        />
        <Skill
          name="redux"
          logo={<SiRedux />}
          color="hover:bg-purple-700"
          center
        />
      </SkillContainer>
    </SkillCard>
  );
}

export default FrontendCard;
