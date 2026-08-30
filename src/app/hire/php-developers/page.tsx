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
  title: "Hire PHP Developers from India",
  description:
    "Hire pre-vetted PHP developers from India. Laravel, Symfony, modern PHP 8.3, WordPress, Magento, custom CMS, and legacy modernization. SethAI-screened.",
  keywords: [
    "hire PHP developers",
    "hire PHP developers India",
    "Laravel developers India",
    "Symfony developers",
    "PHP 8 developers",
    "WordPress PHP developers",
    "Magento PHP developers",
    "PHP modernization",
    "PHP staff augmentation",
  ],
  openGraph: {
    ...ogDefaults("/hire/php-developers/"),
    images: ["/images/og-default.png"],
    title: "Hire PHP Developers from India",
    description:
      "Pre-vetted PHP engineers for Laravel, Symfony, WordPress, Magento, and modernization. SethAI-screened.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/php-developers/`,
  },
};

const skills = [
  "PHP 8.3",
  "Laravel",
  "Symfony",
  "WordPress",
  "Magento 2",
  "Composer",
  "PHPUnit",
  "Doctrine",
  "Eloquent",
  "MySQL",
  "PostgreSQL",
  "Redis",
  "Docker",
  "REST APIs",
];

const whyPoints = [
  {
    title: "Modern PHP, not legacy hangover",
    description:
      "Our engineers write PHP 8.3 with strict types, attributes, readonly classes, and proper dependency injection. They treat the language as serious modern tooling, not the PHP of 2010.",
  },
  {
    title: "Framework depth that scales with complexity",
    description:
      "Laravel for product velocity, Symfony for enterprise architecture, WordPress for content sites, Magento for commerce. We match the engineer to the framework you actually run.",
  },
  {
    title: "Modernization track record",
    description:
      "We have helped customers migrate from PHP 5/7 to 8, from custom frameworks to Laravel, and from monoliths to modular services. Real refactor experience, not greenfield-only.",
  },
  {
    title: "Screened by SethAI for longevity",
    description:
      "SethAI evaluates ownership and communication. You get PHP engineers who stay long enough to own a domain, not freelancers who churn after one feature.",
  },
];

const responsibilities = [
  "Designing Laravel or Symfony APIs with FormRequest validation, API Resources, OpenAPI contracts, and proper service layers",
  "Building Eloquent or Doctrine models with sensible relationships, query scopes, and indexed migrations",
  "Implementing queue workers with Laravel Horizon or Symfony Messenger for jobs and event-driven flows",
  "Integrating Stripe, Razorpay, Twilio, AWS, and the dozens of third-party SaaS that modern PHP apps depend on",
  "Customizing WordPress (custom post types, Gutenberg blocks, WP-CLI commands) and Magento 2 (modules, themes, GraphQL)",
  "Hardening PHP services against OWASP Top 10 risks: input validation, CSRF, SSRF, SQL injection, file-upload safety",
  "Profiling production issues with Blackfire, Tideways, or New Relic; debugging memory leaks in long-running workers",
  "Modernizing legacy PHP estates: PHP 5 to 8 migrations, untyped to typed, custom framework to Laravel/Symfony",
  "Containerizing services with Docker, deploying on AWS, GCP, or Forge/Vapor, wiring up CI/CD on GitHub Actions",
  "Writing PHPUnit and Pest test suites with database factories, HTTP fakes, and integration tests against real databases",
];

const whenToHire = [
  {
    scenario: "Building a new Laravel SaaS or admin product",
    recommendation: "Hire a Laravel specialist",
    reason:
      "Laravel ships fast when used well. A specialist knows queue patterns, multi-tenancy approaches, Inertia or Livewire vs API+SPA tradeoffs, and the dozens of small decisions that compound.",
  },
  {
    scenario: "Modernizing a PHP 5 or PHP 7 monolith to PHP 8 with Laravel or Symfony",
    recommendation: "Hire a PHP specialist with migration experience",
    reason:
      "Modernizations break in subtle ways. Type errors, deprecated function signatures, ORM behavior changes, and untyped-to-typed friction all need someone who has done this before.",
  },
  {
    scenario: "Customizing or scaling a Magento 2 or WooCommerce store",
    recommendation: "Hire a Magento or WooCommerce specialist",
    reason:
      "E-commerce PHP is its own world. Catalog performance, checkout customization, payment gateway integration, and headless GraphQL all need vertical expertise, not just general PHP.",
  },
  {
    scenario: "Occasional PHP work next to a primarily Node or Python stack",
    recommendation: "A general full-stack engineer is usually fine",
    reason:
      "If PHP is a small slice of your stack, a generalist who can read Laravel and ship a controller is enough. Reserve specialist budget for real PHP workloads.",
  },
];

