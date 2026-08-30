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
  title: "Hire WordPress Developers from India",
  description:
    "Hire pre-vetted WordPress developers from India. Custom themes, plugins, Gutenberg blocks, WooCommerce, headless WordPress, performance and security. SethAI-screened.",
  keywords: [
    "hire WordPress developers",
    "hire WordPress developers India",
    "WordPress plugin developers",
    "custom WordPress theme developers",
    "WooCommerce developers",
    "headless WordPress developers",
    "Gutenberg block developers",
    "WordPress maintenance India",
    "WordPress staff augmentation",
  ],
  openGraph: {
    ...ogDefaults("/hire/wordpress-developers/"),
    images: ["/images/og-default.png"],
    title: "Hire WordPress Developers from India",
    description:
      "Pre-vetted WordPress engineers for custom themes, plugins, WooCommerce, headless WP, and performance work. SethAI-screened.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/wordpress-developers/`,
  },
};

const skills = [
  "WordPress 6",
  "Gutenberg / Block Editor",
  "PHP 8.3",
  "WooCommerce",
  "ACF",
  "Custom Themes",
  "Custom Plugins",
  "WP-CLI",
  "Headless WordPress",
  "MySQL",
  "REST API",
  "WPGraphQL",
  "Security Hardening",
  "Performance",
];

const whyPoints = [
  {
    title: "Real WordPress engineers, not plugin gluers",
    description:
      "Our engineers write custom themes, build Gutenberg blocks with React, and ship production plugins. They do not rely on page builders or assemble sites from random plugins.",
  },
  {
    title: "Headless and traditional WordPress",
    description:
      "Classic LAMP WordPress for SEO and content workflows. Headless WP with Next.js or Astro front-end for product velocity. We match the engineer to your architecture.",
  },
  {
    title: "WooCommerce and content site depth",
    description:
      "Multi-vendor WooCommerce, custom checkout flows, REST and GraphQL integrations, large content libraries with custom post types and complex taxonomies. Production scars, not tutorials.",
  },
  {
    title: "Screened by SethAI for longevity",
    description:
      "SethAI evaluates ownership and communication. You get WordPress engineers who maintain a codebase responsibly, not freelancers who ship and disappear.",
  },
];

const responsibilities = [
  "Building custom themes from scratch with proper template hierarchy, theme.json, and full-site editing support",
  "Developing custom Gutenberg blocks with React, block patterns, and reusable block libraries for editorial teams",
  "Writing custom plugins with proper hooks, REST API endpoints, capability checks, and admin UIs",
  "Customizing WooCommerce: payment gateways, shipping logic, multi-vendor, subscriptions, headless checkout",
  "Implementing ACF, ACF Pro, or alternative custom-field systems for content modeling that editors actually use",
  "Building headless WordPress backends with WPGraphQL or REST, paired with Next.js, Astro, or Nuxt front-ends",
  "Hardening WordPress against common attacks: brute force, plugin CVEs, file upload safety, REST API exposure",
  "Performance tuning: object caching with Redis, page caching with WP Rocket or LiteSpeed, query optimization, image optimization",
  "Migrations: from another CMS, from older WordPress versions, from one host to another, multi-site consolidation",
  "Maintenance: weekly core/plugin updates, security patching, backup verification, uptime monitoring, incident response",
];

const whenToHire = [
  {
    scenario: "Building a content-heavy marketing site or publisher",
    recommendation: "Hire a WordPress specialist",
    reason:
      "WordPress remains the most productive CMS for content workflows, SEO, and editorial teams. A specialist will build custom blocks and content types that editors love, not generic templates.",
  },
  {
    scenario: "Building or scaling a WooCommerce store",
    recommendation: "Hire a WooCommerce specialist",
    reason:
      "WooCommerce at scale needs vertical expertise: checkout customization, payment gateways, performance under load, multi-vendor patterns. General WordPress engineers struggle here.",
  },
  {
    scenario: "Going headless with WordPress + Next.js or Astro",
    recommendation: "Hire a WordPress specialist with headless experience",
    reason:
      "Headless WP is a different beast: WPGraphQL or REST design, preview workflows, image handling, build-vs-runtime tradeoffs. A WordPress generalist or a Next.js generalist alone will get this wrong.",
  },
  {
    scenario: "Migrating from another CMS to WordPress",
    recommendation: "Hire a WordPress specialist with migration experience",
    reason:
      "Migrations need someone who has done URL redirects, content remapping, image rehosting, and SEO preservation before. Generic engineers will tank your search rankings.",
  },
];

