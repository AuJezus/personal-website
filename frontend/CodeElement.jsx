function CodeElement({ children, name, type }) {
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
            : "ml-4 text-neutral-400"
        } `}
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

export default CodeElement;
