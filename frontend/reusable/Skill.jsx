function Skill({ color, logo, name, center }) {
  const notInLibrary = ["navigation"];

  return (
    <div
      className={`${color} ${
        center ? "col-span-full" : ""
      } flex items-center justify-between gap-2 px-2 py-1 transition-colors md:gap-4`}
    >
      {notInLibrary.includes(logo) ? (
        <img className="w-[24px]" src={`icons/${logo}.svg`} />
      ) : (
        logo
      )}

      <span className="text-xl text-neutral-300">{name}</span>
    </div>
  );
}

export default Skill;
