import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Reveal, RevealItem, RevealStagger } from "@/components/interactive/reveal";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";
import { PRESS } from "@/lib/press";
import { CONTACT, SITE } from "@/lib/site";
import { ArrowUpRight, Mail, Newspaper } from "lucide-react";

const description =
  "Press coverage, media inquiries, and downloadable brand assets.";

export const metadata: Metadata = {
  title: "Press",
  description,
  alternates: { canonical: `${SITE.url}/press` },
  openGraph: {
    title: `Press — ${SITE.name}`,
    description,
    url: `${SITE.url}/press`,
    siteName: SITE.name,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `Press — ${SITE.name}`, description },
};

export default function PressPage() {
  const hasCoverage = PRESS.length > 0;

  return (
    <>
      <PageHero
        eyebrow="Press"
        title={<>Coverage, inquiries, brand assets.</>}
        intro="For interviews, comment, or coverage requests contact our press desk. Downloadable logos, executive photography and one-pagers are available on request."
        actions={
          <>
            <a href={`mailto:${CONTACT.emails.info}?subject=Press%20inquiry`}>
              <Button size="lg" variant="primary">
                Press inquiries <Mail className="h-4 w-4" />
              </Button>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm text-steel-100 backdrop-blur transition-colors hover:border-brand-red-500 hover:text-brand-red-300"
            >
              Media kit
            </Link>
          </>
        }
      />

      <Section
        eyebrow={hasCoverage ? "Coverage" : "Coverage log"}
        title={hasCoverage ? "Recent mentions." : "First mentions are on the way."}
        intro={
          hasCoverage
            ? "Selected recent press covering our lanes, growth, and industry commentary."
            : "This is a fresh site — press coverage will land here as it happens. If you'd like to be first, email the press desk above and we'll return coverage-ready quotes and photos."
        }
      >
        {hasCoverage ? (
          <RevealStagger className="space-y-4">
            {PRESS.map((p) => (
              <RevealItem key={p.url}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between gap-4 rounded-3xl border border-white/10 bg-ink-800/60 p-6 backdrop-blur transition-colors hover:border-brand-red-500/50 md:flex-row md:items-center md:p-8"
                >
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-brand-red-300">
                      {p.outlet} · {p.date}
                    </div>
                    <h3 className="mt-2 font-display text-xl text-steel-100 md:text-2xl">
                      {p.headline}
                    </h3>
                    {p.quote && (
                      <blockquote className="mt-3 max-w-2xl text-sm leading-relaxed text-steel-300">
                        &ldquo;{p.quote}&rdquo;
                      </blockquote>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm text-steel-200 transition-colors group-hover:text-brand-red-300">
                    Read <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
              </RevealItem>
            ))}
          </RevealStagger>
        ) : (
          <Reveal>
            <div className="flex flex-col items-center gap-6 rounded-3xl border border-dashed border-white/15 bg-white/[0.02] p-16 text-center">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-red-500/10 text-brand-red-300 ring-1 ring-inset ring-brand-red-500/20">
                <Newspaper className="h-6 w-6" />
              </div>
              <div className="max-w-md">
                <h3 className="font-display text-2xl text-steel-100">
                  Nothing to show yet — that&rsquo;s a good problem.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-400">
                  We&rsquo;re quietly running lanes. As coverage lands it will
                  appear here. To be first: reach the press desk.
                </p>
              </div>
              <a
                href={`mailto:${CONTACT.emails.info}?subject=Press%20inquiry`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-steel-100 transition-colors hover:border-brand-red-500 hover:text-brand-red-300"
              >
                <Mail className="h-4 w-4 text-brand-red-300" />
                {CONTACT.emails.info}
              </a>
            </div>
          </Reveal>
        )}
      </Section>

      <Section
        eyebrow="For journalists"
        title="What we can supply, on request."
      >
        <RevealStagger className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Executive comment",
              body: "Named on-record quotes on Central Asia freight, Afghan logistics, and cross-border trade corridors — usually within 24 hours.",
            },
            {
              title: "Brand assets",
              body: "Logo files (SVG + PNG, dark and light), executive headshots, and operations photography with print rights.",
            },
            {
              title: "Data & context",
              body: "Rate movement observations, corridor throughput ranges, seasonal capacity notes — under embargo where required.",
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
