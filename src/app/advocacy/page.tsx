import Link from "next/link";

export default function AdvocacyPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-4 py-8 sm:px-8">
      <h1 className="mb-6 text-3xl font-bold text-brand-brown">Advocacy & Action Guide</h1>

      <p className="mb-8 text-sm leading-relaxed text-brand-stone">
        Data without action is purely academic. The DRRS is designed to arm civil society, policy researchers, and advocates with the empirical evidence needed to challenge digital rights violations. Below are templates for initiating Access to Information (FOIA) requests under Article 35 of the Constitution of Kenya.
      </p>

      <section className="mb-8 break-inside-avoid rounded-xl border border-brand-border bg-white p-6">
        <h2 className="mb-1 text-base font-bold text-brand-dark">Template 1: Biometric Data in Public Facilities</h2>
        <p className="mb-4 text-xs text-brand-muted">Request under Article 35, Constitution of Kenya &sect;4 Access to Information Act (2016)</p>
        <div className="overflow-x-auto rounded-lg border border-brand-border bg-brand-bg p-5 font-mono text-xs leading-relaxed text-brand-dark">
          <pre className="whitespace-pre-wrap">{`To: The County Secretary / Data Protection Officer
[County Government Name]

RE: REQUEST FOR INFORMATION ON BIOMETRIC DATA COLLECTION PROTOCOLS
    IN PUBLIC FACILITIES

Under Article 35 of the Constitution of Kenya and Section 4 of the
Access to Information Act (2016), I request the following records
pertaining to the procurement and deployment of biometric and CCTV
surveillance systems in [County Name]:

1. Data Protection Impact Assessments (DPIAs) conducted prior to
   installation of facial recognition or biometric enrollment systems
   in county-operated health facilities and public schools.

2. Protocols governing retention, anonymization, and deletion of
   biometric data, specifically concerning minors and vulnerable
   youth receiving county services.

3. Copies of third-party sharing agreements with vendor corporations
   regarding access to this localized data.

Please provide these records in machine-readable digital format
within the statutory 21-day period.

Yours faithfully,
[Your Name / Organisation]
[Contact]`}</pre>
        </div>
      </section>

      <section className="mb-8 break-inside-avoid rounded-xl border border-brand-border bg-white p-6">
        <h2 className="mb-1 text-base font-bold text-brand-dark">Template 2: Internet Shutdown & Network Throttling</h2>
        <p className="mb-4 text-xs text-brand-muted">Request under Article 35, Constitution of Kenya</p>
        <div className="overflow-x-auto rounded-lg border border-brand-border bg-brand-bg p-5 font-mono text-xs leading-relaxed text-brand-dark">
          <pre className="whitespace-pre-wrap">{`To: The County Commissioner / Communications Authority of Kenya

RE: REQUEST FOR INFORMATION ON INTERNET DISRUPTIONS IN [COUNTY NAME]

Under Article 35 of the Constitution of Kenya, I request the
following records regarding network disruptions documented in
[County Name] during the period June 2024 to June 2026:

1. Logs of any directives issued to telecommunications providers
   ordering the suspension or throttling of internet services.

2. Records of compensation paid to subscribers for service
   downtime exceeding contractual thresholds.

3. Correspondence between the National Security Council and the
   Communications Authority regarding network management in
   [County Name].

Yours faithfully,
[Your Name / Organisation]
[Contact]`}</pre>
        </div>
      </section>

      <section className="mb-8 break-inside-avoid rounded-xl border border-brand-border bg-white p-6">
        <h2 className="mb-1 text-base font-bold text-brand-dark">Template 3: AI Procurement & Algorithmic Systems Audit</h2>
        <p className="mb-4 text-xs text-brand-muted">Request under Article 35, Constitution of Kenya &sect;5(1) Access to Information Act</p>
        <div className="overflow-x-auto rounded-lg border border-brand-border bg-brand-bg p-5 font-mono text-xs leading-relaxed text-brand-dark">
          <pre className="whitespace-pre-wrap">{`To: The County Executive Committee Member for ICT
[County Government Name]

RE: REQUEST FOR INFORMATION ON AUTOMATED DECISION-MAKING SYSTEMS
    IN COUNTY SERVICE DELIVERY

Under Article 35 of the Constitution of Kenya, I request disclosure
of the following information:

1. An inventory of all algorithmic or automated decision-making
   systems deployed in county service delivery, including vendor
   names, procurement dates, and contract values.

2. Any algorithmic auditing, bias testing, or fairness assessments
   conducted prior to system deployment.

3. Complaint records from county residents regarding automated
   decisions affecting access to services.

Yours faithfully,
[Your Name / Organisation]
[Contact]`}</pre>
        </div>
      </section>

      <section className="mb-8 rounded-xl border border-brand-border bg-amber-50 p-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-brand-dark">Confidence Indicators</h2>
        <p className="mt-2 text-sm leading-relaxed text-brand-stone">
          Throughout the dashboard, metrics without direct county-level census counts are derived via proxy estimates from national baselines. These are clearly labeled in the Methodology page. Treat proxy-derived figures as directional indicators rather than precise measurements. Use the FOIA templates above to obtain verified county-level data for legal or advocacy filings.
        </p>
      </section>

      <div className="text-center text-xs text-brand-muted">
        <Link href="/" className="text-brand-orange underline underline-offset-2 transition-colors hover:text-brand-accent">&larr; Return to map</Link>
      </div>
    </main>
  );
}
