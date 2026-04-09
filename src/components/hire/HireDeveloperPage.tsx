import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { HirePageData } from "@/data/hireDevelopers";

const painPointIcons = {
  clock: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  money: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>
  ),
  quality: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  ),
  scale: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  ),
};

export default function HireDeveloperPage({ data }: { data: HirePageData }) {
  return (
    <>
      {/* Hero */}
      <section className="gradient-dark pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Badge variant="white" className="mb-6">
              {data.badge}
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
              {data.title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed">
              {data.heroDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="white" size="lg">
                Submit Your Requirement
              </Button>
              <Button href="#how-it-works" variant="ghost" size="lg">
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
              Sound Familiar?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              These are the problems we hear from teams every week. If any of
              these hit close to home, we can help.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.painPoints.map((point) => (
              <div
                key={point.title}
                className="bg-white rounded-xl p-8 border border-slate-200 hover:border-accent-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-red-50 text-red-500 flex items-center justify-center mb-4">
                  {painPointIcons[point.icon]}
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4">WHY WORKFORCE NEXT</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
              We Solve Every One of Those Problems
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.whyUs.map((item, i) => (
              <div key={item.title} className="flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center font-heading font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
              Technologies We Cover
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Our developers are experts across the modern tech stack.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {data.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:border-accent-300 hover:text-accent-600 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="how-it-works" className="section-padding bg-white scroll-mt-20">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4">HOW IT WORKS</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
              From Requirement to Developer in 48 Hours
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.process.map((step) => (
              <div key={step.step} className="relative">
                <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-heading font-bold text-lg mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-heading font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary py-16 md:py-24">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            {data.ctaTitle}
          </h2>
          <p className="mt-4 text-lg text-primary-200 max-w-2xl mx-auto">
            {data.ctaDescription}
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="white" size="lg">
              Submit Your Requirement
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
