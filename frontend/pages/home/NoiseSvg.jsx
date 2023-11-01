function NoiseSvg() {
  return (
    <svg style={{ display: "none" }}>
      <defs>
        <filter id="noise">
          <feTurbulence
            baseFrequency="0.7,0.8"
            seed="0"
            type="fractalNoise"
            result="static"
          >
            <animate
              attributeName="seed"
              values="0;100"
              dur="10ms"
              repeatCount="10000"
            />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="static"
            scale="30"
          ></feDisplacementMap>
        </filter>
      </defs>
    </svg>
  );
}

export default NoiseSvg;
