"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/common/Section";
import { techStack } from "@/lib/data/profile";
import { Stagger, StaggerItem } from "@/components/common/Stagger";
import { quickTransition } from "@/lib/motion";

export default function TechStack() {
  const prefersReduced = useReducedMotion();

  return (
    <Section
      id="stack"
      label="03 — Stack"
      title="Tech Stack"
      action={
        <Link
          href="/about"
          className="text-xs text-subtle hover:text-foreground transition-colors font-mono"
        >
          View all →
        </Link>
      }
    >
      <Stagger className="space-y-8">
        {Object.entries(techStack).map(([category, items]) => (
          <StaggerItem key={category}>
            <div>
              <h3 className="text-xs font-mono text-subtle uppercase tracking-wider mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((tech, i) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1.5 text-sm text-muted bg-surface border border-border-subtle rounded-md"
                    initial={prefersReduced ? false : { opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ ...quickTransition, delay: i * 0.04 }}
                    whileHover={prefersReduced ? undefined : { y: -2, borderColor: "var(--accent)" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
