"use client";

import { Section } from "@/components/ui/section";
import { Reveal, RevealItem, RevealStagger } from "@/components/interactive/reveal";
import {
  COUNTRIES,
  REGIONS,
  TRADE_TYPES,
  countriesByRegion,
  type Country,
} from "@/lib/countries";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function TradeNetwork() {
  const [active, setActive] = useState<string | null>(null);
  const grouped = countriesByRegion();

  return (
    <Section
      id="trade-network"
      eyebrow="Trade network"
      title="Afghanistan at the heart of its trade lanes."
      intro="We move import and export shipments between Afghanistan and its 13 principal trading partners across Central Asia, South Asia, the Middle East, and beyond."
    >
      <Reveal>
        <div className="mb-10 flex flex-wrap items-center justify-center gap-6 text-xs text-steel-300">
          {(["both", "import", "export"] as const).map((t) => (
            <div key={t} className="inline-flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: TRADE_TYPES[t].color }}
              />
              <span>{TRADE_TYPES[t].label}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Hub-and-spoke diagram */}
        <Reveal className="lg:col-span-7">
          <NetworkDiagram active={active} setActive={setActive} />
        </Reveal>

        {/* Region cards */}
        <div className="space-y-3 lg:col-span-5">
          <RevealStagger className="space-y-3">
            {(Object.keys(REGIONS) as Array<keyof typeof REGIONS>).map((r) => (
              <RevealItem key={r}>
                <div className="rounded-2xl border border-white/10 bg-ink-800/60 p-5 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-base text-steel-100">
                      {REGIONS[r]}
                    </h3>
                    <span className="text-xs text-steel-500">
                      {grouped[r].length}{" "}
                      {grouped[r].length === 1 ? "market" : "markets"}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {grouped[r].map((c) => (
                      <button
                        key={c.code}
                        onMouseEnter={() => setActive(c.code)}
                        onMouseLeave={() => setActive(null)}
                        onFocus={() => setActive(c.code)}
                        onBlur={() => setActive(null)}
                        className={cn(
                          "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs transition-all",
                          active === c.code
                            ? "border-amber-400 bg-amber-400/10 text-amber-200"
                            : "border-white/10 bg-white/[0.02] text-steel-200 hover:border-amber-400/40"
                        )}
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: TRADE_TYPES[c.type].color }}
                        />
                        {c.name}
                      </button>
                    ))}
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </Section>
  );
}

function NetworkDiagram({
  active,
  setActive,
}: {
  active: string | null;
  setActive: (code: string | null) => void;
}) {
  const size = 560;
  const cx = size / 2;
  const cy = size / 2;
  const baseR = size * 0.36;

  const positioned = COUNTRIES.map((c) => {
    // 0° = north (up). Convert to canvas coords (0° = right, clockwise).
    const rad = ((c.angle - 90) * Math.PI) / 180;
    const r = baseR * c.distance;
    const labelAnchor: "start" | "end" | "middle" =
      Math.cos(rad) > 0.35 ? "start" : Math.cos(rad) < -0.35 ? "end" : "middle";
    return {
      ...c,
      x: cx + Math.cos(rad) * r,
      y: cy + Math.sin(rad) * r,
      labelAnchor,
    };
  });

  return (
    <div className="relative rounded-3xl border border-white/10 bg-ink-800/40 p-4 backdrop-blur md:p-8">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="mx-auto h-auto w-full max-w-[560px]"
        role="img"
        aria-label="Hub-and-spoke diagram — Afghanistan connected to 13 trading partners"
      >
        {/* Concentric rings for depth */}
        <circle cx={cx} cy={cy} r={baseR * 0.55} fill="none" stroke="rgba(230,235,243,0.05)" />
        <circle cx={cx} cy={cy} r={baseR * 0.8} fill="none" stroke="rgba(230,235,243,0.05)" />
        <circle cx={cx} cy={cy} r={baseR} fill="none" stroke="rgba(230,235,243,0.06)" strokeDasharray="3 3" />

        {/* Spokes */}
        {positioned.map((c) => {
          const isActive = active === c.code;
          return (
            <line
              key={`line-${c.code}`}
              x1={cx}
              y1={cy}
              x2={c.x}
              y2={c.y}
              stroke={isActive ? TRADE_TYPES[c.type].color : "rgba(230,235,243,0.12)"}
              strokeWidth={isActive ? 1.5 : 0.8}
              style={{ transition: "stroke 200ms" }}
            />
          );
        })}

        {/* Center — Afghanistan */}
        <g>
          <circle cx={cx} cy={cy} r={16} fill="rgba(249,171,39,0.15)" />
          <motion.circle
            cx={cx}
            cy={cy}
            r={8}
            fill="#f9ab27"
            animate={{ r: [8, 10, 8] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <text
            x={cx}
            y={cy + 32}
            fontSize="12"
            fontWeight="500"
            textAnchor="middle"
            fill="#f9ab27"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            Afghanistan
          </text>
        </g>

        {/* Partner nodes */}
        {positioned.map((c) => {
          const isActive = active === c.code;
          const color = TRADE_TYPES[c.type].color;
          return (
            <g
              key={c.code}
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setActive(c.code)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(c.code)}
              onBlur={() => setActive(null)}
              tabIndex={0}
              role="button"
              aria-label={`${c.name} — ${TRADE_TYPES[c.type].label}`}
            >
              {isActive && (
                <circle cx={c.x} cy={c.y} r={12} fill={color} opacity={0.2} />
              )}
              <circle
                cx={c.x}
                cy={c.y}
                r={isActive ? 6 : 4.5}
                fill={color}
                stroke="rgba(5,7,13,0.6)"
                strokeWidth={1.5}
                style={{ transition: "r 200ms" }}
              />
              <text
                x={c.x + (c.labelAnchor === "start" ? 12 : c.labelAnchor === "end" ? -12 : 0)}
                y={c.labelAnchor === "middle" ? c.y - 12 : c.y + 4}
                fontSize="10"
                fontWeight="500"
                textAnchor={c.labelAnchor}
                fill={isActive ? "#feefc9" : "#c7d0de"}
                style={{ transition: "fill 200ms" }}
              >
                {c.name}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Compass hint */}
      <div className="pointer-events-none absolute right-6 top-6 text-[9px] uppercase tracking-widest text-steel-600">
        N ↑ · Compass roughly to scale
      </div>
    </div>
  );
}
