import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Reveal, RevealItem, RevealStagger } from "@/components/interactive/reveal";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";
import { SITE } from "@/lib/site";
import { ArrowRight, Leaf, Truck, Users, ShieldCheck } from "lucide-react";

const description =
  "Our approach to sustainability, carbon transparency, and social impact — no greenwash.";

export const metadata: Metadata = {
  title: "Sustainability",
  description,
  alternates: { canonical: `${SITE.url}/sustainability` },
  openGraph: {
    title: `Sustainability — ${SITE.name}`,
    description,
    url: `${SITE.url}/sustainability`,
    siteName: SITE.name,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `Sustainability — ${SITE.name}`, description },
};

const PILLARS = [
  {
    icon: Leaf,
    title: "Carbon transparency",
    body:
      "We report tonne-km CO₂e for every shipment on request, using the GLEC framework. No offsets counted unless they're verifiable and audited.",
  },
  {
    icon: Truck,
    title: "Modal choice",
    body:
      "Where cost and calendar allow, we recommend the lower-emission mode — sea over air, road over air, rail where rail exists. Trade-offs are stated explicitly in the quote.",
  },
  {
    icon: Users,
    title: "Local employment",
    body:
      "Ops team, drivers, brokers and warehouse staff are hired locally. Above-market wages, formal employment, and safety training that meets or exceeds Afghan labour law.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical trade",
    body:
      "No sanctioned parties, no dual-use exports outside licensed channels, no cargo we can't trace to a legitimate origin. Every shipment is screened against relevant compliance lists.",
  },
];

const COMMITMENTS = [
  {
    year: "By 2027",
    note: "Publish annual carbon report covering 100% of movements on our 13 lanes.",
  },
  {
    year: "By 2028",
    note: "Fleet mix: 30% of Kabul metro dispatch on lower-emission drivetrains.",
  },
  {
    year: "By 2030",
    note: "Warehouse operations at or near net-zero on scope-1 + scope-2, verified.",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title={<>No greenwash. Just what we&rsquo;re doing.</>}
        intro="Freight is carbon-intensive by nature. We won't pretend otherwise. What follows is our actual approach — carbon transparency, modal honesty, local employment, and ethical trade compliance — with commitments we intend to be measured against."
        actions={
          <>
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Request our carbon report <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </>
        }
      />

      <Section
        eyebrow="Our four pillars"
        title="Where we focus."
      >
        <RevealStagger className="grid gap-6 md:grid-cols-2">
          {PILLARS.map((p) => (
            <RevealItem key={p.title}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-signal-500/15 text-signal-400 ring-1 ring-inset ring-signal-500/25">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl text-steel-100">
                  {p.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-steel-300">
                  {p.body}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      <Section
        eyebrow="Timelined commitments"
        title="What we&rsquo;re on the hook for."
      >
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2" />
          <RevealStagger className="space-y-10">
            {COMMITMENTS.map((c, i) => (
              <RevealItem key={c.year}>
                <div className={`relative flex ${i % 2 ? "md:flex-row-reverse" : ""}`}>
                  <div className="w-full pl-14 md:w-1/2 md:pl-0 md:pr-14">
                    <div
                      className={`rounded-2xl border border-white/10 bg-ink-800/60 p-6 backdrop-blur ${
                        i % 2 ? "md:ml-14" : "md:mr-14"
                      }`}
                    >
                      <div className="font-mono text-xs tracking-widest text-signal-400">
                        {c.year}
                      </div>
                      <div className="mt-2 text-base text-steel-100">{c.note}</div>
                    </div>
                  </div>
                  <span className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-signal-400 ring-4 ring-ink-950 md:left-1/2" />
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="rounded-2xl border border-brand-red-500/30 bg-brand-red-500/[0.04] p-6 text-sm text-brand-red-100">
            <span className="font-medium text-brand-red-200">In progress.</span>{" "}
            This page states our direction of travel. Formal reporting, third-
            party verification, and full baselines are being built — this page
            will update quarterly with progress against each commitment.
          </div>
        </Reveal>
      </Section>

      <CTA />
    </>
  );
}
