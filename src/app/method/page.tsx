import Link from "next/link";

export default function MethodPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-8">
      <h1 className="text-2xl font-bold text-brand-brown">Methodology Framework</h1>
      <p className="mt-4 border-l-4 border-brand-orange pl-4 text-sm leading-7 text-brand-stone">
        All indicators, data sources, and calculations are publicly documented and independently reproducible.
      </p>

      <div className="mt-8 space-y-8">
        <section className="break-inside-avoid rounded-lg border border-brand-border bg-white p-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-brown">The Digital Rights Risk Score (DRRS)</h2>
          <p className="mt-4 text-sm leading-7 text-brand-dark">
            The Digital Rights Risk Score (DRRS) is a simple score from <strong>0 to 100</strong> that measures digital rights risk within each county. Higher scores mean greater exposure to surveillance, internet disruption, data privacy violations, and algorithmic harm.
          </p>
          <div className="mt-4 rounded-md bg-brand-bg p-4 text-sm leading-7 text-brand-stone">
            <p className="font-semibold text-brand-dark">How to read the score:</p>
            <ul className="mt-2 list-disc space-y-1 pl-4">
              <li><strong>0&ndash;29:</strong> Low digital rights risk</li>
              <li><strong>30&ndash;49:</strong> Moderate digital rights risk</li>
              <li><strong>50&ndash;69:</strong> High digital rights risk</li>
              <li><strong>70&ndash;100:</strong> Critical digital rights risk</li>
            </ul>
          </div>
        </section>

        <section className="break-inside-avoid rounded-lg border border-brand-border bg-white p-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-brown">Score Components</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-brand-bg p-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-orange">CCTV Monitoring (25%)</h3>
              <p className="mt-2 text-xs leading-6 text-brand-stone">
                Density of CCTV cameras per 10,000 population and count of known monitoring systems. Higher density indicates greater surveillance infrastructure.
              </p>
            </div>
            <div className="rounded-lg bg-brand-bg p-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-orange">Internet Disruptions (25%)</h3>
              <p className="mt-2 text-xs leading-6 text-brand-stone">
                Hours of internet shutdown, throttling, or restriction documented in the past year. Higher hours indicate greater interference with online access.
              </p>
            </div>
            <div className="rounded-lg bg-brand-bg p-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-orange">Data Violations (20%)</h3>
              <p className="mt-2 text-xs leading-6 text-brand-stone">
                Formal complaints filed with the Office of the Data Protection Commissioner regarding mishandling of personal information. Higher numbers indicate greater privacy risks.
              </p>
            </div>
            <div className="rounded-lg bg-brand-bg p-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-orange">Digital Identity (10%)</h3>
              <p className="mt-2 text-xs leading-6 text-brand-stone">
                Share of population enrolled in government digital ID systems (Huduma Namba, Maisha Namba). Higher enrollment means more biometric data in state databases.
              </p>
            </div>
            <div className="rounded-lg bg-brand-bg p-4 sm:col-span-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-orange">Account Suspensions (20%)</h3>
              <p className="mt-2 text-xs leading-6 text-brand-stone">
                How many accounts, pages, or posts social media platforms removed or restricted in Kenya. Based on transparency reports from Meta, Google, TikTok, and X.
              </p>
            </div>
          </div>
          <div className="mt-4 rounded-md bg-brand-bg p-4 text-sm leading-7 text-brand-stone">
            <p className="font-semibold text-brand-dark">Formula:</p>
            <p className="mt-1"><strong>DRRS</strong> = (CCTV Monitoring x 0.25) + (Internet Disruptions x 0.25) + (Data Violations x 0.20) + (Digital Identity x 0.10) + (Account Suspensions x 0.20)</p>
            <p className="mt-2 text-xs leading-5 text-brand-stone">Each component is normalised to a 0&ndash;1 scale, then the weighted sum is multiplied by 100.</p>
          </div>
        </section>

        <section className="break-inside-avoid rounded-lg border border-brand-border bg-white p-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-brown">Data Sources</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-brand-stone">
            <li><strong>Population:</strong> Kenya National Bureau of Statistics, 2019 Kenya Population and Housing Census.</li>
            <li><strong>Internet usage &amp; mobile ownership:</strong> Communications Authority of Kenya / KNBS, 2023/24 Kenya Housing Survey (published August 2025). Internet usage ranges from 64.7% (Nairobi) to 9.1% (West Pokot).</li>
            <li><strong>Birth registration:</strong> KNBS Vital Statistics Report 2023. Used as proxy for biometric/civil registration completeness per county. Ranges from 131.6% (Nairobi) to 12.2% (Wajir).</li>
            <li><strong>CCTV Monitoring:</strong> Compiled from media reports, civil society monitoring (CIPESA, KICTANet, Amnesty Kenya, KHRC), and open-source intelligence on CCTV and surveillance deployments. County-level data are estimates derived from multiple proxy indicators.</li>
            <li><strong>Internet Disruptions:</strong> Internet shutdown records from the Kenya ICT Action Network (KICTANet), OONI network measurement data, and Access Now #KeepItOn reports. County-level estimates incorporate documented events (June 2024 national shutdown, November 2024 Telegram block, localized disruptions).</li>
            <li><strong>Data Violations:</strong> Office of the Data Protection Commissioner (ODPC) - 9,061 total complaints as of March 2026. County distribution estimated from regional office presence (Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, Machakos, Garissa, Nyeri) and population.</li>
            <li><strong>Digital Identity:</strong> Huduma Namba/Maisha Namba enrollment statistics from the National Registration Bureau, cross-referenced with birth registration completeness from KNBS Vital Statistics 2023.</li>
            <li><strong>Account Suspensions:</strong> Content moderation transparency reports from Meta, Google, TikTok, and X (Twitter), combined with Kenyan civil society monitoring and CA internet usage data.</li>
          </ul>
        </section>

        <section className="break-inside-avoid rounded-lg bg-brand-brown p-6 text-brand-cream">
          <h2 className="text-sm font-bold uppercase tracking-widest text-amber-200">Limitations</h2>
          <p className="mt-4 text-sm leading-7 text-brand-cream">
            This platform relies on publicly reported data, which likely undercounts the true extent of surveillance deployment. Corporate transparency reports are voluntary and may omit Kenya-specific metrics. Internet shutdown data depends on user-submitted OONI measurements, which are sparse in rural areas. The scores represent a minimum baseline.
          </p>
        </section>

        <div className="text-center text-xs text-brand-muted">
          <Link href="/" className="text-brand-orange underline underline-offset-2 transition-colors hover:text-brand-accent">&larr; Return to map</Link>
        </div>
      </div>
    </div>
  );
}
