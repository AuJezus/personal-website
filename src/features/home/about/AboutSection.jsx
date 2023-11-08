import Section from "../Section";
import SectionH3 from "../SectionH3";
import TerminalH2 from "../TerminalH2";
import AboutLevels from "./AboutLevels";
import AboutQuote from "./AboutQuote";
import AboutText from "./AboutText";

function AboutSection() {
  const levels = [
    { name: "coffe", level: "11/12", comment: "coffe is the thing I run on" },
    {
      name: "motivation",
      level: "w-12/12",
      comment: "always eager to learn cool stuff",
    },
    {
      name: "laziness",
      level: "w-1/5",
      comment: "hard-working young man",
    },
    {
      name: "pizza",
      level: "w-5/6",
      comment: "my brainpower food",
    },
    {
      name: "teamwork",
      level: "w-12/12",
      comment: "outgoing funny guy type",
    },

    {
      name: "computers",
      level: "w-11/12",
      comment: "loving computers since I was little",
    },
  ];

  return (
    <Section>
      <TerminalH2>about-me</TerminalH2>

      <SectionH3>my life</SectionH3>

      <div className="grid grid-cols-1 divide-y divide-violet-500 border border-violet-500 md:grid-cols-6 md:grid-rows-2 md:divide-x">
        <div className="col-span-3 p-4 md:row-span-2">
          <AboutText />
        </div>
        <div className="col-span-3 p-4 md:!border-t-0">
          <AboutLevels levels={levels} />
        </div>
        <div className="col-span-3 p-4">
          <AboutQuote />
        </div>
      </div>
    </Section>
  );
}

export default AboutSection;
