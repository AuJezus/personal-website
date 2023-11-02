import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiMobileAlt,
} from "react-icons/bi";
import Skill from "../../../reusable/Skill";
import SkillContainer from "../../../reusable/SkillContainer";
import CardDescription from "./CardDescription";
import SkillCard from "./SkillCard";
import { SiReactquery, SiRedux } from "react-icons/si";

function MobileCard() {
  return (
    <SkillCard icon={<BiMobileAlt />} name="mobile">
      <CardDescription>
        I craft mobile apps for captivating user experiences on smartphones and
        tablets, helping your brand connect with users on the go. My focus is on
        creating seamless and engaging mobile solutions.
      </CardDescription>
      <SkillContainer>
        <Skill
          name="javascript"
          logo={<BiLogoJavascript />}
          color="hover:bg-yellow-700"
        />
        <Skill name="react" logo={<BiLogoReact />} color="hover:bg-blue-700" />
        <Skill
          name="tailwind"
          logo={<BiLogoTailwindCss />}
          color="hover:bg-cyan-700"
        />
        <Skill name="css" logo={<BiLogoCss3 />} color="hover:bg-sky-700" />
        <Skill
          name="query"
          logo={<SiReactquery />}
          color="hover:bg-amber-700"
        />
        <Skill name="redux" logo={<SiRedux />} color="hover:bg-purple-700" />
        <Skill
          name="navigation"
          logo="navigation"
          color="hover:bg-purple-700"
          center
        />
      </SkillContainer>
    </SkillCard>
  );
}

export default MobileCard;
