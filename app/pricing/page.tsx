import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Reveal, RevealItem, RevealStagger } from "@/components/interactive/reveal";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";
import { SITE } from "@/lib/site";
import { IMAGES } from "@/lib/images";
import { TreatedImage } from "@/components/interactive/treated-image";
import { ArrowRight, CheckCircle2, HelpCircle } from "lucide-react";

const description =
  "Straight talk on freight rates. What we bake in, what varies, and how to get an actual quote in four business hours.";

export const metadata: Metadata = {
  title: "Pricing",
  description,
  alternates: { canonical: `${SITE.url}/pricing` },
  openGraph: {
    title: `Pricing — ${SITE.name}`,
    description,
    url: `${SITE.url}/pricing`,
    siteName: SITE.name,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `Pricing — ${SITE.name}`, description },
};

type Lane = {
  origin: string;
  destination: string;
  mode: string;
  spec: string;
  rate: string;
  eta: string;
};

const SAMPLE_LANES: Lane[] = [
  {
    origin: "Shanghai, CN",
    destination: "Kabul, AF",
    mode: "Ocean + Road",
    spec: "40′ HC · FCL · door-to-door",
    rate: "from USD 4,850",
    eta: "28–34 days",
  },
  {
    origin: "Istanbul, TR",
    destination: "Kabul, AF",
    mode: "Air",
    spec: "500 kg · general cargo",
    rate: "from USD 3.20 / kg",
    eta: "3–5 days",
  },
  {
    origin: "Dubai, AE",
    destination: "Kabul, AF",
    mode: "Road",
    spec: "20 t · reefer or dry",
    rate: "from USD 2,900",
    eta: "5–8 days",
  },
  {
    origin: "Delhi, IN",
    destination: "Kabul, AF",
    mode: "Air",
    spec: "1 CBM · pharma cold chain",
    rate: "from USD 420",
    eta: "2–4 days",
  },
  {
    origin: "Kabul, AF",
    destination: "Riyadh, SA",
    mode: "Air",
    spec: "200 kg · high-value export",
    rate: "from USD 3.80 / kg",
    eta: "3–5 days",
  },
  {
    origin: "Almaty, KZ",
    destination: "Kabul, AF",
    mode: "Road",
    spec: "24 t · dry general cargo",
    rate: "from USD 3,600",
    eta: "8–11 days",
  },
];

const INCLUDED = [
  "Documentation (B/L, AWB, packing list, invoice review)",
  "ISF, AMS, ENS filings where applicable",
  "Origin CFS handling & consolidation",
  "Customs clearance both ends (licensed brokers)",
  "Real-time milestone tracking dashboard",
  "Named ops lead reachable in your time zone",
];

const VARIABLES = [
  { label: "Season & capacity", note: "Rates move with vessel space and peak windows." },
  { label: "Fuel & bunker surcharges", note: "Passed through at cost, itemised on invoice." },
  { label: "Detention & demurrage", note: "At carrier tariff, billed with photo evidence." },
  { label: "Insurance", note: "0.35–0.75% of declared value, optional add-on." },
  { label: "Special handling", note: "Refrigeration, DG, hazardous, oversize — quoted lane-by-lane." },
  { label: "Government fees", note: "Duties, VAT, permits — vary by commodity and route." },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={<>Straight rates. Nothing you didn&rsquo;t agree to.</>}
        intro="Freight pricing shouldn't need a decoder ring. Here's how we quote, what's included, and what actually moves the number. Real rate cards are lane-specific — request a quote for firm numbers."
        actions={
          <>
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Request a firm quote <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm text-steel-100 backdrop-blur transition-colors hover:border-brand-red-500 hover:text-brand-red-300"
            >
              See services
            </Link>
          </>
        }
      />

      <section className="container -mt-4 mb-6">
        <Reveal>
          <TreatedImage
            src={IMAGES.pricingBorder.src}
            alt={IMAGES.pricingBorder.alt}
            focal={IMAGES.pricingBorder.focal}
            aspect="aspect-[21/8]"
            caption="Every quote is lane-specific"
            sizes="(min-width: 1024px) 1200px, 100vw"
          />
        </Reveal>
      </section>

      <Section
        eyebrow="Indicative rates"
        title="Sample lanes we run every week."
        intro="Ballpark numbers, current at time of publication. Firm quotes require lane, ship-by date, dims and commodity — reply time on standard lanes is four business hours."
      >
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-ink-800/40 backdrop-blur">
          <div className="grid grid-cols-12 gap-4 border-b border-white/5 px-6 py-4 text-[10px] uppercase tracking-widest text-steel-500 md:px-8">
            <div className="col-span-4">Lane</div>
            <div className="col-span-2 hidden md:block">Mode</div>
            <div className="col-span-3 hidden md:block">Spec</div>
            <div className="col-span-4 text-right md:col-span-2 md:text-left">Rate</div>
            <div className="col-span-4 text-right md:col-span-1">ETA</div>
          </div>
          <RevealStagger>
            {SAMPLE_LANES.map((l) => (
              <RevealItem key={`${l.origin}-${l.destination}-${l.mode}`}>
                <div className="grid grid-cols-12 items-center gap-4 border-b border-white/5 px-6 py-6 text-sm text-steel-100 last:border-b-0 hover:bg-white/[0.02] md:px-8">
                  <div className="col-span-4">
                    <div className="font-display text-base">
                      {l.origin} <span className="text-steel-400">→</span> {l.destination}
                    </div>
                    <div className="mt-1 text-xs text-steel-400 md:hidden">
                      {l.mode} · {l.spec}
                    </div>
                  </div>
                  <div className="col-span-2 hidden text-steel-300 md:block">{l.mode}</div>
                  <div className="col-span-3 hidden text-steel-300 md:block">{l.spec}</div>
                  <div className="col-span-4 text-right font-mono text-brand-red-300 md:col-span-2 md:text-left">
                    {l.rate}
                  </div>
                  <div className="col-span-4 text-right text-steel-300 md:col-span-1">{l.eta}</div>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>

        <Reveal>
          <p className="mt-6 flex items-center gap-2 text-xs text-steel-500">
            <HelpCircle className="h-3.5 w-3.5" />
            Illustrative rates. Firm quotes are lane-, date- and commodity-specific.
          </p>
        </Reveal>
      </Section>

      <Section
        eyebrow="What&rsquo;s included"
        title="Every rate we quote already covers this."
        intro="No hidden line items on the invoice. If we didn&rsquo;t discuss it up front, we don&rsquo;t bill for it."
      >
        <RevealStagger className="grid gap-4 sm:grid-cols-2">
          {INCLUDED.map((i) => (
            <RevealItem key={i}>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-signal-400" />
                <span className="text-sm text-steel-200">{i}</span>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      <Section
        eyebrow="What moves the number"
        title="Six things that change the final quote."
      >
        <RevealStagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {VARIABLES.map((v) => (
            <RevealItem key={v.label}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="text-sm font-medium text-brand-red-300">{v.label}</div>
                <div className="mt-2 text-sm leading-relaxed text-steel-300">
                  {v.note}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      <CTA />
    </>
  );
}
