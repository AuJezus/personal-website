import { IconContext } from "react-icons";

function SkillContainer({ children, heading = "" }) {
  return (
    <div className="col-span-3 grid grid-cols-2 justify-items-center gap-y-6 !border-l-0 p-4 md:gap-x-6 lg:gap-x-12">
      <p className="col-span-2 text-violet-500">
        {"//"} {!heading ? "magic spells" : heading}
      </p>
      <IconContext.Provider value={{ className: "text-2xl text-neutral-200" }}>
        {children}
      </IconContext.Provider>
    </div>
  );
}

export default SkillContainer;
