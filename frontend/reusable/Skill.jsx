function Skill({ color, logo, name, center }) {
  const notBoxicon = ["router", "query", "redux", "navigation", "mysql"];

  return (
    <div
      className={`${color} ${
        center ? "col-span-full" : ""
      } flex items-center justify-between gap-2 px-2 py-1 transition-colors md:gap-4`}
    >
      {notBoxicon.includes(logo) ? (
        <img className="w-[24px]" src={`icons/${logo}.svg`} />
      ) : (
        <box-icon name={logo} type="logo" color="#d4d4d4"></box-icon>
      )}

      <span className="text-xl text-neutral-300">{name}</span>
    </div>
  );
}

export default Skill;
