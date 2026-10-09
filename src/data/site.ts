export const site = {
  name: "apobyte",
  role: "Full Stack Developer",
  greeting: "Hello, I'm",
  tagline:
    "I build modern, scalable and beautiful web experiences with clean code and creative solutions.",
  email: "apobyte@example.com",
  phone: "+1234567890",
  url: "https://apoleo.dev",
  location: "Sample Location",
  socials: [
    { label: "GitHub", href: "https://github.com/", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
    { label: "X", href: "https://x.com/", icon: "x" },
    { label: "Website", href: "https://apoleo.dev", icon: "link" },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
  ],
} as const;

export type SocialIcon = (typeof site.socials)[number]["icon"];
