# Kenya AI & Digital Rights Observatory

An open-source mapping platform tracking surveillance infrastructure, AI deployments, and digital rights risks across Kenya's 47 counties. Developed as part of a proposal for the Pulitzer Center AI Accountability Fellowship.

## Architecture
- **Framework:** Next.js 16 (React)
- **Styling:** Tailwind CSS v4
- **Mapping:** MapLibre GL JS
- **Data:** Static GeoJSON & TypeScript structures (`output: export`)

## Methodology (DRRS)
The Digital Rights Risk Score (0–100) is calculated via:

`DRRS = (Surveillance × 0.25) + (1 − InternetHealth × 0.25) + (DataPrivacy × 0.20) + (Biometric × 0.10) + (PlatformImpact × 0.20)`

## Local Development
1. `npm install`
2. `npm run prebuild` (fetches geometry, generates PWA icons)
3. `npm run dev`

## Alignment
This project aligns directly with **SDG 16** (Peace, Justice and Strong Institutions) by promoting transparency and accountability in public surveillance procurements.

## License
MIT
