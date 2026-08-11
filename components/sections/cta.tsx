"use client";

import { Reveal } from "@/components/interactive/reveal";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { useRef } from "react";

export function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const scale = useTransform(scrollYProgress, [0.3, 0.7], [0.98, 1]);

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-32">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[radial-gradient(900px_600px_at_50%_-10%,rgba(249,171,39,0.18),transparent_60%),radial-gradient(700px_400px_at_20%_100%,rgba(30,194,173,0.15),transparent_60%)]"
      />
      <div className="container relative">
        <motion.div
          style={{ scale }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 p-10 md:p-20"
        >
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
          <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-amber-400/25 blur-3xl" />

          <div className="relative grid gap-14 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <div className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-400">
                  <span className="h-1 w-6 bg-amber-400" /> Ready when you are
                </div>
              </Reveal>
              <Reveal>
                <h2 className="font-display text-display-2 leading-[0.95] text-steel-100 text-balance">
                  Tell us the lane.<br />
                  We&apos;ll build the plan.
                </h2>
              </Reveal>
              <Reveal>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel-300 text-pretty">
                  Bring us a ship-by date, a lane, and what&apos;s in the box.
                  A firm quote and a named contact within four business hours.
                </p>
              </Reveal>
            </div>

            <div className="flex flex-wrap items-center gap-4 lg:col-span-4 lg:justify-end">
              <Button size="lg" variant="primary">
                Get a quote <ArrowRight className="h-4 w-4" />
              </Button>
              <a
                href="tel:+61200000000"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm text-steel-100 backdrop-blur transition-colors hover:border-amber-400"
              >
                <PhoneCall className="h-4 w-4 text-amber-300" />
                Talk to ops
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
