import React from "react";
import WebProjects from "./WebProjects";
import UXProjects from "./UXProjects";
import ShowMoreBtn from "./ShowMoreBtn";

function ProjectsSection() {
  return (
    <section id="work" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Web Development Projects Section */}
      <WebProjects />

      {/* UX Design Projects Section */}
      <UXProjects />
    </section>
  );
}

export default ProjectsSection;
