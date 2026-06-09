export interface CountyRecord {
  id: string;
  name: string;
  code: string;
}

export interface DigitalRightsIndicators {
  county_code: string;
  county_name: string;
  population: number;
  internet_usage_pct: number;
  mobile_ownership_pct: number;
  birth_registration_pct: number;
  surveillance_score: number;
  internet_health_score: number;
  data_privacy_score: number;
  biometric_enrollment_rate: number;
  platform_impact_score: number;
  ai_systems_count: number;
  cctv_density: number;
  odpc_complaints: number;
  internet_shutdown_hours: number;
  social_media_reports: number;
}

export interface YearRecord {
  county_code: string;
  year: number;
  surveillance_score: number;
  internet_health_score: number;
  data_privacy_score: number;
  biometric_enrollment_rate: number;
  platform_impact_score: number;
  ai_systems_count: number;
  cctv_density: number;
  odpc_complaints: number;
  internet_shutdown_hours: number;
  social_media_reports: number;
  internet_usage_pct: number;
  mobile_ownership_pct: number;
  birth_registration_pct: number;
  population: number;
}

export type FoiaStatus = "Submitted" | "Acknowledged" | "Denied" | "Escalated" | "Resolved";

export interface FoiaRequest {
  id: string;
  county: string;
  requestType: "CCTV" | "HealthData" | "Biometric" | "AIProcurement";
  dateSubmitted: string;
  status: FoiaStatus;
  daysPending: number;
  notes?: string;
}

export interface DRSScore {
  drrs: number;
  surveillance: number;
  internetHealth: number;
  dataPrivacy: number;
  biometric: number;
  platformImpact: number;
  drivers: string[];
}
