"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/common/Section";
import { certificates } from "@/lib/data/certificate";
import { Stagger, StaggerItem } from "@/components/common/Stagger";
import { quickTransition } from "@/lib/motion";

export default function Certificates() {
  const prefersReduced = useReducedMotion();

  return (
    <Section
      id="certificates"
      label="05 — Certifications"
      title="Certifications"
      action={
        <Link
          href="/certificates"
          className="text-xs text-subtle hover:text-foreground transition-colors font-mono"
        >
          View all →
        </Link>
      }
    >
      <Stagger className="space-y-2">
        {certificates.map(({ name, link }) => (
          <StaggerItem key={name}>
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center justify-between p-4 group"
              whileHover={prefersReduced ? undefined : { x: 4, transition: quickTransition }}
            >
              <span className="text-sm text-muted group-hover:text-foreground transition-colors">
                {name}
              </span>
              <svg
                className="w-4 h-4 text-subtle group-hover:text-accent transition-colors shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </motion.a>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
