import type { Config } from "tailwindcss";
import formsPlugin from '@tailwindcss/forms';
import containerQueriesPlugin from '@tailwindcss/container-queries';
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "outline-variant": "#d1c5b6",
        "on-secondary": "#ffffff",
        "inverse-on-surface": "#f8efe8",
        "surface-variant": "#e9e1da",
        "primary-fixed-dim": "#e8c086",
        "surface": "#fff8f3",
        "primary-container": "#b08d57",
        "primary": "#775928",
        "surface-container": "#f5ece5",
        "surface-bright": "#fff8f3",
        "surface-tint": "#775928",
        "secondary-fixed-dim": "#c8c6c5",
        "surface-dim": "#e1d9d2",
        "on-tertiary-fixed-variant": "#4b4641",
        "on-error": "#ffffff",
        "background": "#fff8f3",
        "tertiary-container": "#98928c",
        "primary-fixed": "#ffdeae",
        "error-container": "#ffdad6",
        "on-secondary-fixed": "#1c1b1b",
        "error": "#ba1a1a",
        "on-secondary-container": "#636262",
        "tertiary-fixed-dim": "#cdc5be",
        "on-error-container": "#93000a",
        "on-surface": "#1e1b17",
        "outline": "#807569",
        "inverse-primary": "#e8c086",
        "surface-container-low": "#fbf2eb",
        "secondary": "#5f5e5e",
        "on-primary-fixed": "#281800",
        "on-tertiary-container": "#2f2b27",
        "tertiary-fixed": "#e9e1da",
        "on-tertiary-fixed": "#1e1b17",
        "surface-container-highest": "#e9e1da",
        "surface-container-lowest": "#ffffff",
        "on-background": "#1e1b17",
        "inverse-surface": "#34302b",
        "tertiary": "#635d58",
        "on-secondary-fixed-variant": "#474746",
        "secondary-fixed": "#e5e2e1",
        "on-tertiary": "#ffffff",
        "on-primary-container": "#3d2700",
        "on-primary": "#ffffff",
        "on-surface-variant": "#4e453a",
        "on-primary-fixed-variant": "#5d4213",
        "surface-container-high": "#efe7e0",
        "secondary-container": "#e2dfde",
        "emerald-header": "#043927",
        "obsidian-accent": "#0b0c10",
        "saffron-gold": "#f4c430"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "gutter": "32px",
        "margin-mobile": "20px",
        "unit": "8px",
        "margin-desktop": "64px",
        "container-max": "1280px"
      },
      fontFamily: {
        "body-lg": ["var(--font-hanken)"],
        "headline-md": ["var(--font-eb-garamond)"],
        "annotation": ["var(--font-space-mono)"],
        "label-sm": ["var(--font-hanken)"],
        "display-lg-mobile": ["var(--font-eb-garamond)"],
        "display-lg": ["var(--font-eb-garamond)"],
        "body-md": ["var(--font-hanken)"]
      },
      fontSize: {
        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "headline-md": ["32px", {"lineHeight": "1.3", "fontWeight": "500"}],
        "annotation": ["12px", {"lineHeight": "1.0", "letterSpacing": "0.05em", "fontWeight": "400"}],
        "label-sm": ["14px", {"lineHeight": "1.0", "letterSpacing": "0.03em", "fontWeight": "600"}],
        "display-lg-mobile": ["40px", {"lineHeight": "1.2", "fontWeight": "500"}],
        "display-lg": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "500"}],
        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}]
      }
    },
  },
  plugins: [
    formsPlugin,
    containerQueriesPlugin,
  ],
};
export default config;
