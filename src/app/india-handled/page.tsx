import { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateBreadcrumbSchema,
  generateFAQPageSchema,
} from "@/lib/jsonLd";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title: "India-Handled. Managed Staff Augmentation With Payroll, Compliance, and Benefits Done For You",
  description:
    "DIY hiring through SethAI. The engineer is our employee. We run their payroll, PF, gratuity, equipment, and benefits in India. You get a dedicated engineer through one B2B services contract. No entity, no EOR, no payroll burden on your side.",
  keywords: [
    "managed staff augmentation India",
    "dedicated developers India staff aug",
    "hire developers in India",
    "managed offshore developers India",
    "GST invoicing developer staffing",
    "Indian developer staff augmentation",
    "B2B developer staffing India",
    "no India entity needed developers",
    "alternative to EOR India",
  ],
  openGraph: {
    images: ["/images/og-default.png"],
    title: "India-Handled. Managed Staff Augmentation, Operations Done For You",
    description:
      "Pick the engineer through SethAI. They're our employee. We handle their payroll, compliance, benefits, and equipment. You sign one B2B services contract.",
  },
  alternates: {
    canonical: "https://workforcenext.in/india-handled/",
  },
};

const youHandle = [
  {
    title: "Pick the engineer",
    body: "Use SethAI in DIY mode to filter by stack, seniority, and timezone. Interview the shortlist directly. You choose. We don't gate the decision.",
  },
  {
    title: "Set the scope and the bar",
    body: "Tickets, sprint goals, code review standards, OKRs. Day-to-day direction is yours. We're not in the Slack, we're not in the standup, we're not in your decisions.",
  },
  {
    title: "Run the engineer like a member of your team",
    body: "Direct comms, your tools, your processes. The engineer takes ownership the same way an in-house hire would. You manage the work, not the wrapper around it.",
  },
];

const weHandle = [
  {
    category: "Employment & payroll",
    items: [
      "Engineer is a full-time WorkforceNext employee under Indian law (not your employee)",
      "Monthly payroll processing in INR, on time, every month",
      "TDS deduction and quarterly filing with Income Tax Department",
      "Form 16 issued to the engineer annually",
      "Salary revisions, bonus payouts, retention adjustments",
    ],
  },
  {
    category: "Statutory compliance",
    items: [
      "Provident Fund (PF) contributions, employer and employee shares",
      "Employee State Insurance (ESI) where applicable",
      "Professional Tax in the relevant Indian state",
      "Gratuity accrual under the Payment of Gratuity Act",
      "Labour Welfare Fund contributions",
      "Statutory and earned leave tracking",
    ],
  },
  {
    category: "Benefits & retention",
    items: [
      "Group health insurance (engineer + dependents)",
      "Term life and personal accident cover",
      "Annual leave, casual leave, sick leave per Indian norms",
      "Festival bonus, retention bonus structures we've found work",
      "Career advisory check-ins to catch flight risk early",
    ],
  },
  {
    category: "Equipment & workspace",
    items: [
      "Laptop, monitor, keyboard, headset, provisioned and shipped on day one",
      "MDM-managed device with security baseline (FileVault, password policy, backups)",
      "Optional co-working desk in the engineer's city if they prefer it to home",
      "Equipment refresh cycle and offboarding return process",
    ],
  },
  {
    category: "Tax, invoicing & FX",
    items: [
      "GST-compliant monthly invoice raised to your entity in your local currency",
      "FIRC handling on the India side, so no FEMA/RBI exposure on yours",
      "USD, GBP, CAD invoicing supported. SWIFT or Wise",
      "Annual TRC (Tax Residency Certificate) and Form 10F for double-tax treaty benefit",
    ],
  },
  {
    category: "Contracts, IP & security",
    items: [
      "Master Services Agreement plus per-engagement Statement of Work",
      "Full IP and work-product assignment to your entity (no shared rights)",
      "NDA signed by every engineer, mirrored to your terms",
      "Background verification (employment, education, criminal, address)",
      "DPDP Act compliance for any personal data we hold on your behalf",
    ],
  },
  {
    category: "HR operations",
    items: [
      "Onboarding (offer letter, joining kit, day-one access)",
      "Performance review cadence, scaled to your preferences",
      "PIP and exit handling under Indian labour law if it ever comes to that",
      "Reference letters and Form 16 on exit",
      "Replacement at no cost if an engineer leaves in the first 90 days",
    ],
  },
];

