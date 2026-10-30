export const profile = {
  name: "Ean Endrew Jade Sinining",
  shortName: "EEJS",
  location: "Davao City, Philippines",
  roles: ["Software Engineer", "Computer Science Student"],
  tagline: "I build backend APIs and web apps with ASP.NET Core, Django, and Next.js.",
  email: "eej.sinining@gmail.com",
  school: "University of Mindanao",
  availability: "Open to freelance work",
  // Speech-bubble lines for the roaming cursor, keyed by section id.
  cursorNotes: {
    hero: ["Hi! I'm Ean", "I build backend APIs"],
    about: ["Backend first", "Frontend when a project needs it"],
    experience: ["Click a role for details", "At Aquila since Jul 2025"],
    skills: ["ASP.NET Core and Django", "PostgreSQL is my go-to"],
    education: ["BS Computer Science at UM"],
    certificates: ["Both earned in 2025"],
    projects: ["Click a project for details", "pip install stackforge-cli"],
    services: ["Need an API built?"],
    contact: ["Email works best"],
  } as Record<string, string[]>,
  about: [
    "I'm a software engineer at Aquila Software Corporation and a Computer Science student at the University of Mindanao. I started there as a Django backend intern in July 2025 and moved to a part-time engineering role that August.",
    "Most of my work is backend: REST APIs, database design in PostgreSQL, authentication with JWT and OAuth, and role-based access control. I've built several backends from scratch in Django and ASP.NET Core, and I also work on the frontend with Next.js and TypeScript when a project needs it.",
    "I care about APIs other people can actually use. At work I standardized the Swagger/OpenAPI docs across several of our applications to make the APIs clearer and easier for new developers to pick up. I also wrote StackForge, a CLI that sets up a new ASP.NET Core API so I stop rebuilding the same boilerplate.",
  ],
};

export const techStack = {
  Backend: ["ASP.NET Core", "Entity Framework Core", "Django", "Django REST Framework"],
  Languages: ["C#", "Python", "TypeScript", "JavaScript"],
  Frontend: ["Next.js", "React", "HTML", "CSS"],
  "APIs & Auth": ["REST API design", "JWT", "OAuth", "RBAC", "Swagger / OpenAPI"],
  Database: ["PostgreSQL", "Database design", "Schema migrations"],
  Tools: ["Git", "GitHub", "Docker", "ClickUp", "Trello", "Agile / Scrum"],
};

export const devServices = [
  {
    title: "Web applications",
    description:
      "Dashboards, internal tools, and client portals built with Next.js and TypeScript on top of an API I build to match.",
  },
  {
    title: "Backend and APIs",
    description:
      "REST APIs in ASP.NET Core or Django with PostgreSQL, authentication, role-based access, and Swagger docs your frontend team can work from.",
  },
];

export const devServicesIntro =
  "I take on freelance and contract work outside my part-time role.";
