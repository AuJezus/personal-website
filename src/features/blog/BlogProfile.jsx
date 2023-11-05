function BlogProfile({ blog }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-lg text-neutral-300">
      <div className="relative w-fit border-2 border-violet-500">
        <img
          src="https://randomuser.me/api/portraits/women/90.jpg"
          alt="Author's profile picture"
        />
        <div className="hero-overlay"></div>
      </div>
      <span>AuJezus || Web Developer</span>
    </div>
  );
}

export default BlogProfile;
