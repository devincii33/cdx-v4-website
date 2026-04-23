# DESIGN.md — Creative Direxion Design System

---

## 1. Brand Identity

**Brand name:** Creative Direxion
**Tagline:** Pure Visual Impact
**Industry:** Creative branding and design studio
**URL:** creativedirexion.com

**Brand personality:**
- Strategic
- Professional
- Results-driven
- Authentic
- Confident

**Target audience:**
- Ambitious mid-market B2B companies (30–55 years old)
- Creative entrepreneurs and startups
- Businesses seeking visual differentiation and brand clarity

**Competitive positioning:**
We stand out through strategic thinking paired with exceptional visual execution. We don't just create beautiful designs—we ensure they drive business results.

---

## 2. Color System

### 2.1 Core Colors

| Role                  | Hex         | Usage                                              |
|-----------------------|-------------|-----------------------------------------------------|
| Background (primary)  | `#FFFFFF`   | Main page background — clean, bright              |
| Background (elevated) | `#F8F8F8`   | Cards, sections — subtle lift                     |
| Background (surface)  | `#F1F1F1`   | Secondary cards, hover states                     |
| Border / divider      | `#E5E5E5`   | Section dividers, card borders                    |
| Text primary          | `#3e4244`   | Headings, primary body text                       |
| Text secondary        | `#6B6D6F`   | Body paragraphs, descriptions                     |
| Text tertiary         | `#999999`   | Labels, metadata, supporting text                 |
| Accent (primary)      | `#ff8200`   | Buttons, highlights, key accents                  |
| Accent (hover)        | `#e67400`   | Button hover states                               |
| Accent (light)        | `#FFF3E6`   | CTA section background, subtle highlights         |
| Footer background     | `#3e4244`   | Footer section                                     |
| Footer text           | `#CCCCCC`   | Footer body text                                   |
| Footer heading        | `#FFFFFF`   | Footer headings, brand name                        |

### 2.2 Color Usage Rules

