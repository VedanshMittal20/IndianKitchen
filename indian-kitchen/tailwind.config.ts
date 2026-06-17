import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        void: "#0F0805",
        gold: {
          DEFAULT: "#C8872A",
          light: "#E1A142"
        },
        sage: "#4A6741",
        terracotta: "#BF5E3B",
        crimson: "#4A0E0E",
        cream: "#FAF5E9",
        parchment: "#F0E8D5",
        paper: "#FDFBF7",
        text: {
          dark: "#2A2A2A",
          muted: "#666666"
        }
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "ken-burns": "kenBurns 20s ease-in-out infinite alternate",
      },
      keyframes: {
        kenBurns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
