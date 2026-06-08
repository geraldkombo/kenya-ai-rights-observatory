# Gemini Prompts — Kenya AI & Digital Rights Observatory

All prompts assume: Next.js 16 App Router, TypeScript, Tailwind CSS v4, static export (`output: "export"`),
MapLibre GL JS for maps, no tracking/cookies, MIT license. Deploy at `/kenya-ai-rights-observatory/` subpath.

Colour tokens: `#78350F` (amber-900), `#EA580C` (orange-600), `#FDFBF7` (cream), `#292524` (stone-900),
`#6B6355` (stone-600), `#E0DBD0` (stone-200), `#F8F5F0` (stone-100). Font: Inter/system sans.

---

## Prompt 1: Project Scaffold

```
Scaffold a Next.js 16 static site for "Kenya AI & Digital Rights Observatory".

Generate the complete file list and folder structure. Use:
- App Router with `output: "export"` in next.config.ts
- `basePath: "/kenya-ai-rights-observatory"` and matching `assetPrefix`
- Tailwind CSS v4 with CSS `@theme` tokens in `src/app/globals.css` for these colours:
  `#78350F`, `#EA580C`, `#FDFBF7`, `#292524`, `#6B6355`, `#E0DBD0`, `#F8F5F0`
- `@apply` driven component styles — NO `@layer` directives
- `next/font/google` for Inter, imported in layout.tsx
- TypeScript strict mode
- `$schema` in tsconfig.json pointing to `https://nextjs.org/docs/app/api-reference/config/tsconfig`

