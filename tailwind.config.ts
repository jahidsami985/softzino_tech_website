import type { Config } from "tailwindcss";

// Tailwind design tokens translated from the Figma CSS: colors, fonts, radii, and shadows.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Navy family
        "navy-header": "#1B2A4A", // header/footer accent, mega-menu heading text
        "navy-deep": "#041534", // primary headings, dark hero sections, footer bg
        // Teal family
        "teal-primary": "#006A69", // header CTA bg, "learn more" links
        "teal-secondary": "#0E7C7B", // hire-developers/about CTAs, list check icons
        "teal-mint": "#98F2F0", // Zenith e-commerce accent
        // Gold (About page accent)
        gold: "#755B00",
        // Text
        "body-text": "#45464E",
        "text-dark": "#1B1C1C",
        "placeholder-gray": "#6B7280",
        // Borders
        "border-light": "#C5C6CF",
        "border-lighter": "#E5E7EB",
        // Backgrounds
        "bg-cream": "#FCF9F8", // hire-developers / about page background
        "bg-offwhite": "#F8F9FB", // services / off-the-shelf page background
        "bg-warm-gray": "#F6F3F2", // engagement / form section background
        "bg-card-gray": "#F2F4F6", // off-the-shelf product card background
        // Footer
        "footer-muted": "#8392B7",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "Consolas", "monospace"],
      },
      maxWidth: {
        content: "1280px",
      },
      borderRadius: {
        card: "8px",
        sm4: "4px",
      },
      boxShadow: {
        "card-sm": "0px 1px 2px rgba(0, 0, 0, 0.05)",
        "card-lg":
          "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)",
        "card-md":
          "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)",
        header: "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
