import { BiChat, BiEnvelope } from "react-icons/bi";
import Button from "../../../reusable/Button";
import ConctactList from "../../../reusable/ConctactList";
import Section from "../../../reusable/Section";
import TerminalH2 from "../../../reusable/TerminalH2";
import Input from "./Input";

function ContactSection() {
  return (
    <Section last>
      <TerminalH2>contacts</TerminalH2>
      <form className="flex flex-col items-center gap-12">
        <h3 className="w-full bg-violet-500 text-center text-5xl text-neutral-900">
          HIRE A CODE WIZARD!
        </h3>
        <div className="flex max-w-xl flex-wrap justify-between gap-y-12">
          <Input name="name" id="name" required />
          <Input name="email" id="email" required />
          <Input name="text" id="text" textarea required />
        </div>
        <div className="flex flex-col gap-8 sm:flex-row">
          <Button type="primary">
            <BiChat />
            Send a message
          </Button>
          <Button type="secondary" link="mailto:augustasv16@gmail.com">
            <BiEnvelope />
            Send an email
          </Button>
        </div>
      </form>
    </Section>
  );
}

export default ContactSection;
