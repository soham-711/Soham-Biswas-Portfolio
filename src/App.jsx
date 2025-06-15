import React, { useState, useEffect } from 'react';
import Navber from './components/Navber';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('dark-mode');
    if (stored === 'true') setDarkMode(true);
  }, []);

  const handleToggle = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem('dark-mode', newMode);
      return newMode;
    });
  };

  return (
    <div className={`${darkMode ? 'bg-[#1A1A1A]' : 'bg-[#1A1A2E]'} min-h-screen w-full overflow-x-hidden transition-colors duration-300`}>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navber darkMode={darkMode} onToggle={handleToggle} />
      </div>

      {/* Scrollable Content */}
      <div className="pt-[80px] lg:pt-0">
        <HeroSection />
        <AboutMe />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
        <Footer/>
      </div>
    </div>
  );
}
