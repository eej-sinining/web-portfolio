"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePersona } from "@/components/common/PersonaProvider";

export default function AmbientBackground() {
  const prefersReduced = useReducedMotion();
  const { isDeveloper } = usePersona();

  if (prefersReduced) return null;

  const primary = isDeveloper ? "var(--accent)" : "#f59e0b";
  const secondary = isDeveloper ? "#6366f1" : "#f97316";

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden -z-10"
      aria-hidden
    >
      <motion.div
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl opacity-[0.18]"
        style={{ background: primary }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -25, 15, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -left-40 h-80 w-80 rounded-full blur-3xl opacity-[0.12]"
        style={{ background: secondary }}
        animate={{
          x: [0, 40, 10, 0],
          y: [0, 20, -30, 0],
          scale: [1, 0.92, 1.06, 1],
        }}
        transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full blur-3xl opacity-[0.1]"
        style={{ background: primary }}
        animate={{
          x: [0, -25, 20, 0],
          y: [0, -15, 25, 0],
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />
    </div>
  );
}
