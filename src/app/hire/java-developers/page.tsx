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
  title: "Hire Java Developers from India",
  description:
    "Hire pre-vetted Java developers from India. Spring Boot, Quarkus, modern JDK 21, microservices, Kafka, JVM tuning. SethAI-screened for depth and longevity.",
  keywords: [
    "hire Java developers",
    "hire Java developers India",
    "Spring Boot developers India",
    "Java microservices engineers",
    "Quarkus developers",
    "JVM engineers",
    "Java backend developers",
    "Java staff augmentation",
    "enterprise Java developers",
  ],
  openGraph: {
    ...ogDefaults("/hire/java-developers/"),
    images: ["/images/og-default.png"],
    title: "Hire Java Developers from India",
    description:
      "Pre-vetted Java engineers for Spring Boot, Quarkus, microservices, and enterprise modernization. SethAI-screened.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/hire/java-developers/`,
  },
};

const skills = [
  "Java 21",
  "Spring Boot 3",
  "Quarkus",
  "Hibernate / JPA",
  "Kafka",
  "Maven / Gradle",
  "JUnit 5",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "OpenTelemetry",
  "AWS / Azure",
  "gRPC",
  "Project Loom",
];

const whyPoints = [
  {
    title: "Modern Java, not stuck on Java 8",
    description:
      "Our engineers use JDK 21, records, sealed classes, pattern matching, and virtual threads from Project Loom. They write Java the way Java is written in 2026, not 2015.",
  },
  {
    title: "Spring Boot and Quarkus depth at production scale",
    description:
      "Spring Boot for enterprise apps with the deepest library ecosystem. Quarkus for cloud-native services with fast startup and native compile. We match the engineer to your stack.",
  },
  {
    title: "JVM tuning and observability",
    description:
      "GC tuning, heap analysis, async-profiler, OpenTelemetry instrumentation. The seniors we place know what a JFR recording shows and how to read it.",
  },
  {
    title: "Screened by SethAI for longevity",
    description:
      "SethAI evaluates ownership and communication. You get Java engineers who stay long enough to own a service, not consultants who rotate every quarter.",
  },
];

const responsibilities = [
  "Designing Spring Boot or Quarkus REST and GraphQL APIs with proper validation, error handling, OpenAPI contracts, and idempotency",
  "Building event-driven services on Kafka, RabbitMQ, or SQS, with consumer groups, dead-letter handling, and back-pressure",
  "Architecting microservices that communicate over gRPC or REST, with circuit breakers, retries, and timeouts via Resilience4j",
  "Integrating PostgreSQL, MySQL, MongoDB, and Redis with Hibernate or jOOQ, Flyway or Liquibase migrations, and read replicas",
  "Implementing OAuth2, JWT, and OIDC auth flows with Spring Security or Keycloak, plus role-based access control",
  "Tuning JVMs: GC selection (G1, ZGC), heap sizing, async-profiler usage, JFR analysis, and memory leak detection",
  "Hardening Java services against OWASP Top 10 risks, dependency CVEs (Log4Shell-style), and SSRF in webhook handlers",
  "Containerizing with Docker (multi-stage builds), deploying on Kubernetes with HPA and PDBs, or AWS ECS/Lambda with SnapStart",
  "Writing JUnit 5 and Testcontainers integration tests, plus contract tests via Pact or Spring Cloud Contract",
  "Modernizing legacy Java estates: JDK 8 to 21 migrations, monolith to microservices, EJB to Spring Boot",
];

const whenToHire = [
  {
    scenario: "Building a new enterprise backend or fintech platform",
    recommendation: "Hire a Java specialist with Spring Boot depth",
    reason:
      "Java is the safest pick for backends that will run for a decade. Spring Boot has the library ecosystem, security maturity, and tooling that regulated industries demand.",
  },
  {
    scenario: "Modernizing a JDK 8 monolith on a legacy app server",
    recommendation: "Hire a Java specialist with migration experience",
    reason:
      "JDK upgrades, removed APIs (javax to jakarta), and EJB-to-Spring migrations break in subtle ways. A generalist will spend months chasing classpath errors without progress.",
  },
  {
    scenario: "Building a cloud-native microservice estate",
    recommendation: "Hire a Java specialist with Kubernetes and Kafka experience",
    reason:
      "Microservices on the JVM need someone who understands GC tuning, container memory limits, distributed tracing, and event-sourcing patterns. Production scars matter here.",
  },
  {
    scenario: "Adding a Java service next to a primarily Node or Python stack",
    recommendation: "A general backend engineer is usually fine",
    reason:
      "If the JVM is a small slice of your stack, a generalist who can write a Spring Boot endpoint is enough. Reserve specialist budget for real Java workloads.",
  },
];

