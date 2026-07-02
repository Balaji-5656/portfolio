import { motion } from "framer-motion";
import {
  FaJava,
  FaCloud,
  FaRobot,
  FaLightbulb,
} from "react-icons/fa";

const certifications = [
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    icon: <FaJava className="text-5xl text-orange-500" />,
    description:
      "Learned Core Java concepts including OOP, Collections, Exception Handling, and Multithreading.",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    icon: <FaCloud className="text-5xl text-sky-400" />,
    description:
      "Studied cloud computing fundamentals, virtualization, cloud services, and deployment models.",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "IBM",
    icon: <FaRobot className="text-5xl text-purple-400" />,
    description:
      "Learned the fundamentals of Generative AI, Large Language Models, and AI applications.",
  },
  {
    title: "Introduction to Prompt Engineering",
    issuer: "IBM",
    icon: <FaLightbulb className="text-5xl text-yellow-400" />,
    description:
      "Explored prompt engineering techniques for improving AI model responses and productivity.",
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-cyan-400 mb-16"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.03,
                y: -5,
              }}
              transition={{ duration: 0.4 }}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-cyan-400 transition"
            >

              <div className="mb-6">
                {cert.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {cert.title}
              </h3>

              <p className="text-cyan-400 mt-2 font-medium">
                {cert.issuer}
              </p>

              <p className="text-gray-400 mt-5 leading-7">
                {cert.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;