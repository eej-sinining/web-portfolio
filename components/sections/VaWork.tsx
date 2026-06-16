"use client";

import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/common/Section";
import { vaProfile } from "@/lib/data/vaProfile";
import { Stagger, StaggerItem } from "@/components/common/Stagger";
import { quickTransition } from "@/lib/motion";

export default function VaWork() {
  const prefersReduced = useReducedMotion();

  return (
    <Section id="projects" label="05 — Work" title="Store Highlights">
      <Stagger className="space-y-3">
        {vaProfile.highlights.map((item) => (
          <StaggerItem key={item.name}>
            <motion.div
              className="card p-5"
              whileHover={prefersReduced ? undefined : { x: 4, transition: quickTransition }}
            >
              <h3 className="text-sm font-medium text-foreground">{item.name}</h3>
              <p className="text-sm text-subtle mt-2 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