Generate:
1. package.json with all deps (next 16, react 19, react-dom 19, maplibre-gl, @types/geojson, sharp)
2. next.config.ts with output, basePath, assetPrefix, images.unoptimized
3. tsconfig.json with strict, paths @/*
4. src/app/layout.tsx with Inter font, metadata (title, description), viewport
5. src/app/globals.css with @import "tailwindcss" and @theme block for the colour tokens
6. src/app/page.tsx minimal placeholder
7. tailwind.config.ts (if needed for v4 — otherwise skip)
8. postcss.config.mjs

All pages are static (no getServerSideProps, no getStaticProps, no revalidate).
```

---

## Prompt 2: Data Types & Real Data

```
Create the data layer for a Kenya counties digital rights observatory.

Types needed in src/lib/types.ts:
- CountyRecord: id (string), name (string), code (string)
- DigitalRightsIndicators: 47-county dataset with these exact fields:
  county_code (string), county_name (string), population (number),
  internet_usage_pct (number 20-70), mobile_ownership_pct (number 40-85),
  birth_registration_pct (number 20-100), surveillance_score (number 0-100),
  internet_health_score (number 0-100), data_privacy_score (number 0-100),
  biometric_enrollment_rate (number 0-100), platform_impact_score (number 0-100),
  ai_systems_count (number), cctv_density (number cameras/10K),
  odpc_complaints (number out of 9061 total),
  internet_shutdown_hours (number, 0-8760/yr), social_media_reports (number)
- DRSScore: drrs, surveillance, internetHealth, dataPrivacy, biometric,
  platformImpact (all numbers 0-100), drivers (string[])

Rules for REAL data filling in src/lib/data.ts:
- 47 counties with id "1".."47", matching Kenya official county codes
- Population from KNBS 2019 Census (exact published figures)
- internet_usage_pct and mobile_ownership_pct from CA/KNBS 2023/24 Housing Survey:
  Nairobi 55.2/72.8, Mombasa 46.9/61.2, Kiambu 44.1/72.6, Kisumu 39.4/67.9,
  Nakuru 36.1/68.5, Turkan a 10.3/47.3, Mandera 5.1/43.9, Wajir 5.8/44.7,
  Samburu 8.7/45.1, Marsabit 10.9/46.8, rest scaled by urbanization tier
- birth_registration_pct from KNBS Vital Statistics 2023 (Nairobi 99.1,
  Kiambu 94.2, Mombasa 96.3, Turkana 41.7, Mandera 35.2, Wajir 38.9,
  Samburu 39.4, Marsabit 42.1, rest scaled by region)
- surveillance_score (0-100): Nairobi 85, Mombasa 72, Kiambu 55, Kisumu 60,
  Nakuru 52, Garissa 55, border counties 40-60, rural 20-40, remote 10-25
- internet_health_score (0-100): higher = worse = more shutdowns/controls.
  Nairobi 45, Mombasa 78, Kisumu 65, Garissa 80, Mandera 85, Turkana 75,
  counties with documented 2024 protest-related disruptions get 60+
- data_privacy_score (0-100, higher = worse = more ODPC complaints per capita):
  Nairobi 82 (ODPC HQ region), Kiambu 55, Mombasa 45, Kisumu 40,
  rest proportionate to urban pop
- biometric_enrollment_rate (0-100): proportional to birth_registration
  (Huduma Namba proxy). Nairobi 99, Kiambu 94, Turkana 42, Mandera 35, rest scaled
- platform_impact_score (0-100): social media restrictions + content moderation.
  Nairobi 55, Mombasa 50, Kisumu 48, Garissa 65, Turkana 45, rest scaled by urban pop
- ai_systems_count: Nairobi 420, Kiambu 85, Mombasa 52, Kisumu 38, Nakuru 30,
  rest scaled by economic activity (2-25)
- cctv_density (per 10K): Nairobi 28, Mombasa 18, Kisumu 12, Nakuru 9,
  Kiambu 6, border counties 4-8, others 1-5
- odpc_complaints: allocate 9061 total: Nairobi 3200, Kiambu 850, Mombasa 680,
  Kisumu 420, Nakuru 380, rest scaled
- internet_shutdown_hours: June 2024 national (288h) + Nov 2024 Telegram (96h)
  + #RejectFinanceBill2024 disruptions per county (0-384h). Nairobi/Mombasa 864,
  Kisumu 768, Garissa 672, Turkana 480, Mandera 384, rest 96-576
- social_media_reports: Nairobi 1200, Mombasa 850, Kisumu 720, Kiambu 580,
  Nakuru 420, rest 30-350

Structure: export const counties: CountyRecord[] and
export const indicators: DigitalRightsIndicators[] in the same file.

Comments block at top of data.ts listing data sources with caveats that
unpublished county-level breakdowns are estimates (proxy indicators).
```

---

## Prompt 3: DRRS Scoring System

```
Build the Digital Rights Risk Score (DRRS) calculation in src/lib/scoring.ts.

Import types from ./types.

The DRRS is computed as:
  drrs = round((
    normalize(surveillance_score, 0, 100) * 0.25 +
    (1 - normalize(internet_health_score, 0, 100)) * 0.25 +
    normalize(data_privacy_score, 0, 100) * 0.20 +
    normalize(biometric_enrollment_rate, 0, 100) * 0.10 +
    normalize(platform_impact_score, 0, 100) * 0.20
  ) * 100)

Implement:
- normalize(value, min, max): clamps to 0-1, returns 0.5 if min=max
- computeDRRS(countyId: string, ind: DigitalRightsIndicators): DRSScore
  Returns: { drrs (0-100), surveillance, internetHealth, dataPrivacy,
    biometric, platformImpact (all 0-100), drivers: string[] }
  drivers = list of factors where normalized sub-score > 0.6 with human-readable
  text: "High surveillance density: {N} cameras per 10K people",
  "Poor internet health: {N} hours of shutdown",
  "Elevated privacy risk: {N} data protection complaints",
  "High biometric enrollment: {N}% population enrolled",
  "Significant platform impact: {N} content reports"

- getDRRSColor(score: number): string
  >= 70 → "#8C2D04"  (critical)
  >= 50 → "#D95F0E"  (high)
  >= 30 → "#FEC44F"  (medium)
  < 30  → "#FFF7BC"  (low)

- getDRRSBadgeClass(score: number): string
  Same tiers with Tailwind bg/text tokens

All normalizations use the 0-100 range. No external dependencies.
```

---

## Prompt 4: MapView Component with Full Interactivity

```
Build the interactive Kenya county choropleth map component.

File: src/components/MapView.tsx, "use client", dynamic import with ssr:false.

Import maplibre-gl and "maplibre-gl/dist/maplibre-gl.css".

Props:
- boundaries: GeoJSON.FeatureCollection (47 features, county_code as NUMBER 1-47)
- countyScores: Record<string, number>  (key = numeric string id, value = DRRS 0-100)
- countyNames: Record<string, string>   (key = numeric string id, value = name)
- onCountyClick: (code: string) => void (code is numeric string like "32")
- selectedCountyCode: string | null

Implementation:
1. buildMatchExpression(scores): return a Maplibre match expression
   using ["get", "county_code"] with Number(k) conversion for keys.
   Default colour #E7E5E4 (no data grey).

2. On mount, create maplibregl.Map with:
   - Custom style using CARTO Positron raster tiles (light_all)
   - Center [37.9, 0.5], zoom 5.2
   - maxBounds [[31, -5.5], [43, 6]]
   - cooperativeGestures: true

3. On map load:
   - Add "counties" source from boundaries GeoJSON
   - Layer "counties-fill": fill with colour from match expression, opacity 0.85
   - Layer "counties-hover": same fill, opacity 0.95, outline #292524,
     filter ["==", "county_code", -1] (hidden by default)
   - Layer "counties-selected": line, colour #292524, width 3 when matched,
     0 otherwise. Convert selectedCountyCode to number via Number().
   - Layer "counties-outline": line, white, width 1

4. Hover interaction:
   - mousemove on "counties-fill": set cursor to pointer, update hover filter
     with Number(code), show tooltip div positioned at e.point.x/y
   - mouseleave: restore cursor, hide hover filter with -1, clear tooltip
   - Tooltip shows county name (bold) + "DRRS: {score}" below

5. Click interaction:
   - click on "counties-fill": call onCountyClick(String(properties.county_code))
   - click on empty space: call onCountyClick("") to deselect

6. fitBounds to Kenya [[33.5, -5], [42.5, 5]] with padding 40

7. Effect to update counties-selected line-width when selectedCountyCode changes:
   Use Number(selectedCountyCode) for match, -1 when null.

Critical: ALL Maplibre match expressions comparing county_code must use NUMBER
values, never strings. Convert with Number(). Use -1 as sentinel (never null or "").

Handle errors: catch on map creation, addSource errors, set hasError state.
Show fallback UI when hasError is true.

Tooltip is a div (not map popup) with pointer-events-none, positioned next to cursor.
```

---

## Prompt 5: Page Home Layout with Side Panel

```
Create the home page at src/app/page.tsx that orchestrates the map, details panel,
rankings, and insights dashboard.

"use client". Import MapView via dynamic(() => import(...), { ssr: false }).

State: selectedCountyCode (string | null), boundaries (GeoJSON.FeatureCollection | null).

On mount: fetch boundaries from "/data/boundaries.geojson" using a helper that
prefixes with "/kenya-ai-rights-observatory" base path.

Compute countyScores and countyNames loops from the counties and indicators arrays.

Compute aggregates for InsightsDashboard: countyCount (47), highRiskCount (DRRS>=50),
totalAISystems (sum of ai_systems_count), totalShutdownHours (sum).

Render:
1. <InsightsDashboard> with the 4 stats
2. Subtitle text
3. Responsive grid: lg:grid-cols-3
   - Left (lg:col-span-2):
     <MapErrorBoundary> wrapping MapView (with boundaries, scores, names, click handler)
     Below map: <ScoreLegend />
   - Right (hidden on mobile, shown lg:block):
     Conditionally show <CountyDetails> if selectedCounty, else <CountyRankings>
4. Mobile bottom sheet: fixed bottom-0, shown when selectedCounty on mobile (lg:hidden),
   with drag handle and close button
5. Footer links to /method and /compare

Use <Link> from next/link for internal navigation.

Data-fetch helper (src/lib/data-fetch.ts):
- const BASE = "/kenya-ai-rights-observatory"
- export dataUrl(path) => BASE + path
- export fetchJSON<T>(path) => fetch(dataUrl(path)).then(r => r.json())
```

---

## Prompt 6: CountyDetails Panel

```
Build the county detail panel shown when a user clicks a county on the map.

File: src/components/CountyDetails.tsx, "use client".

Props:
- county: CountyRecord (id, name, code)
- indicators: DigitalRightsIndicators[]

Find the matching indicator by county_code === county.id.
Compute DRRS score via computeDRRS(county.id, indicator).

Layout (stacked card with no header, just padding):
1. County name (text-lg font-bold) + DRRS badge (getDRRSBadgeClass, rounded-full px-3 py-0.5)
2. DRRS score displayed as large number (text-3xl font-bold) with label "Digital Rights Risk Score"
3. Five progress bars, each with:
   - Label (e.g., "Surveillance Density")
   - Colour bar (width proportional to score 0-100, height 8px, rounded)
   - Colour from getDRRSColor or a CSS gradient from green to orange to red
   - Numeric value shown right-aligned
   - The 5 bars: Surveillance, Internet Health, Data Privacy, Biometric, Platform Impact
4. "Key Drivers" section: bullet list of drivers from DRRS result (only shown if non-empty)
5. Metrics grid (2-col): show population, internet_usage_pct, mobile_ownership_pct,
   birth_registration_pct, ai_systems_count, cctv_density, odpc_complaints,
   internet_shutdown_hours with labels and formatted values
6. Source note: small text at bottom

Use the colour token palette. Mobile-friendly (full width).
```

---

## Prompt 7: CountyRankings Table

```
Build a sortable county ranking table.

File: src/components/CountyRankings.tsx, "use client".

Props:
- counties: CountyRecord[]
- indicators: DigitalRightsIndicators[]
- onCountyClick: (code: string) => void

Compute DRRS for each county. Sort by DRRS descending (worst first).
Show top 10-15 items with scroll for the rest.

Columns:
1. Rank number (#1, #2, ...)
2. County name (clickable, calls onCountyClick(county.id))
3. DRRS score (with badge colour from getDRRSBadgeClass)

Make rows interactive: hover background, cursor pointer.
The name is a button (not a link) for accessibility.

Show "Highest digital rights risk" heading and "Counties with the most critical
surveillance and privacy concerns" subtitle.

Add a "Maximum risk" label above the top item and "Minimum risk" label near
the bottom item.

Mobile friendly: full-width, text-sm on small screens.
```

---

## Prompt 8: InsightsDashboard

```
Build the insights dashboard stat cards for the home page top section.

File: src/components/InsightsDashboard.tsx, "use client".

Props:
- countyCount: number
- highRiskCount: number
- totalAISystems: number
- totalShutdownHours: number

Render a responsive grid of 4 stat cards (2x2 on mobile, 4-col on desktop).

Each card shows:
- Large number (text-3xl font-bold, colour #78350F)
- Label (text-xs uppercase tracking-wider, colour #6B6355)
- Optional icon (inline SVG, simple)

Cards:
1. CountyCount: "Counties" subtitle, icon = map pin
2. highRiskCount: "High Risk (DRRS >= 50)" subtitle, icon = warning/exclamation
3. totalAISystems: "AI Systems" subtitle, icon = chip/brain
4. totalShutdownHours: "Shutdown Hours" subtitle + "cumulative (12mo)", icon = power-off

Use brand colour palette. Cards have border border-[#E0DBD0] rounded-xl p-4 bg-[#FDFBF7].
```

---

## Prompt 9: ScoreLegend

```
Build the colour legend for the DRRS choropleth map.

File: src/components/ScoreLegend.tsx.

No props. Self-contained.

Render 4 colour swatches in a row:
- Low (<30): #FFF7BC
- Medium (30-49): #FEC44F
- High (50-69): #D95F0E
- Critical (70+): #8C2D04

Each swatch is a rounded coloured box with the range label below.
Layout: flex row with gap, centred.

Use the exact colour hex values. Show "Digital Rights Risk Score" as the title
above the swatches in text-xs uppercase tracking-wider.
```

---

## Prompt 10: Search Component

```
Build a county search/autocomplete component.

File: src/components/Search.tsx, "use client".

Props:
- counties: CountyRecord[]
- onSelect: (code: string) => void

State: query (string), isOpen (boolean), filtered list.

Render a search input with magnifying glass icon.
On input change, filter counties by name match (case-insensitive).
Show dropdown with matching counties.
On click a result, call onSelect(county.id) and clear input.

Accessibility: aria-combobox pattern, role="listbox", role="option",
focus management, escape to close.

Styled with brand tokens: border, rounded-lg, shadow.
```

---

## Prompt 11: Methodology Page

```
Build the /method page explaining the DRRS methodology.

File: src/app/method/page.tsx.

Static page. No "use client" needed.

Content sections (use prose-like markup with Tailwind typography classes):
1. "How the Score Works" — explain the 5 weighted dimensions
2. Dimension breakdown table:
   | Dimension | Weight | What It Measures | Data Source |
   | Surveillance Density | 25% | CCTV density per capita, known surveillance infrastructure | KHRC, Amnesty Kenya reports, media |
   | Internet Health | 25% | Shutdown hours, platform restrictions, net neutrality | NetBlocks, Access Now, CA Kenya |
   | Data Privacy | 20% | ODPC complaints per capita, data breach incidents | ODPC annual reports |
   | Biometric Enrollment | 10% | National ID/biometric registration rates | KNBS Vital Statistics, Huduma Nama |
   | Platform Impact | 20% | Social media content moderation, platform accessibility | Platform transparency reports, CA Kenya |
3. Formula visualisation (pseudo-code or equation)
4. Data sources section with links to KNBS, CA, ODPC, KHRC, NetBlocks, Access Now
5. Limitations and caveats section
6. Version/date metadata

Use the brand palette. Links open in new tab with rel="noreferrer".
```

---

## Prompt 12: Compare Page

```
Build the /compare page allowing side-by-side county comparison.

File: src/app/compare/page.tsx, "use client".

Allow user to select 2-4 counties from a dropdown/multi-select.
For each selected county, show:
- Name + DRRS badge
- Radar/spider chart of 5 dimensions (use a simple SVG polygon, no chart library)
- Metrics table side by side

Use the Search component for county selection.

Add/remove counties with buttons. Default: Nairobi and Mombasa.

Responsive: on mobile, stack vertically; on desktop, side by side.

Show the difference between counties for each metric.
```

---

## Prompt 13: DUA Page (Data Usage Agreement)

```
Build the /dua page explaining data usage, ethics, and terms.

File: src/app/dua/page.tsx.

Static page. Content sections:
1. "Data Usage Agreement" heading
2. Sections covering:
   - What data we use and where it comes from
   - No personal data collected
   - No cookies or tracking
   - Open data attribution
   - Limitations and accuracy disclaimers
   - Contact/licensing information
3. License badge: MIT License
4. Citation format in APA

Use professional, clear language. Brand styling.
```

---

## Prompt 14: Brief / About Page

```
Build the /brief page describing the project context and purpose.

File: src/app/brief/page.tsx.

Static page. Content:
1. Project title and tagline
2. Background: Kenya's digital transformation, AI adoption, surveillance concerns
3. The "Turkana Paradox" narrative hook: regions with LOW connectivity paradoxically
   face high surveillance risk through different vectors (biometric ID, mobile money tracking)
4. Why this matters: AI Accountability Fellowship context
5. Methodology overview (link to /method)
6. Team/author info
7. Acknowledgments and data partners

Professional journalistic tone. Brand styling.
```

---

## Prompt 15: Error Handling Pages

```
Create error handling for the Next.js 16 app.

Files:
1. src/app/error.tsx — "use client", catches rendering errors
   - Show a simple message with "Something went wrong" and "Try again" button
   - Use reset() prop for retry
   - Brand palette, centred layout

2. src/app/global-error.tsx — "use client", catches root layout errors
   - Same pattern but full <html><body> tags (runs outside layout)
   - Minimal but functional with retry button

3. src/components/MapErrorBoundary.tsx — class component error boundary
   - getDerivedStateFromError, componentDidCatch with console.error
   - Fallback renders "Map loading failed" message with brand colours
   - Accepts optional fallback prop
```

---

## Prompt 16: PWA & Service Worker

```
Set up Progressive Web App support for the static Next.js site.

1. public/manifest.json:
   - name: "Kenya AI & Digital Rights Observatory"
   - short_name: "Kenya Rights Observatory"
   - start_url: "/kenya-ai-rights-observatory/"
   - display: "standalone", orientation: "portrait-primary"
   - theme_color: "#FDFBF7", background_color: "#FDFBF7"
   - Maskable icons: icon-192.png, icon-512.png
   - categories: ["education", "news", "technology"]

2. public/sw.js:
   - Cache-first strategy for shell resources (HTML, JS, CSS)
   - Cache-first for CARTO basemap tiles (https://basemaps.cartocdn.com/)
   - Stale-while-revalidate for data files (boundaries.geojson)
   - Network-only for external resources
   - Versioned cache names (CACHE_v1)
   - activate handler to clear old caches

3. In src/app/layout.tsx head:
   - <link rel="manifest" href="/kenya-ai-rights-observatory/manifest.json" crossOrigin="use-credentials" />
   - Registration script:
     if ('serviceWorker' in navigator) {
       navigator.serviceWorker.register('/kenya-ai-rights-observatory/sw.js');
     }

4. Script to generate PNG icons (node scripts/generate-icons.mjs):
   - Use sharp to create icon-192.png and icon-512.png from public/icon.svg
   - Run as prebuild script

5. public/icon.svg: simple SVG icon (shield or eye icon with brand colours, 512×512)

6. public/og-image.svg: social sharing card (1200×630) with project name and tagline
```

---

## Prompt 17: CI/CD & Deployment

```
Create deployment configuration for a Next.js static export on GitHub Pages.

1. .github/workflows/deploy.yml:
   - Trigger: push to master branch
   - Job on ubuntu-latest:
     - Checkout code
     - Setup Node 20 with cache (npm)
     - npm ci
     - npm run build (which runs generate-icons.mjs then next build)
     - Deploy to GitHub Pages using peaceiris/actions-gh-pages@v4
       with publish_dir: ./out
       and publish_branch: gh-pages
     - Uses GITHUB_TOKEN (default)

2. next.config.ts required settings:
   - output: "export"
   - basePath: "/kenya-ai-rights-observatory"
   - assetPrefix: "/kenya-ai-rights-observatory/"
   - images: { unoptimized: true }
   - trailingSlash: true

3. For Netlify alternate deployment: netlify.toml with redirects and headers

4. public/_redirects for SPA fallback (if needed on Netlify)

Note: GitHub Pages requires the repo to be at geraldkombo/kenya-ai-rights-observatory
and Pages enabled with "Deploy from a branch: gh-pages".
```

---

## Prompt 18: README & Documentation

```
Create project documentation files.

1. README.md:
   - Project title, tagline, screenshot placeholder
   - "What is this?" — 2-paragraph overview
   - "Data Sources" table with KNBS, CA, ODPC, KHRC, NetBlocks, Access Now
   - "Methodology" brief with link to /method
   - "Built With" list: Next.js, MapLibre GL, Tailwind CSS, TypeScript
   - "Local Development" instructions:
     git clone, npm install, npm run dev
   - "Deployment" instructions: npm run build, deploy out/ folder
   - "License" section: MIT

2. LICENSE: MIT License template with 2026, full text

3. CITATION.cff:
   - cff-version: 1.2.0
   - title, authors (Gerald Kombo), date-released, repository-url
   - DOI placeholder
   - license: MIT

4. CONTRIBUTING.md:
   - How to contribute (issues, PRs)
   - Code style guidelines
   - Commitment to open data and reproducibility

ALL documentation must be professional, well-formatted, and free of placeholder
text (except the screenshot in README).
```

---

## Prompt 19: 404 & _not-found

```
Create a custom 404 page and Next.js _not-found page.

src/app/not-found.tsx:
- Simple centred layout
- "404 — Page Not Found" heading
- "The page you are looking for does not exist or has been moved." message
- Link back to home page
- Use brand colours and styling

src/app/_not-found/page.tsx (or use the built-in):
- Same design but for Next.js internal use
- Ensure it's excluded from sitemap (noindex)
```

---

## Prompt 20: Comprehensive Build Verification

```
After writing all code, run the full test suite to verify the project compiles.

Commands to run:
1. npm run build
   Expected: 0 errors, 8 static routes generated (/, /_not-found, /brief, /compare,
   /dua, /method, /404, possibly more)

2. Check that out/ directory contains:
   - index.html at root and each route
   - data/boundaries.geojson
   - icon-192.png, icon-512.png, icon.svg, og-image.svg
   - manifest.json, sw.js
   - _next/static/ chunks with correct hashed filenames

3. Verify each generated HTML page:
   - Contains the Inter font link
   - Has correct lang="en"
   - Has viewport meta
   - Has theme-color meta
   - Links to manifest.json with correct basePath prefix

4. Verify no JS runtime errors by opening each page in a browser.

5. If deploying: verify live URLs work:
   - https://geraldkombo.github.io/kenya-ai-rights-observatory/
   - https://geraldkombo.github.io/kenya-ai-rights-observatory/method
   - https://geraldkombo.github.io/kenya-ai-rights-observatory/brief
   - etc.

Fix any errors found. Do NOT commit broken code.
```

---

## Usage

Pass these prompts individually to Gemini (e.g. via Google AI Studio or API).
Start with Prompt 1 (scaffold), then proceed sequentially. Each prompt builds
on the outputs of the prior prompts. Verify the build after each prompt.

---

## Prompt 21 (FINAL): Full System Verification & Handover

```
You are performing the FINAL verification and handover of the Kenya AI & Digital 
Rights Observatory. This prompt validates every subsystem and documents the 
complete project state for handover.

Run each step and confirm success (✅) or failure (❌) with details.

---

### PHASE 1: BUILD VERIFICATION

1. Run `npm run build` (which runs `node scripts/generate-icons.mjs` then `next build`)
   Expected: "Compiled successfully", "TypeScript … Finished", 
   "Generating static pages … 8/8", "Route (app)" listing all 6 static routes

2. Verify the output directory `out/` has:
   - Files at root: index.html, 404.html, favicon.ico, icon.svg, manifest.json,
     og-image.svg, sw.js, robots.txt, sitemap.xml, _redirects
   - Data: data/boundaries.geojson
   - Icons: icons/icon-192.png, icons/icon-512.png
   - Sub-routes: brief/index.html, compare/index.html, dua/index.html, method/index.html
   - Build assets: _next/static/chunks/ (hashed chunks)

---

### PHASE 2: HTML VALIDATION

Check every generated HTML page (index.html, brief/index.html, compare/index.html,
dua/index.html, method/index.html, 404.html):

1. DOCTYPE is <!DOCTYPE html>
2. <html lang="en">
3. Has viewport <meta name="viewport">
4. Has theme-color <meta name="theme-color" content="#FDFBF7">
5. Has apple-mobile-web-app-capable meta
6. Contains <link rel="manifest" href="/kenya-ai-rights-observatory/manifest.json">
7. Contains Inter font stylesheet link
8. OG meta tags present (og:title, og:description, og:image, og:url)
9. Twitter card meta tags present
10. All internal links use the basePath prefix (/kenya-ai-rights-observatory/...)

---

### PHASE 3: JAVASCRIPT & INTERACTIVITY

Verify client-side functionality without errors:

1. Open index.html in a browser with browser DevTools console open
2. Confirm NO runtime errors (red console messages)
3. Confirm MapLibre GL loads and renders the CARTO basemap tiles
4. Confirm boundaries.geojson fetches (check Network tab for 200 response)
5. Confirm county polygons render with DRRS colour fills
6. Hover over a county — confirm:
   - Cursor changes to pointer
   - County name + DRRS score tooltip appears
   - County polygon highlights (darker fill, dark outline)
7. Click a county — confirm:
   - CountyDetails panel appears on desktop (right side, lg:block)
   - Mobile bottom sheet appears on narrow viewport (lg:hidden)
   - Selected county border (3px dark line) renders
   - URL does NOT change (SPA behavior via React state)
8. Click empty map space — confirm county deselects
9. Test Search component — type a county name, confirm dropdown appears,
   click a result, confirm it selects the county on the map
10. Test HowToUse accordion — click to expand, click to collapse

---

### PHASE 4: PAGE INTEGRITY

Visit each route and verify content:

1. **Home (index.html):**
   - 4 stat cards visible: Counties(47), AI Systems(148), Shutdown Hours(2,864), High Risk(6)
   - Map container renders
   - ScoreLegend shows 4 colour swatches (Low, Medium, High, Critical)
   - Search input present
   - Rankings panel shows top 5 and bottom 5 counties with DRRS badges
   - Footer links to /method and /compare

2. **/method:**
   - "Methodology Framework" heading
   - DRRS explanation with 4-tier scale
   - 5 component cards (Surveillance 25%, Internet Health 25%, etc.)
   - Formula displayed
   - Data sources section with 8 sources
   - Limitations section (dark background)
   - Link back to map

