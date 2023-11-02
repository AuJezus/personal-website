function CardDescription({ children }) {
  return (
    <div className="col-span-3 !border-l-0 p-4 text-base transition-colors group-hover:text-neutral-400">
      <span className="block text-justify">{children}</span>
    </div>
  );
}

export default CardDescription;
