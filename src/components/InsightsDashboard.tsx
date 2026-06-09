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
      <div className="break-inside-avoid rounded-xl border border-brand-border bg-white p-5 transition-all duration-200 ease-in-out hover:shadow-md">
        <div className="text-xs font-semibold uppercase tracking-wider text-brand-stone">Counties</div>
        <div className="mt-1 text-2xl font-bold text-brand-dark">{countyCount}</div>
        <div className="text-xs text-brand-muted">monitored</div>
      </div>
      <div className="break-inside-avoid rounded-xl border border-brand-border bg-white p-5 transition-all duration-200 ease-in-out hover:shadow-md">
        <div className="text-xs font-semibold uppercase tracking-wider text-brand-stone">AI Systems</div>
        <div className="mt-1 text-2xl font-bold text-brand-dark">{totalAISystems}</div>
        <div className="text-xs text-brand-muted">identified</div>
      </div>
      <div className="break-inside-avoid rounded-xl border border-brand-border bg-white p-5 transition-all duration-200 ease-in-out hover:shadow-md">
        <div className="text-xs font-semibold uppercase tracking-wider text-brand-stone">Shutdown Hours</div>
        <div className="mt-1 text-2xl font-bold text-brand-dark">{totalShutdownHours.toLocaleString()}</div>
        <div className="text-xs text-brand-muted">cumulative (12mo)</div>
      </div>
      <div className="break-inside-avoid rounded-xl border border-brand-border bg-white p-5 transition-all duration-200 ease-in-out hover:shadow-md">
        <div className="text-xs font-semibold uppercase tracking-wider text-brand-stone">High Risk</div>
        <div className="mt-1 text-2xl font-bold text-brand-dark">{highRiskCount}</div>
        <div className="text-xs text-brand-muted">counties (score &gt;= 50)</div>
      </div>
    </div>
  );
}
