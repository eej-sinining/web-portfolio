"use client";

import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/common/Section";
import { vaProfile } from "@/lib/data/vaProfile";
import { Stagger, StaggerItem } from "@/components/common/Stagger";
import { quickTransition } from "@/lib/motion";

export default function VaToolkit() {
  const prefersReduced = useReducedMotion();

  return (
    <Section id="stack" label="04 — Toolkit" title="Shopify Toolkit">
      <Stagger className="space-y-8">
        {Object.entries(vaProfile.toolkit).map(([category, items]) => (
          <StaggerItem key={category}>
            <div>
              <h3 className="text-xs font-mono text-subtle uppercase tracking-wider mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item, i) => (
                  <motion.span
                    key={item}
                    className="px-3 py-1.5 text-sm text-muted bg-surface border border-border-subtle rounded-md"
                    initial={prefersReduced ? false : { opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ ...quickTransition, delay: i * 0.04 }}
                    whileHover={prefersReduced ? undefined : { y: -2 }}
                  >
                    {item}
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
