# Gemini Prompts — Kenya Digital Rights Risk Atlas


---

## Prompt 24 (HOW KENYA WORKS): Political, Legal & Governance Context for Digital Rights Analysis

```
You are a Kenya governance and digital rights expert providing context for a data
journalism / civic tech project. Read this document to understand how Kenya's
systems actually work — so that every analysis, recommendation, and data model
is grounded in Kenyan reality rather than generic assumptions.

---

## 1. DEVOLUTION — WHY 47 COUNTIES MATTER

The 2010 Constitution created 47 county governments, each with:
- An elected Governor (executive) and County Assembly (legislature)
- Own budget (at least 15% of national revenue via the Division of Revenue Act)
- Direct responsibility for: county health, agriculture, transport, planning,
  trade development, and — critically — county ICT / e-government programs
- County Integrated Development Plans (CIDPs) that guide 5-year spending

This devolution is the single most important structural fact for this project.
It means digital rights surveillance happens at BOTH levels: national (mass
surveillance, data protection law, ISP regulation) AND county (CCTV tenders,
biometric enrollment, county-issued digital IDs, e-government platforms).

County governments are major procurers of technology:
- Nairobi leads with massive CCTV contracts (thousands of cameras, Huawei hardware)
- Mombasa, Kisumu, Nakuru have their own urban surveillance programs
- Counties issue biometric registration (birth certificates, county ID cards)
- County health systems use digital patient databases (some linked to Maisha Namba)

Each county has a CECM (County Executive Committee Member) for ICT — the
equivalent of a county-level CIO. FOIA requests (Article 35) should target them.

---

## 2. KEY LAWS — THE LEGAL FRAMEWORK

### Constitution of Kenya 2010
- **Article 31** — Right to privacy (extends to personal data)
- **Article 33** — Freedom of expression (includes online speech)
- **Article 35** — Right to access information (Kenya's FOIA). ANY citizen can
  request any information held by any state organ, which MUST respond within
  21 days (extendable by 14). This is the legal basis for all FOIA templates
  in the advocacy page.
- **Article 34** — Freedom of the media
- **Article 46** — Consumer rights (includes digital services)

### Data Protection Act 2019 (DPA)
- Established the Office of the Data Protection Commissioner (ODPC)
- Requires data controllers to register, obtain consent, conduct DPIAs
- ODPC has handled 9,061+ complaints (as of Mar 2026)
- Key pattern: complaints are rising fast but enforcement is slow; ODPC is
  underfunded and understaffed (approx 50 staff for 55M people)
- Penalties: up to KES 5M fine or 2% of annual turnover, but few levied so far
- Relevancy: every county government is a data controller — they MUST register
  and comply. Most have NOT. This creates an advocacy angle.

### Computer Misuse & Cybercrimes Act 2018 (CMCA)
- Broadly worded, criticised for enabling state censorship
- Criminalises "unauthorised access", "false data", "cyber harassment"
- Used to prosecute journalists and activists (e.g. Robert Alai, Okiyah Omtatah)
- Section 29: warrants for expedited preservation of data

### Kenya Information & Communications Act (KICA)
- Gives Communications Authority (CA) regulatory power over telecoms
- CA can order internet shutdown — usually under "national security" pretext
- CA Network Disruption Regulation 2025 (draft) proposes fines for shutdowns but
  also creates a "lawful interception" framework

### Access to Information Act 2016
- Implements Article 35 — procedural mechanism for FOIA
- Commission on Administrative Justice (CAJ) handles appeals
- Response time: 21 days, extendable by 14
- Grounds for refusal very narrow (national security, privacy of third party,
  commercial confidentiality, ongoing investigations)
- Pattern: state organs routinely ignore requests, CAJ backlog is severe,
  enforcement requires High Court petition

### Data Protection (General) Regulations 2021
- Registration thresholds, DPIIA requirements, transfer rules
- County governments should register as data controllers — most have not

---

## 3. KEY INSTITUTIONS — WHO HOLDS POWER

### Executive
- **Ministry of Interior & National Administration** — National Police Service,
  Immigration, registration of persons (Huduma Namba / Maisha Namba)
- **Ministry of ICT & the Digital Economy** — Konza Technopolis, ICT policy,
  digital transformation agenda
- **Presidential Digital Transformation Programme** — county-level digital
  service delivery push (e-Citizen, digitised land registries)

### Regulatory
- **ODPC (Office of the Data Protection Commissioner)** — Data protection
  enforcement. Modest powers, limited budget. Located in Nairobi, no county
  offices. Currently building its enforcement muscle.
- **CA (Communications Authority of Kenya)** — Telecom licensing, spectrum,
  internet shutdown authority. Has county-level coverage data (used in this
  project's indicators).
- **CAJ (Commission on Administrative Justice)** — FOIA appeals body.
  Constitutional commission but underfunded.

### Oversight & Civil Society
- **KICTANet** — Multi-stakeholder platform (government + private sector + civil
  society). Runs the annual Kenya School of Internet Governance. Publishes
  research on digital rights. Key partner for this project.
- **ICJ Kenya** — Governance, rule of law, litigates digital rights cases
- **KHRC (Kenya Human Rights Commission)** — Digital rights, surveillance,
  protest monitoring
- **Article 19 East Africa** — Free expression, FOIA, digital rights
- **CIPESA** — Pan-African digital rights, based in Kampala, funds research
- **Mozilla / OTF** — Fund internet freedom tools globally
- **Access Now** — Global digital rights org, active in Kenya (shutdown tracking)

---

## 4. INTERNET LANDSCAPE — HOW KENYA IS ONLINE

### Connectivity
- Internet penetration: ~40% nationally (CA 2024), heavily Nairobi/Mombasa skewed
- Mobile penetration: ~60% nationally but feature phones dominate in rural areas
- M-Pesa / mobile money: 30M+ active users — Kenya's de facto banking system
- Undersea cables: TEAMS, SEACOM, EASSy, DARE, 2Africa — good bandwidth but
  last-mile is still expensive
- Starlink launched in Kenya 2024 — disrupting ISP market, but $45/month is
  unaffordable for most

### Shutdowns
- June 2024: nationwide shutdown during #RejectFinanceBill2024 protests
  (3+ hours total across several days)
- Nov 2024: Telegram blocked (ongoing at ISP level)
- Localised: throttling during political rallies, by-election violence,
  anti-government protests in Kisumu, Migori, Homa Bay (opposition strongholds)
- This project's `internet_shutdown_hours` reflects these events per county

### Digital Public Infrastructure
- **Maisha Namba** — National digital ID rollout (replacing Huduma Namba)
  Biometric registration linked to birth registration. Mandatory for:
  passports, driving licenses, NHIF, KRA PIN, mobile SIM registration,
  bank accounts. Critics say it creates a surveillance infrastructure.
  County-level birth registration rates (used in this project) reflect
  the completeness of this biometric enrollment pipeline.
- **e-Citizen** — Government service portal, now required for over 5,000
  government services. Single point of data aggregation. Security concerns
  have been raised (2024 breach exposed citizen data).
- **County digital platforms** — Each county has its own e-government portal,
  revenue collection system, health information system. Quality varies wildly.

---

## 5. POLITICAL ECONOMY — WHY THIS MAP MATTERS NOW

### Key Dynamics
- **Government digital push is accelerating** — Hustler Fund (digital lending),
  Maisha Namba, e-Citizen, county digital transformation. More data = more
  surveillance surface area.
- **Finance Bill 2024 protests** — Largely Gen Z organised online, exposed
  state surveillance capacity (tanks linked to Safaricom/Huawei systems).
  Sparked demands for algorithmic transparency, data protection, digital rights.
- **Election cycle** — Next general election is Aug 2027. Expect increased
  surveillance, social media monitoring, biometric voter registration
  (IEBC systems), and shutdown risk during political violence.
- **Counterterrorism** — Operation Amani, Operation Linda Boni: surveillance
  in coast and northeastern counties (Garissa, Mandera, Wajir, Lamu, Tana River).
  Explained by these counties' high surveillance scores.
- **AI deployment** — Growing fast: fintech credit scoring, recruit AI,
  predictive policing pilots (Nairobi), healthcare AI, agri-tech.
  No regulation specific to AI exists yet (Data Protection Act is the closest).
- **China/Huawei presence** — Huawei built Nairobi's CCTV system, is building
  Kenya's fibre backbone, involved in ICT infrastructure. Raises questions
  about data sovereignty and surveillance tech transfer.

### County Politics
- 47 governors wield significant power over local ICT spending
- County assembly members approve budgets — they can be lobbied to demand
  transparency in tech procurement
- Opposition-governed counties (e.g. Kisumu, Migori, Homa Bay, Siaya) tend
  to face more internet disruptions during protests — reflected in their
  high internet_shutdown_hours
- Ruling party counties (e.g. Nakuru, Kiambu, Meru, Uasin Gishu) generally
  have more investment and less disruption

---

## 6. DATA GAPS & PROXY METHODOLOGY

This project uses estimated data because many official statistics either don't
exist at county level or are not publicly available. Here is the reality:

- **CCTV density**: No national registry of cameras. Estimates based on
  news reports, KHRC surveys, county budgets, urbanisation rates.
  Nairobi's estimate (8/10K) is based on the ~4,500 cameras in the
  command centre system. Other county estimates scale relative to this.
- **AI systems**: No register of AI systems in Kenya. Estimates based on
  economic complexity, fintech presence, county ICT budgets, news reports.
  "AI system" broadly defined (ML model in production, not ChatGPT usage).
- **ODPC complaints**: National total (9,061) is known. County distribution
  is estimated from population, urbanisation, and known regional disparities
  in rights awareness.
- **Internet shutdown hours**: Based on cross-referencing Access Now, NetBlocks,
  and KICTANet event reports. Localised events are hard to verify independently.
- **Social media reports**: Proxy for platform content moderation / takedowns.
  Inferred from internet usage rates and documented platform restrictions.

All estimates are clearly labelled as such in the data. The project prioritises
transparency over false precision.

---

## 7. ADVOCACY STRATEGY — HOW TO USE THIS PROJECT FOR REAL CHANGE

### FOIA Requests (Article 35)
Most effective lever. Template requests target county CECM ICT officers:
1. **AI Procurement** — which AI/automated systems does the county use, vendor,
   cost, DPIA status, algorithmic impact assessment
2. **Biometric Data** — what biometric data is collected, storage, third-party
   sharing, legal basis, consent mechanism
3. **Surveillance Systems** — CCTV count, locations, operator, maintenance
   costs, live facial recognition capability

### Data Protection Complaints
If counties do not respond to FOIA or refuse registration:
1. File complaint with ODPC under Section 34 DPA (data controller obligations)
2. ODPC can issue enforcement notices, fines, suspension of processing
3. Pattern: ODPC is more likely to act on official complaints than on letters

### Strategic Litigation
- ICJ Kenya and KHRC file digital rights cases
- Successful precedent: Mwaniki vs AG (2023) — right to data protection
  recognised under Article 31
- PSA (Public Service Accountability) cases can force county transparency

### County Budget Advocacy
- County budget estimates are public documents under the PFM Act
- Track ICT spending through the budget cycle (June = approval, July = start)
- Flag suspicious CCTV / AI procurement line items
- Submit memoranda to County Assembly Budget Committees

---

## 8. SENSITIVITIES & ETHICAL NOTES

- Surveillance data can be misinterpreted to incite fear or panic
- Do NOT identify individual surveillance targets (e.g. named activists)
- The "risk" labels (High/Elevated/Moderate/Lower) are relative, not absolute
- High surveillance in northeastern counties reflects counterterrorism, not
  state repression of ordinary citizens
- Some counties have low scores due to poverty and lack of infrastructure,
  not because they are safer — "low risk" can mean "too poor to surveil"
- Avoid implying that higher surveillance = more rights violations; context
  matters (a camera in a mall is different from a camera in a police station)
- Data gaps disproportionately affect marginalised counties — this is itself
  a digital rights observation worth making

---

## 9. NUMBERED LIST OF KEY TAKEAWAYS

1. Devolution means digital rights are both a national AND county issue —
   this project's 47-county model reflects Kenyan constitutional reality
2. Article 35 (FOIA) is the strongest legal tool — county ICT departments
   must respond to information requests within 21 days
3. The Data Protection Act 2019 applies to ALL county governments as data
   controllers — most are not in compliance
4. Internet shutdowns follow political lines: opposition strongholds bear
   the brunt of connectivity disruptions
5. Maisha Namba / digital ID creates a universal biometric surveillance
   infrastructure — county birth registration is the entry point
6. AI regulation is nonexistent in Kenya — county-level AI procurement
   happens without any algorithmic transparency or impact assessment
7. Kenya's internet is bifurcated: urban fibre vs rural mobile-only,
   creating a digital rights disparity between counties
8. Civil society organisations (KICTANet, ICJ Kenya, KHRC, Article 19)
   are the enforcement arm of Kenya's data protection framework
9. The next election cycle (Aug 2027) will intensify all digital rights
   dynamics — this map should be published well before campaigning begins
10. Every county score is an estimate with uncertainty — the project's
    value is in comparison and pattern-finding, not absolute precision
```

