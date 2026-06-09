"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { counties, indicators } from "@/lib/data";
import { computeDRRS, getDRRSBadgeClass } from "@/lib/scoring";
import type { DRSScore } from "@/lib/types";

type SortKey = "name" | "drrs" | "surveillance" | "internetHealth" | "dataPrivacy" | "biometric" | "platformImpact";

interface TableRow {
  id: string;
  name: string;
  scores: DRSScore;
}

const DIM_LABELS: Record<string, string> = {
  surveillance: "Surveillance",
  internetHealth: "Internet Health",
  dataPrivacy: "Data Privacy",
  biometric: "Biometric",
  platformImpact: "Platform Impact",
};

function SortArrow({ columnKey, active }: { columnKey: SortKey; active: "asc" | "desc" | null }) {
  if (!active) return <span className="ml-1 text-brand-border/50">&#8597;</span>;
  return <span className="ml-1 text-brand-orange">{active === "asc" ? "&#8593;" : "&#8595;"}</span>;
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
          return { id: county.id, name: county.name, scores: computeDRRS(county.id, ind) };
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

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-8 sm:px-8">
      <div className="mb-8 flex flex-col gap-4 border-b border-brand-border pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Link
            href="/"
            className="mb-4 -ml-1 inline-flex min-h-[44px] items-center gap-1 rounded-md px-1 text-sm font-bold text-brand-stone transition-colors hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
            Back to Map
          </Link>
          <h1 className="text-3xl font-bold text-brand-brown md:text-4xl">Data Explorer</h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-brand-stone">
            Sort, filter, and compare all 47 counties across the five DRRS dimensions. Click any column header to sort ascending or descending.
          </p>
        </div>
        <div className="w-full md:w-72">
          <label htmlFor="explore-search" className="sr-only">Search counties</label>
          <input
            id="explore-search"
            type="text"
            placeholder="Filter by county name&hellip;"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="min-h-[44px] w-full rounded-xl border border-brand-border bg-white px-4 py-2 pl-10 text-sm text-brand-dark transition-shadow focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B6355' stroke-width='2'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21-4.3-4.3'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "12px center" }}
          />
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-brand-border bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full whitespace-nowrap text-left text-sm">
            <thead>
              <tr className="border-b border-brand-border bg-brand-bg text-xs font-bold uppercase tracking-wider text-brand-stone">
                <th
                  className="sticky left-0 z-10 cursor-pointer bg-brand-bg px-4 py-3 text-left transition-colors hover:bg-[#E0DBD0]"
                  onClick={() => handleSort("name")}
                >
                  County <SortArrow columnKey="name" active={sortKey === "name" ? sortDir : null} />
                </th>
                <th
                  className="cursor-pointer px-4 py-3 text-left transition-colors hover:bg-[#E0DBD0]"
                  onClick={() => handleSort("drrs")}
                >
                  Overall DRRS <SortArrow columnKey="drrs" active={sortKey === "drrs" ? sortDir : null} />
                </th>
                {(["surveillance", "internetHealth", "dataPrivacy", "biometric", "platformImpact"] as const).map((key) => (
                  <th
                    key={key}
                    className="cursor-pointer px-4 py-3 text-left transition-colors hover:bg-[#E0DBD0]"
                    onClick={() => handleSort(key)}
                  >
                    {DIM_LABELS[key]} <SortArrow columnKey={key} active={sortKey === key ? sortDir : null} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border">
              {filteredAndSorted.length > 0 ? (
                filteredAndSorted.map((row) => (
                  <tr key={row.id} className="transition-colors hover:bg-brand-bg/50">
                    <td className="sticky left-0 z-10 bg-white px-4 py-3 font-bold text-brand-dark transition-colors">
                      <Link
                        href={`/brief?id=${row.id}`}
                        className="min-h-[44px] inline-flex items-center text-brand-dark underline-offset-2 hover:text-brand-orange hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange rounded"
                      >
                        {row.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex min-w-[3rem] items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-bold ${getDRRSBadgeClass(row.scores.drrs)}`}>
                        {row.scores.drrs}
                      </span>
                    </td>
                    {(["surveillance", "internetHealth", "dataPrivacy", "biometric", "platformImpact"] as const).map((key) => (
                      <td key={key} className="px-4 py-3 font-mono text-brand-stone">{row.scores[key]}</td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-4 py-16 text-center text-sm text-brand-muted">
                    No counties match &ldquo;{searchTerm}&rdquo;
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
