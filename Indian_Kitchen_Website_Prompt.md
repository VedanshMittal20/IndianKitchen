# Indian Kitchen — Complete Website Development Prompt

---

## PROJECT BRIEF

You are building a full-stack, production-ready website for **Indian Kitchen**, Sri Lanka's pioneering immersive theme dining restaurant chain. Indian Kitchen doesn't just serve food — it sells *experiences*. Every outlet is a fully themed world: Pondicherry Street (Indo-French nostalgia), Kerala Houseboat (serene backwater ambience), and a Sherlock Holmes mystery dining experience. The website must feel like an extension of the in-restaurant experience — rich, immersive, culturally vibrant, and deeply evocative of India's culinary soul.

**Client:** Indian Kitchen Theme Dining
**Location:** 357 R.A. De Mel Mawatha, Colombo 03, Sri Lanka
**Phone:** +94 117 112 334
**Website Domain:** indiankitchen.lk
**Founded:** 2019 (Sri Lanka) | First outlet opened 2020

---

## TECH STACK

- **Framework:** Next.js 14 (App Router) with TypeScript
- **Styling:** Tailwind CSS with custom design tokens
- **Animations:** Framer Motion for scroll animations and transitions
- **Icons:** Lucide React + custom SVG icons
- **Forms:** React Hook Form with Zod validation
- **WhatsApp Integration:** wa.me deep links + WhatsApp Chat Widget (Elfsight or custom)
- **QR Code:** qrcode.react library
- **Fonts:** Google Fonts — Inter (primary UI), and a decorative serif (e.g. Cormorant Garamond or Playfair Display) for hero headings
- **Deployment:** Vercel (recommended)

---

## EXACT COLOR PALETTE (from brand presentation)

Use these as CSS custom properties throughout the entire codebase. Do NOT deviate from these colors.

```css
:root {
  /* ── PRIMARY BRAND COLORS ── */
  --color-crimson:        #4A0E0E;   /* Deep dark maroon — hero sections, primary backgrounds */
  --color-void:           #0F0805;   /* Near-black — darkest backgrounds, navbars */
  --color-gold:           #C8872A;   /* Warm amber gold — headings, accents, dividers */
  --color-gold-light:     #E6AB50;   /* Brighter gold — hover states, highlights */
  --color-terracotta:     #BF5E3B;   /* Burnt orange — CTAs, warm accents */

  /* ── SECONDARY / NEUTRAL COLORS ── */
  --color-sage:           #4A6741;   /* Forest sage green — decorative accents */
  --color-sage-light:     #8BA05E;   /* Muted olive — subtle UI elements */
  --color-cream:          #F5EDD6;   /* Warm ivory — light backgrounds and body text on dark */
  --color-cream-dark:     #E8DFC4;   /* Slightly deeper cream — card backgrounds */
  --color-parchment:      #FAF5E9;   /* Off-white — section backgrounds, forms */

  /* ── TEXT ── */
  --color-text-light:     #F5EDD6;   /* On dark backgrounds */
  --color-text-dark:      #1A0D00;   /* On light backgrounds */
  --color-text-muted:     #A0896E;   /* Subdued copy */

  /* ── UTILITY ── */
  --color-border:         rgba(200,135,42,0.25);  /* Gold-tinted borders */
  --color-overlay:        rgba(15,8,5,0.72);      /* Image overlays */
}
```

---

## TYPOGRAPHY SYSTEM

```css
/* Primary heading font — elegant, editorial */
--font-display: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;

/* Body / UI font — clean, readable */
--font-body: 'Inter', system-ui, sans-serif;

/* Decorative / cultural script feel (optional) */
--font-accent: 'Tiro Devanagari Hindi', serif;

/* Scale */
--text-hero:   clamp(3rem, 7vw, 6rem);     /* Hero headings */
--text-h1:     clamp(2rem, 4vw, 3.5rem);
--text-h2:     clamp(1.5rem, 3vw, 2.5rem);
--text-h3:     clamp(1.1rem, 2vw, 1.5rem);
--text-body:   1rem;
--text-small:  0.875rem;
```

