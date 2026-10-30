"use client";

import { useState } from "react";
import { Experience } from "@/lib/data/experience";
import { ChevronDownIcon } from "@/components/common/icons";

export default function ExperienceAccordion({ items }: { items: Experience[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <ul className="space-y-2">
      {items.map((exp, i) => {
        const isOpen = openIndex === i;
        const panelId = `experience-panel-${i}`;
        return (
          <li key={`${exp.role}-${exp.period}`} className="rounded-lg border border-border-subtle">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full flex items-center justify-between gap-4 px-4 py-3 text-left"
            >
              <span>
                <span className="block text-sm font-semibold text-foreground">{exp.role}</span>
                {exp.company && <span className="block text-xs text-subtle">{exp.company}</span>}
              </span>
              <span className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-medium text-muted">{exp.period}</span>
                <ChevronDownIcon
                  className={`w-4 h-4 text-subtle transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </span>
            </button>
            {isOpen && (
              <div id={panelId} className="px-4 pb-4 text-sm text-muted leading-relaxed">
                <p>{exp.description}</p>
                {exp.highlights && (
                  <ul className="mt-2 space-y-1.5 list-disc pl-4 marker:text-subtle">
                    {exp.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
