import Link from "next/link";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

const serviceCards = [
  {
    href: "/services/ai-agents",
    icon: (
      <svg className="w-10 h-10 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "AI Agents",
    description:
      "Custom-built, governed AI agents that integrate with your systems and deliver measurable ROI. From single agents to multi-agent orchestration.",
  },
  {
    href: "/services/automation",
    icon: (
      <svg className="w-10 h-10 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: "Workflow Automation",
    description:
      "End-to-end process automation that connects your entire tech stack. Eliminate manual handoffs and reduce processing time by 70%.",
  },
  {
    href: "/services/iot",
    icon: (
      <svg className="w-10 h-10 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: "IoT - CloudIQ",
    description:
      "Vendor-agnostic IoT cloud platform with real-time analytics, edge computing, and enterprise security. Scales from pilot to production.",
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Solutions That Drive Real Results"
          subtitle="Three core capabilities. One goal: transform your operations with measurable, sustainable impact."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {serviceCards.map((service) => (
            <Link key={service.href} href={service.href} className="group">
              <Card className="h-full group-hover:border-accent-200">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-heading font-semibold text-slate-900 group-hover:text-accent-600 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 text-accent-500 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
