export default function PainPointsBanner() {
  const painPoints = [
    {
      stat: "95%",
      text: "of enterprise AI projects fail to show ROI within 6 months.",
      highlight: "Our clients see returns in 90 days.",
    },
    {
      stat: "48%",
      text: "of organizations cite data searchability as their #1 AI challenge.",
      highlight: "We fix data architecture first.",
    },
    {
      stat: "82%",
      text: "of enterprise IoT programs demand real-time analytics.",
      highlight: "CloudIQ delivers sub-second insights.",
    },
  ];

  return (
    <section className="gradient-dark py-16 md:py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {painPoints.map((point, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent-400">
                {point.stat}
              </div>
              <p className="mt-3 text-slate-400 leading-relaxed">
                {point.text}
              </p>
              <p className="mt-1 text-white font-semibold">{point.highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
