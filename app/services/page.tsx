import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Reveal, RevealItem, RevealStagger } from "@/components/interactive/reveal";
import { SERVICES } from "@/lib/services";
import { ArrowUpRight } from "lucide-react";
import { CTA } from "@/components/sections/cta";
import { SITE } from "@/lib/site";

const description =
  "Six services under one roof: air freight, ocean freight, customs brokerage, warehousing & 3PL, project cargo, and domestic transport.";

export const metadata: Metadata = {
  title: "Services",
  description,
  alternates: { canonical: `${SITE.url}/services` },
  openGraph: {
    title: `Services — ${SITE.name}`,
    description,
    url: `${SITE.url}/services`,
    siteName: SITE.name,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `Services — ${SITE.name}`, description },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Every mode.
            <br />
            One accountable team.
          </>
        }
        intro="Six services, one dashboard, one point of accountability. Pick a mode below to see how we run it — or talk to us and we'll build the plan for you."
      />

      <Section>
        <RevealStagger className="space-y-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <RevealItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex flex-col gap-6 rounded-3xl border border-white/10 bg-ink-800/60 p-8 backdrop-blur transition-colors hover:border-brand-red-500/50 md:flex-row md:items-center md:gap-10 md:p-10"
                >
                  <div className="flex items-center gap-6 md:w-1/3">
                    <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-brand-red-500/10 text-brand-red-300 ring-1 ring-inset ring-brand-red-500/20 transition-transform duration-500 group-hover:-rotate-6">
                      <Icon className="h-7 w-7" />
                    </span>
                    <div>
                      <div className="font-mono text-xs uppercase tracking-widest text-steel-500">
                        {s.tag}
                      </div>
                      <h2 className="font-display text-3xl text-steel-100">
                        {s.title}
                      </h2>
                    </div>
                  </div>
                  <p className="flex-1 text-base leading-relaxed text-steel-300 md:text-lg">
                    {s.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-steel-100 transition-colors group-hover:border-brand-red-500 group-hover:text-brand-red-300 md:self-center">
                    Explore <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </Section>

      <CTA />
    </>
  );
}