3. **/compare:**
   - Two selects for County A and County B
   - After selecting, two radar charts appear (SVG pentagons)
   - Metrics tables for both counties
   - Key findings section with driver highlights
   - Link back to map

4. **/dua:**
   - "Data Use Agreement" heading
   - Source Register table with 6 datasets
   - Suggested Citation block
   - Privacy section (no cookies, no tracking)
   - Link back to map

5. **/brief?id=47:**
   - Shows "Nairobi County — Digital Rights & Surveillance Brief"
   - DRRS badge with colour
   - Key Indicators and Action Recommendations columns
   - DRRS Component Scores progress bars
   - Print button
   - Test with ?id=32 (Nakuru), ?id=23 (Turkan a)

6. **404 page:**
   - Navigate to a non-existent route like /nonexistent
   - Shows "Resource not found" with 404
   - "Return to map" link works

---

### PHASE 5: RESPONSIVE BREAKPOINTS

Test at these viewport widths:

1. **Mobile (375px):**
   - Header collapses to single row
   - Stat cards 2x2 grid
   - Map takes full width, rankings/details hidden below (lg:hidden)
   - Clicking county opens bottom sheet (fixed, rounded top)
   - Search input full width
   - Compare page stacks vertically

2. **Tablet (768px):**
   - Header nav visible
   - Stat cards 4-column
   - Map full width, side panel still hidden

