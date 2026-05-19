import { Metadata } from "next";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQPageSchema,
} from "@/lib/jsonLd";
import { siteMetadata, ogDefaults } from "@/data/siteMetadata";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title: "Hire Shopify Developers from India",
  description:
    "Hire pre-vetted Shopify developers from India. Custom themes, apps, Liquid, Shopify Plus, Hydrogen / headless commerce, checkout extensibility. SethAI-screened.",
  keywords: [
    "hire Shopify developers",
    "hire Shopify developers India",
    "Shopify app developers",
    "Shopify theme developers",
    "Shopify Plus developers",
    "Hydrogen developers",
    "headless Shopify developers",
    "Shopify checkout extensibility",
    "Shopify staff augmentation",
  ],
  openGraph: {
    ...ogDefaults("/hire/shopify-developers/"),
    images: ["/images/og-default.png"],
    title: "Hire Shopify Developers from India",
    description:
      "Pre-vetted Shopify engineers for themes, apps, Shopify Plus, Hydrogen, and checkout extensibility. SethAI-screened.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/shopify-developers/`,
  },
};

const skills = [
  "Shopify Online Store 2.0",
  "Liquid",
  "Shopify CLI",
  "Hydrogen",
  "Remix",
  "Shopify Functions",
  "Checkout UI Extensions",
  "Shopify Plus",
  "GraphQL Admin API",
  "Polaris",
  "App Bridge",
  "Metaobjects",
  "B2B on Shopify",
  "Theme App Extensions",
];

const whyPoints = [
  {
    title: "Real Shopify engineers, not theme tweakers",
    description:
      "Our engineers ship custom themes from scratch, build production apps, write Shopify Functions in Rust or JS, and use Checkout UI Extensions properly. Not generic e-commerce devs with one Shopify project.",
  },
  {
    title: "Shopify Plus and B2B depth",
    description:
      "Multi-store, custom checkout flows, B2B catalogs, draft orders automation, Shopify Scripts to Functions migration, multipass SSO. Production track record at Plus-tier scale.",
  },
  {
    title: "Hydrogen and headless commerce",
    description:
      "Shopify Hydrogen on Remix for custom storefronts, Oxygen deployment, Storefront API design. We match the engineer to whether you need classic Liquid or full headless.",
  },
  {
    title: "Screened by SethAI for longevity",
    description:
      "SethAI evaluates ownership and communication. You get Shopify engineers who maintain a store responsibly, not freelancers who break checkout and disappear.",
  },
];

const responsibilities = [
  "Building custom themes from scratch using Online Store 2.0 sections, blocks, metaobjects, and theme app extensions",
  "Developing private and public Shopify apps with the embedded App Bridge UI, OAuth, and webhooks",
  "Writing Shopify Functions (Rust or JS) for discount, delivery, payment, and cart customization logic",
  "Implementing Checkout UI Extensions and Post-Purchase extensions for customized buyer flows",
  "Customizing Shopify Plus features: Scripts to Functions migration, B2B catalogs, multipass SSO, multi-store automation",
  "Building headless storefronts with Hydrogen on Remix, deployed on Oxygen, with custom CMS integrations",
  "Integrating Shopify with ERPs (NetSuite, SAP), 3PLs, ESPs (Klaviyo), and headless CMSs (Sanity, Contentful)",
  "Optimizing Core Web Vitals on Liquid themes: image optimization, JS hydration, third-party app audit",
  "Migrating from Magento, WooCommerce, or BigCommerce to Shopify with content, product, customer, and order parity",
  "Maintaining stores: theme updates, app stack audits, security review, dispute and refund automation, peak-season prep",
];

const whenToHire = [
  {
    scenario: "Launching a new Shopify store from scratch",
    recommendation: "Hire a Shopify specialist with theme and app experience",
    reason:
      "A new store needs theme architecture decisions, app stack choices, and conversion-optimized customization. A specialist will avoid the plugin sprawl that kills performance later.",
  },
  {
    scenario: "Migrating to Shopify Plus from another platform",
    recommendation: "Hire a Shopify Plus specialist with migration experience",
    reason:
      "Migrations include content modeling, product imports with metafields, customer history, order parity, SEO redirects, and post-launch validation. Generic Shopify engineers will miss steps.",
  },
  {
    scenario: "Building a custom Shopify app for your store or for the App Store",
    recommendation: "Hire a Shopify app developer",
    reason:
      "App development is a separate skill: OAuth, App Bridge, webhooks, billing API, App Store review. Most theme developers do not build production apps.",
  },
  {
    scenario: "Going headless with Hydrogen or another framework",
    recommendation: "Hire a Shopify specialist with Hydrogen and Remix depth",
    reason:
      "Headless Shopify is its own world: Storefront API design, caching strategy, preview workflows, Oxygen deployment. A Shopify generalist or React generalist alone will get this wrong.",
  },
];

