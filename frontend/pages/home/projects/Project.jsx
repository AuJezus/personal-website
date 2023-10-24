import { useState } from "react";
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
  const [viewingImage, setViewingImage] = useState(false);

  return (
    <>
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
                <box-icon
                  name="slideshow"
                  type="logo"
                  color="#8b5cf6"
                ></box-icon>
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
          <img
            onClick={() => setViewingImage(true)}
            src={image}
            alt={`Picture of ${name} project`}
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
        <div className="relative w-9/12">
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
