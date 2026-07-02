import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-xl"
        >
          <p className="text-lg text-gray-300 leading-9">
            I'm <span className="text-cyan-400 font-semibold">Vankayalapati Balaji</span>,
            a B.Tech graduate in <span className="text-white font-semibold">Artificial Intelligence & Data Science</span>
            from Vasireddy Venkatadri Institute of Technology with a
            <span className="text-cyan-400 font-semibold"> CGPA of 8.32</span>.
          </p>

          <p className="mt-6 text-lg text-gray-300 leading-9">
            I am passionate about frontend development and enjoy building
            responsive, modern, and user-friendly web applications using
            React.js, JavaScript, HTML, CSS, and REST APIs. I continuously
            improve my skills by working on real-world projects and exploring
            modern web technologies.
          </p>

          <p className="mt-6 text-lg text-gray-300 leading-9">
            My projects include a full-stack e-commerce platform,
            <span className="text-cyan-400"> EggBasket</span>, featuring user
            authentication, shopping cart, wishlist, checkout, order tracking,
            and an admin dashboard, along with a responsive
            <span className="text-cyan-400"> Weather Application</span> that
            integrates the OpenWeatherMap API to provide real-time weather
            information.
          </p>

          <p className="mt-6 text-lg text-gray-300 leading-9">
            I am a quick learner with strong problem-solving abilities and enjoy
            collaborating in team environments. Currently, I am seeking an
            opportunity as a <span className="text-cyan-400 font-semibold">Web Developer</span> where I can
            contribute, learn, and grow while building impactful software
            solutions.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default About;