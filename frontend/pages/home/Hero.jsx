import { useEffect, useState } from "react";
import NoiseSvg from "./NoiseSvg";

function Hero() {
  const [isGlitching, setIsGlitching] = useState(false);

  function addGlitchEffect() {
    setIsGlitching(true);
    const randomDelay = Math.random() * 200 + 50;
    setTimeout(() => {
      setIsGlitching(false);
      scheduleNextGlitch();
    }, randomDelay);
  }

  function scheduleNextGlitch() {
    const randomDelay = Math.random() * 1500 + 500;
    setTimeout(() => {
      addGlitchEffect();
    }, randomDelay);
  }

  useEffect(() => {
    scheduleNextGlitch(); // Initial glitch scheduling

    // Cleanup the timers when the component unmounts
    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <>
      <NoiseSvg />
      <div className="mb-28 bg-neutral-900">
        <div className="relative h-screen w-full bg-violet-800/20">
          <div className={`hero-img ${isGlitching ? "noise" : ""}`}></div>
          <div className="hero-overlay"></div>

          <div className="relative z-20 flex h-full w-full flex-col items-center justify-center ">
            <h1 className=" text-10xl font-bold uppercase text-neutral-100 opacity-90">
              AuJezus
            </h1>
            <p className="text-xl uppercase text-neutral-100 opacity-90">
              <span className="text-violet-400">{">"}</span> full-stack
              developer
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
