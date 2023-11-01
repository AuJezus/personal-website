function Contact({ children, href }) {
  return (
    <a
      className={`flex items-center justify-center transition-all hover:scale-110 `}
      href={href}
    >
      {children}
    </a>
  );
}

export default Contact;
