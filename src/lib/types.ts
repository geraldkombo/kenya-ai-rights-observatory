export interface CountyRecord {
  id: string;
  name: string;
  code: string;
}

export interface DigitalRightsIndicators {
  county_code: string;
  county_name: string;
  population: number;
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

export interface DRSScore {
  drrs: number;
  surveillance: number;
  internetHealth: number;
  dataPrivacy: number;
  biometric: number;
  platformImpact: number;
  drivers: string[];
}
