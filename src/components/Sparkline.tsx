import { useMemo } from "react";

interface Props {
  data: number[];
  width?: number;
  height?: number;
  color?: string;
  fallbackText?: string;
}

export default function Sparkline({ data, width = 56, height = 24, color, fallbackText }: Props) {
  const lineColor = color ?? (data.length >= 2 && data[data.length - 1] >= data[0] ? "#DC2626" : "#059669");

  const { points, viewBox, polyline } = useMemo(() => {
    if (data.length < 2) return { points: "", viewBox: `0 0 ${width} ${height}`, polyline: "" };

    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const pad = 1;

    const pts = data.map((v, i) => {
      const x = pad + (i / (data.length - 1)) * (width - 2 * pad);
      const y = height - pad - ((v - min) / range) * (height - 2 * pad);
      return `${x},${y}`;
    });

    return {
      points: pts.join(" "),
      viewBox: `0 0 ${width} ${height}`,
      polyline: pts.join(" "),
    };
  }, [data, width, height]);

  if (data.length < 2) {
    return <span className="text-[10px] text-brand-muted">{fallbackText ?? "-"}</span>;
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      stroke={lineColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
      role="img"
      aria-label={`Trend: ${data.join(" → ")}`}
    >
      {data.length === 2 ? (
        <line x1={parseFloat(polyline.split(" ")[0].split(",")[0])} y1={parseFloat(polyline.split(" ")[0].split(",")[1])} x2={parseFloat(polyline.split(" ")[1].split(",")[0])} y2={parseFloat(polyline.split(" ")[1].split(",")[1])} />
      ) : (
        <polyline points={polyline} />
      )}
      <circle cx={parseFloat(polyline.split(" ")[polyline.split(" ").length - 1].split(",")[0])} cy={parseFloat(polyline.split(" ")[polyline.split(" ").length - 1].split(",")[1])} r="2" fill={lineColor} stroke="none" />
    </svg>
  );
}
