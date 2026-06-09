"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import * as topojson from "topojson-client";
import type { Topology } from "topojson-specification";
import { counties, indicators } from "@/lib/data";
import { computeDRRS } from "@/lib/scoring";
import { fetchJSON } from "@/lib/data-fetch";
import InsightsDashboard from "@/components/InsightsDashboard";
import CountyDetails from "@/components/CountyDetails";
import CountyRankings from "@/components/CountyRankings";
import MapErrorBoundary from "@/components/MapErrorBoundary";
import Search from "@/components/Search";

const MapView = dynamic(() => import("@/components/MapView"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[400px] items-center justify-center rounded-xl border border-brand-border bg-brand-bg text-sm text-brand-stone">
      Loading geographic interface...
    </div>
  ),
});

export default function HomePage() {
  const [selectedCountyCode, setSelectedCountyCode] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState("");
  const [boundaries, setBoundaries] = useState<GeoJSON.FeatureCollection | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const topology = await fetchJSON<Topology>("/data/boundaries.topojson");
        if (!topology || !topology.objects) throw new Error("Topology data missing");
        const geojson = topojson.feature(topology, topology.objects.counties) as unknown as GeoJSON.FeatureCollection;
        if (!geojson || !geojson.features) throw new Error("Boundaries parsing failed");
        setBoundaries(geojson);
        setLoaded(true);
      } catch (e: any) {
        setError(`Data load error: ${e?.message ?? "Unknown"}`);
      }
    }
    load();
  }, []);

  const selectedCounty = useMemo(() => {
    if (!selectedCountyCode) return null;
    return counties.find((c) => c.id === selectedCountyCode) ?? null;
  }, [selectedCountyCode]);

  const countyScores: Record<string, number> = {};
  const countyNames: Record<string, string> = {};
  for (const c of counties) {
    countyNames[c.id] = c.name;
    const ind = indicators.find((i) => i.county_code === c.id);
    if (ind) {
      countyScores[c.id] = computeDRRS(c.id, ind).drrs;
    }
  }

  const totalAISystems = indicators.reduce((sum, i) => sum + i.ai_systems_count, 0);
  const totalShutdownHours = indicators.reduce((sum, i) => sum + i.internet_shutdown_hours, 0);
  const highRiskCounties = indicators.filter((i) => {
    const c = counties.find((c2) => c2.id === i.county_code);
    if (!c) return false;
    return computeDRRS(c.id, i).drrs >= 50;
  }).length;

  return (
    <div className="mx-auto max-w-7xl px-2 py-3 sm:px-6 sm:py-6">
      {error && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {error}
        </div>
      )}

      <InsightsDashboard
        countyCount={counties.length}
        highRiskCount={highRiskCounties}
        totalAISystems={totalAISystems}
        totalShutdownHours={totalShutdownHours}
      />

      <div className="mb-4 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium text-stone-700 sm:text-sm">
            Identify counties with the most critical digital rights risks, surveillance density, and emerging threats across Kenya.
          </p>
          <p className="mt-0.5 text-[11px] italic text-stone-500 sm:text-xs">Effective rights monitoring requires reliable and accessible data.</p>
        </div>
        <Search counties={counties} onSelect={setSelectedCountyCode} />
      </div>

      <div className="relative grid gap-4 sm:gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <MapErrorBoundary>
            {!loaded ? (
              <div className="flex h-[400px] items-center justify-center rounded-xl border border-brand-border bg-brand-bg text-sm text-brand-stone" aria-live="polite">
                Initializing dashboard...
              </div>
            ) : boundaries ? (
              <MapView
                boundaries={boundaries}
                countyScores={countyScores}
                countyNames={countyNames}
                onCountyClick={setSelectedCountyCode}
                selectedCountyCode={selectedCountyCode}
              />
            ) : (
              <div className="flex h-[400px] items-center justify-center rounded-xl border border-brand-border bg-brand-bg text-sm text-brand-stone" aria-live="polite">
                Geographic data temporarily unavailable.
              </div>
            )}
          </MapErrorBoundary>
        </div>

        <div className="hidden space-y-4 lg:block" aria-live="polite">
          {selectedCounty ? (
            <CountyDetails county={selectedCounty} indicators={indicators} />
          ) : (
            <CountyRankings counties={counties} indicators={indicators} onCountyClick={setSelectedCountyCode} />
          )}
        </div>
      </div>

      {selectedCounty && (
        <div className="fixed inset-x-0 bottom-0 z-50 max-h-[70svh] overflow-y-auto rounded-t-2xl border border-brand-border bg-white shadow-2xl lg:hidden print:hidden">
          <div className="sticky top-0 flex items-center justify-between bg-white px-4 pb-1 pt-2">
            <div className="mx-auto h-1.5 w-12 rounded-full bg-stone-200" />
            <button
              onClick={() => setSelectedCountyCode(null)}
              className="absolute right-3 top-2 min-h-[44px] rounded-full p-2 text-stone-400 transition-colors hover:bg-stone-100 hover:text-stone-500"
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

      <div className="mt-6 border-t border-stone-200 pt-6 print:hidden">
        <div className="flex flex-wrap gap-3">
          <Link href="/method" className="min-h-[44px] rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50">
            Review methodology
          </Link>
          <Link href="/compare" className="min-h-[44px] rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50">
            Compare county risks
          </Link>
          <Link href="/advocacy" className="min-h-[44px] rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50">
            Advocacy tools
          </Link>
        </div>
      </div>

      <div className="mt-6 border-t border-stone-100 pt-4 pb-2 print:hidden">
        <p className="text-[10px] leading-5 text-stone-400">
          <strong>Data sources:</strong> <a href="https://statistics.knbs.or.ke/nada/index.php/catalog/116" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-stone-600">KNBS 2019 Census</a> &middot; <a href="https://www.knbs.or.ke/" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-stone-600">KNBS KIHBS 2015/16</a> &middot; <a href="https://www.odpc.go.ke/" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-stone-600">ODPC Annual Reports</a> &middot; <a href="https://www.osf.go.ke/" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-stone-600">OSF Kenya</a> &middot; <a href="https://crisis24.garda.com/" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-stone-600">GardaWorld</a> &middot; <a href="https://www.openstreetmap.org/relation/192798" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-stone-600">OSM Kenya</a> &middot; <a href="https://github.com/geraldkombo/kenya-ai-rights-observatory/blob/main/src/lib/data.ts" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-stone-600">Composite indicators (GitHub)</a>
          <span className="ml-1">| CC-BY-4.0 open data</span>
        </p>
      </div>
    </div>
  );
}