const screeningSignals = [
  {
    signal: "Modern Shopify development",
    detail:
      "Online Store 2.0, sections everywhere, JSON templates, metaobjects, app embed blocks. Are they writing modern Shopify or still in Shopify 1.0 patterns? We check by reading their theme code.",
  },
  {
    signal: "Liquid and theme architecture",
    detail:
      "Section schema design, block patterns, theme settings, snippet reuse, performance-aware Liquid (avoiding N+1 in product lists). Building a real section in 30 minutes during screening.",
  },
  {
    signal: "App development fluency",
    detail:
      "OAuth flow, App Bridge embedded UI, webhooks handling with HMAC verification, billing API, App Store guidelines. We test app architecture, not just CRUD demos.",
  },
  {
    signal: "Shopify Functions and Checkout extensibility",
    detail:
      "Function input/output schema, deployment, testing locally, when to use Functions vs Scripts vs apps. Checkout UI Extensions and Post-Purchase extension patterns.",
  },
  {
    signal: "Performance and Core Web Vitals",
    detail:
      "Third-party app audit (which apps inject blocking JS), image optimization, lazy loading, critical CSS, hydration cost on custom themes. We hand a slow store and watch the audit.",
  },
  {
    signal: "Hydrogen and headless (when relevant)",
    detail:
      "Storefront API queries, Hydrogen routing on Remix, Oxygen deployment, ISR/SSR tradeoffs, custom CMS pairing. We screen separately for headless roles.",
  },
];

const engagementModels = [
  { name: "Fractional", hours: "20 hours per week", best: "Best for stores needing ongoing maintenance plus monthly feature work.", includes: "Dedicated engineer, shared context docs, weekly sync, Slack coverage in your timezone overlap." },
  { name: "Full-time dedicated", hours: "40 hours per week", best: "Best for merchants running Shopify Plus or building a custom app continuously.", includes: "Dedicated engineer, engineering manager check-ins, PTO backup coverage, monthly advisory session." },
  { name: "Team pod", hours: "2 to 4 engineers", best: "Best for a replatform, headless migration, or large custom-app build.", includes: "Tech lead plus engineers, shared context documentation, codebase walkthrough, 1-week trial across the pod." },
];

const steps = [
  { step: "01", title: "Share your requirements", description: "Tell us about your Shopify store, traffic, app stack, and what kind of engineer you need." },
  { step: "02", title: "SethAI matches candidates", description: "SethAI screens for Shopify depth, theme/app experience, and communication fit. Shortlist in 48 hours." },
  { step: "03", title: "You interview your picks", description: "Talk to the candidates directly. Test theme/app work, performance debugging, and working style." },
  { step: "04", title: "1-week trial, then commit", description: "Start with a paid trial week. If the fit is right, continue. If not, we find another match at no extra cost." },
];

