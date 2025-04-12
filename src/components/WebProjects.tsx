import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Globe } from "lucide-react";

import sonatrachApp from "../assets/sonatrachApp.png";
import ITClinic from "../assets/ITClinic.png";
import itcTalks4 from "../assets/itcTalks4.png";
import LMT from "../assets/LMT.png";

function WebProjects() {
  const webProjects = [
    {
      title: "Employee Training Feedback System for SONATRACH",
      description:
        "A web application designed to automate and centralize post-training evaluations for SONATRACH employees. Featuring role-based access, admin dashboards, and response analytics.",
      image: sonatrachApp,
    },
    {
      title: "ITC-Talks 4 Event Website",
      description:
        "An event platform created in ITCommunity's 2023 Dev-UIUX hackathon, streamlining registration and showcasing event details.",
      image: itcTalks4,
      github: "https://github.com/rayanMELZI/ITC-Web_dev-UI-UX-Challenge",
    },
    {
      title: "ITClinic Hospital Website",
      description:
        "A modern website for a fictional healthcare provider, designed to highlight services and simplify patient communication (final project for ITChallenge 2022).",
      image: ITClinic,
      github: "https://github.com/rayanMELZI/ITClinic",
    },
    {
      title: "Life Management Tool (In Progress)",
      description:
        "A task management app inspired by the Eisenhower Matrix, featuring real-time updates and domain-based categorization for personal productivity.",
      image: LMT,
      github: "https://github.com/rayanMELZI/Life-Management-Tool-Full-App",
      live: "https://life-management-tool.onrender.com/",
    },
  ];

  return (
    <div id="web" className="mb-20">
      <div className="flex items-center gap-3 mb-8">
        <Globe className="w-8 h-8 text-indigo-500" />
        <h2 className="text-3xl font-bold text-zinc-900">Web Development</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {webProjects.map((project, index) => (
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
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    <ExternalLink size={20} />
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

export default WebProjects;
