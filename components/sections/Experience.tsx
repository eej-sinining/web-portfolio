"use client";

import Card from "@/components/common/Card";
import ExperienceAccordion from "@/components/common/ExperienceAccordion";
import { BriefcaseIcon } from "@/components/common/icons";
import { getExperiencesForPersona } from "@/lib/data/experience";
import { usePersona } from "@/components/common/PersonaProvider";

export default function Experience({ className }: { className?: string }) {
  const { persona } = usePersona();

  return (
    <Card
      id="experience"
      title="Experience"
      icon={<BriefcaseIcon />}
      viewAllHref={`/experiences?side=${persona}`}
      className={className}
    >
      <ExperienceAccordion items={getExperiencesForPersona(persona)} />
    </Card>
  );
}
