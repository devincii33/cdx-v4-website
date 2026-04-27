# Creative Direxion — Website

Live site: [creativedirexion.com](https://devincii33.github.io/cdx-v4-website)

Strategic branding and marketing creative studio. This is the source code for the Creative Direxion website.

## Pages

| Page | File |
|---|---|
| Home | `index.html` |
| Services | `services.html` |
| About | `about.html` |
| Portfolio | `portfolio.html` |
| Contact | `contact.html` |

## Project structure

```
├── css/styles.css        Single stylesheet — all design tokens and components
├── js/main.js            Nav, scroll reveal, contact form
├── images/
│   ├── hero/             Full-bleed hero background images
│   ├── portfolio/        Portfolio project images
│   └── content/          Bio photo, service images, approach image
└── docs/
    ├── DESIGN.md         CSS custom properties and design tokens
    └── CONTENT.md        All page copy and messaging
```

## Deploying

Static site — no build step required.

```bash
git add <files>
git commit -m "your message"
git push origin main
```

GitHub Pages deploys automatically (~1 minute). Hard-refresh (`Ctrl+Shift+R`) to bypass browser cache.
