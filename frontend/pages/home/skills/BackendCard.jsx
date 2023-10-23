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
      {/* js, express, postgre, php, mysql, firebase*/}
      <SkillContainer>
        <Skill
          name="javascript"
          logo="javascript"
          color="hover:bg-yellow-700"
        />
        <Skill name="node.js" logo="nodejs" color="hover:bg-green-700" />
        <Skill name="github" logo="github" color="hover:bg-neutral-700" />
        <Skill name="postgres" logo="postgresql" color="hover:bg-indigo-700" />
        <Skill name="php" logo="php" color="hover:bg-purple-700" />
        <Skill name="mysql" logo="mysql" color="hover:bg-blue-700" />
        <Skill
          name="firebase"
          logo="firebase"
          color="hover:bg-amber-700"
          center
        />
      </SkillContainer>
    </SkillCard>
  );
}

export default BackendCard;