---

```
You are Gemini Pro 2.5 — a frontier AI model with significantly more advanced reasoning,
wider context window, and deeper analytical capability than the models that built the
current codebase. You have been explicitly asked to take over and elevate this project
to its highest possible version.

---

## PROJECT CONTEXT (read every word carefully)

Kenya AI & Digital Rights Observatory
GitHub: https://github.com/geraldkombo/kenya-ai-rights-observatory
Live: https://geraldkombo.github.io/kenya-ai-rights-observatory/
Author: Gerald Kombo (AI Accountability Fellow)
License: MIT
Stack: Next.js 16 (App Router, static export), TypeScript, Tailwind CSS v4, MapLibre GL JS
No tracking, no cookies, no backend. Fully client-side static site.

Concept: Interactive choropleth map of Kenya's 47 counties visualizing a composite
Digital Rights Risk Score (DRRS 0-100) across 5 dimensions:
  1. Surveillance Density (25%) — CCTV per capita, known AI surveillance systems
  2. Internet Health Deficit (25%) — shutdown hours, network restrictions
  3. Data Privacy Risk (20%) — ODPC complaints per capita, breach incidents
  4. Biometric Enrollment (10%) — national ID registration rates (Huduma Namba)
  5. Platform Impact (20%) — content moderation, algorithmic bias, platform restrictions

The DRRS is computed from 15 indicator fields per county including:
population, internet_usage_pct, mobile_ownership_pct, birth_registration_pct,
surveillance_score, internet_health_score, data_privacy_score,
biometric_enrollment_rate, platform_impact_score, ai_systems_count,
cctv_density, odpc_complaints, internet_shutdown_hours, social_media_reports

Data sources: KNBS 2019 Census, CA/KNBS 2023/24 Housing Survey, KNBS Vital Statistics 2023,
ODPC (9,061 complaints as of Mar 2026), KICTANet, Access Now #KeepItOn, OONI,
platform transparency reports (Meta, Google, TikTok, X), CIPESA, Amnesty Kenya, KHRC

The project is currently fully functional with: interactive map (hover tooltip, click select,
selected border, NavigationControl), Search (ARIA combobox), CountyDetails panel,
CountyRankings top5/bottom5, InsightsDashboard (4 stat cards), Compare page (radar charts +
comparison table), Methodology page, Brief page (printable per county), DUA page,
PWA (manifest + service worker), sitemap.xml, robots.txt, full print stylesheet,
@theme colour tokens, focus-visible global outline, 44px touch targets.

Build output: 0 errors, 6 static routes, ~320KB JS total.

---

## YOUR TASK

You have TWO missions, both equally important:

---

### MISSION 1: AUDIT & ELEVATE THE PRODUCT

Analyze every aspect of this project and produce a ranked list of improvements.
Be brutally honest — your analysis will directly inform the next development sprint.

For each improvement, specify:
- **Priority**: P0 (must do / embarrassing gap), P1 (significant value), P2 (nice to have)
- **Effort**: Small (hours), Medium (days), Large (weeks)
- **Impact**: How many users benefit, how much it improves the core experience
- **Implementation notes**: Specific guidance on how to build it

Consider ALL of these dimensions:

#### a) Data & Content
- Are there additional data layers that would dramatically increase value?
  (e.g. internet affordability index, mobile money agent density, freedom of information
  request response rates, gender digital divide metrics, disability access to digital services)
- Could the dataset be enriched with additional Kenya-specific indicators?
  (e.g. e-waste from surveillance infrastructure, digital ID litigation,社交媒体 monitoring bills,
   digital arrest records, content takedown orders by year)
- Is the data presentation too dense? Too sparse? What's missing between "county-level DRRS"
  and "actionable insight for a Kenyan activist"?
- Should there be a time-series dimension? (year-over-year DRRS trends per county)
- Are the data caveats and uncertainties communicated clearly enough?
- Should the raw data be downloadable (CSV export)?

#### b) Visual Design & UX
- Is the colour palette appropriate for a Kenyan audience? (current: warm earth tones)
- Does the information hierarchy make sense? What would a first-time visitor miss?
- Is the mobile experience truly excellent or just functional?
- Could the radar charts be more informative? (animation, value labels on hover, etc.)
- Should there be a dark mode? (consider energy savings on AMOLED screens in off-grid areas)
- Is the typography scale correct for the content density?
- Are there any visual cliches or patterns that undermine credibility?

#### c) Technical Architecture
- Is MapLibre GL JS the right choice, or would a lighter alternative work?
  (consider: Leaflet + GeoJSON-VT, deck.gl, kepler.gl for data exploration)
- Could the app benefit from WASM-based data processing for client-side computation?
- Is the bundle split optimally? Are there code-splitting opportunities?
- Should the app use a lightweight state manager (zustand, jotai) for cross-component state?
- Is there any unnecessary re-rendering? (check React DevTools profiling)
- Could Static Site Generation be augmented with ISR or partial prerendering?
- Should the GeoJSON be served in a compressed format (TopoJSON, flatgeobuf)?
- PWA: is the service worker caching strategy optimal for offline use in low-connectivity areas?

#### d) Content & Storytelling
- Does the home page tell a compelling story in the first 5 seconds?
- Should there be data stories / narrative essays (e.g. "The Turkana Paradox" as a full article)?
- Are the county briefs genuinely useful for a county-level activist? What else would they need?
- Should there be a glossary of terms? (surveillance density, DRRS, algorithmic bias, etc.)
- Should there be a "how to use this for advocacy" guide?
- Could the project produce automated PDF briefs per county?
- Should there be an embeddable version (iframe widget) for civil society websites?

#### e) Reach & Distribution
- Is the site discoverable via search? (check SEO fundamentals beyond sitemap/robots)
- Should there be a newsletter signup? (consider: zero-tracking approach using mailto links)
- Could the data feed into a public API for other developers to build on?
- Should there be a "share this county" feature (generates shareable card image)?
- Could the project syndicate via WhatsApp (dominant messaging platform in Kenya)?
- Are there local media partnerships that could embed the map on news articles?

#### f) Specific Technical Gaps to Check
- Does the brief page correctly render for all 47 county IDs when accessed directly?
- Is there a race condition where the search results list doesn't update after county select?
- Do the radar chart SVG labels overlap at any viewport size?
- Is the map tooltip positioning correct on mobile (touch vs mouse)?
- Does the print stylesheet work for county briefs (the primary print use case)?
- Are all ARIA attributes correctly wired (no aria-selected without role="option", etc.)?
- Does the 404 page handle deep-linked county brief URLs gracefully?

#### g) Internationalization
- Should the site support Swahili? (Kenya's national language alongside English)
- What about other Kenyan languages? (Kikuyu, Luo, Kalenjin, Kamba, Somali, etc.)
- What would a minimal i18n implementation look like? (next-intl, next-international)
- Is RTL support needed for Somali-language content?

---

### MISSION 2: FIND FUNDING, PARTNERSHIPS & GROWTH OPPORTUNITIES

Research and list EVERY realistic opportunity this project could pursue.

For each opportunity, provide:
- **Type**: Grant / Fellowship / Competition / Partnership / Publication / Award
- **Organization name**
- **Relevant program or fund name**
- **Estimated value** (if financial: amount range; if non-financial: what's offered)
- **Deadline** (if known; otherwise "rolling" or "annual")
- **Fit score** (1-10): How well this project matches the opportunity's criteria
- **Application effort** (Small: 1-3 days, Medium: 1-2 weeks, Large: 1+ month)
- **Why this fits**: Specific alignment between this project and the opportunity's goals
- **Recommended approach**: Who to contact, what to emphasize, what materials to prepare

Search across these categories AT MINIMUM:

#### 1. Digital Rights & Internet Governance Grants
- Open Technology Fund (OTF) — Internet Freedom, Community Networks, etc.
- Ford Foundation — Internet & Society, Technology and Society
- Mozilla Foundation — Responsible AI, Trustworthy AI
- Omidyar Network — Digital Identity, Digital Rights
- The Rockefeller Foundation — Digital transformation for inclusive economies
- IDRC (Canada) — AI for Development, Data Governance in Africa
- The Africa Digital Rights Fund (ADRF) — small grants for digital rights orgs
- Paradigm Initiative — Digital rights in Africa
- CIPESA — ICT policy, internet freedom in Africa
- Article 19 — Digital rights, freedom of expression online
- Access Now — Digital security, internet shutdowns
- EFF — Surveillance, digital privacy
- Privacy International — Strategic litigation, research

#### 2. AI Ethics & Responsible AI Grants
- The Patrick J. McGovern Foundation — AI for the public interest
- The Hastings Center — AI, ethics & society
- The AI Now Institute — Research collaborations
- The Distributed AI Research Institute (DAIR) — Community-centered AI
- Data & Society — Technology & society research
- The Rockefeller Foundation's Equity-First AI initiative
- The Bernard van Leer Foundation — Digital technology and early childhood
- The Lego Foundation — Digital play, technology and children's rights

#### 3. Journalism & Media Grants
- Pulitzer Center — AI accountability, data journalism fellowships
- International Center for Journalists (ICFJ) — AI journalism, disinformation
- European Journalism Centre — Innovation in news
- Internews — Information ecosystems, digital rights
- The Facebook Journalism Project — (Meta Journalism Project)
- The Google News Initiative — Data journalism, AI in newsrooms
- The National Endowment for Democracy — Media, technology & democracy
- Free Press Unlimited — Digital rights, media development
- Media Defence — Legal support for digital rights journalism

#### 4. Academic & Research Opportunities
- Research ICT Africa — Digital policy research
- The Alan Turing Institute — Data science for social good
- The Carnegie Endowment — Technology & international affairs
- The Berkman Klein Center — Internet & society research
- CITRIS Policy Lab — Technology policy
- Oxford Internet Institute — PhD/research positions
- The Centre for the Study of African Economies — Technology & development
- African Economic Research Consortium — Digital transformation
- Stellenbosch University Centre for AI Research (CAIR)

#### 5. Competitions & Awards
- UN World Summit on the Information Society (WSIS) Prizes
- The Data Journalism Awards
- The African Digital Economy Award
- The World Bank's Big Data Innovation Challenge
- MIT Solve Challenge — Digital inclusion, technology for human rights
- The Omidyar Network's Tech for Good awards
- The Index on Censorship Freedom of Expression Awards
- The African Union's Digital Transformation Strategy awards
- The Skoll Foundation Awards

#### 6. Tech-for-Good Incubators & Accelerators
- The Engine (MIT) — Deep tech
- Fast Forward — Tech nonprofits
- Impact Wales — Social impact tech
- Nesta Challenges — Data-driven innovation
- The Data for Good Exchange (Bloomberg)
- Digital Impact Alliance (DIAL) at UN Foundation
- The Global Partnership for Sustainable Development Data
- The GovLab — Data-driven governance
- The ODI (Open Data Institute) — Startups, data for good

#### 7. Kenyan-Specific Opportunities
- The Kenya ICT Action Network (KICTANet) — Research grants
- The Kenya Community Development Foundation — Digital rights
- Media Council of Kenya — Journalism grants
- The African Women in Tech (AWIT) — Digital rights & gender
- The Kenya National Innovation Agency (KENIA) — Tech innovation grants
- The Ajira Digital Program — Government digital inclusion
- The Kenya Private Sector Alliance (KEPSA) — Digital transformation
- M-Pesa Foundation — Digital inclusion
- The British Council Kenya — Digital arts, creative economy
- Strathmore University — iLab Africa, digital policy research
- The University of Nairobi — AI & data science research partnerships

#### 8. Publication & Visibility Opportunities
- Global Voices — Digital rights reporting
- Rest of World — Technology in emerging markets
- Logic Magazine — Long-form tech criticism
- Noema Magazine — Tech & philosophy
- The Markup — Data-driven tech accountability journalism
- Wired — International tech features
- The Continent (Africa's digital newspaper) — Weekly distribution
- African Arguments — Pan-African analysis
- The Conversation Africa — Academic-public bridging
- MIT Technology Review Africa

#### 9. List of Potential Partners by Category

**Civil Society:**
- Kenya Human Rights Commission (KHRC)
- Article 19 East Africa
- KICTANet
- CIPESA (Collaboration on International ICT Policy in East and Southern Africa)
- Paradigm Initiative
- The Internet Society (ISOC) Kenya Chapter
- Amnesty International Kenya
- The African Defenders (DefendDefenders)
- The Kenya Section of the International Commission of Jurists (ICJ Kenya)

**Academic:**
- Strathmore University (Centre for Intellectual Property and Information Technology Law)
- University of Nairobi (School of Law, School of Computing)
- Daystar University (Communication Department)
- Moi University (ICT Department)
- The African Centre for Technology Studies (ACTS)
- The Kenya Institute for Public Policy Research and Analysis (KIPPRA)

**Government:**
- The Office of the Data Protection Commissioner (ODPC)
- The Communications Authority of Kenya (CA)
- The Kenya National Commission on Human Rights (KNCHR)
- The Ministry of Information, Communications and The Digital Economy
- The National Transport and Safety Authority (NTSA — intelligent transport systems)
- The Independent Electoral and Boundaries Commission (IEBC — digital voting systems)

**International:**
- UNDP Kenya — Digital governance, SDGs
- UNICEF Kenya — Digital rights for children
- UNESCO Nairobi — Internet freedom, media development
- The World Bank Kenya — Digital economy
- USAID Kenya — Digital development, open data
- The British High Commission Nairobi — Digital access programme
- The German Embassy Nairobi — Digital transformation partnership
- The EU Delegation to Kenya — Digital for development

---

## OUTPUT FORMAT

Begin your response with:

```
# KENYA AI & DIGITAL RIGHTS OBSERVATORY — FULL AUDIT & OPPORTUNITY MAP
Generated by Gemini Pro 2.5 | Date: June 2026
```

Then organize your output into these sections:

### SECTION A: PRODUCT AUDIT
Ranked improvement list (P0, P1, P2) with effort, impact, and implementation notes.

### SECTION B: PARTNERSHIPS & FUNDING ROADMAP
Curated, ranked list of the TOP 30 opportunities (across all categories above)
with fit score, value, deadline, and recommended approach.

Include a priority matrix:
```
HIGH VALUE + LOW EFFORT → Pursue immediately
HIGH VALUE + HIGH EFFORT → Strategic (plan over 3-6 months)
LOW VALUE + LOW EFFORT → Quick wins
LOW VALUE + HIGH EFFORT → Skip
```

### SECTION C: 30-DAY SPRINT PLAN
If you had a team of 1 developer + 1 domain expert for 30 days,
what exactly would you build? Day-by-day breakdown of what delivers
the most impact for the least effort.

### SECTION D: DATA WISHLIST
What 5-10 additional datasets would most dramatically increase the
project's value and credibility? List specific data sources and
whether they exist or need to be created.

Include:
- Internet affordability index (price of 1GB as % of income) per county
- Mobile money agent density per county
- FOIA response rates by government entity
- Gender digital divide metrics
- Disability-inclusive digital access scores
- e-waste from surveillance infrastructure per county
- Social media users by platform per county
- Digital ID litigation/policy changes by year

### SECTION E: INTERNATIONALIZATION STRATEGY
What would a Swahili version look like? Estimate effort and recommend
whether it's worth doing.

---

## CRITICAL INSTRUCTIONS

1. Be specific. NOT "improve the UX" but "move the score legend into the map
   container as an overlay, reducing vertical space by 40px on mobile"
2. Be honest about tradeoffs. Every recommendation should weigh cost vs benefit.
3. Reference real programs, real deadlines, real amounts where possible.
4. Consider the Kenyan context specifically — don't recommend Western-centric solutions.
5. Consider low-bandwidth, intermittent-connectivity use cases.
6. The project has zero budget. Prioritize free/inexpensive opportunities.
7. The project has one primary maintainer. Don't recommend unsustainable maintenance loads.
8. Output should be comprehensive enough that the maintainer can work from it
   for the next 6 months without additional strategic input.
```


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

