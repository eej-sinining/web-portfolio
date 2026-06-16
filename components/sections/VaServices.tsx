"use client";

import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/common/Section";
import { vaProfile } from "@/lib/data/vaProfile";
import { Stagger, StaggerItem } from "@/components/common/Stagger";
import { quickTransition } from "@/lib/motion";

export default function VaServices() {
  const prefersReduced = useReducedMotion();

  return (
    <Section id="services" label="03 — Services" title="What I Offer">
      <Stagger className="grid gap-3 sm:grid-cols-2">
        {vaProfile.services.map((service) => (
          <StaggerItem key={service.title}>
            <motion.div
              className="card p-5 h-full"
              whileHover={prefersReduced ? undefined : { y: -3, transition: quickTransition }}
            >
              <h3 className="text-sm font-medium text-foreground">{service.title}</h3>
              <p className="text-sm text-subtle mt-2 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
