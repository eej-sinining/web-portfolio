"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePersona } from "@/components/common/PersonaProvider";
import { Persona } from "@/lib/persona";
import { quickTransition } from "@/lib/motion";

const options: { value: Persona; label: string }[] = [
  { value: "developer", label: "Dev" },
  { value: "va", label: "VA" },
];

export default function PersonaSwitcher() {
  const { persona, setPersona } = usePersona();
  const prefersReduced = useReducedMotion();

  return (
    <div
      className="relative flex rounded-md border border-border-subtle overflow-hidden"
      role="group"
      aria-label="Switch portfolio side"
    >
      {options.map(({ value, label }) => {
        const isActive = persona === value;
        return (
          <button
            key={value}
            onClick={() => setPersona(value)}
            aria-pressed={isActive}
            className={`relative z-10 px-2.5 py-1.5 text-xs font-medium transition-colors duration-200 ${
              isActive ? "text-background" : "text-muted hover:text-foreground"
            }`}
          >
            {isActive && !prefersReduced && (
              <motion.span
                layoutId="persona-pill"
                className="absolute inset-0 bg-foreground rounded-sm"
                style={{ zIndex: -1 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            {isActive && prefersReduced && (
              <span className="absolute inset-0 bg-foreground rounded-sm" style={{ zIndex: -1 }} />
            )}
            {label}
          </button>
        );
      })}
    </div>
  );
}
