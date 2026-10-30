export type ProjectTag =
  | "API-based"
  | "Web App"
  | "Mobile App"
  | "Machine Learning/AI";

export interface Project {
  name: string;
  description: string;
  link: string;
  image?: string;
  category?: "main" | "dev-tools";
  tags?: ProjectTag[];
}

export const projects: Project[] = [
  {
    name: "StackForge CLI",
    description: `A Python CLI that scaffolds a new ASP.NET Core API with the setup I kept rewriting by hand.

Run stackforge, answer a few prompts, and it generates:

- A .NET 10 solution split into API, Application, Domain, Infrastructure, and Persistence projects
- JWT authentication with ASP.NET Identity
- Swagger UI with Bearer token support
- PostgreSQL through EF Core
- Docker and docker-compose with healthchecks
- Role and user seeders, including a SuperAdmin
- A git repo on main with staging and development branches, plus a GitHub Actions workflow that syncs them on first push

Install it with pip install stackforge-cli, then docker-compose up --build and open Swagger at localhost:5000. It checks PyPI for a newer version each time it runs.`,
    link: "https://github.com/eej-sinining/stackforge-cli",
    category: "dev-tools",
    tags: ["API-based"],
  },
  {
    name: "Apostle: Insurance Management System",
    description: `Backend for a burial plan insurance system. I built the API from scratch in ASP.NET Core and deployed it to production.

It replaces spreadsheets and paper records for member enrollment, policies, contributions, and claims.

- Member and beneficiary registration with policy assignment
- Plan configuration: coverage tiers, terms, and premiums
- Contribution and payment tracking, with overdue monitoring
- Claims intake, review, and payout status
- Role-based access for admins, agents, and branch staff
- Reports on active policies, collections, and claims`,
    link: "#",
    category: "main",
    tags: ["API-based", "Web App"],
  },
  {
    name: "GoHero / Pasugo: On-Demand Services",
    description: `Backend for a Grab-style app that handles both package delivery (pasugo) and ride booking. I built the API from scratch and handled the production deployment.

Delivery:
- Book a rider to pick up and drop off packages across the city
- Order tracking from pickup to drop-off
- Fare estimates by distance and service type
- Order history and status notifications

Rides:
- Pickup and destination selection
- Driver matching and live trip tracking
- Fare breakdown and trip completion
- Ride history and rebooking

The mobile app talks to the REST API, which covers authentication, geolocation, and push notifications for the booking flows.`,
    link: "#",
    category: "main",
    tags: ["Mobile App", "API-based"],
  },
  {
    name: "Banana Disease Detection (Thesis)",
    description: `My thesis project: an image classifier that detects disease in banana leaves.

I improved on a baseline ResNet50 model in TensorFlow and deployed the trained model so an application can send it leaf photos for inference.`,
    link: "#",
    category: "main",
    tags: ["Machine Learning/AI"],
  },
  {
    name: "Pacepoint / GetPass",
    description: `An event management platform for race organizers and participants, built at Aquila Software Corporation.

I built the first backend from scratch during my internship with Django, Django REST Framework, PostgreSQL, and Docker. The platform was later renamed GetPass, and I rebuilt the backend from scratch in ASP.NET Core and C#. The frontend is Next.js.

- Race registration and participant dashboards
- Payments for race fees and merchandise
- Event notifications and reminders
- Custom event pages
- Reporting for organizers`,
    link: "#",
    category: "main",
    tags: ["API-based"],
  },
  {
    name: "Personal Portfolio",
    description: `This site. Built with Next.js and TypeScript to show my projects, skills, and work history.`,
    link: "https://github.com/eej-sinining/web-portfolio",
    category: "main",
    tags: ["Web App"],
  },
  {
    name: "Real-Time Inspector",
    description: `A browser tool for debugging SignalR, Socket.IO, and plain WebSocket connections. It's a single HTML page with no backend.

- Connects to SignalR (ASP.NET Core), Socket.IO, or native WebSocket
- Logs events with timestamps and shows per-event counts
- Connection diagnostics and automatic reconnects for SignalR and Socket.IO
- Exports captured events to JSON

Built with vanilla JavaScript, Tailwind CSS from a CDN, the SignalR JS client (v8), and the Socket.IO client (v4).`,
    link: "https://eej-sinining.github.io/Personal-RealTime-Tester/",
    image: "/images/realtime-tester.png",
    category: "dev-tools",
    tags: ["Web App"],
  },
];
