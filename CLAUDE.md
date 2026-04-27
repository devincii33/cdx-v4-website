# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview

**Project:** Creative Direxion Website
**Type:** Static HTML site (5 pages)
**Status:** Active development
**URL:** creativedirexion.com
**Owner:** Devin — solo designer/founder. New to CLI and Git. Always include brief "good to learn" explanations alongside actions.

**Goal:** Convert visitors into consultation inquiries through strategic brand presentation.

---

## Deployment

```bash
# No build step — static site.
git add <files>
git commit -m "description"
git push origin main   # triggers GitHub Pages auto-deploy (~1 min)
```

**Host:** GitHub Pages (not Netlify). Repo: `devincii33/cdx-v4-website`.
After pushing, users must hard-refresh (`Ctrl+Shift+R`) to bypass browser cache.

---

## Key Reference Files

Always read these before writing any code:

- **docs/DESIGN.md** — All CSS custom properties (colors, spacing, typography, shadows, radii). Never hardcode values.
- **docs/CONTENT.md** — All page copy. Use for accurate messaging and tone.

---

## Architecture

### File Structure
```
├── index.html / services.html / about.html / portfolio.html / contact.html
├── css/styles.css       ← Single stylesheet for all pages
├── js/main.js           ← Nav hamburger, scroll reveal, contact form
├── images/              ← All site images (see naming conventions below)
└── docs/
    ├── DESIGN.md        ← CSS custom properties reference
    └── CONTENT.md       ← All page copy and messaging
```

### CSS Architecture (`css/styles.css`)
Single stylesheet structured in this order:
1. CSS custom properties (`:root`)
2. Reset & base
3. Utility classes (`.container`, `.eyebrow`, `.btn-primary`, `.btn-secondary`, `.img-fill`)
4. Navigation (fixed, backdrop-blur, hamburger overlay)
5. Hero (`.hero`, `.hero-home`, `.hero-inner-page`, `.hero-bg`, `.hero-overlay`)
6. Marquee
7. Section patterns & cards (`.service-card`, `.portfolio-card`, `.approach-card`)
8. Page-specific layouts (bio grid, timeline, contact grid, service detail)
9. CTA section (`.cta-section` — shared across all pages)
10. Footer
11. Scroll animations (`.reveal`, `.hero-animate`)

### Key CSS Patterns
- **Hero images:** `<img class="hero-bg" src="images/..." alt="" aria-hidden="true">` — absolutely positioned, `object-fit: cover`, sits behind `.hero-overlay`
- **Hero overlay:** `.hero-overlay` uses `linear-gradient(135deg, rgba(20,22,24,0.72) → rgba(62,66,68,0.50))` for text readability
- **CTA section background:** Uses `hero-contact.jpg` via `background-image` in CSS with the same overlay applied via `::before`. `.cta-section .container` has `position: relative; z-index: 1` to sit above the overlay.
- **Scroll animations:** `.reveal` class + Intersection Observer in `main.js`. Add `.reveal-delay-1` through `.reveal-delay-4` for stagger.
- **Image containers:** Parent holds aspect ratio + `background: var(--color-bg-surface)` as placeholder. `<img class="img-fill">` fills it with `object-fit: cover`.

### JavaScript (`js/main.js`)
Three self-contained IIFEs:
1. Nav scroll shadow
2. Hamburger + mobile overlay (closes on link click or Escape)
3. Contact form submit (simulated — replace with real endpoint)

Scroll reveal uses `IntersectionObserver` with `threshold: 0.15`.

---

## Image Naming Conventions

All images live in `images/`, split into three subfolders:

**`images/hero/`** — Full-bleed hero backgrounds (16:9 except home which is 3:4 portrait)
| Filename | Page |
|---|---|
| `hero-devin.jpg` | Home — also used as CTA bg |
| `hero-services.jpg` | Services |
| `hero-about.jpg` | About |
| `hero-portfolio.jpg` | Portfolio |
| `hero-contact.jpg` | Contact — also used as CTA bg |

**`images/portfolio/`** — Portfolio project images (4:3)
| Filename | Used on |
|---|---|
| `portfolio-1.jpg` → `portfolio-3.jpg` | Home featured + Portfolio page |
| `portfolio-4.jpg` → `portfolio-6.jpg` | Portfolio page (not yet uploaded) |

**`images/content/`** — All other in-page images
| Filename | Notes |
|---|---|
| `about-devin.jpg` | 4:5 portrait |
| `approach-image.jpg` | 1:1 square |
| `service-1.jpg` → `service-4.jpg` | 4:3 — not yet uploaded |

File extension must match the `src` attribute exactly (`.jpg` ≠ `.png`).

---

## Shared Components

**Navigation and footer are manually duplicated across all 5 HTML files** — there is no templating system. Any nav/footer change must be made in all 5 files.

**CTA section** (`<section class="cta-section">`) appears on every page and is styled entirely from `css/styles.css` — one CSS change affects all pages.

---

## Marquee

- Label: "Creative Design Solutions"
- 7 items duplicated (14 total) for seamless loop
- Animation speed: `26s` linear infinite (`marqueeScroll` keyframe in CSS)
- Pauses on hover

---

## Code Rules

- No external libraries — vanilla HTML, CSS, JS only
- No inline styles
- All CSS values from `--custom-properties` in `docs/DESIGN.md`
- Semantic HTML throughout (`<section>`, `<article>`, `<nav>`, `<main>`, `<footer>`)
- All images: descriptive `alt` text; decorative images use `alt=""` + `aria-hidden="true"`
- Mobile-first CSS — base styles for mobile, `@media (min-width: 768px/1024px)` for larger
- `prefers-reduced-motion` respected in animation block

---

## Known Issues & Quirks

- Footer and nav are duplicated in all 5 HTML files — no templating
- Contact form submission is simulated (setTimeout) — needs a real backend or Netlify Forms when ready
- Portfolio page cards 4–6 still use placeholder images (`portfolio-4/5/6.jpg` not yet uploaded)
- `service-1.jpg` through `service-4.jpg` and `about-devin.jpg` and `approach-image.jpg` not yet uploaded
