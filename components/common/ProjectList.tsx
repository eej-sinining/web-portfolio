"use client";

import { useState } from "react";
import Modal from "@/components/common/modal";
import { Project } from "@/lib/data/project";

function summary(project: Project) {
  return project.description.split("\n\n")[0];
}

function linkLabel(link: string) {
  return link.includes("github.com") ? "GitHub" : "Live site";
}

function hasLink(project: Project) {
  return Boolean(project.link) && project.link !== "#";
}

interface ProjectListProps {
  projects: Project[];
  // "grid" for the home page card, "list" for the full projects page.
  layout?: "grid" | "list";
}

export default function ProjectList({ projects, layout = "list" }: ProjectListProps) {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <ul className={layout === "grid" ? "grid gap-2 sm:grid-cols-2" : "space-y-2"}>
        {projects.map((project) => (
          <li key={project.name}>
            <button
              onClick={() => setSelected(project)}
              aria-haspopup="dialog"
              className="group w-full h-full flex flex-col justify-start text-left rounded-lg border border-border-subtle px-3.5 py-3 hover:border-accent transition-colors"
            >
              <span className="block text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                {project.name}
              </span>
              <span
                className={`mt-1 text-xs text-muted leading-relaxed ${
                  layout === "grid" ? "line-clamp-2" : "block"
                }`}
              >
                {summary(project)}
              </span>
              {layout === "list" && project.tags && project.tags.length > 0 && (
                <span className="block mt-1.5 text-xs text-subtle">{project.tags.join(" · ")}</span>
              )}
            </button>
          </li>
        ))}
      </ul>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">{selected.name}</h2>
            {selected.tags && selected.tags.length > 0 && (
              <ul className="flex flex-wrap gap-1.5">
                {selected.tags.map((tag) => (
                  <li key={tag} className="chip">
                    {tag}
                  </li>
                ))}
              </ul>
            )}
            <div className="text-sm text-muted leading-relaxed whitespace-pre-wrap">
              {selected.description}
            </div>
            {hasLink(selected) && (
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="chip"
              >
                {linkLabel(selected.link)} ↗
              </a>
            )}
          </div>
        )}
      </Modal>
    </>
  );
}
