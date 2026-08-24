import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { jobOpenings, getJobOpening } from "@/data/jobOpenings";
import { generateJobPostingSchema, generateBreadcrumbSchema } from "@/lib/jsonLd";
import { siteMetadata, ogDefaults } from "@/data/siteMetadata";

export function generateStaticParams() {
  return jobOpenings.map((job) => ({ slug: job.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const job = getJobOpening(params.slug);
  if (!job) return {};

  const title = `${job.title} - Careers at Workforce Next`;
  const description = job.summary;

  return {
    title,
    description,
    openGraph: {
      ...ogDefaults(`/careers/${job.slug}/`),
      images: ["/images/og-default.png"],
      title,
      description,
    },
    alternates: {
      canonical: `${siteMetadata.url}/careers/${job.slug}/`,
    },
  };
}

export default function JobOpeningPage({
  params,
}: {
  params: { slug: string };
}) {
  const job = getJobOpening(params.slug);
  if (!job) notFound();

  const [jobPostingSchema] = generateJobPostingSchema([
    {
      title: job.title,
      value: job.slug,
      minSalary: job.minSalary,
      maxSalary: job.maxSalary,
      description: job.summary,
    },
  ]);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Careers", url: `${siteMetadata.url}/careers/` },
    { name: job.title, url: `${siteMetadata.url}/careers/${job.slug}/` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom max-w-4xl">
          <Link
            href="/careers/"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary-500 hover:underline mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            All open roles
          </Link>
          <Badge variant="white" className="mb-4">
            {job.department}
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50 leading-tight">
            {job.title}
          </h1>
          <p className="mt-4 text-lg text-dark-400 dark:text-dark-300 max-w-2xl">
            {job.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-dark-500 dark:text-dark-300">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              {job.location}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {job.type}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
              {job.experience}
            </span>
          </div>
          <div className="mt-8">
            <Button href={`/careers/?role=${job.slug}#apply`} variant="primary" size="lg">
              Apply for this role
            </Button>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-bold text-dark-900 dark:text-dark-50 mb-4">
                What you&apos;ll do
              </h2>
              <ul className="space-y-3">
                {job.responsibilities.map((item) => (
                  <li key={item} className="flex gap-3">
                    <svg className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-dark-700 dark:text-dark-200 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-dark-900 dark:text-dark-50 mb-4">
                What we&apos;re looking for
              </h2>
              <ul className="space-y-3">
                {job.requirements.map((item) => (
                  <li key={item} className="flex gap-3">
                    <svg className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-dark-700 dark:text-dark-200 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {job.niceToHave && job.niceToHave.length > 0 && (
                <>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-dark-400 dark:text-dark-400 mt-8 mb-3">
                    Nice to have
                  </h3>
                  <ul className="space-y-2">
                    {job.niceToHave.map((item) => (
                      <li key={item} className="text-sm text-dark-500 dark:text-dark-300">
                        &middot; {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          <div className="mt-12 p-8 rounded-xl bg-primary-50 dark:bg-dark-800 text-center">
            <h2 className="text-xl font-bold text-dark-900 dark:text-dark-50">
              Ready to apply?
            </h2>
            <p className="mt-2 text-sm text-dark-400 dark:text-dark-300">
              Submit your resume and we will get back to you if there is a
              fit.
            </p>
            <div className="mt-6">
              <Button href={`/careers/?role=${job.slug}#apply`} variant="primary" size="lg">
                Apply for this role
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
