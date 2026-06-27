export default function RetentionMechanisms() {
  const mechanisms = [
    {
      number: "01",
      title: "We deploy agents AND place humans",
      description:
        "No vendor incentive to push you one way. We scope the right mix for your specific workflow, then ship.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Agents remove volume, humans own judgment",
      description:
        "The agent handles the repetitive layer. The human owns the strategic layer. Same workflow, half the burnout.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Fixed scope, weekly cadence",
      description:
        "Discovery call, scoped proposal in 48 hours, weekly delivery. No retainer trap, no vibes-based project work.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section-padding bg-primary-50 dark:bg-dark-800">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-500/15 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-4">
            Why founders pick us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
            Three reasons founders pick us
          </h2>
          <p className="mt-4 text-dark-400 dark:text-dark-300 max-w-2xl mx-auto text-base sm:text-lg">
            Most vendors sell one thing. We offer agents, humans, or the right blend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {mechanisms.map((m) => (
            <div
              key={m.number}
              className="relative bg-white dark:bg-dark-800/80 p-6 sm:p-8 rounded-xl border border-dark-50 dark:border-dark-700/50 shadow-card"
            >
              <span className="absolute top-5 right-5 sm:top-6 sm:right-6 text-4xl sm:text-5xl font-extrabold text-primary-100 dark:text-primary-500/10">
                {m.number}
              </span>
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-500/15 flex items-center justify-center text-primary-500 mb-4 sm:mb-5">
                  {m.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-dark-900 dark:text-dark-50">
                  {m.title}
                </h3>
                <p className="mt-3 text-sm text-dark-400 dark:text-dark-300 leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
