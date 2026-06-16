"use client";

import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/common/Section";
import { profile } from "@/lib/data/profile";
import { vaProfile } from "@/lib/data/vaProfile";
import { socialLinks } from "@/lib/data/socialLink";
import { usePersona } from "@/components/common/PersonaProvider";
import { Stagger, StaggerItem } from "@/components/common/Stagger";
import { quickTransition } from "@/lib/motion";

export default function Contact() {
  const { isDeveloper, isVa } = usePersona();
  const prefersReduced = useReducedMotion();

  const message = isDeveloper
    ? "Have a project in mind or just want to connect? I'm open to opportunities, collaborations, and conversations about software."
    : vaProfile.contactMessage;

  const visibleLinks = socialLinks.filter((l) =>
    isVa ? l.label !== "Resume" && l.label !== "GitHub" : true
  );

  return (
    <Section id="contact" label="06 — Contact" title="Get in Touch">
      <p className="text-muted leading-relaxed mb-8">{message}</p>

      <div className="space-y-4">
        <motion.a
          href={`mailto:${profile.email}`}
          className="card flex items-center justify-between p-5 group"
          whileHover={prefersReduced ? undefined : { scale: 1.01, transition: quickTransition }}
          whileTap={prefersReduced ? undefined : { scale: 0.99 }}
        >
          <div>
            <p className="text-xs font-mono text-subtle uppercase tracking-wider">Email</p>
            <p className="text-sm text-foreground mt-1 group-hover:text-accent transition-colors">
              {profile.email}
            </p>
          </div>
          <svg
            className="w-4 h-4 text-subtle group-hover:text-accent transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </motion.a>

        <Stagger className={`grid gap-3 ${isVa ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2 sm:grid-cols-4"}`}>
          {visibleLinks.map(({ href, label }) => (
            <StaggerItem key={label}>
              <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-4 text-center text-xs text-muted hover:text-foreground transition-colors block"
                whileHover={prefersReduced ? undefined : { y: -2, transition: quickTransition }}
              >
                {label}
              </motion.a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
