import { useEffect, useState } from "react";

export default function useScrollUp(ref) {
  const [isUp, setIsUp] = useState(true);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = ref?.current ? ref.current.scrollTop : window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = ref?.current ? ref.current.scrollTop : window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setIsUp(scrollY > lastScrollY ? false : true);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    ref?.current
      ? ref.current.addEventListener("scroll", onScroll)
      : window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [isUp, ref]);

  return isUp;
}
