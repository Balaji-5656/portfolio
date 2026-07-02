import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-cyan-400 mb-16"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400 text-2xl" />
              <span>vankayalapatibalaji@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-cyan-400 text-2xl" />
              <span>+91 9182793934</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
              <span>Andhra Pradesh, India</span>
            </div>

            <div className="flex items-center gap-4">
              <FaGithub className="text-cyan-400 text-2xl" />
              <a
                href="https://github.com/Balaji-5656"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                github.com/Balaji-5656
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaLinkedin className="text-cyan-400 text-2xl" />
              <a
                href="https://linkedin.com/in/vankayalapati-balaji"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                linkedin.com/in/vankayalapati-balaji
              </a>
            </div>

          </div>

          {/* Right Side */}
          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 outline-none"
            ></textarea>

            <button
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-lg"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;