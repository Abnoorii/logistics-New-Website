"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import { Reveal } from "@/components/interactive/reveal";

const MILESTONES = [
  {
    stage: "Booking",
    note: "Rates locked, docs pre-filled, capacity confirmed within 4 business hours.",
  },
  {
    stage: "Origin",
    note: "Live pickup ETA, driver identity, and photo POD on collection.",
  },
  {
    stage: "In-transit",
    note: "Vessel and flight-level tracking, plus milestone alerts to your team.",
  },
  {
    stage: "Customs",
    note: "Pre-clearance where the lane allows — cargo lands, cargo leaves.",
  },
  {
    stage: "Delivery",
    note: "Time-slot dispatch, condition photos, signed POD, invoice-ready proof.",
  },
];

export function Reliability() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const truckX = useTransform(scrollYProgress, [0.1, 0.9], ["-15%", "20%"]);
  const containerY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const cardY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const progress = useTransform(scrollYProgress, [0.15, 0.85], ["0%", "100%"]);

  return (
    <section
      id="reliability"
      ref={ref}
      className="relative overflow-hidden border-y border-white/5 bg-ink-900 py-24 md:py-32"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_80%_20%,rgba(30,194,173,0.10),transparent_60%),radial-gradient(1000px_500px_at_10%_80%,rgba(249,171,39,0.10),transparent_60%)]"
      />
      <div className="bg-grid absolute inset-0 opacity-30" />

      <div className="container relative grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-400">
              <span className="h-1 w-6 bg-amber-400" />
              Reliability
            </div>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-display-3 text-balance">
              Reliability at every milestone — not just the ones you can see.
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-steel-300 text-pretty">
              We instrument every hand-off, from carrier booking to signed POD.
              You get one dashboard, one point of accountability, and updates
              before you have to ask.
            </p>
          </Reveal>

          <div className="mt-10 space-y-4">
            {MILESTONES.map((m, i) => (
              <Reveal key={m.stage} delay={i}>
                <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-signal-400" />
                  <div>
                    <div className="text-sm font-medium text-steel-100">
                      {m.stage}
                    </div>
                    <div className="mt-1 text-sm text-steel-400">{m.note}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Parallax truck + container illustration */}
        <div className="relative lg:col-span-7">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-ink-800 to-ink-950">
            {/* Subtle photo backdrop, heavily veiled */}
            <div className="absolute inset-0 opacity-30">
              <img
                src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1600&q=60"
                alt=""
                className="h-full w-full object-cover [filter:url(#subtle-brand)] saturate-[.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-ink-800/70 via-ink-900/85 to-ink-950" />
            </div>
            <div className="absolute inset-0 bg-grid opacity-30" />

            <motion.div
              style={{ y: containerY }}
              className="absolute left-8 top-14 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md"
            >
              <div className="text-[10px] uppercase tracking-widest text-steel-400">
                Container
              </div>
              <div className="mt-1 font-mono text-lg text-amber-300">
                LAFU 4489327 · 40′ HC
              </div>
              <div className="mt-4 flex flex-col gap-2 text-xs text-steel-300">
                <MilestoneDot label="Shanghai · loaded" done />
                <MilestoneDot label="Vessel AURORA VOYAGER" done />
                <MilestoneDot label="Karachi · discharged" done />
                <MilestoneDot label="Torkham · cleared" active />
                <MilestoneDot label="Delivery · scheduled" />
              </div>
            </motion.div>

            <motion.div
              style={{ y: cardY }}
              className="absolute right-6 top-40 w-[210px] rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur"
            >
              <div className="flex items-center justify-between">
                <div className="text-[10px] uppercase tracking-widest text-steel-400">
                  Dashboard preview
                </div>
                <span className="rounded-full bg-amber-400/15 px-1.5 py-0.5 text-[9px] uppercase tracking-widest text-amber-300">
                  Sample
                </span>
              </div>
              <div className="mt-1 font-display text-3xl text-steel-100">
                On-time<span className="text-amber-400">·</span>trend
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  style={{ width: progress }}
                  className="h-full rounded-full bg-gradient-to-r from-amber-400 to-signal-400"
                />
              </div>
              <SparkChart />
              <div className="mt-2 flex items-center justify-between text-[9px] text-steel-500">
                <span>W-4</span>
                <span>W-3</span>
                <span>W-2</span>
                <span>W-1</span>
                <span className="text-amber-300">Now</span>
              </div>
            </motion.div>

            <motion.div
              style={{ y: cardY }}
              className="absolute left-8 top-[19rem] w-[220px] rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur"
            >
              <div className="text-[10px] uppercase tracking-widest text-steel-400">
                Active this week
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
                <MiniStat label="Bookings" value="127" trend="+8" />
                <MiniStat label="In transit" value="84" trend="+3" />
                <MiniStat label="Cleared" value="41" trend="+12" />
                <MiniStat label="Exceptions" value="2" trend="0" flat />
              </div>
            </motion.div>

            {/* The truck */}
            <motion.svg
              viewBox="0 0 480 200"
              style={{ x: truckX }}
              className="absolute bottom-14 left-0 w-[110%]"
            >
              <defs>
                <linearGradient id="truckBody" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#f9ab27" />
                  <stop offset="1" stopColor="#c26f05" />
                </linearGradient>
              </defs>
              <rect x="140" y="70" width="260" height="80" rx="8" fill="#e6ebf3" opacity="0.9" />
              <rect x="140" y="70" width="260" height="80" rx="8" fill="url(#truckBody)" opacity="0.15" />
              <rect x="145" y="80" width="250" height="4" fill="#c7d0de" opacity="0.6" />
              <rect x="145" y="100" width="250" height="4" fill="#c7d0de" opacity="0.4" />
              <rect x="145" y="120" width="250" height="4" fill="#c7d0de" opacity="0.3" />
              <path d="M60 150 L60 100 Q60 88 72 88 L110 88 L140 70 L140 150 Z" fill="url(#truckBody)" />
              <rect x="72" y="94" width="34" height="34" rx="4" fill="#05070d" opacity="0.4" />
              <circle cx="100" cy="160" r="18" fill="#05070d" />
              <circle cx="100" cy="160" r="7" fill="#243049" />
              <circle cx="360" cy="160" r="18" fill="#05070d" />
              <circle cx="360" cy="160" r="7" fill="#243049" />
            </motion.svg>

            {/* Ground line */}
            <div className="absolute bottom-12 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* Bottom label */}
            <div className="absolute inset-x-0 bottom-4 text-center text-[10px] uppercase tracking-widest text-steel-500">
              Kabul metro · last mile
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MilestoneDot({
  label,
  done = false,
  active = false,
}: {
  label: string;
  done?: boolean;
  active?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={
          done
            ? "h-2 w-2 rounded-full bg-signal-400"
            : active
            ? "h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_0_4px_rgba(249,171,39,0.15)]"
            : "h-2 w-2 rounded-full border border-white/20"
        }
      />
      <span
        className={
          active
            ? "text-amber-200"
            : done
            ? "text-steel-100"
            : "text-steel-500"
        }
      >
        {label}
      </span>
    </div>
  );
}

function SparkChart() {
  const points = [58, 62, 55, 71, 68, 82, 76, 88, 81, 92, 86, 94];
  const max = 100;
  const min = 40;
  const w = 178;
  const h = 36;
  const step = w / (points.length - 1);
  const y = (v: number) => h - ((v - min) / (max - min)) * h;
  const path = points
    .map((v, i) => `${i === 0 ? "M" : "L"} ${i * step},${y(v)}`)
    .join(" ");
  const area = `${path} L ${w},${h} L 0,${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-3 h-9 w-full">
      <defs>
        <linearGradient id="sparkFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#f9ab27" stopOpacity="0.35" />
          <stop offset="1" stopColor="#f9ab27" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#sparkFill)" />
      <path d={path} fill="none" stroke="#f9ab27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle
        cx={(points.length - 1) * step}
        cy={y(points[points.length - 1])}
        r="2.5"
        fill="#f9ab27"
      />
    </svg>
  );
}

function MiniStat({
  label,
  value,
  trend,
  flat = false,
}: {
  label: string;
  value: string;
  trend: string;
  flat?: boolean;
}) {
  return (
    <div className="rounded-lg bg-white/[0.03] px-2 py-1.5">
      <div className="text-[9px] uppercase tracking-widest text-steel-500">
        {label}
      </div>
      <div className="mt-0.5 flex items-baseline justify-between gap-1">
        <span className="font-display text-base text-steel-100 tabular-nums">
          {value}
        </span>
        <span
          className={
            flat
              ? "text-[10px] text-steel-500"
              : trend.startsWith("-")
              ? "text-[10px] text-red-300"
              : "text-[10px] text-signal-400"
          }
        >
          {flat ? "—" : trend}
        </span>
      </div>
    </div>
  );
}
