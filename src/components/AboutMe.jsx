import React from "react";
import profile from "../assets/profile.png"; // adjust this path if needed

export default function AboutMe() {
  return (
    <section
      id="about"
      className="text-white px-6 sm:px-8 md:px-35 py-16 min-h-screen flex flex-col justify-center"
    >
      <h2 className="text-4xl font-bold text-center mb-15">
        About <span className="text-cyan-400">Me</span>
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={profile}
            alt="Shibagni Bhattacharjee"
            className="w-[300px] h-[300px] rounded-full border-[5px] border-cyan-400 shadow-xl"
          />
        </div>

        {/* Text Content */}
        <div className="max-w-4xl text-center md:text-left">
          <h3 className="text-lg font-semibold mb-1">
            Software Developer | MERN Stack | React Native | AI & Automation
            Enthusiast
          </h3>
          <p className="text-gray-300 leading-relaxed">
            I’m Soham Biswas, a Computer Science undergraduate with a strong
            passion for full-stack development, system design, and scalable web
            applications. My expertise spans the MERN stack (MongoDB,
            Express.js, React, Node.js), along with proficiency in React Native,
            Tailwind CSS, Convex DB, and Clerk authentication.
            <br />
            <br />
            I have hands-on experience working with modern APIs (including
            Gemini and Postman), and I specialize in building responsive,
            efficient, and secure frontend interfaces with React JS and React
            Native Expo. I'm also skilled in backend development, integrating
            RESTful services, and managing cloud-connected databases using
            MongoDB and SQL.
            <br />
            <br />
            Continuously exploring the fields of AI, automation, and GenAI, I
            actively learn through practical projects and courses on platforms
            like Udemy, Coursera — enhancing my ability to build intelligent,
            user-centric digital products.
          </p>
        </div>
      </div>
    </section>
  );
}
