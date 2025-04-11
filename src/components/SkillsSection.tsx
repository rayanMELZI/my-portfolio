import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette } from "lucide-react";

function SkillsSection() {
  return (
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
  );
}

export default SkillsSection;
