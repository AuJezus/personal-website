import { useEffect } from "react";
import { useRef } from "react";

function SideNav({ children, scrollRef }) {
  return (
    <div className="flex-auto overflow-auto">
      <div className="grid h-full grid-cols-[auto_1fr] items-start justify-center">
        <nav className="h-full bg-slate-800">hello</nav>
        <div className="h-full overflow-auto" ref={scrollRef}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default SideNav;
