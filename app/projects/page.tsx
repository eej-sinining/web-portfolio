"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "../../lib/data/project";
import Modal from "../../components/common/modal";

type Category = "main" | "dev-tools";
type Tag = "API-based" | "Web App" | "Machine Learning/AI";

const ALL_TAGS: Tag[] = ["API-based", "Web App", "Machine Learning/AI"];

const CATEGORY_LABELS: Record<Category, string> = {
  main: "Developer Projects",
  personal: "Personal Projects",
} as Record<string, string>;

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("main");
  const [activeTags, setActiveTags] = useState<Tag[]>([]);

  const getTeaser = (text: string, maxLength = 110) =>
    text.length > maxLength ? text.slice(0, maxLength) + "…" : text;

  const toggleTag = (tag: Tag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredProjects = projects.filter((p) => {
    const categoryMatch =
      activeCategory === "main"
        ? p.category === "main" || !p.category
        : p.category === "dev-tools";

    const tagMatch =
      activeTags.length === 0 ||
      activeTags.every((tag) => p.tags?.includes(tag));

    return categoryMatch && tagMatch;
  });

  return (
    <section className="max-w-5xl mx-auto py-24 px-4">
      {/* Page title */}
      <h1 className="text-3xl font-bold mb-10 text-white tracking-tight mt-10">
        Projects
      </h1>

      {/* ── Controls ── */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
        {/* Category toggle */}
        <div className="flex rounded-lg border border-gray-700 overflow-hidden shrink-0">
          {(["main", "dev-tools"] as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm font-medium transition-colors duration-200 ${
                activeCategory === cat
                  ? "bg-white text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {cat === "main" ? "Developer Projects" : "Personal Projects"}
            </button>
          ))}
        </div>

        {/* Divider */}
        <span className="hidden sm:block text-gray-700 select-none">|</span>

        {/* Tag filter chips */}
        <div className="flex flex-wrap gap-2">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-200 ${
                activeTags.includes(tag)
                  ? "bg-white text-black border-white"
                  : "border-gray-600 text-gray-400 hover:border-gray-400 hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}
          {activeTags.length > 0 && (
            <button
              onClick={() => setActiveTags([])}
              className="px-3 py-1 rounded-full text-xs font-semibold border border-gray-700 text-gray-500 hover:text-white hover:border-gray-500 transition-all duration-200"
            >
              Clear ✕
            </button>
          )}
        </div>
      </div>

      {/* ── Project Grid ── */}
      <AnimatePresence mode="wait">
        {filteredProjects.length > 0 ? (
          <motion.div
            key={activeCategory + activeTags.join(",")}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.name}
                className="group p-6 rounded-xl border border-gray-700 hover:border-white hover:shadow-[0_0_18px_4px_rgba(255,255,255,0.15)] transition-all duration-300 flex flex-col gap-3"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.4, ease: "easeOut" }}
              >
                {/* Tag badges */}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-[10px] font-semibold border border-gray-600 text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <h2 className="text-lg font-semibold text-white leading-snug">
                  {project.name}
                </h2>

                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {getTeaser(project.description)}
                </p>

                <button
                  className="self-start text-sm text-white hover:underline focus:outline-none mt-1"
                  onClick={() => setSelectedProject(project)}
                >
                  View Project →
                </button>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.p
            key="empty"
            className="text-gray-500 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            No projects match the selected filters.
          </motion.p>
        )}
      </AnimatePresence>

      {/* ── Modal ── */}
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
            <div className="md:w-1/2 overflow-y-auto pr-1">
              {/* Tags in modal */}
              {selectedProject.tags && selectedProject.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs font-semibold border border-gray-600 text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <h2 className="text-3xl font-bold mb-4 text-white">
                {selectedProject.name}
              </h2>
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