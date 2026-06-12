"use client";
import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import type { CountyRecord, DigitalRightsIndicators } from '@/lib/types';
import { computeDRRS, getDRRSColor } from '@/lib/scoring';

export default function ShareCard({ county, indicators }: { county: CountyRecord; indicators: DigitalRightsIndicators[] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const ind = indicators.find(i => i.county_code === county.id);
  const score = ind ? computeDRRS(county.id, ind) : null;

  const generateWhatsAppImage = async () => {
    if (!cardRef.current || !score) return;
    setIsGenerating(true);
    try {
      const canvas = await html2canvas(cardRef.current, { scale: 2, useCORS: true, backgroundColor: '#F8F5F0' });
      canvas.toBlob((blob) => {
        if (!blob) return;
        const file = new File([blob], `${county.name}_DRRS.png`, { type: 'image/png' });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          navigator.share({
            title: `${county.name} Digital Rights Score`,
            text: `View the latest digital rights risk data for ${county.name}.`,
            files: [file],
          }).catch(() => {});
        } else {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = file.name;
          link.click();
          URL.revokeObjectURL(url);
        }
      });
    } finally {
      setIsGenerating(false);
    }
  };

  if (!ind || !score) return null;

  return (
    <div className="mt-2 pt-2">
      <button
        onClick={generateWhatsAppImage} disabled={isGenerating}
        className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-brand-border bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#20B058] disabled:opacity-60"
      >
        {isGenerating ? "Generating Card..." : "Share to WhatsApp"}
      </button>

      <div className="absolute -left-[9999px] top-0">
        <div ref={cardRef} className="w-[400px] bg-brand-cream p-6 font-sans shadow-lg">
          <div className="mb-4 border-b-2 border-brand-dark pb-3">
            <h2 className="text-2xl font-black uppercase tracking-tight text-brand-dark">{county.name}</h2>
            <p className="text-sm font-bold text-brand-stone">Digital Rights Risk Score (DRRS)</p>
          </div>
          <div className="mb-6 text-6xl font-black" style={{ color: getDRRSColor(score.drrs) }}>
            {score.drrs}<span className="text-2xl text-brand-stone">/100</span>
          </div>
          <div className="space-y-3">
            {[
              { label: "CCTV Monitoring", val: score.surveillance },
              { label: "Data Privacy Risk", val: score.dataPrivacy },
              { label: "Digital Identity Exclusion", val: score.biometric },
            ].map(d => (
              <div key={d.label} className="flex justify-between border-b border-brand-border pb-1">
                <span className="font-bold text-brand-dark">{d.label}</span>
                <span className="font-mono text-brand-dark">{d.val}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center text-[10px] font-bold uppercase tracking-widest text-brand-stone">
            Kenya Digital Rights Risk Atlas &bull; Open Data
          </div>
        </div>
      </div>
    </div>
  );
}
