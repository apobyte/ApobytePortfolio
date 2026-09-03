export type Skill = {
  name: string;
  level: number;
  icon: string;
  color: string;
  invertOnDark?: boolean;
};

export const skills: Skill[] = [
  {
    name: "JavaScript / TypeScript",
    level: 90,
    icon: "https://cdn.simpleicons.org/typescript/3178C6",
    color: "#3178C6",
  },
  {
    name: "React",
    level: 85,
    icon: "https://cdn.simpleicons.org/react/61DAFB",
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    level: 80,
    icon: "https://cdn.simpleicons.org/nextdotjs/000000",
    color: "#ffffff",
    invertOnDark: true,
  },
  {
    name: "Node.js",
    level: 78,
    icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
    color: "#5FA04E",
  },
  {
    name: "Astro",
    level: 82,
    icon: "https://cdn.simpleicons.org/astro/FF5D01",
    color: "#FF5D01",
  },
  {
    name: "CSS / Tailwind",
    level: 88,
    icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    color: "#06B6D4",
  },
  {
    name: "PostgreSQL",
    level: 72,
    icon: "https://cdn.simpleicons.org/postgresql/4169E1",
    color: "#4169E1",
  },
  {
    name: "Git / GitHub",
    level: 86,
    icon: "https://cdn.simpleicons.org/github/181717",
    color: "#ffffff",
    invertOnDark: true,
  },
];
