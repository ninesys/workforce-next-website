import { faqs, faqCategories } from "@/data/faqs";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function FAQPage() {
  const sections = faqCategories
    .filter((cat) => cat.value !== "all")
    .map((cat) => ({
      ...cat,
      slug: slugify(cat.value),
      items: faqs.filter((f) => f.category === cat.value),
    }))
    .filter((section) => section.items.length > 0);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800 pt-32 pb-16 md:pt-40 md:pb-20">
        <div aria-hidden className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-200/30 dark:bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="container-custom relative max-w-4xl">
          <Badge variant="primary" className="mb-4">FAQ</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-dark-900 dark:text-dark-50 leading-[1.05]">
            Quick answers.
            <br />
            <span className="text-primary-500">Across all four services.</span>
          </h1>
          <p className="mt-6 text-lg text-dark-500 dark:text-dark-300 max-w-2xl">
            Common questions about our consulting, automation, talent, and AEO/GEO growth work.{" "}
            <a
              href="/contact"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 underline font-bold"
            >
              Can&apos;t find yours? Book a discovery call.
            </a>
          </p>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <nav aria-label="FAQ categories" className="flex flex-wrap gap-2 mb-10">
            {sections.map((section) => (
              <a
                key={section.value}
                href={`#${section.slug}`}
                className={cn(
                  "px-4 py-2 text-sm font-semibold rounded-full transition-all",
                  "bg-dark-50 dark:bg-dark-800 text-dark-500 dark:text-dark-300",
                  "hover:bg-primary-50 dark:hover:bg-primary-500/10 hover:text-primary-500",
                )}
              >
                {section.label}
              </a>
            ))}
          </nav>

          {sections.map((section) => (
            <div key={section.value} id={section.slug} className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-4">
                {section.label}
              </h2>
              <div className="space-y-3">
                {section.items.map((faq, index) => (
                  <details
                    key={`${section.value}-${index}`}
                    className="group border border-dark-50 dark:border-dark-700 rounded-xl overflow-hidden bg-white dark:bg-dark-800 hover:border-primary-200 dark:hover:border-primary-500/30 transition-colors"
                  >
                    <summary className="cursor-pointer list-none flex items-center justify-between px-6 py-5 hover:bg-primary-50/50 dark:hover:bg-primary-500/5 transition-colors">
                      <span className="font-bold text-dark-900 dark:text-dark-50 pr-4 text-[15px]">
                        {faq.question}
                      </span>
                      <svg
                        className="w-5 h-5 text-dark-300 dark:text-dark-400 shrink-0 transition-transform duration-200 group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="px-6 pb-5 border-t border-dark-50 dark:border-dark-700 pt-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-full mb-3">
                        {faq.categoryLabel}
                      </span>
                      <p className="text-dark-500 dark:text-dark-300 leading-relaxed text-[15px]">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}

          <p className="mt-6 text-sm text-dark-300 dark:text-dark-400">
            Showing all {faqs.length} questions across {sections.length} categories.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-dark-900 to-dark-800 py-14 md:py-20">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="container-custom relative text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark-100">
            Still have questions?
          </h2>
          <p className="mt-3 text-dark-300 max-w-xl mx-auto">
            Tell us about your project and we will help you figure out the right
            team, engagement model, and timeline.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="primary" size="lg">
              Get in touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
