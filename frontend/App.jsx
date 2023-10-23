import Hero from "./pages/home/Hero";
import NavBar from "./reusable/NavBar";
import AboutSection from "./pages/home/about/AboutSection";
import SkillsSection from "./pages/home/skills/SkillsSection";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutSection />
      <SkillsSection />
    </>
  );
}

export default App;
