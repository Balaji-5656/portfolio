import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import profile from "../assets/profile.png";

function Hero() {
  return (
   <section
  id="home"
  className="min-h-screen flex items-center pt-5"
>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 text-xl">
            👋 Hello, I'm
          </p>

          <h1 className="text-6xl font-bold mt-3">
            Vankayalapati
            <br />
            Balaji
          </h1>

          <TypeAnimation
            sequence={[
            
              "React Developer",
              2000,
              "Java Developer",
              2000,
            ]}
            speed={40}
            repeat={Infinity}
            className="text-3xl text-cyan-400 font-semibold mt-6"
          />

          <p className="text-gray-400 mt-8 leading-8">
            Passionate about creating responsive,
            modern web applications using
            React, JavaScript, Node.js, and MongoDB.
          </p>

          <div className="flex gap-5 mt-10">

            <a
              href="#contact"
              className="bg-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-600"
            >
              Contact Me
            </a>

            <a
              href="/Resume.pdf"
              download
              className="border border-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500"
            >
              Download Resume
            </a>

          </div>

          <div className="flex gap-6 mt-10 text-3xl">

            <a
              href="https://github.com/Balaji-5656"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/vankayalapati-balaji"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:vankayalapatibalaji@gmail.com">
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <img
            src={profile}
            alt="Balaji"
            className="w-72 h-72 object-cover rounded-full border-4 border-cyan-400 shadow-xl"
          />

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;