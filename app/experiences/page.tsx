"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import PageHeader from "@/components/common/PageHeader";
import { getExperiencesForPersona } from "@/lib/data/experience";
import { Persona } from "@/lib/persona";

function ExperiencesContent() {
  const searchParams = useSearchParams();
  const side = searchParams.get("side");
  const persona: Persona = side === "va" ? "va" : "developer";
  const items = getExperiencesForPersona(persona);

  return (
    <>
      <PageHeader
        label="Experience"
        title={persona === "va" ? "VA Experience" : "Work History"}
      />
      <div className="max-w-3xl mx-auto px-6 pb-20">
        <div className="space-y-0">
          {items.map((exp, index) => (
            <div
              key={index}
              className="grid grid-cols-[5rem_1fr] sm:grid-cols-[7rem_1fr] gap-4 py-6 border-b border-border-subtle last:border-0"
            >
              <p className="text-xs font-mono text-subtle pt-1">{exp.period}</p>
              <div>
                <h3 className="text-sm font-medium text-foreground">{exp.role}</h3>
                {exp.company && (
                  <p className="text-sm text-muted mt-0.5">{exp.company}</p>
                )}
                <p className="text-sm text-subtle mt-2 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default function ExperiencesPage() {
  return (
    <Suspense>
      <ExperiencesContent />
    </Suspense>
  );
}
