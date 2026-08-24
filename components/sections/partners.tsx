"use client";

import { Marquee } from "@/components/interactive/marquee";
import { Reveal } from "@/components/interactive/reveal";
import {
  AIRLINE_LOGOS,
  SHIPPING_LOGOS,
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
              Direct commercial relationships across sea and air freight —
              because good rates only matter if there&apos;s space.
            </p>
          </div>
        </Reveal>

        <div className="space-y-8">
          <LabelRow label="Air freight partners" />
          <Marquee>
            {AIRLINE_LOGOS.map(({ name, Logo }) => (
              <LogoBadge key={name} name={name}>
                <Logo />
              </LogoBadge>
            ))}
          </Marquee>

          <LabelRow label="Ocean freight partners" />
          <Marquee speed="slow" reverse>
            {SHIPPING_LOGOS.map(({ name, Logo }) => (
              <LogoBadge key={name} name={name}>
                <Logo />
              </LogoBadge>
            ))}
          </Marquee>
        </div>

        <p className="mt-10 text-center text-[10px] uppercase tracking-widest text-steel-600">
          Stylized wordmarks · replace with licensed brand assets when available
        </p>
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

function LogoBadge({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div
      title={name}
      className="flex h-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-8 text-steel-300 backdrop-blur transition-all duration-300 hover:border-brand-red-500/50 hover:text-brand-red-200"
    >
      {children}
    </div>
  );
}
