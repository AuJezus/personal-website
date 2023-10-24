import Hero from "./pages/home/Hero";
import NavBar from "./reusable/NavBar";
import AboutSection from "./pages/home/about/AboutSection";
import SkillsSection from "./pages/home/skills/SkillsSection";
import ProjectsSection from "./pages/home/projects/ProjectsSection";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </>
  );
}

export default App;
