import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Reveal, RevealItem, RevealStagger } from "@/components/interactive/reveal";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";
import { SERVICES, getService } from "@/lib/services";
import { SITE } from "@/lib/site";
import { IMAGES, type ImageKey } from "@/lib/images";
import { TreatedImage } from "@/components/interactive/treated-image";
import { Reveal as RevealClient } from "@/components/interactive/reveal";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

const HERO_BY_SLUG: Record<string, ImageKey> = {
  "air-freight": "serviceAir",
  "ocean-freight": "serviceOcean",
  "customs-brokerage": "serviceCustoms",
  "warehousing-3pl": "serviceWarehouse",
  "project-cargo": "serviceProject",
  "domestic-transport": "serviceDomestic",
};

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) return { title: "Service not found" };
  const url = `${SITE.url}/services/${svc.slug}`;
  return {
    title: svc.title,
    description: svc.desc,
    alternates: { canonical: url },
    openGraph: {
      title: `${svc.title} — ${SITE.name}`,
      description: svc.desc,
      url,
      siteName: SITE.name,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${svc.title} — ${SITE.name}`,
      description: svc.desc,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) notFound();
  const Icon = svc.icon;
  const others = SERVICES.filter((s) => s.slug !== svc.slug);
  const heroKey = HERO_BY_SLUG[svc.slug];
  const heroImage = heroKey ? IMAGES[heroKey] : null;

  return (
    <>
      <PageHero
        eyebrow={svc.tag}
        title={svc.title}
        intro={svc.intro}
        actions={
          <>
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Get a quote <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm text-steel-100 backdrop-blur transition-colors hover:border-brand-red-500 hover:text-brand-red-300"
            >
              All services
            </Link>
          </>
        }
      />

      {heroImage && (
        <section className="container -mt-4 mb-6">
          <RevealClient>
            <TreatedImage
              src={heroImage.src}
              alt={heroImage.alt}
              focal={heroImage.focal}
              aspect="aspect-[21/9]"
              caption={`${svc.tag} · Illustrative`}
              priority
              sizes="(min-width: 1024px) 1200px, 100vw"
            />
          </RevealClient>
        </section>
      )}

      <Section>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="font-display text-display-3 text-balance">
                What it looks like when we&apos;re running the lane.
              </h2>
            </Reveal>
            <RevealStagger className="mt-12 space-y-6">
              {svc.highlights.map((h) => (
                <RevealItem key={h.label}>
                  <div className="flex gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-signal-400" />
                    <div>
                      <h3 className="font-display text-xl text-steel-100">
                        {h.label}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-steel-300">
                        {h.body}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>

          <div className="lg:col-span-4">
            <Reveal>
              <div className="sticky top-32 space-y-6">
                <div className="rounded-3xl border border-brand-red-500/30 bg-brand-red-500/[0.04] p-6">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-red-500/20 text-brand-red-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="mt-6 font-display text-lg text-steel-100">
                    Named lanes we run
                  </h4>
                  <ul className="mt-4 space-y-3 text-sm text-steel-300">
                    {svc.lanes.map((l) => (
                      <li key={l} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-red-500" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                  <h4 className="font-display text-lg text-steel-100">
                    Standard SLA
                  </h4>
                  <ul className="mt-4 space-y-2 text-sm text-steel-300">
                    <li>Rate response: 4 business hrs</li>
                    <li>On-time to milestone: SLA per lane</li>
                    <li>Named ops lead: 24/7</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Also part of the same team"
        title="Other services you may need."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {others.slice(0, 3).map((s) => {
            const OtherIcon = s.icon;
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-3xl border border-white/10 bg-ink-800/60 p-8 backdrop-blur transition-colors hover:border-brand-red-500/50"
              >
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-brand-red-500/10 text-brand-red-300 ring-1 ring-inset ring-brand-red-500/20">
                  <OtherIcon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl text-steel-100">{s.title}</h3>
                <p className="mt-3 text-sm text-steel-300">{s.desc}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-xs text-brand-red-300">
                  Explore <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      <CTA />
    </>
  );
}
