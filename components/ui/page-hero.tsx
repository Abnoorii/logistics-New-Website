"use client";

import { Reveal } from "@/components/interactive/reveal";
import { type ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  actions,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-16 md:pt-52 md:pb-24">
      <div className="absolute inset-0 bg-mesh-1 opacity-70" />
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="noise" />

      <div className="container relative">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-400">
            <span className="h-1 w-6 bg-amber-400" />
            {eyebrow}
          </div>
        </Reveal>
        <Reveal>
          <h1 className="font-display text-display-2 text-steel-100 text-balance">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-steel-300 text-pretty md:text-xl">
              {intro}
            </p>
          </Reveal>
        )}
        {actions && (
          <Reveal>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {actions}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
