# Indian Kitchen Design System ("Light Luxury")

## Overview
The design system for Indian Kitchen focuses on a bright, clean, and highly professional **Light Luxury** theme. This aesthetic aligns with high-end, Michelin-star restaurant standards, prioritizing breathability, crisp typography, and elegant micro-interactions.

## Color Palette

The core palette focuses on clean white surfaces, dark charcoal text for legibility, and refined, subtle gold accents to communicate luxury.

### Surface Colors
- **Void (Background):** `#FFFFFF` - Pure white background for a clean canvas.
- **Void Light:** `#F8F9FA` - Soft surface layer for cards and inputs.
- **Void Panel:** `#F0F2F5` - Accent light panels for subtle differentiation.
- **Parchment:** `#FAFAFA` - Alternative soft background.

### Text Colors
- **Cream (Primary Text):** `#111111` - Very dark charcoal for high-contrast, crisp text.
- **Cream Dark:** `#000000` - Pure black for highest contrast needs.
- **Text Muted:** `#6C757D` - Secondary text for descriptions and metadata.
- **Text Dark (Inverse):** `#FFFFFF` - Used when text is placed over dark imagery or buttons.

### Accent Colors
- **Gold:** `#B08D57` - Refined subtle gold for primary actions, borders, and branding elements.
- **Gold Light:** `#D4AF37` - Highlight gold for hover states or active states.
- **Crimson:** `#9B2226` - Secondary accent for warnings or specific theme highlights (e.g., The Sherlock theme).
- **Sage:** `#4A5D23` - Secondary accent for natural or organic elements (e.g., Kerala Houseboat theme).

## Typography

The typography pairs a highly legible sans-serif for body copy and UI elements with an elegant, classic serif for display headings.

- **Display Font:** `Cormorant Garamond`
  - Used for large headers, page titles, and editorial quotes.
- **Body Font:** `Inter`
  - Used for paragraphs, buttons, navigation links, and small UI labels.

## UI Components & Primitives

### Buttons
Buttons feature thin borders, uppercase tracking, and clean hover states that utilize the subtle gold accent.
- **Primary Button (`.btn-primary`):** Solid gold background (`#B08D57`) with white text. Hover states lift the button slightly and deepen the gold.
- **Outline Button (`.btn-outline`):** Transparent background with a thin gold border (`border-gold/50`) and gold text. Hover states fill the background with gold and turn the text white.

### Links
- **Underline Links (`.link-underline`):** Features a subtle animated bottom border that expands on hover, using the gold accent.

### Images & Media
- Images utilize a very subtle rounded corner (`rounded-[2px]`) to maintain a sharp, architectural feel while softening the absolute edges.
- Overlays are clean and light (`bg-gradient-to-t from-void via-void/50 to-transparent`) rather than dark and cinematic, prioritizing readability and brightness.

## Layout & Motion

### Grids & Spacing
- The design relies on robust CSS Grids (often 12-column or 3-column) to prevent overlapping and ensure content breathes.
- Ample whitespace is used between sections (`py-24`) to separate content blocks elegantly.

### Motion Principles
- **Smooth Scrolling:** Handled via Lenis, providing a buttery-smooth vertical scroll experience.
- **Subtle Reveals:** Content fades in and translates slightly upwards (`y: 20` to `0`) using Framer Motion as the user scrolls down the page.
- **Hover Micro-interactions:** Buttons lift (`translateY(-2px)`), images scale very slightly (`scale-105`) over a long duration (`duration-700`), and borders transition colors smoothly to reward user interaction without being distracting.
- **Accessibility:** All animations respect `prefers-reduced-motion` settings.
