"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, Project } from "../../lib/data/project";
import Modal from "../../components/common/modal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getTeaser = (text: string, maxLength = 100) =>
    text.length > maxLength ? text.slice(0, maxLength) + "…" : text;

  // Separate projects by category
  const mainProjects = projects.filter(p => p.category === "main" || !p.category);
  const devToolsProjects = projects.filter(p => p.category === "dev-tools");

  const ProjectCard = ({ project, idx }: { project: Project; idx: number }) => (
    <motion.div
      className="
        p-6 rounded-lg shadow-sm
        border border-gray-700
        hover:border-white
        hover:shadow-[0_0_15px_4px_rgba(255,255,255,0.9)]
        transition-all duration-300
      "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.2, duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-xl font-semibold text-white">{project.name}</h2>
      <p className="text-gray-300 mt-2">{getTeaser(project.description)}</p>
      <button
        className="text-white mt-3 inline-block hover:underline focus:outline-none"
        onClick={() => setSelectedProject(project)}
      >
        View Project →
      </button>
    </motion.div>
  );

  return (
    <section className="max-w-7xl mx-auto py-35 px-4">
      <h1 className="text-3xl font-bold mb-8 text-white">Projects</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Main Projects Column */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
            Main Projects
          </h2>
          <div className="space-y-6">
            {mainProjects.length > 0 ? (
              mainProjects.map((project: Project, idx: number) => (
                <ProjectCard key={idx} project={project} idx={idx} />
              ))
            ) : (
              <p className="text-gray-400 italic">No main projects yet</p>
            )}
          </div>
        </div>

        {/* Dev Tools Column */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
            Personal Dev Tools
          </h2>
          <div className="space-y-6">
            {devToolsProjects.length > 0 ? (
              devToolsProjects.map((project: Project, idx: number) => (
                <ProjectCard key={idx} project={project} idx={idx} />
              ))
            ) : (
              <p className="text-gray-400 italic">No dev tools yet</p>
            )}
          </div>
        </div>
      </div>

      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="relative w-full md:w-1/2 rounded-md overflow-hidden shadow-md">
              <img
                src={selectedProject.image || "/financetrackerpfp.jpg"}
                alt={`${selectedProject.name} banner`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
            </div>
            <div className="md:w-1/2 overflow-y-auto pr-6">
              <h2 className="text-3xl font-bold mb-4 text-white">{selectedProject.name}</h2>
              <div className="text-gray-300 leading-relaxed text-justify space-y-4 whitespace-pre-wrap">
                {selectedProject.description}
              </div>
              {selectedProject.link && selectedProject.link !== "#" && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-6 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors"
                >
                  Visit Project →
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}