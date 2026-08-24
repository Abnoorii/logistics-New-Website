"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search, PackageSearch, CheckCircle2, Clock, Ship, Info } from "lucide-react";
import { useState } from "react";

type Result = {
  ref: string;
  origin: string;
  destination: string;
  mode: string;
  milestones: { label: string; date: string; done: boolean; active?: boolean }[];
};

const SAMPLE: Result = {
  ref: "LAFU-4489327",
  origin: "Shanghai, CN",
  destination: "Kabul, AF",
  mode: "Ocean + Road · 40′ HC",
  milestones: [
    { label: "Booking confirmed", date: "Jul 21", done: true },
    { label: "Cargo received at origin CFS", date: "Jul 24", done: true },
    { label: "Loaded on vessel AURORA VOYAGER", date: "Jul 27", done: true },
    { label: "Transhipment at Karachi", date: "Aug 03", done: true },
    { label: "Cleared border, Torkham", date: "Aug 11", active: true, done: false },
    { label: "Customs cleared, Kabul", date: "Est. Aug 13", done: false },
    { label: "Delivered to consignee", date: "Est. Aug 14", done: false },
  ],
};

export function TrackForm() {
  const [ref, setRef] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "found" | "empty">(
    "idle"
  );
  const [result, setResult] = useState<Result | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ref.trim()) return;
    setStatus("loading");
    setTimeout(() => {
      if (ref.toUpperCase().includes("LAFU") || ref === "demo") {
        setResult({ ...SAMPLE, ref });
        setStatus("found");
      } else {
        setResult(null);
        setStatus("empty");
      }
    }, 900);
  };

  return (
    <div>
      <div className="mb-6 flex items-start gap-3 rounded-2xl border border-brand-red-500/30 bg-brand-red-500/[0.05] px-4 py-3 text-sm text-brand-red-100">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-red-300" />
        <div>
          <span className="font-medium text-brand-red-200">Demo mode.</span>{" "}
          The live carrier feed and dispatch integration go live at launch. Try{" "}
          <span className="font-mono text-brand-red-200">LAFU-4489327</span> or{" "}
          <span className="font-mono text-brand-red-200">demo</span> to preview the
          tracking view. Real account holders will use a signed-in dashboard.
        </div>
      </div>
      <form
        onSubmit={submit}
        className="relative flex items-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur transition-colors focus-within:border-brand-red-500"
      >
        <PackageSearch className="ml-5 h-5 w-5 text-brand-red-300" />
        <input
          value={ref}
          onChange={(e) => setRef(e.target.value)}
          placeholder="Try LAFU-4489327 or ‘demo’"
          className="flex-1 bg-transparent px-4 py-5 text-base text-steel-100 placeholder:text-steel-500 focus:outline-none"
          aria-label="Reference number"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="mr-2 inline-flex items-center gap-2 rounded-xl bg-brand-red-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-red-600 disabled:opacity-60"
        >
          <Search className="h-4 w-4" />
          {status === "loading" ? "Searching…" : "Track"}
        </button>
      </form>

      <p className="mt-3 text-xs text-steel-500">
        Enter a Logistics.af reference, container number, master B/L or AWB.
        This is a preview — real feeds will resolve to carrier data.
      </p>

      <AnimatePresence mode="wait">
        {status === "found" && result && (
          <motion.div
            key="found"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-ink-800/60 p-8 backdrop-blur"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-steel-500">
                  Shipment
                </div>
                <div className="mt-1 font-display text-2xl text-brand-red-300">
                  {result.ref}
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-signal-500/30 bg-signal-500/10 px-3 py-1.5 text-xs text-signal-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-signal-400 opacity-70" />
                  <span className="relative h-2 w-2 rounded-full bg-signal-400" />
                </span>
                On schedule
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-6 border-b border-white/5 pb-6 text-sm text-steel-300">
              <Meta label="Origin" value={result.origin} />
              <Meta label="Destination" value={result.destination} />
              <Meta label="Mode" value={result.mode} />
            </div>

            <ol className="mt-8 space-y-6">
              {result.milestones.map((m, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span
                    className={
                      m.active
                        ? "mt-0.5 grid h-8 w-8 place-items-center rounded-full bg-brand-red-500 text-white"
                        : m.done
                        ? "mt-0.5 grid h-8 w-8 place-items-center rounded-full bg-signal-500/20 text-signal-400"
                        : "mt-0.5 grid h-8 w-8 place-items-center rounded-full border border-white/10 text-steel-500"
                    }
                  >
                    {m.done ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : m.active ? (
                      <Ship className="h-4 w-4" />
                    ) : (
                      <Clock className="h-4 w-4" />
                    )}
                  </span>
                  <div>
                    <div
                      className={
                        m.done || m.active
                          ? "text-base text-steel-100"
                          : "text-base text-steel-400"
                      }
                    >
                      {m.label}
                    </div>
                    <div className="text-xs text-steel-500">{m.date}</div>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        )}

        {status === "empty" && (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-sm text-steel-300"
          >
            No shipment found for &ldquo;{ref}&rdquo;. Double-check the
            reference, or contact ops — details on the right.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-widest text-steel-500">
        {label}
      </div>
      <div className="mt-1 text-steel-100">{value}</div>
    </div>
  );
}
