import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

export default function Navber({ darkMode, onToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Achievements",
    "Certifications",
    "Contact",
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 font-poppins">
      {/* Top Navbar with dynamic bg */}
      <div
        className={`${
          darkMode ? "bg-[#2C2C2C]" : "bg-[#171F3B]/80"
        } text-white py-6 px-6 md:py-5 flex justify-between md:justify-around items-center shadow md:gap-5 transition-colors duration-300 backdrop-blur-md`}
      >
        <div className="text-2xl font-bold">
          Soham<span className="text-cyan-400">.</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-x-7 items-center text-sm text-[#e0e0e0]">
          {links.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={800}
              offset={-60}
              className="relative group cursor-pointer"
            >
              <span className="group-hover:text-cyan-400 transition-colors duration-300">
                {item}
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <button
            onClick={onToggle}
            className="text-lg hover:scale-110 transition hover:cursor-pointer"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          darkMode ? "bg-black" : "bg-[#16213ef2]"
        } backdrop-blur-sm w-full ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center divide-y divide-white/20 px-6">
          {links.map((item) => (
            <li key={item} className="w-full text-center">
              <a
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className="block py-3 text-[#e0e0e0] hover:text-cyan-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="py-4 text-center text-2xl">
          <button
            onClick={() => {
              onToggle();
              closeMenu();
            }}
            className="hover:scale-110 transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}
