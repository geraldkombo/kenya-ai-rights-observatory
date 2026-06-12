"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { counties, indicators } from "@/lib/data";
import { computeDRRS, getDRRSBadgeClass } from "@/lib/scoring";
import { estimateHistory, calcDRRSTrend } from "@/lib/historical";
import type { DRSScore, YearRecord } from "@/lib/types";
import Sparkline from "@/components/Sparkline";

type SortKey = "name" | "drrs" | "surveillance" | "internetHealth" | "dataPrivacy" | "biometric" | "platformImpact";

interface TableRow {
  id: string;
  name: string;
  scores: DRSScore;
  history: YearRecord[];
}

const DIM_LABELS: Record<string, string> = {
  surveillance: "Surveillance",
  internetHealth: "Internet health",
  dataPrivacy: "Data privacy",
  biometric: "Biometric",
  platformImpact: "Content controls",
};

const DIM_KEYS = ["surveillance", "internetHealth", "dataPrivacy", "biometric", "platformImpact"] as const;

const SCORE_COLORS: Record<string, string> = {
  critical: "#8C2D04",
  high: "#D95F0E",
  moderate: "#FEC44F",
  low: "#FFF7BC",
};

function scoreTier(score: number): string {
  if (score >= 70) return "critical";
  if (score >= 50) return "high";
  if (score >= 30) return "moderate";
  return "low";
}

const TIER_BG: Record<string, string> = {
  critical: "bg-[rgba(140,45,4,0.04)]",
  high: "bg-[rgba(217,95,14,0.04)]",
  moderate: "",
  low: "",
};

const TIER_HOVER_BG: Record<string, string> = {
  critical: "hover:bg-[rgba(140,45,4,0.08)]",
  high: "hover:bg-[rgba(217,95,14,0.08)]",
  moderate: "hover:bg-stone-50",
  low: "hover:bg-stone-50",
};

function scoreLabel(score: number): string {
  if (score >= 70) return "Critical risk (70-100)";
  if (score >= 50) return "High risk (50-69)";
  if (score >= 30) return "Moderate risk (30-49)";
  return "Low risk (0-29)";
}

function SortArrow({ columnKey, active }: { columnKey: SortKey; active: "asc" | "desc" | null }) {
  if (!active) return <span className="ml-1 text-brand-border/50">{String.fromCodePoint(8597)}</span>;
  return <span className="ml-1 text-brand-orange">{active === "asc" ? String.fromCodePoint(8593) : String.fromCodePoint(8595)}</span>;
}

