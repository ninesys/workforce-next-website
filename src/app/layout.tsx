import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/jsonLd";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://workforcenext.in"),
  title: {
    default: "Workforce Next | AI Automation Services, Agentic AI & IoT Cloud Platform",
    template: "%s | Workforce Next",
  },
  description:
    "Enterprise AI automation services, agentic AI solutions, workflow automation, and IoT cloud platform. 150+ enterprises trust Workforce Next to transform operations with measurable ROI.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Workforce Next",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
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
      <body className={`${geistSans.variable} ${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
