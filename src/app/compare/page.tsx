"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { counties, indicators } from "@/lib/data";
import { computeDRRS, getDRRSBadgeClass } from "@/lib/scoring";
import { NEIGHBORS } from "@/lib/neighbors";
import BarCompare from "@/components/BarCompare";

function useStats(countyId: string) {
  return useMemo(() => {
    const ind = indicators.find((i) => i.county_code === countyId);
    if (!ind) return null;
    return { ind, score: computeDRRS(countyId, ind) };
  }, [countyId]);
}

const DIMENSIONS = [
  { key: "surveillance" as const, label: "Surveillance", shortLabel: "Surveillance" },
  { key: "internetHealth" as const, label: "Internet health", shortLabel: "Internet health" },
  { key: "dataPrivacy" as const, label: "Data Privacy", shortLabel: "Data Privacy" },
  { key: "biometric" as const, label: "Biometric Enrollment", shortLabel: "Biometric" },
  { key: "platformImpact" as const, label: "Platform Impact", shortLabel: "Platform" },
];

function DeltaArrow({ a, b }: { a: number; b: number }) {
  if (a === b) return <span className="text-brand-muted">=</span>;
  return a > b
    ? <span className="text-red-600" title="Higher risk">&uarr;</span>
    : <span className="text-green-600" title="Lower risk">&darr;</span>;
}

