import { useState } from "react";
import Button from "../../../ui/Button";
import Skill from "../../../ui/Skill";
import SkillContainer from "../../../ui/SkillContainer";
import { BiLogoGithub, BiSlideshow } from "react-icons/bi";

function Project({
  name,
  description,
  webUrl = "",
  codeUrl = "",
  skills,
  image,
  reverse,
}) {
  const [viewingImage, setViewingImage] = useState(false);

  return (
    <>
      <div
        className={`${
          reverse ? "flex-row-reverse divide-x-reverse" : ""
        } flex h-full max-w-xl flex-col items-stretch divide-violet-500 border-2 border-violet-500 transition-all hover:shadow-[0_0_15px] hover:shadow-violet-500 sm:hover:scale-105 md:max-w-full md:flex-row md:divide-x-2`}
      >
        <div className="px-4 py-8 md:w-1/3">
          <h4 className="mb-8 text-center text-4xl text-neutral-300">{name}</h4>
          <p className="mb-8 text-center">{description}</p>
          <div className="mb-6 flex justify-center gap-10">
            {webUrl && (
              <Button type="primary" link={webUrl}>
                <BiSlideshow />
                view
              </Button>
            )}
            {codeUrl && (
              <Button link={codeUrl}>
                <BiLogoGithub />
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
        <div className="flex items-center p-4 md:w-2/3">
          <img
            onClick={() => setViewingImage(true)}
            src={image}
            alt={`Picture of ${name} project`}
            className=""
          />
        </div>
      </div>

      <div
        onClick={() => setViewingImage(false)}
        className={`${
          viewingImage
            ? "fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center backdrop-blur-md"
            : "hidden"
        }`}
      >
        <div className="relative w-11/12 md:w-9/12">
          <img
            className=""
            onClick={() => setViewingImage(true)}
            src={image}
            alt={`Picture of ${name} project`}
          />
          <button
            onClick={() => setViewingImage(false)}
            className={`${
              viewingImage ? "flex" : "hidden"
            } absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 rounded-full bg-neutral-800 p-1`}
          >
            <box-icon name="x-circle" color="#8b5cf6"></box-icon>
          </button>
        </div>
      </div>
    </>
  );
}

export default Project;
