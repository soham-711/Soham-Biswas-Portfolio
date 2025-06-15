import React from "react";
import "../styles/Cube.css"; // Ensure this CSS handles cube responsiveness too
import { FaReact } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { Button, Link } from "react-scroll";

export default function HeroSection() {

  const handleResumeClick = () => {
  // Open resume in a new tab
  window.open('/Soham_Biswas_Resume.pdf', '_blank');

  // Create a hidden link to trigger download
  const link = document.createElement('a');
  link.href = '/Soham_Biswas_Resume.pdf';
  link.download = 'Soham_Biswas_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 md:px-35 text-white py-10 lg:gap-0"
    >
      {/* Left */}
      <div className="flex-1 space-y-6 text-center lg:text-left md:pt-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Hi, I'm Soham Biswas
        </h1>
        <h2 className="text-lg sm:text-xl text-cyan-400 font-semibold">
          Engineer. Innovator. Learner. Problem Solver. Developer.
        </h2>
        <p className="text-[#E0E0E0] text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
          I'm a tech enthusiast with a solid foundation in full-stack web
          development and a keen interest in emerging technologies. Skilled in
          React.js, React Native, Node.js, Express.js, and tools like Tailwind
          CSS, MongoDB, SQL, Convex, and Clerk Auth, I bring hands-on experience
          in building scalable, API-integrated applications. With ongoing
          learning in Data Structures and Algorithms, I focus on delivering
          clean, efficient, and user-centric digital solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 md:gap-10 justify-center lg:justify-start">
          {/* Primary Button */}
          <Link
            to="projects"
            className="px-6 py-3 bg-cyan-400 text-black font-bold rounded-full shadow-[0_0_10px_#22d3ee] hover:shadow-[0_0_20px_#22d3ee] transition-all duration-300 hover:cursor-pointer"
          >
            View My Work
          </Link>

          {/* Outline Neon Button */}
          <Button onClick={handleResumeClick} className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full bg-[#0F172A] shadow-[0_0_10px_#22d3ee] hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_#22d3ee] transition-all duration-300 hover:cursor-pointer">
            View Resume
          </Button>
        </div>
      </div>

      {/* Right - Cube */}
      <div className=" flex-1 flex justify-center items-center py-20 pt-25 lg:py-0 lg:pt-0">
        <div className="cube-container scale-75 sm:scale-90 md:scale-100">
          <div className="cube">
            <div className="face front">
              <FaReact size={50} />
            </div>
            <div className="face back">
              <FaNode size={50} />
            </div>
            <div className="face right">
              <FaJsSquare size={50} />
            </div>
            <div className="face left">
              <SiMongodb size={50} />
            </div>
            <div className="face top">
              <SiTailwindcss size={50} />
            </div>
            <div className="face bottom">
              <SiExpress size={50} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
