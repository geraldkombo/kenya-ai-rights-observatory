import type { FoiaRequest } from "./types";

export const foiaRequests: FoiaRequest[] = [
  {
    id: "FOIA-001",
    county: "Nairobi",
    requestType: "CCTV",
    dateSubmitted: "2026-06-01",
    status: "Acknowledged",
    daysPending: 8,
    notes: "County Clerk confirmed receipt. Awaiting substantive response on CCTV procurement contracts.",
  },
  {
    id: "FOIA-002",
    county: "Kisumu",
    requestType: "HealthData",
    dateSubmitted: "2026-06-03",
    status: "Submitted",
    daysPending: 6,
    notes: "Submitted to CECM ICT via registered post. No acknowledgment yet.",
  },
  {
    id: "FOIA-003",
    county: "Garissa",
    requestType: "Biometric",
    dateSubmitted: "2026-06-05",
    status: "Submitted",
    daysPending: 4,
    notes: "Filed under Article 35 for biometric enrollment protocols in county health facilities.",
  },
];
