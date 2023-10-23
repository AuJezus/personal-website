function SkillCard({ children, icon, name }) {
  return (
    <div className="group grid w-full grid-cols-3 grid-rows-[auto,_auto,_1fr] divide-x divide-y divide-violet-500 border border-violet-500 shadow-lg transition-all hover:scale-105 hover:shadow-violet-500">
      <div className="flex aspect-[6/4] items-center justify-center">
        <box-icon name={icon} size="48px" color="#8b5cf6"></box-icon>
      </div>
      <div className="col-span-2 flex items-center justify-center !border-t-0">
        <span className="text-4xl text-neutral-400 transition-colors group-hover:text-neutral-300">
          {name}
        </span>
      </div>
      {children}
    </div>
  );
}

export default SkillCard;
