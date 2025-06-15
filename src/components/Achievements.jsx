import React from "react";

const achievements = [
  {
    title: "Selected for Smart India Hackathon (SIH) 2024",
    date: "10th–23rd September 2024",
    description:
      "Thrilled to share a major milestone! Our team successfully advanced to the next stage of the Smart India Hackathon 2024. Selected at the college level for problem statement ID SIH1640, we are working on an Assured Contract Farming System aimed at ensuring stable market access for farmers. This marks an exciting chapter of innovation, collaboration, and problem-solving. With fresh ideas and strong teamwork, we’re ready to take on the next level — stay tuned for more!",
  },
  {
    title: "Final Submission – GDG Solution Challenge 2025",
    date: "2 February – 30 May 2025",
    description:
      "Submitted 'VANISH' for the GDG Solution Challenge 2025 — an AI-powered fire safety training platform for hotel staff. The project features gamified simulations, video modules, a FIREBOT assistant, and sensor-based feedback to enhance emergency readiness in the hospitality sector. With the slogan: NO MORE FLAME, NO MORE FAIL, ONLY SAFETY, WITH FAITH",
  },
];

export default function Achievements() {
  return (
    <section className="text-white py-16 px-6 sm:px-8 md:px-35 lg:min-h-screen" id="achievements">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        My <span className="text-cyan-400">Achievements</span>
      </h2>

      <div className="overflow-x-auto w-full" style={{ scrollbarWidth: "none" }}>
        <div
          className="flex gap-6 w-max"
          style={{ msOverflowStyle: "none" }}
        >
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="w-96 flex-shrink-0 bg-[#0f172a] border-l-4 border-cyan-400 rounded-xl p-6 shadow-md hover:shadow-cyan-500/30 transition-transform duration-300 hover:scale-[1.02]"
              style={{ overflow: "hidden" }}
            >
              <h3 className="text-lg font-bold text-cyan-400 mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 mb-3">{item.date}</p>
              <p className="text-sm text-white leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          /* Hide scrollbar for Chrome, Safari and Opera */
          #achievements::-webkit-scrollbar {
            display: none;
          }

          /* Hide scrollbar for IE, Edge and Firefox */
          #achievements {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;    /* Firefox */
          }
        `}
      </style>
    </section>
  );
}
