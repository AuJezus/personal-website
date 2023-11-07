import ConctactList from "../../ui/ConctactList";

function BlogProfile({ blog }) {
  return (
    <div className="mb-4 flex items-center justify-center gap-4 text-lg text-violet-500 md:gap-16 lg:mb-0 lg:flex-col lg:gap-4">
      <div className="relative w-12 border-2 border-violet-500 lg:w-fit">
        <img
          src="https://randomuser.me/api/portraits/women/90.jpg"
          alt="Author's profile picture"
        />
        <div className="hero-overlay hidden lg:block"></div>
      </div>
      <span>@AuJezus</span>
      <ConctactList size="sm" classes="justify-center gap-x-4" />
    </div>
  );
}

export default BlogProfile;
