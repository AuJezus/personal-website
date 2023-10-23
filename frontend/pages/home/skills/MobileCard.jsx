import CardDescription from "./CardDescription";
import Skill from "./Skill";
import SkillCard from "./SkillCard";
import SkillContainer from "./SkillContainer";

function MobileCard() {
  return (
    <SkillCard icon="mobile-alt" name="mobile">
      <CardDescription>
        I craft mobile apps for captivating user experiences on smartphones and
        tablets, helping your brand connect with users on the go. My focus is on
        creating seamless and engaging mobile solutions.
      </CardDescription>
      <SkillContainer>
        <Skill name="html" logo="html5" color="hover:bg-orange-700" />
        <Skill
          name="javascript"
          logo="javascript"
          color="hover:bg-yellow-700"
        />
        <Skill name="router" logo="router" color="hover:bg-red-700" />
      </SkillContainer>
    </SkillCard>
  );
}

export default MobileCard;