---

## Prompt 22 (PERFECT): Full UI polish to Nairobi Health Equity Map quality

```
You are refining the Kenya AI & Digital Rights Observatory to match the production
quality of the Nairobi Health Equity Map (KHEM). Apply EVERY polish pattern below
to EVERY component. The goal is zero rough edges — every interaction should feel
intentional, every state should be handled, every screen size should look designed.

The codebase is at the repo root. All source files are in src/.
Output is static export to out/. Build with: npm run build.

---

### 1. TRANSITIONS & ANIMATIONS

Every interactive element MUST have one of these transition classes:

- Button/link hover: `transition-colors` (no duration needed, default 150ms)
- Card hover (shadow change): `transition-all duration-200 ease-in-out hover:shadow-md`
- Progress bar fill: `transition-all duration-300` on the inner coloured div
- Chevron/spin: `transition-transform duration-200`

Specific fixes needed:

1. All `<button>` and `<a>` elements: add `transition-colors`
2. All stat cards (InsightsDashboard): add `transition-all duration-200 ease-in-out hover:shadow-md`
3. CountyRankings rows: add `transition-colors hover:border-stone-400`
4. Progress bars (CountyDetails): add `transition-all duration-300` on the inner coloured div
5. All score badges: add `transition-colors`
6. Search dropdown items: add `transition-colors hover:bg-stone-100`
7. Footer links: add `transition-colors`

---

### 2. LOADING STATES

Replace all inline loading checks with a single `loaded` atomic boolean pattern.

Current pattern (DO NOT USE):
```tsx
const [boundaries, setBoundaries] = useState(null);
useEffect(() => { fetch(...).then(setBoundaries) }, []);
// ... in render: {boundaries ? <MapView ... /> : <Loading />}
```

NEW pattern (USE THIS):
```tsx
const [loaded, setLoaded] = useState(false);
const [error, setError] = useState("");
const [boundaries, setBoundaries] = useState(null);

