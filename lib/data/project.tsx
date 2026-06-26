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
    description: `StackForge is a Python CLI scaffolder that generates production-ready .NET Clean Architecture projects in minutes — so you spend less time on boilerplate and more time shipping features.

Run stackforge, answer a few prompts, and get a full solution structure out of the box:

- .NET 10 Clean Architecture (API, Application, Domain, Infrastructure, Persistence)
- JWT authentication with ASP.NET Identity
- Swagger UI with Bearer token support
- PostgreSQL with EF Core
- Docker + docker-compose with healthchecks
- Role and user seeders (SuperAdmin included)
- Git initialized on main with staging and development branches
- GitHub Actions workflow to sync branches on first push

Install via pip (stackforge-cli), scaffold a project, run docker-compose up --build, and hit Swagger at localhost:5000. StackForge also checks PyPI for updates when you run it.

Built for developers who want a consistent, opinionated starting point for CQRS-style .NET APIs without copying the same setup every time.`,
    link: "https://github.com/eej-sinining/stackforge-cli",
    category: "dev-tools",
    tags: ["API-based"],
  },
  {
    name: "Burial Plan Insurance System",
    description: `An end-to-end insurance management platform built for burial plan providers — handling member enrollment, policy lifecycle, contributions, and claims in one centralized system.

The system replaces manual spreadsheets and paper-based tracking with a structured backend that keeps member records, beneficiaries, and payment history accurate and auditable.

Key features:
- Member and beneficiary registration with policy assignment
- Burial plan product configuration (coverage tiers, terms, premiums)
- Contribution and payment tracking with overdue monitoring
- Claims intake, review workflow, and payout status tracking
- Role-based access for admins, agents, and branch staff
- Reporting dashboards for active policies, collections, and claims summary

Designed for cooperatives, funeral service companies, and micro-insurance operators that need reliable policy administration without enterprise-level complexity.`,
    link: "#",
    category: "main",
    tags: ["API-based", "Web App"],
  },
  {
    name: "Raider Xpress",
    description: `Raider Xpress is a mobile application that combines on-demand delivery and ride booking into a single platform — built for users who need fast local transport and courier services from one app.

Pasugo (delivery):
- Book a rider to pick up and deliver packages across the city
- Real-time order tracking from pickup to drop-off
- Fare estimates based on distance and service type
- Order history and delivery status notifications

Book a Car (ride-hailing):
- Request a car ride with pickup and destination selection
- Driver matching and live trip tracking on a map
- In-app fare breakdown and trip completion flow
- Ride history and rebooking for frequent routes

The app connects passengers and drivers through a mobile client backed by REST APIs, with authentication, geolocation, and push notifications powering the core booking flows. Designed for the Philippine market where motorbike courier (pasugo) and affordable ride options are everyday needs.`,
    link: "#",
    category: "main",
    tags: ["Mobile App", "API-based"],
  },
  {
    name: "PacePoint",
    description: `PacePoint is a comprehensive, full enterprise event management platform designed specifically for race organizers and participants. It offers a seamless experience from registration to race completion, powered by a robust backend built on Django and Django REST Framework (DRF), ensuring high performance and scalability.

The platform integrates with Postgres for efficient and reliable data storage, handling everything from participant info, race logistics, to live event updates. The frontend is crafted with Next.js, delivering a fast, SEO-friendly, and interactive user interface.

Key features include:
- Real-time race tracking and updates.
- Secure payment integration for race fees and merchandise.
- Automated event notifications and reminders.
- Customizable race event pages and participant dashboards.
- Detailed analytics and reporting tools for organizers.

PacePoint aims to simplify race management complexities while enhancing participant engagement through intuitive design and powerful backend architecture. Whether it's a local 5K or an international marathon, PacePoint scales with your event's needs, ensuring smooth operations and a memorable experience for all involved.`,
    link: "#",
    image: "/images/financetrackerpfp.jpg",
    category: "main",
    tags: ["API-based"],
  },
  {
    name: "Real-Time Inspector",
    description: `A universal real-time debugging tool for inspecting SignalR, Socket.IO, and WebSocket connections directly from the browser.

This is a lightweight, zero-backend HTML + JavaScript utility designed to help developers test connectivity, monitor events, and debug real-time systems visually.

Features:
- Supports SignalR (ASP.NET Core)
- Supports Socket.IO
- Supports Native WebSocket
- Real-time event logging with timestamps
- Event statistics and breakdown
- Built-in connection diagnostics & testing
- Automatic reconnection handling (SignalR / Socket.IO)
- Export captured events to JSON
- Clean UI powered by Tailwind CSS
- Runs entirely in the browser (no backend required)

Technologies Used:
- HTML5
- Vanilla JavaScript
- Tailwind CSS (CDN)
- SignalR JavaScript Client (v8.x)
- Socket.IO Client (v4.x)

Perfect for developers working with real-time applications who need a quick, reliable way to monitor connections, debug events, and test WebSocket-based systems without setting up complex debugging environments.`,
    link: "https://eej-sinining.github.io/Personal-RealTime-Tester/",
    image: "/images/realtime-tester.png",
    category: "dev-tools",
    tags: ["Web App"],
  },
];