function ScoreBar({ score, color }: { score: number; color?: string }) {
  const c = color ?? SCORE_COLORS[scoreTier(score)];
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 flex-1 rounded-full bg-stone-200">
        <div className="h-full rounded-full transition-all" style={{ width: `${score}%`, backgroundColor: c }} />
      </div>
      <span className="w-7 text-right font-mono text-xs font-bold text-stone-500">{score}</span>
    </div>
  );
}

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("drrs");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const tableData: TableRow[] = useMemo(
    () =>
      counties
        .map((county) => {
          const ind = indicators.find((i) => i.county_code === county.id);
          if (!ind) return null;
          return { id: county.id, name: county.name, scores: computeDRRS(county.id, ind), history: estimateHistory(ind) };
        })
        .filter((row): row is TableRow => row !== null),
    [],
  );

  const filteredAndSorted = useMemo(() => {
    let data = tableData;
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      data = data.filter((r) => r.name.toLowerCase().includes(q));
    }
    data = [...data].sort((a, b) => {
      let aVal: number | string;
      let bVal: number | string;
      if (sortKey === "name") {
        aVal = a.name;
        bVal = b.name;
      } else {
        aVal = a.scores[sortKey];
        bVal = b.scores[sortKey];
      }
      if (aVal < bVal) return sortDir === "asc" ? -1 : 1;
      if (aVal > bVal) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
    return data;
  }, [tableData, searchTerm, sortKey, sortDir]);

  function handleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDir((d) => (d === "desc" ? "asc" : "desc"));
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  }

  const noResults = filteredAndSorted.length === 0;

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-8 sm:px-8">
      <div className="mb-8 border-b border-stone-200 pb-6">
        <Link
          href="/"
          className="mb-4 -ml-1 inline-flex min-h-[44px] items-center gap-1 rounded-md px-1 text-sm font-bold text-stone-500 transition-colors hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
          Back to Map
        </Link>
        <h1 className="text-3xl font-bold text-stone-800 md:text-4xl">Data Explorer</h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone-500">
          Sort, filter, and compare all 47 counties across the five DRRS dimensions. Counties with higher risk scores appear at the top by default. Click any column header to reorder.
        </p>
      </div>

      <div className="sticky top-0 z-20 -mx-4 bg-brand-cream/95 px-4 pb-2 pt-0 backdrop-blur sm:-mx-8 sm:px-8">
        <div className="relative max-w-sm">
          <label htmlFor="explore-search" className="sr-only">Search counties</label>
          <input
            id="explore-search"
            type="text"
            placeholder="Filter by county name&hellip;"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="min-h-[44px] w-full rounded-xl border border-stone-300 bg-white px-4 py-2 pl-10 text-sm text-stone-800 transition-shadow focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2378716C' stroke-width='2'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21-4.3-4.3'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "12px center" }}
          />
        </div>
      </div>

      {/* Desktop table */}
      <div className="hidden overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm md:block">
        <div className="overflow-x-auto">
          <table className="w-full whitespace-nowrap text-left text-sm">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-100 text-xs font-bold uppercase tracking-wider text-stone-500">
                <th
                  scope="col"
                  tabIndex={0}
                  className="sticky left-0 z-10 min-h-[44px] cursor-pointer bg-stone-100 px-4 py-3 text-left transition-colors hover:bg-stone-200"
                  onClick={() => handleSort("name")}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleSort("name"); } }}
                >
                  County <SortArrow columnKey="name" active={sortKey === "name" ? sortDir : null} />
                </th>
                <th
                  scope="col"
                  tabIndex={0}
                  className="min-h-[44px] cursor-pointer bg-stone-100 px-4 py-3 text-left transition-colors hover:bg-stone-200"
                  onClick={() => handleSort("drrs")}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleSort("drrs"); } }}
                >
                  Score <SortArrow columnKey="drrs" active={sortKey === "drrs" ? sortDir : null} />
                </th>
                {DIM_KEYS.map((key) => (
                  <th
                    key={key}
                    scope="col"
                    tabIndex={0}
                    className="min-h-[44px] cursor-pointer bg-stone-100 px-4 py-3 text-left transition-colors hover:bg-stone-200"
                    onClick={() => handleSort(key)}
                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleSort(key); } }}
                  >
                    {DIM_LABELS[key]} <SortArrow columnKey={key} active={sortKey === key ? sortDir : null} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border">
              {filteredAndSorted.map((row) => {
                const tier = scoreTier(row.scores.drrs);
                return (
                  <tr key={row.id} className={`${TIER_BG[tier]} ${TIER_HOVER_BG[tier]} transition-colors`}>
                    <td className="sticky left-0 z-10 bg-white px-4 py-3 font-bold text-stone-800 transition-colors">
                      <Link
                        href={`/brief?id=${row.id}`}
                        className="min-h-[44px] inline-flex items-center text-stone-800 underline-offset-2 hover:text-brand-orange hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange rounded"
                      >
                        {row.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 transition-colors hover:bg-stone-50/50">
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-flex min-w-[3rem] items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-bold ${getDRRSBadgeClass(row.scores.drrs)}`}
                          title={scoreLabel(row.scores.drrs)}
                        >
                          {row.scores.drrs}
                        </span>
                        <div className="w-16">
                          <ScoreBar score={row.scores.drrs} />
                        </div>
                      </div>
                    </td>
                    {DIM_KEYS.map((key) => {
                      const dimTrend = calcDRRSTrend(row.history, key);
                      const trendColor = dimTrend.length >= 2 && dimTrend[dimTrend.length - 1] >= dimTrend[0] ? "#DC2626" : "#059669";
                      return (
                        <td key={key} className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <Sparkline data={dimTrend} width={40} height={16} color={trendColor} />
                            <span className="font-mono text-stone-500">{row.scores[key]}</span>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {noResults && (
          <div className="px-4 py-16 text-center text-sm text-stone-400" role="status">
            No counties match &ldquo;{searchTerm}&rdquo;
          </div>
        )}
      </div>

      {/* Mobile card layout */}
      <div className="space-y-3 md:hidden">
        {filteredAndSorted.map((row) => {
          const tier = scoreTier(row.scores.drrs);
          return (
            <div
              key={row.id}
              className={`rounded-xl border border-stone-200 bg-white p-4 shadow-sm ${TIER_HOVER_BG[tier]} transition-colors`}
              style={TIER_BG[tier] ? { backgroundColor: TIER_BG[tier].replace("bg-[", "").replace("]", "") } : undefined}
            >
              <div className="mb-2 flex items-center justify-between">
                <Link
                  href={`/brief?id=${row.id}`}
                  className="min-h-[44px] inline-flex items-center text-sm font-bold text-stone-800 underline-offset-2 hover:text-brand-orange hover:underline"
                >
                  {row.name}
                </Link>
                <span className={`inline-flex min-w-[2.5rem] items-center justify-center rounded-full px-2 py-0.5 text-xs font-bold ${getDRRSBadgeClass(row.scores.drrs)}`}>
                  {row.scores.drrs}
                </span>
              </div>

              <ScoreBar score={row.scores.drrs} />

              <div className="mt-3 space-y-2 border-t border-stone-100 pt-3">
                {DIM_KEYS.map((key) => {
                  const dimTrend = calcDRRSTrend(row.history, key);
                  const trendColor = dimTrend.length >= 2 && dimTrend[dimTrend.length - 1] >= dimTrend[0] ? "#DC2626" : "#059669";
                  return (
                    <div key={key} className="flex items-center justify-between text-xs">
                      <span className="text-stone-500">{DIM_LABELS[key]}</span>
                      <div className="flex items-center gap-2">
                        <Sparkline data={dimTrend} width={36} height={14} color={trendColor} />
                        <span className="w-5 text-right font-mono font-bold text-stone-600">{row.scores[key]}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        {noResults && (
          <div className="py-16 text-center text-sm text-stone-400" role="status">
            No counties match &ldquo;{searchTerm}&rdquo;
          </div>
        )}
      </div>

      <p className="mt-6 text-center text-xs text-stone-400">
        Showing {filteredAndSorted.length} of {tableData.length} counties
      </p>
    </main>
  );
}
