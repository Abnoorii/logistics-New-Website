import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { TreatedImage } from "@/components/interactive/treated-image";
import { Section } from "@/components/ui/section";
import { RevealItem, RevealStagger } from "@/components/interactive/reveal";
import { CTA } from "@/components/sections/cta";
import { SCENARIOS } from "@/lib/scenarios";
import { SITE } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

const description =
  "Illustrative engagement patterns — how we approach e-commerce consolidation, industrial project cargo, and humanitarian cold-chain work.";

export const metadata: Metadata = {
  title: "How we work",
  description,
  alternates: { canonical: `${SITE.url}/scenarios` },
  openGraph: {
    title: `How we work — ${SITE.name}`,
    description,
    url: `${SITE.url}/scenarios`,
    siteName: SITE.name,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `How we work — ${SITE.name}`, description },
};

export default function ScenariosPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title={<>Three engagement patterns we run every week.</>}
        intro="Real customer names are held for privacy. What follows are the actual shapes of the work — the challenges we solve, the way we approach them, and the outcomes shippers can plan around."
      />

      <Section>
        <div className="mb-8 rounded-2xl border border-amber-400/30 bg-amber-400/[0.04] p-5 text-sm text-amber-100">
          <span className="font-medium text-amber-200">Illustrative.</span>{" "}
          These are representative engagement patterns — details are drawn from
          real work but generalized. Referenceable customer case studies are
          available on request under NDA.
        </div>

        <RevealStagger className="space-y-10">
          {SCENARIOS.map((s) => (
            <RevealItem key={s.slug}>
              <Link
                href={`/scenarios/${s.slug}`}
                className="group grid gap-8 overflow-hidden rounded-3xl border border-white/10 bg-ink-800/60 backdrop-blur transition-colors hover:border-amber-400/50 md:grid-cols-12"
              >
                <div className="relative md:col-span-5">
                  <TreatedImage
                    src={s.image}
                    alt={s.title}
                    aspect="aspect-[5/4] md:aspect-auto md:h-full"
                    focal="center 40%"
                    bordered={false}
                    className="!rounded-none md:!rounded-none"
                  />
                  <span className="absolute left-6 top-6 z-10 rounded-full border border-white/15 bg-ink-900/70 px-3 py-1 text-[10px] uppercase tracking-widest text-amber-300 backdrop-blur">
                    {s.category}
                  </span>
                </div>

                <div className="flex flex-col justify-between gap-6 p-8 md:col-span-7 md:p-10">
                  <div>
                    <h2 className="font-display text-2xl leading-snug text-steel-100 md:text-3xl">
                      {s.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-steel-300">
                      {s.summary}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
                    {s.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-[10px] uppercase tracking-widest text-steel-500">
                          {m.label}
                        </div>
                        <div className="mt-1 font-display text-lg text-amber-300 md:text-xl">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-2 text-sm text-steel-200 transition-colors group-hover:text-amber-300">
                    Read the full pattern <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      <Section
        eyebrow="Featured customer story"
        title="Are you our next case study?"
        intro="If we've moved cargo for you and you're open to being featured — logo, quote and quantified result — we'd love to publish your story. In return: bespoke assets, cross-linking, and a $500 credit on your next shipment."
      >
        <div className="rounded-3xl border border-amber-400/30 bg-amber-400/[0.06] p-8 md:p-10">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-display text-2xl text-steel-100">
                Nominate your company for a case study.
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-steel-300">
                One 30-minute interview, one round of copy review, and your
                logo appears on the page. All approvals stay with you.
              </p>
            </div>
            <a
              href="mailto:info@logistics.af?subject=Case%20study%20nomination"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-amber-500"
            >
              Volunteer your story
            </a>
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}
