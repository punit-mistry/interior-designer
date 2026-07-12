import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F6F1E8",
        beige: "#E8DFD0",
        walnut: "#5C4633",
        terracotta: "#B65E3C",
        stone: "#8C8578",
        charcoal: "#1C1917",
        gold: "#C2A26B",
        indigo: "#2D2B55",
        saffron: "#E8A349",
        rust: "#8B3A2A",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.28em",
      },
    },
  },
  plugins: [],
};
export default config;
