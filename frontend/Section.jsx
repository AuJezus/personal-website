import AboutText from "./AboutText";

function Section() {
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
    <div className="pad mx-auto mt-28 max-w-[1200px] text-neutral-500">
      <div className="flex items-baseline gap-4">
        <span>
          <span className="text-violet-500">~</span> W:\Devs\AuJezus{">"}
        </span>
        <h2 className="text-xl text-violet-500">about-me</h2>
      </div>

      <h3 className="my-10 text-center text-5xl text-neutral-400">my life</h3>
      <div className="grid grid-cols-6 grid-rows-2 divide-x divide-y divide-violet-500 border  border-violet-500">
        <div className="col-span-3 row-span-2 flex justify-center p-4">
          <AboutText />
        </div>
        <div className="col-span-3 flex flex-col justify-center gap-4 !border-t-0 p-4">
          {levels.map((level) => (
            <div
              key={level.name}
              className="group grid grid-cols-[repeat(24,_1fr)] items-center gap-x-4 transition-all hover:scale-110 hover:bg-violet-950"
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
        <div className="group relative col-span-3 flex flex-col items-center justify-center gap-10 p-6">
          <p className=" text-4xl text-neutral-300">
            <span className="text-4xl text-violet-500">&quot;</span>
            Everything we hear is an opinion, not a fact. Everything we see is a
            perspective, not the truth.
            <span className="text-4xl text-violet-500">&quot;</span>
          </p>
          <p className="w-full text-end text-3xl">- Marcus Aurelius</p>
          <img
            className=" absolute bottom-0 -z-10 h-full opacity-0 hue-rotate-270 transition-opacity duration-1000 group-hover:opacity-25"
            src="./public/marcus-aurelius.png"
            alt="Statue of marcus aurelius"
          />
        </div>
      </div>
    </div>
  );
}

export default Section;