const screeningSignals = [
  {
    signal: "Modern WordPress development",
    detail:
      "Theme.json, block themes, Full Site Editing, WP Scripts build pipeline. Are they writing modern WP or stuck in 2018 patterns? We check by reading their plugin code.",
  },
  {
    signal: "Gutenberg and React fluency",
    detail:
      "Custom block development with React, block patterns, dynamic blocks (server-side render), InnerBlocks usage, block.json registration. Building a real block in 30 minutes during screening.",
  },
  {
    signal: "PHP and WordPress API fluency",
    detail:
      "Hooks, filters, transients, custom REST routes, capability checks, sanitization and escaping. Can they extend WordPress without breaking forward compatibility?",
  },
  {
    signal: "Performance and database judgment",
    detail:
      "Query optimization, transients vs object cache, wp_query vs custom SQL, ACF performance pitfalls. We hand a slow page and watch how they profile and fix.",
  },
  {
    signal: "Security awareness",
    detail:
      "Sanitization (wp_kses, esc_html, esc_attr), capability checks, nonce verification, plugin CVE response, file upload safety, REST API permission callbacks. OWASP basics adapted to WordPress.",
  },
  {
    signal: "WooCommerce depth (when relevant)",
    detail:
      "Custom payment gateways, checkout block customization, subscription patterns, performance under product catalog scale, multi-vendor architecture. We screen separately for WooCommerce roles.",
  },
];

const engagementModels = [
  { name: "Fractional", hours: "20 hours per week", best: "Best for sites needing ongoing maintenance plus monthly feature work.", includes: "Dedicated engineer, shared context docs, weekly sync, Slack coverage in your timezone overlap." },
  { name: "Full-time dedicated", hours: "40 hours per week", best: "Best for product teams running WordPress as a core platform with continuous build.", includes: "Dedicated engineer, engineering manager check-ins, PTO backup coverage, monthly advisory session." },
  { name: "Team pod", hours: "2 to 4 engineers", best: "Best for a redesign, headless migration, or large WooCommerce buildout.", includes: "Tech lead plus engineers, shared context documentation, codebase walkthrough, 1-week trial across the pod." },
];

const steps = [
  { step: "01", title: "Share your requirements", description: "Tell us about your WordPress site, traffic, plugins in use, and what kind of engineer you need." },
  { step: "02", title: "SethAI matches candidates", description: "SethAI screens for WordPress depth, framework experience, and communication fit. Shortlist in 48 hours." },
  { step: "03", title: "You interview your picks", description: "Talk to the candidates directly. Test theme/plugin work, debugging, and working style." },
  { step: "04", title: "1-week trial, then commit", description: "Start with a paid trial week. If the fit is right, continue. If not, we find another match at no extra cost." },
];

