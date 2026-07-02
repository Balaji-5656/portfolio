import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Education",
    "Certifications",
    "Achievements",
    "Contact",
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-xl shadow-xl"
          : "bg-slate-900/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <img
            src={profile}
            alt="Balaji"
            className={`rounded-full object-cover border-2 border-cyan-400 transition-all duration-500 ${
              scrolled
                ? "w-10 h-10 opacity-100 scale-100"
                : "w-0 h-0 opacity-0 scale-0"
            }`}
          />

          <h1
            className={`text-2xl font-bold text-cyan-400 transition-all duration-500 ${
              scrolled ? "translate-x-1" : ""
            }`}
          >
            Balaji
          </h1>

        </div>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex gap-6">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}

        <div className="hidden lg:flex gap-5 text-xl">
          <a
            href="https://github.com/Balaji-5656"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/vankayalapati-balaji"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Mobile Menu Button */}

        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl px-6 pb-6">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block py-3 hover:text-cyan-400 transition"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;