"use client";

import { useMemo } from "react";
import Link from "next/link";
import type { CountyRecord, DigitalRightsIndicators } from "@/lib/types";
import { computeDRRS, getDRRSBadgeClass, getDRRSColor } from "@/lib/scoring";
import { estimateHistory, drrsPercentTrend } from "@/lib/historical";
import Sparkline from "./Sparkline";
import ShareCard from "./ShareCard";

interface Props {
  county: CountyRecord;
  indicators: DigitalRightsIndicators[];
}

function ProgressBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs">
        <span className="text-brand-stone">{label}</span>
        <span className="font-medium text-brand-dark">{value}%</span>
      </div>
      <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-brand-bg">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${value}%`, backgroundColor: getDRRSColor(value) }}
        />
      </div>
    </div>
  );
}

export default function CountyDetails({ county, indicators }: Props) {
  const ind = indicators.find((i) => i.county_code === county.id);
  const score = useMemo(() => {
    if (!ind) return null;
    return computeDRRS(county.id, ind);
  }, [ind, county.id]);

  const handleDownloadCSV = () => {
    if (!ind || !score) return;
    const headers = ["County", "Code", "DRRS_Score", "CCTV_Monitoring", "Internet_Disruptions", "Data_Violations", "Digital_Identity", "Account_Suspensions", "Automated_Systems", "CCTV_Density", "Shutdown_Hours", "ODPC_Complaints"];
    const row = [
      county.name, county.id, score.drrs, score.surveillance, score.internetHealth,
      score.dataPrivacy, score.biometric, score.platformImpact, ind.ai_systems_count,
      ind.cctv_density, ind.internet_shutdown_hours, ind.odpc_complaints,
    ];
    const csvContent = [headers.join(","), row.join(",")].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `${county.name.replace(/\s+/g, "_")}_Digital_Rights_Data.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const history = useMemo(() => ind ? estimateHistory(ind) : null, [ind]);

  const dimTrends = useMemo(() => {
    if (!history) return null;
    return {
      surveillance: drrsPercentTrend(history, "surveillance"),
      internetHealth: drrsPercentTrend(history, "internetHealth"),
      dataPrivacy: drrsPercentTrend(history, "dataPrivacy"),
      biometric: drrsPercentTrend(history, "biometric"),
      platformImpact: drrsPercentTrend(history, "platformImpact"),
    };
  }, [history]);

  if (!ind || !score) {
    return (
      <div className="rounded-xl border border-brand-border bg-white p-5">
        <p className="text-sm text-brand-muted">Data unavailable for this county.</p>
      </div>
    );
  }

  return (
    <div className="break-inside-avoid rounded-xl border border-brand-border bg-white p-5 transition-all duration-200 ease-in-out hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-brand-dark">{county.name}</h2>
          <p className="text-sm text-brand-muted">County, Kenya</p>
        </div>
        <div className={`rounded-lg px-3 py-1.5 text-right transition-colors ${getDRRSBadgeClass(score.drrs)}`}>
          <div className="text-xl font-bold tracking-tight">{score.drrs}</div>
          <div className="text-[10px] font-medium opacity-80">Digital Rights Risk Score</div>
        </div>
      </div>

      <div className="mt-5 space-y-3 border-t border-brand-border pt-4">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-stone">Score distribution</h4>
        {(["surveillance", "internetHealth", "dataPrivacy", "biometric", "platformImpact"] as const).map((dim) => {
          const trends = dimTrends?.[dim];
          const trendColor = trends && trends[2] > trends[0] ? "#DC2626" : "#059669";
          const labels: Record<string, string> = {
            surveillance: "CCTV Monitoring",
            internetHealth: "Internet Disruptions",
            dataPrivacy: "Data Violations",
            biometric: "Digital Identity",
            platformImpact: "Account Suspensions",
          };
          return (
            <div key={dim} className="flex items-center gap-3">
              <div className="flex-1">
                <ProgressBar label={labels[dim]} value={score[dim]} />
              </div>
              {trends && (
                <Sparkline data={trends} width={48} height={20} color={trendColor} />
              )}
            </div>
          );
        })}
      </div>

      {score.drivers.length > 0 && (
        <div className="mt-5 rounded-lg border border-red-100 bg-red-50 p-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-red-800">Key findings</h4>
          <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-red-700">
            {score.drivers.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-brand-border pt-4">
        <div>
          <div className="text-[11px] font-semibold text-brand-stone">CCTV Monitoring</div>
          <div className="mt-0.5 text-sm font-medium text-brand-dark">{ind.ai_systems_count}</div>
          <p className="mt-0.5 text-[10px] leading-tight text-brand-muted">Known surveillance systems documented through public records and civil society reports</p>
        </div>
        <div>
          <div className="text-[11px] font-semibold text-brand-stone">CCTV Density</div>
          <div className="mt-0.5 text-sm font-medium text-brand-dark">{ind.cctv_density} per 10K</div>
          <p className="mt-0.5 text-[10px] leading-tight text-brand-muted">Estimated CCTV cameras per 10,000 residents, based on county urbanization and published reports</p>
        </div>
        <div>
          <div className="text-[11px] font-semibold text-brand-stone">Shutdown Hours</div>
          <div className="mt-0.5 text-sm font-medium text-brand-dark">{ind.internet_shutdown_hours}h</div>
          <p className="mt-0.5 text-[10px] leading-tight text-brand-muted">Internet disruption hours documented in the past year, cross-referenced from Access Now and local sources</p>
        </div>
        <div>
          <div className="text-[11px] font-semibold text-brand-stone">Data Complaints</div>
          <div className="mt-0.5 text-sm font-medium text-brand-dark">{ind.odpc_complaints}</div>
          <p className="mt-0.5 text-[10px] leading-tight text-brand-muted">Formal complaints filed with the Office of the Data Protection Commissioner by county residents</p>
        </div>
      </div>

      <Link
        href={`/brief?id=${county.id}`}
        className="mt-4 flex min-h-[44px] items-center justify-center rounded-lg border border-brand-border bg-brand-bg text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-cream"
      >
        View analytical brief &rarr;
      </Link>

      <button
        onClick={handleDownloadCSV}
        className="mt-2 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-brand-border bg-brand-bg px-4 py-2.5 text-sm font-semibold text-brand-dark transition-colors hover:bg-[#E0DBD0] print:hidden"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        Export data
      </button>
      <ShareCard county={county} indicators={indicators} />
    </div>
  );
}
