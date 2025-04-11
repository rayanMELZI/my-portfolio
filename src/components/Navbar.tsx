import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
  );
}

export default Navbar;
