"use client";

import { usePersona } from "@/components/common/PersonaProvider";
import { Persona } from "@/lib/persona";

const options: { value: Persona; label: string }[] = [
  { value: "developer", label: "Developer" },
  { value: "va", label: "Shopify VA" },
];

export default function PersonaSwitcher() {
  const { persona, setPersona } = usePersona();

  return (
    <div className="flex items-center gap-1 text-xs" role="group" aria-label="Switch portfolio side">
      {options.map(({ value, label }, i) => {
        const isActive = persona === value;
        return (
          <span key={value} className="flex items-center gap-1">
            {i > 0 && <span className="text-border" aria-hidden>/</span>}
            <button
              onClick={() => setPersona(value)}
              aria-pressed={isActive}
              className={`px-1 py-1 transition-colors ${
                isActive
                  ? "text-foreground font-medium underline underline-offset-4 decoration-accent"
                  : "text-subtle hover:text-foreground"
              }`}
            >
              {label}
            </button>
          </span>
        );
      })}
    </div>
  );
}
