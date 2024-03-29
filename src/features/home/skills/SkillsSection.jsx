import Section from "../Section";
import TerminalH2 from "../TerminalH2";
import FrontendCard from "./FrontendCard";
import BackendCard from "./BackendCard";
import MobileCard from "./MobileCard";
import SectionH3 from "../SectionH3";

function SkillsSection() {
  return (
    <Section id="skills">
      <TerminalH2>skills</TerminalH2>

      <SectionH3>my wizard wands</SectionH3>

      <div className="flex flex-col flex-wrap items-center justify-center gap-5 md:flex-row md:items-stretch lg:flex-nowrap lg:items-start lg:gap-10">
        <BackendCard />
        <FrontendCard />
        <MobileCard />
      </div>
    </Section>
  );
}

export default SkillsSection;