const screeningSignals = [
  {
    signal: "Modern JDK fluency",
    detail:
      "Can the candidate explain virtual threads vs platform threads, sealed classes vs interfaces, pattern matching for switch? Are they using records and text blocks? Do they know what changed from JDK 8 to JDK 21?",
  },
  {
    signal: "Spring or Quarkus architecture",
    detail:
      "Spring: dependency injection scopes, transaction management, AOP, profiles. Quarkus: build-time DI, native compile, reactive programming. We test architectural judgment, not API trivia.",
  },
  {
    signal: "Concurrency correctness",
    detail:
      "ExecutorService vs StructuredTaskScope, virtual threads vs reactive, CompletableFuture composition, immutability patterns. We give a concurrency bug and watch them debug.",
  },
  {
    signal: "JVM tuning",
    detail:
      "GC selection for the workload (G1 vs ZGC vs Shenandoah), heap sizing for containers, JIT compilation behavior, JFR analysis. We test whether candidates have shipped JVM tuning in production or only read about it.",
  },
  {
    signal: "Production debugging",
    detail:
      "We hand candidates a Spring Boot app with a memory leak, a slow query, or a misconfigured connection pool and ask them to find it. This filters out engineers who only ship tutorial demos.",
  },
  {
    signal: "Dependency hygiene",
    detail:
      "Maven or Gradle lockfile discipline. CVE response (Log4Shell, Spring4Shell). Snyk or Dependabot configuration. We test whether the candidate audits dependencies or guesses.",
  },
];

const engagementModels = [
  { name: "Fractional", hours: "20 hours per week", best: "Best for early-stage teams needing senior Java guidance without a full-time budget.", includes: "Dedicated engineer, shared context docs, weekly sync, Slack coverage in your timezone overlap." },
  { name: "Full-time dedicated", hours: "40 hours per week", best: "Best for product teams shipping continuously and needing integrated pod members.", includes: "Dedicated engineer, engineering manager check-ins, PTO backup coverage, monthly advisory session." },
  { name: "Team pod", hours: "2 to 5 engineers", best: "Best for a feature, migration, or new product that needs a self-contained Java squad.", includes: "Tech lead plus engineers, shared context documentation, codebase walkthrough, 1-week trial across the pod." },
];

const steps = [
  { step: "01", title: "Share your requirements", description: "Tell us about your Java stack, framework, and what kind of engineer you need." },
  { step: "02", title: "SethAI matches candidates", description: "SethAI screens for Java depth, framework experience, and communication fit. Shortlist in 48 hours." },
  { step: "03", title: "You interview your picks", description: "Talk to the candidates directly. Test architectural thinking, debugging, and working style." },
  { step: "04", title: "1-week trial, then commit", description: "Start with a paid trial week. If the fit is right, continue. If not, we find another match at no extra cost." },
];

