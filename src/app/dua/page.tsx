import Link from "next/link";

export default function DUAPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <h1 className="text-xl font-bold text-[#292524]">Data Use Agreement</h1>
      <p className="mt-1 text-sm text-[#6B6355]">How data is sourced, attributed, and licensed on this platform.</p>

      <div className="mt-8 space-y-8">
        <section className="rounded-xl border border-[#E0DBD0] bg-white p-6">
          <h2 className="text-base font-semibold text-[#292524]">Open Data Principles</h2>
          <p className="mt-3 text-sm leading-6 text-[#6B6355]">
            The Kenya AI &amp; Digital Rights Observatory is built entirely on open civic data and publicly available reports. Every indicator displayed on this platform can be traced to a published source. Transparency in methodology builds trust with the communities, civil society organisations, and policymakers who use this tool for advocacy and planning.
          </p>
          <p className="mt-3 text-sm leading-6 text-[#6B6355]">
            Use of this platform constitutes agreement to attribute the original data creators in any derivative work, publication, or research that incorporates data presented here.
          </p>
        </section>

        <section className="rounded-xl border border-[#E0DBD0] bg-white p-6">
          <h2 className="text-base font-semibold text-[#292524]">Source Register</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E0DBD0] text-xs font-semibold uppercase tracking-wider text-[#6B6355]">
                  <th className="pb-2 pr-4 text-left">Dataset</th>
                  <th className="pb-2 pr-4 text-left">Source</th>
                  <th className="pb-2 text-left">License</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#E0DBD0]"><td className="py-2.5 pr-4 text-[#292524] font-medium">Surveillance Infrastructure</td><td className="py-2.5 pr-4">CIPESA, Article 19, Media reports</td><td className="py-2.5 text-[#6B6355]">Public records / CC-BY</td></tr>
                <tr className="border-b border-[#E0DBD0]"><td className="py-2.5 pr-4 text-[#292524] font-medium">Internet Shutdown Data</td><td className="py-2.5 pr-4">KICTANet, Access Now #KeepItOn, OONI</td><td className="py-2.5 text-[#6B6355]">CC-BY / Open Data</td></tr>
                <tr className="border-b border-[#E0DBD0]"><td className="py-2.5 pr-4 text-[#292524] font-medium">ODPC Complaints</td><td className="py-2.5 pr-4">Office of the Data Protection Commissioner</td><td className="py-2.5 text-[#6B6355]">Public records</td></tr>
                <tr className="border-b border-[#E0DBD0]"><td className="py-2.5 pr-4 text-[#292524] font-medium">Biometric Enrollment</td><td className="py-2.5 pr-4">National Registration Bureau, Communications Authority of Kenya</td><td className="py-2.5 text-[#6B6355]">Public records</td></tr>
                <tr className="border-b border-[#E0DBD0]"><td className="py-2.5 pr-4 text-[#292524] font-medium">Platform Transparency</td><td className="py-2.5 pr-4">Meta, Google, TikTok, X transparency reports</td><td className="py-2.5 text-[#6B6355]">Public reports</td></tr>
                <tr><td className="py-2.5 pr-4 text-[#292524] font-medium">Kenya Population</td><td className="py-2.5 pr-4">Kenya National Bureau of Statistics (KNBS) 2019 Census</td><td className="py-2.5 text-[#6B6355]">Open Data</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-[#E0DBD0] bg-white p-6">
          <h2 className="text-base font-semibold text-[#292524]">Suggested Citation</h2>
          <div className="mt-4 rounded-lg bg-[#FDE68A] p-5 text-sm leading-6 text-[#292524]">
            <p className="font-mono">Kenya AI &amp; Digital Rights Observatory. <em>Mapping algorithmic systems, surveillance, and digital rights risks across Kenya&apos;s 47 counties.</em> Nairobi, Kenya. Retrieved from https://geraldkombo.github.io/kenya-ai-rights-observatory/</p>
          </div>
        </section>

        <section className="rounded-xl border border-[#E0DBD0] bg-white p-6">
          <h2 className="text-base font-semibold text-[#292524]">Privacy</h2>
          <p className="mt-3 text-sm leading-6 text-[#6B6355]">This platform uses no cookies, requires no authentication or login, and performs zero user tracking. All data is served as static files. No user data is collected, stored, or transmitted. Map tiles are rendered client-side with no user coordinates leaving the browser.</p>
        </section>

        <div className="text-xs text-[#A8A08F] text-center">
          <Link href="/" className="text-[#EA580C] underline underline-offset-2">&larr; Return to map</Link>
        </div>
      </div>
    </div>
  );
}
