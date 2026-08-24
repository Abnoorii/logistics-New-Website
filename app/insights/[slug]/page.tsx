import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Reveal } from "@/components/interactive/reveal";
import { CTA } from "@/components/sections/cta";
import { SITE } from "@/lib/site";
import {
  formatDate,
  getAllPosts,
  getAllSlugs,
  getCategory,
  getPostBySlug,
} from "@/lib/insights";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `${SITE.url}/insights/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: SITE.name,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const category = getCategory(post.category);
  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    mainEntityOfPage: `${SITE.url}/insights/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden pt-40 pb-12 md:pt-52 md:pb-16">
        <div className="absolute inset-0 bg-mesh-1 opacity-70" />
        <div className="bg-grid absolute inset-0 opacity-30" />
        <div className="noise" />
        <div className="container relative">
          <Reveal>
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-steel-400 transition-colors hover:text-brand-red-300"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All insights
            </Link>
          </Reveal>
          <Reveal>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-widest text-brand-red-300">
              {category && <span>{category.label}</span>}
              <span className="h-1 w-1 rounded-full bg-brand-red-300/60" />
              <span className="text-steel-400">{formatDate(post.date)}</span>
              <span className="h-1 w-1 rounded-full bg-steel-500/60" />
              <span className="inline-flex items-center gap-1 text-steel-400">
                <Clock className="h-3 w-3" />
                {post.readMinutes} min read
              </span>
            </div>
          </Reveal>
          <Reveal>
            <h1 className="mt-6 max-w-4xl font-display text-display-2 text-steel-100 text-balance">
              {post.title}
            </h1>
          </Reveal>
          <Reveal>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel-300 text-pretty md:text-xl">
              {post.description}
            </p>
          </Reveal>
          <Reveal>
            <p className="mt-8 text-sm text-steel-400">By {post.author}</p>
          </Reveal>
        </div>
      </section>

      <section className="relative pb-20 md:pb-28">
        <div className="container relative">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <article className="insight-prose">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {post.content}
                </ReactMarkdown>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="relative border-t border-white/5 bg-ink-900 py-20 md:py-24">
          <div className="container relative">
            <Reveal>
              <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-red-500">
                    <span className="h-1 w-6 bg-brand-red-500" />
                    Keep reading
                  </div>
                  <h2 className="font-display text-3xl text-steel-100 md:text-4xl">
                    More on {category?.label.toLowerCase()}.
                  </h2>
                </div>
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-1.5 text-sm text-steel-200 transition-colors hover:text-brand-red-300"
                >
                  All insights <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/insights/${p.slug}`}
                  className="group flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-colors hover:border-brand-red-500/50"
                >
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-brand-red-300">
                      {formatDate(p.date)} · {p.readMinutes} min read
                    </div>
                    <h3 className="mt-4 font-display text-2xl leading-snug text-steel-100">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-steel-300">
                      {p.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm text-steel-200 transition-colors group-hover:text-brand-red-300">
                    Read <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
