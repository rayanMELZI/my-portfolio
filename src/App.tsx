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

const webProjects = [
  {
    title: "Web Application made for SONATRACH",
    description:
      "A Centralized management web application for tracking and evaluating training programs.",
    image: "public/sonatrachApp.png",
    // github: "https://github.com/yourusername/ecommerce",
  },
  {
    title: "ITClinic Hospital Website",
    description:
      "A modern website for the imahinary ITClinic hostipal to show its services and made it easy for patinets to contact them. it is my final work in a hackathon named ITChallenge (2022 version) organized by the scientific club ITCommunity.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/yourusername/task-app",
  },
  {
    title: "ITC-Talks 5 Website",
    description:
      "An event website made for the scientific club ITCommunity for their next event ITC-Talks 4 to present the details of the event and made the registration process easy. it is my final work in a mini hackathon named the Web-UIUX Challenge (2023) organized by the scientific club ITCommunity.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/yourusername/task-app",
  },
  {
    title: "Life Managment Tool (unfinished)",
    description:
      "Modern task management application with real-time updates and intuitive simple UI. it uses the eisenhower matrix principal and it can be separated in diffrent life domains. this application is created for personal use and for learning purposes",
    image: "public/LMT.png",
    github: "https://github.com/yourusername/task-app",
    live: "https://life-management-tool.onrender.com/",
  },
];

const designProjects = [
  {
    title: "Web Application made for SONATRACH",
    description:
      "A Centralized management web application for tracking and evaluating training programs.",
    image: "public/sonatrachApp.png",
    figma: "https://figma.com/file/yourdesignsystem",
  },
  {
    title: "Mobile App for the private university IBN ROCHD SUP",
    description:
      "Complete UX case study for the mobile application created for Ibn Rochd Higher Institute of Science and Technology.",
    image: "public/ibnRochdApp.png",
    figma: "https://figma.com/file/yourfinanceapp",
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
                href="#work"
                className="text-zinc-600 hover:text-indigo-600 transition-colors"
              >
                Work
              </a>
              <a
                href="#about"
                className="text-zinc-600 hover:text-indigo-600 transition-colors"
              >
                About
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
                href="#work"
                className="block py-2 text-zinc-600 hover:text-indigo-600"
              >
                Work
              </a>
              <a
                href="#about"
                className="block py-2 text-zinc-600 hover:text-indigo-600"
              >
                About
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
              {/* <a
                href="https://www.figma.com/@rayan7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-purple-600 hover:text-purple-800 transition-colors"
              >
                <Figma size={24} />
              </a> */}
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
                src="public/pfp.jpg"
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
                Experienced in building modern web applications using React,
                TypeScript, and Node.js. Strong focus on performance and clean
                code.
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
            <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              I'll try my best to get back to you!
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
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
