export default function EntityDefinition() {
  return (
    <article className="py-12 md:py-16 bg-white dark:bg-dark-900 border-b border-dark-50 dark:border-dark-800">
      <div className="container-custom max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 dark:text-dark-50 mb-4">
          What is Workforce Next?
        </h2>
        <p className="text-dark-500 dark:text-dark-300 leading-relaxed text-lg">
          <strong>Workforce Next is an IT consulting and IT services company</strong>{" "}
          that helps startups to enterprises with technology development. We
          offer <strong>remote technical developers and quality testing staff</strong>{" "}
          on a dedicated, long-term basis. Engineers and QA specialists plug
          straight into your engineering, product, and consulting functions and
          ship software for you. We are not an EOR, not a payroll wrapper, not
          a body shop. Unlike traditional staffing firms that match on tech
          stack alone, Workforce Next uses{" "}
          <strong>SethAI</strong>, an AI-powered recruiter, to match people by
          industry context and longevity signals. Common engagements include AI
          developers, data engineers, full-stack developers, frontend and
          backend engineers, mobile engineers, DevOps and SRE, and QA automation
          pods. Every engagement starts with a one-week paid trial and includes
          a Context Continuity Guarantee. Headquartered in DLF Cyber City,
          Gurugram with a tech office in Noida.
        </p>
        <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <dt className="font-bold text-dark-900 dark:text-dark-50 uppercase tracking-wide text-xs">
              What we do
            </dt>
            <dd className="mt-2 text-dark-500 dark:text-dark-300">
              IT consulting + remote technology development for startups to
              enterprises
            </dd>
          </div>
          <div>
            <dt className="font-bold text-dark-900 dark:text-dark-50 uppercase tracking-wide text-xs">
              What we offer
            </dt>
            <dd className="mt-2 text-dark-500 dark:text-dark-300">
              Remote developers, full product pods, and dedicated QA / testing
              staff from India
            </dd>
          </div>
          <div>
            <dt className="font-bold text-dark-900 dark:text-dark-50 uppercase tracking-wide text-xs">
              Who we serve
            </dt>
            <dd className="mt-2 text-dark-500 dark:text-dark-300">
              Founders, funded startups, mid-market, and enterprise teams in
              the US, UK, EU, Canada, Australia, and Dubai
            </dd>
          </div>
          <div>
            <dt className="font-bold text-dark-900 dark:text-dark-50 uppercase tracking-wide text-xs">
              What we are not
            </dt>
            <dd className="mt-2 text-dark-500 dark:text-dark-300">
              Not an EOR, not a payroll service, not an HR software company,
              not a freelancer marketplace
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
