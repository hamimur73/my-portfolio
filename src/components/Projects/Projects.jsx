import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Reveal from "../ui/Reveal";
import projects from "../../data/projects";

const categories = [
  "All",
  "Web",
  "AI",
  "Robotics",
];

function Projects() {
  const [active, setActive] = useState("All");

  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter(
          (project) => project.category === active
        );

  return (
    <section id="projects" className="section">
      <div className="container-custom">

        <Reveal>
          <div className="mb-16 text-center">

            <p className="section-subtitle">
              MY PROJECTS
            </p>

            <h2 className="section-title">
              Featured Projects
            </h2>

          </div>
        </Reveal>

        {/* Filter Buttons */}

        <Reveal>

          <div className="mb-12 flex flex-wrap justify-center gap-4">

            {categories.map((category) => (

              <button
                key={category}
                onClick={() => setActive(category)}
                className={`rounded-full px-6 py-2 font-medium transition duration-300 ${
                  active === category
                    ? "bg-cyan-500 text-slate-950"
                    : "border border-cyan-500/20 bg-slate-900 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
                }`}
              >
                {category}
              </button>

            ))}

          </div>

        </Reveal>

        {/* Projects */}

        <div className="grid gap-10 lg:grid-cols-3">

          {filteredProjects.map((project) => (

            <Reveal key={project.id}>

              <div className="glass-card overflow-hidden transition duration-300 hover:-translate-y-3">

                <div className="relative overflow-hidden">

                  {project.featured && (

                    <span className="absolute left-4 top-4 z-10 rounded-full bg-cyan-500 px-3 py-1 text-xs font-bold text-slate-950">
                      Featured
                    </span>

                  )}

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-60 w-full object-cover transition duration-500 hover:scale-110"
                  />

                </div>

                <div className="p-6">

                  <h3 className="mb-4 text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mb-6 leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">

                    {project.tech.map((tech) => (

                      <span
                        key={tech}
                        className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  <div className="flex gap-4">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary flex-1 flex items-center justify-center gap-2"
                    >
                      <FaGithub />
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary flex-1 flex items-center justify-center gap-2"
                    >
                      <FaExternalLinkAlt />
                      Live
                    </a>

                  </div>

                </div>

              </div>

            </Reveal>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;