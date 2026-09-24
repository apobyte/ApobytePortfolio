export const skillSchools = [
  {
    id: "frontend",
    label: "Invocation",
    kicker: "Frontend",
    jp: "表層",
    blurb: "Interfaces, motion, and the first impression.",
  },
  {
    id: "game",
    label: "Stage",
    kicker: "Game Dev",
    jp: "遊戯",
    blurb: "Worlds in the browser — 3D, physics, engines, and play.",
  },
  {
    id: "backend",
    label: "Arcanum",
    kicker: "Backend",
    jp: "深層",
    blurb: "Languages, frameworks, and the ways they speak.",
  },
  {
    id: "data",
    label: "Archive",
    kicker: "Database",
    jp: "記録",
    blurb: "Memory, query, and the shape of stored truth.",
  },
  {
    id: "cms",
    label: "Canon",
    kicker: "CMS",
    jp: "典籍",
    blurb: "Content systems — headless, classic, and built-in.",
  },
  {
    id: "ops",
    label: "Relics",
    kicker: "DevOps",
    jp: "工芸",
    blurb: "Versioning, containers, clouds, and the path to ship.",
  },
  {
    id: "auth",
    label: "Wards",
    kicker: "Auth",
    jp: "護印",
    blurb: "Identity, tokens, and the gates between worlds.",
  },
  {
    id: "test",
    label: "Assay",
    kicker: "Testing",
    jp: "試煉",
    blurb: "Proof, coverage, and the courage to break it first.",
  },
  {
    id: "platforms",
    label: "Concord",
    kicker: "Platforms",
    jp: "連携",
    blurb: "AI, SAP, and Zoho — the systems the work plugs into.",
  },
] as const;

export type SkillSchoolId = (typeof skillSchools)[number]["id"];

export type Skill = {
  name: string;
  level: number;
  icon: string;
  color: string;
  category: SkillSchoolId;
  featured?: boolean;
  invertOnDark?: boolean;
  plate?: "dark" | "light";
  note?: string;
  short?: string;
};

type SkillInit = {
  name: string;
  level: number;
  slug: string;
  color: string;
  category: SkillSchoolId;
  iconColor?: string;
  icon?: string;
  featured?: boolean;
  invertOnDark?: boolean;
  plate?: "dark" | "light";
  note?: string;
  short?: string;
};

export const skillTiers = {
  master: { label: "Master", jp: "極" },
  adept: { label: "Adept", jp: "達" },
  practiced: { label: "Practiced", jp: "練" },
  initiate: { label: "Initiate", jp: "始" },
} as const;

export type SkillTier = keyof typeof skillTiers;

export function skillTier(level: number): SkillTier {
  if (level >= 90) return "master";
  if (level >= 80) return "adept";
  if (level >= 70) return "practiced";
  return "initiate";
}

export function skillSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function skill(init: SkillInit): Skill {
  const tint = (init.iconColor ?? init.color).replace("#", "");
  return {
    name: init.name,
    level: init.level,
    icon: init.icon ?? `https://cdn.simpleicons.org/${init.slug}/${tint}`,
    color: init.color,
    category: init.category,
    featured: init.featured,
    invertOnDark: init.invertOnDark,
    plate: init.plate,
    note: init.note,
    short: init.short,
  };
}

