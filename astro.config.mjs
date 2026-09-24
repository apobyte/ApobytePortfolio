// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  // Self-hosted copies of the Google families. A cold browser (or one that
  // blocks fonts.googleapis.com) otherwise falls back to system fonts.
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Outfit",
      cssVariable: "--font-outfit",
      weights: [300, 400, 500, 600, 700],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["Segoe UI", "sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Kaushan Script",
      cssVariable: "--font-kaushan",
      weights: [400],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["cursive"],
    },
    {
      provider: fontProviders.local(),
      name: "Yuji Mai",
      cssVariable: "--font-yuji",
      fallbacks: ["serif"],
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/yuji-mai-400.woff2"],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Zen Kaku Gothic New",
      cssVariable: "--font-zen-kaku",
      fallbacks: ["Yu Gothic", "sans-serif"],
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/zen-kaku-gothic-new-400.woff2"],
          },
          {
            weight: 500,
            style: "normal",
            src: ["./src/assets/fonts/zen-kaku-gothic-new-500.woff2"],
          },
          {
            weight: 700,
            style: "normal",
            src: ["./src/assets/fonts/zen-kaku-gothic-new-700.woff2"],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Zen Maru Gothic",
      cssVariable: "--font-zen-maru",
      fallbacks: ["Yu Gothic", "sans-serif"],
      options: {
        variants: [
          {
            weight: 500,
            style: "normal",
            src: ["./src/assets/fonts/zen-maru-gothic-500.woff2"],
          },
          {
            weight: 700,
            style: "normal",
            src: ["./src/assets/fonts/zen-maru-gothic-700.woff2"],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Dela Gothic One",
      cssVariable: "--font-dela",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/dela-gothic-one-400.woff2"],
          },
        ],
      },
    },
  ],
});