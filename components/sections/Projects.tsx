"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/common/Section";
import Modal from "@/components/common/modal";
import { Stagger, StaggerItem } from "@/components/common/Stagger";
import { projects, Project } from "@/lib/data/project";
import { quickTransition } from "@/lib/motion";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const prefersReduced = useReducedMotion();
  const featured = projects.slice(0, 4);

  return (
    <>
      <Section
        id="projects"
        label="05 — Projects"
        title="Recent Projects"
        action={
          <Link
            href="/projects"
            className="text-xs text-subtle hover:text-foreground transition-colors font-mono"
          >
            View all →
          </Link>
        }
      >
        <Stagger className="space-y-3">
          {featured.map((project) => (
            <StaggerItem key={project.name}>
              <motion.button
                onClick={() => setSelectedProject(project)}
                className="card w-full text-left p-5 group"
                whileHover={prefersReduced ? undefined : { y: -3, transition: quickTransition }}
                whileTap={prefersReduced ? undefined : { scale: 0.99 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-subtle mt-1.5 line-clamp-2 leading-relaxed">
                      {project.description.split("\n")[0]}
                    </p>
                  </div>
                  <motion.svg
                    className="w-4 h-4 text-subtle shrink-0 mt-1 group-hover:text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    whileHover={prefersReduced ? undefined : { x: 3 }}
                    transition={quickTransition}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </motion.svg>
                </div>
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono uppercase tracking-wider text-subtle"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.button>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="space-y-4">
            {selectedProject.tags && selectedProject.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono uppercase tracking-wider text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <h2 className="text-xl font-semibold text-foreground">
              {selectedProject.name}
            </h2>
            <div className="text-sm text-muted leading-relaxed space-y-3 whitespace-pre-wrap max-h-[50vh] overflow-y-auto">
              {selectedProject.description}
            </div>
            {selectedProject.link && selectedProject.link !== "#" && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex mt-2"
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