const faqItems: FAQ[] = [
  {
    question: "How much does it cost to hire a Java developer from India?",
    answer:
      "Mid-level Java developers from India cost USD 4,500 to 7,000 per month for full-time engagement. Senior engineers with Spring Boot, microservices, or fintech depth range from USD 6,500 to 10,000 per month. Pricing includes engineering manager oversight and PTO backup.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Should we use Spring Boot or Quarkus for a new service?",
    answer:
      "Use Spring Boot when you want the deepest library ecosystem, mature security, and predictable behavior at enterprise scale. Use Quarkus when fast startup, low memory footprint, and native compilation matter (serverless, edge, container density). Most senior Java engineers we place are comfortable across both.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Are your Java engineers using virtual threads and modern JDK features?",
    answer:
      "Yes. Every senior we place defaults to JDK 21 with records, sealed classes, pattern matching, and virtual threads where they fit. We test modern JDK fluency in screening: candidates explain when virtual threads beat reactive programming and when they do not.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your Java engineers modernize a legacy JDK 8 or app server codebase?",
    answer:
      "Yes. We have migrated customers from JDK 8 to 21, from WebLogic and JBoss to Spring Boot, and from EJB to modern Java. The work is incremental, runs alongside feature delivery, and follows a documented migration playbook.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "What about JVM tuning and performance work?",
    answer:
      "Our senior Java engineers ship with GC tuning, JFR analysis, async-profiler, and heap dump analysis experience. We screen for production performance work explicitly: candidates must walk through a real JFR or heap dump and propose fixes.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Is Java still the right choice for new projects?",
    answer:
      "Yes for enterprise backends, fintech, banking, and any system that needs to run for a decade with mature tooling. Less ideal for fast-iteration startup MVPs (Node or Python ship faster) or microsecond-latency systems (Go or Rust are better). Read our Node.js vs Java vs Go comparison for the full decision matrix.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
  {
    question: "Can your Java developers work in our timezone?",
    answer:
      "Yes. Our engineers in India routinely overlap with US Eastern, US Pacific, UK, and European timezones. Standard engagements include at least 4 hours of daily overlap with your team.",
    category: "hiring",
    categoryLabel: "Hiring",
  },
];

export default function HireJavaDevelopersPage() {
  const serviceSchema = generateServiceSchema(
    "Hire Java Developers from India",
    "Hire pre-vetted Java developers from India. Spring Boot, Quarkus, microservices, JVM tuning. SethAI-screened.",
    `${siteMetadata.url}/hire/java-developers/`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "Hire", url: `${siteMetadata.url}/hire/` },
    { name: "Java Developers", url: `${siteMetadata.url}/hire/java-developers/` },
  ]);

  const faqSchema = generateFAQPageSchema(faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="primary" className="mb-4">HIRE JAVA DEVELOPERS</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">Hire Java Developers from India</h1>
          <p className="mt-4 text-lg text-dark-600 dark:text-dark-200 max-w-2xl">
            Pre-vetted engineers who ship modern Java in production. Spring
            Boot, Quarkus, microservices, JVM tuning, and enterprise
            modernization. Screened by SethAI for depth and long-term fit.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact/" size="lg">Start hiring</Button>
            <Button href="/how-we-work/" variant="outline" size="lg">How we work</Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">Why Java is still the enterprise backbone in 2026</h2>
          <div className="space-y-4 text-dark-600 dark:text-dark-200 leading-relaxed">
            <p>
              Java runs the global financial system, the largest enterprise
              estates, and most of the high-throughput batch and event
              processing in production today. Modern JDK 21 with virtual
              threads, records, and pattern matching is competitive with Node
              and Python on developer ergonomics while keeping the JVM&apos;s
              throughput and ecosystem advantages.
            </p>
            <p>
              A Java engineer worth hiring in 2026 is different from the Java
              engineer of 2015. They write JDK 21, default to records, reach
              for virtual threads where they fit, and treat reactive
              programming as a tool not a religion. They know what JFR shows
              under load and how to read it. These instincts take years.
            </p>
            <p>
              Every engineer we place is screened by SethAI for those
              instincts. For broader runtime context, read our{" "}
              <a href="/blog/nodejs-vs-java-vs-go-enterprise-backend-2026/" className="text-primary-600 hover:underline">Node.js vs Java vs Go comparison</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">Why hire Java developers from Workforce Next</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">What a Java developer actually does</h2>
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8">
            When you hire a Java developer through Workforce Next, here is the
            work they take ownership of on a modern Java stack:
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
            Not every Java role needs a specialist. Here is how we help
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
          <p className="text-dark-600 dark:text-dark-200 leading-relaxed mb-8 max-w-3xl">Three ways to work with our Java engineers. Every engagement includes an engineering manager, shared context documentation, and PTO backup coverage at no extra cost.</p>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-8">Common questions about hiring Java developers</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Ready to hire Java developers?</h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">Tell us about your Java stack and we will match you with the right engineers within 48 hours.</p>
          <Button href="/contact/" variant="white" size="lg">Get started</Button>
        </div>
      </section>
    </>
  );
}