const catalog: SkillInit[] = [
  // Frontend — Core
  {
    name: "HTML5",
    level: 92,
    slug: "html5",
    color: "#E34F26",
    category: "frontend",
    featured: true,
    short: "HTML",
    note: "Structure first.",
  },
  {
    name: "CSS3",
    level: 90,
    slug: "css",
    color: "#663399",
    category: "frontend",
    featured: true,
    short: "CSS",
    note: "Atmosphere in layers.",
  },
  {
    name: "JavaScript",
    level: 90,
    slug: "javascript",
    color: "#F7DF1E",
    category: "frontend",
    featured: true,
    short: "JS",
    note: "The living script.",
  },
  {
    name: "TypeScript",
    level: 90,
    slug: "typescript",
    color: "#3178C6",
    category: "frontend",
    featured: true,
    short: "TypeScript",
    note: "Types as wards.",
  },

  // Frontend — Frameworks
  {
    name: "React",
    level: 85,
    slug: "react",
    color: "#61DAFB",
    category: "frontend",
    featured: true,
    note: "Interfaces that stay alive.",
  },
  { name: "Vue.js", level: 76, slug: "vuedotjs", color: "#4FC08D", category: "frontend", short: "Vue" },
  {
    name: "Next.js",
    level: 80,
    slug: "nextdotjs",
    color: "#a1a1aa",
    iconColor: "#ffffff",
    plate: "dark",
    category: "frontend",
    featured: true,
    note: "Routes, render, and the edge.",
  },
  {
    name: "Astro",
    level: 82,
    slug: "astro",
    color: "#FF5D01",
    category: "frontend",
    featured: true,
    note: "Islands, not oceans.",
  },

  // Frontend — Styling
  {
    name: "Tailwind CSS",
    level: 88,
    slug: "tailwindcss",
    color: "#06B6D4",
    category: "frontend",
    featured: true,
    short: "Tailwind",
    note: "Atmosphere, on purpose.",
  },
  { name: "Sass / SCSS", level: 82, slug: "sass", color: "#CC6699", category: "frontend", short: "Sass" },
  {
    name: "shadcn/ui",
    level: 78,
    slug: "shadcnui",
    color: "#ffffff",
    iconColor: "#000000",
    invertOnDark: true,
    category: "frontend",
  },

  // Frontend — State
  { name: "Redux", level: 76, slug: "redux", color: "#764ABC", category: "frontend" },
  { name: "Zustand", level: 80, slug: "zustand", color: "#443E38", icon: "/icons/zustand.svg", category: "frontend" },

  // Frontend — Build
  {
    name: "Vite",
    level: 84,
    slug: "vite",
    color: "#646CFF",
    category: "frontend",
    featured: true,
    note: "Instant spark.",
  },

  // Backend — Languages
  {
    name: "Node.js",
    level: 78,
    slug: "nodedotjs",
    color: "#5FA04E",
    category: "backend",
    featured: true,
    short: "Node.js",
    note: "The quiet machinery.",
  },
  { name: "Python", level: 74, slug: "python", color: "#3776AB", category: "backend" },

  // Backend — Frameworks
  {
    name: "Express",
    level: 80,
    slug: "express",
    color: "#ffffff",
    iconColor: "#000000",
    invertOnDark: true,
    category: "backend",
    featured: true,
    note: "Routes without ceremony.",
  },
  { name: "NestJS", level: 74, slug: "nestjs", color: "#E0234E", category: "backend" },
  { name: "FastAPI", level: 74, slug: "fastapi", color: "#009688", category: "backend" },

  // Backend — API
  {
    name: "REST",
    level: 88,
    slug: "openapiinitiative",
    color: "#6BA539",
    category: "backend",
    featured: true,
    note: "Clear contracts.",
  },
  { name: "GraphQL", level: 76, slug: "graphql", color: "#E10098", category: "backend" },
  { name: "tRPC", level: 74, slug: "trpc", color: "#2596BE", category: "backend" },
  { name: "WebSockets", level: 78, slug: "socketdotio", color: "#ffffff", iconColor: "#010101", invertOnDark: true, category: "backend" },

  // Database — SQL
  {
    name: "PostgreSQL",
    level: 72,
    slug: "postgresql",
    color: "#4169E1",
    category: "data",
    featured: true,
    short: "Postgres",
    note: "Structure that lasts.",
  },
  { name: "MySQL", level: 76, slug: "mysql", color: "#4479A1", category: "data" },
  { name: "SQLite", level: 80, slug: "sqlite", color: "#003B57", invertOnDark: true, category: "data" },

  // Database — NoSQL
  { name: "MongoDB", level: 76, slug: "mongodb", color: "#47A248", category: "data" },
  { name: "Redis", level: 78, slug: "redis", color: "#FF4438", category: "data" },

  // Database — ORM
  {
    name: "Prisma",
    level: 80,
    slug: "prisma",
    color: "#2D3748",
    invertOnDark: true,
    category: "data",
    featured: true,
    note: "Schema as spellbook.",
  },

  // CMS
  { name: "Strapi", level: 70, slug: "strapi", color: "#4945FF", category: "cms" },
  { name: "WordPress", level: 74, slug: "wordpress", color: "#21759B", category: "cms" },
  { name: "Shopify", level: 68, slug: "shopify", color: "#7AB55C", category: "cms" },

  // DevOps
  {
    name: "Git",
    level: 86,
    slug: "git",
    color: "#F05032",
    category: "ops",
    featured: true,
    note: "Memory, with a trail.",
  },
  { name: "GitHub", level: 84, slug: "github", color: "#ffffff", iconColor: "#181717", invertOnDark: true, category: "ops" },
  {
    name: "Docker",
    level: 78,
    slug: "docker",
    color: "#2496ED",
    category: "ops",
    featured: true,
    note: "Ships in boxes.",
  },
  { name: "GitHub Actions", level: 76, slug: "githubactions", color: "#2088FF", category: "ops" },
  { name: "AWS", level: 70, slug: "amazonwebservices", color: "#232F3E", icon: "/icons/aws.svg", invertOnDark: true, category: "ops" },
  { name: "Vercel", level: 82, slug: "vercel", color: "#ffffff", iconColor: "#000000", invertOnDark: true, category: "ops" },
  { name: "Nginx", level: 74, slug: "nginx", color: "#009639", category: "ops" },

  // Auth
  { name: "OAuth 2.0", level: 78, slug: "openid", color: "#F78C40", category: "auth" },
  { name: "JWT", level: 82, slug: "jsonwebtokens", color: "#ffffff", iconColor: "#000000", invertOnDark: true, category: "auth" },
  { name: "Auth.js", level: 74, slug: "auth0", color: "#EB5424", category: "auth" },

  // Testing
  { name: "Vitest", level: 78, slug: "vitest", color: "#6E9F18", category: "test" },
  { name: "Playwright", level: 76, slug: "playwright", color: "#2EAD33", icon: "/icons/playwright.svg", category: "test" },
  { name: "Postman", level: 82, slug: "postman", color: "#FF6C37", category: "test" },

  // Game Dev — Web 3D
  {
    name: "Three.js",
    level: 78,
    slug: "threedotjs",
    color: "#ffffff",
    iconColor: "#ffffff",
    plate: "dark",
    category: "game",
    featured: true,
    short: "Three.js",
    note: "Worlds in the browser.",
  },
  { name: "WebGL", level: 72, slug: "webgl", color: "#990000", category: "game" },

  // Game Dev — React
  { name: "React Three Fiber", level: 74, slug: "react", color: "#61DAFB", category: "game", short: "R3F" },

  // Game Dev — 2D
  { name: "Phaser", level: 70, slug: "phaser", color: "#C02026", icon: "/icons/phaser.svg", category: "game" },

  // Game Dev — Physics
  { name: "Rapier", level: 68, slug: "rust", color: "#ffffff", iconColor: "#000000", invertOnDark: true, category: "game" },

  // Game Dev — Engines
  { name: "Unity", level: 70, slug: "unity", color: "#ffffff", iconColor: "#ffffff", plate: "dark", category: "game" },

  // Game Dev — Multiplayer
  { name: "Socket.io", level: 76, slug: "socketdotio", color: "#ffffff", iconColor: "#010101", invertOnDark: true, category: "game" },
  { name: "WebRTC", level: 70, slug: "webrtc", color: "#333333", invertOnDark: true, category: "game" },

  // Game Dev — Assets
  { name: "Blender", level: 72, slug: "blender", color: "#E87D0D", category: "game" },
  { name: "glTF / GLB", level: 74, slug: "gltf", color: "#87C540", category: "game", short: "glTF" },

  // Game Dev — Audio
  { name: "Howler.js", level: 70, slug: "howler", color: "#33AAFF", icon: "/icons/howler.svg", category: "game" },

  // Platforms
  {
    name: "OpenAI",
    level: 76,
    slug: "openai",
    color: "#412991",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@15.15.0/icons/openai.svg",
    invertOnDark: true,
    category: "platforms",
    short: "AI",
    note: "Answers from the tools already in use.",
  },
  { name: "SAP", level: 74, slug: "sap", color: "#0FAAFF", category: "platforms", note: "Orders, review, and the decision trail." },
  { name: "Zoho", level: 74, slug: "zoho", color: "#C8202B", category: "platforms", note: "From a new order to a sent invoice." },
];

export const skills: Skill[] = catalog.map(skill);

export const featuredSkills = skills.filter((entry) => entry.featured);

export function skillsInSchool(id: SkillSchoolId) {
  return skills.filter((entry) => entry.category === id);
}
