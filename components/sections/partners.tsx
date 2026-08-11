"use client";

import { Marquee } from "@/components/interactive/marquee";
import { Reveal } from "@/components/interactive/reveal";

const AIRLINES = [
  "Qantas Freight",
  "Cathay Cargo",
  "Singapore Airlines",
  "Emirates SkyCargo",
  "Lufthansa Cargo",
  "Korean Air Cargo",
  "China Airlines",
  "Air New Zealand",
  "ANA Cargo",
];

const SHIPPING = [
  "Maersk",
  "MSC",
  "CMA CGM",
  "Hapag-Lloyd",
  "ONE",
  "COSCO",
  "Evergreen",
  "Yang Ming",
  "OOCL",
  "HMM",
];

export function Partners() {
  return (
    <section className="relative border-y border-white/5 bg-ink-900 py-20 md:py-24">
      <div className="container">
        <Reveal>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-400">
                <span className="h-1 w-6 bg-amber-400" />
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
            {AIRLINES.map((name) => (
              <PartnerBadge key={name} name={name} tone="amber" />
            ))}
          </Marquee>

          <LabelRow label="Ocean freight partners" />
          <Marquee speed="slow" reverse>
            {SHIPPING.map((name) => (
              <PartnerBadge key={name} name={name} tone="signal" />
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

function PartnerBadge({
  name,
  tone,
}: {
  name: string;
  tone: "amber" | "signal";
}) {
  const dot =
    tone === "amber" ? "bg-amber-400" : "bg-signal-400";
  return (
    <div className="group flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur transition-colors hover:border-amber-400/50">
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      <span className="font-display text-base tracking-tight text-steel-100 opacity-70 transition-opacity group-hover:opacity-100">
        {name}
      </span>
    </div>
  );
}
