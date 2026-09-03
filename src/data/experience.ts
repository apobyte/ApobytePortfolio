export type Experience = {
  period: string;
  title: string;
  company: string;
  summary: string;
};

export const experience: Experience[] = [
  {
    period: "2023 — Present",
    title: "Senior Frontend Developer",
    company: "CMIC",
    summary:
      "Leading interface architecture for product dashboards, design systems, and performance-critical web apps.",
  },
  {
    period: "2021 — 2023",
    title: "Full Stack Engineer",
    company: "Nightshade Labs",
    summary:
      "Shipped end-to-end features across React, Node, and Postgres — from APIs to polished production UI.",
  },
  {
    period: "2019 — 2021",
    title: "Frontend Developer",
    company: "Studio Sakura",
    summary:
      "Crafted animation-rich marketing sites and component libraries with a focus on motion and accessibility.",
  },
];
