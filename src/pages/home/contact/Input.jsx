function Input({ name, id, required = false, textarea = false }) {
  return (
    <div
      className={`${
        textarea ? "w-full" : "sm:w-auto"
      } flex w-full flex-col gap-2 text-lg`}
    >
      <label className="text-neutral-300" htmlFor={id}>
        _{name}:
      </label>

      {!textarea && (
        <input
          className="border-2 border-neutral-400 bg-neutral-800 px-2 text-neutral-400 focus:border-violet-500 focus:outline-none"
          id="id"
          type="text"
          placeholder={required ? "*" : ""}
          required={required}
        />
      )}
      {textarea && (
        <textarea
          className="h-40 w-full border-2 border-neutral-400 bg-neutral-800 px-2 text-neutral-400 focus:border-violet-500 focus:outline-none"
          id="id"
          type="text"
          placeholder={required ? "*" : ""}
          required={required}
        ></textarea>
      )}
    </div>
  );
}

export default Input;
