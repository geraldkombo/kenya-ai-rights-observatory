import type { DigitalRightsIndicators, YearRecord } from "./types";

const GROWTH: Record<string, number> = {
  surveillance_score: 1.08,
  internet_health_score: 0.97,
  data_privacy_score: 1.12,
  biometric_enrollment_rate: 1.05,
  platform_impact_score: 1.08,
  ai_systems_count: 1.18,
  cctv_density: 1.15,
  odpc_complaints: 1.25,
  social_media_reports: 1.10,
  internet_usage_pct: 1.04,
  mobile_ownership_pct: 1.02,
  birth_registration_pct: 1.02,
};

const OPPOSITION_IDS = new Set(["37", "38", "39", "40", "41", "42", "43", "44"]);

export function estimateHistory(ind: DigitalRightsIndicators): YearRecord[] {
  const base: YearRecord = {
    county_code: ind.county_code,
    year: 2026,
    surveillance_score: ind.surveillance_score,
    internet_health_score: ind.internet_health_score,
    data_privacy_score: ind.data_privacy_score,
    biometric_enrollment_rate: ind.biometric_enrollment_rate,
    platform_impact_score: ind.platform_impact_score,
    ai_systems_count: ind.ai_systems_count,
    cctv_density: ind.cctv_density,
    odpc_complaints: ind.odpc_complaints,
    internet_shutdown_hours: ind.internet_shutdown_hours,
    social_media_reports: ind.social_media_reports,
    internet_usage_pct: ind.internet_usage_pct,
    mobile_ownership_pct: ind.mobile_ownership_pct,
    birth_registration_pct: ind.birth_registration_pct,
    population: ind.population,
  };

  const isOpposition = OPPOSITION_IDS.has(ind.county_code);

  function applyYear(year: number, factor: number): YearRecord {
    const prev = (y: number) => Math.round(base.surveillance_score / Math.pow(GROWTH.surveillance_score, y));
    const prevPop = () => Math.round(base.population * Math.pow(0.98, factor));

    const shutdownFactor = (() => {
      if (year === 2024) return isOpposition ? 1.45 : 1.30;
      if (year === 2025) return isOpposition ? 0.85 : 0.70;
      return 1.0;
    })();

    return {
      county_code: ind.county_code,
      year,
      surveillance_score: roundTo(base.surveillance_score / Math.pow(GROWTH.surveillance_score, factor)),
      internet_health_score: roundTo(base.internet_health_score / Math.pow(GROWTH.internet_health_score, factor)),
      data_privacy_score: roundTo(base.data_privacy_score / Math.pow(GROWTH.data_privacy_score, factor)),
      biometric_enrollment_rate: roundTo(base.biometric_enrollment_rate / Math.pow(GROWTH.biometric_enrollment_rate, factor)),
      platform_impact_score: roundTo(base.platform_impact_score / Math.pow(GROWTH.platform_impact_score, factor)),
      ai_systems_count: Math.max(0, Math.round(base.ai_systems_count / Math.pow(GROWTH.ai_systems_count, factor))),
      cctv_density: roundTo(base.cctv_density / Math.pow(GROWTH.cctv_density, factor), 1),
      odpc_complaints: Math.max(0, Math.round(base.odpc_complaints / Math.pow(GROWTH.odpc_complaints, factor))),
      internet_shutdown_hours: Math.round(base.internet_shutdown_hours * shutdownFactor),
      social_media_reports: Math.max(0, Math.round(base.social_media_reports / Math.pow(GROWTH.social_media_reports, factor))),
      internet_usage_pct: roundTo(base.internet_usage_pct / Math.pow(GROWTH.internet_usage_pct, factor), 1),
      mobile_ownership_pct: roundTo(base.mobile_ownership_pct / Math.pow(GROWTH.mobile_ownership_pct, factor), 1),
      birth_registration_pct: roundTo(base.birth_registration_pct / Math.pow(GROWTH.birth_registration_pct, factor), 1),
      population: prevPop(),
    };
  }

  return [
    applyYear(2024, 2),
    applyYear(2025, 1),
    base,
  ];
}

function roundTo(val: number, decimals = 0): number {
  const m = Math.pow(10, decimals);
  return Math.round(val * m) / m;
}

export function calcDRRSTrend(recs: YearRecord[], dim: "surveillance" | "internetHealth" | "dataPrivacy" | "biometric" | "platformImpact"): number[] {
  const keys: Record<string, keyof YearRecord> = {
    surveillance: "surveillance_score",
    internetHealth: "internet_health_score",
    dataPrivacy: "data_privacy_score",
    biometric: "biometric_enrollment_rate",
    platformImpact: "platform_impact_score",
  };
  const key = keys[dim];
  return recs.map((r) => r[key] as number);
}

export function drrsPercentTrend(recs: YearRecord[], dim: "surveillance" | "internetHealth" | "dataPrivacy" | "biometric" | "platformImpact"): number[] {
  const raw = calcDRRSTrend(recs, dim);
  const max = Math.max(...raw, 100);
  const min = 0;
  return dim === "internetHealth"
    ? raw.map((v) => Math.round((1 - v / max) * 100))
    : raw.map((v) => Math.round((v / max) * 100));
}
