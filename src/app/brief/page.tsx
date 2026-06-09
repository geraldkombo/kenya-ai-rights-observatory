'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { counties, indicators } from '@/lib/data';
import { computeDRRS, getDRRSBadgeClass } from '@/lib/scoring';
import { NEIGHBORS } from '@/lib/neighbors';
import { Suspense } from 'react';

const BAR_COLORS = ['#FFF7BC', '#FEC44F', '#D95F0E', '#8C2D04'];

function barColor(v: number): string {
  return v >= 70 ? BAR_COLORS[3] : v >= 50 ? BAR_COLORS[2] : v >= 30 ? BAR_COLORS[1] : BAR_COLORS[0];
}

function BriefContent() {
  const searchParams = useSearchParams();
  const countyId = searchParams.get('id') || '47';
  const county = counties.find(c => c.id === countyId);

  if (!county) return <div className="p-8 text-brand-dark">County not found.</div>;

  const indicator = indicators.find(i => i.county_code === countyId);
  if (!indicator) return <div className="p-8 text-brand-dark">County data not found.</div>;

  const score = computeDRRS(county.id, indicator);

  return (
    <div className="mx-auto max-w-4xl bg-white p-8 text-brand-dark print:p-0 print:w-full">
      <div className="mb-8 flex items-end justify-between border-b-4 border-brand-brown pb-4">
        <div>
          <h1 className="text-4xl font-bold text-brand-brown">{county.name} County</h1>
          <h2 className="mt-2 text-xl text-brand-orange">Digital Rights & Surveillance Brief</h2>
        </div>
        <button
          onClick={() => window.print()}
          className="min-h-[44px] rounded bg-brand-brown px-4 py-2 text-brand-cream transition-colors hover:bg-brand-accent print:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
        >
          Print Brief
        </button>
      </div>

      <div className="mb-8">
        <div className={`inline-block rounded-full px-4 py-1 text-lg font-bold ${getDRRSBadgeClass(score.drrs)}`}>
          DRRS: {score.drrs}/100 - {score.drrs >= 70 ? 'High Risk' : score.drrs >= 50 ? 'Elevated Risk' : score.drrs >= 30 ? 'Moderate Risk' : 'Lower Risk'}
        </div>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-8">
        <div className="break-inside-avoid rounded-lg border border-brand-border bg-brand-bg p-6">
          <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-brand-stone">County indicators</h3>
          <ul className="space-y-4 text-sm">
            <li><strong>AI systems:</strong> {indicator.ai_systems_count}</li>
            <li><strong>CCTV density:</strong> {indicator.cctv_density} per 10k</li>
            <li><strong>Data complaints:</strong> {indicator.odpc_complaints}</li>
            <li><strong>Shutdown hours:</strong> {indicator.internet_shutdown_hours}h</li>
            <li><strong>Internet usage:</strong> {indicator.internet_usage_pct}%</li>
            <li><strong>Mobile ownership:</strong> {indicator.mobile_ownership_pct}%</li>
            <li><strong>Birth registration:</strong> {indicator.birth_registration_pct}%</li>
            <li><strong>Population:</strong> {indicator.population.toLocaleString()}</li>
          </ul>
        </div>
        <div className="break-inside-avoid rounded-lg border border-brand-border bg-brand-bg p-6">
          <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-brand-stone">Actions</h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-brand-stone">
            <li>Submit FOIA requests to county government regarding AI procurement.</li>
            <li>Engage local civil society on biometric inclusion campaigns.</li>
            <li>Monitor network throttling during localized protests.</li>
          </ul>
        </div>
      </div>

      <div className="mb-8 break-inside-avoid rounded-lg border border-brand-border bg-brand-bg p-6">
        <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-brand-stone">Neighbouring Counties</h3>
        <div className="flex flex-wrap gap-2">
          {(NEIGHBORS[county.id] ?? []).map((nid) => {
            const nc = counties.find((c) => c.id === nid);
            if (!nc) return null;
            return (
              <Link
                key={nid}
                href={`/brief?id=${nid}`}
                className="inline-flex items-center min-h-[44px] rounded-md border border-brand-border bg-white px-3 py-1.5 text-sm text-brand-stone transition-colors hover:border-brand-orange hover:text-brand-orange"
              >
                {nc.name}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mb-8 space-y-3" aria-label="Score breakdown">
        <h3 className="font-bold text-brand-brown">Score breakdown</h3>
        {[
          { label: 'Surveillance', value: score.surveillance },
          { label: 'Internet health', value: score.internetHealth },
          { label: 'Data privacy', value: score.dataPrivacy },
          { label: 'Biometric enrollment', value: score.biometric },
          { label: 'Platform impact', value: score.platformImpact },
        ].map((dim) => (
          <div key={dim.label} className="flex items-center gap-3">
            <span className="w-40 text-sm text-brand-stone">{dim.label}</span>
            <div className="h-3 flex-1 overflow-hidden rounded-full bg-brand-border">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{ width: `${dim.value}%`, backgroundColor: barColor(dim.value) }}
              />
            </div>
            <span className="w-8 text-right text-xs font-bold text-brand-dark">{dim.value}</span>
          </div>
        ))}
      </div>

      <p className="border-t border-brand-border pt-4 text-xs text-brand-muted">
        Generated by the Kenya AI & Digital Rights Observatory. Data valid as of June 2026.
      </p>
    </div>
  );
}

export default function BriefPage() {
  return (
    <Suspense fallback={<div className="p-8 text-brand-dark">Loading brief...</div>}>
      <BriefContent />
    </Suspense>
  );
}
