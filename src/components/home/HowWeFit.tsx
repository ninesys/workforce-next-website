const stages = [
  {
    label: "Decide",
    line: "Consulting on what to build.",
    color: "from-primary-400 to-primary-500",
  },
  {
    label: "Build",
    line: "Dedicated developers ship it.",
    color: "from-primary-500 to-primary-600",
  },
  {
    label: "Automate",
    line: "AI agents run the ops.",
    color: "from-primary-600 to-primary-700",
  },
  {
    label: "Grow",
    line: "AEO + GEO bring buyers.",
    color: "from-primary-700 to-primary-800",
  },
];

export default function HowWeFit() {
  return (
    <section className="section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 text-white relative overflow-hidden">
      {/* Glow */}
      <div aria-hidden className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-screen filter blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary-500/20 text-primary-200 text-sm font-semibold rounded-full mb-4 border border-primary-400/30">
            How the four fit together
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
            One journey. Four services. Zero handoffs.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-primary-100/90">
            Most agencies do one piece. We carry the whole arc.
          </p>
        </div>

        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* Connecting line on md+ */}
          <div
            aria-hidden
            className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary-400/60 via-primary-300/80 to-primary-400/60"
          />

          {stages.map((s, i) => (
            <div key={s.label} className="relative text-center">
              <div
                className={`relative z-10 mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-2xl font-extrabold text-white shadow-lg shadow-primary-500/40`}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-white">{s.label}</h3>
              <p className="mt-1.5 text-sm text-primary-100/80">{s.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
