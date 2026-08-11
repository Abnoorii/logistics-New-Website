import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { TreatedImage } from "@/components/interactive/treated-image";
import { Section } from "@/components/ui/section";
import { Reveal, RevealItem, RevealStagger } from "@/components/interactive/reveal";
import { CTA } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { SCENARIOS, getScenario } from "@/lib/scenarios";
import { SITE } from "@/lib/site";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return SCENARIOS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sc = getScenario(slug);
  if (!sc) return { title: "Scenario not found" };
  const url = `${SITE.url}/scenarios/${sc.slug}`;
  return {
    title: sc.title,
    description: sc.summary,
    alternates: { canonical: url },
    openGraph: {
      title: `${sc.title} — ${SITE.name}`,
      description: sc.summary,
      url,
      siteName: SITE.name,
      type: "article",
      images: [{ url: sc.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${sc.title} — ${SITE.name}`,
      description: sc.summary,
      images: [sc.image],
    },
  };
}

export default async function ScenarioDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sc = getScenario(slug);
  if (!sc) notFound();

  return (
    <>
      <PageHero
        eyebrow={sc.category}
        title={sc.title}
        intro={sc.summary}
        actions={
          <>
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Bring us a similar move <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link
              href="/scenarios"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm text-steel-100 backdrop-blur transition-colors hover:border-amber-400 hover:text-amber-300"
            >
              All scenarios
            </Link>
          </>
        }
      />

      <Section>
        <Reveal>
          <TreatedImage
            src={sc.image}
            alt={sc.title}
            aspect="aspect-[21/9]"
            focal="center 40%"
            caption={`${sc.category} · Illustrative`}
            priority
            sizes="(min-width: 1024px) 1200px, 100vw"
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {sc.metrics.map((m) => (
            <Reveal key={m.label}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="text-[10px] uppercase tracking-widest text-steel-500">
                  {m.label}
                </div>
                <div className="mt-2 font-display text-3xl text-amber-300">
                  {m.value}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-3">
          <Block heading="Challenge" items={sc.challenge} tone="ink" />
          <Block heading="Approach" items={sc.approach} tone="amber" />
          <Block heading="Outcome" items={sc.outcome} tone="signal" />
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="rounded-2xl border border-amber-400/30 bg-amber-400/[0.04] p-6 text-sm text-amber-100">
            <span className="font-medium text-amber-200">Illustrative.</span>{" "}
            Details are drawn from real work but generalized. Referenceable
            customer case studies with names, numbers and contacts are available
            on request under NDA.
          </div>
        </Reveal>
      </Section>

      <CTA />
    </>
  );
}

function Block({
  heading,
  items,
  tone,
}: {
  heading: string;
  items: string[];
  tone: "ink" | "amber" | "signal";
}) {
  const accent =
    tone === "amber"
      ? "text-amber-300"
      : tone === "signal"
      ? "text-signal-400"
      : "text-steel-300";
  return (
    <div>
      <Reveal>
        <div className={`mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] ${accent}`}>
          <span className="h-1 w-6 bg-current" /> {heading}
        </div>
      </Reveal>
      <RevealStagger className="space-y-3">
        {items.map((t) => (
          <RevealItem key={t}>
            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${accent}`} />
              <span className="text-sm text-steel-200">{t}</span>
            </div>
          </RevealItem>
        ))}
      </RevealStagger>
    </div>
  );
}
