import { Metadata } from "next";
import { ogDefaults } from "@/data/siteMetadata";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQPageSchema } from "@/lib/jsonLd";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title: "Hire Product Engineers from India",
  description:
    "Hire product engineers who understand your industry context. Not just coders. Engineers who have shipped products in your exact domain, whether that is fintech, logistics, healthtech, or SaaS.",
  keywords: [
    "hire product engineers India",
    "product engineering team",
    "context-first engineering",
    "vibe coding developers",
    "full-stack product engineers",
    "industry-specific developers",
    "hire fintech developers",
    "hire SaaS developers India",
  ],
  openGraph: {
    ...ogDefaults("/hire/product-engineers/"),
    images: ["/images/og-default.png"],
    title: "Hire Product Engineers from India",
    description:
      "Engineers matched by industry context, not just tech stack. Fintech, logistics, healthtech, SaaS and more.",
  },
  alternates: {
    canonical: "https://wfnext.com/hire/product-engineers/",
  },
};

const industries = [
  { name: "Fintech & Banking", example: "A Java developer who has built payment rails, not just any Java developer" },
  { name: "Logistics & Supply Chain", example: "Someone who understands route optimization, warehouse APIs, and real-time tracking" },
  { name: "Healthtech & Pharma", example: "Engineers who know HIPAA, HL7, FHIR, and patient data workflows" },
  { name: "SaaS & B2B Platforms", example: "Multi-tenant architecture, billing systems, role-based access at scale" },
  { name: "E-commerce & Retail", example: "Catalog management, checkout flows, inventory sync, and recommendation engines" },
  { name: "EdTech & Content", example: "Video pipelines, LMS integrations, adaptive learning, and content delivery" },
];

const approaches = [
  {
    title: "Vibe Coding",
    description:
      "Your engineer uses Cursor, Copilot, and AI-assisted tools to move fast. They know how to prompt effectively, review what the AI generates, catch the subtle bugs, and ship production-ready code in half the time. Best for MVPs, rapid prototyping, and feature sprints where speed matters most.",
    badge: "Fast track",
  },
  {
    title: "Traditional Engineering",
    description:
      "Your engineer writes every line deliberately. Architecture-first, test-driven, thorough code review. No AI shortcuts. Best for regulated industries, complex systems, and codebases where precision and auditability matter more than speed.",
    badge: "Deep craft",
  },
  {
    title: "Hybrid",
    description:
      "AI-assisted for boilerplate and scaffolding, hand-crafted for business logic and critical paths. Most of our teams end up here. You get the speed of vibe coding where it helps and the reliability of traditional engineering where it counts.",
    badge: "Most popular",
  },
];

const whyUs = [
  {
    title: "Context-first matching",
    description:
      "We don't just match on tech stack. A Java developer who has spent 3 years building banking systems is a completely different hire than a Java developer who built IoT dashboards. Same language, different universe. SethAI considers industry context, domain knowledge, and product type when matching candidates.",
  },
  {
    title: "They ship products, not features",
    description:
      "Product engineers think about the user, not just the ticket. They ask why before writing code, push back on specs that don't make sense, and care about what happens after deploy. We screen for this mindset specifically.",
  },
  {
    title: "Your choice of engineering style",
    description:
      "You decide whether your team uses vibe coding, traditional engineering, or a mix of both. We match engineers who are comfortable with whichever approach you prefer. No judgment either way.",
  },
  {
    title: "Context compounds over time",
    description:
      "A product engineer who has been on your project for 6 months knows your users, your tech debt, your deployment quirks, and your business priorities. That context is worth more than any new hire's technical skill. We build teams that stay.",
  },
];

const process = [
  { step: "01", title: "Tell us about your product and industry", description: "Not just the tech stack. We want to know what your product does, who uses it, and what industry you are in. This is what drives our matching." },
  { step: "02", title: "SethAI matches by context", description: "We find engineers who have worked on similar products in similar industries. A logistics startup gets someone who has built logistics software, not someone who once wrote a REST API." },
  { step: "03", title: "You pick the engineering style", description: "Vibe coding, traditional, or hybrid. We match engineers who are comfortable with your preferred approach and have the skills to back it up." },
  { step: "04", title: "One-week paid trial", description: "Real work on your actual codebase. You see how they think, communicate, and ship. If it is not a fit, we rematch at no cost." },
];

