import ConctactList from "./ConctactList";

function Footer() {
  return (
    <div className="grid grid-cols-3 place-items-center items-center border-t-2 border-violet-500 p-2 text-center lg:p-8">
      <span className="text-neutral-300">Made with ❤️ by AuJezus</span>
      <ConctactList />
      <span className="text-neutral-300">
        &copy; Copyright 2023 - Augustas Vaivada{" "}
      </span>
    </div>
  );
}

export default Footer;
