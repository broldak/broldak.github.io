# Brutalist Gradient Style Pass

A bold, architectural redesign of broldak.github.io. Identity comes from color blocking, strong typography, and intentional layout — no animation.

## Color System

### Base
- Background gradient: `#1a1033` (deep indigo) to `#0d0d0d` (near-black)

### Section Bands
Full-bleed color blocks that give each section its own "room":
- **Deep teal** (`#0f2b2b`) — used for "Currently" experience band on home
- **Muted burgundy** (`#2b0f1a`) — used for "Previously" experience band on home
- **Dark slate** (`#1a1a2e`) — used for alternating blog rows and footer

### Accent
- **Burnt orange** (`#e87040`) — links, active states, key UI elements

### Text
- **White** (`#ffffff`) — headings
- **Muted zinc** (`#d4d4d8`) — body text, secondary content

## Typography

### Fonts
- **Headings:** Anybody (Google Fonts), loaded via `<link>` tag
- **Body / Labels:** Instrument Sans (Google Fonts), loaded via `<link>` tag

### Scale
| Element | Font | Weight | Size | Tracking | Other |
|---------|------|--------|------|----------|-------|
| Page titles | Anybody | Extra-bold (800) | 5xl-6xl | -0.02em | — |
| Section labels | Instrument Sans | Regular | xs/sm | 0.15em | Uppercase, muted zinc |
| Body text | Instrument Sans | Regular (400) | lg | Normal | Relaxed line-height |
| Links | Instrument Sans | Bold (700) | Inherit | Normal | Burnt orange, underline on hover |

## Layout

### Global
- Max-width content container (`max-w-5xl`) inside full-bleed color sections
- Left-aligned by default — no centering except on detail page reading columns
- Generous vertical padding on all sections (`py-16` to `py-24`)

### Nav
- Full-width bar
- Left side: "Brian Oldak" as a bold wordmark (Anybody, bold, ~xl), links to home
- Right side: nav links (Home, Experience, Blog) in Instrument Sans
- Active link: white, non-active: muted zinc, hover: burnt orange

### Home Page
**Hero section** (base gradient background):
- Name "Brian Oldak" in 6xl Anybody, extra-bold, left-aligned
- Tagline below: "software engineering manager, cyclist, and karaoke enthusiast" in muted zinc, lg
- Links within tagline styled in burnt orange

**Experience bands** (stacked below hero):
- Deep teal full-bleed band:
  - "CURRENTLY" label (uppercase, wide tracking, xs, muted zinc)
  - Role: "Engineering Manager @ Confluent" — title in white, company link in burnt orange
- Burgundy full-bleed band:
  - "PREVIOUSLY" label
  - Swantide and LinkedIn roles stacked, same treatment

### Experience Listing Page
- Page title "Experience" in 5xl, left-aligned
- Each experience is a full-width row with a bottom border
- Title (bold, large) on the left, date range on the right in muted zinc
- Bottom border in a subtle gray

### Blog Listing Page
- Page title "Blog" in 5xl, left-aligned
- Rows alternate between base background and dark slate (`#1a1a2e`)
- Each row: title (bold, 2xl) and excerpt on the left, date on the right
- "Read More" link in burnt orange

### Blog Post / Experience Detail Pages
- Narrow reading column: `max-w-2xl`, centered horizontally
- Back link top-left in burnt orange
- Title in 5xl Anybody
- Markdown content rendered with existing markdown-styles, updated to use new type scale

### Footer
- Full-bleed dark slate (`#1a1a2e`) background band
- Social icons (GitHub, LinkedIn) at `w-8 h-8`, left-aligned
- Small copyright or site credit text on the right in muted zinc

## Files to Modify

| File | Changes |
|------|---------|
| `app/globals.css` | New CSS variables, updated base styles, section band utility classes |
| `app/layout.tsx` | Add Google Fonts links (Anybody, Instrument Sans), update body classes |
| `tailwind.config.ts` | Add custom colors, font families, letter-spacing values |
| `app/page.tsx` | Restructure to hero + color-blocked experience bands, left-align |
| `app/components/navigation.tsx` | Wordmark left / links right layout, new active styling |
| `app/components/footer.tsx` | Dark slate band, larger icons, left-aligned |
| `app/components/experience.tsx` | Update styling to match new type/color system |
| `app/blog/page.tsx` | Alternating row backgrounds, asymmetric title/meta layout |
| `app/blog/[slug]/page.tsx` | Narrow centered reading column, updated title size |
| `app/experience/page.tsx` | Updated row styling, left-aligned |
| `app/experience/[slug]/page.tsx` | Narrow centered reading column, updated title size |
| `app/components/markdown-styles.module.css` | Update to match new type scale |

## What This Does NOT Include

- No animations or transitions (beyond basic link hover underline)
- No new pages or routes
- No new dependencies (fonts loaded via CDN)
- No changes to content or markdown files
- No changes to the data layer (`lib/api.ts`, `lib/markdownToHtml.ts`)
