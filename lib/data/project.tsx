export interface Project {
  name: string;
  description: string;
  link: string;
  image?: string;
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

  PacePoint aims to simplify race management complexities while enhancing participant engagement through intuitive design and powerful backend architecture. Whether it’s a local 5K or an international marathon, PacePoint scales with your event’s needs, ensuring smooth operations and a memorable experience for all involved.`,
    link: "#",
    image: "/images/financetrackerpfp.jpg",
  },
  

];
