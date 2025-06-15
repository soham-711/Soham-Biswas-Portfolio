// import React, { useState, useEffect } from 'react'
// import AOS from 'aos'
// import 'aos/dist/aos.css'

// const skillCategories = {
//   Frontend: [
//     { name: 'HTML5 & CSS3', level: '90%' },
//     { name: 'JavaScript (ES6+)', level: '85%' },
//     { name: 'TypeScript', level: '65%' },
//     { name: 'React.js', level: '85%' },
//     { name: 'React Native / Expo', level: '80%' },
//     { name: 'Tailwind CSS', level: '85%' },
//     { name: 'Bootstrap', level: '75%' },
//     { name: 'Next.js (Basic)', level: '65%' }
//   ],
//   Backend: [
//     { name: 'Node.js', level: '85%' },
//     { name: 'Express.js', level: '80%' },
//     { name: 'Clerk Auth', level: '80%' },
//     { name: 'Convex', level: '70%' },
//     { name: 'MongoDB', level: '85%' },
//     { name: 'SQL', level: '75%' }
//   ],
//   Tools: [
//     { name: 'Postman', level: '85%' },
//     { name: 'Gemini API', level: '70%' },
//     { name: 'Data Structures & Algorithms', level: '80%' },
//     { name: 'Python', level: '70%' },
//     { name: 'C / C++', level: '75%' },
//     { name: 'Git / GitHub', level: '85%' }
//   ]
// }

// export default function Skills() {
//   const [activeTab, setActiveTab] = useState('Frontend')

//   useEffect(() => {
//     AOS.init({ duration: 1000 })
//   }, [])

//   return (
//     <section id="skills" className="bg-[#1A1A2E] text-white py-16 px-6 sm:px-8 md:px-20 min-h-screen">
//       <h2 className="text-4xl font-bold text-center mb-10">
//         My Skills & <span className="text-cyan-400">Proficiencies</span>
//       </h2>

//       {/* Tabs */}
//       <div className="flex justify-center mb-10 flex-wrap gap-4">
//         {Object.keys(skillCategories).map((category) => (
//           <button
//             key={category}
//             onClick={() => setActiveTab(category)}
//             className={`px-4 py-2 rounded-full font-medium border-2 ${
//               activeTab === category
//                 ? 'bg-cyan-400 text-black border-cyan-400'
//                 : 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition'
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Skill Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {skillCategories[activeTab].map((skill, index) => (
//           <div
//             key={index}
//             data-aos="fade-up"
//             className="bg-[#171F3B] rounded-xl p-6 shadow-md border border-cyan-500"
//           >
//             <h3 className="text-lg font-semibold mb-3">{skill.name}</h3>
//             <div className="w-full h-2 bg-gray-700 rounded-full">
//               <div
//                 className="h-full bg-cyan-400 rounded-full"
//                 style={{
//                   width: skill.level,
//                   transition: 'width 1s ease-in-out'
//                 }}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }



import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const skillCategories = {
  Frontend: [
    { name: 'HTML5 & CSS3', level: '90%' },
    { name: 'JavaScript (ES6+)', level: '85%' },
    { name: 'TypeScript', level: '65%' },
    { name: 'React.js', level: '85%' },
    { name: 'React Native / Expo', level: '80%' },
    { name: 'Tailwind CSS', level: '85%' },
    { name: 'Bootstrap', level: '75%' },
    { name: 'Next.js (Basic)', level: '65%' }
  ],
  Backend: [
    { name: 'Node.js', level: '85%' },
    { name: 'Express.js', level: '80%' },
    { name: 'Clerk Auth', level: '80%' },
    { name: 'Convex', level: '70%' },
    { name: 'MongoDB', level: '85%' },
    { name: 'SQL', level: '75%' }
  ],
  Tools: [
    { name: 'Postman', level: '85%' },
    { name: 'Gemini API', level: '70%' },
    { name: 'Data Structures & Algorithms', level: '80%' },
    { name: 'Python', level: '70%' },
    { name: 'C / C++', level: '75%' },
    { name: 'Git / GitHub', level: '85%' }
  ],
  Soft: [
    { name: 'Bengali', level: 'Native' },
    { name: 'English', level: 'Professional Proficiency' },
    { name: 'Hindi', level: 'Professional Proficiency' },
    { name: 'German', level: 'Basic' }
  ]
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('Frontend')

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <section id="skills" className="text-white py-16 px-6 sm:px-8 md:px-35 lg:min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-10">
        My Skills & <span className="text-cyan-400">Proficiencies</span>
      </h2>

      {/* Tabs */}
      <div className="flex justify-center mb-10 flex-wrap gap-4">
        {Object.keys(skillCategories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-4 py-2 rounded-full font-medium border-2 hover:cursor-pointer ${
              activeTab === category
                ? 'bg-cyan-400 text-black border-cyan-400'
                : 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories[activeTab].map((skill, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-[#171F3B] rounded-xl p-6 shadow-md border border-cyan-500"
          >
            <h3 className="text-lg font-semibold mb-3">{skill.name}</h3>

            {activeTab !== 'Soft' ? (
              <div className="w-full h-2 bg-gray-700 rounded-full">
                <div
                  className="h-full bg-cyan-400 rounded-full"
                  style={{
                    width: skill.level,
                    transition: 'width 1s ease-in-out'
                  }}
                ></div>
              </div>
            ) : (
              <p className="text-cyan-300 font-medium">{skill.level}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
