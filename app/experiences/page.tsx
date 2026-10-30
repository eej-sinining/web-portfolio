"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import PageHeader from "@/components/common/PageHeader";
import ExperienceList from "@/components/common/ExperienceList";
import { getExperiencesForPersona } from "@/lib/data/experience";
import { Persona } from "@/lib/persona";

function ExperiencesContent() {
  const searchParams = useSearchParams();
  const side = searchParams.get("side");
  const persona: Persona = side === "va" ? "va" : "developer";

  return (
    <>
      <PageHeader title={persona === "va" ? "Shopify VA experience" : "Work history"} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
        <ExperienceList items={getExperiencesForPersona(persona)} />
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
