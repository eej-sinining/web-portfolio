"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, Project } from "../../lib/data/project";
import Modal from "../../components/common/modal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getTeaser = (text: string, maxLength = 100) =>
    text.length > maxLength ? text.slice(0, maxLength) + "…" : text;

  return (
    <section className="max-w-6xl mx-auto py-35 px-4">
      <h1 className="text-3xl font-bold mb-6 text-white">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project: Project, idx: number) => (
          <motion.div
            key={idx}
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
        ))}
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
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/60 to-transparent" />
            </div>
            <div className="md:w-1/2 overflow-y-auto pr-6">
              <h2 className="text-3xl font-bold mb-4 text-white">{selectedProject.name}</h2>
              <div className="text-gray-300 leading-relaxed text-justify space-y-4 whitespace-pre-wrap">
                {selectedProject.description}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
