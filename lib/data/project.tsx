export interface Project {
  name: string;
  description: string;
  link: string;
  image?: string;
  category?: "main" | "dev-tools";
  tags?: ("API-based" | "Web App" | "Machine Learning/AI")[];
}

export const projects: Project[] = [
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