import { useState } from "react";
import ResumeModal from "../components/ResumeModal";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import profile from "../assets/profile.png";

function Hero() {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 text-white"
      >
        {/* Background Glow */}

        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full blur-[120px] opacity-20"></div>

        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full blur-[120px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 pt-20 grid md:grid-cols-2 gap-16 items-center relative z-10">

          {/* Left */}

          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cyan-400 text-xl mb-3">
              👋 Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Vankayalapati
              <br />
              Balaji
            </h1>

            <TypeAnimation
              sequence={[
                "React Developer",
                2000,
                "Frontend Developer",
                2000,
                "Java Developer",
                2000,
              ]}
              speed={40}
              repeat={Infinity}
              className="text-2xl md:text-3xl text-cyan-400 font-semibold mt-6"
            />

            <p className="text-gray-300 mt-8 leading-8 max-w-xl">
              Passionate about building responsive, modern and user-friendly
              web applications using React, JavaScript, Node.js and modern web
              technologies.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="#contact"
                className="px-7 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/30"
              >
                Contact Me
              </a>

              <button
                onClick={() => setShowResume(true)}
                className="px-7 py-3 rounded-full border border-cyan-500 hover:bg-cyan-500 transition duration-300"
              >
                View Resume
              </button>

            </div>

            <div className="flex gap-6 mt-10 text-3xl">

              <a
                href="https://github.com/Balaji-5656"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="hover:text-cyan-400 hover:scale-110 transition" />
              </a>

              <a
                href="https://linkedin.com/in/vankayalapati-balaji"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="hover:text-cyan-400 hover:scale-110 transition" />
              </a>

              <a href="mailto:vankayalapatibalaji@gmail.com">
                <FaEnvelope className="hover:text-cyan-400 hover:scale-110 transition" />
              </a>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src={profile}
              alt="Balaji"
              className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.35)] hover:scale-105 transition duration-500"
            />
          </motion.div>

        </div>
      </section>

      <ResumeModal
        isOpen={showResume}
        onClose={() => setShowResume(false)}
      />

    </>
  );
}

export default Hero;