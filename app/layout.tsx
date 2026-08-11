import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { Cursor } from "@/components/interactive/cursor";
import { Preloader } from "@/components/sections/preloader";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";

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

export const metadata: Metadata = {
  title: "Meridian Freight — Every leg of the journey",
  description:
    "Global freight forwarding across air, ocean, road and rail — with the visibility, precision, and human care your cargo deserves.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="bg-ink-950 text-steel-100 font-sans antialiased">
        <LenisProvider>
          <Preloader />
          <Cursor />
          <Nav />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