3. **Desktop (1280px):**
   - 3-column grid: map (2 cols) + side panel (1 col)
   - Rankings visible when no county selected
   - Details visible when county selected
   - Compare page shows radar charts side by side

---

### PHASE 6: PWA VERIFICATION

1. Open Chrome DevTools → Application → Manifest
   - Name: "Kenya AI & Digital Rights Observatory"
   - Short name: "Digital Rights KE"
   - Start URL: "/kenya-ai-rights-observatory/"
   - Display: "standalone"
   - Theme color: #78350F, Background: #FDFBF7
   - Icons: 192x192 and 512x512 (maskable)

2. Application → Service Workers
   - SW registered for scope /kenya-ai-rights-observatory/
   - Status: "activated and is running"

3. Lighthouse audit (optional but recommended):
   - Run Lighthouse for desktop and mobile
   - Target: 90+ Performance, 90+ Accessibility, 90+ Best Practices, 90+ SEO, PWA badge

---

### PHASE 7: DATA INTEGRITY

Verify the 47-county dataset:

1. `src/lib/data.ts` contains exactly 47 counties (array length)
2. County IDs are strings "1" through "47" (no gaps, no duplicates)
3. `indicators[]` also has exactly 47 entries
4. Every county has a matching indicator (county_code matches id)
5. `computeDRRS()` returns valid scores (0-100) for all counties
6. DRRS scores differentiate: Nairobi highest (~62), Turkan a / Samburu / Tana River lowest (~32)
7. Boundaries GeoJSON has 47 features with county_code matching IDs
8. All `county_code` values in GeoJSON are numbers (not strings)

