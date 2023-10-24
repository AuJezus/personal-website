function Button({ children, type = "secondary", size, link = "" }) {
  const baseClasses =
    "flex items-center gap-1 border-2  px-2 py-1 text-lg transition-all hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[0.5rem_0.5rem_0px]  active:translate-x-0 active:translate-y-0 active:shadow-none active:duration-75";

  const types = {
    primary: "border-violet-500 text-violet-500 hover:shadow-violet-500",
    secondary: "border-neutral-400 text-neutral-400 hover:shadow-neutral-400",
  };

  const completeClasses = `${baseClasses} ${types[type]}`;

  if (link) return <a className={completeClasses}>{children}</a>;

  return <button className={completeClasses}>{children}</button>;
}

export default Button;
