"use client";

import { useMemo } from "react";
import Link from "next/link";
import { foiaRequests } from "@/lib/foia-data";
import { counties, indicators } from "@/lib/data";
import { computeDRRS } from "@/lib/scoring";
import type { FoiaStatus } from "@/lib/types";

const STATUS_STYLES: Record<FoiaStatus, string> = {
  Submitted: "border-brand-border bg-brand-bg text-brand-stone",
  Acknowledged: "border-blue-200 bg-blue-50 text-blue-800",
  Denied: "border-red-200 bg-red-50 text-red-800",
  Escalated: "border-orange-200 bg-orange-50 text-orange-800",
  Resolved: "border-green-200 bg-green-50 text-green-800",
};

const TYPE_LABELS: Record<string, string> = {
  CCTV: "CCTV Monitoring",
  HealthData: "Health Data Systems",
  Biometric: "Digital Identity",
  AIProcurement: "Algorithmic Procurement",
};

const TYPE_TEMPLATES: Record<string, number> = {
  CCTV: 2,
  HealthData: 1,
  Biometric: 1,
  AIProcurement: 3,
};

export default function FoiaTracker() {
  const summary = useMemo(() => {
    const total = foiaRequests.length;
    const counts: Record<string, number> = {};
    for (const r of foiaRequests) {
      counts[r.status] = (counts[r.status] || 0) + 1;
    }
    return { total, counts };
  }, []);

  const countyDrrs = useMemo(() => {
    const map: Record<string, number> = {};
    for (const c of counties) {
      const ind = indicators.find((i) => i.county_code === c.id);
      if (ind) map[c.name] = computeDRRS(c.id, ind).drrs;
    }
    return map;
  }, []);

  return (
    <section className="mb-8 rounded-xl border border-brand-border bg-white p-6 print:hidden" aria-label="FOIA Tracking Dashboard">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-base font-bold text-brand-dark">Active FOIA Pilots</h2>
          <p className="text-xs text-brand-muted">
            {summary.total} request{summary.total !== 1 ? "s" : ""} filed across 3 counties
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          {Object.entries(summary.counts).map(([status, count]) => (
            <span
              key={status}
              className={`rounded-full border px-2.5 py-1 font-semibold ${STATUS_STYLES[status as FoiaStatus]}`}
            >
              {count} {status}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-3">
        {foiaRequests.map((req) => {
          const drrs = countyDrrs[req.county] ?? "-";
          const templateNum = TYPE_TEMPLATES[req.requestType] ?? 1;
          return (
            <div
              key={req.id}
              className="rounded-lg border border-brand-border bg-brand-bg/50 p-4 transition-colors hover:bg-brand-bg"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/brief?id=${counties.find((c) => c.name === req.county)?.id ?? ""}`}
                      className="text-sm font-bold text-brand-dark underline-offset-2 hover:text-brand-orange hover:underline"
                    >
                      {req.county}
                    </Link>
                    {req.stampedRef && (
                      <span className="rounded bg-brand-bg px-1.5 py-0.5 text-[10px] font-mono font-bold uppercase text-brand-stone">
                        Ref: {req.stampedRef}
                      </span>
                    )}
                    <span className="rounded bg-brand-border/50 px-1.5 py-0.5 text-[10px] font-bold text-brand-muted">
                      DRRS {drrs}
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-brand-stone">
                    {TYPE_LABELS[req.requestType]} &middot;
                    Filed {req.dateSubmitted} &middot;
                    {req.daysPending} day{req.daysPending !== 1 ? "s" : ""} pending
                  </div>
                  {req.notes && (
                    <div className="mt-1.5 text-xs italic text-brand-muted">{req.notes}</div>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`shrink-0 rounded-full border px-3 py-1 text-[10px] font-bold ${STATUS_STYLES[req.status]}`}
                  >
                    {req.status}
                  </span>
                  <Link
                    href={`/advocacy#template-${templateNum}`}
                    className="shrink-0 rounded-md border border-brand-border bg-white px-2.5 py-1 text-[10px] font-semibold text-brand-stone transition-colors hover:bg-brand-bg min-h-[44px] inline-flex items-center"
                  >
                    Template {templateNum}
                  </Link>
                </div>
              </div>
              {req.status === "Denied" && (
                <div className="mt-2 rounded bg-red-50 p-2 text-xs text-red-700">
                  Escalate to <Link href="/advocacy#template-4" className="font-bold underline underline-offset-2">ODPC complaint (Template 4)</Link> or
                  the Commission on Administrative Justice.
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-4 rounded-lg border border-dashed border-brand-border bg-brand-bg/30 p-3 text-center text-xs text-brand-muted">
        To update request status, edit{" "}
        <code className="rounded bg-brand-border/50 px-1 py-0.5 font-mono text-[10px]">src/lib/foia-data.ts</code>
        {" "}and deploy.
      </div>
    </section>
  );
}