---

## BRAND VOICE & TONE

- **Evocative, not corporate.** Write like a storyteller, not a business listing.
- **Culturally rich.** Reference India's regional heritage naturally.
- **Sensory.** Use words that evoke smell, texture, warmth, and memory.
- **Confident and aspirational.** Indian Kitchen is a global brand in the making.
- Every headline should feel like a line from a travel memoir or a poem — never generic.

**STRICTLY FORBIDDEN heading words:** "About Us," "Our Story," "Services," "Contact Us," "Get in Touch," "Menu," "Gallery," "Home," "Welcome To," "Our Team."

---

## SITE ARCHITECTURE & PAGE STRUCTURE

### Pages:
1. `/` — Home (landing page with all key sections)
2. `/menu` — Full interactive menu
3. `/careers` — Careers & application
4. `/blog` — Blog listing page
5. `/blog/[slug]` — Individual blog post
6. `/franchise` — Franchise enquiry landing page

---

## SECTION-BY-SECTION SPECIFICATIONS

---

### 1. NAVIGATION (Sticky, Transparent → Solid on Scroll)

**Design:**
- Transparent over hero, transitions to `--color-void` with blur-backdrop on scroll
- Logo: "Indian Kitchen" wordmark with a small decorative spice/motif icon (use SVG leaf or flame icon from Lucide)
- Desktop nav links: `The Experience | Our Themes | The Menu | Reservations | Franchise | Blog | Careers`
- CTA Button (top right): "Reserve a Table" — styled in `--color-terracotta` with gold border
- Mobile: Hamburger → full-screen drawer with dark `--color-void` background, links in `--color-cream`
- WhatsApp floating button: Fixed bottom-right corner. Green circle, WhatsApp icon. Opens `https://wa.me/94117112334?text=Hello%20Indian%20Kitchen!%20I'd%20like%20to%20enquire%20about...`

---

### 2. HERO SECTION — "Where Every Meal Tells a Story"

**Design:**
- Full viewport height (100vh), with a slow-panning background video or high-quality image of the Pondicherry Street outlet interior
- Fallback: layered parallax image of Indian kitchen ambience with a `--color-overlay` overlay
- Text centered, large hero heading in `--font-display` at `--text-hero` size, colored in `--color-cream`
- Subheading: "An immersive journey through India's soul — served at your table in Colombo."
- Two CTA buttons side by side:
  - Primary: "Reserve Your Table" (→ scrolls to reservation section) — `--color-terracotta` fill
  - Secondary: "Explore Our World" (→ scrolls to themes section) — transparent, gold border
- Animated scroll indicator (bouncing chevron) at bottom
- Subtle floating spice particle animation (use CSS keyframes for floating dots in gold/terracotta)
- Optional: rotating text effect cycling through "Pondicherry Street / Kerala Houseboat / Sherlock Mystery Dining"

---

### 3. MARQUEE BAR — Social Proof / Atmosphere Ticker

Below hero, a horizontally scrolling ticker (infinite loop) with lines like:
> "Open till 3 AM · Pondicherry Street · Kerala Houseboat · Sherlock Mystery Dining · No Artificial Colours · Village-Trained Chefs · Live Kitchen Stations · Tamil Nadu · Kerala · North Indian Cuisine"

Background: `--color-gold` | Text: `--color-void` | Font: Inter Medium, uppercase, small

---

### 4. BRAND INTRO — "Born From a Bold Vision"

**Creative heading:** "Born From a Bold Vision"

**Layout:** Two-column on desktop (text left, image right). Single column on mobile.

**Text content:**
> "In 2019, when the world stopped, we began. Indian Kitchen was born during the global hospitality crisis — not despite the chaos, but because of it. We believed that dining could be more than a meal. It could be a journey. Inspired by Pondicherry's enchanting French-colonial streets, Kerala's serene backwaters, and the mysteries of a gaslit Victorian study, we built worlds that people could step into. Every dish we serve is a chapter. Every table, a stage."

