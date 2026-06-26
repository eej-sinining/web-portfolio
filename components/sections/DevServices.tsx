"use client";

import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/common/Section";
import { devServices, devServicesIntro } from "@/lib/data/profile";
import { Stagger, StaggerItem } from "@/components/common/Stagger";
import { quickTransition } from "@/lib/motion";

export default function DevServices() {
  const prefersReduced = useReducedMotion();

  return (
    <Section id="services" label="03 — Services" title="What I Build & Offer">
      <p className="text-muted leading-relaxed mb-8 -mt-4">{devServicesIntro}</p>
      <Stagger className="grid gap-3 sm:grid-cols-2">
        {devServices.map((service) => (
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
