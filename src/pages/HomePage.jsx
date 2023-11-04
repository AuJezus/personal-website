import Hero from "../features/home/Hero";
import AboutSection from "../features/home/about/AboutSection";
import SkillsSection from "../features/home/skills/SkillsSection";
import ProjectsSection from "../features/home/projects/ProjectsSection";
import ContactSection from "../features/home/contact/ContactSection";
import Footer from "../features/home/Footer";
import NavBar from "../ui/NavBar";

function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default HomePage;