**Stats row below text** (animated counter on scroll):
- `2019` — Year Founded
- `3` — Immersive Themes
- `800+` — UberEats Reviews (4.0★)
- `3AM` — Kitchen Closes

**Image:** Rich photography of the themed interior. Apply a subtle warm gold color-grade using CSS filter: `sepia(0.15) saturate(1.2)`.

---

### 5. THEMES SHOWCASE — "Step Into Another World"

**Creative heading:** "Step Into Another World"

**Layout:** Full-bleed horizontal scroll on mobile, 3-column card grid on desktop.

**3 Theme Cards:**

#### Card 1 — Pondicherry Street
- Background: Warm terracotta/amber gradient overlay on outdoor Indian-French colonial street image
- Badge: "Flagship · Since 2020"
- Title: "Pondicherry Street"
- Subtitle: "Indo-French culture & nostalgia"
- Body: "Cobblestone alleys, colonial arches, and Tamil rhythms in the air. Our first and most iconic theme — a portal to Pondicherry's enchanting blend of French elegance and Indian warmth."
- Outlet badge: "Colombo 03, Sri Lanka"

#### Card 2 — Kerala Houseboat
- Background: Deep green/teal gradient with water imagery
- Title: "Kerala Houseboat"
- Subtitle: "Serene backwater ambience"
- Body: "Drift into the stillness of Kerala's backwaters. Bamboo walls, hanging lanterns, and the sound of water beneath your feet. Coastal cuisine, reimagined."

#### Card 3 — The Sherlock
- Background: Deep charcoal/sepia gradient, Victorian aesthetic
- Title: "The Sherlock"
- Subtitle: "A mystery unravels at every table"
- Body: "Every meal is a case. Gaslit corridors, Victorian artefacts, and Indian masalas brewed in secret. Dinner at The Sherlock is an experience your friends won't believe."

**Each card:** Hover lifts the card + reveals a gold underline. CTA: "Discover This Theme →"

---

### 6. SIGNATURE DISHES — "The Dishes That Started It All"

**Creative heading:** "The Dishes That Started It All"

**Layout:** Asymmetric grid — large hero dish image left, 4 smaller dish cards right.

**Hero dish:** Bamboo Biryani — the most photographed dish. Large image with overlay text: *"Bamboo Biryani — Where Tradition Meets Fire."*

**4 highlighted dishes:**
1. **Puff Parotta** — Flaky, layered, and unforgettable. A staple of Tamil Nadu street food, perfected.
2. **Tender Coconut Prawn Curry** — Malabar coastal flavours in every spoonful.
3. **Jigarthanda** — The coolant of Madurai. A dessert drink unlike any other.
4. **Ilaneer Cake** — Tender coconut reimagined as dessert art.

Below: CTA → "Scan to Order" (links to menu QR section) and "View Full Menu" (→ /menu).

---

### 7. MENU QR CODE SECTION — "Scan, Discover, Order"

**Creative heading:** "The Menu Is Just a Scan Away"

**Design:** Full-width dark section (`--color-void` bg), centered layout.

**Content:**
- Large animated QR code (use `qrcode.react` library, generating a QR for `https://indiankitchen.lk/menu` or the actual UberEats/in-house ordering link)
- Instructional copy: "Point your camera at the code to explore the full Indian Kitchen menu and place your order instantly."
- Below QR: Three delivery/ordering method buttons:
  - "Dine In" — links to Reservation Form
  - "Order via Uber Eats" — links to their UberEats page
  - "Order via WhatsApp" — `wa.me/94117112334?text=I'd like to place a food order`
- Subtle animated ring pulsing around the QR code to draw attention

---

### 8. FULL MENU PAGE — `/menu`

**Creative heading:** "A Culinary Passport Through India"

**Design:** Dark page (`--color-crimson` to `--color-void` gradient bg), cream text. Sticky category filter tabs at top.

**Menu Categories & Items** (populate from the following data, extend as needed):

