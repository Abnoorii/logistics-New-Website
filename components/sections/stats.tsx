"use client";

import { Reveal, RevealItem, RevealStagger } from "@/components/interactive/reveal";
import { Counter } from "@/components/interactive/counter";

const STATS = [
  { value: 13, suffix: "", label: "Trade partner markets" },
  { value: 6, suffix: "", label: "Named border corridors" },
  { value: 8, suffix: "+ yrs", label: "Moving cargo since 2018" },
  { value: 24, suffix: "/7", label: "Ops desk during active shipments" },
];

export function Stats() {
  return (
    <section className="relative -mt-10 border-y border-white/5 bg-ink-900/70 py-14 backdrop-blur">
      <div className="container">
        <RevealStagger className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {STATS.map((s, i) => (
            <RevealItem key={i} className="flex flex-col">
              <div className="font-display text-4xl font-medium tabular-nums text-steel-100 md:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-3 text-sm text-steel-400">{s.label}</p>
            </RevealItem>
          ))}
        </RevealStagger>
        <Reveal className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-steel-500">
          <span className="h-px w-8 bg-amber-400/60" />
          <span>Afghanistan-based since 2018 · 13 named lanes</span>
        </Reveal>
      </div>
    </section>
  );
}
