function AboutQuote() {
  return (
    <div className="group relative flex h-full flex-col items-center justify-between">
      <p className=" text-4xl text-neutral-300">
        <span className="text-4xl text-violet-500">&quot;</span>
        Everything we hear is an opinion, not a fact. Everything we see is a
        perspective, not the truth.
        <span className="text-4xl text-violet-500">&quot;</span>
      </p>
      <p className="w-full text-end text-3xl">- Marcus Aurelius</p>
      <img
        className=" absolute bottom-0 -z-10 h-full opacity-0 hue-rotate-270 transition-opacity duration-1000 group-hover:opacity-25"
        src="/marcus-aurelius.png"
        alt="Statue of marcus aurelius"
      />
    </div>
  );
}

export default AboutQuote;
