import {  useEffect, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

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
  const [isOpen, setIsOpen] = useState(false);

  const [show, setShow] = useState(true);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;
  
    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
  
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setShow(scrollY > lastScrollY ? false : true);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };
  
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };
  
    window.addEventListener("scroll", onScroll);
    console.log(show);
  
    return () => window.removeEventListener("scroll", onScroll);
  }, [show]);

  return (
    <nav
      className={`${show ? 'translate-y-0' : '-translate-y-full'} transition-transform fixed left-0 top-0 z-30 flex h-screen w-full items-center justify-center  md:block  md:h-auto `}
    >
      <ul
        className={`${
          isOpen ? "scale-y-100" : "scale-y-0 delay-300"
        } flex h-full w-full origin-top flex-col justify-around bg-neutral-800 px-4 py-3 text-5xl text-neutral-100  transition-all duration-500 md:flex md:scale-y-100 md:flex-row md:justify-around md:gap-8 md:bg-transparent md:text-2xl lg:justify-end lg:text-lg`}
      >
        {links.map((link) => (
          <li
            className={`${
              isOpen ? "scale-y-100 delay-500" : "scale-y-0"
            } group relative origin-bottom border-b-2 border-violet-500 pb-4 transition-all md:scale-y-100 md:border-0 md:pb-0`}
            key={link.name}
          >
            <a href={link.url}>_{link.name}</a>
            <div className="absolute bottom-[5px] h-[2px] w-0 bg-neutral-100 transition-all duration-300 ease-in-out group-hover:w-full "></div>
          </li>
        ))}
      </ul>
      <button
        className="absolute right-0 top-0 text-5xl text-neutral-300 md:hidden"
        onClick={() => setIsOpen((o) => !o)}
      >
        {isOpen ? <BiX /> : <BiMenu />}
      </button>
    </nav>
  );
}

export default NavBar;
