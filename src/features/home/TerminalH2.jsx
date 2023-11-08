function TerminalH2({ children }) {
  return (
    <div className="mb-10 flex items-baseline gap-4 text-neutral-500">
      <span>
        <span className="text-violet-500">~</span> W:\Devs\AuJezus{">"}
      </span>
      <h2 className="text-xl text-violet-500">{children}</h2>
    </div>
  );
}

export default TerminalH2;