- **Light theme** — white backgrounds with subtle gray elevations
- **Accent color (#ff8200)** — reserved for CTAs, eyebrow labels, service numbers, key highlights
- **Text hierarchy** — primary (#3e4244) for headings, secondary (#6B6D6F) for body, tertiary (#999999) for supporting text
- **Contrast** — all text meets WCAG AA (4.5:1 body, 3:1 large text)
- **Footer** — dark (#3e4244) background with light text and orange hover states on links
- **CTA sections** — use light orange (#FFF3E6) background for subtle warmth

---

## 3. Typography

### 3.1 Font Family

| Role        | Font Name           | Source         | Fallback Stack   |
|-------------|---------------------|----------------|------------------|
| Display     | Plus Jakarta Sans   | Google Fonts   | `sans-serif`     |
| Headings    | Plus Jakarta Sans   | Google Fonts   | `sans-serif`     |
| Body        | Plus Jakarta Sans   | Google Fonts   | `sans-serif`     |
| Navigation  | Plus Jakarta Sans   | Google Fonts   | `sans-serif`     |

**Single font family throughout** — Plus Jakarta Sans at different weights and sizes.

### 3.2 Type Scale

| Level         | Size (CSS)                             | Weight | Line Height | Usage                        |
|---------------|----------------------------------------|--------|-------------|------------------------------|
| Display       | `clamp(3rem, 6vw, 5.5rem)`            | 800    | 1.05–1.1    | Hero headlines               |
| H1            | `clamp(2rem, 4vw, 3.5rem)`            | 700    | 1.15        | Page titles                  |
| H2            | `clamp(1.75rem, 3.5vw, 2.75rem)`      | 700    | 1.2         | Section headings             |
| H3 / H4       | `clamp(1.125rem, 2vw, 1.5rem)`        | 700    | 1.25        | Card titles, sub-headings    |
| Eyebrow       | `0.75rem–0.875rem` (12–14px)          | 600    | 1.4         | Section labels, uppercase    |
| Body          | `1rem` (16px)                         | 400    | 1.7         | Paragraphs, descriptions     |
| Body small    | `0.875rem` (14px)                     | 400    | 1.6         | Card descriptions            |
| Caption       | `0.75rem` (12px)                      | 400    | 1.5         | Metadata, fine print         |
| Nav links     | `0.875rem` (14px)                     | 500    | 1           | Navigation items             |
| Button        | `0.85rem–0.9rem`                      | 600    | 1           | Button text                  |
| Service #     | `clamp(1rem, 2vw, 1.25rem)`           | 700    | 1           | Service numbers (#01, #02)   |

### 3.3 Typography Rules

- **Single font family** — Plus Jakarta Sans throughout, no serif or mono fonts
- **Weight variation** — use 600–800 for headings, 400–500 for body
- **Eyebrow labels** — uppercase, letter-spacing `0.1em`, color `#ff8200`
- **Headings** — tight line height (1.05–1.15) for impact
- **Body text** — max-width ~65ch, line-height 1.7 for readability
- **No italics** — emphasis through weight change only

---

## 4. Spacing System

### 4.1 Base Unit & Scale

**Base unit:** `8px`

| Token    | Value    | Usage                                          |
|----------|----------|------------------------------------------------|
| xs       | `8px`    | Tight gaps, icon padding                       |
| sm       | `12px`   | Small internal padding                         |
| md       | `16px`   | Default internal padding                       |
| lg       | `24px`   | Card padding, content gaps                     |
| xl       | `32px`   | Between elements within section                |
| 2xl      | `48px`   | Between component groups                       |
| 3xl      | `64px`   | Section padding (mobile)                       |
| 4xl      | `96px`   | Section padding (tablet)                       |
| 5xl      | `128px–160px` | Section padding (desktop) — generous    |

### 4.2 Spacing Rules

- **Section padding:** `clamp(80px, 12vw, 160px)` top and bottom — generous breathing room
- **Container side padding:** `clamp(20px, 5vw, 40px)`
- **Card internal padding:** `24px–32px`
- **Grid gap:** `24px`

---

## 5. Layout & Grid

### 5.1 Container

```
Max width:         1200px
Side padding:      clamp(20px, 5vw, 40px)
Centering:         margin-inline: auto
```

### 5.2 Common Layouts

**Hero (Home):** Two-column (text left, image right on desktop; stacked on mobile)
**Services Grid:** 3 cards on desktop, 2 on tablet, 1 on mobile
**Portfolio Grid:** 3 cards on desktop, 2 on tablet, 1 on mobile
**Section Patterns:** Alternating image + text layout (image left, then right)

### 5.3 Breakpoints

| Name       | Min Width  | Changes                                     |
|------------|------------|---------------------------------------------|
| Mobile     | `0px`      | Single column, stacked, hamburger menu      |
| Tablet     | `768px`    | 2-column where appropriate                  |
| Desktop    | `1024px`   | Full multi-column, max-width kicks in       |
| Wide       | `1440px`   | Extra breathing room                        |

---

## 6. Component Styles

### 6.1 Buttons

#### Primary CTA Button ("Get in Touch")
```
Background:        #ff8200
Text color:        #FFFFFF
Font weight:       600
Padding:           14px 32px
Border radius:     50px (pill)
Border:            none
Hover:             #e67400 (darken)
Transition:        0.35s ease
```

#### Secondary Button ("View")
```
Background:        transparent
Text color:        #ff8200
Border:            1.5px solid #ff8200
Padding:           8px 20px
Border radius:     50px
Hover:             Background fills #ff8200, text #FFFFFF
Transition:        0.35s ease
```

### 6.2 Cards

```
Background:        #FFFFFF
Border:            1px solid #E5E5E5
Border radius:     12px
Padding:           24px
Box shadow:        0 4px 12px rgba(62, 66, 68, 0.08)
Hover shadow:      0 16px 48px rgba(62, 66, 68, 0.1)
Hover transform:   translateY(-6px)
Transition:        0.35s ease
```

### 6.3 Navigation

```
Position:          Fixed top
Background:        rgba(255, 255, 255, 0.9) with backdrop-blur(16px)
Height:            72px
Border bottom:     1px solid #E5E5E5
Logo color:        #3e4244, ® symbol in #ff8200
Link color:        #6B6D6F default, #3e4244 on hover
Active indicator:  Text color change to #3e4244, font-weight 600
CTA button:        Orange (#ff8200) filled, white text
Mobile:            Hamburger → full-screen overlay
Z-index:           1000
```

### 6.4 Footer

```
Background:        #3e4244
Text color:        #CCCCCC for body
Heading color:     #FFFFFF
Link hover:        #ff8200
Padding:           72px top, 32px bottom
Border top:        1px solid rgba(255, 255, 255, 0.1)
Layout:            4-column on desktop, 1 on mobile
```

### 6.5 Eyebrow Labels

```
Font size:         12–14px
Font weight:       600
Letter spacing:    0.1em
Text transform:    Uppercase
Color:             #ff8200
Margin bottom:     12px before heading
```

### 6.6 Section Patterns

**Alt background:** Every other section uses `#F8F8F8` for visual rhythm
**Image treatment:** All images have rounded corners, drop shadow for depth
**Image + Text:** 50/50 split on desktop, stack on mobile

---

## 7. Media & Imagery

### 7.1 Image Style

- **Photography:** Professional, clear, represents brand/work quality
- **Illustrations:** Not used (photography/work samples only)
- **Color treatment:** Full color, natural tones, no heavy filters

### 7.2 Image Sizing & Aspect Ratios

| Context          | Aspect Ratio | Treatment                     |
|------------------|--------------|-------------------------------|
| Hero image       | 3:4 portrait | Rounded top corners, shadow   |
| Service image    | 4:3 or 1:1   | `object-fit: cover`, rounded  |
| Portfolio card   | 4:3          | Rounded corners, shadow       |
| Logo             | N/A          | SVG preferred                 |

### 7.3 Image Performance

- Format: WebP with JPEG fallback
- SVG for logos and icons
- Lazy load: `loading="lazy"` for below-fold images
- Max size: 200KB content images, 500KB hero images
- Alt text: Every image has descriptive alt text

---

## 8. Effects & Animation

### 8.1 Border Radius

| Element       | Radius    |
|---------------|-----------|
| Buttons       | `50px`    |
| Cards         | `12px`    |
| Images        | `12–16px` |
| Large images  | `24px`    |

### 8.2 Transitions & Animation

```
Default duration:    0.35s
Default easing:      cubic-bezier(0.4, 0, 0.2, 1)
Card hover:          translateY(-6px), box-shadow enhance
Button hover:        Background/border color swap
Link hover:          Color change
Scroll animations:   Fade-in-up on scroll (subtle, staggered)
```

### 8.3 Shadows

| Level    | Value                                  | Usage              |
|----------|----------------------------------------|---------------------|
| Subtle   | `0 1px 3px rgba(62, 66, 68, 0.06)`    | Cards at rest       |
| Medium   | `0 4px 12px rgba(62, 66, 68, 0.08)`   | Cards, inputs       |
| Large    | `0 16px 48px rgba(62, 66, 68, 0.1)`   | Card hover, modals  |

---

## 9. Accessibility

- **Color contrast:** WCAG AA minimum (4.5:1 body, 3:1 large)
- **Focus indicators:** Visible outline on all interactive elements
- **Font minimum:** 14px body text, 12px labels
- **Alt text:** Required on all images
- **Keyboard navigation:** All interactive elements accessible via Tab
- **Semantic HTML:** Proper heading hierarchy (H1 → H2 → H3)

---

## 10. Responsive Behavior

- **Approach:** Mobile-first — base styles for mobile, media queries for larger
- **Viewport meta:** Always included
- **Fluid typography:** Use `clamp()` values from type scale
- **Images:** `max-width: 100%; height: auto;`
- **Touch targets:** Minimum 44×44px on mobile
- **No horizontal scroll:** Pages must be fully responsive

---

## 11. CSS Custom Properties

```css
:root {
  /* ── Colors ── */
  --color-bg-primary:      #FFFFFF;
  --color-bg-elevated:     #F8F8F8;
  --color-bg-surface:      #F1F1F1;
  --color-border:          #E5E5E5;
  --color-border-subtle:   #EEEEEE;
  --color-text-primary:    #3e4244;
  --color-text-secondary:  #6B6D6F;
  --color-text-tertiary:   #999999;
  --color-accent:          #ff8200;
  --color-accent-hover:    #e67400;
  --color-accent-light:    #FFF3E6;
  --color-footer-bg:       #3e4244;
  --color-footer-text:     #CCCCCC;
  --color-footer-heading:  #FFFFFF;

  /* ── Typography ── */
  --font-primary:          'Plus Jakarta Sans', sans-serif;

  /* ── Spacing ── */
  --space-xs:              8px;
  --space-sm:              12px;
  --space-md:              16px;
  --space-lg:              24px;
  --space-xl:              32px;
  --space-2xl:             48px;
  --space-3xl:             64px;
  --space-4xl:             96px;
  --space-5xl:             128px;
  --section-padding:       clamp(80px, 12vw, 160px);
  --container-padding:     clamp(20px, 5vw, 40px);

  /* ── Layout ── */
  --container-max:         1200px;

  /* ── Borders & Radius ── */
  --radius-md:             12px;
  --radius-lg:             16px;
  --radius-pill:           50px;

  /* ── Shadows ── */
  --shadow-subtle:         0 1px 3px rgba(62, 66, 68, 0.06);
  --shadow-medium:         0 4px 12px rgba(62, 66, 68, 0.08);
  --shadow-large:          0 16px 48px rgba(62, 66, 68, 0.1);

  /* ── Transitions ── */
  --transition:            0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 12. Do's and Don'ts

### Do
- Use #ff8200 strategically — CTA buttons, eyebrow labels, accents only
- Keep generous whitespace — let the site breathe
- Use dark text (#3e4244) on light backgrounds
- Stack sections with alternating backgrounds (#FFFFFF and #F8F8F8)
- Add subtle shadows to cards for depth

### Don't
- Don't use pure black (#000000) — use #3e4244 instead
- Don't center-align body paragraphs — left-align always
- Don't use more than one sans-serif font
- Don't add decorative elements without purpose
- Don't force orange into places it doesn't belong — reserve for CTAs and highlights
