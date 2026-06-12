You are helping improve the **Kenya Digital Rights Risk Atlas** — a static Next.js site that maps surveillance infrastructure and digital rights risks across Kenya's 47 counties.

## Project Context

- **Live:** https://geraldkombo.github.io/kenya-digital-rights-atlas/
- **Repo:** https://github.com/geraldkombo/kenya-digital-rights-atlas
- **Stack:** Next.js 16 static export, TypeScript, Tailwind CSS v4, MapLibre GL JS, TopoJSON
- **No backend, no database, no API routes, no cookies, no tracking, no login**
- All data lives in `src/lib/data.ts` as TypeScript arrays
- Design uses a warm stone/brown palette (`@theme` tokens: brand-brown, brand-orange, brand-cream, brand-stone, brand-border)

## What Needs Improvement

### 1. /explore page — visual design (highest priority)

Current: A plain HTML table with sortable columns, DRRS score badges, and inline SVG sparklines. It works but is visually boring — looks like a spreadsheet.

The page at `src/app/explore/page.tsx` needs:
- Better visual hierarchy — make high-risk counties stand out
- Color-coded row backgrounds (subtle tint based on risk level: critical counties get a faint red tint, low-risk get faint green)
- Better responsive design on mobile (currently horizontal scroll on small screens — consider a card layout alternative)
- Visual cues that make the data scannable at a glance (icons, mini bar charts instead of raw numbers, etc.)
- The filter search could be more prominent
- Add a "Jump to county" or quick-nav feature
- The page description text should be more inviting, less technical

### 2. General visual polish

- The homepage map is functional but the overall visual design is minimal and unfinished
- Color consistency — ensure the PGS/DRRS color scale (yellow→gold→orange→dark red) is used consistently everywhere
- The "How to use" accordion on the homepage looks bare
- County detail panel could use better visual organization
- Mobile navigation hamburger menu could be smoother
- Overall: the platform needs to feel more polished and intentional, not like a default Tailwind starter

### 3. UX improvements

- Loading states — the map and data table both have loading text but no skeleton/spinner
- Keyboard navigation — check that all interactive elements work with keyboard
- Print styles — county brief page prints well; check other pages
- Error states — what happens when data fails to load? Currently shows text, could be more helpful

## Constraints

- Zero new npm dependencies (use Tailwind CSS only for styling)
- No backend, no API routes, no database
- Must remain static export compatible
- All interactive elements must have 44px minimum touch targets
- Must maintain WCAG AA contrast
- No JavaScript runtime that would break the static export

## What to Output

1. For each area above, list specific, actionable code changes (file paths, line numbers, what to change)
2. Prioritize changes by impact (what makes the biggest visual difference with least code)
3. Provide complete code snippets for the /explore page redesign — enough to copy-paste and replace the existing file
4. Flag any changes that might break the build

## Design Direction

The project already has a clear visual identity from the MapLibre map and color scale. The explore page should feel like it belongs to the same platform — not like a separate spreadsheet. Think: data journalism (like The Pudding, Reuters graphics) rather than enterprise dashboard (like Tableau). Warm, inviting, human-scale.
