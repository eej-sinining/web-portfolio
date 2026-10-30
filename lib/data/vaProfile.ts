export const vaProfile = {
  label: "Shopify VA",
  roles: ["Shopify Store Builder", "E-commerce VA"],
  availability: "Taking Shopify projects",
  cursorNotes: {
    hero: ["Hi! I'm Ean", "I build Shopify stores"],
    about: ["A year and a half on Shopify"],
    experience: ["Aug 2022 to Dec 2023"],
    toolkit: ["Liquid for custom sections"],
    services: ["From setup to launch"],
    work: ["Full builds and theme overhauls"],
    contact: ["Tell me about your store"],
  } as Record<string, string[]>,
  tagline: "I set up, customize, and maintain Shopify stores.",
  about: [
    "Before I moved into software engineering, I spent about a year and a half as a Shopify virtual assistant, from August 2022 to December 2023, building and running stores for several clients.",
    "The work covered theme customization, product catalogs, page building, and store speed. Some clients needed a store set up from nothing; others had an existing theme that needed cleaning up.",
    "I know enough HTML, CSS, and Liquid to build custom sections and fix layout problems that the theme editor can't handle on its own.",
  ],
  services: [
    {
      title: "Store setup and launch",
      description: "Domain, payments, shipping, and the checks before a store goes live.",
    },
    {
      title: "Theme customization",
      description: "Branding, layout changes, custom sections, and mobile layouts using Liquid and the theme editor.",
    },
    {
      title: "Products and catalog",
      description: "Product uploads, variants, collections, inventory, and listings written with search in mind.",
    },
    {
      title: "Pages and content",
      description: "Landing, about, collection, and policy pages that match the store's branding.",
    },
    {
      title: "Store speed",
      description: "Image compression, removing unused apps, and fixing slow or awkward pages.",
    },
    {
      title: "Ongoing support",
      description: "Regular updates, seasonal changes, promotions, and client communication.",
    },
  ],
  toolkit: {
    Platform: ["Shopify Admin", "Shopify CLI", "Theme Editor"],
    "Theme dev": ["Liquid", "HTML", "CSS", "JavaScript"],
    "Store ops": ["Product management", "Collections", "Inventory"],
    Integrations: ["Payment gateways", "Shipping apps", "Marketing apps"],
    Design: ["Figma", "Canva"],
  },
  highlights: [
    {
      name: "Full store builds",
      description:
        "Built stores from scratch for clients: theme choice, branding, product setup, and launch configuration.",
    },
    {
      name: "Theme overhauls",
      description:
        "Reworked existing stores with custom sections, clearer navigation, and better mobile layouts.",
    },
    {
      name: "Catalog and page management",
      description:
        "Managed large product catalogs and built the collection and landing pages around them.",
    },
    {
      name: "Speed work",
      description:
        "Cut store load times by compressing images, auditing installed apps, and cleaning up theme code.",
    },
  ],
  contactMessage:
    "If you need a Shopify store built, a theme reworked, or someone to keep a store up to date, email me.",
};
