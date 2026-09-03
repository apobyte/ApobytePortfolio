export type ProjectStackItem = {
  label: string;
  icon: string;
};

export type ProjectFeature = {
  title: string;
  description: string;
  icon: "doc" | "layers" | "bolt";
};

export type ProjectKind = "web" | "cms" | "dashboards" | "tools";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: string;
  kind: ProjectKind;
  tags: string[];
  stack: ProjectStackItem[];
  features: ProjectFeature[];
  images: string[];
  href?: string;
  repo?: string;
  year: string;
};

export const projectFilters = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Apps" },
  { id: "cms", label: "CMS" },
  { id: "dashboards", label: "Dashboards" },
  { id: "tools", label: "Tools" },
] as const;

export type ProjectFilterId = (typeof projectFilters)[number]["id"];

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Lumen Board",
    summary:
      "A realtime operations dashboard with neon density, keyboard-first navigation, and sub-100ms filter updates.",
    description:
      "Lumen Board is a realtime ops surface built for dense signal without visual noise. Operators filter fleets, incidents, and SLAs from the keyboard while live streams stay under 100ms.",
    category: "Dashboard · Realtime Ops",
    kind: "dashboards",
    tags: ["Astro", "React", "TypeScript"],
    stack: [
      { label: "Astro", icon: "https://cdn.simpleicons.org/astro/FF5D01" },
      { label: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { label: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    ],
    features: [
      {
        title: "Keyboard-first Navigation",
        description: "Filter fleets and incidents without leaving the keys.",
        icon: "bolt",
      },
      {
        title: "Sub-100ms Filters",
        description: "Live streams stay snappy under dense operational load.",
        icon: "layers",
      },
      {
        title: "Neon Signal Hierarchy",
        description: "Critical states stay readable at a glance.",
        icon: "doc",
      },
    ],
    images: [
      "/images/projects-hero.jpg",
      "/images/projects-hero.jpg",
      "/images/projects-hero.jpg",
      "/images/projects-hero.jpg",
    ],
    href: "https://example.com",
    repo: "https://github.com",
    year: "2026",
  },
  {
    slug: "project-two",
    title: "Night Market",
    summary:
      "Headless storefront with cinematic product pages, edge caching, and a checkout that feels like a game UI.",
    description:
      "Night Market is a headless commerce experiment: cinematic product pages, edge-cached catalog reads, and a checkout flow that borrows game-UI clarity.",
    category: "Commerce · Headless Store",
    kind: "web",
    tags: ["Next.js", "Stripe", "UI"],
    stack: [
      { label: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/EDEDED" },
      { label: "Stripe", icon: "https://cdn.simpleicons.org/stripe/635BFF" },
      { label: "UI", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
    ],
    features: [
      {
        title: "Cinematic Product Pages",
        description: "Storefront storytelling without template fatigue.",
        icon: "doc",
      },
      {
        title: "Edge-cached Catalog",
        description: "Fast reads at the edge for browse and search.",
        icon: "layers",
      },
      {
        title: "Game-like Checkout",
        description: "Clear steps, strong hierarchy, fewer drop-offs.",
        icon: "bolt",
      },
    ],
    images: [
      "/images/projects-hero.jpg",
      "/images/projects-hero.jpg",
      "/images/projects-hero.jpg",
      "/images/projects-hero.jpg",
    ],
    href: "https://example.com",
    repo: "https://github.com",
    year: "2025",
  },
  {
    slug: "project-three",
    title: "Torii CMS",
    summary:
      "A tiny content system for portfolios and journals — markdown in, glowing pages out.",
    description:
      "Torii CMS keeps content authoring small: markdown in, glowing pages out. It targets portfolios and journals that need structure without a heavy CMS — schemas stay light, publishing stays local-first, and the front end stays fully owned.",
    category: "CMS · Content Authoring",
    kind: "cms",
    tags: ["Design", "Frontend", "Astro"],
    stack: [
      { label: "Design", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
      { label: "Frontend", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { label: "Astro", icon: "https://cdn.simpleicons.org/astro/FF5D01" },
    ],
    features: [
      {
        title: "Lightweight Content Authoring",
        description: "Markdown-first writing without CMS bloat.",
        icon: "doc",
      },
      {
        title: "Schema-driven Structure",
        description: "Light schemas keep journals and portfolios tidy.",
        icon: "layers",
      },
      {
        title: "Local-first Publishing",
        description: "Own the front end — publish from your machine.",
        icon: "bolt",
      },
    ],
    images: [
      "/images/projects-hero.jpg",
      "/images/projects-hero.jpg",
      "/images/projects-hero.jpg",
      "/images/projects-hero.jpg",
    ],
    href: "https://example.com",
    repo: "https://github.com",
    year: "2025",
  },
];
