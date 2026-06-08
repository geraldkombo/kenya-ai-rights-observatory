import Link from "next/link";

export default function MethodPage() {
  return (
    <div className="mx-auto max-w-3xl px-8 py-8">
      <h1 className="text-[24px] font-bold text-[#78350F]">Methodology Framework</h1>
      <p className="mt-4 text-[14px] leading-7 text-[#6B6355] border-l-4 border-[#EA580C] pl-4">
        Digital rights risk requires transparent, verifiable assessment. All indicators, data sources, and calculations are publicly documented and independently reproducible.
      </p>

      <div className="mt-8 space-y-8">
        <section className="rounded-[8px] border border-[#E0DBD0] bg-white p-8">
          <h2 className="text-[14px] font-bold uppercase tracking-widest text-[#78350F]">The Digital Rights Risk Score (DRRS)</h2>
          <p className="mt-4 text-[14px] leading-7 text-[#292524]">
            The Digital Rights Risk Score (DRRS) is a composite index from <strong>0 to 100</strong> that measures the level of digital rights risk within each county. Higher scores indicate greater exposure to surveillance, internet disruption, data privacy violations, and algorithmic harm.
          </p>
          <div className="mt-4 rounded-[6px] bg-[#F8F5F0] p-4 text-[14px] leading-7 text-[#6B6355]">
            <p className="font-semibold text-[#292524]">How to read the score:</p>
            <ul className="list-disc pl-4 mt-2 space-y-1">
              <li><strong>0&ndash;29:</strong> Low digital rights risk</li>
              <li><strong>30&ndash;49:</strong> Moderate digital rights risk</li>
              <li><strong>50&ndash;69:</strong> High digital rights risk requiring attention</li>
              <li><strong>70&ndash;100:</strong> Critical digital rights risk requiring urgent intervention</li>
            </ul>
          </div>
        </section>

        <section className="rounded-[8px] border border-[#E0DBD0] bg-white p-8">
          <h2 className="text-[14px] font-bold uppercase tracking-widest text-[#78350F]">Score Components</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[8px] bg-[#F8F5F0] p-4">
              <h3 className="text-[12px] font-bold uppercase tracking-widest text-[#EA580C]">Surveillance Density (25%)</h3>
              <p className="mt-2 text-[12px] leading-6 text-[#6B6355]">
                Density of CCTV cameras per 10,000 population and count of known AI-powered surveillance systems. Higher density indicates greater monitoring infrastructure.
              </p>
            </div>
            <div className="rounded-[8px] bg-[#F8F5F0] p-4">
              <h3 className="text-[12px] font-bold uppercase tracking-widest text-[#EA580C]">Internet Health (25%)</h3>
              <p className="mt-2 text-[12px] leading-6 text-[#6B6355]">
                Internet shutdown hours in the past 12 months and network performance scores. More shutdown hours and degraded connectivity indicate higher risk.
              </p>
            </div>
            <div className="rounded-[8px] bg-[#F8F5F0] p-4">
              <h3 className="text-[12px] font-bold uppercase tracking-widest text-[#EA580C]">Data Privacy (20%)</h3>
              <p className="mt-2 text-[12px] leading-6 text-[#6B6355]">
                Complaints filed with the Office of the Data Protection Commissioner (ODPC) and known data breach incidents. Higher complaint volumes indicate greater privacy risk.
              </p>
            </div>
            <div className="rounded-[8px] bg-[#F8F5F0] p-4">
              <h3 className="text-[12px] font-bold uppercase tracking-widest text-[#EA580C]">Biometric Enrollment (10%)</h3>
              <p className="mt-2 text-[12px] leading-6 text-[#6B6355]">
                Rate of biometric ID enrollment (Huduma Namba, mobile money KYC). Higher enrollment without corresponding data protection safeguards elevates risk.
              </p>
            </div>
            <div className="rounded-[8px] bg-[#F8F5F0] p-4 sm:col-span-2">
              <h3 className="text-[12px] font-bold uppercase tracking-widest text-[#EA580C]">Platform Impact (20%)</h3>
              <p className="mt-2 text-[12px] leading-6 text-[#6B6355]">
                Social media content moderation reports, algorithmic bias incidents, and platform-related human rights complaints. Higher volume indicates greater impact of automated systems on civic space.
              </p>
            </div>
          </div>
          <div className="mt-4 rounded-[8px] bg-[#F8F5F0] p-4 text-[14px] leading-7 text-[#6B6355]">
            <p className="font-semibold text-[#292524]">Formula:</p>
            <p className="mt-1"><strong>DRRS</strong> = (Surveillance x 0.25) + (Internet Health Deficit x 0.25) + (Data Privacy x 0.20) + (Biometric x 0.10) + (Platform Impact x 0.20)</p>
            <p className="text-[12px] leading-5 text-[#6B6355] mt-2">Each component is normalised to a 0&ndash;1 scale, then the weighted sum is multiplied by 100.</p>
          </div>
        </section>

        <section className="rounded-[8px] border border-[#E0DBD0] bg-white p-8">
          <h2 className="text-[14px] font-bold uppercase tracking-widest text-[#78350F]">Data Sources</h2>
          <ul className="mt-4 space-y-3 text-[14px] leading-7 text-[#6B6355]">
            <li><strong>Population:</strong> Kenya National Bureau of Statistics, 2019 Kenya Population and Housing Census.</li>
            <li><strong>Internet usage &amp; mobile ownership:</strong> Communications Authority of Kenya / KNBS, 2023/24 Kenya Housing Survey (published August 2025). Internet usage ranges from 64.7% (Nairobi) to 9.1% (West Pokot).</li>
            <li><strong>Birth registration:</strong> KNBS Vital Statistics Report 2023. Used as proxy for biometric/civil registration completeness per county. Ranges from 131.6% (Nairobi) to 12.2% (Wajir).</li>
            <li><strong>Surveillance:</strong> Compiled from media reports, civil society monitoring (CIPESA, KICTANet, Amnesty Kenya, KHRC), and open-source intelligence on CCTV and AI system deployments. County-level data are estimates derived from multiple proxy indicators.</li>
            <li><strong>Internet health:</strong> Internet shutdown records from the Kenya ICT Action Network (KICTANet), OONI network measurement data, and Access Now #KeepItOn reports. County-level estimates incorporate documented events (June 2024 national shutdown, November 2024 Telegram block, localized disruptions).</li>
            <li><strong>Data privacy:</strong> Office of the Data Protection Commissioner (ODPC) — 9,061 total complaints as of March 2026. County distribution estimated from regional office presence (Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, Machakos, Garissa, Nyeri) and population.</li>
            <li><strong>Biometric enrollment:</strong> Huduma Namba/Maisha Namba enrollment statistics from the National Registration Bureau, cross-referenced with birth registration completeness from KNBS Vital Statistics 2023.</li>
            <li><strong>Platform impact:</strong> Content moderation transparency reports from Meta, Google, TikTok, and X (Twitter), combined with Kenyan civil society monitoring and CA internet usage data.</li>
          </ul>
        </section>

        <section className="rounded-[8px] bg-[#78350F] p-8 text-[#FDFBF7]">
          <h2 className="text-[14px] font-bold uppercase tracking-widest text-[#FDE68A]">Limitations</h2>
          <p className="mt-4 text-[14px] leading-7 text-[#FDFBF7]">
            This platform relies on publicly reported data, which likely undercounts the true extent of surveillance and AI system deployment. Corporate transparency reports are voluntary and may omit Kenya-specific metrics. Internet shutdown data depends on user-submitted OONI measurements, which are sparse in rural areas. The scores represent a minimum baseline.
          </p>
        </section>

        <div className="text-center text-[12px] text-[#A8A08F]">
          <Link href="/" className="text-[#EA580C] underline underline-offset-2">&larr; Return to map</Link>
        </div>
      </div>
    </div>
  );
}
