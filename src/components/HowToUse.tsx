'use client';
import { useState } from 'react';

export default function HowToUse() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#E0DBD0] rounded-lg bg-[#FDFBF7] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-left font-bold text-[#78350F] hover:bg-[#F8F5F0] flex justify-between items-center"
      >
        <span>How to use this map</span>
        <span className="text-[#EA580C]">{isOpen ? '\u2212' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-4 text-[#6B6355] text-sm space-y-2 bg-white border-t border-[#E0DBD0]">
          <p><strong>1. Navigate:</strong> Click on any county to view its digital rights risk profile.</p>
          <p><strong>2. Understand Scores:</strong> The overall DRRS is out of 100. Higher scores indicate greater risk (more surveillance, poorer internet health).</p>
          <p><strong>3. Deep Dive:</strong> Use the side panel to see exact counts of AI systems, CCTV density, and biometric risks.</p>
        </div>
      )}
    </div>
  );
}
