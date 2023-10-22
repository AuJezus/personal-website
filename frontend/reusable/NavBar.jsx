function NavBar() {
  const links = [
    {
      name: "about-me",
      url: "somelink",
    },
    {
      name: "skills",
      url: "somelink",
    },
    {
      name: "projects",
      url: "somelink",
    },
    {
      name: "contacts",
      url: "somelink",
    },
    {
      name: "blog",
      url: "somelink",
    },
  ];

  return (
    <nav className="absolute left-0 top-0 z-30 w-full">
      <ul className="flex justify-end gap-8 px-4 py-3 text-lg text-neutral-100">
        {links.map((link) => (
          <li className=" group relative" key={link.name}>
            <a href={link.url}>_{link.name}</a>
            <div className="absolute bottom-[5px] h-[2px] w-0 bg-neutral-100 transition-all duration-300 ease-in-out group-hover:w-full "></div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
