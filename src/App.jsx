import Hero from "./pages/home/Hero";
import NavBar from "./reusable/NavBar";
import AboutSection from "./pages/home/about/AboutSection";
import SkillsSection from "./pages/home/skills/SkillsSection";
import ProjectsSection from "./pages/home/projects/ProjectsSection";
import ContactSection from "./pages/home/contact/ContactSection";
import Footer from "./pages/home/Footer";
import { useRef } from "react";


function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <AboutSection/>
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
