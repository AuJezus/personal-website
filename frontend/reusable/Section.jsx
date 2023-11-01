function Section({ children, last = false }) {
  return (
    <div
      className={`${
        last ? "mb-24" : "mb-48"
      } mx-auto max-w-[1200px] p-2 text-neutral-500 md:p-0`}
    >
      {children}
    </div>
  );
}

export default Section;
