import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Figma,
  ExternalLink,
  Menu,
  X,
  Mail,
  Linkedin,
  Code2,
  Palette,
  Globe,
  Layers,
} from "lucide-react";

import pfp from "./assets/pfp.jpg";
import sonatrachApp from "./assets/sonatrachApp.png";
import ITClinic from "./assets/ITClinic.png";
import itcTalks4 from "./assets/itcTalks4.png";
import LMT from "./assets/LMT.png";
import ibnRochdApp from "./assets/ibnRochdApp.png";

const webProjects = [
  {
    title: "Employee Training Feedback System for SONATRACH",
    description:
      "A web application designed to automate and centralize post-training evaluations for SONATRACH employees. Featuring role-based access, admin dashboards, and response analytics.",
    image: sonatrachApp,
    // github: "https://github.com/yourusername/ecommerce",
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

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
            >
              Rayane MELZI
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-zinc-600 hover:text-indigo-600 transition-colors"
              >
                About
              </a>
              <a
                href="#work"
                className="text-zinc-600 hover:text-indigo-600 transition-colors"
              >
                Work
              </a>
              <a
                href="#contact"
                className="text-zinc-600 hover:text-indigo-600 transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-zinc-200"
          >
            <div className="px-4 py-2 space-y-1">
              <a
                href="#"
                className="block py-2 text-zinc-600 hover:text-indigo-600"
              >
                About
              </a>
              <a
                href="#work"
                className="block py-2 text-zinc-600 hover:text-indigo-600"
              >
                Work
              </a>
              <a
                href="#contact"
                className="block py-2 text-zinc-600 hover:text-indigo-600"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="md:w-1/2 text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Web Developer
              </span>
              {" & "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
                UX Designer
              </span>
            </h1>
            <p className="text-xl text-zinc-600 mb-8">
              I create beautiful, functional, and user-centered digital
              experiences. Focused on building products that make a difference.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/rayanMELZI"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.figma.com/@rayan7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-purple-600 hover:text-purple-800 transition-colors"
              >
                <Figma size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rayane-melzi-831945268/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl"
            >
              <img
                src={pfp}
                alt="Rayane MELZI"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="p-8 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
              <Code2 className="w-12 h-12 text-indigo-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-zinc-600">
                Experienced in building modern web applications using React and
                TypeScript. Strong focus on performance and clean code.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-100">
              <Palette className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">UX Design</h3>
              <p className="text-zinc-600">
                Creating user-centered designs with a focus on simplicity and
                functionality. Proficient in Figma and modern design systems.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Web Development Projects Section */}
      <section
        id="work"
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-8 h-8 text-indigo-500" />
            <h2 className="text-3xl font-bold text-zinc-900">
              Web Development
            </h2>
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
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
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

        {/* UX Design Projects Section */}
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
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
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
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl text-zinc-300 font-bold mb-8">
              Let's Work Together
            </h2>
            <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
              I’m always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              feel free to reach out!
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:rayanmelzi@outlook.com"
                className="flex items-center space-x-2 bg-white text-indigo-900 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors"
              >
                <Mail size={20} />
                <span>Get in Touch</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-zinc-900 text-zinc-400 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} Rayane MELZI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
