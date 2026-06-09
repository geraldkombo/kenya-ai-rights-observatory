# Kenya Digital Rights Risk Atlas

Mapping surveillance infrastructure, data privacy risks, and digital rights across Kenya's 47 counties. A civic technology tool for civil society, researchers, and advocates.

**Live:** https://geraldkombo.github.io/kenya-ai-rights-observatory/

## Features

- **Choropleth map** — 47 counties color-coded by Digital Rights Risk Score (DRRS) using MapLibre GL JS with TopoJSON boundaries (60KB)
- **Data explorer** — Sortable, filterable table of all 47 counties across 5 risk dimensions with 3-year trend sparklines (2024–2026)
- **County briefs** — Per-county printable brief with DRRS breakdown, key indicators, and neighbouring county links
- **Compare tool** — Side-by-side radar chart comparison with geographic neighbour context
- **Advocacy toolkit** — FOIA templates under Article 35 of the Constitution + ODPC complaint templates under Section 34 DPA, with escalation pathway guide
- **47 embed routes** — Lightweight iframe-ready pages at `/embed/mombasa`, `/embed/nairobi`, etc. for CSO syndication
- **WhatsApp share** — Client-side share card generated with html2canvas + Web Share API
- **Offline PWA** — Service worker pre-caches HTML shell, TopoJSON data, and map tiles for field use without connectivity

## Architecture

| Layer | Stack |
|---|---|
| Framework | Next.js 16 (static export via `output: "export"`) |
| Styling | Tailwind CSS v4 with `@theme` design tokens |
| Mapping | MapLibre GL JS + Carto Positron tiles |
| Data compression | TopoJSON (client-side parsing via topojson-client) |
| PWA | Custom service worker (cache-first HTML + stale-while-revalidate JS) |
| Deployment | GitHub Pages via `gh-pages` branch |

## Routes (57 total)

- `/` — Home with map, search, insights dashboard
- `/explore` — Sortable data table with trend sparklines
- `/compare` — Two-county comparison with radar charts
- `/brief?id=X` — Per-county printable brief
- `/advocacy` — FOIA templates + ODPC complaint + escalation pathway
- `/method` — Methodology
- `/dua` — Data sources
- `/embed/[county]` — 47 static embed routes

## DRRS Formula

Digital Rights Risk Score (0–100):

`DRRS = (Surveillance × 0.25) + (1 − InternetHealth × 0.25) + (DataPrivacy × 0.20) + (Biometric × 0.10) + (PlatformImpact × 0.20)`

## Local Development

```bash
npm install
npm run dev     # Turbopack dev server
npm run build   # Static export → ./out
```

## Historical Data

Each county has estimated year-over-year data (2024–2026) generated from the 2026 baseline using dimension-specific growth rates (8–25% YoY for surveillance-related metrics). Internet shutdown hours reflect documented events: elevated in 2024 (Finance Bill protests, 1.3× multiplier, 1.45× for opposition strongholds), suppressed in 2025.

## Accessibility

- WCAG 2.1 AA compliant: semantic landmarks, `aria-live` on dynamic content, keyboard-operable table sort, `role="combobox"` search with full keyboard navigation
- All interactive elements ≥ 44px touch targets
- `*:focus-visible` orange outline on all focusable elements
- Print stylesheet: removes navigation, renders high-contrast A4-compatible output

## Offline PWA

The service worker (`/sw.js`) pre-caches:
- All 7 HTML shell routes
- TopoJSON boundary data (60KB)
- Manifest, icons, OG image
- Map tiles (cache-first, background refresh)
- JS/CSS chunks (network-first, cached on first visit)

## License

MIT
