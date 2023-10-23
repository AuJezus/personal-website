function Skill({ color, logo, name }) {
  const notBoxicon = ["router", "query", "redux"];

  return (
    <div
      className={`${color} flex items-center justify-between gap-4 px-2 py-1`}
    >
      {notBoxicon.includes(logo) ? (
        <img className="w-[24px]" src={`${logo}.svg`} />
      ) : (
        <box-icon name={logo} type="logo" color="#d4d4d4"></box-icon>
      )}

      <span className="text-xl text-neutral-300">{name}</span>
    </div>
  );
}

export default Skill;
