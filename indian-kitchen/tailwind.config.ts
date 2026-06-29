// Tailwind v4 uses CSS-based configuration in globals.css via @theme.
// This file is kept for editor tooling compatibility only.
import type { Config } from "tailwindcss";

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
        "surface": "#1d1100",
        "surface-dim": "#1d1100",
        "surface-bright": "#47361c",
        "surface-container-lowest": "#170c00",
        "surface-container-low": "#271903",
        "surface-container": "#2b1d05",
        "surface-container-high": "#37270e",
        "surface-container-highest": "#423218",
        "on-surface": "#fadeb9",
        "on-surface-variant": "#becab6",
        "inverse-surface": "#fadeb9",
        "inverse-on-surface": "#3e2e14",
        "outline": "#899482",
        "outline-variant": "#3f4a3b",
        "surface-tint": "#78dd65",
        "primary": "#78dd65",
        "on-primary": "#003a00",
        "primary-container": "#59bd49",
        "on-primary-container": "#004800",
        "inverse-primary": "#006e01",
        "secondary": "#97d3b8",
        "on-secondary": "#003827",
        "secondary-container": "#15533e",
        "on-secondary-container": "#89c5aa",
        "tertiary": "#ffbb13",
        "on-tertiary": "#412d00",
        "tertiary-container": "#d99d00",
        "on-tertiary-container": "#513800",
        "error": "#ffb4ab",
        "on-error": "#690005",
        "error-container": "#93000a",
        "on-error-container": "#ffdad6",
        "primary-fixed": "#93fa7e",
        "primary-fixed-dim": "#78dd65",
        "on-primary-fixed": "#002200",
        "on-primary-fixed-variant": "#005301",
        "secondary-fixed": "#b3f0d3",
        "secondary-fixed-dim": "#97d3b8",
        "on-secondary-fixed": "#002116",
        "on-secondary-fixed-variant": "#12503c",
        "tertiary-fixed": "#ffdea6",
        "tertiary-fixed-dim": "#ffbb13",
        "on-tertiary-fixed": "#271900",
        "on-tertiary-fixed-variant": "#5e4200",
        "background": "#1d1100",
        "on-background": "#fadeb9",
        "surface-variant": "#423218",
        "brand-deep-forest": "#064935",
        "brand-warm-cream": "#FBE7AD",
        "brand-sandy": "#C5AC89",
        "brand-golden": "#FFBA09",
        "brand-red": "#9E0000",
        "brand-accent-green": "#59BD49",
        "brand-saffron": "#FF9933",
        "surface-dark": "#1D1100"
      },
      borderRadius: {
        "sm": "0.125rem",
        "DEFAULT": "0.25rem",
        "md": "0.375rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "xs": "4px",
        "base": "8px",
        "sm": "12px",
        "md": "24px",
        "gutter": "24px",
        "lg": "48px",
        "xl": "80px",
        "container-max": "1280px"
      },
      fontFamily: {
        "display-lg": ["var(--font-bebas)"],
        "headline-lg": ["var(--font-bebas)"],
        "headline-lg-mobile": ["var(--font-bebas)"],
        "headline-md": ["var(--font-bebas)"],
        "headline-sm": ["var(--font-bebas)"],
        "title-lg": ["var(--font-outfit)"],
        "body-lg": ["var(--font-outfit)"],
        "body-md": ["var(--font-outfit)"],
        "label-lg": ["var(--font-outfit)"],
        "label-sm": ["var(--font-outfit)"],
        "sans": ["var(--font-outfit)"]
      },
      fontSize: {
        "display-lg": ["80px", {"lineHeight": "80px", "letterSpacing": "0.02em", "fontWeight": "400"}],
        "headline-lg": ["48px", {"lineHeight": "52px", "letterSpacing": "0.03em", "fontWeight": "400"}],
        "headline-lg-mobile": ["32px", {"lineHeight": "36px", "letterSpacing": "0.03em", "fontWeight": "400"}],
        "headline-md": ["32px", {"lineHeight": "36px", "letterSpacing": "0.03em", "fontWeight": "400"}],
        "headline-sm": ["24px", {"lineHeight": "28px", "letterSpacing": "0.05em", "fontWeight": "400"}],
        "title-lg": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
        "label-lg": ["14px", {"lineHeight": "20px", "letterSpacing": "0.1em", "fontWeight": "600"}],
        "label-sm": ["12px", {"lineHeight": "16px", "fontWeight": "500"}]
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up-fade': 'slide-up-fade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 15px rgba(255, 153, 51, 0.3))' },
          '50%': { opacity: '.7', filter: 'drop-shadow(0 0 25px rgba(255, 153, 51, 0.6))' },
        },
        'slide-up-fade': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },

};

export default config;
