import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { RegionProvider } from "@/components/providers/region-provider";
import { HashHandler } from "@/components/interactive/hash-handler";
import { PageTransition } from "@/components/interactive/page-transition";
import { ImageFilters } from "@/components/interactive/image-filters";
import { Preloader } from "@/components/sections/preloader";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://logistics.af";
const siteName = "Logistics.af";
const siteDescription =
  "Global freight forwarding across air, ocean, road and rail — with the visibility, precision, and human care your cargo deserves.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Every leg of the journey`,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "freight forwarder",
    "logistics",
    "air freight",
    "ocean freight",
    "customs brokerage",
    "warehousing",
    "3PL",
    "Afghanistan logistics",
    "Kabul freight",
  ],
  authors: [{ name: siteName }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: `${siteName} — Every leg of the journey`,
    description: siteDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Every leg of the journey`,
    description: siteDescription,
  },
  alternates: { canonical: siteUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="bg-ink-950 text-steel-100 font-sans antialiased">
        <a href="#main" className="skip-link">Skip to content</a>
        <ImageFilters />
        <LenisProvider>
          <RegionProvider>
            <HashHandler />
            <Preloader />
            <Nav />
            <main id="main">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </RegionProvider>
        </LenisProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