const responsibilities = [
  "Shipping features end-to-end: frontend, backend, database, and deployment, without waiting on handoffs",
  "Reading the product roadmap and pushing back when specs will not serve real users",
  "Owning code from first commit to production incident response, including on-call rotations when appropriate",
  "Writing integration tests that catch regressions across the full stack, not just the layer they touched",
  "Partnering with designers on interaction details and with PMs on scope tradeoffs before scope balloons",
  "Refactoring legacy code incrementally while continuing to ship new features the business needs",
  "Designing for the industry context: compliance in healthtech, auditability in fintech, reliability in logistics",
  "Documenting architectural decisions so the next engineer inherits context rather than starting from zero",
  "Shipping with AI-assisted tools (Cursor, Copilot) when appropriate and traditional craft when it is not",
  "Operating as a teammate, not a contractor: showing up to standups, challenging bad ideas respectfully, caring about outcomes",
];

const faqItems: FAQ[] = [
  {
    question: "What is a product engineer and how is it different from a full stack engineer?",
    answer:
      "Full stack engineers are matched on technical stack: you need React and Node.js, they can write React and Node.js. Product engineers are matched on product and industry context: you are building a fintech platform, they have built fintech platforms. The overlap is real but the mental model differs. Product engineers ship faster because they already understand the problem space, not just the language.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How much does it cost to hire a product engineer in India?",
    answer:
      "Mid-level product engineers in India typically cost between 4,000 and 7,000 USD per month for full-time engagement. Senior engineers with deep industry expertise (fintech, healthtech, logistics) range from 7,000 to 11,000 USD per month. Pricing at Workforce Next includes an engineering manager, context docs, and PTO backup coverage.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What industries do your product engineers specialize in?",
    answer:
      "We have engineers with shipped experience in fintech (payments, lending, neobanks), healthtech (EHR, telemedicine, clinical workflows), logistics and supply chain (route optimization, warehouse, fleet), SaaS and B2B platforms (multi-tenant, billing, permissioning), e-commerce and retail (catalog, checkout, inventory), and edtech (LMS, adaptive learning, content delivery). We match you with engineers whose past products align with yours.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can I choose between vibe coding and traditional engineering?",
    answer:
      "Yes. We support three modes. Vibe coding uses Cursor, Copilot, and AI-assisted tools for speed, best for MVPs and rapid prototyping. Traditional engineering is architecture-first, deliberate, test-driven, best for regulated industries and complex systems. Hybrid mixes AI-assisted scaffolding with hand-crafted business logic, which is where most of our teams land. You pick the approach and we match engineers who fit it.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How is industry context actually verified during screening?",
    answer:
      "SethAI cross-references candidates' past projects, roles, and descriptions against industry context signals. We also do human verification during the interview: asking candidates to walk through a feature they shipped in your industry, explain domain-specific tradeoffs, and critique an industry-specific architectural decision. Candidates who cannot discuss your domain fluently do not reach your shortlist.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How long does it take to hire a product engineer?",
    answer:
      "From intake call to trial week start, our median is 7 to 10 business days. SethAI returns a shortlist within 48 hours. Industry-specific matches may take 1 to 2 extra days depending on how rare the domain is. For common industries (SaaS, e-commerce, fintech), we often match within 48 hours.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function ProductEngineersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire Product Engineers from India",
    "Product engineers matched by industry context and domain experience. Vibe coding or traditional engineering, your choice.",
    "https://wfnext.com/hire/product-engineers/"
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://wfnext.com" },
    { name: "Hire Developers", url: "https://wfnext.com/hire/ai-developers/" },
    { name: "Product Engineers", url: "https://wfnext.com/hire/product-engineers/" },
  ]);

  const faqSchema = generateFAQPageSchema(faqItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
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
          <Badge variant="primary" className="mb-4">
            HIRE PRODUCT ENGINEERS
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Engineers who understand your product.
            <br />
            <span className="text-primary-500">Not just your tech stack.</span>
          </h1>
          <p className="mt-5 text-lg text-dark-600 dark:text-dark-200 max-w-2xl">
            We don&apos;t put a Java developer on a Java project and call it a match.
            We find someone who has built products like yours, in your industry,
            and knows the problems your users actually face.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Hire product engineers
            </Button>
            <Button href="/how-we-work" variant="outline" size="lg">
              See how it works
            </Button>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            A Java developer is not just a Java developer
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none text-dark-700 dark:text-dark-200">
            <p>
              Most staffing companies match on technology. You need Java, they send
              you someone who writes Java. But that misses the point entirely.
            </p>
            <p>
              A developer who spent 3 years building payment processing for a neobank
              thinks differently than someone who spent 3 years building fleet tracking
              for a logistics company. They both write Java. But one understands
              transaction atomicity, PCI compliance, and ledger reconciliation. The
              other understands geofencing, real-time event streams, and driver
              allocation algorithms.
            </p>
            <p>
              <strong>Same language. Completely different context.</strong> And context
              is what makes a product engineer productive from week one instead of
              month three.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Context */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-500/15 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-4">
              Context-First Matching
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              We match by industry, not just stack
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="bg-white dark:bg-dark-800/80 p-6 rounded-xl border border-dark-50 dark:border-dark-700/50 shadow-card"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50 mb-2">
                  {ind.name}
                </h3>
                <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed">
                  {ind.example}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            What a product engineer actually does
          </h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">
            The job description matters more than the job title. When you hire
            a product engineer through Workforce Next, here is the work they
            take ownership of:
          </p>
          <ul className="space-y-3">
            {responsibilities.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-dark-600 dark:text-dark-200 leading-relaxed"
              >
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-500 flex-shrink-0"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Engineering Style */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-500/15 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-4">
              Your Choice
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              Vibe coding, traditional, or both
            </h2>
            <p className="mt-4 text-dark-600 dark:text-dark-200 max-w-2xl mx-auto">
              Your product engineers can work however you prefer. Fast AI-assisted
              development, deliberate hand-crafted code, or a mix of both.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {approaches.map((approach) => (
              <div
                key={approach.title}
                className="relative bg-white dark:bg-dark-800 p-6 sm:p-8 rounded-xl border border-dark-50 dark:border-dark-700 shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
              >
                <span className="inline-block px-3 py-1 text-xs font-bold bg-primary-100 dark:bg-primary-500/15 text-primary-600 dark:text-primary-400 rounded-full mb-4">
                  {approach.badge}
                </span>
                <h3 className="text-xl font-bold text-dark-900 dark:text-dark-50">
                  {approach.title}
                </h3>
                <p className="mt-3 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              Why hire product engineers from us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-dark-800/80 p-6 sm:p-7 rounded-xl border border-dark-50 dark:border-dark-700/50 shadow-card"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
              How it works
            </h2>
          </div>

          <div className="space-y-6">
            {process.map((step) => (
              <div
                key={step.step}
                className="flex gap-5 sm:gap-6 p-5 sm:p-6 rounded-xl border border-dark-50 dark:border-dark-700 bg-white dark:bg-dark-800"
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-primary-200 dark:text-primary-500/20 shrink-0">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-bold text-dark-900 dark:text-dark-50">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">
            Common questions about hiring product engineers
          </h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div
                key={faq.question}
                className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700"
              >
                <h3 className="font-bold text-dark-900 dark:text-dark-50">
                  {faq.question}
                </h3>
                <p className="mt-3 text-dark-600 dark:text-dark-200 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-900 to-dark-800 py-16 sm:py-20 md:py-28">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="container-custom relative text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark-100">
            Tell us what you are building.
            <br />
            We will find someone who has built it before.
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-dark-300 max-w-xl mx-auto">
            Context-matched product engineers. One-week paid trial. No recruitment fees.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Hire product engineers
            </Button>
            <Button href="/for/founders" variant="ghost" size="lg" className="text-dark-300 hover:text-white hover:bg-white/10">
              Building an MVP?
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
