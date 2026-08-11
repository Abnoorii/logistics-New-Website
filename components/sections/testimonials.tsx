"use client";

import { Section } from "@/components/ui/section";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const QUOTES = [
  {
    quote:
      "We moved seven brands off three different forwarders onto Meridian. Ocean and air, ANZ and Europe. First peak season with them, on-time was ninety-nine percent. That's not what forwarders usually deliver.",
    author: "Priya Menon",
    role: "Head of Supply Chain",
    company: "Halcyon Home",
  },
  {
    quote:
      "The dashboard replaced two spreadsheets and a WhatsApp group. When our customs entry got pulled last month, someone from their team called us before the alert email even landed.",
    author: "Marcus Cheng",
    role: "Operations Director",
    company: "Northline Apparel Group",
  },
  {
    quote:
      "Project cargo out of Hamburg to Melbourne, ten oversize crates, one permit chain across three countries. They ran the whole thing and sent one invoice. It landed on time.",
    author: "Ana Silveira",
    role: "Logistics Manager",
    company: "Kestrel Renewables",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % QUOTES.length), 7000);
    return () => clearInterval(t);
  }, [paused]);

  const current = QUOTES[i];

  return (
    <Section
      eyebrow="Customer stories"
      title="Called on when it counts."
      intro="Repeat customers describe what changed after they moved their freight to us."
    >
      <div
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 p-8 md:p-14"
        role="region"
        aria-roledescription="carousel"
        aria-label="Customer testimonials"
        aria-live="polite"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-signal-500/10 blur-3xl" />

        <div className="relative flex items-start justify-between gap-6">
          <Quote className="h-10 w-10 shrink-0 text-amber-400/60 md:h-14 md:w-14" />
          <div className="hidden font-mono text-xs tracking-widest text-steel-500 md:block">
            {String(i + 1).padStart(2, "0")} / {String(QUOTES.length).padStart(2, "0")}
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
              <div className="grid h-12 w-12 place-items-center rounded-full bg-amber-400 text-lg font-medium text-ink-950">
                {current.author
                  .split(" ")
                  .map((s) => s[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div>
                <div className="text-sm font-medium text-steel-100">
                  {current.author}
                </div>
                <div className="text-xs text-steel-400">
                  {current.role} · {current.company}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {QUOTES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className="group h-1.5 w-8 overflow-hidden rounded-full bg-white/10"
              >
                <motion.span
                  animate={{
                    width: i === idx ? "100%" : "0%",
                  }}
                  transition={{ duration: i === idx ? 6.8 : 0.3, ease: "linear" }}
                  className="block h-full origin-left rounded-full bg-amber-400"
                />
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setI((v) => (v - 1 + QUOTES.length) % QUOTES.length)}
              className="rounded-full border border-white/10 bg-white/5 p-3 text-steel-100 transition-colors hover:border-amber-400 hover:text-amber-300"
              aria-label="Previous"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setI((v) => (v + 1) % QUOTES.length)}
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
