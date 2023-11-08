import {
  BiLogoFirebase,
  BiLogoGithub,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoPhp,
  BiServer,
} from "react-icons/bi";
import Skill from "../Skill";
import SkillContainer from "../SkillContainer";
import CardDescription from "./CardDescription";
import SkillCard from "./SkillCard";
import { SiPostgresql } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

function BackendCard() {
  return (
    <SkillCard icon={<BiServer />} name="back-end">
      <CardDescription>
        I specialize in creating the backbone of web applications, ensuring they
        run securely and efficiently. My expertise guarantees a smooth and
        reliable user experience.
      </CardDescription>
      <SkillContainer>
        <Skill
          name="javascript"
          logo={<BiLogoJavascript />}
          color="hover:bg-yellow-700"
        />
        <Skill
          name="node.js"
          logo={<BiLogoNodejs />}
          color="hover:bg-green-700"
        />
        <Skill
          name="github"
          logo={<BiLogoGithub />}
          color="hover:bg-neutral-700"
        />
        <Skill
          name="postgres"
          logo={<SiPostgresql />}
          color="hover:bg-indigo-700"
        />
        <Skill name="php" logo={<BiLogoPhp />} color="hover:bg-purple-700" />
        <Skill name="mysql" logo={<GrMysql />} color="hover:bg-blue-700" />
        <Skill
          name="firebase"
          logo={<BiLogoFirebase />}
          color="hover:bg-amber-700"
          center
        />
      </SkillContainer>
    </SkillCard>
  );
}

export default BackendCard;
