"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { defaultTransition, fadeUp, viewport } from "@/lib/motion";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
}

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  as = "div",
}: FadeInProps) {
  const prefersReduced = useReducedMotion();
  const Component = as === "section" ? motion.section : motion.div;

  if (prefersReduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      transition={{ ...defaultTransition, delay }}
    >
      {children}
    </Component>
  );
}