const screeningSignals = [
  {
    signal: "Modern PHP correctness",
    detail:
      "Can the candidate explain readonly properties, intersection types, enums, and attributes? Do they default to strict_types and use Pest or PHPUnit fluently? Do they know what changed between PHP 7 and PHP 8.3?",
  },
  {
    signal: "Framework architecture",
    detail:
      "Laravel: service providers, container bindings, queue patterns. Symfony: bundles, dependency injection compiler passes, EventDispatcher. We test architectural decisions, not API recall.",
  },
  {
    signal: "Database and ORM judgment",
    detail:
      "Indexing strategies, N+1 detection, eager loading patterns, when to drop to raw SQL. We ask candidates to critique a slow Eloquent or Doctrine query and propose a fix.",
  },
  {
    signal: "Security awareness",
    detail:
      "Mass assignment, SQL injection via raw queries, CSRF tokens, file upload safety, password hashing (Argon2), CSP headers. We test whether candidates have internalized OWASP basics or just heard of them.",
  },
  {
    signal: "Production debugging",
    detail:
      "We hand candidates a slow Laravel app, a memory-leaking Horizon worker, or a misconfigured PHP-FPM and ask them to find it. This filters out engineers who only ship CRUD demos.",
  },
  {
    signal: "Composer and dependency hygiene",
    detail:
      "Lockfile discipline. Composer audit. Renovate or Dependabot setup. CVE response. Are they pinning versions and auditing transitive dependencies or guessing?",
  },
];

const engagementModels = [
  {
    name: "Fractional",
    hours: "20 hours per week",
    best: "Best for early-stage teams needing senior PHP guidance without a full-time budget.",
    includes:
      "Dedicated engineer, shared context docs, weekly sync, Slack coverage in your timezone overlap.",
  },
  {
    name: "Full-time dedicated",
    hours: "40 hours per week",
    best: "Best for product teams shipping continuously and needing integrated pod members.",
    includes:
      "Dedicated engineer, engineering manager check-ins, PTO backup coverage, monthly advisory session.",
  },
  {
    name: "Team pod",
    hours: "2 to 5 engineers",
    best: "Best for a feature, migration, or new product that needs a self-contained PHP squad.",
    includes:
      "Tech lead plus engineers, shared context documentation, codebase walkthrough, 1-week trial across the pod.",
  },
];

const steps = [
  { step: "01", title: "Share your requirements", description: "Tell us about your PHP stack, framework, and what kind of engineer you need." },
  { step: "02", title: "SethAI matches candidates", description: "SethAI screens for PHP depth, framework experience, and communication fit. Shortlist in 48 hours." },
  { step: "03", title: "You interview your picks", description: "Talk to the candidates directly. Test architectural thinking, debugging, and working style." },
  { step: "04", title: "1-week trial, then commit", description: "Start with a paid trial week. If the fit is right, continue. If not, we find another match at no extra cost." },
];

