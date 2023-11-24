import { Link } from "react-router-dom";

function Button({
  children,
  type = "secondary",
  size = "lg",
  link = "",
  click,
  disabled = false,
}) {
  const baseClasses =
    "flex items-center gap-1 border-2 flex-shrink-0 px-2 py-1 transition-all hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[0.5rem_0.5rem_0px]  active:translate-x-0 active:translate-y-0 active:shadow-none active:duration-75";

  const sizes = {
    xs: "text-xs",
    sm: "text-sm sm:text-lg",
    lg: "text-lg",
  };
  const types = {
    primary: "border-violet-500 text-violet-500 hover:shadow-violet-500",
    secondary: "border-neutral-400 text-neutral-400 hover:shadow-neutral-400",
  };

  const completeClasses = `${baseClasses} ${types[type]} ${sizes[size]}`;

  if (link)
    return (
      <Link className={completeClasses} to={link}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} onClick={click} className={completeClasses}>
      {children}
    </button>
  );
}

export default Button;
