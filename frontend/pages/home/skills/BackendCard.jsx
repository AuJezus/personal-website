import CardDescription from "./CardDescription";
import Skill from "./Skill";
import SkillCard from "./SkillCard";
import SkillContainer from "./SkillContainer";

function BackendCard() {
  return (
    <SkillCard icon="server" name="back-end">
      <CardDescription>
        I specialize in creating the backbone of web applications, ensuring they
        run securely and efficiently. My expertise guarantees a smooth and
        reliable user experience.
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
        <Skill name="react" logo="query" color="hover:bg-amber-700" />
        <Skill name="github" logo="github" color="hover:bg-neutral-700" />
        <Skill name="redux" logo="redux" color="hover:bg-purple-700" />
      </SkillContainer>
    </SkillCard>
  );
}

export default BackendCard;
