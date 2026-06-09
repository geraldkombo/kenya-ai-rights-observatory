"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { getDRRSColor } from "@/lib/scoring";

interface MapViewProps {
  boundaries: GeoJSON.FeatureCollection;
  countyScores: Record<string, number>;
  countyNames: Record<string, string>;
  onCountyClick: (code: string) => void;
  selectedCountyCode: string | null;
}

function buildMatchExpression(scores: Record<string, number>): any {
  const entries = Object.entries(scores).flatMap(([k, v]) => [Number(k), getDRRSColor(v)]);
  return ["match", ["get", "county_code"], ...entries, "#E7E5E4"];
}

function selectedCode(code: string | null): number {
  return code ? Number(code) : -1;
}

interface HoverInfo {
  countyCode: string;
  countyName: string;
  drrs: number | undefined;
  x: number;
  y: number;
}

export default function MapView({
  boundaries,
  countyScores,
  countyNames,
  onCountyClick,
  selectedCountyCode,
}: MapViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const [ready, setReady] = useState(false);
  const [hasError, setError] = useState(false);
  const [hoverInfo, setHoverInfo] = useState<HoverInfo | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    let map: maplibregl.Map | null = null;
    try {
      map = new maplibregl.Map({
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
    } catch {
      setError(true);
      return;
    }

    map.on("load", () => {
      mapRef.current = map;

      try {
        map.addSource("counties", { type: "geojson", data: boundaries as any });
      } catch {
        setError(true);
        setReady(true);
        return;
      }

      map.addControl(new maplibregl.NavigationControl(), "bottom-right");

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
        id: "counties-hover",
        type: "fill",
        source: "counties",
        paint: {
          "fill-color": fillExpr as any,
          "fill-opacity": 0.95,
          "fill-outline-color": "#292524",
        },
        filter: ["==", "county_code", -1],
      });

      const selCode = selectedCode(selectedCountyCode);
      map.addLayer({
        id: "counties-selected",
        type: "line",
        source: "counties",
        paint: {
          "line-color": "#292524",
          "line-width": ["case", ["==", ["get", "county_code"], selCode], 3, 0],
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

      map.on("mousemove", "counties-fill", (e) => {
        if (e.features?.[0]?.properties) {
          const props = e.features[0].properties;
          const code = String(props.county_code);
          if (map.getCanvas().style.cursor !== "pointer") {
            map.getCanvas().style.cursor = "pointer";
          }
          map.setFilter("counties-hover", ["==", "county_code", Number(code)]);
          const name = countyNames[code] ?? props.COUNTY ?? "Unknown";
          setHoverInfo({
            countyCode: code,
            countyName: name,
            drrs: countyScores[code],
            x: e.point.x,
            y: e.point.y,
          });
        }
      });

      map.on("mouseleave", "counties-fill", () => {
        map.getCanvas().style.cursor = "";
        map.setFilter("counties-hover", ["==", "county_code", -1]);
        setHoverInfo(null);
      });

      map.on("click", (e) => {
        const features = map.queryRenderedFeatures(e.point, { layers: ["counties-fill"] });
        if (!features.length) onCountyClick("");
      });

      map.fitBounds([[33.5, -5], [42.5, 5]], { padding: 40, duration: 0 });
      setReady(true);
    });

    map.on("error", () => {
      setError(true);
      setReady(true);
    });

    return () => { map.remove(); mapRef.current = null; };
  }, [boundaries]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !map.isStyleLoaded()) return;
    const source = map.getSource("counties") as maplibregl.GeoJSONSource | undefined;
    if (source) source.setData(boundaries as any);
  }, [countyScores, selectedCountyCode, boundaries]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !map.isStyleLoaded()) return;
    map.setPaintProperty("counties-selected", "line-width", [
      "case",
      ["==", ["get", "county_code"], selectedCode(selectedCountyCode)],
      3,
      0,
    ]);
  }, [selectedCountyCode]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    const timer = setTimeout(() => {
      try { map.resize(); } catch { /* ignore */ }
    }, 500);
    return () => clearTimeout(timer);
  }, [selectedCountyCode]);

  if (hasError) {
    return (
      <div className="flex h-[400px] items-center justify-center rounded-xl border border-brand-border bg-brand-bg text-sm text-brand-stone">
        Geographic data temporarily unavailable.
      </div>
    );
  }

  return (
    <div className="relative min-h-[400px] w-full overflow-hidden rounded-xl border border-brand-border shadow-sm">
      <div
        ref={containerRef}
        className="h-[70svh] w-full min-h-[400px] max-h-[800px]"
        role="application"
        tabIndex={0}
        aria-label="Map of Kenya counties with digital rights risk data"
      />
      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center bg-brand-cream text-sm text-brand-stone">
          Loading geographic interface...
        </div>
      )}
      {hoverInfo && (
        <div
          className="pointer-events-none absolute z-50 rounded-lg border border-brand-border bg-white p-3 shadow-lg"
          style={{
            left: Math.min(hoverInfo.x + 16, window.innerWidth - 220),
            top: hoverInfo.y + 16,
          }}
          role="tooltip"
          aria-live="polite"
        >
          <div className="font-semibold text-brand-dark">{hoverInfo.countyName}</div>
          {hoverInfo.drrs !== undefined && (
            <div className="mt-0.5 text-xs text-brand-stone">DRRS: {hoverInfo.drrs}</div>
          )}
        </div>
      )}
    </div>
  );
}
