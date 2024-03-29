function Section({ children, last = false, id }) {
  return (
    <div
      id={id}
      className={`${
        last ? "mb-12 md:mb-24" : "mb-20 md:mb-48"
      } mx-auto max-w-[1200px] p-2 text-neutral-500 md:p-0`}
    >
      {children}
    </div>
  );
}

export default Section;
