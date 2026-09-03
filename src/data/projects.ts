export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  href: string;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Lumen Board",
    summary:
      "A realtime operations dashboard with neon density, keyboard-first navigation, and sub-100ms filter updates.",
    tags: ["Astro", "React", "TypeScript"],
    href: "#",
    year: "2026",
  },
  {
    slug: "project-two",
    title: "Night Market",
    summary:
      "Headless storefront with cinematic product pages, edge caching, and a checkout that feels like a game UI.",
    tags: ["Next.js", "Stripe", "UI"],
    href: "#",
    year: "2025",
  },
  {
    slug: "project-three",
    title: "Torii CMS",
    summary:
      "A tiny content system for portfolios and journals — markdown in, glowing pages out.",
    tags: ["Design", "Frontend", "Astro"],
    href: "#",
    year: "2025",
  },
];