const faqItems: FAQ[] = [
  {
    question: "How much does it cost to hire a PHP developer from India?",
    answer:
      "Mid-level PHP developers from India cost USD 3,500 to 5,500 per month for full-time engagement. Senior engineers with Laravel, Symfony, or Magento depth range from USD 5,000 to 7,500 per month. Pricing includes engineering manager oversight and PTO backup.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Should we choose Laravel or Symfony for a new project?",
    answer:
      "Use Laravel when product velocity matters and the team values opinionated tooling (Eloquent, Horizon, Forge). Use Symfony when long-term architecture and enterprise patterns matter (decoupled components, more explicit DI). Both are excellent in 2026. We match the engineer to whichever you run.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your PHP engineers modernize a legacy PHP 5 or 7 codebase?",
    answer:
      "Yes. We have migrated customers from PHP 5.6 and 7.x to PHP 8.3, from custom frameworks to Laravel or Symfony, and from monoliths to modular services. The work is incremental, runs in parallel with feature work, and follows a documented migration playbook.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Do your PHP engineers also work with WordPress and Magento?",
    answer:
      "Yes, but as specialists not generalists. WordPress engineers focus on custom themes, plugins, Gutenberg blocks, and WP-CLI. Magento 2 engineers focus on modules, themes, performance, and GraphQL. Tell us your platform and we will match a specialist, not a generic PHP dev who has touched it once.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Is PHP still a good choice in 2026?",
    answer:
      "Yes, when used well. Modern PHP 8.3 with Laravel or Symfony is competitive with Node and Python for most web app workloads, with a deeper hiring pool than Go or Rust. PHP loses out for high-concurrency real-time, CPU-bound ML, and microservice meshes where other runtimes fit better.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your PHP developers work in our timezone?",
    answer:
      "Yes. Our engineers in India routinely overlap with US Eastern, US Pacific, UK, and European timezones. Standard engagements include at least 4 hours of daily overlap with your team.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "How long does it take to hire a PHP developer?",
    answer:
      "From intake call to trial week start, our median is 7 to 10 business days. SethAI returns a shortlist in 48 hours. Full ramp on your codebase typically takes 2 to 3 weeks for Laravel/Symfony work, 3 to 4 weeks for Magento.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HirePHPDevelopersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire PHP Developers from India",
    "Hire pre-vetted PHP developers from India. Laravel, Symfony, WordPress, Magento, and modernization. SethAI-screened.",
    `${siteMetadata.url}/hire/php-developers/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    { name: "PHP Developers", url: `${siteMetadata.url}/hire/php-developers/` },
  ]);

  const faqSchema = generateFAQPageSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="primary" className="mb-4">HIRE PHP DEVELOPERS</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            Hire PHP Developers from India
          </h1>
          <p className="mt-4 text-lg text-dark-600 dark:text-dark-200 max-w-2xl">
            Pre-vetted engineers who ship modern PHP in production. Laravel,
            Symfony, WordPress, Magento, and legacy modernization. Screened by
            SethAI for depth and long-term fit.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact/" size="lg">Start hiring</Button>
            <Button href="/how-we-work/" variant="outline" size="lg">How we work</Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Why PHP is still a serious choice in 2026
          </h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              PHP runs more of the web than any other language. WordPress alone
              powers over 40% of all websites. Laravel and Symfony continue to
              ship product fast at scale. Modern PHP 8.3 has strict types,
              readonly classes, attributes, and JIT compilation. The narrative
              that PHP is dead is wrong, and the hiring pool is one of the
              deepest in the industry.
            </p>
            <p>
              The catch is the variance. Bad PHP code is everywhere because the
              language has 20 years of legacy. A senior PHP engineer in 2026
              writes nothing like a PHP engineer from 2010, but the resume
              looks similar from the outside. Screening for modern instincts
              matters more in PHP than in almost any other language.
            </p>
            <p>
              Every engineer we place is screened by SethAI for those modern
              instincts: strict types, framework architecture, security
              hygiene, and the discipline to keep a codebase from rotting.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">Why hire PHP developers from Workforce Next</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">What a PHP developer actually does</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">
            When you hire a PHP developer through Workforce Next, here is the
            work they take ownership of on a modern PHP stack:
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
            Not every PHP role needs a specialist. Here is how we help
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
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">
            Three ways to work with our PHP engineers. Every engagement
            includes an engineering manager, shared context documentation, and
            PTO backup coverage at no extra cost.
          </p>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">Common questions about hiring PHP developers</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Ready to hire PHP developers?</h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">Tell us about your PHP stack and we will match you with the right engineers within 48 hours.</p>
          <Button href="/contact/" variant="white" size="lg">Get started</Button>
        </div>
      </section>
    </>
  );
}
