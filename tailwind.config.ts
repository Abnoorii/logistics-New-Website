import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1360px" },
    },
    extend: {
      colors: {
        // Deep navy base
        ink: {
          950: "#05070d",
          900: "#0a0e1a",
          800: "#101728",
          700: "#182236",
          600: "#243049",
        },
        // Steel neutrals
        steel: {
          100: "#e6ebf3",
          200: "#c7d0de",
          300: "#9ba7bb",
          400: "#6b7891",
          500: "#485469",
        },
        // Signal amber (brand accent)
        amber: {
          50: "#fff8ea",
          100: "#feefc9",
          200: "#fddc8f",
          300: "#fcc353",
          400: "#f9ab27",
          500: "#e6900a",
          600: "#c26f05",
        },
        // Signal teal (secondary accent)
        signal: {
          400: "#4ad8c6",
          500: "#1ec2ad",
          600: "#0f9d8b",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        // Fluid scale
        "display-1": ["clamp(3.25rem, 7vw + 1rem, 7.5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-2": ["clamp(2.5rem, 5vw + 1rem, 5rem)", { lineHeight: "1", letterSpacing: "-0.025em" }],
        "display-3": ["clamp(2rem, 3vw + 1rem, 3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
      },
      backgroundImage: {
        "grid-fade": "radial-gradient(ellipse at top, rgba(249,171,39,0.08), transparent 60%)",
        "mesh-1": "radial-gradient(1200px 600px at 20% 10%, rgba(249,171,39,0.18), transparent 60%), radial-gradient(900px 500px at 80% 0%, rgba(30,194,173,0.12), transparent 55%), radial-gradient(1200px 800px at 50% 100%, rgba(24,34,54,0.9), transparent 60%)",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-slow": "marquee 70s linear infinite",
        shine: "shine 2.4s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shine: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
