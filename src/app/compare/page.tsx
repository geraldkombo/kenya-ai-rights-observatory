"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { counties, indicators } from "@/lib/data";
import { computeDRRS, getDRRSBadgeClass } from "@/lib/scoring";

function useStats(countyId: string) {
  return useMemo(() => {
    const ind = indicators.find((i) => i.county_code === countyId);
    if (!ind) return null;
    return { ind, score: computeDRRS(countyId, ind) };
  }, [countyId]);
}

export default function ComparePage() {
  const [countyA, setCountyA] = useState("");
  const [countyB, setCountyB] = useState("");

  const selA = useMemo(() => counties.find((c) => c.id === countyA) ?? null, [countyA]);
  const selB = useMemo(() => counties.find((c) => c.id === countyB) ?? null, [countyB]);
  const statsA = useStats(countyA);
  const statsB = useStats(countyB);

  const handlePrint = () => window.print();

  return (
    <div className="mx-auto max-w-5xl px-8 py-8">
      <div className="mb-8 pb-4 border-b border-[#E0DBD0] print:hidden flex flex-col md:flex-row md:justify-between md:items-end gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-[#78350F] md:text-3xl">Compare Counties</h1>
          <p className="text-[#6B6355] mt-4 text-[14px] leading-7">
            Select two counties to compare their digital rights risk profiles side-by-side.
          </p>
        </div>
        {(countyA || countyB) && (
          <button onClick={() => { setCountyA(""); setCountyB(""); }}
            className="min-h-[44px] inline-flex items-center justify-center rounded-[6px] bg-[#F8F5F0] border border-[#E0DBD0] hover:bg-[#F0EDE6] text-[#292524] font-bold px-4 py-2 text-[12px] uppercase tracking-widest transition-colors">
            Reset Selection
          </button>
        )}
      </div>

      <div className="mt-8 rounded-[8px] border border-[#E0DBD0] bg-[#F8F5F0] p-8 shadow-sm print:hidden">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-[12px] font-semibold uppercase text-[#292524]">Select County A</label>
            <select value={countyA} onChange={(e) => { setCountyA(e.target.value); setCountyB(""); }}
              className="w-full min-h-[44px] rounded-[4px] border border-[#E0DBD0] bg-white px-4 py-2 text-[14px] text-[#292524] shadow-sm">
              <option value="">-- Choose a County --</option>
              {counties.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
          <div>
            <label className="mb-2 block text-[12px] font-semibold uppercase text-[#292524]">Select County B</label>
            <select value={countyB} onChange={(e) => setCountyB(e.target.value)} disabled={!countyA}
              className="w-full min-h-[44px] rounded-[4px] border border-[#E0DBD0] bg-white px-4 py-2 text-[14px] text-[#292524] shadow-sm disabled:opacity-50">
              <option value="">-- Choose a County --</option>
              {counties.filter((c) => c.id !== countyA).map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
        </div>
      </div>

      {selA && selB && statsA && statsB && (
        <div className="mt-8 space-y-8">
          <section className="grid gap-8 md:grid-cols-2">
            {([{ county: selA, stats: statsA }, { county: selB, stats: statsB }] as const).map(({ county, stats }, idx) => (
              <div key={county.id} className="rounded-[8px] border border-[#E0DBD0] bg-white shadow-sm" style={{ borderTop: `4px solid ${idx === 0 ? "#78350F" : "#EA580C"}` }}>
                <div className="flex items-start justify-between border-b border-[#E0DBD0] bg-[#F8F5F0] p-4">
                  <h3 className="text-[14px] font-bold text-[#292524]">{county.name}</h3>
                  <div className={`rounded-[6px] px-4 py-1 text-center font-bold shadow-sm ${getDRRSBadgeClass(stats.score.drrs)}`}>
                    <span className="text-[20px]">{stats.score.drrs}</span>
                    <span className="ml-1 text-[12px] font-normal opacity-80">DRRS</span>
                  </div>
                </div>
                <div className="p-4">
                  <table className="w-full text-[14px]">
                    <tbody>
                      <tr className="border-b border-[#E0DBD0]"><td className="py-2 text-[#6B6355]">Population</td><td className="py-2 text-right font-semibold text-[#292524]">{stats.ind.population.toLocaleString()}</td></tr>
                      <tr className="border-b border-[#E0DBD0]"><td className="py-2 text-[#6B6355]">AI Systems</td><td className="py-2 text-right font-semibold text-[#292524]">{stats.ind.ai_systems_count}</td></tr>
                      <tr className="border-b border-[#E0DBD0]"><td className="py-2 text-[#6B6355]">CCTV Density</td><td className="py-2 text-right font-semibold text-[#292524]">{stats.ind.cctv_density} per 10K</td></tr>
                      <tr className="border-b border-[#E0DBD0]"><td className="py-2 text-[#6B6355]">Shutdown Hours</td><td className="py-2 text-right font-semibold text-[#292524]">{stats.ind.internet_shutdown_hours}h</td></tr>
                      <tr className="border-b border-[#E0DBD0]"><td className="py-2 text-[#6B6355]">ODPC Complaints</td><td className="py-2 text-right font-semibold text-[#292524]">{stats.ind.odpc_complaints}</td></tr>
                      <tr><td className="py-2 text-[#6B6355]">Biometric Enrollment</td><td className="py-2 text-right font-semibold text-[#292524]">{stats.ind.biometric_enrollment_rate}%</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </section>

          {statsA.score.drivers.length > 0 && statsB.score.drivers.length > 0 && (
            <section className="rounded-[8px] border-l-4 bg-[#FFFBEB] p-8 shadow-sm" style={{ borderLeftColor: "#EA580C" }} role="note">
              <h3 className="text-[14px] font-bold text-[#78350F]">Key findings</h3>
              <ul className="mt-2 space-y-1 text-[14px] leading-7 text-[#292524]">
                {statsA.score.drivers.slice(0, 2).map((d, i) => (
                  <li key={`a-${i}`}><strong>{selA.name}:</strong> {d}</li>
                ))}
                {statsB.score.drivers.slice(0, 2).map((d, i) => (
                  <li key={`b-${i}`}><strong>{selB.name}:</strong> {d}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      )}

      <div className="mt-8 text-center text-[12px] text-[#A8A08F] print:hidden">
        <Link href="/" className="text-[#EA580C] underline underline-offset-2">&larr; Return to map</Link>
      </div>
    </div>
  );
}
