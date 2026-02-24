export default function ClientLogos() {
  const clients = [
    "TechCorp", "Meridian", "NexGen", "Apex", "Pinnacle", "Quantum",
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-100">
      <div className="container-custom">
        <p className="text-center text-sm font-medium text-slate-500 mb-8 uppercase tracking-wider">
          Trusted by 150+ enterprise teams worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {clients.map((client) => (
            <div
              key={client}
              className="text-2xl font-heading font-bold text-slate-300 hover:text-slate-400 transition-colors select-none"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
