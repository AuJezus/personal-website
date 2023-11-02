import Section from "../../../reusable/Section";
import TerminalH2 from "../../../reusable/TerminalH2";
import Skill from "../../../reusable/Skill";
import SkillContainer from "../../../reusable/SkillContainer";
import Button from "../../../reusable/Button";
import Project from "./Project";
import SectionH3 from "../../../reusable/SectionH3";

function ProjectsSection() {
  const projects = [
    {
      name: "aujezus-play",
      description: "Play youtube playlists, using this simple player!",
      webUrl: "https://aujezus-play.onrender.com/",
      codeUrl: "https://github.com/AuJezus/aujezus-play",
      skills: [
        { name: "react", logo: "react", color: "hover:bg-blue-700" },
        { name: "node.js", logo: "nodejs", color: "hover:bg-green-700" },
        {
          name: "javascript",
          logo: "javascript",
          color: "hover:bg-yellow-700",
          center: true,
        },
      ],
      image: "project-images/aujezus-play.png",
    },
    {
      name: "forkify",
      description: "A simple recipe app, search, create and bookmark recipes!",
      codeUrl: "https://github.com/AuJezus/forkify",
      skills: [
        { name: "html", logo: "html5", color: "hover:bg-orange-700" },
        { name: "css", logo: "css3", color: "hover:bg-sky-700" },
        {
          name: "javascript",
          logo: "javascript",
          color: "hover:bg-yellow-700",
          center: true,
        },
      ],
      image: "project-images/forkify.png",
    },
    {
      name: "page-text-extractor",
      description:
        "Node.js CLI application for extracting text from webpages. Extract using css selectors.",
      webUrl: "https://www.npmjs.com/package/page-text-extractor",
      codeUrl: "https://github.com/AuJezus/page-text-extractor",
      skills: [
        {
          name: "node.js",
          logo: "nodejs",
          color: "hover:bg-green-700",
          center: true,
        },
      ],
      image: "project-images/page-text-extractor.gif",
    },
  ];

  return (
    <Section>
      <TerminalH2>projects</TerminalH2>

      <SectionH3>my creations</SectionH3>

      <div className=" flex flex-col items-center gap-16">
        {projects.map(
          ({ name, description, webUrl, codeUrl, skills, image }, i) => (
            <Project
              key={name}
              name={name}
              description={description}
              webUrl={webUrl}
              codeUrl={codeUrl}
              skills={skills}
              image={image}
              reverse={i % 2 !== 0}
            />
          ),
        )}
      </div>
    </Section>
  );
}

export default ProjectsSection;
