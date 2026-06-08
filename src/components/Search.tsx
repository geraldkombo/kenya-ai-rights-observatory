'use client';

import { useState } from 'react';
import { counties } from '@/lib/data';
import Link from 'next/link';

export default function Search() {
  const [query, setQuery] = useState('');

  const results = query.length > 1
    ? counties.filter(c => c.name.toLowerCase().includes(query.toLowerCase())).slice(0, 5)
    : [];

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Search county..."
        className="w-full px-4 py-2 border border-[#E0DBD0] rounded-md bg-[#FDFBF7] text-[#292524] placeholder-[#A8A08F] focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {results.length > 0 && (
        <ul className="absolute z-50 w-full mt-1 bg-white border border-[#E0DBD0] rounded-md shadow-lg">
          {results.map((county) => (
            <li key={county.id} className="border-b last:border-0 border-[#E0DBD0] hover:bg-[#F8F5F0]">
              <Link href={`/?county=${county.id}`} className="block px-4 py-3 text-[#292524]">
                {county.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
