"use client";

import Section from "@/components/common/Section";
import { profile } from "@/lib/data/profile";
import { vaProfile } from "@/lib/data/vaProfile";
import { usePersona } from "@/components/common/PersonaProvider";
import { Stagger, StaggerItem } from "@/components/common/Stagger";

export default function About() {
  const { isDeveloper } = usePersona();
  const paragraphs = isDeveloper ? profile.about : vaProfile.about;
  const title = isDeveloper ? "About Me" : "About My VA Work";

  return (
    <Section id="about" label="01 — About" title={title}>
      <Stagger className="space-y-5 text-muted leading-relaxed">
        {paragraphs.map((paragraph, i) => (
          <StaggerItem key={i}>
            <p>{paragraph}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
