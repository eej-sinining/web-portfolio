"use client";

import { useState } from "react";
import PageHeader from "@/components/common/PageHeader";
import Modal from "@/components/common/modal";
import { projects, Project } from "@/lib/data/project";

type Category = "main" | "dev-tools";
type Tag = "API-based" | "Web App" | "Machine Learning/AI";

const ALL_TAGS: Tag[] = ["API-based", "Web App", "Machine Learning/AI"];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("main");
  const [activeTags, setActiveTags] = useState<Tag[]>([]);

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
    <>
      <PageHeader label="Projects" title="All Projects" />
      <div className="max-w-3xl mx-auto px-6 pb-20">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
          <div className="flex rounded-lg border border-border-subtle overflow-hidden shrink-0">
            {(["main", "dev-tools"] as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-foreground text-background"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {cat === "main" ? "Developer" : "Personal"}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded-md text-xs border transition-colors ${
                  activeTags.includes(tag)
                    ? "bg-accent-muted text-accent border-accent/30"
                    : "border-border-subtle text-subtle hover:text-muted"
                }`}
              >
                {tag}
              </button>
            ))}
            {activeTags.length > 0 && (
              <button
                onClick={() => setActiveTags([])}
                className="px-3 py-1 text-xs text-subtle hover:text-foreground transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        <div className="space-y-3">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <button
                key={project.name}
                onClick={() => setSelectedProject(project)}
                className="card w-full text-left p-5 group"
              >
                <h3 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-subtle mt-1.5 line-clamp-2 leading-relaxed">
                  {project.description.split("\n")[0]}
                </p>
                {project.tags && (
                  <div className="flex gap-2 mt-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono uppercase tracking-wider text-subtle">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </button>
            ))
          ) : (
            <p className="text-sm text-subtle">No projects match the selected filters.</p>
          )}
        </div>
      </div>

      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">{selectedProject.name}</h2>
            <div className="text-sm text-muted leading-relaxed whitespace-pre-wrap max-h-[50vh] overflow-y-auto">
              {selectedProject.description}
            </div>
            {selectedProject.link && selectedProject.link !== "#" && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                Visit Project
              </a>
            )}
          </div>
        )}
      </Modal>
    </>
  );
}
