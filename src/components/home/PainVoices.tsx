export default function PainVoices() {
  const voices = [
    {
      role: "Founder",
      quote:
        "Three freelancers in a year. Each vanished after the first deliverable. I'm rebuilding context every quarter, not shipping product.",
    },
    {
      role: "Series A CTO",
      quote:
        "Our agency rotates developers between clients. The one who shipped our core feature got moved. Three months re-explaining the architecture.",
    },
    {
      role: "Enterprise VP Engineering",
      quote:
        "One computer vision specialist, six months. Recruiters sent 50 resumes. None could explain what they actually built.",
    },
  ];

  return (
    <section className="section-padding bg-primary-50 dark:bg-dark-800">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-500/15 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-4">
            The Problem
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark-900 dark:text-dark-50">
            Sound familiar?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {voices.map((voice) => (
            <div
              key={voice.role}
              className="bg-white dark:bg-dark-800/80 p-6 sm:p-7 rounded-xl border border-dark-50 dark:border-dark-700/50 shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-500/20 flex items-center justify-center text-primary-600 dark:text-primary-400 text-sm font-bold mb-4">
                {voice.role[0]}
              </div>
              <p className="text-dark-500 dark:text-dark-300 leading-relaxed text-[15px]">
                &ldquo;{voice.quote}&rdquo;
              </p>
              <p className="mt-5 text-sm font-semibold text-dark-700 dark:text-dark-200">
                {voice.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