useEffect(() => {
  async function load() {
    try {
      const data = await fetchJSON("/data/boundaries.geojson");
      if (!data || !data.features) throw new Error("Boundaries data missing features");
      setBoundaries(data);
      setLoaded(true);
    } catch (e: any) {
      setError(`Data load error: ${e?.message ?? "Unknown"}`);
    }
  }
  load();
}, []);
```

Then in render:
```tsx
{error && <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700" role="alert">{error}</div>}
{!loaded ? <LoadingPlaceholder /> : <MapView ... />}
```

Every loading placeholder MUST visually mirror the final component shape:
- Map placeholder: `flex h-[400px] items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-sm text-stone-500`
- Rankings placeholder: Same dimensions as the rankings panel
- Details placeholder: Same dimensions as the details panel

Apply this pattern across ALL pages and components.

---

### 3. MAP POLISH (MapView.tsx)

Add these to the existing map implementation:

1. **Navigation control**: After `fitBounds`, add:
   ```tsx
   map.addControl(new maplibregl.NavigationControl(), "bottom-right");
   ```

2. **Tooltip clamp**: Prevent tooltip from overflowing viewport:
   ```tsx
   style={{
     left: Math.min(hoverInfo.x + 16, window.innerWidth - 220),
     top: hoverInfo.y + 16,
   }}
   ```

3. **Tooltip styling**: Use white background with border, not dark:
   ```tsx
   className="pointer-events-none absolute z-50 rounded-lg border border-stone-200 bg-white p-3 shadow-lg"
   role="tooltip"
   aria-live="polite"
   ```

4. **Selected county highlight**: Make it obvious — change the fill-opacity or
   add a bright border. Currently it's just a 3px dark line. Use a fill-color
   case expression instead that brightens/highlights the selected county.

5. **Map resize on panel open**: When mobile bottom sheet opens, resize the map:
   ```tsx
   useEffect(() => {
     const map = mapRef.current;
     if (!map) return;
     const timer = setTimeout(() => {
       try { map.resize(); } catch (e) { console.error('Map resize error:', e); }
     }, 500);
     return () => clearTimeout(timer);
   }, [selectedCountyCode]);
   ```

6. **Map container ARIA**: Add `role="application"` and `tabIndex={0}` to the map
   container div.

---

### 4. RESPONSIVE DESIGN

Current responsive breakpoints are set. Add these refinements:

1. **Stat cards**: Ensure 2-column on mobile, 4-column on `sm:` and above.
   Current: `grid-cols-2 sm:grid-cols-4` ✓ Already correct.

2. **Mobile bottom sheet**: Use `max-h-[70svh]` (svh, not vh) for proper mobile
   browser toolbar behavior. Current: `max-h-[70svh]` ✓ Already correct.

3. **Search**: On mobile, full width. On desktop (`md:`), show a
   `Cmd+K` keyboard shortcut hint next to the input.

4. **Header**: Ensure `backdrop-blur-sm` with `bg-white/95` for frosted glass
   effect on all viewports.

5. **Typography**: On mobile, use `text-xs` for body. On desktop (`sm:`), bump
   to `text-sm`. This pattern should be consistent everywhere:
   ```tsx
   className="text-xs sm:text-sm"
   ```

---

### 5. TYPOGRAPHY & SPACING

Standardise these patterns across ALL components:

1. **Labels**: Always `text-xs uppercase tracking-wider font-semibold text-stone-600`
2. **Stat values**: Always `text-2xl font-bold text-stone-900`
3. **Section headings**: Always `text-sm font-semibold text-stone-900`
4. **Card padding**: Always `p-5` (not `p-4`, not `p-6`)
5. **Border colour**: Always `border-stone-200` (current brand is `border-[#E0DBD0]` = same)
6. **Background**: Cards use `bg-white`, body background is `bg-cream`/`bg-[#FDFBF7]`

Replace all hex colour inline classes with the brand variables where possible:
- `#292524` → `text-stone-900` / `text-[#292524]`
  (Tailwind v4 @theme defines these, but the @theme names are custom:
   `text-brand-dark` = `#292524`, etc.)

Actually, use the @theme custom names consistently:
- `text-brand-brown` for #78350F
- `text-brand-orange` for #EA580C
- `text-brand-dark` for #292524
- `text-brand-stone` for #6B6355
- `text-brand-muted` for #A8A08F
- `border-brand-border` for #E0DBD0
- `bg-brand-bg` for #F8F5F0
- `bg-brand-cream` for #FDFBF7

Replace ALL hardcoded hex colour utility classes with these @theme token names.

---

### 6. MICRO-INTERACTIONS

Add these interaction states to EVERY interactive element:

1. **Buttons**: `hover:` state changes background/text colour.
   `active:` state adds a darker background. `focus-visible:` adds an outline ring.
   ```tsx
   className="... hover:bg-stone-50 active:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C]"
   ```

2. **Cards**: `hover:shadow-md` with `transition-all duration-200 ease-in-out`

3. **Rankings rows**: `hover:border-stone-400` (border colour change on hover)

4. **Chevrons/collapse indicators**: Rotate 180 degrees on open:
   ```tsx
   className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
   ```

5. **Score badges**: No special hover states, but ensure colours shift smoothly
   with `transition-colors`

---

### 7. PRINT STYLES

Add this comprehensive print stylesheet to globals.css (before the body rule,
after the @theme block):

```css
@media print {
  @page { size: A4; margin: 10mm; }

  html {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    color-adjust: exact;
  }

  body {
    background: white !important;
    color: #1C1917 !important;
    font-size: 8pt;
    line-height: 1.3;
  }

  .no-print,
  .print\:hidden { display: none !important; }
  .print-only { display: block !important; }

  a[href]::after { content: none; }
  a { text-decoration: underline; color: #292524 !important; }

  img, svg { break-inside: avoid; max-width: 100% !important; }
  h1, h2, h3, h4 { break-after: avoid; }

  table, figure, .break-inside-avoid {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  .rounded-lg, .rounded-xl {
    border: 1px solid #292524 !important;
    box-shadow: none !important;
  }

  .bg-stone-50, .bg-stone-100, .bg-cream, .bg-brand-bg {
    background: transparent !important;
  }
}
```

Then add `print:hidden` to:
- Header navigation
- Search bar
- Bottom sheet close button
- Footer action links
- Reset button on Compare page

Add `break-inside-avoid` to:
- CountyDetails cards
- Comparison result cards
- Stat cards

---

### 8. ERROR STATES

Ensure every data-fetching component has these 3 states:

1. **Loading state**: Shows placeholder matching component shape
2. **Error state**: Shows inline error div with `role="alert"`
3. **Ready state**: Shows the actual content

The error div pattern:
```tsx
<div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700" role="alert">
  {errorMessage}
</div>
```

Currently the page.tsx has error handling partially. Add a proper `error` state
string, and render it above the map when set. Make sure the error message is
informative and actionable.

---

### 9. DATA LOADING

Refactor page.tsx to use the KHEM `async function load()` pattern:

```tsx
useEffect(() => {
  async function load() {
    try {
      // Validate data shape after fetch
      const [boundariesData] = await Promise.all([
        fetchJSON("/data/boundaries.geojson"),
      ]);
      if (!boundariesData || !boundariesData.features) {
        throw new Error("Boundaries data missing features");
      }
      setBoundaries(boundariesData);
      setLoaded(true);
    } catch (e: any) {
      setError(`Data load error: ${e?.message ?? "Unknown"}`);
    }
  }
  load();
}, []);
```

Benefits:
- Single `loaded` boolean prevents flash of partial UI
- Single `error` string prevents uncaught promise rejections
- Response validation catches malformed data early
- All data loads atomically (appears all at once)

---

### 10. ACCESSIBILITY

Add these accessibility patterns to EVERY component:

1. **Focus-visible ring**: Global style in globals.css:
   ```css
   *:focus-visible {
     outline: 2px solid #EA580C;
     outline-offset: 2px;
   }
   ```
   Apply `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EA580C]`
   to ALL buttons and interactive elements that aren't native `<a>` or `<button>`.

2. **ARIA attributes**:
   - Map container: `role="application"`, `tabIndex={0}`, `aria-label="Map of Kenya counties with digital rights risk data"`
   - Tooltip: `role="tooltip"`, `aria-live="polite"`
   - Error banners: `role="alert"`
   - Search: `role="combobox"`, `aria-expanded`, `aria-controls`, `aria-activedescendant`
   - Search results: `role="listbox"`, `role="option"`, `aria-selected`
   - HowToUse: `aria-expanded`, `aria-controls`
   - Bottom sheet close button: `aria-label="Close county details"`

3. **Touch targets**: All clickable elements MUST have minimum 44px height:
   ```tsx
   className="min-h-[44px] ..."
   ```
   Apply to: header nav links, buttons, search input, rankings rows,
   bottom sheet close button, footer links.

4. **Semantic HTML**: Use `<header>`, `<main>`, `<section>`, `<nav aria-label="...">`,
   `<table>`, `<th>`, etc. appropriately throughout.

5. **Screen reader live regions**: Dynamic content updates need `aria-live="polite"`:
   - County details panel content
   - Comparison results
   - Search results count

6. **Keyboard navigation**: Search should handle ArrowDown/ArrowUp/Enter/Escape.
   Bottom sheet should trap focus when open on mobile.

---

### IMPLEMENTATION ORDER

Apply these changes in this order:

1. First, make ALL changes to globals.css (print styles, focus-visible, theme tokens)
2. Update src/app/page.tsx with the single `loaded` + `error` pattern
3. Rewrite MapView.tsx with all map polish (navigation control, tooltip clamp, resize, ARIA)
4. Update all components with transition classes and hover states
5. Replace all hex colour inline classes with @theme token names
6. Add ARIA attributes and touch targets throughout
7. Add print:hidden and print-specific classes
8. Run npm run build and fix any TypeScript errors
9. Test all interactions in browser
10. Commit and push

---

### VERIFICATION

After all changes, verify:
- `npm run build` produces 0 errors
- Every button has hover/focus/active states
- Every card has hover shadow transition
- Loading states are atomic (single `loaded` boolean)
- Error states use the red bordered div pattern
- Map has NavigationControl and resize handler
- Tooltip is white with border, clamped to viewport
- Print stylesheet is complete
- All colour tokens use @theme names, not hex values
- All interactive elements have 44px min-height
- Search has full keyboard + ARIA support
- `focus-visible` outline works on all interactive elements
- Mobile bottom sheet has `max-h-[70svh]`

Do NOT half-implement any section. Every component must be polished or it will
stand out as unfinished. The goal is KHEM parity — indistinguishable production quality.
```

## Prompt 25 — Polish BarCompare, mobile header, and rename consistency

You are reviewing recent changes to the Kenya Digital Rights Risk Atlas (renamed from "Kenya AI & Digital Rights Observatory"). Three changes need polishing for production quality:

### 1. BarCompare component (`src/components/BarCompare.tsx`)
Replaced dual radar chart comparison with a compact horizontal bar chart. Review for:
- Visual polish: bar colors, height, spacing, typography, animation
- Accessibility: aria-labels, keyboard nav, screen reader hints for which county has higher/lower risk
- Mobile: works at 320px width without overflow, bars remain distinguishable
- Color logic: higher-risk county gets brand-brown (#78350F) or brand-orange (#EA580C), lower gets brand-muted (#A8A08F)
- Add a subtle label or legend explaining the bar direction (higher bar = higher risk)
- Consider smooth CSS transition on data change (already has duration-500)

### 2. Mobile hamburger menu (`src/components/Header.tsx`)
Added hamburger toggle for <640px screens. Review for:
- Animations: menu should slide/fade in, not appear abruptly; hamburger icon should animate to X
- Focus trap: when menu is open, Tab should cycle within menu links only
- Escape key closes the menu
- Click outside closes the menu
- Body scroll lock when menu is open (prevent background scrolling)
- aria-expanded, aria-controls, role="dialog" on menu panel
- Ensure no layout shift when menu opens (menu should overlay, not push content down)

### 3. Rename consistency check
Project renamed to "Kenya Digital Rights Risk Atlas". Check all user-facing text across routes:
- `src/app/layout.tsx` — siteName, description, OG/twitter descriptions
- `src/components/Header.tsx` — header title
- `src/app/brief/page.tsx` — footer attribution
- `src/app/dua/page.tsx` — data page copy
- `public/manifest.json` — PWA name
- `public/og-image.svg` — OG image text
- `README.md` — project title and description
- `gemini-prompts.md` — header line (already updated)
- Are there any stale references to "AI", "Observatory", or "algorithmic systems" remaining?
- Do description fields accurately reflect the project (surveillance, data privacy, digital rights — not AI)?

Return a diff or edit commands for each issue found. Do NOT rewrite entire files — only targeted fixes.
```

## Prompt 26 — PRODUCTION FINAL: Perfect the Kenya Digital Rights Risk Atlas for June 2026 (AMREF CSS Forum Submission)

You are a senior product engineer preparing the **Kenya Digital Rights Risk Atlas** for a conference submission to the **AMREF Community Systems Strengthening (CSS) Forum** under **Sub-theme 2: Digital Health and Evidence Generation Through Community-Led Monitoring**. This tool must be the absolute best version of itself — June 2026 state-of-the-art, indistinguishable from a well-funded institutional product. This is the final polish before submission.

### Project Context

**What this tool is:** A production-grade, offline-capable PWA that maps digital rights risks (surveillance, internet health, data privacy, biometric enrollment, platform impact) across Kenya's 47 counties. No server, no tracking, no backend — static Next.js export hosted on GitHub Pages.

**What it is NOT:** An AI-focused tool. Recently renamed from "Kenya AI & Digital Rights Observatory" to accurately reflect its scope.

**Tech stack:**
- Next.js 16.2.7 static export + Turbopack
- MapLibre GL JS (no Mapbox — fully open-source)
- Tailwind CSS v4 with @theme tokens
- TopoJSON (120KB, 36% smaller than GeoJSON)
- html2canvas for WhatsApp share cards
- Pure SVG sparklines
- PWA service worker (cache-first tiles, network-first JS/CSS)

**57 static routes:** Home, Explore, Compare, Brief, Method, Advocacy, Data (Dua), 47 county embed routes, _not-found

**Live URL:** https://geraldkombo.github.io/kenya-ai-rights-observatory/

### What Has Been Built (Complete Inventory)

**Data layer:**
- 47 counties with 15 indicators each (population, surveillance, internet health, data privacy, biometric enrollment, platform impact, AI systems count, CCTV density, ODPC complaints, internet shutdown hours, social media reports, internet usage %, mobile ownership %, birth registration %)
- DRRS scoring algorithm with 5 weighted dimensions (25% surveillance, 25% internet health, 20% data privacy, 10% biometric, 20% platform impact)
- Historical time-series estimation (2024-2026) with dimension-specific growth rates
- FOIA data model with 3 pilot requests and stampedRef chain-of-custody
- Neighbor adjacency data for all 47 counties

**Pages & features:**
- `/` — Interactive choropleth map with legend, search, stats dashboard, county click → sidebar details / mobile bottom sheet, export CSV, WhatsApp share card
- `/explore` — Sortable/filterable data table with inline sparklines per dimension per county
- `/compare` — Two-county comparison with BarCompare horizontal bars, dimension table, geographic context, neighbor optgroup selectors
- `/brief?id=X` — Printable county brief with indicators, score breakdown bars, neighboring counties chips, FOIA actions
- `/method` — Methodology documentation
- `/advocacy` — 4 FOIA templates, escalation pathway (FOIA→CAJ→ODPC→High Court), FOIA tracker dashboard
- `/dua` — Data sources, citation
- `/embed/[county]` — 47 embeddable county widgets (lightweight, no chrome)

**Design system (KHEM-aligned):**
- Tailwind stone palette (stone-50 body, stone-800 text, stone-500 muted)
- White header with backdrop blur, stone borders
- Brand accent colors: brown #78350F, orange #EA580C
- 44px minimum touch targets
- focus-visible orange outline ring
- aria-live on dynamic panels

**PWA & Offline:**
- Service worker v4 with cache-first tiles, network-first JS/CSS
- Pre-cached HTML shell for 7 routes + TopoJSON + manifest + icons
- `apple-mobile-web-app-title: "Digital Rights KE"`
- Manifest.json with 192/512 icons, start_url, display: standalone

**Accessibility (production audit passed):**
- scope="col" on all table headers
- tabIndex + Enter/Space keyboard sort on explore headers
- aria-live on 3 loading states + 1 status cell
- print:hidden on non-printable elements
- role="alert" on errors, role="note" on key findings
- aria-label on SVG charts and interactive elements

### The Mission: Make This the Absolute Best Tool in Existence for Its Purpose

You must review every file and every feature. Below are the mandatory improvement areas. Do NOT skip any.

#### 1. Code Quality & Architecture

- **TypeScript strictness:** Every `any` must be eliminated. Every prop interface must be explicit. No implicit `any` anywhere.
- **Component decomposition:** Any component over 200 lines must be split. Repeated patterns (cards, badges, table cells) must be extracted.
- **Dead code elimination:** Remove unused imports, unused variables, commented-out code, console.log statements.
- **Error boundaries:** Every data-fetching component needs an error boundary. The map should gracefully handle TopoJSON parse failures.
- **Loading states:** Every dynamic import needs a proper loading skeleton (not just "Loading..." text). SVG skeleton placeholders for charts.
- **Constants file:** Extract all magic strings, dimension labels, color values into `src/lib/constants.ts`.

#### 2. Performance

- **Bundle analysis:** Check that no library is bloating the bundle. Confirm tree-shaking is working.
- **Image optimization:** All icons should be SVG. No raster images in the build.
- **CSS purge:** Confirm Tailwind v4 is purging unused classes. Check the final CSS size.
- **MapLibre GL:** Only load the CSS once. Confirm no duplicate map instances.
- **Font loading:** Inter font should use `font-display: swap` with a fallback. Confirm no flash of invisible text (FOIT).

#### 3. Mobile UX (Highest Priority for CSS Forum — Community Health Workers Use Phones)

- **Touch targets:** Every interactive element must be min 44×44px. Audit with a physical device test at 320px width.
- **Bottom sheet:** The county detail bottom sheet on mobile must be draggable (touch drag to dismiss), smooth spring animation, proper backdrop blur.
- **Table horizontal scroll:** The explore table must scroll smoothly, with sticky first column (county name) remaining visible. Scroll indicator (fade gradient on right edge).
- **Map on mobile:** Full-width, with legend below the map (not overlaid). The "Instructions for use" accordion (like KHEM) should be above the map.
- **Select dropdowns:** Native `<select>` elements on iOS often clip. Test on Safari iOS. Consider a custom dropdown or ensure native select works with `font-size: 16px` (prevents iOS zoom).

#### 4. Accessibility (WCAG 2.1 AA Minimum, AAA Where Possible)

- **Color contrast:** All text must meet 4.5:1 ratio (normal) or 3:1 (large). The brown #78350F on cream #FAFAF9 must be checked.
- **Screen reader:** Navigate the entire app with VoiceOver (macOS) and TalkBack (Android). Every dynamic update must trigger aria-live.
- **Keyboard:** Full keyboard navigation. Tab order must match visual order. No focus traps (except the mobile menu when open).
- **Reduce motion:** Support `prefers-reduced-motion`. Disable all CSS transitions and animation when the user prefers reduced motion.
- **Dark mode:** Not required, but if implemented, must respect `prefers-color-scheme: dark`.

#### 5. PWA & Offline (Critical for Field Workers)

- **Offline fallback:** When offline, the home page must still show the map (even if tiles fail gracefully). Show a subtle "offline mode" indicator.
- **Cache strategy:** Review sw.js cache policies. Use Stale-While-Revalidate for data files. Cache-first for TopoJSON and fonts. Network-first for JS/CSS.
- **Background sync:** Queue FOIA requests for when connectivity returns (even if just localStorage + "pending" badge).
- **Install prompt:** Trigger the beforeinstallprompt event on second visit. Show an "Install App" banner.
- **Updated content:** When the service worker detects new content, show a "Update available" toast with a refresh button.

#### 6. Data & Scoring

- **Data freshness:** Update all 47 county indicators to June 2026 values. Use the latest available open data (KNBS 2025/26 projections, ODPC 2025 annual report, OSF Kenya 2026).
- **Scoring calibration:** Review the DRRS formula weights. Are the 25/25/20/10/20 splits justified? Add a citation or rationale in the methodology.
- **Historical trends:** The estimateHistory() function generates 2024-2026 data. Validate the growth rates against observed trends. Document the estimation methodology.
- **FOIA data:** Add the actual stampedRef numbers from physical registry delivery. Update status on the 3 pilot FOIA requests.

#### 7. CSS Forum Pitch — Why This Tool Wins

This tool demonstrates exactly what Sub-theme 2 requires:
- **Community-Led Monitoring:** Citizens use the tool to track surveillance, submit FOIA requests, and escalate rights violations. The embedded county widgets let community organizations publish risk data on their own sites.
- **Digital Health Evidence Generation:** The tool generates structured, comparable data across all 47 counties. Time-series sparklines show trends. CSV export enables offline analysis.
- **Offline-First Design:** Field workers in areas with poor connectivity can still access cached data. FOIA requests are queued locally.
- **Open Data, No Tracking:** All code is MIT licensed on GitHub. No analytics, no cookies, no user tracking — ethical by design.

#### 8. Final Polish Checklist

- [ ] No `TODO` or `FIXME` comments remain in source code
- [ ] No `console.log` or debug statements
- [ ] All SVG icons use currentColor for theme-ability
- [ ] OG image shows the correct project name (not "AI")
- [ ] README.md is accurate and complete
- [ ] sitemap.xml includes all 57 routes
- [ ] robots.txt allows indexing
- [ ] favicon.ico exists as fallback
- [ ] 404 page is helpful with navigation back to map
- [ ] Print layout works for brief page (A4, clean typography)
- [ ] All links open in same tab (no target="_blank" without rel)
- [ ] No hardcoded URLs — use the BASE constant

### Delivery Format

For each issue found, provide:
1. **File path and line number** of the issue
2. **What's wrong** (one sentence)
3. **The fix** (exact edit command with oldString and newString)

Return issues grouped by file, prioritised by impact (P0 = crash/blocker, P1 = usability, P2 = polish).

At the end, give a **confidence score** (0-100%) that the tool is ready for:
- Conference submission under Sub-theme 2
- Field use by community health workers on low-end Android phones
- Offline operation in areas with <10% internet penetration

Start. Read every file. Miss nothing.
```


