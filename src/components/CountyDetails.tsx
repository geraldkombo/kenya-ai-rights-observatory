"use client";

import { useMemo } from "react";
import type { CountyRecord, DigitalRightsIndicators } from "@/lib/types";
import { computeDRRS, getDRRSBadgeClass, getDRRSColor } from "@/lib/scoring";

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
          <div className="text-[10px] font-medium opacity-80">DRRS</div>
        </div>
      </div>

      <div className="mt-5 space-y-3 border-t border-brand-border pt-4">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-stone">Risk dimensions</h4>
        <ProgressBar label="Surveillance density" value={score.surveillance} />
        <ProgressBar label="Internet health deficit" value={score.internetHealth} />
        <ProgressBar label="Data privacy risk" value={score.dataPrivacy} />
        <ProgressBar label="Biometric enrollment" value={score.biometric} />
        <ProgressBar label="Platform impact" value={score.platformImpact} />
      </div>

      {score.drivers.length > 0 && (
        <div className="mt-5 rounded-lg border border-red-100 bg-red-50 p-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-red-800">Key drivers</h4>
          <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-red-700">
            {score.drivers.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-4 grid grid-cols-2 gap-4 border-t border-brand-border pt-4">
        <div>
          <div className="text-[11px] font-semibold text-brand-stone">AI Systems</div>
          <div className="mt-0.5 text-sm font-medium text-brand-dark">{ind.ai_systems_count}</div>
        </div>
        <div>
          <div className="text-[11px] font-semibold text-brand-stone">CCTV Density</div>
          <div className="mt-0.5 text-sm font-medium text-brand-dark">{ind.cctv_density} per 10K</div>
        </div>
        <div>
          <div className="text-[11px] font-semibold text-brand-stone">Shutdown Hours</div>
          <div className="mt-0.5 text-sm font-medium text-brand-dark">{ind.internet_shutdown_hours}h</div>
        </div>
        <div>
          <div className="text-[11px] font-semibold text-brand-stone">ODPC Complaints</div>
          <div className="mt-0.5 text-sm font-medium text-brand-dark">{ind.odpc_complaints}</div>
        </div>
      </div>
    </div>
  );
}
