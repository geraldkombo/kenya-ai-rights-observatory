import { counties, indicators } from '@/lib/data';
import CountyDetails from '@/components/CountyDetails';

export function generateStaticParams() {
  return counties.map((county) => ({
    county: county.code,
  }));
}

export default async function EmbedPage({ params }: { params: Promise<{ county: string }> }) {
  const { county: countyCode } = await params;
  const countyData = counties.find(c => c.code === countyCode);

  if (!countyData) {
    return <div className="p-4 text-sm font-bold text-red-700">County not found</div>;
  }

  return (
    <main className="min-h-screen bg-transparent p-2">
      <CountyDetails county={countyData} indicators={indicators} />
    </main>
  );
}
