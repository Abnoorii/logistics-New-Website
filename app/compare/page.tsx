import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Reveal, RevealItem, RevealStagger } from "@/components/interactive/reveal";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";
import { SITE } from "@/lib/site";
import { ArrowRight, Check, X } from "lucide-react";

const description =
  "Straight comparison — how Logistics.af differs from a traditional freight forwarder on rates, visibility, brokerage and accountability.";

export const metadata: Metadata = {
  title: "Us vs. traditional forwarder",
  description,
  alternates: { canonical: `${SITE.url}/compare` },
  openGraph: {
    title: `Us vs. a traditional forwarder — ${SITE.name}`,
    description,
    url: `${SITE.url}/compare`,
    siteName: SITE.name,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `Us vs. a traditional forwarder — ${SITE.name}`, description },
};

type Row = {
  dimension: string;
  us: string;
  them: string;
  usPositive?: boolean;
};

const COMPARISON: Row[] = [
  {
    dimension: "Rate response time",
    us: "4 business hours on standard lanes",
    them: "1–5 business days, sometimes longer",
    usPositive: true,
  },
  {
    dimension: "Rate card",
    us: "Published, quarterly, per-lane",
    them: "On-request, opaque, changes without notice",
    usPositive: true,
  },
  {
    dimension: "Documentation & filing fees",
    us: "Included in the quote",
    them: "Line-itemed on the invoice",
    usPositive: true,
  },
  {
    dimension: "Customs brokerage",
    us: "In-house licensed at every named crossing",
    them: "Sub-contracted, opaque, dispute cycle",
    usPositive: true,
  },
  {
    dimension: "Visibility",
    us: "One dashboard, milestone alerts, photo POD",
    them: "Emailed status, PDF POD after the fact",
    usPositive: true,
  },
  {
    dimension: "Point of accountability",
    us: "Named ops lead through booking → POD",
    them: "Baton hand-offs between sales, ops, brokerage",
    usPositive: true,
  },
  {
    dimension: "After-hours support",
    us: "24/7 ops desk during active shipments",
    them: "Voicemail, next business day",
    usPositive: true,
  },
  {
    dimension: "Detention & demurrage",
    us: "Billed at carrier cost with photo evidence",
    them: "Marked up with unclear cause line",
    usPositive: true,
  },
  {
    dimension: "Project cargo",
    us: "Single project lead, single quote, single invoice",
    them: "Multiple sub-contracts, split accountability",
    usPositive: true,
  },
  {
    dimension: "Trade lane coverage",
    us: "13 named AF corridors, in-house at each crossing",
    them: "Global-flavoured, thin on Central Asia",
    usPositive: true,
  },
];

export default function ComparePage() {
  return (
    <>
      <PageHero
        eyebrow="Straight comparison"
        title={<>Us vs. a traditional freight forwarder.</>}
        intro="No corporate hedging. Here's exactly how we differ from the forwarders our customers switched away from — and where the honest trade-offs are."
        actions={
          <>
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Get a quote <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm text-steel-100 backdrop-blur transition-colors hover:border-brand-red-500 hover:text-brand-red-300"
            >
              See rate card
            </Link>
          </>
        }
      />

      <Section>
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-ink-800/40 backdrop-blur">
            <div className="grid grid-cols-12 gap-4 border-b border-white/5 px-4 py-4 text-[10px] uppercase tracking-widest text-steel-500 md:px-8">
              <div className="col-span-4 md:col-span-3">Dimension</div>
              <div className="col-span-4 flex items-center gap-2 text-brand-red-300 md:col-span-5">
                <span className="h-1 w-4 bg-brand-red-500" /> Logistics.af
              </div>
              <div className="col-span-4">Traditional forwarder</div>
            </div>
            <RevealStagger>
              {COMPARISON.map((r) => (
                <RevealItem key={r.dimension}>
                  <div className="grid grid-cols-12 items-start gap-4 border-b border-white/5 px-4 py-5 last:border-b-0 md:px-8 md:py-6">
                    <div className="col-span-4 text-sm text-steel-200 md:col-span-3">
                      {r.dimension}
                    </div>
                    <div className="col-span-4 flex items-start gap-2 text-sm text-steel-100 md:col-span-5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal-400" />
                      <span>{r.us}</span>
                    </div>
                    <div className="col-span-4 flex items-start gap-2 text-sm text-steel-400">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-steel-500" />
                      <span>{r.them}</span>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </Reveal>
      </Section>

      <Section
        eyebrow="Honest trade-offs"
        title="Where we&rsquo;re not the best fit."
        intro="No forwarder wins every deal. Here's when you should probably pick someone else."
      >
        <RevealStagger className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Extreme low-volume, one-off shipments",
              body:
                "For a single sub-1-CBM box you're moving once, a courier (DHL, FedEx) is faster and cheaper. We're built for repeat volume.",
            },
            {
              title: "US-domestic 3PL only",
              body:
                "If your entire supply chain is US warehousing + last-mile with no international movement, a US-native 3PL will out-serve us.",
            },
            {
              title: "Trans-Atlantic without AF touchpoints",
              body:
                "London ↔ New York, no Central Asia leg? Go direct — our value is Afghanistan-in and Afghanistan-out, not third-country transits we don't touch.",
            },
          ].map((t) => (
            <RevealItem key={t.title}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <h3 className="font-display text-lg text-steel-100">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-300">
                  {t.body}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      <CTA />
    </>
  );
}