```
CATEGORY: BREADS & ROTIS
- Garlic Naan — LKR 350
- Missi Roti — LKR 380
- Tandoori Roti — LKR 320
- Puff Parotta — LKR 290
- Naan Roti Basket (6 Varieties) — LKR 2,431

CATEGORY: BIRYANI
- Bamboo Biryani (Chicken / Veg) — LKR 1,950 / 1,600
- Chicken Dum Biryani (S/M/L) — LKR 1,200 / 1,677 / 2,100
- Pot Biryani — LKR 2,200

CATEGORY: CURRIES — CHICKEN
- Butter Chicken (S/M/L) — LKR 1,450 / 1,950 / 2,400
- Chicken Tikka Masala (S/M/L) — LKR 1,400 / 1,794 / 2,300
- Pineapple Butter Chicken — LKR 2,100
- Tender Coconut Prawn Curry — LKR 2,500

CATEGORY: CURRIES — VEG & PANEER
- Kadai Paneer — LKR 1,976
- Dhal Fry (S/M/L) — LKR 800 / 1,100 / 1,500
- Kadai Veg Curry — LKR 1,450

CATEGORY: STARTERS / TANDOOR
- Chicken Tikka — LKR 1,800
- Seekh Kebab — LKR 1,900

CATEGORY: DESSERTS & DRINKS
- Jigarthanda — LKR 650
- Ilaneer Cake (Tender Coconut) — LKR 850
- Mango Lassi — LKR 550
- Hot Gulab Jamun — LKR 420
```

**Each menu item card includes:**
- Name, Price in LKR
- Short flavour description (2 sentences)
- Dietary tags: VEG / NON-VEG / VEGAN / SPICY
- "+" add button (visual only, or link to WhatsApp order)

**Note:** Add a placeholder note: *"Full menu is updated regularly. Prices may vary by outlet. For the most current menu, scan the QR code or visit us in-store."*

---

### 9. OUR COMMITMENT — "The Purity Pledge"

**Creative heading:** "The Purity Pledge"

**Layout:** 3 icon cards in a row, centered section, `--color-parchment` background.

**3 Cards:**
1. **Chefs from Indian Villages** — *"Our chefs don't learn from culinary schools. They learn from their grandmothers. Every dish traces back to a family kitchen in the heart of India."*
2. **Family-Rooted Recipes** — *"We don't adapt, modify, or fusion-ize. Regional recipes pass through our kitchens exactly as they've been cooked for generations."*
3. **No Artificial Colours or Preservatives** — *"What you eat is what India grows. We source ingredients directly from India's heartland — the spices, the rice, the masalas."*

---

### 10. PRIVATE & CORPORATE DINING — "Your Event, Our Stage"

**Creative heading:** "Your Event, Our Stage"

**Layout:** Dark section with a full-bleed image (private event/banquet setup), text overlay.

**Services listed as 4 icon boxes:**
- Corporate Dining
- Private Dining & Celebrations
- Travel & Guest Dining
- Custom Menus & Special Rates

**CTA:** "Enquire About Private Events" → WhatsApp `wa.me/94117112334?text=I'd like to enquire about private dining at Indian Kitchen`

---

### 11. TABLE RESERVATION FORM — "Claim Your Seat at the Story"

**Creative heading:** "Claim Your Seat at the Story"

**Design:** Split section — form on left (dark card), reservation ambience image right.

**Form Fields:**
- Full Name (required)
- Phone Number (required, with +94 Sri Lanka prefix dropdown)
- Email Address (required)
- Date of Reservation (date picker, min: today)
- Time of Reservation (dropdown: 12:30 PM, 1:00 PM, ... 2:00 AM, 2:30 AM — increments every 30 min, range 12:30 PM – 2:30 AM)
- Number of Guests (dropdown: 1, 2, 3 ... 20, 20+)
- Occasion (dropdown: Birthday, Anniversary, Corporate Dinner, Casual Dining, Other)
- Preferred Theme (dropdown: Pondicherry Street, Kerala Houseboat, The Sherlock, No Preference)
- Special Requests (textarea, optional)

