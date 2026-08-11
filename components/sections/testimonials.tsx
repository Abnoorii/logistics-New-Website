"use client";

import { Section } from "@/components/ui/section";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

type Principle = {
  quote: string;
  category: string;
  detail: string;
};

const PRINCIPLES: Principle[] = [
  {
    quote:
      "The best forwarders replace two spreadsheets and a WhatsApp group with one dashboard — and call you before the alert email lands.",
    category: "Visibility",
    detail: "How we think about status reporting",
  },
  {
    quote:
      "First peak season should be the test. Ocean, air, ANZ and Europe combined — if on-time isn't in the high nineties, the operating model is broken.",
    category: "Reliability",
    detail: "How we measure ourselves",
  },
  {
    quote:
      "Project cargo across three countries with one accountable lead, one quote, one invoice — this is table stakes, not a premium tier.",
    category: "Accountability",
    detail: "How we scope engagements",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % PRINCIPLES.length), 7000);
    return () => clearInterval(t);
  }, [paused]);

  const current = PRINCIPLES[i];

  return (
    <Section
      eyebrow="What good freight looks like"
      title="Our operating principles."
      intro="Three things we believe make freight forwarding worth paying for. Real customer stories are on the way — for now, this is how we think."
    >
      <div
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 p-8 md:p-14"
        role="region"
        aria-roledescription="carousel"
        aria-label="Operating principles"
        aria-live="polite"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-signal-500/10 blur-3xl" />

        <div className="relative flex items-start justify-between gap-6">
          <Quote className="h-10 w-10 shrink-0 text-amber-400/60 md:h-14 md:w-14" />
          <div className="hidden font-mono text-xs tracking-widest text-steel-500 md:block">
            {String(i + 1).padStart(2, "0")} /{" "}
            {String(PRINCIPLES.length).padStart(2, "0")}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-6"
          >
            <blockquote className="font-display text-2xl leading-snug text-steel-100 md:text-4xl">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
            <div className="mt-10 flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-300">
                <span className="font-mono text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <div className="text-sm font-medium text-amber-300">
                  {current.category}
                </div>
                <div className="text-xs text-steel-400">{current.detail}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {PRINCIPLES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to principle ${idx + 1}`}
                className="group h-1.5 w-8 overflow-hidden rounded-full bg-white/10"
              >
                <motion.span
                  animate={{ width: i === idx ? "100%" : "0%" }}
                  transition={{ duration: i === idx ? 6.8 : 0.3, ease: "linear" }}
                  className="block h-full origin-left rounded-full bg-amber-400"
                />
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                setI((v) => (v - 1 + PRINCIPLES.length) % PRINCIPLES.length)
              }
              className="rounded-full border border-white/10 bg-white/5 p-3 text-steel-100 transition-colors hover:border-amber-400 hover:text-amber-300"
              aria-label="Previous"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setI((v) => (v + 1) % PRINCIPLES.length)}
              className="rounded-full border border-white/10 bg-white/5 p-3 text-steel-100 transition-colors hover:border-amber-400 hover:text-amber-300"
              aria-label="Next"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
