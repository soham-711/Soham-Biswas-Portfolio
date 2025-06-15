import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative lg:min-h-screen flex items-center justify-center sm:px-8 md:px-30 py-10 lg:py-0">
      {/* Outer background wrapper */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-20 bg-[#044351] rounded-lg relative overflow-hidden">
        
        {/* Outer cyan glow background */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="w-[500px] h-[500px] bg-cyan-800 opacity-30 blur-[120px] rounded-full"></div>
        </div>

        {/* Inner card content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 bg-[#0f172a] text-white max-w-xl mx-auto text-center rounded-xl shadow-[0_0_40px_rgba(255,255,255,0.1)] p-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-300 text-md sm:text-lg mb-8">
            I'm currently available for freelance work and open to discussing new projects. Feel free to reach out!
          </p>
          <div className="flex justify-center gap-8 text-3xl text-cyan-400">
            <a href="https://github.com/soham-711" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-white transition duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/soham-biswas-748300293/" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-white transition duration-300" />
            </a>
            <a href="mailto:sohambiswas711@gmail.com">
              <FaEnvelope className="hover:text-white transition duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