**Submit behavior:**
- On submit → validate with Zod → encode data as a WhatsApp message string → redirect to:
`https://wa.me/94117112334?text=🍽️ *New Table Reservation Request*%0A%0A*Name:* [name]%0A*Phone:* [phone]%0A*Date:* [date]%0A*Time:* [time]%0A*Guests:* [guests]%0A*Occasion:* [occasion]%0A*Theme:* [theme]%0A*Special Requests:* [requests]`
- Show a success screen: "Your reservation has been sent to the Indian Kitchen team via WhatsApp. Expect a confirmation within 30 minutes."

**Design:** Card with `--color-void` background, `--color-gold` borders on inputs, labels in `--color-cream`, submit button in `--color-terracotta`.

---

### 12. FRANCHISE ENQUIRY PAGE — `/franchise`

**Creative heading:** "Own a World. Build a Legacy."

**Design:** Full dedicated page with hero section, brand proposition, and form.

**Hero copy:**
> "Indian Kitchen is a brand built for scale. Since 2020, we've proven that immersive theme dining drives loyalty, repeat visits, and viral word-of-mouth. We're now expanding our model globally. If you have the vision, we have the blueprint."

**Why Franchise with Indian Kitchen:**
- Scalable, proven theme formats
- Strong repeat clientele base
- Event-driven revenue streams
- Full operational support and chef training
- A brand with global expansion vision

**Franchise Enquiry Form:**
- Full Name
- Email Address
- Phone Number (with country code selector)
- Country / City of Proposed Outlet
- Investment Range (dropdown: Under USD 50K / USD 50K–100K / USD 100K–250K / Above USD 250K)
- Current Business Background (textarea)
- Why Indian Kitchen? (textarea)
- How did you hear about us? (dropdown)

**Submit:** Same WhatsApp encoding method as reservation form, sending to `wa.me/94117112334`.

---

### 13. SOCIAL MEDIA INTEGRATION — "Follow the Flavour"

**Creative heading:** "Follow the Flavour"

**Design:** Dark section, centered.

**Social media cards — 3 large clickable icons:**
1. **Instagram** → `https://www.instagram.com/indian.kitchen_/` | Handle: `@indian.kitchen_`
2. **TikTok** → `https://www.tiktok.com/@ikthemedining` | Handle: `@ikthemedining`
3. **Facebook** → `https://www.facebook.com/indiankitchenrestaurant/` | Handle: `Indian Kitchen`

**Instagram Feed Embed:** Use a lightweight Instagram embed widget (or a static grid of 6 placeholder cards in the brand color palette with caption overlays) showing recent posts. Style as a 3×2 grid.

**CTA below:** "Share your Indian Kitchen experience and tag **@indian.kitchen_** for a feature."

---

### 14. BLOG SECTION — "From the Spice Trail"

**Creative heading:** "Dispatches from the Spice Trail"

**Blog index page (`/blog`):**
- 3-column card grid (stacks to 1 on mobile)
- Each card: Featured image, tag (e.g. "Culture" / "Recipe" / "Behind the Kitchen"), title, 2-line excerpt, read time, "Read the Full Story →"
- Pagination at bottom

**Starter Blog Posts (create placeholder content for these):**

1. **"The Day Bamboo Became a Cooking Vessel"** — The origin story of Indian Kitchen's signature Bamboo Biryani
2. **"Why Pondicherry Was the Only Place to Begin"** — Behind the creation of the first theme
3. **"What It Means to Cook Without Shortcuts"** — The Indian Kitchen philosophy on no artificial ingredients
4. **"From Colombo to Kandy: How We Built a Second World"** — Expansion story
5. **"The Mystery Behind the Sherlock Dining Experience"** — Deep dive into the Sherlock theme

**Individual post (`/blog/[slug]`):**
- Full-width hero image
- Article body with pull quotes styled in `--color-gold`
- Author section at bottom
- "Continue the Journey" — related posts section

---

### 15. CAREERS PAGE — `/careers`

**Creative heading:** "Join the World-Builders"

