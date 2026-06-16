"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/common/Section";
import { getExperiencesForPersona } from "@/lib/data/experience";
import { usePersona } from "@/components/common/PersonaProvider";
import { Stagger, StaggerItem } from "@/components/common/Stagger";
import { quickTransition } from "@/lib/motion";

export default function Experience() {
  const { persona, isVa } = usePersona();
  const items = getExperiencesForPersona(persona);
  const prefersReduced = useReducedMotion();

  return (
    <Section
      id="experience"
      label="02 — Experience"
      title={isVa ? "VA Experience" : "Experience"}
      action={
        <Link
          href={`/experiences?side=${persona}`}
          className="text-xs text-subtle hover:text-foreground transition-colors font-mono"
        >
          View all →
        </Link>
      }
    >
      <Stagger className="space-y-0">
        {items.map((exp, index) => (
          <StaggerItem key={index}>
            <motion.div
              className="group grid grid-cols-[5rem_1fr] sm:grid-cols-[7rem_1fr] gap-4 py-6 border-b border-border-subtle last:border-0"
              whileHover={prefersReduced ? undefined : { x: 4 }}
              transition={quickTransition}
            >
              <p className="text-xs font-mono text-subtle pt-1">
                {exp.period.split("–")[0]?.trim() || exp.period}
              </p>
              <div>
                <h3 className="text-sm font-medium text-foreground">{exp.role}</h3>
                {exp.company && (
                  <p className="text-sm text-muted mt-0.5">{exp.company}</p>
                )}
                <p className="text-sm text-subtle mt-2 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
