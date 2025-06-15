import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Projects.css";
import vanish from "../assets/vanish.png";
import arsona from "../assets/arsona.png";
import plantImgAnalizar from "../assets/plantImgAnalizer.png";
import SpotLight from "../assets/SpotLight.png";
import AlgoTracker from "../assets/AlgoTracker.png";
import YoutubeNote from "../assets/YoutubeNote.png";

const projects = [
  {
    title: "Arsona Sentinel",
    description:
      "Arsona Sentinel is an AI-powered autonomous fire suppression robot designed for real-time safety and emergency response. Equipped with omni-wheels for seamless navigation, ultrasonic sensors for room mapping, and flame/smoke detection using an ESP32 controller, it offers 360° fire coverage with a CO₂-based suppression system. Additional highlights include live heat mapping, mobile app control, blockchain-based tamper-proof alert logging, and Solana network integration—ensuring robust, intelligent protection for smart environments.",
    image: arsona,
    video: "#",
    github: "https://github.com/soham-711/ArsonaFontend.git",
  },
  {
    title: "AI Plant Analyzer",
    description:
      "AI Plant Analyzer is an intelligent botanical tool that leverages advanced AI to identify plant species from images. It provides comprehensive outputs including plant name, scientific classification, medicinal uses, and geographic presence. Designed with a simple Scan → Analyze → Download workflow, this tool empowers users to explore plant data with ease. Ideal for nature enthusiasts, researchers, and environmental tech projects.",
    image: plantImgAnalizar,
    video: "#",
    github: "https://github.com/soham-711/Project-Plant_Analysis_Tool.git",
  },
  {
    title: "SpotLight",
    description:
      "SpotLight is a lifestyle-focused social media app that enables users to share daily updates and connect seamlessly. Core features include daily post sharing, interactive likes and comments, and a clean, intuitive profile experience. With secure authentication using Clerk + Auth0 and support for Google sign-in, SpotLight ensures both engagement and data safety. Designed to enhance community building through smooth and personalized user interactions.",
    image: SpotLight,
    video: "#",
    Install: "https://expo.dev/accounts/sohambiswas/projects/SpotLight/builds/4c39432b-927b-42d1-ae80-a61ff6777acc ",
    github: "https://github.com/soham-711/SocialMediaApp-SpotLight.git",
  },
  {
    title: "AlgoTracker",
    description:
      "AlgoTracker is a Page Replacement Algorithm Solver & Learning Platform. It is an educational tool for visualizing and solving FIFO, LRU, and Optimal page replacement algorithms. It provides step-by-step page table output, hit/miss ratio, downloadable solutions, and a personal dashboard. Integrated with documentation and real-time analytics, it’s ideal for mastering OS concepts interactively.",
    image: AlgoTracker,
    video: "#",
    Install: "https://expo.dev/accounts/soham_711/projects/AlgoTracker/builds/5928d49d-1d4d-4b7f-9f28-f8bf690a24f7",
    github: "https://github.com/soham-711/PageReplacementAlgorithmApp-AlgoTracker.git",
  },
  {
    title: "YoutubeNote",
    description:
      "Smart Note-Taking from Videos with AI and Auto Timestamps. YoutubeNote revolutionizes learning from videos by auto-generating structured notes with timestamps. With real-time sync and AI assistance, it organizes concepts, examples, and review points. Notes are exportable in multiple formats, and all data is cloud-saved for easy access and filtering.",
    image: YoutubeNote,
    video: "#",
    github: "https://github.com/soham-711/Youtube-Note.git",
  },
  {
    title: "Vanish",
    description:
      "AI & IoT-Based Emergency Response System. Vanish is a smart emergency solution that detects fire and smoke with 95% accuracy, offers 24/7 AI assistant support, and connects to 12 nearby stations for real-time response. With 98% data accuracy, it provides live analytics, 50+ training videos, and 15+ interactive modules, ensuring preparedness and rapid action—all within under 2 minutes.",
    image: vanish,
    video: "https://youtu.be/KGgRL9HSD90?si=FZtYXBAzejQ4Yafr",
    github: "https://github.com/soham-711/Vanish-Project.git",
  },
];

export default function Projects() {
  const swiperRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="text-white py-16 px-6 sm:px-8 md:px-35" id="projects">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        My <span className="text-cyan-400">Projects</span>
      </h2>

      <Swiper
        className="project-swiper"
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="bg-[#1e293b] rounded-xl p-6 flex flex-col shadow-lg hover:shadow-cyan-500/30 transform transition-all duration-300 h-[500px] w-full"
              onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay?.start()}
            >
              <div
                onClick={() => setSelectedImage(project.image)}
                className="w-full h-[200px] overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {project.title}
              </h3>
              <div className="text-gray-300 text-sm overflow-y-auto max-h-24 pr-2 whitespace-normal break-words hide-scrollbar flex-grow">
                {project.description}
              </div>
              <div className="flex gap-4 mt-4 flex-wrap">
                {project.video && project.video !== "#" && (
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-cyan-400 text-black px-4 py-2 rounded-full text-sm hover:bg-cyan-300 transition"
                  >
                    Video 📺
                  </a>
                )}
                {project.Install && project.Install !== "#" && (
                  <a
                    href={project.Install}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-green-400 text-black px-4 py-2 rounded-full text-sm hover:bg-green-300 transition"
                  >
                    Install ⬇️
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="border-2 border-cyan-400 text-cyan-400 px-4 py-2 rounded-full text-sm hover:bg-cyan-400 hover:text-black transition"
                  >
                    GitHub 🛠
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal for fullscreen image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full View"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-2xl bg-red-500 px-3 py-1 rounded-full hover:cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
