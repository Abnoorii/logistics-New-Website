"use client";

import Image from "next/image";
import { Marquee } from "@/components/interactive/marquee";
import { Reveal } from "@/components/interactive/reveal";
import {
  AIRLINE_LOGOS,
  type PartnerLogo,
} from "@/components/interactive/partner-logos";

export function Partners() {
  return (
    <section className="relative border-y border-white/5 bg-ink-900 py-20 md:py-24">
      <div className="container">
        <Reveal>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-red-500">
                <span className="h-1 w-6 bg-brand-red-500" />
                Carrier network
              </div>
              <h2 className="max-w-2xl font-display text-3xl leading-tight text-steel-100 md:text-4xl">
                Named allocations with the carriers we rely on most.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-steel-400">
              Direct commercial relationships across regional air freight —
              because good rates only matter if there&apos;s space.
            </p>
          </div>
        </Reveal>

        <div className="space-y-8">
          <LabelRow label="Air freight partners" />
          <Marquee>
            {AIRLINE_LOGOS.map((logo) => (
              <LogoBadge key={logo.name} logo={logo} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

function LabelRow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="h-px flex-1 bg-white/5" />
      <span className="text-[10px] uppercase tracking-widest text-steel-500">
        {label}
      </span>
      <span className="h-px flex-1 bg-white/5" />
    </div>
  );
}

function LogoBadge({ logo }: { logo: PartnerLogo }) {
  return (
    <div
      title={logo.name}
      className="flex h-20 w-[180px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-6 backdrop-blur transition-all duration-300 hover:border-brand-red-500/50 hover:bg-white/[0.05]"
    >
      <Image
        src={logo.src}
        alt={logo.name}
        width={logo.width}
        height={logo.height}
        className="h-10 w-auto max-w-full object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
      />
    </div>
  );
}
