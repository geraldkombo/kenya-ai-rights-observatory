import Link from "next/link";
import FoiaTracker from "@/components/FoiaTracker";

export default function AdvocacyPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-4 py-8 sm:px-8">
      <h1 className="mb-6 text-3xl font-bold text-brand-brown">Advocacy & Action Guide</h1>

      <p className="mb-8 text-sm leading-relaxed text-brand-stone">
        The DRRS gives you evidence. This page gives you the legal tools to act on it &mdash; FOIA requests under Article 35 of the Constitution, complaints to the Office of the Data Protection Commissioner (ODPC), and practical steps that work inside Kenya&apos;s county government system.
      </p>

      <section className="mb-8 rounded-xl border border-brand-border bg-white p-6">
        <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-dark">Before you start: what you need</h2>
        <div className="space-y-3 text-sm leading-relaxed text-brand-stone">
          <p>Do not walk into a county office empty-handed. Prepare these things before you leave your house:</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li><strong>A Revenue Stamp:</strong> Buy a standard revenue stamp from your nearest Postal Corporation of Kenya (Posta) branch. It usually costs between Ksh 100 and Ksh 200. Not all counties legally require it for an Access to Information (ATI) request, but having one prevents a difficult clerk from rejecting your letter for not looking "official."</li>
            <li><strong>Printed Copies:</strong> Print exactly 3 copies of your request. One original for the County Secretary, one copy for the county files, and one copy that you will take back home.</li>
            <li><strong>Introduction Letter:</strong> If you are requesting on behalf of a local group or CBO, carry a brief letter of introduction on your group&apos;s letterhead.</li>
            <li><strong>Airtime:</strong> Ensure you have enough phone credit for follow-up calls. County offices rarely call you back.</li>
            <li><strong>The County Secretary&apos;s Name:</strong> Your letter must be addressed to the specific County Secretary. To find the name, check the county website. If the site is down, call the county switchboard and ask, &ldquo;Who is the current County Secretary?&rdquo; If the switchboard is off, call the County Public Service Board.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8 rounded-xl border border-brand-border bg-white p-6">
        <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-dark">Step-by-step submission process</h2>
        <div className="space-y-3 text-sm leading-relaxed text-brand-stone">
          <p><strong>Step 1: Go to the County Registry.</strong> Do not hand your letter to a random secretary or a security guard. Ask the front desk at the main county headquarters: &ldquo;Where is the central registry?&rdquo; or &ldquo;Where is the County Secretary&apos;s registry?&rdquo; All official letters must go through the registry to get an official reference number.</p>
          <p><strong>Step 2: What to say at the desk.</strong> Keep it simple. Hand them the letters and say: &ldquo;I am submitting an Access to Information request for the County Secretary. Please stamp my copy.&rdquo;</p>
          <p><strong>Step 3: Get your copy stamped.</strong> The clerk must stamp your personal copy with a &ldquo;RECEIVED&rdquo; stamp, date it, and sign it. <strong>Do not leave without this stamped copy.</strong> This is your only legal proof that the county government received your request.</p>
          <p><strong>Step 4: What if they refuse to stamp?</strong> Sometimes clerks refuse to stamp letters they think are &ldquo;sensitive.&rdquo; If this happens:</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Politely remind them that receiving a letter is just acknowledging delivery, not approving the request.</li>
            <li>If they still refuse, leave their copies on the desk.</li>
            <li>On your own copy, write the date, the exact time, the office name, and the name of the clerk who refused to stamp it. This handwritten note is legally acceptable proof of attempted delivery.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8 rounded-xl border border-brand-border bg-white p-6">
        <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-dark">What happens after submission (the timeline)</h2>
        <div className="space-y-3 text-sm leading-relaxed text-brand-stone">
          <p>The Access to Information Act gives the government 21 days to respond to your request. Here is how you manage that time:</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li><strong>Day 1:</strong> Get your stamped copy. File it safely.</li>
            <li><strong>Day 7:</strong> Call the registry or the County Secretary&apos;s office. Say: &ldquo;I submitted an Access to Information request on [Date]. The reference is [Your Name/Org]. I am calling to check which officer is handling it.&rdquo;</li>
            <li><strong>Day 15:</strong> Send a polite reminder letter. Attach a photocopy of your original stamped request.</li>
            <li><strong>Day 22 (Deadline Missed):</strong> The county is now legally in default. Stop calling them.</li>
            <li><strong>Day 30 (Escalation):</strong> File a formal complaint with the Commission on Administrative Justice (CAJ), also known as the Ombudsman. It is completely free. Call their toll-free line at <strong>0800 221 349</strong> or email <strong>complain@ombudsman.go.ke</strong>. Attach a photo of your stamped letter. You can also visit their headquarters in Nairobi (West End Towers, Waiyaki Way) or regional offices in Mombasa, Kisumu, Eldoret, Isiolo, Garissa, and Nyahururu. You can also report at the CAJ desk inside major Huduma Centres.</li>
          </ul>
        </div>
      </section>

      <FoiaTracker />

      <section id="template-1" className="mb-8 break-inside-avoid rounded-xl border border-brand-border bg-white p-6">
        <h2 className="mb-1 text-base font-bold text-brand-dark">Template 1: County ICT Contracts & Digital Service Delivery</h2>
        <p className="mb-4 text-xs text-brand-muted">Request under Article 35, Constitution of Kenya &sect;4 Access to Information Act (2016) &mdash; Target: County Secretary</p>
        <p className="mb-3 text-xs italic text-brand-stone">Most county ICT spending goes through IFMIS. This request asks for records that are legally required to be public but rarely shared proactively.</p>
        <div className="overflow-x-auto rounded-lg border border-brand-border bg-brand-bg p-5 font-mono text-xs leading-relaxed text-brand-dark">
          <pre className="whitespace-pre-wrap">{`To: The County Secretary
[County Government Name]
P.O. Box [xxxxx], [Town]

Copy: The County Attorney
Copy: The Director, ICT

RE: REQUEST FOR INFORMATION ON ICT CONTRACTS AND DIGITAL SERVICE
    DELIVERY SYSTEMS IN [COUNTY NAME]

Under Article 35 of the Constitution of Kenya and Section 4 of the
Access to Information Act (2016), I request the following records:

1. A register of all ICT contracts awarded by the county government
   since [year], including vendor names, contract values, and
   procurement method (open tender / direct procurement / restricted
   tendering).

2. The county's Data Protection Impact Assessment (DPIA) register,
   if one exists, as required under Section 31 of the Data Protection
   Act 2019 for any processing that presents high risk to data
   subjects.

3. The name and contact details of the county's designated Data
   Protection Officer, if appointed as required by Section 18(2) of
   the DPA.

4. Any inventory of CCTV cameras, biometric enrollment systems, or
   digital identification systems operated by the county government.

Please provide these records within 21 days as prescribed by law.
If the county does not hold some of these records, please confirm
that in writing.

Yours faithfully,
[Your Name / Organisation]
[Phone number for follow-up]
[Email]`}</pre>
        </div>
      </section>

      <section id="template-2" className="mb-8 break-inside-avoid rounded-xl border border-brand-border bg-white p-6">
        <h2 className="mb-1 text-base font-bold text-brand-dark">Template 2: Internet Shutdown & Network Disruptions</h2>
        <p className="mb-4 text-xs text-brand-muted">Request under Article 35, Constitution of Kenya &mdash; Target: County Commissioner / Communications Authority of Kenya</p>
        <p className="mb-3 text-xs italic text-brand-stone">Internet shutdowns in Kenya are ordered at the national level (National Security Council) but enforced locally. This request targets both the national and county chain of command. CC the Kenya National Commission on Human Rights (KNCHR).</p>
        <div className="overflow-x-auto rounded-lg border border-brand-border bg-brand-bg p-5 font-mono text-xs leading-relaxed text-brand-dark">
          <pre className="whitespace-pre-wrap">{`To: The County Commissioner
[County Name]
Office of the President

Copy: The Director General
      Communications Authority of Kenya
      P.O. Box 14448-00800, Nairobi

Copy: Kenya National Commission on Human Rights
      P.O. Box 74359-00200, Nairobi

RE: REQUEST FOR INFORMATION ON INTERNET DISRUPTIONS IN [COUNTY NAME]

Under Article 35 of the Constitution of Kenya, I request the
following records regarding internet disruptions documented in
[County Name] during the period June 2024 to June 2026:

1. Copies of any directives from the National Security Council or
   the Interior Ministry directing telecommunications providers to
   suspend or throttle internet services in [County Name] or the
   surrounding region.

2. Records of any requests made by the County Security Committee
   (chaired by the County Commissioner) to the National Government
   regarding network management during periods of civil unrest in
   the county.

3. Information on any compensation or remedy provided to residents
   or businesses for prolonged loss of connectivity.

Yours faithfully,
[Your Name / Organisation]
[Phone number]
[Email]`}</pre>
        </div>
      </section>

      <section id="template-3" className="mb-8 break-inside-avoid rounded-xl border border-brand-border bg-white p-6">
        <h2 className="mb-1 text-base font-bold text-brand-dark">Template 3: CCTV & Public Surveillance Contracts</h2>
        <p className="mb-4 text-xs text-brand-muted">Request under Article 35, Constitution of Kenya &sect;5(1) Access to Information Act &mdash; Target: County Secretary / CECM Security</p>
        <p className="mb-3 text-xs italic text-brand-stone">County governments spend millions on CCTV systems through the County Security budget. These contracts are rarely disclosed. Use this template to find out what your county is buying and from whom.</p>
        <div className="overflow-x-auto rounded-lg border border-brand-border bg-brand-bg p-5 font-mono text-xs leading-relaxed text-brand-dark">
          <pre className="whitespace-pre-wrap">{`To: The County Secretary
[County Government Name]

Copy: The County Executive Committee Member for Security
Copy: The Director, Supply Chain Management

RE: REQUEST FOR INFORMATION ON CCTV AND SURVEILLANCE
    INFRASTRUCTURE IN [COUNTY NAME]

Under Article 35 of the Constitution of Kenya, I request disclosure
of the following information:

1. A list of all CCTV cameras owned or operated by the county
   government, including locations, installation dates, and annual
   maintenance costs.

2. Procurement documents (tender notices, evaluation reports, and
   signed contracts) for any surveillance technology contracts
   awarded since [year], including the Nairobi Metropolitan Services
   (NMS) handover if applicable.

3. Any data-sharing agreements between the county government and
   national security agencies regarding access to CCTV footage.

4. The county's policy or by-laws governing CCTV surveillance,
   data retention periods, and public notification of surveillance
   zones.

Yours faithfully,
[Your Name / Organisation]
[Phone number]
[Email]`}</pre>
        </div>
      </section>

      <section id="template-4" className="mb-8 break-inside-avoid rounded-xl border border-border bg-white p-6">
        <h2 className="mb-1 text-base font-bold text-brand-dark">Template 4: ODPC Complaint &mdash; County Data Controller</h2>
        <p className="mb-4 text-xs text-brand-muted">Complaint under Section 34, Data Protection Act 2019 &mdash; File via: <a href="https://www.odpc.go.ke/complaints/" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-brand-orange">odpc.go.ke/complaints</a></p>
        <p className="mb-3 text-xs italic text-brand-stone">The ODPC is increasingly active. In 2024, the office issued fines and enforcement notices against several data controllers. A complaint against a county government carries weight because of the public interest angle. Submit online or deliver a physical copy to ODPC headquarters, Nairobi.</p>
        <div className="overflow-x-auto rounded-lg border border-brand-border bg-brand-bg p-5 font-mono text-xs leading-relaxed text-brand-dark">
          <pre className="whitespace-pre-wrap">{`To: Office of the Data Protection Commissioner (ODPC)
P.O. Box 1041-00606, Nairobi
complaints@odpc.go.ke

RE: COMPLAINT UNDER SECTION 34 OF THE DATA PROTECTION ACT 2019
    AGAINST THE COUNTY GOVERNMENT OF [NAME]

I, [Your Full Name / Organisation], lodge the following complaint:

1. The County Government of [Name] is a data controller as defined
   under Section 3 of the DPA, processing personal data of county
   residents through CCTV, biometric enrollment, health databases,
   and/or e-government platforms.

2. To the best of my knowledge, the County Government has NOT
   registered as a data controller with the ODPC (verify at
   https://www.odpc.go.ke/register/), in violation of Section 18
   of the DPA and the Data Protection (General) Regulations 2021.

3. On [date], I submitted a formal FOIA request under Article 35
   regarding these systems as detailed in the attached documents.
   The county [did not respond / denied the request / provided
   incomplete information].

4. The County Government has not appointed a Data Protection
   Officer as required by Section 18(2) of the DPA, depriving
   residents of a statutory point of contact for data rights.

RELIEF SOUGHT:
- An investigation into the County Government's data processing
  activities
- An enforcement notice compelling registration as a data controller
  and appointment of a Data Protection Officer
- A suspension order for any processing found to be unlawful

Supporting documents attached:
\uf0b7 FOIA request with stamped proof of delivery
\uf0b7 Any response received (or evidence of non-response)
\uf0b7 Relevant sections of the DRRS county brief

Yours faithfully,
[Your Name / Organisation]
[Phone number]
[Email]
[Date]`}</pre>
        </div>
      </section>

      <section className="mb-8 rounded-xl border border-brand-border bg-amber-50 p-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-brand-dark">Verified contacts for key counties</h2>
        <div className="mt-4 space-y-4 text-sm text-brand-stone">
          <div>
            <p className="font-bold text-brand-dark">Mombasa County</p>
            <p>County Secretary: CS Jeizan Faruk</p>
            <p>Email: countysec@mombasa.go.ke / info@mombasa.go.ke</p>
            <p>Phone: Call <strong>1599</strong> (Mombasa County Call Centre)</p>
            <p>Mombasa has a dedicated Access to Information Officer &mdash; email m.bates@mombasa.go.ke.</p>
          </div>
          <div>
            <p className="font-bold text-brand-dark">Kisumu County</p>
            <p>County Secretary: CPA/CS Hesbon Owuor Hongo</p>
            <p>Email: info@kisumu.go.ke</p>
            <p>Phone: <strong>057 202 5366</strong></p>
            <p>Physical: Cabinet Affairs Office, City Hall Building.</p>
          </div>
          <div>
            <p className="font-bold text-brand-dark">Nakuru County</p>
            <p>County Secretary: Samuel Mwaura &mdash; mwaura.samuel@nakuru.go.ke</p>
            <p>Deputy CS: Newton Mwaura Kamau &mdash; mwaura.newton@nakuru.go.ke</p>
          </div>
          <div>
            <p className="font-bold text-brand-dark">Machakos County</p>
            <p>County Secretary: Dr. Muya Ndambuki</p>
            <p>Website: machakos.go.ke</p>
          </div>
          <div>
            <p className="font-bold text-brand-dark">Nairobi County</p>
            <p>Address your letter to &ldquo;The County Secretary, Nairobi City County Government.&rdquo;</p>
            <p>Physical: City Hall, City Square. Take your letter to the main registry at City Hall.</p>
            <p>Website: nairobi.go.ke</p>
          </div>
        </div>
      </section>

      <section className="mb-8 rounded-xl border border-brand-border bg-white p-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-brand-dark">Quick reference: who to call</h2>
        <div className="mt-2 space-y-2 text-sm text-brand-stone">
          <p><strong>County Secretary</strong> &mdash; chief accounting officer, legally responsible for FOIA compliance. Find their name on the county government website or call the county switchboard.</p>
          <p><strong>County Attorney</strong> &mdash; handles legal affairs. Copy them on every FOIA request.</p>
          <p><strong>ODPC</strong> &mdash; complaints@odpc.go.ke / +254-20-277-9000. Physical office: Westcom Point, Mahiga Mairu Avenue, Nairobi.</p>
          <p><strong>CAJ (Commission on Administrative Justice)</strong> &mdash; handles FOIA appeal if a county ignores or denies your request. Visit their offices at 2nd Floor, Briarcliffe Gardens, off Gitanga Road, Nairobi. Ask for the Access to Information desk.</p>
          <p><strong>Kenya National Commission on Human Rights (KNCHR)</strong> &mdash; takes complaints on surveillance and internet shutdowns. Head office: CVF Plaza, Lenana Road, Nairobi.</p>
        </div>
      </section>

      <div className="text-center text-xs text-brand-muted">
        <Link href="/" className="text-brand-orange underline underline-offset-2 transition-colors hover:text-brand-accent">&larr; Return to map</Link>
      </div>
    </main>
  );
}
