import Section from "../../../reusable/Section";
import TerminalH2 from "../../../reusable/TerminalH2";
import FrontendCard from "./FrontendCard";
import BackendCard from "./BackendCard";
import MobileCard from "./MobileCard";

function SkillsSection() {
  return (
    <Section>
      <TerminalH2>skills</TerminalH2>

      <h3 className="my-10 text-center text-5xl text-neutral-300">
        my wizard wands
      </h3>

      <div className="flex items-start gap-10">
        <BackendCard />
        <FrontendCard />
        <MobileCard />
      </div>
    </Section>
  );
}

export default SkillsSection;
