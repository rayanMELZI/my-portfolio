import React from "react";
import { motion } from "framer-motion";
import { Figma, Layers } from "lucide-react";

import sonatrachApp from "../assets/sonatrachApp.png";
import ibnRochdApp from "../assets/ibnRochdApp.png";

function UXProjects() {
  const designProjects = [
    {
      title: "SONATRACH Web App Redesign",
      description:
        "A Centralized management web application for tracking and evaluating training programs.",
      image: sonatrachApp,
      figma: "https://www.figma.com/community/file/1489789454007096652",
    },
    {
      title: "Ibn Rochd University Mobile App",
      description:
        "A complete UX case study for a private university’s mobile platform, focusing on enhancing student engagement and usability.",
      image: ibnRochdApp,
      figma: "https://www.figma.com/community/file/1489784573217346890",
    },
  ];

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <Layers className="w-8 h-8 text-pink-500" />
        <h2 className="text-3xl font-bold text-zinc-900">UX Design</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {designProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-zinc-600 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                {project.figma && (
                  <a
                    href={project.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800 transition-colors"
                  >
                    <Figma size={20} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default UXProjects;
