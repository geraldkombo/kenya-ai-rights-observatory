"use client";
import { useState } from "react";

export default function HowToUse() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-lg border border-brand-border bg-brand-cream">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full min-h-[44px] items-center justify-between px-4 py-3 text-left font-bold text-brand-brown transition-colors hover:bg-brand-bg"
        aria-expanded={isOpen}
        aria-controls="how-to-use-content"
      >
        <span>How to use this map</span>
        <span className={`text-brand-orange transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
          {isOpen ? "\u2212" : "+"}
        </span>
      </button>
      {isOpen && (
        <div id="how-to-use-content" className="space-y-2 border-t border-brand-border bg-white p-4 text-sm text-brand-stone">
          <p><strong>1. Navigate:</strong> Click on any county to view its digital rights risk profile.</p>
          <p><strong>2. Understand Scores:</strong> The overall DRRS is out of 100. Higher scores indicate greater risk.</p>
           <p><strong>3. Deep Dive:</strong> Use the side panel to see exact counts of surveillance systems, CCTV density, and biometric risks.</p>
        </div>
      )}
    </div>
  );
}
