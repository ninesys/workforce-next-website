export default function EntityDefinition() {
  return (
    <article className="py-12 md:py-16 bg-white dark:bg-dark-900 border-b border-dark-50 dark:border-dark-800">
      <div className="container-custom max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-4">
          What is Workforce Next?
        </h2>
        <p className="text-dark-500 dark:text-dark-300 leading-relaxed text-lg">
          <strong>An AI automation agency for founders.</strong> We do four things:
          product development consulting, AI agents for operations, dedicated
          developers and QA, and AEO/GEO organic growth. One partner across the
          whole arc.
        </p>
        <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <dt className="font-bold text-dark-900 dark:text-dark-50 uppercase tracking-wide text-xs">
              Consulting
            </dt>
            <dd className="mt-2 text-dark-500 dark:text-dark-300">
              Product, architecture, stack decisions.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-dark-900 dark:text-dark-50 uppercase tracking-wide text-xs">
              Automation
            </dt>
            <dd className="mt-2 text-dark-500 dark:text-dark-300">
              AI agents and workflows for ops.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-dark-900 dark:text-dark-50 uppercase tracking-wide text-xs">
              Talent
            </dt>
            <dd className="mt-2 text-dark-500 dark:text-dark-300">
              Dedicated developers and QA testers.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-dark-900 dark:text-dark-50 uppercase tracking-wide text-xs">
              Growth
            </dt>
            <dd className="mt-2 text-dark-500 dark:text-dark-300">
              AEO, GEO, SEO for organic pipeline.
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