**Hero text:**
> "We don't hire waitstaff. We hire storytellers. At Indian Kitchen, every person — from the kitchen to the floor — plays a character in an immersive world. We're looking for people who care about craft, culture, and creating unforgettable human moments."

**Current Openings Section:**
- Display 4 placeholder role cards:
  1. **Head Chef** — Colombo · Full Time
  2. **Front of House Manager** — Colombo · Full Time
  3. **Theme Experience Host** — Colombo / Kandy · Part Time
  4. **Social Media Content Creator** — Remote · Freelance
- Each card has: Role, Location, Type, brief description, "Apply for this Role" CTA

**General Application Form:**
- Full Name
- Email
- Phone
- Role Applying For (dropdown listing the above 4 + "General Application")
- Current Location
- LinkedIn Profile (optional)
- Portfolio / Website (optional)
- Years of Experience in F&B (dropdown)
- Why do you want to work at Indian Kitchen? (textarea, required)
- Upload CV / Resume (file input, accept PDF/DOCX)

**Submit behavior:** Encode to WhatsApp message + mailto fallback to a careers email address.

---

### 16. TESTIMONIALS — "What Our Guests Say"

**Creative heading:** "The Reviews Are Just the Beginning"

**Design:** Dark section, scrollable horizontal carousel (Embla Carousel or CSS scroll-snap).

**Pull 6 real-feeling testimonials from UberEats/TripAdvisor context:**
1. ⭐⭐⭐⭐⭐ — *"Bamboo Biryani is unlike anything I've ever had. The whole place feels like you've teleported to Pondicherry."* — Rohan M., Colombo
2. ⭐⭐⭐⭐⭐ — *"We booked for our anniversary and were completely blown away. The Kerala Houseboat setting is surreal — like being on a real backwater."* — Priya & Dinesh
3. ⭐⭐⭐⭐ — *"The live kitchen stations and late-night service are unmatched in Colombo. Best Indian food I've had outside India."* — Giulio C.
4. ⭐⭐⭐⭐⭐ — *"I'm a vegetarian and the Kadai Paneer and Missi Roti here are simply outstanding. Will be back every week."* — Ananya R.
5. ⭐⭐⭐⭐⭐ — *"The Sherlock dining experience is absolutely wild. We solved a mystery while eating Butter Chicken at 1 AM. Peak Colombo."* — Marcus T.
6. ⭐⭐⭐⭐ — *"Family-friendly, authentic, and incredibly atmospheric. The kind of place you bring every visitor to Sri Lanka."* — Hana S.

---

### 17. FIND US — "Come Find the Experience"

**Creative heading:** "Come Find the Experience"

**Design:** 2-column — Google Maps embed left, contact info right.

**Contact info:**
- 📍 357 R.A. De Mel Mawatha, Colombo 03, Sri Lanka (Pondicherry Street Outlet)
- 📞 +94 117 112 334
- ⏰ Monday–Thursday: 12:30 PM – 11:30 PM | Friday–Saturday: 12:30 PM – 3:00 AM | Sunday: 12:30 PM – 11:30 PM
- 🌐 indiankitchen.lk
- WhatsApp: Chat with us instantly

**Google Maps Embed:** Embed for "Indian Kitchen Colombo" at coordinates approx. 6.8908° N, 79.8530° E.

---

### 18. FOOTER

**Design:** `--color-void` background, `--color-gold` accents, `--color-cream` text.

**Columns:**
1. **Brand** — Logo, tagline: *"We don't serve food. We serve journeys."*, social icons
2. **Navigate** — Home, The Experience, Themes, Menu, Reservations, Blog, Careers, Franchise
3. **Reach Us** — Address, Phone, WhatsApp CTA
4. **Hours** — Opening hours

**Bottom bar:**
- © 2024 Indian Kitchen Theme Dining. All rights reserved.
- Privacy Policy | Terms & Conditions
- Crafted by [Agency Name]

---

## GLOBAL DESIGN RULES

