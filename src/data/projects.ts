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
    title: "Project One",
    summary: "A short description of a product, tool, or experiment you shipped.",
    tags: ["Astro", "React"],
    href: "#",
    year: "2026",
  },
  {
    slug: "project-two",
    title: "Project Two",
    summary: "Replace this with a real case study, screenshot, and outcome.",
    tags: ["TypeScript", "UI"],
    href: "#",
    year: "2025",
  },
  {
    slug: "project-three",
    title: "Project Three",
    summary: "Keep cards short. Link out to a live demo or a write-up.",
    tags: ["Design", "Frontend"],
    href: "#",
    year: "2025",
  },
];
