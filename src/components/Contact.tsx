import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

function Contact() {
  return (
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
  );
}

export default Contact;
