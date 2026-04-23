import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
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
  metadataBase: new URL("https://workforcenext.in"),
  title: {
    default: "Workforce Next | Hire Dedicated Remote Developers from India",
    template: "%s | Workforce Next",
  },
  description:
    "Hire dedicated AI developers, data engineers, frontend and backend engineers from India. Context-matched by SethAI for longevity. 48-hour matching, 1-week paid trial, zero recruitment fees.",
  keywords: [
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
    canonical: "https://workforcenext.in",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://workforcenext.in",
    siteName: "Workforce Next",
    title: "Workforce Next | Hire Dedicated Remote Developers from India",
    description:
      "Hire dedicated AI developers, data engineers, and product engineers from India. Context-matched by SethAI. 48-hour matching, zero recruitment fees.",
    images: [
      {
        url: "https://workforcenext.in/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Workforce Next - Your Remote Team. Built to Stay.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Workforce Next | Hire Dedicated Remote Developers from India",
    description:
      "Hire dedicated AI developers, data engineers, and product engineers from India. Context-matched by SethAI.",
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
      </head>
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