const youDoVsWeDo = [
  { area: "Source the engineer", you: "Pick from SethAI shortlist", us: "Source, screen, shortlist" },
  { area: "Interview & decide", you: "Yes, direct interviews", us: "Coordinate logistics" },
  { area: "Day-to-day direction", you: "Tickets, standups, code review", us: "Stay out of it" },
  { area: "Salary & raises", you: "Approve adjustments", us: "Benchmark, run payroll" },
  { area: "Indian payroll & TDS", you: "Nothing", us: "All of it" },
  { area: "PF, ESI, gratuity", you: "Nothing", us: "All of it" },
  { area: "Health insurance & leave", you: "Nothing", us: "All of it" },
  { area: "Equipment & MDM", you: "Nothing", us: "All of it" },
  { area: "GST invoicing & FX", you: "Pay one USD/GBP/CAD invoice", us: "Raise compliant invoice in INR + your currency" },
  { area: "IP transfer & NDA", you: "Sign once at MSA", us: "Per-engineer, mirrored" },
  { area: "Performance reviews", you: "Provide input", us: "Run the cadence" },
  { area: "Retention & flight-risk", you: "Flag concerns", us: "Monthly advisory + intervention" },
  { area: "Exit & replacement", you: "Notify", us: "Handle exit, replace at no cost" },
];

const insteadOf = [
  {
    title: "Setting up your own India entity",
    pain: "₹15–40 lakh in legal, tax, and HR setup. 4–6 months. Then ongoing compliance overhead, an India-based HR head, and FEMA exposure on your books.",
    us: "You don't need an entity. The engineer is our employee, not yours. You sign one B2B services contract with our Indian entity. First engineer onboarded inside two weeks.",
  },
  {
    title: "Pairing an EOR (Deel, Remote, Multiplier) with a separate sourcing firm",
    pain: "EORs are a payroll wrapper that lets you employ someone in India directly. You still have to source, screen, and retain talent yourself, and you carry an indirect employer relationship that adds compliance overhead in some structures.",
    us: "We're not an EOR. We're managed staff aug. The engineer is our employee, you're our customer. You source through SethAI, sign one services contract, and the entire employment relationship sits on us.",
  },
  {
    title: "Traditional Indian staff aug (TCS, Infosys, tier-2)",
    pain: "Pyramid staffing, T&M billing, account-manager buffer, subcontracting risk. You don't pick the engineer. You pay rack rate plus margin on a body shop.",
    us: (
      <>
        Same legal model (staff aug), done differently. You pick the engineer
        through SethAI. No pyramid, no buffer, no subcontracting. (See{" "}
        <Link
          href="/not-another-body-shop/"
          className="text-primary-500 dark:text-primary-400 underline hover:no-underline font-semibold"
        >
          /not-another-body-shop/
        </Link>{" "}
        for the full breakdown.)
      </>
    ),
  },
];

