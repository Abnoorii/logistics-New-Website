import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Counter } from "@/components/interactive/counter";
import { Reveal, RevealItem, RevealStagger } from "@/components/interactive/reveal";
import { TreatedImage } from "@/components/interactive/treated-image";
import { CTA } from "@/components/sections/cta";
import { COUNTRIES } from "@/lib/countries";
import { SITE } from "@/lib/site";
import { IMAGES } from "@/lib/images";

const description =
  "Afghanistan-based freight forwarder moving import and export shipments between Afghanistan and its 13 principal trading partners across Central Asia, South Asia, the Middle East, China and Russia.";

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
  { year: "2011", note: "Logistics.af founded in Kabul with a single air-freight desk." },
  { year: "2014", note: "Torkham and Chaman road corridors go live — Pakistan lanes at scale." },
  { year: "2017", note: "Iran corridor added (Islam Qala) and 3PL warehousing launches in Kabul." },
  { year: "2020", note: "Central Asia expansion — Uzbekistan, Turkmenistan and Tajikistan corridors named." },
  { year: "2023", note: "Project cargo team stands up; air freight scaling out of KBL, DXB, IST, DEL." },
  { year: "2026", note: "13 trade partner markets, 6 named border corridors, 1000+ shipments delivered." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Logistics.af"
        title={<>Built by operators. Run for shippers.</>}
        intro="We started in 2011 with a single air-freight desk in Kabul and a working theory: forwarders overpromise and underexplain. Fifteen years and 1000+ shipments later, we run 13 named trade lanes into and out of Afghanistan — with a rebook rate our competitors keep asking about."
      />

      <section className="container -mt-4">
        <Reveal>
          <TreatedImage
            src={IMAGES.aboutHero.src}
            alt={IMAGES.aboutHero.alt}
            focal={IMAGES.aboutHero.focal}
            aspect="aspect-[21/9]"
            caption="Placeholder · swap for owned photography"
            priority
            sizes="(min-width: 1024px) 1200px, 100vw"
          />
        </Reveal>
      </section>

      <Section>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <div className="mb-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-red-500">
                <span className="h-1 w-6 bg-brand-red-500" /> The bet
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
            <Stat n={1000} suffix="+" label="Shipments delivered" />
            <Stat n={13} suffix="" label="Trade partner markets" />
            <Stat n={15} suffix="+ yrs" label="Since 2011" />
            <Stat n={5} suffix="" label="Regions served" />
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

      <section className="container">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-5 md:gap-8">
            <div className="md:col-span-3">
              <TreatedImage
                src={IMAGES.aboutTeam.src}
                alt={IMAGES.aboutTeam.alt}
                focal={IMAGES.aboutTeam.focal}
                aspect="aspect-[16/10]"
                sizes="(min-width: 768px) 60vw, 100vw"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 md:col-span-2">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-red-500">
                <span className="h-1 w-6 bg-brand-red-500" /> The team
              </div>
              <h3 className="font-display text-2xl text-steel-100 md:text-3xl">
                Operators, brokers, drivers and desk leads — across 13 trade partner markets.
              </h3>
              <p className="text-base leading-relaxed text-steel-300">
                Named account leads reachable in your time zone, in-house
                licensed brokers on both ends of every lane, and a 24/7 ops
                desk during active shipments.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

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
                      <div className="font-mono text-xs tracking-widest text-brand-red-500">
                        {t.year}
                      </div>
                      <div className="mt-2 text-base text-steel-100">{t.note}</div>
                    </div>
                  </div>
                  <span className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-red-500 ring-4 ring-ink-950 md:left-1/2" />
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </Section>

      <Section
        eyebrow="Trade lanes"
        title="Where we move cargo."
        intro="Afghanistan-based, 13 principal trade partners across five regions. Each corridor has a named lane lead, licensed brokers and long-standing carrier relationships."
      >
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {COUNTRIES.map((c) => (
            <div
              key={c.code}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-brand-red-500/40"
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
