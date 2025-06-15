import React, { useState } from "react";
import Modal from "react-modal";
import html from "../assets/HTML_CERTIFICATE_KG_CODING.png";
import javascript from "../assets/JAVASCRIPT_CERTIFICATE_KG_CODING.png";
import fullstackWebdev from "../assets/Udemy.jpg";
import introductionofAi from "../assets/IntroOfAi.jpg";
import GenAi from "../assets/GenAi.jpg";

Modal.setAppElement("#root");

const certificateData = [
  {
    image: html,
    course: "HTML Basics",
    platform: "KG Coding",
    tags: ["HTML", "Web Fundamentals"],
  },
  {
    image: javascript,
    course: "JavaScript Mastery",
    platform: "KG Coding",
    tags: ["JavaScript", "DOM", "ES6"],
  },
  {
    image: fullstackWebdev,
    course: "Full Stack Development(MERN)",
    platform: "Udemy",
    tags: ["React", "MongoDB", "Node.js", "Express", "Postman", "Gemini API"],
  },
  {
    image: introductionofAi,
    course: "Introduction to AI (IBM)",
    platform: "Coursera",
    tags: [
      "AI Fundamentals",
      "Machine Learning",
      "Neural Networks",
      "AI Use Cases",
    ],
  },
  {
    image: GenAi,
    course: "Introduction to Generative AI (Google)",
    platform: "Coursera",
    tags: [
      "Generative AI",
      "LLM",
      "Prompt Engineering",
      "AI Ethics",
    ],
  },
];

export default function Certifications() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const openModal = (imageUrl) => {
    setActiveImage(imageUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveImage(null);
  };

  return (
    <section
      className="text-white py-16 px-6 sm:px-8 md:px-35 lg:min-h-screen"
      id="certifications"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        My <span className="text-cyan-400">Certifications</span>
      </h2>

      {/* ✅ Scrollable horizontal certificate grid */}
      <div
        className="w-full overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        <div
          className="flex flex-nowrap gap-6 min-w-fit"
          style={{ msOverflowStyle: "none" }}
        >
          {certificateData.map((cert, idx) => (
            <div
              key={idx}
              className="bg-[#1e293b] rounded-xl p-4 w-72 flex-shrink-0 shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.03] transition-transform duration-300 ease-in-out"
              style={{ overflow: "hidden" }}
            >
              <img
                src={cert.image}
                alt={cert.course}
                onClick={() => openModal(cert.image)}
                className="w-full h-40 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg font-semibold mt-4">{cert.course}</h3>
              <p className="text-cyan-300 text-sm mt-1">
                Platform: {cert.platform}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {cert.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="text-xs bg-cyan-400 text-black px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Modal for certificate preview */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Certificate Preview"
        className="max-w-4xl mx-auto my-10 bg-white rounded shadow-xl p-6 outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
      >
        {activeImage && (
          <img
            src={activeImage}
            alt="Certificate Preview"
            className="w-full h-auto rounded"
          />
        )}
        <button
          onClick={closeModal}
          className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600"
        >
          Close
        </button>
      </Modal>

      <style>
        {`
          #certifications::-webkit-scrollbar {
            display: none;
          }
          #certifications {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  );
}
