"use client";

import { useMemo } from "react";
import type { CountyRecord, DigitalRightsIndicators } from "@/lib/types";
import { computeDRRS, getDRRSColor } from "@/lib/scoring";

interface Props {
  counties: CountyRecord[];
  indicators: DigitalRightsIndicators[];
  onCountyClick: (code: string) => void;
}

function RankedCounty({
  rank, name, score, color, onClick,
}: {
  rank: number; name: string; score: number; color: string; onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-2 rounded-md border border-[#E0DBD0] bg-white px-2.5 py-2 text-left text-xs shadow-sm transition-colors hover:border-[#A8A08F] hover:bg-[#F8F5F0]"
    >
      <span className="w-5 text-center font-mono text-[10px] font-semibold text-[#A8A08F]">{rank}</span>
      <span className="flex-1 truncate font-medium text-[#292524]">{name}</span>
      <span className="rounded px-1.5 py-0.5 text-[10px] font-bold tabular-nums" style={{ backgroundColor: color, color: score >= 50 ? "#fff" : "#292524" }}>
        {score}
      </span>
    </button>
  );
}

export default function CountyRankings({ counties, indicators, onCountyClick }: Props) {
  const rankings = useMemo(() => {
    return counties
      .map((c) => {
        const ind = indicators.find((i) => i.county_code === c.id);
        if (!ind) return { id: c.id, name: c.name, score: 0 };
        return { id: c.id, name: c.name, score: computeDRRS(c.id, ind).drrs };
      })
      .sort((a, b) => b.score - a.score);
  }, [counties, indicators]);

  const top5 = rankings.slice(0, 5);
  const bottom5 = rankings.slice(-5).reverse();

  if (rankings.length === 0) {
    return (
      <div className="rounded-xl border border-[#E0DBD0] bg-white p-5">
        <p className="text-sm text-[#A8A08F]">Loading rankings...</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-[#E0DBD0] bg-white p-5">
      <h3 className="text-sm font-semibold text-[#292524]">Highest digital rights risk</h3>
      <p className="mt-1 text-[10px] text-[#A8A08F]">Counties with the most critical surveillance and privacy concerns</p>

      <div className="mt-3">
        <h4 className="text-[10px] font-semibold uppercase tracking-wider text-[#6B6355]">Maximum risk</h4>
        <div className="mt-1 space-y-0.5">
          {top5.map((c, i) => (
            <RankedCounty key={c.id} rank={i + 1} name={c.name} score={c.score} color={getDRRSColor(c.score)} onClick={() => onCountyClick(c.id)} />
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-[10px] font-semibold uppercase tracking-wider text-[#6B6355]">Minimum risk</h4>
        <div className="mt-1 space-y-0.5">
          {bottom5.map((c, i) => (
            <RankedCounty key={c.id} rank={rankings.length - 4 + i} name={c.name} score={c.score} color={getDRRSColor(c.score)} onClick={() => onCountyClick(c.id)} />
          ))}
        </div>
      </div>
    </div>
  );
}
