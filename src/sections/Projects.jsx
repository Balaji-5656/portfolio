import { motion } from "framer-motion";

import eggbasket from "../assets/eggbasket.png";
import weather from "../assets/weather.png";

const projects = [
  {
    title: "EggBasket",
    image: eggbasket,
    description:
      "An e-commerce application for purchasing eggs online with authentication, shopping cart, and responsive UI.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Balaji-5656",
    live: "https://eggbasket-frontend.onrender.com",
  },
  {
  title: "Weather Application",
  image: weather,
  description:
    "A responsive weather application that provides real-time weather information for user-searched locations using the OpenWeatherMap API.",
  tech: ["HTML", "CSS", "JavaScript", "REST API"],
  github: "https://github.com/Balaji-5656",
  live: "#",
},

  
];

function Projects() {
  return (
    <section id="projects" className="bg-slate-900 py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-cyan-400 mb-16"
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-500"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;