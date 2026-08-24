import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import {
  Reveal,
  RevealItem,
  RevealStagger,
} from "@/components/interactive/reveal";
import { CTA } from "@/components/sections/cta";
import { SITE } from "@/lib/site";
import {
  CATEGORIES,
  formatDate,
  getAllPosts,
  getCategory,
} from "@/lib/insights";
import { ArrowUpRight, Clock, FileText } from "lucide-react";

const description =
  "Playbooks, market reads, and compliance walk-throughs from the desks at Logistics.af — written for shippers moving cargo across Central and South Asia.";

export const metadata: Metadata = {
  title: "Insights",
  description,
  alternates: { canonical: `${SITE.url}/insights` },
  openGraph: {
    title: `Insights — ${SITE.name}`,
    description,
    url: `${SITE.url}/insights`,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Insights — ${SITE.name}`,
    description,
  },
};

export default function InsightsIndexPage() {
  const posts = getAllPosts();
  const [feature, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={<>Notes from the desks.</>}
        intro="Playbooks for the corridors we run, quarterly reads on capacity and rates, and compliance walk-throughs — written by the ops team, for the shippers we work with."
      />

      {posts.length === 0 ? (
        <Section>
          <Reveal>
            <div className="flex flex-col items-center gap-6 rounded-3xl border border-dashed border-white/15 bg-white/[0.02] p-16 text-center">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-red-500/10 text-brand-red-300 ring-1 ring-inset ring-brand-red-500/20">
                <FileText className="h-6 w-6" />
              </div>
              <div className="max-w-md">
                <h3 className="font-display text-2xl text-steel-100">
                  First posts are on the way.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-400">
                  We&rsquo;re writing them between shipments. Check back shortly.
                </p>
              </div>
            </div>
          </Reveal>
        </Section>
      ) : (
        <>
          {feature && (
            <Section>
              <Reveal>
                <Link
                  href={`/insights/${feature.slug}`}
                  className="group grid gap-8 rounded-3xl border border-white/10 bg-ink-800/60 p-6 backdrop-blur transition-colors hover:border-brand-red-500/50 md:grid-cols-[1.1fr,1fr] md:p-10"
                >
                  <div className="flex flex-col justify-between gap-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-widest text-brand-red-300">
                        <span>{getCategory(feature.category)?.label}</span>
                        <span className="h-1 w-1 rounded-full bg-brand-red-300/60" />
                        <span className="text-steel-400">
                          {formatDate(feature.date)}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-steel-500/60" />
                        <span className="inline-flex items-center gap-1 text-steel-400">
                          <Clock className="h-3 w-3" />
                          {feature.readMinutes} min read
                        </span>
                      </div>
                      <h2 className="mt-4 font-display text-3xl leading-tight text-steel-100 md:text-4xl">
                        {feature.title}
                      </h2>
                      <p className="mt-4 max-w-xl text-base leading-relaxed text-steel-300">
                        {feature.description}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm text-steel-200 transition-colors group-hover:text-brand-red-300">
                      Read the post <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="relative hidden overflow-hidden rounded-2xl border border-white/10 bg-ink-900 md:block">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-navy-600/40 via-transparent to-brand-red-500/20" />
                    <div className="bg-grid absolute inset-0 opacity-30" />
                    <div className="relative flex h-full min-h-[220px] items-end p-8">
                      <span className="font-display text-[10px] uppercase tracking-[0.3em] text-steel-300">
                        Featured
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            </Section>
          )}

          {rest.length > 0 && (
            <Section eyebrow="More posts" title="Recent writing.">
              <RevealStagger className="grid gap-6 md:grid-cols-2">
                {rest.map((post) => (
                  <RevealItem key={post.slug}>
                    <Link
                      href={`/insights/${post.slug}`}
                      className="group flex h-full flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-colors hover:border-brand-red-500/50"
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-widest text-brand-red-300">
                          <span>{getCategory(post.category)?.label}</span>
                          <span className="h-1 w-1 rounded-full bg-brand-red-300/60" />
                          <span className="text-steel-400">
                            {formatDate(post.date)}
                          </span>
                        </div>
                        <h3 className="mt-4 font-display text-2xl leading-snug text-steel-100">
                          {post.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-steel-300">
                          {post.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-xs text-steel-400">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readMinutes} min
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-steel-200 transition-colors group-hover:text-brand-red-300">
                          Read <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                    </Link>
                  </RevealItem>
                ))}
              </RevealStagger>
            </Section>
          )}

          <Section
            eyebrow="Categories"
            title="What we write about."
            intro="Different problems, different formats. Skim by category if you know what you&rsquo;re looking for."
          >
            <RevealStagger className="grid gap-4 md:grid-cols-2">
              {CATEGORIES.map((c) => {
                const count = posts.filter((p) => p.category === c.slug).length;
                return (
                  <RevealItem key={c.slug}>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-display text-lg text-steel-100">
                          {c.label}
                        </h3>
                        <span className="text-xs text-steel-400">
                          {count} {count === 1 ? "post" : "posts"}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-steel-300">
                        {c.description}
                      </p>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealStagger>
          </Section>
        </>
      )}

      <CTA />
    </>
  );
}
