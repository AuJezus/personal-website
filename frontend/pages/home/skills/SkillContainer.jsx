function SkillContainer({ children }) {
  return (
    <div className="col-span-3 grid grid-cols-2 justify-items-center gap-x-12 gap-y-6 !border-l-0 p-4">
      <p className="col-span-2 text-violet-500">{"//"} magic spells</p>
      {children}
    </div>
  );
}

export default SkillContainer;
