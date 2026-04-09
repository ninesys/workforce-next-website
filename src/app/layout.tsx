import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
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
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://workforcenext.in"),
  title: {
    default: "Workforce Next | Your Remote Team. Built to Stay.",
    template: "%s | Workforce Next",
  },
  description:
    "Workforce Next builds dedicated AI-era remote engineering teams for founders, funded startups, and enterprises . Matched for longevity by SethAI, our AI recruiter, and retained by design.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Workforce Next",
    images: [
      {
        url: "https://workforcenext.in/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Workforce Next - Your Remote Team. Built to Stay.",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

// Inline script to prevent flash of wrong theme
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
      </body>
    </html>
  );
}
