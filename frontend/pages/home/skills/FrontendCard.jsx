import CardDescription from "./CardDescription";
import Skill from "./Skill";
import SkillCard from "./SkillCard";
import SkillContainer from "./SkillContainer";

function FrontendCard() {
  return (
    <SkillCard icon="chalkboard" name="front-end">
      <CardDescription>
        I specialize in using React to transform designs into dynamic and
        user-friendly web experiences, making your digital projects both
        visually appealing and highly interactive.
      </CardDescription>
      <SkillContainer>
        <Skill name="html" logo="html5" color="hover:bg-orange-700" />
        <Skill
          name="javascript"
          logo="javascript"
          color="hover:bg-yellow-700"
        />
        <Skill name="router" logo="router" color="hover:bg-red-700" />
        <Skill name="react" logo="react" color="hover:bg-blue-700" />
        <Skill name="css" logo="css3" color="hover:bg-sky-700" />
        <Skill name="tailwind" logo="tailwind-css" color="hover:bg-cyan-700" />
        <Skill name="query" logo="query" color="hover:bg-amber-700" />
        <Skill name="github" logo="github" color="hover:bg-neutral-700" />
        <Skill name="redux" logo="redux" color="hover:bg-purple-700" center />
      </SkillContainer>
    </SkillCard>
  );
}

export default FrontendCard;
