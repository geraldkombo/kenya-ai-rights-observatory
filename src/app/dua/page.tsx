import Link from "next/link";

export default function DUAPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <h1 className="text-xl font-bold text-brand-dark">Data Use Agreement</h1>
      <p className="mt-1 text-sm text-brand-stone">How data is sourced, attributed, and licensed on this platform.</p>

      <div className="mt-8 space-y-8">
        <section className="break-inside-avoid rounded-xl border border-brand-border bg-white p-6">
          <h2 className="text-base font-semibold text-brand-dark">Open Data Principles</h2>
          <p className="mt-3 text-sm leading-6 text-brand-stone">
            The Kenya Digital Rights Risk Atlas is built entirely on open civic data and publicly available reports. Every indicator displayed on this platform can be traced to a published source. Transparency in methodology builds trust with the communities, civil society organisations, and policymakers who use this tool for advocacy and planning.
          </p>
          <p className="mt-3 text-sm leading-6 text-brand-stone">
            Use of this platform constitutes agreement to attribute the original data creators in any derivative work, publication, or research that incorporates data presented here.
          </p>
        </section>

        <section className="break-inside-avoid rounded-xl border border-brand-border bg-white p-6">
          <h2 className="text-base font-semibold text-brand-dark">Source Register</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-brand-border text-xs font-semibold uppercase tracking-wider text-brand-stone">
                  <th className="pb-2 pr-4 text-left">Dataset</th>
                  <th className="pb-2 pr-4 text-left">Source</th>
                  <th className="pb-2 text-left">License</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-border"><td className="py-2.5 pr-4 font-medium text-brand-dark">CCTV Monitoring</td><td className="py-2.5 pr-4 text-brand-stone">CIPESA, Article 19, Media reports</td><td className="py-2.5 text-brand-muted">Public records / CC-BY</td></tr>
                <tr className="border-b border-brand-border"><td className="py-2.5 pr-4 font-medium text-brand-dark">Internet Shutdown Data</td><td className="py-2.5 pr-4 text-brand-stone">KICTANet, Access Now #KeepItOn, OONI</td><td className="py-2.5 text-brand-muted">CC-BY / Open Data</td></tr>
                <tr className="border-b border-brand-border"><td className="py-2.5 pr-4 font-medium text-brand-dark">ODPC Complaints</td><td className="py-2.5 pr-4 text-brand-stone">Office of the Data Protection Commissioner</td><td className="py-2.5 text-brand-muted">Public records</td></tr>
                <tr className="border-b border-brand-border"><td className="py-2.5 pr-4 font-medium text-brand-dark">Digital Identity</td><td className="py-2.5 pr-4 text-brand-stone">National Registration Bureau, Communications Authority of Kenya</td><td className="py-2.5 text-brand-muted">Public records</td></tr>
                <tr className="border-b border-brand-border"><td className="py-2.5 pr-4 font-medium text-brand-dark">Platform Transparency</td><td className="py-2.5 pr-4 text-brand-stone">Meta, Google, TikTok, X transparency reports</td><td className="py-2.5 text-brand-muted">Public reports</td></tr>
                <tr><td className="py-2.5 pr-4 font-medium text-brand-dark">Kenya Population</td><td className="py-2.5 pr-4 text-brand-stone">Kenya National Bureau of Statistics (KNBS) 2019 Census</td><td className="py-2.5 text-brand-muted">Open Data</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="break-inside-avoid rounded-xl border border-brand-border bg-white p-6">
          <h2 className="text-base font-semibold text-brand-dark">Suggested Citation</h2>
          <div className="mt-4 rounded-lg bg-amber-200 p-5 text-sm leading-6 text-brand-dark">
            <p className="font-mono">Kenya Digital Rights Risk Atlas. <em>Mapping surveillance infrastructure, data privacy, and digital rights across Kenya&apos;s 47 counties.</em> Nairobi, Kenya. Retrieved from https://geraldkombo.github.io/kenya-digital-rights-atlas/</p>
          </div>
        </section>

        <section className="break-inside-avoid rounded-xl border border-brand-border bg-white p-6">
          <h2 className="text-base font-semibold text-brand-dark">Privacy</h2>
          <p className="mt-3 text-sm leading-6 text-brand-stone">This platform uses no cookies, requires no authentication or login, and performs zero user tracking. All data is served as static files. No user data is collected, stored, or transmitted. Map tiles are rendered client-side with no user coordinates leaving the browser.</p>
        </section>

        <div className="text-center text-xs text-brand-muted">
          <Link href="/" className="text-brand-orange underline underline-offset-2 transition-colors hover:text-brand-accent">&larr; Return to map</Link>
        </div>
      </div>
    </div>
  );
}
