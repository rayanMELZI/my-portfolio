import React from "react";
import { motion } from "framer-motion";
import { Github, Figma, Linkedin } from "lucide-react";
import pfp from "../assets/pfp.jpg";

function HeroSection() {
  return (
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
  );
}

export default HeroSection;
