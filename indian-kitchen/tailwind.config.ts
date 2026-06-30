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
        "surface": "#FDFBF7",
        "surface-dim": "#F3EFE6",
        "surface-bright": "#FFFFFF",
        "surface-container-lowest": "#FFFFFF",
        "surface-container-low": "#FDFBF7",
        "surface-container": "#F9F6F0",
        "surface-container-high": "#F3EFE6",
        "surface-container-highest": "#EAE5D9",
        "on-surface": "#2C3531",
        "on-surface-variant": "#5A6660",
        "inverse-surface": "#2C3531",
        "inverse-on-surface": "#FDFBF7",
        "outline": "#8DA399",
        "outline-variant": "#C4CFC9",
        "surface-tint": "#8DA399",
        "primary": "#8DA399",
        "on-primary": "#FFFFFF",
        "primary-container": "#D2E2DA",
        "on-primary-container": "#1E2D25",
        "inverse-primary": "#FFFFFF",
        "secondary": "#C5A059",
        "on-secondary": "#FFFFFF",
        "secondary-container": "#F3EFE6",
        "on-secondary-container": "#4A3B1C",
        "tertiary": "#6B8E7B",
        "on-tertiary": "#FFFFFF",
        "tertiary-container": "#BBD5C6",
        "on-tertiary-container": "#1E3326",
        "error": "#BA1A1A",
        "on-error": "#FFFFFF",
        "error-container": "#FFDAD6",
        "on-error-container": "#410002",
        "background": "#FDFBF7",
        "on-background": "#2C3531",
        "surface-variant": "#EAE5D9",
        "brand-deep-forest": "#6B8E7B",
        "brand-warm-cream": "#FDFBF7",
        "brand-sandy": "#C5A059",
        "brand-golden": "#C5A059",
        "brand-red": "#9E0000",
        "brand-accent-green": "#8DA399",
        "brand-saffron": "#C5A059",
        "surface-dark": "#F3EFE6"
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
        "display-lg": ["var(--font-playfair)", "serif"],
        "headline-lg": ["var(--font-playfair)", "serif"],
        "headline-lg-mobile": ["var(--font-playfair)", "serif"],
        "headline-md": ["var(--font-playfair)", "serif"],
        "headline-sm": ["var(--font-playfair)", "serif"],
        "title-lg": ["var(--font-inter)", "sans-serif"],
        "body-lg": ["var(--font-inter)", "sans-serif"],
        "body-md": ["var(--font-inter)", "sans-serif"],
        "label-lg": ["var(--font-inter)", "sans-serif"],
        "label-sm": ["var(--font-inter)", "sans-serif"],
        "sans": ["var(--font-inter)", "sans-serif"],
        "serif": ["var(--font-playfair)", "serif"]
      },
      fontSize: {
        "display-lg": ["80px", {"lineHeight": "90px", "letterSpacing": "0", "fontWeight": "400"}],
        "headline-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "0", "fontWeight": "400"}],
        "headline-lg-mobile": ["36px", {"lineHeight": "44px", "letterSpacing": "0", "fontWeight": "400"}],
        "headline-md": ["32px", {"lineHeight": "40px", "letterSpacing": "0", "fontWeight": "400"}],
        "headline-sm": ["26px", {"lineHeight": "32px", "letterSpacing": "0.02em", "fontWeight": "400"}],
        "title-lg": ["20px", {"lineHeight": "28px", "fontWeight": "500"}],
        "body-lg": ["18px", {"lineHeight": "30px", "fontWeight": "300"}],
        "body-md": ["16px", {"lineHeight": "26px", "fontWeight": "300"}],
        "label-lg": ["13px", {"lineHeight": "20px", "letterSpacing": "0.15em", "fontWeight": "500"}],
        "label-sm": ["11px", {"lineHeight": "16px", "letterSpacing": "0.15em", "fontWeight": "500"}]
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
