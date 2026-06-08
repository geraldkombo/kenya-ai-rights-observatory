"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { getDRRSColor } from "@/lib/scoring";
import type { CountyRecord, DigitalRightsIndicators } from "@/lib/types";
import { computeDRRS } from "@/lib/scoring";

interface MapViewProps {
  counties: CountyRecord[];
  indicators: DigitalRightsIndicators[];
  onCountyClick: (code: string) => void;
  selectedCountyCode: string | null;
}

export default function MapView({
  counties,
  indicators,
  onCountyClick,
  selectedCountyCode,
}: MapViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const [ready, setReady] = useState(false);

  const countyScores: Record<string, number> = {};
  for (const c of counties) {
    const ind = indicators.find((i) => i.county_code === c.id);
    if (ind) {
      countyScores[c.id] = computeDRRS(c.id, ind).drrs;
    }
  }

  function buildMatchExpression(scores: Record<string, number>): (string | number | string[])[] {
    const entries: (string | number)[] = Object.entries(scores).flatMap(([k, v]) => [Number(k), getDRRSColor(v) as string]);
    return ["match", ["get", "county_code"], ...entries, "#E7E5E4"];
  }

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: {
        version: 8,
        sources: {
          "carto-positron": {
            type: "raster",
            tiles: ["https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"],
            tileSize: 256,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors',
          },
        },
        layers: [
          { id: "base-map", type: "raster", source: "carto-positron", minzoom: 0, maxzoom: 19 },
        ],
      },
      center: [37.9, 0.5],
      zoom: 5.2,
      maxBounds: [[31.0, -5.5], [43.0, 6.0]],
      cooperativeGestures: true,
    });

    map.on("load", () => {
      mapRef.current = map;

      fetch("/data/boundaries.geojson")
        .then((r) => r.json())
        .then((geo) => {
          map.addSource("counties", { type: "geojson", data: geo });
          const fillExpr = buildMatchExpression(countyScores);
          map.addLayer({
            id: "counties-fill",
            type: "fill",
            source: "counties",
            paint: {
              "fill-color": fillExpr as any,
              "fill-opacity": 0.85,
              "fill-outline-color": "#FFFFFF",
            },
          });
          map.addLayer({
            id: "counties-outline",
            type: "line",
            source: "counties",
            paint: { "line-color": "#FFFFFF", "line-width": 1 },
          });

          map.on("click", "counties-fill", (e) => {
            if (e.features?.[0]?.properties) {
              onCountyClick(String(e.features[0].properties.county_code));
            }
          });
          map.on("click", (e) => {
            const features = map.queryRenderedFeatures(e.point, { layers: ["counties-fill"] });
            if (!features.length) onCountyClick("");
          });

          map.fitBounds([[33.5, -5], [42.5, 5]], { padding: 40, duration: 0 });
          setReady(true);
        })
        .catch(() => setReady(true));
    });

    return () => { map.remove(); mapRef.current = null; };
  }, []);

  return (
    <div className="relative min-h-[400px] w-full overflow-hidden rounded-xl border border-[#E0DBD0] shadow-sm">
      <div ref={containerRef} className="h-[70svh] w-full min-h-[400px] max-h-[800px]" aria-label="Map of Kenya counties with digital rights risk data" />
      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#FDFBF7] text-sm text-[#6B6355]">
          Loading geographic interface...
        </div>
      )}
    </div>
  );
}
