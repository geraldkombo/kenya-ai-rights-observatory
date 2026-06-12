# Kenya Digital Rights Risk Atlas — Gemini Prompt

You are a senior digital rights researcher and full-stack developer. Your task is to refine and complete the **Kenya Digital Rights Risk Atlas**, an open-source platform that maps surveillance infrastructure, internet health, and digital rights risks across Kenya's 47 counties.

## Project Overview

**Live URL:** https://geraldkombo.github.io/kenya-digital-rights-atlas/
**Stack:** Next.js 16 (static export) + MapLibre GL JS + Tailwind CSS 4 + TypeScript
**Scoring:** Digital Rights Risk Score (DRRS) — composite 0-100 index across 5 dimensions
**Target:** Pulitzer Center AI Accountability Fellowships (deadline Jul 12, 2026, $25,000)

## What Already Exists

The full project scaffold is built at `C:\Users\Rosemary\Downloads\New folder (5)\kenya-ai-rights-observatory\`. Existing files:

### Core Files
- `src/app/layout.tsx` — Root layout with Inter font, metadata
- `src/app/globals.css` — Tailwind v4 theme with brand colors
- `src/app/page.tsx` — Home page with map + dashboard + county details
- `src/app/method/page.tsx` — Methodology page (DRRS components, formula, data sources)
- `src/app/compare/page.tsx` — Side-by-side county comparison
- `src/app/dua/page.tsx` — Data Use Agreement page
- `src/app/not-found.tsx` — 404 page
- `next.config.ts` — Static export config with `output: 'export'`

### Components
- `src/components/Header.tsx` — Navigation header
- `src/components/MapView.tsx` — MapLibre GL JS map with county choropleth (CARTO tiles)
- `src/components/CountyDetails.tsx` — County detail panel with risk dimension bars
- `src/components/CountyRankings.tsx` — Top 5 / bottom 5 county rankings
- `src/components/InsightsDashboard.tsx` — Summary stats cards
- `src/components/ScoreLegend.tsx` — PGS color legend

### Data Layer
- `src/lib/types.ts` — TypeScript types (CountyRecord, DigitalRightsIndicators, DRSScore)
- `src/lib/data.ts` — All 47 counties with mock digital rights indicators
- `src/lib/scoring.ts` — DRRS computation (5 dimensions, weighted formula, color classes)
- `src/lib/county-names.ts` — County name matching utility

## What Needs to Be Done (Priority Order)

### 1. Real County Boundaries (Critical for Map)
The `public/data/boundaries.geojson` file is currently empty. The MapLibre map needs actual Kenya county boundary GeoJSON to render. Options:
- Download from IEBC/KNBS open data portals
- Use the same simplified boundaries file from the Kenya Health Equity Map project at `nairobi-health-equity-map/data/boundaries/counties_simplified.geojson`
- Generate a simplified TopoJSON that covers all 47 counties (county_code properties must match the IDs 1-47 in `src/lib/data.ts`)

### 2. PWA Icons
Create production-quality SVG icons at `public/icon.svg`, `public/icons/icon-192.svg`, and `public/icons/icon-512.svg`. Design:
- Brown (#78350F) background
- Cream (#FDFBF7) stylized map pin
- Orange (#EA580C) eye or surveillance camera symbol inside (not a medical cross — this is digital rights, not health)
- Must fit within maskable safe zone (central 80%)
- Update `public/manifest.json` with maskable icon purposes

### 3. PNG Generation Script
Write `scripts/generate-icons.mjs` using `sharp` to render the SVG icon at 192x192 and 512x512 PNG. Add a `prebuild` script to `package.json` that runs it.

### 4. OG Image
Create `public/og-image.svg` — 1200x630 social share image with:
- Brand colors and the project name
- A visual showing the 5 DRRS dimensions
- The PGS-style color spectrum bar

### 5. Data Quality & Realism
The mock data in `src/lib/data.ts` is reasonable but should be reviewed for internal consistency. For example:
- Nairobi has 35 AI systems and 18.5 CCTV/10K — plausible
- Turkana has 360 shutdown hours — plausible for a marginalized region
- Verify the counts align with known reports from CIPESA, Access Now, KICTANet

### 6. Additional Features (for Pulitzer Center application strength)
- **Printable county brief:** Add a `/brief` page (like KHEM) that generates a printable PDF advocacy brief for any county, with DRRS breakdown, key drivers, and recommendations
- **Search bar:** Add a search component to locate counties by name (reuse Fuse.js pattern from KHEM)
- **HowToUse component:** Reusable accordion explaining how to interact with the map
- **Error boundaries:** Graceful fallbacks for map load failures

### 7. CI/CD
- `.github/workflows/deploy.yml` — GitHub Actions to build and deploy to GitHub Pages
- `netlify.toml` — Alternative Netlify deployment config
- `public/_redirects` — SPA redirect for static hosting

### 8. Documentation
- `README.md` — Full project description, architecture, data sources, SDG alignment (SDG 16: Peace, Justice and Strong Institutions), privacy statement
- `LICENSE` — MIT license
- `CITATION.cff` — Citation metadata
- `CONTRIBUTING.md` — Contribution guide

### 9. Sustainability
- `package.json` scripts should include prebuild that copies data and generates icons
- Zero external service dependencies (no database, no server, no API keys)
- Static export must produce a fully self-contained `out/` directory

## Design System (Must Match KHEM Pattern)

| Token | Value | Usage |
|-------|-------|-------|
| brand-brown | #78350F | Headings, primary UI |
| brand-orange | #EA580C | Accent, links, highlights |
| brand-cream | #FDFBF7 | Page background |
| brand-dark | #292524 | Body text |
| brand-stone | #6B6355 | Secondary text |
| brand-muted | #A8A08F | Metadata, captions |
| brand-border | #E0DBD0 | Borders, dividers |
| brand-bg | #F8F5F0 | Card backgrounds |
| brand-accent | #92400E | Hover states |

## County Data Fields (DigitalRightsIndicators)

| Field | Meaning | Source (planned) |
|-------|---------|------------------|
| `surveillance_score` (0-100) | CCTV density + AI surveillance systems per capita | CIPESA, Article 19 reports |
| `internet_health_score` (0-100) | Network quality, speed, accessibility | OONI, CAK reports |
| `data_privacy_score` (0-100) | ODPC complaints, breach incidents | ODPC annual reports |
| `biometric_enrollment_rate` (0-100%) | Huduma Namba, mobile money KYC enrollment | NRB, CAK |
| `platform_impact_score` (0-100) | Content moderation, algorithmic bias incidents | Transparency reports |
| `ai_systems_count` | Number of known AI/deployed automated systems | Media + CSO monitoring |
| `cctv_density` | CCTV cameras per 10,000 population | Procurement records, media |
| `odpc_complaints` | Total data protection complaints filed | ODPC data |
| `internet_shutdown_hours` | Cumulative hours of internet disruption (12mo) | Access Now, KICTANet |
| `social_media_reports` | Content moderation / human rights reports | Platform transparency |

## Scoring Formula (DRRS)
```
DRRS = (Surveillance × 0.25) + (1 - InternetHealth × 0.25) + (DataPrivacy × 0.20) + (Biometric × 0.10) + (PlatformImpact × 0.20)
```
Each dimension normalised to 0-1, weighted sum multiplied by 100.

## Output Format

For each file you modify or create, output:
1. The full file path
2. The complete file contents in a code block
3. A brief note explaining what was changed and why

Do NOT modify:
- The DRRS scoring logic or weights without documenting the rationale
- The county list (47 counties must stay)
- The brand color palette
