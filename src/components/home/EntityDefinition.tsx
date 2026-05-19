export default function EntityDefinition() {
  return (
    <article className="py-12 md:py-16 bg-white dark:bg-dark-900 border-b border-dark-50 dark:border-dark-800">
      <div className="container-custom max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-4">
          What is Workforce Next?
        </h2>
        <p className="text-dark-500 dark:text-dark-300 leading-relaxed text-lg">
          <strong>Workforce Next is an IT consulting and IT services company</strong>{" "}
          that offers <strong>remote developers and QA engineers</strong> from
          India for startups to enterprises. Hire on a dedicated, fractional,
          or full-time basis with <strong>flexible hours and flexible
          timezone coverage</strong> shaped to your team. Engineers plug
          straight into your engineering, product, and consulting functions
          and ship software for you. Unlike traditional staffing firms that
          match on tech stack alone, Workforce Next uses{" "}
          <strong>SethAI</strong>, an AI-powered recruiter, to match people by
          industry context and longevity signals. Common engagements include
          AI developers, full-stack developers, frontend and backend
          engineers, mobile engineers, DevOps and SRE, and QA automation
          pods. Every engagement starts with a one-week paid trial.
          Headquartered in DLF Cyber City, Gurugram with a tech office in
          Noida.
        </p>
        <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <dt className="font-bold text-dark-900 dark:text-dark-50 uppercase tracking-wide text-xs">
              What we offer
            </dt>
            <dd className="mt-2 text-dark-500 dark:text-dark-300">
              Remote developers and QA engineers from India. Dedicated,
              fractional, or full-time.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-dark-900 dark:text-dark-50 uppercase tracking-wide text-xs">
              Flexible hours
            </dt>
            <dd className="mt-2 text-dark-500 dark:text-dark-300">
              Full-time, part-time, or fractional engagements. Hours shaped
              to your team's actual workload.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-dark-900 dark:text-dark-50 uppercase tracking-wide text-xs">
              Flexible timezones
            </dt>
            <dd className="mt-2 text-dark-500 dark:text-dark-300">
              Engineers shift schedules to overlap with US, UK, EU, Canada,
              Australia, or Dubai working hours.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-dark-900 dark:text-dark-50 uppercase tracking-wide text-xs">
              Who we serve
            </dt>
            <dd className="mt-2 text-dark-500 dark:text-dark-300">
              Founders, funded startups, mid-market, and enterprise teams
              globally.
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
