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
    <div className="grid grid-cols-2 gap-3 mb-6 sm:grid-cols-4">
      <div className="rounded-xl border border-[#E0DBD0] bg-white p-4 transition-all duration-200 ease-in-out hover:shadow-md">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#6B6355]">Counties</div>
        <div className="mt-1 text-2xl font-bold text-[#292524]">{countyCount}</div>
        <div className="text-xs text-[#A8A08F]">monitored</div>
      </div>
      <div className="rounded-xl border border-[#E0DBD0] bg-white p-4 transition-all duration-200 ease-in-out hover:shadow-md">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#6B6355]">AI Systems</div>
        <div className="mt-1 text-2xl font-bold text-[#292524]">{totalAISystems}</div>
        <div className="text-xs text-[#A8A08F]">identified</div>
      </div>
      <div className="rounded-xl border border-[#E0DBD0] bg-white p-4 transition-all duration-200 ease-in-out hover:shadow-md">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#6B6355]">Shutdown Hours</div>
        <div className="mt-1 text-2xl font-bold text-[#292524]">{totalShutdownHours.toLocaleString()}</div>
        <div className="text-xs text-[#A8A08F]">cumulative (12mo)</div>
      </div>
      <div className="rounded-xl border border-[#E0DBD0] bg-white p-4 transition-all duration-200 ease-in-out hover:shadow-md">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#6B6355]">High Risk</div>
        <div className="mt-1 text-2xl font-bold text-[#292524]">{highRiskCount}</div>
        <div className="text-xs text-[#A8A08F]">counties (DRRS &gt;= 50)</div>
      </div>
    </div>
  );
}
