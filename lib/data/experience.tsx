import { Persona } from "@/lib/persona";

export interface Experience {
  role: string;
  company?: string;
  period: string;
  description: string;
  persona: Persona;
}

export const experiences: Experience[] = [
  {
    role: "Jr. Software Engineer",
    company: "Aquila Softwares Corporation",
    period: "August 2025 – Present",
    description:
      "Building and maintaining robust backend systems using Django and ASP.NET. Focused on API development, database design, and server-side logic.",
    persona: "developer",
  },
  {
    role: "Intern Backend Developer",
    company: "Aquila Softwares Corporation",
    period: "July 2025 – August 2025",
    description:
      "Built and optimized REST APIs, improved performance, and integrated third-party services.",
    persona: "developer",
  },
  {
    role: "Shopify Store Builder VA",
    period: "August 2022 – December 2023",
    description:
      "Built and maintained Shopify stores for clients — theme customization, product catalog management, page building, and store performance optimization.",
    persona: "va",
  },
];

export function getExperiencesForPersona(persona: Persona) {
  return experiences.filter((exp) => exp.persona === persona);
}
