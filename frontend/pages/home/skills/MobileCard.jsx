import Skill from "../../../reusable/Skill";
import SkillContainer from "../../../reusable/SkillContainer";
import CardDescription from "./CardDescription";
import SkillCard from "./SkillCard";

function MobileCard() {
  return (
    <SkillCard icon="mobile-alt" name="mobile">
      <CardDescription>
        I craft mobile apps for captivating user experiences on smartphones and
        tablets, helping your brand connect with users on the go. My focus is on
        creating seamless and engaging mobile solutions.
      </CardDescription>
      <SkillContainer>
        <Skill
          name="javascript"
          logo="javascript"
          color="hover:bg-yellow-700"
        />
        <Skill name="react" logo="react" color="hover:bg-blue-700" />
        <Skill name="tailwind" logo="tailwind-css" color="hover:bg-cyan-700" />
        <Skill name="css" logo="css3" color="hover:bg-sky-700" />
        <Skill name="query" logo="query" color="hover:bg-amber-700" />
        <Skill name="redux" logo="redux" color="hover:bg-purple-700" />
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
