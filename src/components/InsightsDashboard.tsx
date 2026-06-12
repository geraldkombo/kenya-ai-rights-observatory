"use client";

interface DashboardProps {
  countyCount: number;
  highRiskCount: number;
  totalAISystems: number;
  totalShutdownHours: number;
}

export default function InsightsDashboard({
  countyCount,
  highRiskCount,
  totalAISystems,
  totalShutdownHours,
}: DashboardProps) {
  return (
    <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
      <div className="break-inside-avoid rounded-xl border border-stone-200 bg-white p-5 transition-all duration-200 ease-in-out hover:shadow-md">
        <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">Counties</div>
        <div className="mt-1 text-2xl font-bold text-stone-800">{countyCount}</div>
        <div className="text-xs text-stone-400">monitored</div>
      </div>
      <div className="break-inside-avoid rounded-xl border border-stone-200 bg-white p-5 transition-all duration-200 ease-in-out hover:shadow-md">
        <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">CCTV Monitoring</div>
        <div className="mt-1 text-2xl font-bold text-stone-800">{totalAISystems}</div>
        <div className="text-xs text-stone-400">identified</div>
      </div>
      <div className="break-inside-avoid rounded-xl border border-stone-200 bg-white p-5 transition-all duration-200 ease-in-out hover:shadow-md">
        <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">Shutdown Hours</div>
        <div className="mt-1 text-2xl font-bold text-stone-800">{totalShutdownHours.toLocaleString()}</div>
        <div className="text-xs text-stone-400">cumulative (12mo)</div>
      </div>
      <div className="break-inside-avoid rounded-xl border border-stone-200 bg-white p-5 transition-all duration-200 ease-in-out hover:shadow-md">
        <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">High Risk</div>
        <div className="mt-1 text-2xl font-bold text-stone-800">{highRiskCount}</div>
        <div className="text-xs text-stone-400">counties (score &gt;= 50)</div>
      </div>
    </div>
  );
}
