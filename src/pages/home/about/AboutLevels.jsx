function AboutLevels({ levels }) {
  return (
    <div className="flex h-full flex-col justify-between gap-4 md:gap-0">
      {levels.map((level) => (
        <div
          key={level.name}
          className="group grid grid-cols-[repeat(1fr,_auto,_1fr)] items-center gap-x-4 gap-y-2 transition-all hover:scale-110 hover:bg-violet-950 lg:grid-cols-[repeat(24,_1fr)]"
        >
          <span className="col-span-5 text-neutral-400">
            _{level.name}
            {">"}
          </span>
          <div className="col-span-12 h-2 w-full rounded-sm border-2 border-violet-500 ">
            <div className={`h-full ${level.level} bg-violet-500`}></div>
          </div>
          <span className="col-span-7 text-sm">
            {"//"} {level.comment}
          </span>
        </div>
      ))}
    </div>
  );
}

export default AboutLevels;
