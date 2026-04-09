import { siteMetadata } from "@/data/siteMetadata";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="bg-primary-50 dark:bg-primary-500/10 rounded-xl p-6 border border-primary-100 dark:border-primary-500/20">
        <div className="flex items-center gap-3 mb-2">
          <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-bold text-primary-700 dark:text-primary-400">
            We respond within an hour
          </span>
        </div>
        <p className="text-sm text-primary-600 dark:text-primary-300">
          Every inquiry is reviewed by our team and routed to the right
          person for your needs.
        </p>
      </div>

      <div className="space-y-5">
        {/* Email */}
        <div className="flex gap-4">
          <div className="text-primary-500 shrink-0 mt-0.5">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-medium text-dark-400 dark:text-dark-400">Email</div>
            <a
              href={`mailto:${siteMetadata.email}`}
              className="text-dark-900 dark:text-dark-100 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              {siteMetadata.email}
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex gap-4">
          <div className="text-primary-500 shrink-0 mt-0.5">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-medium text-dark-400 dark:text-dark-400">Phone</div>
            <a
              href={`tel:${siteMetadata.phone}`}
              className="text-dark-900 dark:text-dark-100 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              {siteMetadata.phone}
            </a>
          </div>
        </div>

        {/* Office */}
        <div className="flex gap-4">
          <div className="text-primary-500 shrink-0 mt-0.5">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-medium text-dark-400 dark:text-dark-400">Office</div>
            <div className="text-dark-900 dark:text-dark-100">{siteMetadata.address}</div>
            <div className="text-sm text-dark-400 dark:text-dark-300 mt-1">
              Tech Office: {siteMetadata.techOffice}
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="flex gap-4">
          <div className="text-primary-500 shrink-0 mt-0.5">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-medium text-dark-400 dark:text-dark-400">Business Hours</div>
            <div className="text-dark-900 dark:text-dark-100">Mon - Fri: 9:00 AM - 6:00 PM IST</div>
          </div>
        </div>
      </div>
    </div>
  );
}