export default function ComparePage() {
  const [countyA, setCountyA] = useState("");
  const [countyB, setCountyB] = useState("");

  const selA = useMemo(() => counties.find((c) => c.id === countyA) ?? null, [countyA]);
  const selB = useMemo(() => counties.find((c) => c.id === countyB) ?? null, [countyB]);
  const statsA = useStats(countyA);
  const statsB = useStats(countyB);

  const neighborsOfA = useMemo(
    () => (countyA ? (NEIGHBORS[countyA] ?? []).map((id) => counties.find((c) => c.id === id)).filter(Boolean) : []),
    [countyA]
  );
  const otherCounties = useMemo(
    () => counties.filter((c) => c.id !== countyA && !neighborsOfA.some((n) => n?.id === c.id)),
    [countyA, neighborsOfA]
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-8">
      <div className="mb-8 flex flex-col gap-4 border-b border-stone-200 pb-4 print:hidden md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-stone-800 md:text-3xl">Compare Counties</h1>
          <p className="mt-4 text-sm leading-7 text-stone-500">
            Select two counties to compare their digital rights risk profiles side-by-side.
          </p>
        </div>
        {(countyA || countyB) && (
          <button
            onClick={() => { setCountyA(""); setCountyB(""); }}
            className="min-h-[44px] inline-flex items-center justify-center rounded-md border border-stone-300 bg-stone-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-stone-800 transition-colors hover:bg-stone-200"
          >
            Reset Selection
          </button>
        )}
      </div>

      <div className="mt-8 rounded-lg border border-stone-200 bg-stone-100 p-6 shadow-sm print:hidden sm:p-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase text-stone-800" htmlFor="county-a">Select County A</label>
            <select id="county-a" value={countyA} onChange={(e) => { setCountyA(e.target.value); setCountyB(""); }}
              className="w-full min-h-[44px] rounded border border-stone-300 bg-white px-4 py-2 text-sm text-stone-800 shadow-sm transition-colors focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20">
              <option value="">-- Choose a County --</option>
              {counties.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase text-stone-800" htmlFor="county-b">Select County B</label>
            <select id="county-b" value={countyB} onChange={(e) => setCountyB(e.target.value)} disabled={!countyA}
              className="w-full min-h-[44px] rounded border border-stone-300 bg-white px-4 py-2 text-sm text-stone-800 shadow-sm transition-colors disabled:opacity-50 focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20">
              <option value="">-- Choose a County --</option>
              {countyA && neighborsOfA.length > 0 && (
                <optgroup label={`Neighbors of ${selA?.name ?? ""}`}>
                  {neighborsOfA.map((c) => c && <option key={c.id} value={c.id}>{c.name}</option>)}
                </optgroup>
              )}
              <optgroup label={countyA ? "All Other Counties" : "All Counties"}>
                {otherCounties.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
              </optgroup>
            </select>
          </div>
        </div>
      </div>

      {!countyA && (
        <div className="mt-16 text-center text-sm text-stone-400">
          Select a county above to begin comparison.
        </div>
      )}

      {countyA && !countyB && (
        <div className="mt-16 text-center text-sm text-stone-400">
          Select a second county to compare.
        </div>
      )}

      {selA && selB && statsA && statsB && (
        <div className="mt-8 space-y-8">
          <section className="rounded-lg border border-stone-200 bg-white p-4 shadow-sm sm:p-6" aria-label="Score comparison">
            <h3 className="mb-4 text-sm font-bold text-stone-800">Score Comparison</h3>
            <BarCompare
              countyA={selA.name}
              countyB={selB.name}
              scoresA={statsA.score}
              scoresB={statsB.score}
            />
            <div className="mt-4 flex items-center gap-4 text-xs text-stone-400">
              <span className="flex items-center gap-1"><span className="inline-block h-3 w-3 rounded bg-brand-brown" /> {selA.name}</span>
              <span className="flex items-center gap-1"><span className="inline-block h-3 w-3 rounded bg-brand-orange" /> {selB.name}</span>
            </div>
          </section>

          <section className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm" aria-live="polite">
            <div className="bg-stone-100 px-4 py-3">
              <h3 className="text-sm font-bold text-stone-800">Dimension Comparison</h3>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-xs font-semibold uppercase tracking-wider text-stone-500">
                  <th className="px-4 py-2 text-left">Dimension</th>
                  <th className="px-4 py-2 text-right">{selA.name}</th>
                  <th className="px-4 py-2 text-center">Delta</th>
                  <th className="px-4 py-2 text-left">{selB.name}</th>
                </tr>
              </thead>
              <tbody>
                {DIMENSIONS.map((d) => {
                  const valA = statsA.score[d.key];
                  const valB = statsB.score[d.key];
                  return (
                    <tr key={d.key} className="border-b border-stone-200 last:border-0 hover:bg-stone-50">
                      <td className="px-4 py-3 font-medium text-stone-800">{d.label}</td>
                      <td className={`px-4 py-3 text-right font-semibold ${valA > valB ? "text-red-600" : valA < valB ? "text-green-600" : "text-stone-800"}`}>{valA}%</td>
                      <td className="px-4 py-3 text-center text-lg"><DeltaArrow a={valA} b={valB} /></td>
                      <td className={`px-4 py-3 font-semibold ${valB > valA ? "text-red-600" : valB < valA ? "text-green-600" : "text-stone-800"}`}>{valB}%</td>
                    </tr>
                  );
                })}
                <tr className="border-t-2 border-stone-800 bg-stone-100 font-bold">
                  <td className="px-4 py-3 text-stone-800">Overall DRRS</td>
                  <td className={`px-4 py-3 text-right ${statsA.score.drrs > statsB.score.drrs ? "text-red-600" : statsA.score.drrs < statsB.score.drrs ? "text-green-600" : "text-stone-800"}`}>{statsA.score.drrs}</td>
                  <td className="px-4 py-3 text-center"><DeltaArrow a={statsA.score.drrs} b={statsB.score.drrs} /></td>
                  <td className={`px-4 py-3 ${statsB.score.drrs > statsA.score.drrs ? "text-red-600" : statsB.score.drrs < statsA.score.drrs ? "text-green-600" : "text-stone-800"}`}>{statsB.score.drrs}</td>
                </tr>
              </tbody>
            </table>
          </section>

          {(() => {
            const neighA = (NEIGHBORS[selA.id] ?? []).map((id) => counties.find((c) => c.id === id)?.name).filter(Boolean);
            const neighB = (NEIGHBORS[selB.id] ?? []).map((id) => counties.find((c) => c.id === id)?.name).filter(Boolean);
            const shareNeighbor = neighA.some((n) => neighB.includes(n));
            return (
              <section className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-sm font-bold text-stone-800">Geographic Context</h3>
                <div className="grid gap-4 text-sm leading-7 text-stone-500 md:grid-cols-2">
                  <div>
                    <span className="font-semibold text-brand-brown">{selA.name}</span>
                    {neighA.length > 0 ? <> borders: {neighA.join(", ")}.</> : <> has no bordering counties (island county).</>}
                  </div>
                  <div>
                    <span className="font-semibold text-brand-orange">{selB.name}</span>
                    {neighB.length > 0 ? <> borders: {neighB.join(", ")}.</> : <> has no bordering counties (island county).</>}
                  </div>
                </div>
                {shareNeighbor && (
                  <p className="mt-2 text-xs text-stone-400">
                    These two counties share a common border via at least one neighbor.
                  </p>
                )}
                {selA.id === selB.id && (
                  <p className="mt-2 text-xs text-amber-600">
                    You are comparing the same county. Select a different County B to compare distinct regions.
                  </p>
                )}
              </section>
            );
          })()}

          <section className="grid gap-8 md:grid-cols-2">
            {([{ county: selA, stats: statsA }, { county: selB, stats: statsB }] as const).map(({ county, stats }, idx) => (
              <div key={county.id} className="break-inside-avoid rounded-lg border border-stone-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md" style={{ borderTop: `4px solid ${idx === 0 ? "#78350F" : "#EA580C"}` }}>
                <div className="flex items-start justify-between border-b border-stone-200 bg-stone-100 p-4">
                  <h3 className="text-sm font-bold text-stone-800">{county.name}</h3>
                  <div className={`rounded-md px-4 py-1 text-center font-bold shadow-sm print-color-adjust-exact ${getDRRSBadgeClass(stats.score.drrs)}`}>
                    <span className="text-xl">{stats.score.drrs}</span>
                    <span className="ml-1 text-xs font-normal opacity-80">DRRS</span>
                  </div>
                </div>
                <div className="p-4">
                  <table className="w-full text-sm">
                    <tbody>
                      {DIMENSIONS.map((d) => (
                        <tr key={d.key} className="border-b border-stone-200 last:border-0">
                          <td className="py-2 text-stone-500">{d.label}</td>
                          <td className="py-2 text-right font-semibold text-stone-800">{stats.score[d.key]}%</td>
                        </tr>
                      ))}
                      <tr className="border-b border-stone-200"><td className="py-2 text-stone-500">Population</td><td className="py-2 text-right font-semibold text-stone-800">{stats.ind.population.toLocaleString()}</td></tr>
                      <tr className="border-b border-stone-200"><td className="py-2 text-stone-500">AI Systems</td><td className="py-2 text-right font-semibold text-stone-800">{stats.ind.ai_systems_count}</td></tr>
                      <tr className="border-b border-stone-200"><td className="py-2 text-stone-500">CCTV Density</td><td className="py-2 text-right font-semibold text-stone-800">{stats.ind.cctv_density} per 10K</td></tr>
                      <tr className="border-b border-stone-200"><td className="py-2 text-stone-500">Shutdown Hours</td><td className="py-2 text-right font-semibold text-stone-800">{stats.ind.internet_shutdown_hours}h</td></tr>
                      <tr className="border-b border-stone-200"><td className="py-2 text-stone-500">ODPC Complaints</td><td className="py-2 text-right font-semibold text-stone-800">{stats.ind.odpc_complaints}</td></tr>
                      <tr><td className="py-2 text-stone-500">Biometric Enrollment</td><td className="py-2 text-right font-semibold text-stone-800">{stats.ind.biometric_enrollment_rate}%</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </section>

          {statsA.score.drivers.length > 0 && statsB.score.drivers.length > 0 && (
            <section className="rounded-lg border-l-4 border-brand-orange bg-amber-50 p-6 shadow-sm" role="note">
              <h3 className="text-sm font-bold text-brand-brown">Key findings</h3>
              <ul className="mt-2 space-y-1 text-sm leading-7 text-stone-800">
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

      <div className="mt-16 text-center text-xs text-stone-400 print:hidden">
        <Link href="/" className="text-brand-orange underline underline-offset-2 transition-colors hover:text-brand-accent">&larr; Return to map</Link>
      </div>
    </div>
  );
}
