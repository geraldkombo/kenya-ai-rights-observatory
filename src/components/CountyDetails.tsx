"use client";

import { useMemo } from "react";
import type { CountyRecord, DigitalRightsIndicators } from "@/lib/types";
import { computeDRRS, getDRRSBadgeClass } from "@/lib/scoring";

interface Props {
  county: CountyRecord;
  indicators: DigitalRightsIndicators[];
}

function ProgressBar({ label, value, max, invert }: { label: string; value: number; max: number; invert?: boolean }) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  const displayPct = invert ? 100 - pct : pct;
  return (
    <div>
      <div className="flex items-center justify-between text-xs">
        <span className="text-[#6B6355]">{label}</span>
        <span className="font-medium text-[#292524]">{invert ? 100 - pct : pct}%</span>
      </div>
      <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-[#F8F5F0]">
        <div className="h-full rounded-full bg-[#78350F] transition-all duration-300" style={{ width: `${displayPct}%` }} />
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
      <div className="rounded-xl border border-[#E0DBD0] bg-white p-5">
        <p className="text-sm text-[#A8A08F]">Data unavailable for this county.</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-[#E0DBD0] bg-white p-5 transition-all duration-200 ease-in-out hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-[#292524]">{county.name}</h2>
          <p className="text-sm text-[#A8A08F]">County, Kenya</p>
        </div>
        {score && (
          <div className={`rounded-lg px-3 py-1.5 text-right ${getDRRSBadgeClass(score.drrs)}`}>
            <div className="text-xl font-bold tracking-tight">{score.drrs}</div>
            <div className="text-[10px] font-medium opacity-80">DRRS</div>
          </div>
        )}
      </div>

      <div className="mt-5 space-y-3 border-t border-[#E0DBD0] pt-4">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6B6355]">Risk dimensions</h4>
        <ProgressBar label="Surveillance density" value={score.surveillance} max={100} />
        <ProgressBar label="Internet health deficit" value={score.internetHealth} max={100} />
        <ProgressBar label="Data privacy risk" value={score.dataPrivacy} max={100} />
        <ProgressBar label="Biometric enrollment" value={score.biometric} max={100} />
        <ProgressBar label="Platform impact" value={score.platformImpact} max={100} />
      </div>

      {score.drivers.length > 0 && (
        <div className="mt-5 space-y-3 border-t border-[#E0DBD0] pt-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6B6355]">Key drivers</h4>
          <ul className="space-y-1">
            {score.drivers.map((d, i) => (
              <li key={i} className="text-xs leading-5 text-[#6B6355] list-disc ml-4">{d}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-4 grid grid-cols-2 gap-4 border-t border-[#E0DBD0] pt-4">
        <div>
          <div className="text-[11px] font-semibold text-[#6B6355]">AI Systems</div>
          <div className="mt-0.5 text-sm font-medium text-[#292524]">{ind.ai_systems_count}</div>
        </div>
        <div>
          <div className="text-[11px] font-semibold text-[#6B6355]">CCTV Density</div>
          <div className="mt-0.5 text-sm font-medium text-[#292524]">{ind.cctv_density} per 10K</div>
        </div>
        <div>
          <div className="text-[11px] font-semibold text-[#6B6355]">Shutdown Hours</div>
          <div className="mt-0.5 text-sm font-medium text-[#292524]">{ind.internet_shutdown_hours}h</div>
        </div>
        <div>
          <div className="text-[11px] font-semibold text-[#6B6355]">ODPC Complaints</div>
          <div className="mt-0.5 text-sm font-medium text-[#292524]">{ind.odpc_complaints}</div>
        </div>
      </div>
    </div>
  );
}
