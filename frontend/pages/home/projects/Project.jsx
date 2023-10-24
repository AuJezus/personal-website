import Button from "../../../reusable/Button";
import Skill from "../../../reusable/Skill";
import SkillContainer from "../../../reusable/SkillContainer";

function Project({
  name,
  description,
  webUrl = "",
  codeUrl = "",
  skills,
  image,
  reverse,
}) {
  return (
    <div
      className={`${
        reverse ? "flex-row-reverse divide-x-reverse" : ""
      } flex w-full divide-x-2 divide-violet-500 border-2 border-violet-500 transition-all hover:scale-105 hover:shadow-[0_0_15px] hover:shadow-violet-500`}
    >
      <div className="w-1/3 px-4 py-8">
        <h4 className="mb-8 text-center text-4xl text-neutral-300">{name}</h4>
        <p className="mb-8 text-center">{description}</p>
        <div className="mb-6 flex justify-center gap-10">
          {webUrl && (
            <Button type="primary" link={webUrl}>
              <box-icon name="slideshow" type="logo" color="#8b5cf6"></box-icon>
              view
            </Button>
          )}
          {codeUrl && (
            <Button link={codeUrl}>
              <box-icon name="github" type="logo" color="#a3a3a3"></box-icon>
              code
            </Button>
          )}
        </div>
        <SkillContainer heading="made with">
          {skills.map((skill) => (
            <Skill
              key={skill.name}
              name={skill.name}
              logo={skill.logo}
              color={skill.color}
              center={skill.center}
            />
          ))}
        </SkillContainer>
      </div>
      <div className="flex w-2/3 items-center p-4">
        <img src={image} alt={`Picture of ${name} project`} />
      </div>
    </div>
  );
}

export default Project;

/*
<div className="grid w-full grid-cols-[auto,_1fr] divide-x-2 divide-violet-500 border-2 border-violet-500">
      <div className="px-4 py-8">
        <h4 className="mb-8 text-center text-4xl text-neutral-300">
          aujezus-play
        </h4>
        <p className="mb-8 text-center">
          Play youtube playlists, using this simple player!
        </p>
        <div className="mb-6 flex justify-center gap-10">
          <Button type="primary">
            <box-icon name="slideshow" type="logo" color="#8b5cf6"></box-icon>
            view
          </Button>
          <Button>
            <box-icon name="github" type="logo" color="#a3a3a3"></box-icon>
            code
          </Button>
        </div>
        <SkillContainer heading="made with">
          <Skill
            name="postgres"
            logo="postgresql"
            color="hover:bg-indigo-700"
          />
          <Skill name="php" logo="php" color="hover:bg-purple-700" />
          <Skill name="mysql" logo="mysql" color="hover:bg-blue-700" />
          <Skill name="firebase" logo="firebase" color="hover:bg-amber-700" />
        </SkillContainer>
      </div>
      <div className="flex items-center p-4">
        <img
          src={"project-images/aujezus-play.png"}
          alt={`Picture of ${name} project`}
        />
      </div>
    </div>
*/
