"use client";

interface RadarChartProps {
  scores: { label: string; value: number }[];
  size?: number;
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function wrapLabel(label: string): string[] {
  const words = label.split(" ");
  if (words.length <= 2) return words;
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}

export default function RadarChart({ scores, size = 200 }: RadarChartProps) {
  if (scores.length === 0) return null;
  const n = scores.length;
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 24;

  const levels = [0.2, 0.4, 0.6, 0.8, 1.0].reverse();
  const fontSize = size <= 180 ? 7 : 8;

  const dataPoints = scores.map((s, i) => {
    const angle = (360 / n) * i - 90;
    const v = Math.max(0, Math.min(1, s.value / 100));
    return { point: polarToCartesian(cx, cy, r * v, angle), angle };
  });
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? "M" : "L"}${p.point.x},${p.point.y}`).join(" ") + "Z";

  const levelPaths = levels.map((lv) => {
    const pts = Array.from({ length: n }, (_, i) => {
      const angle = (360 / n) * i - 90;
      const p = polarToCartesian(cx, cy, r * lv, angle);
      return `${i === 0 ? "M" : "L"}${p.x},${p.y}`;
    });
    return pts.join(" ") + "Z";
  });

  const axes = Array.from({ length: n }, (_, i) => {
    const angle = (360 / n) * i - 90;
    return { x1: cx, y1: cy, x2: cx + r * Math.cos((angle * Math.PI) / 180), y2: cy + r * Math.sin((angle * Math.PI) / 180) };
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible" role="img" aria-label="Radar chart of digital rights risk dimensions">
      {levelPaths.map((d, i) => (
        <path key={i} d={d} fill="none" stroke="#E0DBD0" strokeWidth={i === 0 ? 1 : 0.5} />
      ))}
      {axes.map((a, i) => (
        <line key={i} x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2} stroke="#E0DBD0" strokeWidth={0.5} />
      ))}
      <path d={dataPath} fill="rgba(234,88,12,0.25)" stroke="#EA580C" strokeWidth={2} />
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p.point.x} cy={p.point.y} r={3.5} fill="#EA580C" stroke="#fff" strokeWidth={2} />
      ))}
      {scores.map((s, i) => {
        const angle = (360 / n) * i - 90;
        const labelR = r + 14;
        const lp = polarToCartesian(cx, cy, labelR, angle);
        const lines = wrapLabel(s.label);
        return (
          <text
            key={i}
            x={lp.x}
            y={lp.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={fontSize}
            fill="#6B6355"
          >
            {lines.map((line, li) => (
              <tspan key={li} x={lp.x} dy={li === 0 ? "-0.4em" : "1.0em"}>{line}</tspan>
            ))}
          </text>
        );
      })}
    </svg>
  );
}
