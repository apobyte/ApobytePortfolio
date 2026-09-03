import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function getPreferredTheme(): Theme {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(getPreferredTheme());
  }, []);

  function apply(next: Theme) {
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  }

  return (
    <div className="theme-pair" role="group" aria-label="Color theme">
      <button
        type="button"
        className={`theme-btn${theme === "light" ? " is-active" : ""}`}
        aria-pressed={theme === "light"}
        aria-label="Light theme"
        onClick={() => apply("light")}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 4.5a1 1 0 0 1 1 1V7a1 1 0 1 1-2 0V5.5a1 1 0 0 1 1-1m0 11a1 1 0 0 1 1 1V19a1 1 0 1 1-2 0v-2.5a1 1 0 0 1 1-1M5.5 11a1 1 0 0 1 1 1 1 1 0 0 1-1 1H3a1 1 0 1 1 0-2zm15.5 0a1 1 0 1 1 0 2h-2.5a1 1 0 1 1 0-2zM7.05 7.05a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 1 1-1.41 1.41L7.05 8.46a1 1 0 0 1 0-1.41m8.43 8.43a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 1 1-1.41 1.41l-1.06-1.06a1 1 0 0 1 0-1.41M16.54 7.05a1 1 0 0 1 0 1.41l-1.06 1.06a1 1 0 1 1-1.41-1.41l1.06-1.06a1 1 0 0 1 1.41 0m-8.43 8.43a1 1 0 0 1 0 1.41L7.05 18a1 1 0 1 1-1.41-1.41l1.06-1.06a1 1 0 0 1 1.41 0M12 8.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5"
          />
        </svg>
      </button>
      <button
        type="button"
        className={`theme-btn${theme === "dark" ? " is-active" : ""}`}
        aria-pressed={theme === "dark"}
        aria-label="Dark theme"
        onClick={() => apply("dark")}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12.2 3.1a1 1 0 0 1 .96 1.28 7 7 0 1 0 6.46 6.46 1 1 0 0 1 1.9-.36A9 9 0 1 1 11.5 3.04a1 1 0 0 1 .7.06"
          />
        </svg>
      </button>
    </div>
  );
}
