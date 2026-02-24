import { siteMetadata } from "@/data/siteMetadata";

export default function ContactInfo() {
  const items = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      label: "Email",
      value: siteMetadata.email,
      href: `mailto:${siteMetadata.email}`,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      label: "Office",
      value: siteMetadata.address,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "Business Hours",
      value: "Mon - Fri: 9:00 AM - 6:00 PM EST",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-accent-50 rounded-xl p-6 border border-accent-100">
        <div className="flex items-center gap-3 mb-2">
          <svg className="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-heading font-semibold text-accent-700">
            We respond within an hour
          </span>
        </div>
        <p className="text-sm text-accent-600">
          Every inquiry is reviewed by our solutions team and routed to the right
          expert for your needs.
        </p>
      </div>

      <div className="space-y-5">
        {items.map((item) => (
          <div key={item.label} className="flex gap-4">
            <div className="text-primary-500 shrink-0 mt-0.5">
              {item.icon}
            </div>
            <div>
              <div className="text-sm font-medium text-slate-500">
                {item.label}
              </div>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-slate-900 hover:text-accent-600 transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <div className="text-slate-900">{item.value}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
