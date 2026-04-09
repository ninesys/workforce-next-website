import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  generateOrganizationSchema,
  generateBreadcrumbSchema,
} from "@/lib/jsonLd";
import { siteMetadata } from "@/data/siteMetadata";

export const metadata: Metadata = {
  title: "About Workforce Next - Remote Teams That Stay",
  description:
    "Workforce Next Pvt. Ltd., founded 2020, builds dedicated remote engineering teams matched by SethAI for longevity. Based in Noida, India. Context over code, longevity over speed, honesty over polish.",
  keywords: [
    "about Workforce Next",
    "Workforce Next Pvt Ltd",
    "remote engineering teams India",
    "SethAI recruiter",
    "dedicated development teams",
    "software company Noida",
  ],
  openGraph: {
    title: "About Workforce Next - Remote Teams That Stay",
    description:
      "Workforce Next builds dedicated remote engineering teams matched by SethAI for longevity. Founded 2020, based in Noida, India.",
  },
  alternates: {
    canonical: `${siteMetadata.url}/about`,
  },
};

const values = [
  {
    title: "Context over code",
    description:
      "A developer who understands your business domain writes better code than one who just knows the syntax. We screen for curiosity and domain interest, not just technical checklists.",
  },
  {
    title: "Longevity over speed",
    description:
      "Filling a seat in two weeks means nothing if that person leaves in three months. SethAI screens for career alignment, stability signals, and ownership mindset because retention is the real metric.",
  },
  {
    title: "Honesty over polish",
    description:
      "We do not oversell. If we think a candidate is not the right fit, we say so. If a role is hard to fill, we tell you upfront. You make better decisions with honest information.",
  },
];

export default function AboutPage() {
  const orgSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.url },
    { name: "About", url: `${siteMetadata.url}/about` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Badge variant="primary" className="mb-4">
            ABOUT US
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            We build remote teams that don&apos;t disappear
          </h1>
          <p className="mt-4 text-lg text-dark-400 dark:text-dark-300 max-w-2xl">
            Workforce Next Pvt. Ltd. is a remote team-building company based in
            Noida, India. Founded in 2020, we focus on one thing: engineering
            teams that stay long enough to actually understand your product.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            The story
          </h2>
          <div className="space-y-4 text-dark-400 dark:text-dark-300 leading-relaxed">
            <p>
              We started as a software services company in 2020. We built
              projects for startups and enterprises, and we were good at it. But
              we kept seeing the same problem everywhere.
            </p>
            <p>
              Teams that reset context every few months. A developer leaves,
              knowledge walks out the door, and the new person spends weeks
              catching up. The client pays twice for the same ramp-up. The
              remaining team members lose momentum. Everyone pretends this is
              normal.
            </p>
            <p>
              It is not normal. It is expensive, demoralising, and completely
              avoidable.
            </p>
            <p>
              So we built{" "}
              <strong className="text-dark-900 dark:text-dark-50">
                SethAI
              </strong>
              , an AI recruiter that screens developers not just for technical
              skills, but for longevity signals: ownership mindset, career
              alignment, and communication reliability. SethAI delivers a
              one-page match report to hiring managers so they can make better
              decisions faster.
            </p>
            <p>
              Today, Workforce Next focuses exclusively on building dedicated
              engineering teams for founders, funded startups, and enterprises.
              We do not do project-based work anymore. We build teams that stay,
              and we are proud of our retention numbers.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 text-center mb-12">
            What we believe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700"
              >
                <h3 className="text-lg font-bold text-dark-900 dark:text-dark-50 mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Leadership
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 p-6 rounded-xl border border-dark-50 dark:border-dark-700">
            <div className="shrink-0">
              <Image
                src="/images/gaurav.jpeg"
                alt="Gaurav, Founder of Workforce Next"
                width={120}
                height={120}
                className="rounded-xl object-cover w-24 h-24 sm:w-28 sm:h-28 shadow-card"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-dark-900 dark:text-dark-50">
                Gaurav
              </h3>
              <p className="text-sm text-primary-500 font-medium mb-3">
                Founder and Solution Architect
              </p>
              <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-4">
                20 years in solution architecture and enterprise software. Gaurav
                built Workforce Next because he was tired of watching good teams
                fall apart due to bad hiring processes. He designed SethAI to fix
                the screening problem at its root.
              </p>
              <Link
                href="/about/gaurav"
                className="text-primary-500 hover:text-primary-600 font-medium text-sm transition-colors"
              >
                Read full bio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-primary-50 dark:bg-dark-800">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-6">
            Where we are
          </h2>
          <div className="p-6 rounded-xl bg-white dark:bg-dark-900 border border-dark-50 dark:border-dark-700">
            <p className="font-bold text-dark-900 dark:text-dark-50 mb-1">
              Workforce Next Pvt. Ltd.
            </p>
            <p className="text-dark-400 dark:text-dark-300">
              DLF Cyber City, Gurugram, Haryana, India
            </p>
            <p className="text-sm text-dark-300 dark:text-dark-400 mt-1">
              Tech Office: NPX Urbtech, Sector 153, Noida, U.P., India
            </p>
            <p className="mt-3 text-dark-400 dark:text-dark-300">
              Our team works remotely across India. We have offices in Gurugram
              and Noida where we occasionally meet in person.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Want to work with us?
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            Whether you are hiring engineers or looking to join our team, we
            would like to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="white" size="lg">
              Build your team
            </Button>
            <Button
              href="/careers"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:border-white hover:text-white"
            >
              Join our team
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
