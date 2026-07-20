import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/ui/ThemeProvider";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/lib/jsonLd";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wfnext.com"),
  title: {
    default: "Hire Remote Dedicated Developers from India | Workforce Next",
    template: "%s | Workforce Next",
  },
  description:
    "Hire dedicated AI, data, frontend and backend developers from India. Context-matched by SethAI. 48-hour matching, 1-week paid trial, zero recruitment fees.",
  keywords: [
    "hire remote dedicated developers",
    "hire dedicated developers India",
    "remote engineering team India",
    "hire AI developers",
    "SethAI recruiter",
    "staff augmentation India",
    "offshore development team",
    "hire product engineers",
    "vibe coding engineer",
    "context-first developer matching",
    "dedicated development team",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://wfnext.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wfnext.com",
    siteName: "Workforce Next",
    title: "Hire Remote Dedicated Developers from India | Workforce Next",
    description:
      "Hire dedicated AI, data, frontend and backend developers from India. Context-matched by SethAI. 48-hour matching, zero recruitment fees.",
    images: [
      {
        url: "https://wfnext.com/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Workforce Next - Your Remote Team. Built to Stay.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Remote Dedicated Developers from India | Workforce Next",
    description:
      "Hire dedicated AI, data, frontend and backend developers from India. Context-matched by SethAI.",
    images: ["https://wfnext.com/images/og-default.png"],
  },
};

const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebSiteSchema()),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
o.onload=function(){window.trackingFunctions.onLoad({appId:"6a2fd79d4dd603000c654d7f"})},
document.head.appendChild(o)}initApollo();`,
          }}
        />
      </head>
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NBV8ESR2JJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NBV8ESR2JJ');
          `}
        </Script>
      </body>
    </html>
  );
}
