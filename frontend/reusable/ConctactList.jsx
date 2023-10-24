function ConctactList({ classes, size = "md" }) {
  return (
    <div className={`${classes} flex justify-center gap-10`}>
      <a
        className={`flex items-center justify-center transition-all hover:scale-110 `}
        href="https://twitter.com/AuJezus"
      >
        <box-icon
          type="logo"
          name="twitter"
          size={size}
          color="#d4d4d4"
        ></box-icon>
      </a>
      <a
        href="https://www.linkedin.com/in/augustas-vaivada-2a9ba326a/"
        className={`flex items-center justify-center transition-all hover:scale-110 `}
      >
        <box-icon
          name="linkedin"
          type="logo"
          size={size}
          color="#d4d4d4"
        ></box-icon>
      </a>
      <a
        href="https://www.instagram.com/augustas_wa/"
        className={`flex items-center justify-center transition-all hover:scale-110 `}
      >
        <box-icon
          name="instagram"
          type="logo"
          size={size}
          color="#d4d4d4"
        ></box-icon>
      </a>
      <a
        href="https://github.com/AuJezus"
        className={`flex items-center justify-center transition-all hover:scale-110 `}
      >
        <box-icon
          name="github"
          type="logo"
          size={size}
          color="#d4d4d4"
        ></box-icon>
      </a>
    </div>
  );
}

export default ConctactList;