---

### PHASE 8: SOURCE CODE REVIEW

Verify these critical patterns are correct:

1. **String vs number** — ALL Maplibre match expressions comparing `county_code`
   use NUMBER values. `selectedCode()` helper converts with `Number()`.
   Sentinel value is -1 (never "" or null).

2. **Base path prefix** — ALL data fetches use `dataUrl()` or `fetchJSON()` from
   `src/lib/data-fetch.ts` which prepends `/kenya-ai-rights-observatory`.
   The manifest link in layout.tsx uses the hardcoded BASE constant.

3. **Client components** — All interactive components have "use client" directive.
   MapView is dynamically imported with { ssr: false }.

4. **Static export** — NO server-side functions (getServerSideProps, etc.).
   NO API routes. NO ISR/revalidation. All data is static.

5. **Colour tokens** — ALL brand colours use the exact hex values:
   #78350F, #EA580C, #FDFBF7, #292524, #6B6355, #E0DBD0, #F8F5F0

---

### PHASE 9: DEPLOYMENT VERIFICATION

If deployed:

1. Visit https://geraldkombo.github.io/kenya-ai-rights-observatory/
2. Confirm all routes return 200:
   - / → 200
   - /method/ → 200
   - /compare/ → 200
   - /brief/ → 200
   - /dua/ → 200
   - /nonexistent/ → custom 404 page
