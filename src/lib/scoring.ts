import type { DigitalRightsIndicators, DRSScore } from "./types";

function normalize(value: number, min: number, max: number): number {
  if (max === min) return 0.5;
  return Math.max(0, Math.min(1, (value - min) / (max - min)));
}

const RANGES = {
  surveillance: { min: 0, max: 100 },
  internetHealth: { min: 0, max: 100 },
  dataPrivacy: { min: 0, max: 100 },
  biometric: { min: 0, max: 100 },
  platformImpact: { min: 0, max: 100 },
};

export const DIM_DESC: Record<string, string> = {
  surveillance: "CCTV cameras and government monitoring systems in public spaces",
  internetHealth: "Hours of internet shutdown, throttling, or restriction in the past year",
  dataPrivacy: "Complaints filed with the Office of the Data Protection Commissioner (ODPC)",
  biometric: "Share of population enrolled in government digital ID systems (Huduma Namba, Maisha Namba)",
  platformImpact: "Accounts, pages, or posts removed or restricted by social media platforms",
};

export function computeDRRS(
  countyId: string,
  ind: DigitalRightsIndicators
): DRSScore {
  const surveillance = normalize(ind.surveillance_score, RANGES.surveillance.min, RANGES.surveillance.max);
  const internetHealth = 1 - normalize(ind.internet_health_score, RANGES.internetHealth.min, RANGES.internetHealth.max);
  const dataPrivacy = normalize(ind.data_privacy_score, RANGES.dataPrivacy.min, RANGES.dataPrivacy.max);
  const biometric = normalize(ind.biometric_enrollment_rate, RANGES.biometric.min, RANGES.biometric.max);
  const platformImpact = normalize(ind.platform_impact_score, RANGES.platformImpact.min, RANGES.platformImpact.max);

  const drrs = Math.round(
    (surveillance * 0.25 + internetHealth * 0.25 + dataPrivacy * 0.2 + biometric * 0.1 + platformImpact * 0.2) * 100
  );

  const drivers: string[] = [];
  if (surveillance > 0.6) drivers.push(`CCTV cameras per 10K people: ${ind.cctv_density}`);
  if (internetHealth > 0.6) drivers.push(`Shutdown hours in past year: ${ind.internet_shutdown_hours}h`);
  if (dataPrivacy > 0.6) drivers.push(`ODPC complaints reported: ${ind.odpc_complaints}`);
  if (biometric > 0.6) drivers.push(`Digital ID enrollment: ${ind.biometric_enrollment_rate}% of population`);
  if (platformImpact > 0.6) drivers.push(`Account suspensions on record: ${ind.social_media_reports}`);

  return {
    drrs,
    surveillance: Math.round(surveillance * 100),
    internetHealth: Math.round(internetHealth * 100),
    dataPrivacy: Math.round(dataPrivacy * 100),
    biometric: Math.round(biometric * 100),
    platformImpact: Math.round(platformImpact * 100),
    drivers,
  };
}

export function getDRRSColor(score: number): string {
  if (score >= 70) return "#8C2D04";
  if (score >= 50) return "#D95F0E";
  if (score >= 30) return "#FEC44F";
  return "#FFF7BC";
}

export function getDRRSBadgeClass(score: number): string {
  if (score >= 70) return "bg-[#8C2D04] text-white";
  if (score >= 50) return "bg-[#D95F0E] text-white";
  if (score >= 30) return "bg-[#FEC44F] text-[#292524]";
  return "bg-[#FFF7BC] text-[#292524]";
}