const faqItems: FAQ[] = [
  {
    question: "How much does it cost to hire a Shopify developer from India?",
    answer:
      "Mid-level Shopify developers from India cost USD 3,500 to 5,500 per month for full-time engagement. Senior engineers with Plus, app development, or Hydrogen depth range from USD 5,000 to 7,500 per month. Pricing includes engineering manager oversight and PTO backup.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your Shopify engineers build custom themes from scratch?",
    answer:
      "Yes. Custom themes with Online Store 2.0 sections, JSON templates, metaobjects, theme app extensions, and performance-aware Liquid are standard work. We do not assemble themes from copy-pasted free themes plus plugins.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do you build custom Shopify apps?",
    answer:
      "Yes. Private apps for a single merchant, public apps for the Shopify App Store, with proper OAuth, App Bridge embedded UI, webhooks with HMAC verification, billing API integration, and adherence to App Store review guidelines.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can you migrate us from Magento or WooCommerce to Shopify?",
    answer:
      "Yes. Migrations include content modeling with metafields and metaobjects, product imports, customer history, order parity, URL redirect maps, SEO preservation, payment gateway switchover, and post-launch validation. Most migrations take 6 to 12 weeks depending on scope.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do you work with Shopify Plus and B2B features?",
    answer:
      "Yes. Plus engagements cover Scripts to Functions migration, B2B catalog architecture, multipass SSO, draft orders automation, multi-store synchronization, Launchpad campaigns, and custom checkout extensibility.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can you build headless Shopify with Hydrogen?",
    answer:
      "Yes. Hydrogen on Remix with Oxygen deployment, Storefront API design, caching strategy, preview workflows, and custom CMS integrations (Sanity, Contentful) are common engagements. We screen specifically for headless work.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your Shopify developers work in our timezone?",
    answer:
      "Yes. Our engineers in India routinely overlap with US Eastern, US Pacific, UK, and European timezones. Standard engagements include at least 4 hours of daily overlap with your team.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireShopifyDevelopersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire Shopify Developers from India",
    "Hire pre-vetted Shopify developers from India. Themes, apps, Shopify Plus, Hydrogen, checkout extensibility. SethAI-screened.",
    `${siteMetadata.url}/hire/shopify-developers/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    { name: "Shopify Developers", url: `${siteMetadata.url}/hire/shopify-developers/` },
  ]);

  const faqSchema = generateFAQPageSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="primary" className="mb-4">HIRE SHOPIFY DEVELOPERS</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">Hire Shopify Developers from India</h1>
          <p className="mt-4 text-lg text-dark-600 dark:text-dark-200 max-w-2xl">
            Pre-vetted engineers who ship real Shopify: custom themes, public
            and private apps, Shopify Plus, Hydrogen headless, and checkout
            extensibility. Screened by SethAI for depth and long-term fit.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">Start hiring</Button>
            <Button href="/how-we-work" variant="outline" size="lg">How we work</Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Why Shopify won mid-market commerce in 2026</h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              Shopify quietly took over the mid-market e-commerce space.
              Merchants moving off Magento, WooCommerce, and BigCommerce
              consistently land on Shopify Plus because of fewer ops surprises,
              faster checkout, and a deeper app ecosystem. Modern Shopify
              (Online Store 2.0, Functions, Checkout UI Extensions, Hydrogen)
              is genuinely a developer platform now, not just a store builder.
            </p>
            <p>
              The catch is that most Shopify resources are theme tweakers, not
              software engineers. A senior Shopify engineer in 2026 writes
              custom themes from scratch, builds production apps with App
              Bridge, ships Shopify Functions in Rust or JS, and tunes for
              Core Web Vitals under real holiday traffic. They are the
              minority of the hiring pool.
            </p>
            <p>
              Every engineer we place is screened by SethAI for those
              instincts: modern theme architecture, app development depth,
              performance discipline, and the ability to maintain a Plus
              store responsibly.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">Why hire Shopify developers from Workforce Next</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyPoints.map((point) => (
              <div key={point.title} className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 hover:shadow-card transition-all">
                <h3 className="font-bold text-dark-900 dark:text-dark-50">{point.title}</h3>
                <p className="mt-2 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">What a Shopify developer actually does</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">
            When you hire a Shopify developer through Workforce Next, here is
            the work they take ownership of:
          </p>
          <ul className="space-y-3">
            {responsibilities.map((item) => (
              <li key={item} className="flex gap-3 text-dark-600 dark:text-dark-200 leading-relaxed">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Specialist or generalist: which do you need?</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            Not every Shopify role needs a specialist. Here is how we help
            customers decide before they spend on the wrong profile.
          </p>
          <div className="space-y-4">
            {whenToHire.map((item) => (
              <div key={item.scenario} className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700">
                <h3 className="font-bold text-dark-900 dark:text-dark-50 mb-1">{item.scenario}</h3>
                <p className="text-sm font-bold text-primary-500 mb-3">{item.recommendation}</p>
                <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-8">Skills we screen for</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skills.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-primary-50 dark:bg-dark-800 text-dark-700 dark:text-dark-200 rounded-lg text-sm font-medium border border-dark-100 dark:border-dark-700">{skill}</span>
            ))}
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            {screeningSignals.map((item) => (
              <div key={item.signal} className="p-6 rounded-xl border border-dark-50 dark:border-dark-700">
                <h3 className="font-bold text-dark-900 dark:text-dark-50 mb-2">{item.signal}</h3>
                <p className="text-sm text-dark-600 dark:text-dark-200 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Engagement models</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Three ways to work with our Shopify engineers. Every engagement includes an engineering manager, shared context documentation, and PTO backup coverage at no extra cost.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementModels.map((model) => (
              <div key={model.name} className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700 flex flex-col">
                <h3 className="text-lg font-extrabold text-dark-900 dark:text-dark-50">{model.name}</h3>
                <p className="mt-1 text-sm font-bold text-primary-500">{model.hours}</p>
                <p className="mt-4 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">{model.best}</p>
                <p className="mt-4 text-sm text-dark-600 dark:text-dark-200 leading-relaxed border-t border-dark-50 dark:border-dark-700 pt-4">{model.includes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">How it works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700 font-bold text-lg mb-4">{s.step}</div>
                <h3 className="font-bold text-dark-900 dark:text-dark-50">{s.title}</h3>
                <p className="mt-2 text-sm text-dark-600 dark:text-dark-200 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">Common questions about hiring Shopify developers</h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div key={faq.question} className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700">
                <h3 className="font-bold text-dark-900 dark:text-dark-50">{faq.question}</h3>
                <p className="mt-3 text-dark-600 dark:text-dark-200 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Ready to hire Shopify developers?</h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">Tell us about your store and we will match you with the right engineers within 48 hours.</p>
          <Button href="/contact" variant="white" size="lg">Get started</Button>
        </div>
      </section>
    </>
  );
}
