import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Counter } from "@/components/interactive/counter";
import { Reveal, RevealItem, RevealStagger } from "@/components/interactive/reveal";
import { CTA } from "@/components/sections/cta";
import { COUNTRIES } from "@/lib/countries";
import { SITE } from "@/lib/site";

const description =
  "Meet the team moving cargo across air, ocean, road and rail. Owned hubs in Kabul, Auckland, Shanghai, LA, Hamburg and London.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: `${SITE.url}/about` },
  openGraph: {
    title: `About — ${SITE.name}`,
    description,
    url: `${SITE.url}/about`,
    siteName: SITE.name,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `About — ${SITE.name}`, description },
};

const VALUES = [
  {
    title: "Own the outcome",
    body: "The team that quotes it, moves it. No handoffs between the sales desk and the ops desk.",
  },
  {
    title: "One dashboard, one truth",
    body: "Every stakeholder — you, us, the carrier — sees the same milestones. No parallel spreadsheets.",
  },
  {
    title: "Call before the email",
    body: "When something changes on your shipment, you hear from us before the alert lands in your inbox.",
  },
  {
    title: "No junk fees",
    body: "Published rate cards. Documentation, ISF, AMS, standard filings — always included, never surprises.",
  },
];

const TIMELINE = [
  { year: "2018", note: "Logistics.af founded in Kabul with a single air-freight desk." },
  { year: "2020", note: "Opened Shanghai and Auckland offices; ocean freight goes live." },
  { year: "2022", note: "Hamburg and Los Angeles hubs open; 3PL launches out of Kabul." },
  { year: "2024", note: "London opens. Project cargo team stands up." },
  { year: "2026", note: "42 active lanes, 98.2% on-time, 2,500+ shipments a month." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Logistics.af"
        title={<>Built by operators. Run for shippers.</>}
        intro="We started in 2018 with a single air-freight desk in Kabul and a working theory: forwarders overpromise and underexplain. Eight years later, we're a 220-person team with owned hubs across three continents and a rebook rate our competitors keep asking about."
      />

      <section className="container -mt-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-800">
            <Image
              src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=2000&q=75"
              alt="Container yard at dusk"
              width={2000}
              height={1000}
              priority
              className="h-[280px] w-full object-cover opacity-80 md:h-[420px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-6 text-center text-[10px] uppercase tracking-widest text-steel-500">
              Placeholder photography · replace with owned assets pre-launch
            </div>
          </div>
        </Reveal>
      </section>

      <Section>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <div className="mb-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-400">
                <span className="h-1 w-6 bg-amber-400" /> The bet
              </div>
            </Reveal>
            <Reveal>
              <h2 className="font-display text-display-3 text-balance">
                The industry rewards obscurity. We&apos;re betting on the opposite.
              </h2>
            </Reveal>
            <Reveal>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-steel-300 text-pretty">
                Most forwarders make money on ambiguity — soft ETAs, hidden
                surcharges, PDFs that arrive after the fact. We think shippers
                pay more for a plain rate card, a single dashboard, and one
                phone call than for the &quot;great relationship&quot; every
                forwarder claims to offer.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Stat n={220} suffix="+" label="People, globally" />
            <Stat n={2500} suffix="+" label="Shipments a month" />
            <Stat n={98.2} suffix="%" label="On-time delivery" decimals={1} />
            <Stat n={42} suffix="" label="Active trade lanes" />
          </div>
        </div>
      </Section>

      <Section
        eyebrow="How we work"
        title="Four commitments that show up on every shipment."
      >
        <RevealStagger className="grid gap-6 md:grid-cols-2">
          {VALUES.map((v) => (
            <RevealItem key={v.title}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur">
                <h3 className="font-display text-2xl text-steel-100">
                  {v.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-steel-300">
                  {v.body}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      <Section
        eyebrow="Trajectory"
        title="Where we&rsquo;ve been. Where we&rsquo;re headed."
      >
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2" />
          <RevealStagger className="space-y-10">
            {TIMELINE.map((t, i) => (
              <RevealItem key={t.year}>
                <div className={`relative flex ${i % 2 ? "md:flex-row-reverse" : ""}`}>
                  <div className="w-full pl-14 md:w-1/2 md:pl-0 md:pr-14">
                    <div
                      className={`rounded-2xl border border-white/10 bg-ink-800/60 p-6 backdrop-blur ${
                        i % 2 ? "md:ml-14" : "md:mr-14"
                      }`}
                    >
                      <div className="font-mono text-xs tracking-widest text-amber-400">
                        {t.year}
                      </div>
                      <div className="mt-2 text-base text-steel-100">{t.note}</div>
                    </div>
                  </div>
                  <span className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-amber-400 ring-4 ring-ink-950 md:left-1/2" />
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </Section>

      <Section
        eyebrow="Global footprint"
        title="Where we operate."
        intro="Owned offices across nine countries, backed by trusted agents at every other origin and destination we touch."
      >
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {COUNTRIES.map((c) => (
            <div
              key={c.code}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-amber-400/40"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{c.flag}</span>
                <div>
                  <div className="text-base text-steel-100">{c.name}</div>
                  <div className="text-xs text-steel-400">{c.hub}</div>
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-steel-500">
                {c.code}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}

function Stat({
  n,
  suffix,
  label,
  decimals = 0,
}: {
  n: number;
  suffix: string;
  label: string;
  decimals?: number;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
      <div className="font-display text-4xl text-steel-100 md:text-5xl">
        <Counter to={n} suffix={suffix} decimals={decimals} />
      </div>
      <div className="mt-3 text-sm text-steel-400">{label}</div>
    </div>
  );
}
