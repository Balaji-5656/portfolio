import { motion } from "framer-motion";
import { FaTrophy, FaUsers } from "react-icons/fa";

function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-cyan-400 mb-16"
        >
          Leadership & Achievements
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-slate-800 p-8 rounded-2xl border border-slate-700"
          >
            <FaUsers className="text-5xl text-cyan-400 mb-6" />

            <h3 className="text-2xl font-bold">
              Captain - College Kabaddi Team
            </h3>

            <p className="mt-4 text-gray-300 leading-7">
              Led the VVIT Kabaddi team with dedication, teamwork,
              strategic planning, and coordination during college tournaments.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-slate-800 p-8 rounded-2xl border border-slate-700"
          >
            <FaTrophy className="text-5xl text-yellow-400 mb-6" />

            <h3 className="text-2xl font-bold">
              Intramurals Champion
            </h3>

            <p className="mt-4 text-gray-300 leading-7">
              Secured 1st Place in the VVIT Intramurals Kabaddi Tournament
              for two consecutive years (2024 & 2025).
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Achievements;