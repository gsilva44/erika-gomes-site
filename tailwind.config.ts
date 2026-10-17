import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: { 50: "#FFFCF8", 100: "#FBF4EC" },
        sand: { 100: "#F6EADD", 200: "#F0E0CF", 300: "#E3CBB3", 400: "#CFAE90" },
        brown: { 600: "#84482F", 700: "#6F3A26", 800: "#5A2E1D", 900: "#472014" },
        terracotta: { 300: "#D9A383", 500: "#B5663F" },
        ink: "#5B4439",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(111, 58, 38, 0.18)",
        card: "0 2px 4px rgba(111, 58, 38, 0.04), 0 18px 40px -20px rgba(111, 58, 38, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
