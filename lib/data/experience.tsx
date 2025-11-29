export interface Experience {
  role: string;
  company?: string;
  period: string;
  description: string;
}

export const experiences: Experience[] = [
  {
      role: "Jr. Software Developer",
      company: "Aquila Softwares Corporation",
      period: "August 2023 – Present",
      description:
        "Building and maintaining robust backend systems using Django and ASP.NET. Focused on API development, database design, and server-side logic.",
    },
    {
      role: "Django Backend Developer",
      company: "Aquila Softwares Corporation",
      period: "July 2025 – August 2025",
      description:
        "Built and optimized REST APIs, improved performance, and integrated third-party services.",
    },
    {
      role: "Shopify Store Builder VA",
      period: "August 2022 –  December 2023",
      description:
        "Customizing themes, managing products, managing pages and optimizing store performance for clients.",
    },
];
