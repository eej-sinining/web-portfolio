"use client";

import { useState } from "react";
import PageHeader from "@/components/common/PageHeader";
import ProjectList from "@/components/common/ProjectList";
import { projects, ProjectTag } from "@/lib/data/project";

type Category = "main" | "dev-tools";

const CATEGORY_LABELS: Record<Category, string> = {
  main: "Projects",
  "dev-tools": "Developer tools",
};

const ALL_TAGS: ProjectTag[] = [
  "API-based",
  "Web App",
  "Mobile App",
  "Machine Learning/AI",
];

function filterButtonClass(active: boolean) {
  return `transition-colors ${
    active
      ? "text-foreground font-medium underline underline-offset-4 decoration-accent"
      : "text-subtle hover:text-foreground"
  }`;
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("main");
  const [activeTags, setActiveTags] = useState<ProjectTag[]>([]);

  const toggleTag = (tag: ProjectTag) => {
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
      <PageHeader title="Projects" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-4">
        <div className="space-y-2 mb-8 text-sm">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {(Object.keys(CATEGORY_LABELS) as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={filterButtonClass(activeCategory === cat)}
              >
                {CATEGORY_LABELS[cat]}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                aria-pressed={activeTags.includes(tag)}
                className={filterButtonClass(activeTags.includes(tag))}
              >
                {tag}
              </button>
            ))}
            {activeTags.length > 0 && (
              <button onClick={() => setActiveTags([])} className="link text-subtle hover:text-accent">
                Clear
              </button>
            )}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <ProjectList projects={filteredProjects} />
        ) : (
          <p className="text-sm text-subtle">No projects match these filters.</p>
        )}
      </div>
    </>
  );
}
