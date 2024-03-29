function SkillCard({ children, icon, name }) {
  return (
    <div className="group grid max-w-lg grid-cols-3 grid-rows-[auto,_auto,_1fr] divide-x divide-y divide-violet-500 border border-violet-500 transition-all hover:shadow-lg hover:shadow-violet-500 sm:hover:scale-105 md:max-w-sm">
      <div className="flex aspect-[6/4] items-center justify-center text-5xl text-violet-500">
        {icon}
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
