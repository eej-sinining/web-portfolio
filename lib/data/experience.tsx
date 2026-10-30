import { Persona } from "@/lib/persona";

export interface Experience {
  role: string;
  company?: string;
  period: string;
  description: string;
  highlights?: string[];
  persona: Persona;
}

export const experiences: Experience[] = [
  {
    role: "Software Engineer (Part-time)",
    company: "Aquila Software Corporation",
    period: "Aug 2025 – Present",
    description:
      "I work across several production web applications using ASP.NET Core, Django, Next.js, TypeScript, PostgreSQL, and Docker, alongside the frontend and backend developers on each team.",
    highlights: [
      "GetPass (formerly Pacepoint), event management: built the ASP.NET Core backend from scratch in C#, including the core API and services, and worked with the frontend developers on integration.",
      "Peplo, HRIS: full-stack work, with backend services in ASP.NET Core and frontend features in Next.js and TypeScript.",
      "Bettermomsh, e-commerce: develop and maintain ASP.NET Core backend services and REST APIs as the business requirements change.",
      "Standardized the Swagger/OpenAPI documentation across these applications.",
    ],
    persona: "developer",
  },
  {
    role: "Backend Developer Intern (Django)",
    company: "Aquila Software Corporation",
    period: "Jul 2025 – Aug 2025",
    description:
      "Built the Pacepoint event management backend from scratch with Django, PostgreSQL, and Docker. I designed the database models and the REST API behind the platform's core event features.",
    persona: "developer",
  },
  {
    role: "Shopify Store Builder VA",
    period: "Aug 2022 – Dec 2023",
    description:
      "Set up and maintained Shopify stores for clients: store configuration, product listings, theme customization, and page building.",
    persona: "va",
  },
];

export function getExperiencesForPersona(persona: Persona) {
  return experiences.filter((exp) => exp.persona === persona);
}