const faqs: FAQ[] = [
  {
    question: "Are you an EOR or a staff augmentation company?",
    answer:
      "EOR solves the legal employment problem. Staff augmentation solves the talent problem. We solve both, plus we manage retention and performance, so you get one engineer, one contract, one monthly invoice, and zero compliance headaches.",
    category: "hiring",
    categoryLabel: "Operations",
  },
  {
    question: "What does the engineer's compensation actually cost us?",
    answer:
      "You pay one all-in monthly fee in your currency. That fee covers the engineer's gross salary, employer-side PF, gratuity accrual, ESI/insurance, equipment amortisation, payroll/compliance ops, and our margin. You don't get separate line items for PF or insurance. It's one number, predictable month to month, indexed to the role and seniority.",
    category: "hiring",
    categoryLabel: "Operations",
  },
  {
    question: "Who owns the IP the engineer produces?",
    answer:
      "You do, fully. The MSA includes a full IP and work-product assignment from WorkforceNext (and from each engineer individually) to your entity. There's no shared ownership, no licence-back, and no India-resident IP retention. The assignment holds under the Indian Copyright Act and is enforceable in your jurisdiction.",
    category: "hiring",
    categoryLabel: "Operations",
  },
  {
    question: "What happens at notice / termination?",
    answer:
      "You give 30 days notice on the services contract (no 12-month lock-in). The engineer remains our employee. We serve them notice per Indian labour law, pay any statutory dues (gratuity if applicable, leave encashment, final settlement), and handle the exit. You don't carry any of that. If you want a replacement instead of an exit, we shortlist within 48 hours and the swap is at no extra fee in the first 90 days.",
    category: "hiring",
    categoryLabel: "Operations",
  },
  {
    question: "How do GST and our invoice work?",
    answer:
      "We raise a GST-compliant B2B services invoice from our Indian entity to your foreign entity. Because the service is exported, it qualifies as a zero-rated supply under Indian GST, so no GST is added to the amount you pay. We handle the LUT (Letter of Undertaking) filing on our side. You receive the invoice in USD, GBP, or CAD and pay by SWIFT or Wise. We handle the FIRC (Foreign Inward Remittance Certificate) on the India side.",
    category: "hiring",
    categoryLabel: "Operations",
  },
  {
    question: "What benefits does the engineer actually get?",
    answer:
      "Group health insurance for the engineer plus spouse and up to two children, term life and personal accident cover, statutory leave (12 casual + 12 sick + earned leave that accrues), full PF and gratuity, festival and retention bonuses, equipment, and access to monthly engineering advisory. The benefit package is one of the reasons our 12-month retention is well above industry. Engineers don't leave for marginal pay bumps when the package is good.",
    category: "hiring",
    categoryLabel: "Operations",
  },
  {
    question: "Can we run a background check on the engineer?",
    answer:
      "We run one before placement: employment verification (last three employers), education verification (degree authentication), criminal record check, and address verification. We share the report with you. If you want an additional check from your preferred vendor (HireRight, Sterling, Cisive), we'll cooperate fully.",
    category: "hiring",
    categoryLabel: "Operations",
  },
  {
    question: "What about data privacy and DPDP Act / GDPR?",
    answer:
      "The engineer handles your data subject to your tools, your access controls, and your data processing terms, same as any in-house hire. WorkforceNext as a vendor only holds engineer-side personal data (their PAN, Aadhaar, salary records) and we comply with India's DPDP Act on that. We sign a DPA with you on request and we can mirror your GDPR requirements where they extend extraterritorially.",
    category: "hiring",
    categoryLabel: "Operations",
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://workforcenext.in" },
  {
    name: "India Handled",
    url: "https://workforcenext.in/india-handled/",
  },
]);

const faqSchema = generateFAQPageSchema(faqs);

