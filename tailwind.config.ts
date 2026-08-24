import type { Config } from "tailwindcss";

/**
 * Brand palette
 * -------------
 * Navy  #16305A — brand primary (structure, calm, trust)
 * Red   #DA262E — brand accent  (motion, action, priority)
 *
 * Use `brand-navy-*` for structural surfaces and `brand-red-*` for
 * accents/CTAs/focus. Backwards-compat amber alias has been fully
 * removed from className strings.
 */
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
        // Page-level dark backgrounds — nudged toward brand navy
        ink: {
          950: "#050813",
          900: "#0a1123",
          800: "#101a35",
          700: "#182444",
          600: "#243359",
        },
        // Steel neutrals (unchanged — work with any dark bg)
        steel: {
          100: "#e6ebf3",
          200: "#c7d0de",
          300: "#9ba7bb",
          400: "#6b7891",
          500: "#485469",
        },
        // Brand navy — canonical name
        "brand-navy": {
          50: "#eef2fa",
          100: "#d6dff0",
          200: "#a7b7dc",
          300: "#7690c4",
          400: "#4a6ba7",
          500: "#2a5089",
          600: "#16305A",
          700: "#122850",
          800: "#0e2144",
          900: "#0a1a35",
        },
        // Brand red — canonical name
        "brand-red": {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#DA262E",
          600: "#b91c22",
          700: "#991616",
          800: "#7f1414",
          900: "#5c0f0f",
        },
        // Signal teal (kept, softened) — used for status/on-schedule dots only
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
        "display-1": ["clamp(3.25rem, 7vw + 1rem, 7.5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-2": ["clamp(2.5rem, 5vw + 1rem, 5rem)", { lineHeight: "1", letterSpacing: "-0.025em" }],
        "display-3": ["clamp(2rem, 3vw + 1rem, 3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse at top, rgba(218,38,46,0.08), transparent 60%)",
        // Two-tone mesh: brand-red wash top-left, brand-navy lift bottom-right
        "mesh-1":
          "radial-gradient(1200px 600px at 20% 10%, rgba(218,38,46,0.16), transparent 60%), radial-gradient(900px 500px at 80% 0%, rgba(22,48,90,0.30), transparent 55%), radial-gradient(1200px 800px at 50% 100%, rgba(22,48,90,0.60), transparent 60%)",
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
