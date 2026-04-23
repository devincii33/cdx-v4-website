# CLAUDE.md — Project Instructions for Claude Code

\---

## Project Overview

**Project:** Creative Direxion Website Redesign
**Type:** Static HTML site (5 pages)
**Status:** Active development
**URL:** creativedirexion.com

**What it is:** A design studio website showcasing branding and creative services. The goal is to convert visitors into consultation inquiries.

**What it does:** Educates visitors on services, builds trust through portfolio, and drives them toward "Get in touch" CTAs.

\---

## Tech Stack

* **Languages:** HTML, CSS, JavaScript (vanilla)
* **CSS approach:** Vanilla CSS (no Tailwind, no SCSS)
* **Build tool:** None (static site)
* **Deployment:** GitHub → Netlify (auto-deploy on push)
* **Version control:** Git + GitHub

\---

## Pages \& Purpose

1. **Home** — Hero moment. Feature Creative Direxion's value prop and 3 featured services. Drive to Services, Portfolio, or Contact.
2. **Services** — Deep dive into 4 core services with descriptions. Each service gets its own section with explanation and benefits.
3. **About** — Personal story of Devin and Creative Direxion philosophy. Build trust and connection.
4. **Portfolio** — 6 featured project cards with titles and descriptions. Visual showcase of work quality.
5. **Contact** — Contact form + contact info (phone, email). Simple, frictionless endpoint.

\---

## Key Files to Reference

Before writing any code, always reference:

* **DESIGN.md** — Design tokens (colors, fonts, spacing, components). Never hardcode values. Use CSS custom properties.
* **CONTENT.md** — All page copy and content snippets. Reference for accurate messaging and tone.

\---

## Site Structure

```
creativedirexion/
├── index.html              ← Homepage
├── services.html           ← Services page
├── about.html              ← About page
├── portfolio.html          ← Portfolio page
├── contact.html            ← Contact page
├── css/
│   └── styles.css          ← Main stylesheet (all pages)
├── js/
│   └── main.js             ← Interactivity (nav, animations, form)
├── images/
│   └── \[all site images]
├── DESIGN.md               ← Design system
├── CONTENT.md              ← Page content
└── CLAUDE.md               ← This file
```

\---

## Build \& Run

```bash
# No build step required — static site.
# Open index.html in browser to preview locally.

# To run a local server (optional):
npx live-server

# Deploy:
git push origin main  ← Triggers auto-deploy to Netlify
```

\---

## Code Conventions

### HTML

* Use semantic HTML (section, article, nav, main, footer)
* Every page includes viewport meta tag for responsive design
* All images have descriptive alt attributes
* Follow page structure pattern from CONTENT.md

### CSS

* Use CSS custom properties from DESIGN.md — never hardcode colors, fonts, spacing
* Mobile-first approach — base styles for mobile, media queries for larger screens
* Use classes for styling, not IDs
* Keep specificity low — avoid deep nesting
* One stylesheet (css/styles.css) for entire site

### JavaScript

* Vanilla JS only — no frameworks or libraries
* Use `const` by default, `let` when reassignment needed
* Add event listeners with `addEventListener`, not inline onclick
* Keep functions small and focused

\---

## Design System Usage

Before writing any visual code:

1. Open DESIGN.md
2. Check colors, fonts, spacing, component styles
3. Use CSS custom properties (--color-accent, --space-lg, etc.)
4. Never hardcode hex colors, font sizes, or padding values
5. If a value isn't in DESIGN.md, add it there first

\---

## Navigation \& Page Flow

**Fixed navigation (all pages):**

* Home | Services | About | Portfolio | Contact
* Logo on left, links on right, "Contact" as orange CTA button
* Mobile: Hamburger menu → full-screen overlay

**Footer (all pages):**