export default function IndiaHandledPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="white" className="mb-4">
            THE OPERATIONAL MODEL
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            DIY hiring through SethAI. India-handled operations.
          </h1>
          <p className="mt-5 text-lg text-dark-400 dark:text-dark-300 max-w-2xl leading-relaxed">
            You pick the engineer. They&apos;re our full-time employee. We run
            their payroll, PF, gratuity, equipment, health insurance, and every
            line of Indian labour law. You sign one B2B services contract and
            pay one foreign-currency invoice. No India entity, no EOR, no
            payroll burden on your side.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Book a 15-min call
            </Button>
            <Button href="#what-we-handle" variant="outline" size="lg">
              See what we handle
            </Button>
          </div>
          <p className="mt-6 text-sm text-dark-400 dark:text-dark-400">
            Managed staff augmentation done right. One vendor for talent and
            operations. Faster than an entity, simpler than EOR-plus-sourcing.
          </p>
        </div>
      </section>

      {/* The split */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-4">
            The split, in one sentence
          </h2>
          <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-10 max-w-3xl">
            You manage the work. We manage everything around it. The engineer
            shows up to your standup like an in-house hire, because
            operationally, on the India side, they are one.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-xl border-2 border-primary-500 bg-primary-50/40 dark:bg-dark-800">
              <p className="text-xs font-bold tracking-wide text-primary-500 dark:text-primary-400 uppercase mb-3">
                You handle
              </p>
              <ul className="space-y-4">
                {youHandle.map((item) => (
                  <li key={item.title}>
                    <p className="font-extrabold text-dark-900 dark:text-dark-50">
                      {item.title}
                    </p>
                    <p className="text-sm mt-1 text-dark-400 dark:text-dark-300 leading-relaxed">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl border-2 border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-900">
              <p className="text-xs font-bold tracking-wide text-dark-400 dark:text-dark-400 uppercase mb-3">
                We handle (everything else)
              </p>
              <p className="text-sm text-dark-400 dark:text-dark-300 leading-relaxed mb-3">
                Seven categories of operational and legal work that would
                otherwise sit on your CFO, your General Counsel, and an
                India-based HR head you&apos;d have to hire.
              </p>
              <p className="text-sm text-dark-900 dark:text-dark-50 font-semibold">
                Scroll for the line-by-line list.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we handle, in detail */}
      <section
        id="what-we-handle"
        className="section-padding bg-primary-50 dark:bg-dark-800"
      >
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-4">
            What we handle, line by line
          </h2>
          <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-10 max-w-3xl">
            Every category below is something a US, UK, or Canadian buyer would
            otherwise have to set up themselves through a local entity, an
            EOR, an India HR consultant, and a tax advisor. We collapse it into
            one vendor and one monthly invoice.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {weHandle.map((bucket) => (
              <div
                key={bucket.category}
                className="p-6 bg-white dark:bg-dark-900 rounded-xl border border-dark-50 dark:border-dark-700"
              >
                <h3 className="font-extrabold text-dark-900 dark:text-dark-50 mb-3">
                  {bucket.category}
                </h3>
                <ul className="space-y-2">
                  {bucket.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-dark-400 dark:text-dark-300 leading-relaxed flex gap-2"
                    >
                      <span className="text-primary-500 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibility table */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-4">
            Who does what: the responsibility table
          </h2>
          <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-10 max-w-3xl">
            Print this and give it to your CFO. It&apos;s the single page that
            answers most procurement questions.
          </p>
          <div className="bg-white dark:bg-dark-900 rounded-xl border border-dark-50 dark:border-dark-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-dark-50/40 dark:bg-dark-800">
                  <tr>
                    <th className="text-left p-4 font-extrabold text-dark-900 dark:text-dark-50">
                      Area
                    </th>
                    <th className="text-left p-4 font-extrabold text-dark-900 dark:text-dark-50">
                      You
                    </th>
                    <th className="text-left p-4 font-extrabold text-primary-500 dark:text-primary-400">
                      WorkforceNext
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {youDoVsWeDo.map((row, idx) => (
                    <tr
                      key={idx}
                      className="border-t border-dark-50 dark:border-dark-700"
                    >
                      <td className="p-4 font-semibold text-dark-900 dark:text-dark-50">
                        {row.area}
                      </td>
                      <td className="p-4 text-dark-400 dark:text-dark-300">
                        {row.you}
                      </td>
                      <td className="p-4 text-primary-500 dark:text-primary-400 font-semibold">
                        {row.us}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Instead of */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-4">
            Instead of three different vendors
          </h2>
          <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-10 max-w-3xl">
            Most teams hire in India one of three ways. Each comes with a
            specific tax. Here&apos;s how the math compares.
          </p>
          <div className="space-y-5">
            {insteadOf.map((item) => (
              <div
                key={item.title}
                className="grid md:grid-cols-2 gap-0 rounded-xl border border-dark-50 dark:border-dark-700 overflow-hidden bg-white dark:bg-dark-900"
              >
                <div className="p-6 border-b md:border-b-0 md:border-r border-dark-50 dark:border-dark-700">
                  <p className="text-xs font-bold tracking-wide text-dark-400 dark:text-dark-400 uppercase mb-2">
                    Instead of
                  </p>
                  <h3 className="font-extrabold text-dark-900 dark:text-dark-50 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                    {item.pain}
                  </p>
                </div>
                <div className="p-6 bg-primary-50/40 dark:bg-dark-800">
                  <p className="text-xs font-bold tracking-wide text-primary-500 dark:text-primary-400 uppercase mb-2">
                    With us
                  </p>
                  <p className="text-sm text-dark-900 dark:text-dark-50 leading-relaxed">
                    {item.us}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-10">
            Procurement and CFO questions, answered
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-6 rounded-xl border border-dark-50 dark:border-dark-700"
              >
                <h3 className="font-extrabold text-dark-900 dark:text-dark-50">
                  {faq.question}
                </h3>
                <p className="mt-3 text-dark-400 dark:text-dark-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800">
        <div className="container-custom text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50">
            Pick the engineer. Skip the entity.
          </h2>
          <p className="mt-4 text-dark-400 dark:text-dark-300 leading-relaxed">
            15-min call. We walk you through the MSA, the invoice format, the
            statutory inclusions, and a sample first-month onboarding plan. You
            leave with the documents whether you hire us or not.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Book the 15-min call
            </Button>
            <Button href="/how-we-work" variant="outline" size="lg">
              See the full process
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
