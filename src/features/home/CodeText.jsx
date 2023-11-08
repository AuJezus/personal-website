import { useState } from "react";

function CodeText({ children, name, type }) {
  const [reveal, setReveal] = useState(false);

  return (
    <div className="group">
      <span className={`${type === "heading" ? "" : "block"}`}>
        &lt;
        <span className="text-violet-950 transition-colors group-hover:text-violet-800">
          {name}
        </span>
        &gt;
      </span>
      <p
        className={`${
          type === "heading"
            ? "inline text-violet-500"
            : `${
                reveal ? "line-clamp-none" : "line-clamp-3"
              } ml-4 text-neutral-400 md:line-clamp-none`
        } `}
        onClick={() => setReveal((r) => !r)}
      >
        {children}
      </p>
      <span className={`${type === "heading" ? "" : "block"}`}>
        &lt;/
        <span className="text-violet-950 transition-colors group-hover:text-violet-800">
          {name}
        </span>
        &gt;
      </span>
    </div>
  );
}

export default CodeText;
