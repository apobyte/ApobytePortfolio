export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "neon-interfaces",
    title: "Designing neon interfaces that still feel usable",
    date: "2026-08-18",
    excerpt:
      "Glow is decoration, not the product. How to keep cyberpunk UI readable, fast, and kind to the eyes.",
    body: [
      "High-contrast neon looks striking in a mock, then falls apart the moment body copy, forms, and motion enter the picture. The glow has to support hierarchy, not compete with it.",
      "I treat accent color like a spotlight: one active state, one primary action, and quiet chrome everywhere else. Borders stay thin. Shadows stay colored, never muddy.",
      "If the interface still works in grayscale, the neon is doing its job.",
    ],
  },
  {
    slug: "astro-islands",
    title: "Why Astro islands still win for portfolios",
    date: "2026-06-02",
    excerpt:
      "Static pages, tiny React islands, and a loading screen that actually earns the wait.",
    body: [
      "A portfolio should feel authored, not bootstrapped. Astro lets the page ship as HTML while React handles the few things that need a browser: theme, forms, motion gates.",
      "That split keeps first paint sharp. Visitors get the atmosphere immediately; interactivity arrives only where it is invited.",
    ],
  },
  {
    slug: "creative-constraints",
    title: "Creative constraints beat a blank canvas",
    date: "2026-03-21",
    excerpt:
      "A three-column frame, two accent colors, and Japanese subtitles — and suddenly the site has a voice.",
    body: [
      "Unlimited choice is how personal sites become generic. Pick a grid, a palette, and a rule you will not break, then invent inside it.",
      "This site only gets magenta, purple, and night. Everything else has to earn its way in.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