const faqItems: FAQ[] = [
  {
    question: "How much does it cost to hire a WordPress developer from India?",
    answer:
      "Mid-level WordPress developers from India cost USD 3,000 to 5,000 per month for full-time engagement. Senior engineers with Gutenberg, WooCommerce, or headless WP depth range from USD 4,500 to 7,000 per month. Pricing includes engineering manager oversight and PTO backup.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your WordPress engineers build custom Gutenberg blocks?",
    answer:
      "Yes. Custom blocks with React, block patterns, dynamic blocks with server-side render, InnerBlocks, block variations, and block libraries are standard work for the WordPress engineers we place. We screen this explicitly during interviews.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do you offer WooCommerce development specifically?",
    answer:
      "Yes. We have engineers who specialize in WooCommerce: payment gateways, shipping logic, multi-vendor architectures, subscriptions, custom checkout flows, headless checkout, and performance work for large catalogs.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can you build headless WordPress with Next.js or Astro?",
    answer:
      "Yes. Headless WordPress with WPGraphQL or REST, paired with Next.js, Astro, or Nuxt frontends is a common engagement. We screen specifically for headless workflows: preview, image handling, ISR vs SSG tradeoffs, and editorial UX preservation.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can you maintain an existing WordPress site we already have?",
    answer:
      "Yes. Maintenance engagements include weekly core and plugin updates, security patching, backup verification, uptime monitoring, performance tuning, and incident response. We can also audit an existing site and produce a hardening plan as a one-time engagement.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can you migrate a site from another CMS to WordPress?",
    answer:
      "Yes. We have migrated sites from Drupal, Joomla, Wix, Squarespace, Ghost, and custom CMSs to WordPress. Migrations include content modeling, URL redirects, image rehosting, SEO preservation, and post-launch validation.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your WordPress developers work in our timezone?",
    answer:
      "Yes. Our engineers in India routinely overlap with US Eastern, US Pacific, UK, and European timezones. Standard engagements include at least 4 hours of daily overlap with your team.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireWordPressDevelopersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire WordPress Developers from India",
    "Hire pre-vetted WordPress developers from India. Custom themes, plugins, Gutenberg blocks, WooCommerce, headless WP. SethAI-screened.",
    `${siteMetadata.url}/hire/wordpress-developers/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    { name: "WordPress Developers", url: `${siteMetadata.url}/hire/wordpress-developers/` },
  ]);

  const faqSchema = generateFAQPageSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="primary" className="mb-4">HIRE WORDPRESS DEVELOPERS</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">Hire WordPress Developers from India</h1>
          <p className="mt-4 text-lg text-dark-600 dark:text-dark-200 max-w-2xl">
            Pre-vetted engineers who build real WordPress: custom themes,
            Gutenberg blocks, plugins, WooCommerce, and headless WP. Not
            template assemblers. Screened by SethAI for depth and long-term
            fit.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact/" size="lg">Start hiring</Button>
            <Button href="/how-we-work/" variant="outline" size="lg">How we work</Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Why WordPress still dominates in 2026</h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              WordPress powers over 40% of all websites. It remains the most
              productive CMS for content workflows, SEO-friendly publishing,
              and teams where editors are not engineers. The modern stack
              (Gutenberg, block themes, WPGraphQL, headless options) has
              quietly turned WordPress into a serious application platform,
              not just a blog tool.
            </p>
            <p>
              The catch is signal-to-noise in the hiring market. WordPress has
              the largest pool of freelancers of any tech stack, and most of
              them assemble sites from plugins rather than building software.
              A senior WordPress engineer in 2026 writes custom blocks with
              React, ships clean plugin code, hardens against CVEs, and tunes
              for production traffic. They are the minority of the pool.
            </p>
            <p>
              Every engineer we place is screened by SethAI for those
              instincts: modern Gutenberg work, clean PHP, security hygiene,
              and the discipline to maintain a codebase responsibly.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">Why hire WordPress developers from Workforce Next</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">What a WordPress developer actually does</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">
            When you hire a WordPress developer through Workforce Next, here is
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
            Not every WordPress role needs a specialist. Here is how we help
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
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Three ways to work with our WordPress engineers. Every engagement includes an engineering manager, shared context documentation, and PTO backup coverage at no extra cost.</p>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">Common questions about hiring WordPress developers</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Ready to hire WordPress developers?</h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">Tell us about your WordPress site and we will match you with the right engineers within 48 hours.</p>
          <Button href="/contact/" variant="white" size="lg">Get started</Button>
        </div>
      </section>
    </>
  );
}