* Dark background (#3e4244), light text
* Links to all 5 pages
* Contact info (phone, email)
* Social links (LinkedIn, Instagram, Behance, Pinterest)
* Copyright: "© 2026 Creative Direxion. All rights reserved."

\---

## Homepage Structure (from Folioblox inspiration)

1. **Hero** — Tagline, main heading, description, 3 featured services (numbered #01–#03)
2. **Logo Marquee** — "Trusted by brands I've helped shape" + scrolling client logos
3. **About Section** — "Behind the work" label, heading, description, CTA
4. **Featured Projects** — 3 portfolio cards with images, titles, descriptions, "View" links
5. **Approach Section** — "How we approach projects" + 3–4 approach pillars (cards)
6. **Services Preview** — 3 featured services with descriptions (preview, link to Services page)
7. **Final CTA** — "Let's give your brand the visual edge" + "Get in touch" button

\---

## Services Page Structure

1. **Hero** — Heading, intro paragraph explaining service-focused approach
2. **4 Service Sections** — Each service gets:

   * Service name
   * Description
   * Key benefits (bullet list or short paragraphs)
   * Optional image
3. **Final CTA** — "Want greater visual impact?" + "Get in touch" button

\---

## About Page Structure

1. **Hero** — Heading "About" + tagline
2. **Bio Section** — Devin's story (from CONTENT.md), personal photo
3. **Philosophy Section** — Creative Direxion's approach and values
4. **CTA Section** — "Let's work together" + "Get in touch" button
5. **Services Overview** — Quick preview of 4 core services (optional)

\---

## Portfolio Page Structure

1. **Hero** — Heading "Portfolio" + tagline
2. **Project Grid** — 6 featured project cards:

   * Project image (4:3 aspect ratio)
   * Project title
   * Short description
   * "View" link (secondary button style)
3. **Final CTA** — "Impressed?" + "Get in touch" button

\---

## Contact Page Structure

1. **Hero** — Heading "Get in Touch" + brief intro
2. **Contact Form** — Fields: Name, Email, Message, Service Type (dropdown), Submit button
3. **Contact Info Block** — Phone, email, social links
4. **Optional:** Embed Google Map or simple address display

\---

## Responsive Design

* **Mobile-first approach** — write base styles for mobile, add media queries
* **Breakpoints:** 768px (tablet), 1024px (desktop), 1440px (wide)
* **Test at:** 375px, 768px, 1024px, 1440px minimum
* **Images:** Always `max-width: 100%; height: auto;`
* **Fluid typography:** Use `clamp()` values from DESIGN.md type scale
* **Touch targets:** Minimum 44×44px for buttons/links on mobile
* **No horizontal scroll:** Must be fully responsive at all viewports

\---

## Accessibility Standards

* **Color contrast:** WCAG AA minimum (4.5:1 body, 3:1 large text)
* **Heading hierarchy:** H1 → H2 → H3, never skip levels
* **Form inputs:** All have associated `<label>` elements
* **Focus styles:** Visible outline on all interactive elements
* **Alt text:** Every image has descriptive alt (decorative images use `alt=""`)
* **Keyboard navigation:** Site fully navigable via keyboard alone

\---

## Animations \& Scroll Effects

### Scroll-Triggered Animations

* All major content sections fade in and slide up slightly as they enter viewport
* Stagger effect: items in grids/lists appear one after another with \~100ms delay
* Timing: 0.7s duration, easing: cubic-bezier(0.4, 0, 0.2, 1)
* Threshold: trigger when 15% of element is visible

### Hover Effects

* **Cards:** Lift up 6px, enhance shadow (0.35s ease)
* **Buttons:** Background/border color change (0.35s ease)
* **Links:** Color change to accent (#ff8200) (0.35s ease)
* **Navigation links:** Color change on hover (0.35s ease)

### Page Entrance

* Hero section: Fade in immediately (no scroll trigger)
* Hero content items: Cascade in with 0.2s stagger

### Logo Marquee

* Auto-scroll: infinite linear animation, \~35s per full loop
* Direction: Left to right
* Pause on hover: Optional

### Navigation

* Backdrop blur effect when fixed
* Subtle fade-in on initial page load

### Form (Contact Page)

* Input focus: Blue outline/border change (0.3s ease)
* Submit button: Hover color change (0.3s ease)
* Success message: Fade in (0.5s ease)

### Implementation Notes

* Use CSS `@keyframes` and `animation` property for auto-scroll (marquee)
* Use Intersection Observer API for scroll-triggered animations (fade-in-up)
* Keep animations subtle — enhance, don't distract
* All animations use --transition variable: 0.35s cubic-bezier(0.4, 0, 0.2, 1)
* Respect `prefers-reduced-motion` for accessibility

\---

## Things Claude Code Should NEVER Do

* Never hardcode colors — use CSS custom properties from DESIGN.md
* Never modify DESIGN.md or CONTENT.md without being asked
* Never use inline styles
* Never skip semantic HTML
* Never add external libraries (no jQuery, no Bootstrap, no Tailwind)
* Never ignore responsive breakpoints
* Never deploy to production without confirming

\---

## Things Claude Code Should ALWAYS Do

* Always reference DESIGN.md before writing CSS
* Always check CONTENT.md for accurate copy before building pages
* Always ensure pages are fully responsive (mobile, tablet, desktop)
* Always maintain consistent navigation and footer across all pages
* Always test links and verify no 404s
* Always add descriptive alt text to images
* Always ask for clarification on ambiguous requirements

\---

## Known Issues \& Quirks

* None yet — document as they arise

\---

## Session Workflow

For each page or feature:

1. **Read** — Check DESIGN.md and CONTENT.md
2. **Plan** — Describe what you'll build
3. **Build** — Write HTML, CSS, JS
4. **Verify** — Test in browser, check responsive, verify links, check console for errors
5. **Review** — Confirm result matches design system and is accessible
6. **Commit** — Commit with clear message

\---

## External Resources

* **Design tokens:** DESIGN.md (in project root)
* **Content copy:** CONTENT.md (in project root)
* **Fonts:** https://fonts.google.com (Plus Jakarta Sans)
* **Icons:** Lucide icons or Font Awesome (if needed)
* **Deployment docs:** https://docs.netlify.com

\---

## Brand Voice \& Tone

From CONTENT.md and Creative Direxion's current site:

* **Confident but not arrogant** — speak from authority, not ego
* **Strategic focus** — emphasize thinking, not just aesthetics
* **Results-driven** — mention business impact, not just visual beauty
* **Authentic** — personal, direct, conversational
* **Professional** — clear, no jargon, no fluff

**Repeated phrases to maintain:**

* "Visual impact" (brand promise)
* "Strategic design" (approach)
* "Drive recognition and results" (outcomes)
* "One-on-one personal attention" (Devin's differentiator)