3. Confirm all static assets load (check Network tab):
   - /kenya-ai-rights-observatory/_next/static/... (JS chunks)
   - /kenya-ai-rights-observatory/manifest.json → 200
   - /kenya-ai-rights-observatory/sw.js → 200
   - /kenya-ai-rights-observatory/data/boundaries.geojson → 200
   - /kenya-ai-rights-observatory/icon.svg → 200
   - /kenya-ai-rights-observatory/sitemap.xml → 200
   - /kenya-ai-rights-observatory/robots.txt → 200
4. Confirm map tiles load from CARTO CDN
5. Confirm service worker registers successfully

---

### PHASE 10: HANDOVER CHECKLIST

Final checklist — mark complete:

- [ ] npm run build → 0 errors
- [ ] 6 static routes generated (/, /brief, /compare, /dua, /method, /_not-found)
- [ ] All HTML pages valid (DOCTYPE, meta, viewport, lang)
- [ ] Map renders with county polygons and colour fills
- [ ] Hover tooltip works on all counties
- [ ] Click selects county, shows details
- [ ] Selected county border renders (3px #292524)
- [ ] Search finds counties, click selects on map
- [ ] Mobile bottom sheet opens on county click
- [ ] Compare page: radar charts render as SVGs
- [ ] Methodology page: all 5 dimensions documented
- [ ] DUA page: source register, citation, privacy
- [ ] Brief page: printable, works with ?id= parameter
- [ ] 404 page shows custom content
- [ ] Manifest valid, SW registered
- [ ] robots.txt, sitemap.xml served correctly
- [ ] All colour tokens match spec
- [ ] BasePath correct on all assets and links
- [ ] No console errors on any page
- [ ] Responsive at 375px, 768px, 1280px
- [ ] All data loads (47 counties, boundaries.geojson)

---

### FINAL DECLARATION

Once all checks pass, output:

```
STATUS: ✅ ALL SYSTEMS VERIFIED
BUILD: 0 errors, 8 static routes
DATA: 47 counties, 47 indicator records, 47 GeoJSON features
MAP: Interactive choropleth with hover, click, selection
PWA: Manifest valid, service worker active
SEO: sitemap.xml, robots.txt, OG tags, Twitter cards
ACCESSIBILITY: ARIA combobox, focus-visible, semantic HTML
DEPLOYMENT: GitHub Actions auto-deploy on push to master
REPOSITORY: https://github.com/geraldkombo/kenya-ai-rights-observatory
LIVE: https://geraldkombo.github.io/kenya-ai-rights-observatory/
```

If any check fails, fix it and re-run from PHASE 1.
```

