"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorMsg("Please provide a valid email.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error ?? "Something went wrong.");
      }
      setStatus("ok");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur">
      <h4 className="text-[10px] uppercase tracking-widest text-steel-500">
        Trade lane briefings
      </h4>
      <h3 className="mt-3 font-display text-base text-steel-100">
        Quarterly rate & capacity note.
      </h3>
      <p className="mt-2 text-xs leading-relaxed text-steel-400">
        What&rsquo;s moving on our 13 lanes — rates, capacity, seasonal risk.
        Once every three months. No noise.
      </p>

      <AnimatePresence mode="wait">
        {status === "ok" ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 flex items-start gap-2 rounded-xl border border-signal-500/30 bg-signal-500/[0.06] p-3 text-xs text-signal-400"
          >
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
            <span className="text-signal-200">
              Subscribed. Look for our next briefing at end of quarter.
            </span>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={submit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-5 flex flex-col gap-2"
          >
            <div className="flex items-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition-colors focus-within:border-amber-400">
              <Mail className="ml-3 h-4 w-4 shrink-0 text-amber-300" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setStatus("idle");
                  setErrorMsg(null);
                }}
                placeholder="you@example.com"
                aria-label="Email address"
                className="flex-1 bg-transparent px-3 py-2.5 text-sm text-steel-100 placeholder:text-steel-500 focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="mr-1.5 inline-flex items-center gap-1 rounded-lg bg-amber-400 px-3 py-1.5 text-xs font-medium text-ink-950 transition-colors hover:bg-amber-300 disabled:opacity-60"
              >
                {status === "sending" ? "…" : "Subscribe"}
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
            {status === "error" && errorMsg && (
              <span className="text-xs text-red-300">{errorMsg}</span>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
