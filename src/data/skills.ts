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
] as const;

export type SkillSchoolId = (typeof skillSchools)[number]["id"];

export type Skill = {
  name: string;
  level: number;
  icon: string;
  color: string;
  category: SkillSchoolId;
  group: string;
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
  group: string;
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
    group: init.group,
    featured: init.featured,
    invertOnDark: init.invertOnDark,
    plate: init.plate,
    note: init.note,
    short: init.short,
  };
}

const catalog: SkillInit[] = [
  // Frontend — Core
  { name: "HTML5", level: 92, slug: "html5", color: "#E34F26", category: "frontend", group: "Core" },
  { name: "CSS3", level: 90, slug: "css", color: "#663399", category: "frontend", group: "Core" },
  {
    name: "JavaScript",
    level: 90,
    slug: "javascript",
    color: "#F7DF1E",
    category: "frontend",
    group: "Core",
    short: "JS",
  },
  {
    name: "TypeScript",
    level: 90,
    slug: "typescript",
    color: "#3178C6",
    category: "frontend",
    group: "Core",
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
    group: "Frameworks",
    featured: true,
    note: "Interfaces that stay alive.",
  },
  { name: "Vue.js", level: 76, slug: "vuedotjs", color: "#4FC08D", category: "frontend", group: "Frameworks", short: "Vue" },
  { name: "Angular", level: 70, slug: "angular", color: "#DD0031", category: "frontend", group: "Frameworks" },
  { name: "Svelte", level: 72, slug: "svelte", color: "#FF3E00", category: "frontend", group: "Frameworks" },
  { name: "SvelteKit", level: 70, slug: "svelte", color: "#FF3E00", category: "frontend", group: "Frameworks" },
  {
    name: "Next.js",
    level: 80,
    slug: "nextdotjs",
    color: "#a1a1aa",
    iconColor: "#ffffff",
    plate: "dark",
    category: "frontend",
    group: "Frameworks",
    featured: true,
    note: "Routes, render, and the edge.",
  },
  { name: "Nuxt.js", level: 68, slug: "nuxtdotjs", color: "#00DC82", icon: "/icons/nuxt.svg", category: "frontend", group: "Frameworks", short: "Nuxt" },
  { name: "Astro", level: 82, slug: "astro", color: "#FF5D01", category: "frontend", group: "Frameworks", note: "Islands, not oceans." },
  { name: "Gatsby", level: 70, slug: "gatsby", color: "#663399", category: "frontend", group: "Frameworks" },

  // Frontend — Styling
  {
    name: "Tailwind CSS",
    level: 88,
    slug: "tailwindcss",
    color: "#06B6D4",
    category: "frontend",
    group: "Styling",
    featured: true,
    short: "Tailwind",
    note: "Atmosphere, on purpose.",
  },
  { name: "Bootstrap", level: 78, slug: "bootstrap", color: "#7952B3", category: "frontend", group: "Styling" },
  { name: "Sass / SCSS", level: 82, slug: "sass", color: "#CC6699", category: "frontend", group: "Styling", short: "Sass" },
  { name: "Styled-components", level: 74, slug: "styledcomponents", color: "#DB7093", category: "frontend", group: "Styling" },
  { name: "CSS Modules", level: 80, slug: "cssmodules", color: "#000000", iconColor: "#000000", invertOnDark: true, category: "frontend", group: "Styling" },
  { name: "Material UI", level: 76, slug: "mui", color: "#007FFF", category: "frontend", group: "Styling", short: "MUI" },
  { name: "Chakra UI", level: 72, slug: "chakraui", color: "#319795", category: "frontend", group: "Styling" },
  { name: "Ant Design", level: 70, slug: "antdesign", color: "#0170FE", category: "frontend", group: "Styling" },
  {
    name: "shadcn/ui",
    level: 78,
    slug: "shadcnui",
    color: "#ffffff",
    iconColor: "#000000",
    invertOnDark: true,
    category: "frontend",
    group: "Styling",
  },

  // Frontend — State
  { name: "Redux", level: 76, slug: "redux", color: "#764ABC", category: "frontend", group: "State" },
  { name: "Zustand", level: 80, slug: "zustand", color: "#443E38", icon: "/icons/zustand.svg", category: "frontend", group: "State" },
  { name: "Recoil", level: 66, slug: "recoil", color: "#3578E5", category: "frontend", group: "State" },
  { name: "Jotai", level: 68, slug: "jotai", color: "#000000", icon: "/icons/jotai.svg", invertOnDark: true, category: "frontend", group: "State" },
  { name: "Pinia", level: 70, slug: "pinia", color: "#FFD859", category: "frontend", group: "State" },
  { name: "NgRx", level: 64, slug: "ngrx", color: "#BA2BD2", category: "frontend", group: "State" },

  // Frontend — Build
  { name: "Vite", level: 84, slug: "vite", color: "#646CFF", category: "frontend", group: "Build Tools" },
  { name: "Webpack", level: 74, slug: "webpack", color: "#8DD6F9", category: "frontend", group: "Build Tools" },
  { name: "esbuild", level: 72, slug: "esbuild", color: "#FFCF00", category: "frontend", group: "Build Tools" },
  { name: "Turbopack", level: 70, slug: "turbopack", color: "#ffffff", icon: "/icons/turbopack.svg", plate: "dark", category: "frontend", group: "Build Tools" },

  // Backend — Languages
  {
    name: "Node.js",
    level: 78,
    slug: "nodedotjs",
    color: "#5FA04E",
    category: "backend",
    group: "Languages",
    featured: true,
    short: "Node.js",
    note: "The quiet machinery.",
  },
  { name: "Python", level: 74, slug: "python", color: "#3776AB", category: "backend", group: "Languages" },
  { name: "Java", level: 68, slug: "openjdk", color: "#437291", category: "backend", group: "Languages" },
  { name: "Go", level: 66, slug: "go", color: "#00ADD8", category: "backend", group: "Languages" },
  { name: "PHP", level: 70, slug: "php", color: "#777BB4", category: "backend", group: "Languages" },
  { name: "Ruby", level: 64, slug: "ruby", color: "#CC342D", category: "backend", group: "Languages" },
  { name: "C#", level: 66, slug: "csharp", color: "#512BD4", icon: "/icons/csharp.svg", category: "backend", group: "Languages" },
  { name: "Rust", level: 62, slug: "rust", color: "#ffffff", iconColor: "#000000", invertOnDark: true, category: "backend", group: "Languages" },

  // Backend — Frameworks
  { name: "Express", level: 80, slug: "express", color: "#ffffff", iconColor: "#000000", invertOnDark: true, category: "backend", group: "Frameworks" },
  { name: "NestJS", level: 74, slug: "nestjs", color: "#E0234E", category: "backend", group: "Frameworks" },
  { name: "Fastify", level: 70, slug: "fastify", color: "#ffffff", iconColor: "#000000", invertOnDark: true, category: "backend", group: "Frameworks" },
  { name: "Koa", level: 66, slug: "koa", color: "#33333D", invertOnDark: true, category: "backend", group: "Frameworks" },
  { name: "Django", level: 72, slug: "django", color: "#092E20", invertOnDark: true, category: "backend", group: "Frameworks" },
  { name: "Flask", level: 70, slug: "flask", color: "#ffffff", iconColor: "#000000", invertOnDark: true, category: "backend", group: "Frameworks" },
  { name: "FastAPI", level: 74, slug: "fastapi", color: "#009688", category: "backend", group: "Frameworks" },
  { name: "Spring Boot", level: 68, slug: "springboot", color: "#6DB33F", category: "backend", group: "Frameworks" },
  { name: "Laravel", level: 72, slug: "laravel", color: "#FF2D20", category: "backend", group: "Frameworks" },
  { name: "Symfony", level: 64, slug: "symfony", color: "#ffffff", iconColor: "#000000", invertOnDark: true, category: "backend", group: "Frameworks" },
  { name: "Ruby on Rails", level: 66, slug: "rubyonrails", color: "#D30001", category: "backend", group: "Frameworks", short: "Rails" },
  { name: "ASP.NET Core", level: 66, slug: "dotnet", color: "#512BD4", category: "backend", group: "Frameworks", short: "ASP.NET" },

  // Backend — API
  { name: "REST", level: 88, slug: "openapiinitiative", color: "#6BA539", category: "backend", group: "API Styles" },
  { name: "GraphQL", level: 76, slug: "graphql", color: "#E10098", category: "backend", group: "API Styles" },
  { name: "tRPC", level: 74, slug: "trpc", color: "#2596BE", category: "backend", group: "API Styles" },
  { name: "Apollo", level: 72, slug: "apollographql", color: "#311C87", invertOnDark: true, category: "backend", group: "API Styles" },
  { name: "Hasura", level: 66, slug: "hasura", color: "#1EB4D4", category: "backend", group: "API Styles" },
  { name: "gRPC", level: 64, slug: "grpc", color: "#244c5a", icon: "/icons/grpc.svg", category: "backend", group: "API Styles" },
  { name: "WebSockets", level: 78, slug: "socketdotio", color: "#ffffff", iconColor: "#010101", invertOnDark: true, category: "backend", group: "API Styles" },

  // Database — SQL
  { name: "PostgreSQL", level: 72, slug: "postgresql", color: "#4169E1", category: "data", group: "Relational", note: "Structure that lasts." },
  { name: "MySQL", level: 76, slug: "mysql", color: "#4479A1", category: "data", group: "Relational" },
  { name: "MariaDB", level: 70, slug: "mariadb", color: "#003545", invertOnDark: true, category: "data", group: "Relational" },
  { name: "SQLite", level: 80, slug: "sqlite", color: "#003B57", invertOnDark: true, category: "data", group: "Relational" },
  { name: "SQL Server", level: 64, slug: "microsoftsqlserver", color: "#CC2927", icon: "/icons/microsoftsqlserver.svg", category: "data", group: "Relational" },

  // Database — NoSQL
  { name: "MongoDB", level: 76, slug: "mongodb", color: "#47A248", category: "data", group: "NoSQL" },
  { name: "Redis", level: 78, slug: "redis", color: "#FF4438", category: "data", group: "NoSQL" },
  { name: "Cassandra", level: 60, slug: "apachecassandra", color: "#1287B1", category: "data", group: "NoSQL" },
  { name: "DynamoDB", level: 64, slug: "amazondynamodb", color: "#4053D6", icon: "/icons/amazondynamodb.svg", category: "data", group: "NoSQL" },
  { name: "Firestore", level: 70, slug: "firebase", color: "#DD2C00", category: "data", group: "NoSQL" },

  // Database — ORM
  { name: "Prisma", level: 80, slug: "prisma", color: "#2D3748", invertOnDark: true, category: "data", group: "ORMs" },
  { name: "TypeORM", level: 72, slug: "typeorm", color: "#FE0803", category: "data", group: "ORMs" },
  { name: "Sequelize", level: 70, slug: "sequelize", color: "#52B0E7", category: "data", group: "ORMs" },
  { name: "SQLAlchemy", level: 68, slug: "sqlalchemy", color: "#D71F00", category: "data", group: "ORMs" },
  { name: "Hibernate", level: 64, slug: "hibernate", color: "#59666C", invertOnDark: true, category: "data", group: "ORMs" },
  { name: "Knex.js", level: 66, slug: "knexdotjs", color: "#D26B38", category: "data", group: "ORMs" },

  // Database — Search
  { name: "Elasticsearch", level: 66, slug: "elasticsearch", color: "#005571", invertOnDark: true, category: "data", group: "Search" },
  { name: "Algolia", level: 68, slug: "algolia", color: "#003DFF", category: "data", group: "Search" },

  // CMS
  { name: "Strapi", level: 70, slug: "strapi", color: "#4945FF", category: "cms", group: "Headless" },
  { name: "Sanity", level: 68, slug: "sanity", color: "#F03E2F", category: "cms", group: "Headless" },
  { name: "Contentful", level: 66, slug: "contentful", color: "#2478CC", category: "cms", group: "Headless" },
  { name: "Payload CMS", level: 64, slug: "payloadcms", color: "#ffffff", iconColor: "#000000", invertOnDark: true, category: "cms", group: "Headless", short: "Payload" },
  { name: "Directus", level: 66, slug: "directus", color: "#6644FF", category: "cms", group: "Headless" },
  { name: "WordPress", level: 74, slug: "wordpress", color: "#21759B", category: "cms", group: "Traditional" },
  { name: "Drupal", level: 60, slug: "drupal", color: "#0678BE", category: "cms", group: "Traditional" },
  { name: "Joomla", level: 58, slug: "joomla", color: "#5091CD", category: "cms", group: "Traditional" },
  { name: "Webflow", level: 64, slug: "webflow", color: "#146EF5", category: "cms", group: "Builders" },
  { name: "Shopify", level: 68, slug: "shopify", color: "#7AB55C", category: "cms", group: "Builders" },

  // DevOps
  {
    name: "Git",
    level: 86,
    slug: "git",
    color: "#F05032",
    category: "ops",
    group: "Version Control",
    featured: true,
    note: "Memory, with a trail.",
  },
  { name: "GitHub", level: 84, slug: "github", color: "#ffffff", iconColor: "#181717", invertOnDark: true, category: "ops", group: "Version Control" },
  { name: "GitLab", level: 72, slug: "gitlab", color: "#FC6D26", category: "ops", group: "Version Control" },
  { name: "Bitbucket", level: 66, slug: "bitbucket", color: "#0052CC", category: "ops", group: "Version Control" },
  { name: "Docker", level: 78, slug: "docker", color: "#2496ED", category: "ops", group: "Containers" },
  { name: "Kubernetes", level: 64, slug: "kubernetes", color: "#326CE5", category: "ops", group: "Containers" },
  { name: "GitHub Actions", level: 76, slug: "githubactions", color: "#2088FF", category: "ops", group: "CI/CD" },
  { name: "Jenkins", level: 66, slug: "jenkins", color: "#D24939", category: "ops", group: "CI/CD" },
  { name: "GitLab CI", level: 68, slug: "gitlab", color: "#FC6D26", category: "ops", group: "CI/CD" },
  { name: "CircleCI", level: 64, slug: "circleci", color: "#343434", invertOnDark: true, category: "ops", group: "CI/CD" },
  { name: "AWS", level: 70, slug: "amazonwebservices", color: "#232F3E", icon: "/icons/aws.svg", invertOnDark: true, category: "ops", group: "Cloud" },
  { name: "Google Cloud", level: 66, slug: "googlecloud", color: "#4285F4", category: "ops", group: "Cloud", short: "GCP" },
  { name: "Azure", level: 64, slug: "microsoftazure", color: "#0078D4", icon: "/icons/azure.svg", category: "ops", group: "Cloud" },
  { name: "Vercel", level: 82, slug: "vercel", color: "#ffffff", iconColor: "#000000", invertOnDark: true, category: "ops", group: "Cloud" },
  { name: "Netlify", level: 78, slug: "netlify", color: "#00C7B7", category: "ops", group: "Cloud" },
  { name: "Railway", level: 70, slug: "railway", color: "#ffffff", iconColor: "#0B0D0E", invertOnDark: true, category: "ops", group: "Cloud" },
  { name: "Render", level: 68, slug: "render", color: "#46E3B7", category: "ops", group: "Cloud" },
  { name: "Nginx", level: 74, slug: "nginx", color: "#009639", category: "ops", group: "Web Servers" },
  { name: "Apache", level: 70, slug: "apache", color: "#D22128", category: "ops", group: "Web Servers" },

  // Auth
  { name: "OAuth 2.0", level: 78, slug: "openid", color: "#F78C40", category: "auth", group: "Protocols" },
  { name: "JWT", level: 82, slug: "jsonwebtokens", color: "#ffffff", iconColor: "#000000", invertOnDark: true, category: "auth", group: "Protocols" },
  { name: "Auth0", level: 70, slug: "auth0", color: "#EB5424", category: "auth", group: "Providers" },
  { name: "Clerk", level: 68, slug: "clerk", color: "#6C47FF", category: "auth", group: "Providers" },
  { name: "Auth.js", level: 74, slug: "auth0", color: "#EB5424", category: "auth", group: "Providers" },
  { name: "Firebase Auth", level: 72, slug: "firebase", color: "#DD2C00", category: "auth", group: "Providers" },
  { name: "Supabase Auth", level: 70, slug: "supabase", color: "#3ECF8E", category: "auth", group: "Providers" },

  // Testing
  { name: "Jest", level: 80, slug: "jest", color: "#C21325", category: "test", group: "Unit" },
  { name: "Vitest", level: 78, slug: "vitest", color: "#6E9F18", category: "test", group: "Unit" },
  { name: "Mocha", level: 70, slug: "mocha", color: "#8D6748", category: "test", group: "Unit" },
  { name: "Cypress", level: 74, slug: "cypress", color: "#69D3A7", category: "test", group: "E2E" },
  { name: "Playwright", level: 76, slug: "playwright", color: "#2EAD33", icon: "/icons/playwright.svg", category: "test", group: "E2E" },
  { name: "Selenium", level: 66, slug: "selenium", color: "#43B02A", category: "test", group: "E2E" },
  { name: "Postman", level: 82, slug: "postman", color: "#FF6C37", category: "test", group: "API" },
  { name: "Insomnia", level: 74, slug: "insomnia", color: "#4000BF", category: "test", group: "API" },

  // Game Dev — Web 3D
  {
    name: "Three.js",
    level: 78,
    slug: "threedotjs",
    color: "#ffffff",
    iconColor: "#ffffff",
    plate: "dark",
    category: "game",
    group: "Web 3D",
    short: "Three.js",
    note: "Worlds in the browser.",
  },
  { name: "Babylon.js", level: 68, slug: "babylondotjs", color: "#BB464B", category: "game", group: "Web 3D" },
  { name: "PlayCanvas", level: 64, slug: "playcanvas", color: "#E05A00", category: "game", group: "Web 3D" },
  { name: "WebGL", level: 72, slug: "webgl", color: "#990000", category: "game", group: "Web 3D" },
  { name: "WebGPU", level: 62, slug: "webgpu", color: "#005A9C", category: "game", group: "Web 3D" },

  // Game Dev — React
  { name: "React Three Fiber", level: 74, slug: "react", color: "#61DAFB", category: "game", group: "React Integration", short: "R3F" },
  { name: "Drei", level: 72, slug: "threedotjs", color: "#ffffff", iconColor: "#ffffff", plate: "dark", category: "game", group: "React Integration" },
  { name: "React Three Rapier", level: 66, slug: "react", color: "#61DAFB", category: "game", group: "React Integration", short: "R3 Rapier" },

  // Game Dev — 2D
  { name: "Phaser", level: 70, slug: "phaser", color: "#C02026", icon: "/icons/phaser.svg", category: "game", group: "2D Engines" },
  { name: "PixiJS", level: 72, slug: "pixijs", color: "#E72264", icon: "/icons/pixijs.svg", category: "game", group: "2D Engines" },
  { name: "Kaboom.js", level: 64, slug: "kaboomjs", color: "#FFCD19", icon: "/icons/kaboom.svg", category: "game", group: "2D Engines", short: "Kaboom" },

  // Game Dev — Physics
  { name: "Cannon.js", level: 66, slug: "cannon", color: "#D65A31", icon: "/icons/cannon.svg", category: "game", group: "Physics" },
  { name: "Rapier", level: 68, slug: "rust", color: "#ffffff", iconColor: "#000000", invertOnDark: true, category: "game", group: "Physics" },
  { name: "Matter.js", level: 66, slug: "matterdotjs", color: "#4B6587", category: "game", group: "Physics" },
  { name: "Ammo.js", level: 60, slug: "bulletphysics", color: "#4A90D9", category: "game", group: "Physics" },

  // Game Dev — Engines
  { name: "Unity", level: 70, slug: "unity", color: "#ffffff", iconColor: "#ffffff", plate: "dark", category: "game", group: "Game Engines" },
  { name: "Unreal Engine", level: 62, slug: "unrealengine", color: "#0E1128", invertOnDark: true, category: "game", group: "Game Engines", short: "Unreal" },
  { name: "Godot", level: 68, slug: "godotengine", color: "#478CBF", category: "game", group: "Game Engines" },

  // Game Dev — Multiplayer
  { name: "Socket.io", level: 76, slug: "socketdotio", color: "#ffffff", iconColor: "#010101", invertOnDark: true, category: "game", group: "Multiplayer" },
  { name: "WebRTC", level: 70, slug: "webrtc", color: "#333333", invertOnDark: true, category: "game", group: "Multiplayer" },
  { name: "Colyseus", level: 64, slug: "colyseus", color: "#FCD43A", icon: "/icons/colyseus.svg", category: "game", group: "Multiplayer" },
  { name: "PeerJS", level: 62, slug: "peerjs", color: "#F97316", icon: "/icons/peerjs.svg", invertOnDark: true, category: "game", group: "Multiplayer" },

  // Game Dev — Assets
  { name: "Blender", level: 72, slug: "blender", color: "#E87D0D", category: "game", group: "Assets" },
  { name: "glTF / GLB", level: 74, slug: "gltf", color: "#87C540", category: "game", group: "Assets", short: "glTF" },
  { name: "Draco", level: 62, slug: "google", color: "#4285F4", category: "game", group: "Assets" },

  // Game Dev — Audio
  { name: "Howler.js", level: 70, slug: "howler", color: "#33AAFF", icon: "/icons/howler.svg", category: "game", group: "Audio" },
  { name: "Tone.js", level: 66, slug: "tonejs", color: "#22C55E", icon: "/icons/tonejs.svg", category: "game", group: "Audio" },
];

export const skills: Skill[] = catalog.map(skill);

export const featuredSkills = skills.filter((entry) => entry.featured);

export function skillsInSchool(id: SkillSchoolId) {
  return skills.filter((entry) => entry.category === id);
}

export function groupedSkills(entries: Skill[]) {
  const lanes: { name: string; entries: Skill[] }[] = [];
  const index = new Map<string, Skill[]>();

  for (const entry of entries) {
    let lane = index.get(entry.group);
    if (!lane) {
      lane = [];
      index.set(entry.group, lane);
      lanes.push({ name: entry.group, entries: lane });
    }
    lane.push(entry);
  }

  return lanes;
}
