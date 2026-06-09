import Link from "next/link";
import FoiaTracker from "@/components/FoiaTracker";

export default function AdvocacyPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-4 py-8 sm:px-8">
      <h1 className="mb-6 text-3xl font-bold text-brand-brown">Advocacy & Action Guide</h1>

      <p className="mb-8 text-sm leading-relaxed text-brand-stone">
        Data without action is purely academic. The DRRS is designed to arm civil society, policy researchers, and advocates with the empirical evidence needed to challenge digital rights violations. Below are templates for initiating Access to Information (FOIA) requests under Article 35 of the Constitution of Kenya, and Data Protection Act complaints to the ODPC.
      </p>

      <section className="mb-8 rounded-xl border border-brand-border bg-white p-6">
        <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-dark">Escalation Pathway</h2>
        <div className="grid gap-3 text-sm leading-relaxed text-brand-stone md:grid-cols-4">
          <div className="rounded-lg border border-brand-border bg-brand-bg p-3 text-center">
            <div className="text-lg font-bold text-brand-brown">1</div>
            <div className="font-semibold text-brand-dark">FOIA Request</div>
            <div className="mt-1 text-xs">Article 35 / AIA 2016<br/>21-day response</div>
          </div>
          <div className="flex items-center justify-center text-lg text-brand-muted hidden md:block text-center pt-6">&rarr;</div>
          <div className="rounded-lg border border-brand-border bg-brand-bg p-3 text-center">
            <div className="text-lg font-bold text-brand-brown">2</div>
            <div className="font-semibold text-brand-dark">CAJ Appeal</div>
            <div className="mt-1 text-xs">Commission on Administrative Justice<br/>Review of refusal/ignorance</div>
          </div>
          <div className="flex items-center justify-center text-lg text-brand-muted hidden md:block text-center pt-6">&rarr;</div>
          <div className="rounded-lg border border-brand-border bg-brand-bg p-3 text-center">
            <div className="text-lg font-bold text-brand-brown">3</div>
            <div className="font-semibold text-brand-dark">ODPC Complaint</div>
            <div className="mt-1 text-xs">Section 34 DPA<br/>Enforcement notice / fine</div>
          </div>
          <div className="flex items-center justify-center text-lg text-brand-muted hidden md:block text-center pt-6">&rarr;</div>
          <div className="rounded-lg border border-brand-border bg-brand-bg p-3 text-center">
            <div className="text-lg font-bold text-brand-brown">4</div>
            <div className="font-semibold text-brand-dark">High Court</div>
            <div className="mt-1 text-xs">Constitutional petition<br/>Judicial review</div>
          </div>
        </div>
      </section>

      <FoiaTracker />

      <section id="template-1" className="mb-8 break-inside-avoid rounded-xl border border-brand-border bg-white p-6">
        <h2 className="mb-1 text-base font-bold text-brand-dark">Template 1: Biometric Data & Health System Integration</h2>
        <p className="mb-4 text-xs text-brand-muted">Request under Article 35, Constitution of Kenya &sect;4 Access to Information Act (2016) &mdash; Target: County CECM ICT</p>
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

      <section id="template-2" className="mb-8 break-inside-avoid rounded-xl border border-brand-border bg-white p-6">
        <h2 className="mb-1 text-base font-bold text-brand-dark">Template 2: Internet Shutdown & Network Throttling</h2>
        <p className="mb-4 text-xs text-brand-muted">Request under Article 35, Constitution of Kenya &mdash; Target: County Commissioner / Communications Authority</p>
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

      <section id="template-3" className="mb-8 break-inside-avoid rounded-xl border border-brand-border bg-white p-6">
        <h2 className="mb-1 text-base font-bold text-brand-dark">Template 3: AI Procurement & Algorithmic Systems Audit</h2>
        <p className="mb-4 text-xs text-brand-muted">Request under Article 35, Constitution of Kenya &sect;5(1) Access to Information Act &mdash; Target: County CECM ICT</p>
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

      <section id="template-4" className="mb-8 break-inside-avoid rounded-xl border border-brand-border bg-white p-6">
        <h2 className="mb-1 text-base font-bold text-brand-dark">Template 4: Data Controller Non-Complaint (ODPC)</h2>
        <p className="mb-4 text-xs text-brand-muted">Complaint under Section 34, Data Protection Act 2019</p>
        <div className="overflow-x-auto rounded-lg border border-brand-border bg-brand-bg p-5 font-mono text-xs leading-relaxed text-brand-dark">
          <pre className="whitespace-pre-wrap">{`To: Office of the Data Protection Commissioner (ODPC)
P.O. Box 1041-00606, Nairobi
complaints@odpc.go.ke

RE: COMPLAINT UNDER SECTION 34 OF THE DATA PROTECTION ACT 2019
    AGAINST [COUNTY GOVERNMENT NAME]

I, [Your Full Name / Organisation], lodge the following complaint:

1. The County Government of [Name] is a data controller as defined
   under Section 3 of the DPA, processing personal data of county
   residents through [describe systems: CCTV, biometric enrollment,
   health databases, e-government platform].

2. To the best of my knowledge, the County Government has NOT
   registered as a data controller with the ODPC, in violation of
   Section 18 of the DPA and the Data Protection (General) Regulations
   2021.

3. I have reasonable grounds to believe that the County Government
   deployed [AI system / surveillance system / biometric system]
   without conducting a mandatory Data Protection Impact Assessment
   (DPIA) as required under Section 31 of the DPA.

4. On [date], I submitted a formal FOIA request under Article 35
   regarding these systems. [Attach response or evidence of non-response].

RELIEF SOUGHT:
- An investigation into the County Government's data processing activities
- An enforcement notice compelling registration and compliance
- A suspension order for any processing found to be unlawful

Supporting documents attached: [FOIA request, response (if any), evidence]

Yours faithfully,
[Your Name / Organisation]
[Contact / P.O. Box]
[Date]`}</pre>
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
