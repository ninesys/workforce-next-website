export default function StatBlock() {
  const stats = [
    {
      value: "48",
      unit: "hours",
      label: "Matched and shortlisted by SethAI",
      icon: (
        <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
    },
    {
      value: "12+",
      unit: "months",
      label: "Typical engagement length",
      icon: (
        <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
        </svg>
      ),
    },
    {
      value: "0",
      unit: "fees",
      label: "No recruitment charges. No hidden costs.",
      icon: (
        <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-14 sm:py-16 md:py-20 bg-white dark:bg-dark-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 sm:p-8 rounded-xl bg-primary-50/60 dark:bg-primary-500/10 border border-primary-100 dark:border-primary-500/20"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-500/20 mb-4 sm:mb-5">
                {stat.icon}
              </div>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-900 dark:text-dark-50">
                  {stat.value}
                </span>
                {stat.unit && (
                  <span className="text-base sm:text-lg font-medium text-dark-400 dark:text-dark-300">
                    {stat.unit}
                  </span>
                )}
              </div>
              <p className="mt-2 sm:mt-3 text-sm text-dark-400 dark:text-dark-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
