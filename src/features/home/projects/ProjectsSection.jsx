import Section from "../../../ui/Section";
import TerminalH2 from "../../../ui/TerminalH2";
import Project from "./Project";
import SectionH3 from "../../../ui/SectionH3";
import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
} from "react-icons/bi";

function ProjectsSection() {
  const projects = [
    {
      name: "aujezus-play",
      description: "Play youtube playlists, using this simple player!",
      webUrl: "https://aujezus-play.onrender.com/",
      codeUrl: "https://github.com/AuJezus/aujezus-play",
      skills: [
        { name: "react", logo: <BiLogoReact />, color: "hover:bg-blue-700" },
        {
          name: "node.js",
          logo: <BiLogoNodejs />,
          color: "hover:bg-green-700",
        },
        {
          name: "javascript",
          logo: <BiLogoJavascript />,
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
        { name: "html", logo: <BiLogoHtml5 />, color: "hover:bg-orange-700" },
        { name: "css", logo: <BiLogoCss3 />, color: "hover:bg-sky-700" },
        {
          name: "javascript",
          logo: <BiLogoJavascript />,
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
          logo: <BiLogoNodejs />,
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
