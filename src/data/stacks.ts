import { skills, skillSlug, type Skill } from "./skills";

export type SkillPact = {
  id: string;
  name: string;
  mark: string;
  jp: string;
  kicker: string;
  summary: string;
  pieces: string[];
  accent: string;
};

export const skillPacts: SkillPact[] = [
  {
    id: "mern",
    name: "MERN",
    mark: "MERN",
    jp: "メルン",
    kicker: "Full stack",
    summary: "MongoDB, Express, React, and Node.js — one language through every layer.",
    pieces: ["MongoDB", "Express", "React", "Node.js"],
    accent: "#47A248",
  },
  {
    id: "pern",
    name: "PERN",
    mark: "PERN",
    jp: "パーン",
    kicker: "Full stack",
    summary: "PostgreSQL, Express, React, and Node.js — relational data with a React face.",
    pieces: ["PostgreSQL", "Express", "React", "Node.js"],
    accent: "#4169E1",
  },
  {
    id: "jamstack",
    name: "JAMstack",
    mark: "JAM",
    jp: "ジャム",
    kicker: "Markup + APIs",
    summary: "JavaScript, APIs, and markup — Next.js or Astro over a headless CMS.",
    pieces: ["JavaScript", "Next.js", "Astro", "Strapi"],
    accent: "#FF5D01",
  },
  {
    id: "t3",
    name: "T3 Stack",
    mark: "T3",
    jp: "ティースリー",
    kicker: "Type-safe",
    summary: "Next.js, TypeScript, tRPC, Tailwind, and Prisma — end-to-end types.",
    pieces: ["Next.js", "TypeScript", "tRPC", "Tailwind CSS", "Prisma"],
    accent: "#3178C6",
  },
  {
    id: "web3d",
    name: "Web 3D Stack",
    mark: "3D",
    jp: "立体",
    kicker: "Game / 3D",
    summary: "Three.js, React Three Fiber, Rapier, and Next.js — 3D play in the browser.",
    pieces: ["Three.js", "React Three Fiber", "Rapier", "Next.js"],
    accent: "#61DAFB",
  },
  {
    id: "web2d",
    name: "Web 2D Stack",
    mark: "2D",
    jp: "平面",
    kicker: "Game / 2D",
    summary: "Phaser, TypeScript, and Vite — fast 2D worlds with a modern toolchain.",
    pieces: ["Phaser", "TypeScript", "Vite"],
    accent: "#C02026",
  },
  {
    id: "native",
    name: "Full Native",
    mark: "FN",
    jp: "本流",
    kicker: "Engine + API",
    summary: "Unity for the client, Node.js and Socket.io for multiplayer state.",
    pieces: ["Unity", "Node.js", "Socket.io"],
    accent: "#5FA04E",
  },
];

export type PactBead = {
  name: string;
  skill?: Skill;
  href?: string;
};

export type BoundPact = SkillPact & {
  beads: PactBead[];
  level: number;
};

export function bindPact(pact: SkillPact): BoundPact {
  const beads = pact.pieces.map((name) => {
    const skill = skills.find((entry) => entry.name === name);
    return {
      name,
      skill,
      href: skill ? `#skill-${skillSlug(skill.name)}` : undefined,
    };
  });

  const ranked = beads.filter((bead) => bead.skill);
  const level = ranked.length
    ? Math.round(ranked.reduce((sum, bead) => sum + (bead.skill?.level ?? 0), 0) / ranked.length)
    : 0;

  return { ...pact, beads, level };
}

export const boundPacts = skillPacts.map(bindPact);
