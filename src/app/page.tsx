"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { counties, indicators } from "@/lib/data";
import { computeDRRS } from "@/lib/scoring";
import InsightsDashboard from "@/components/InsightsDashboard";
import CountyDetails from "@/components/CountyDetails";
import CountyRankings from "@/components/CountyRankings";
import ScoreLegend from "@/components/ScoreLegend";

const MapView = dynamic(() => import("@/components/MapView"), { ssr: false });

export default function HomePage() {
  const [selectedCountyCode, setSelectedCountyCode] = useState<string | null>(null);

  const selectedCounty = useMemo(() => {
    if (!selectedCountyCode) return null;
    return counties.find((c) => c.id === selectedCountyCode) ?? null;
  }, [selectedCountyCode]);

  const totalAISystems = indicators.reduce((sum, i) => sum + i.ai_systems_count, 0);
  const totalShutdownHours = indicators.reduce((sum, i) => sum + i.internet_shutdown_hours, 0);
  const highRiskCounties = indicators.filter((i) => {
    const c = counties.find((c2) => c2.id === i.county_code);
    if (!c) return false;
    return computeDRRS(c.id, i).drrs >= 50;
  }).length;

  return (
    <div className="mx-auto max-w-7xl px-2 py-3 sm:px-6 sm:py-6">
      <InsightsDashboard
        countyCount={counties.length}
        highRiskCount={highRiskCounties}
        totalAISystems={totalAISystems}
        totalShutdownHours={totalShutdownHours}
      />

      <div className="mb-3 sm:mb-6">
        <p className="mt-0.5 text-xs font-medium text-[#6B6355] sm:text-sm">
          Identify counties with the most critical digital rights risks, surveillance density, and AI system deployment across Kenya.
        </p>
      </div>

      <div className="relative grid gap-4 sm:gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <MapView
            counties={counties}
            indicators={indicators}
            onCountyClick={setSelectedCountyCode}
            selectedCountyCode={selectedCountyCode}
          />
          <div className="mt-2">
            <ScoreLegend />
          </div>
        </div>

        <div className="hidden space-y-4 lg:block">
          {selectedCounty ? (
            <CountyDetails county={selectedCounty} indicators={indicators} />
          ) : (
            <CountyRankings counties={counties} indicators={indicators} onCountyClick={setSelectedCountyCode} />
          )}
        </div>
      </div>

      {selectedCounty && (
        <div className="fixed inset-x-0 bottom-0 z-50 max-h-[70svh] overflow-y-auto rounded-t-2xl border border-[#E0DBD0] bg-white shadow-2xl lg:hidden">
          <div className="sticky top-0 flex items-center justify-between bg-white px-4 pt-2 pb-1">
            <div className="h-1.5 w-12 rounded-full bg-[#E0DBD0] mx-auto"></div>
            <button
              onClick={() => setSelectedCountyCode(null)}
              className="absolute right-3 top-2 rounded-full p-1 text-[#A8A08F] hover:bg-[#F8F5F0] hover:text-[#6B6355]"
              aria-label="Close county details"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <div className="px-4 pb-6">
            <CountyDetails county={selectedCounty} indicators={indicators} />
          </div>
        </div>
      )}

      <div className="mt-6 border-t border-[#E0DBD0] pt-6">
        <div className="flex flex-wrap gap-3">
          <Link href="/method" className="rounded-lg border border-[#E0DBD0] px-4 py-2 text-sm font-medium text-[#6B6355] hover:bg-[#F8F5F0] transition-colors">
            Review methodology
          </Link>
          <Link href="/compare" className="rounded-lg border border-[#E0DBD0] px-4 py-2 text-sm font-medium text-[#6B6355] hover:bg-[#F8F5F0] transition-colors">
            Compare county risks
          </Link>
        </div>
      </div>
    </div>
  );
}