### Animation Principles:
- All sections: Fade-in + slight upward translate on scroll (Framer Motion `useInView` hook)
- Stagger children by 0.1s delays for lists/cards
- Hero text: Character-level reveal animation using a text splitting technique
- Marquee: CSS `animation: scroll 30s linear infinite`
- QR pulse: CSS `animation: pulse-ring 2s ease-out infinite`
- Hover on all interactive cards: `transform: translateY(-4px)` + `box-shadow` glow in gold

### Responsive Breakpoints:
- Mobile first. Breakpoints at 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Navigation collapses to hamburger below md
- Grid layouts: 1-column mobile, 2-column tablet, 3-column desktop

### Image Handling:
- All images: `next/image` with lazy loading and blur placeholder
- Color-grade food images with: `filter: sepia(0.1) saturate(1.15) brightness(0.95)` for brand cohesion
- All hero images have `--color-overlay` as a gradient overlay on top

### Accessibility:
- All interactive elements must be keyboard navigable
- ARIA labels on all icon-only buttons (especially the WhatsApp floating button)
- Color contrast ratio must pass WCAG AA (especially `--color-cream` on `--color-crimson`)
- `<html lang="en">` set
- All images must have descriptive `alt` text

### Performance:
- Lazy load all images below the fold
- Prefetch linked pages
- Minify all fonts (subset to Latin + Tamil characters used in branding)
- Use `react-intersection-observer` for triggering animations only when in viewport

---

## WHATSAPP INTEGRATION DETAILS

All form submissions across the site (Reservation, Franchise, Careers) must use this pattern:

```javascript
const sendToWhatsApp = (data: FormData, messageTemplate: string) => {
  const encoded = encodeURIComponent(messageTemplate);
  const url = `https://wa.me/94117112334?text=${encoded}`;
  window.open(url, '_blank');
};
```

**Floating WhatsApp Button** (fixed position, bottom-right, z-index: 9999):
- Green circle (`#25D366`), 56px diameter
- WhatsApp SVG icon in white
- Tooltip on hover: "Chat with Indian Kitchen"
- Link: `https://wa.me/94117112334?text=Hello!%20I%27d%20like%20to%20know%20more%20about%20Indian%20Kitchen.`

---

## SOCIAL MEDIA HANDLES TO INTEGRATE

| Platform  | Handle / URL |
|-----------|--------------|
| Instagram | `@indian.kitchen_` → `https://www.instagram.com/indian.kitchen_/` |
| TikTok    | `@ikthemedining` → `https://www.tiktok.com/@ikthemedining` |
| Facebook  | Indian Kitchen → `https://www.facebook.com/indiankitchenrestaurant/` |
| WhatsApp  | `+94 117 112 334` → `https://wa.me/94117112334` |

---

## FINAL QUALITY CHECKLIST (AI Agent Must Verify Before Handing Off)

- [ ] All 6 brand colors applied consistently throughout all sections
- [ ] No generic section headings used anywhere
- [ ] Reservation form encodes and opens WhatsApp correctly
- [ ] Franchise form encodes and opens WhatsApp correctly
- [ ] Careers form submits correctly
- [ ] QR Code generates correctly pointing to /menu
- [ ] WhatsApp floating button visible on all pages
- [ ] All 3 social media links open in new tab
- [ ] Menu page has all categories and items with prices
- [ ] Blog page has 5 placeholder posts with full content
- [ ] Careers page has 4 job listings + general form
- [ ] Site is fully responsive from 320px to 1920px
- [ ] All images use next/image with alt text
- [ ] Smooth scroll animations on all sections
- [ ] Footer complete with all columns and copyright line
- [ ] Franchise page exists at `/franchise` as dedicated page
- [ ] Google Maps embed showing 357 R.A. De Mel Mawatha, Colombo 03

---

*This prompt was prepared for Indian Kitchen Theme Dining by HabiGo 360, Jaipur.*
*All brand information sourced from the official Indian Kitchen brand presentation (April 2026) and verified public sources including TripAdvisor, Facebook, Instagram, and Uber Eats.*
