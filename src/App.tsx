import React from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
