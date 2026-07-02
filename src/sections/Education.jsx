import { motion } from "framer-motion";

function Education() {
  return (
    <section id="education" className="bg-slate-900 text-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-cyan-400 mb-12"
        >
          Education
        </motion.h2>

        <div className="bg-slate-800 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold">
            B.Tech – Artificial Intelligence & Data Science
          </h3>

          <p className="text-cyan-400 mt-2">
            Vasireddy Venkatadri Institute of Technology (VVIT)
          </p>

          <p className="text-gray-300 mt-2">
            2022 – 2026
          </p>

          <p className="text-gray-300 mt-2">
            CGPA: <span className="text-cyan-400 font-semibold">8.28</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;