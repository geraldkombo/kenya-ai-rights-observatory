"use client";

interface DRSScore {
  drrs: number;
  surveillance: number;
  internetHealth: number;
  dataPrivacy: number;
  biometric: number;
  platformImpact: number;
}

interface BarCompareProps {
  countyA: string;
  countyB: string;
  scoresA: DRSScore;
  scoresB: DRSScore;
}

type DimKey = "surveillance" | "internetHealth" | "dataPrivacy" | "biometric" | "platformImpact";
const DIMS: { key: DimKey; label: string }[] = [
  { key: "surveillance", label: "CCTV Monitoring" },
  { key: "internetHealth", label: "Internet Disruptions" },
  { key: "dataPrivacy", label: "Data Violations" },
  { key: "biometric", label: "Digital Identity" },
  { key: "platformImpact", label: "Account Suspensions" },
];

export default function BarCompare({ countyA, countyB, scoresA, scoresB }: BarCompareProps) {
  return (
    <div className="w-full space-y-4">
      {DIMS.map(({ key, label }) => {
        const a = scoresA[key] ?? 0;
        const b = scoresB[key] ?? 0;
        const higher = a > b ? "A" : b > a ? "B" : null;
        return (
          <div key={key}>
            <div className="mb-1 flex justify-between text-xs text-brand-stone">
              <span className="font-semibold">{label}</span>
              <span className="font-mono tabular-nums">{a}% vs {b}%</span>
            </div>
            <div className="relative h-8 w-full">
              <div className="absolute inset-0 flex items-center gap-0.5">
                <div className="h-full flex-1 rounded-l bg-brand-border" />
                <div className="h-full flex-1 rounded-r bg-brand-border" />
              </div>
              <div className="relative flex h-full items-center gap-0.5">
                <div className="h-full flex-1" style={{ position: "relative" }}>
                  <div
                    className="absolute bottom-0 left-0 rounded-l transition-all duration-500"
                    style={{
                      height: `${Math.max(a, 4)}%`,
                      width: "100%",
                      backgroundColor: higher === "A" ? "#78350F" : "#A8A08F",
                    }}
                  />
                </div>
                <div className="h-full flex-1" style={{ position: "relative" }}>
                  <div
                    className="absolute bottom-0 right-0 rounded-r transition-all duration-500"
                    style={{
                      height: `${Math.max(b, 4)}%`,
                      width: "100%",
                      backgroundColor: higher === "B" ? "#EA580C" : "#A8A08F",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="mt-0.5 flex justify-between text-[10px] text-brand-muted">
              <span>{countyA}</span>
              <span>{countyB}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
