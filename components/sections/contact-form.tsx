"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/lib/site";

const SERVICES = [
  "Air Freight",
  "Ocean Freight",
  "Customs Brokerage",
  "Warehousing & 3PL",
  "Project Cargo",
  "Domestic & Interstate",
];

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggle = (s: string) =>
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      company: String(fd.get("company") ?? "").trim(),
      origin: String(fd.get("origin") ?? "").trim(),
      destination: String(fd.get("destination") ?? "").trim(),
      shipBy: String(fd.get("shipBy") ?? "").trim(),
      services: selectedServices,
      message: String(fd.get("message") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? "Something went wrong.");
      }
      setStatus("success");
      form.reset();
      setSelectedServices([]);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="ok"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-signal-500/30 bg-signal-500/[0.06] p-10 backdrop-blur"
        >
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-signal-500/20 text-signal-400">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <h3 className="mt-6 font-display text-2xl text-steel-100">
            Got it — we&rsquo;re on it.
          </h3>
          <p className="mt-3 max-w-md text-base text-steel-300">
            You&rsquo;ll hear back from a named ops lead within four business
            hours. If it&rsquo;s urgent, call the sales desk on
            &nbsp;<a href={CONTACT.sales.phoneHref} className="text-amber-300 underline underline-offset-4">{CONTACT.sales.phone}</a>.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-steel-100 transition-colors hover:border-amber-400 hover:text-amber-300"
          >
            Send another
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur md:p-10"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Name" name="name" required autoComplete="name" />
            <Field
              label="Work email"
              name="email"
              type="email"
              required
              autoComplete="email"
            />
            <Field label="Company" name="company" autoComplete="organization" />
            <Field label="Ship-by date" name="shipBy" placeholder="e.g. 22 Aug" />
            <Field label="Origin" name="origin" placeholder="City, country" />
            <Field label="Destination" name="destination" placeholder="City, country" />
          </div>

          <fieldset className="mt-8">
            <legend className="mb-3 text-[10px] uppercase tracking-widest text-steel-500">
              What are you moving?
            </legend>
            <div className="flex flex-wrap gap-2">
              {SERVICES.map((s) => {
                const active = selectedServices.includes(s);
                return (
                  <button
                    type="button"
                    key={s}
                    onClick={() => toggle(s)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm transition-colors",
                      active
                        ? "border-amber-400 bg-amber-400/10 text-amber-300"
                        : "border-white/10 bg-white/[0.03] text-steel-200 hover:border-amber-400/40"
                    )}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-8">
            <label className="block text-[10px] uppercase tracking-widest text-steel-500">
              Details
            </label>
            <textarea
              name="message"
              rows={5}
              placeholder="Weight, cubic metres, packaging, any temperature or handling constraints. The more you can share, the faster we can quote it."
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-base text-steel-100 placeholder:text-steel-500 focus:border-amber-400 focus:outline-none"
            />
          </div>

          {status === "error" && (
            <p className="mt-4 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {errorMsg}
            </p>
          )}

          <div className="mt-8 flex items-center justify-between">
            <p className="text-xs text-steel-500">
              By submitting, you agree we can email you back with the quote.
            </p>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-medium text-ink-950 transition-colors hover:bg-amber-300 disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send request"}
              <Send className="h-4 w-4" />
            </button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-widest text-steel-500">
        {label}
        {required && <span className="ml-1 text-amber-400">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-base text-steel-100 placeholder:text-steel-500 focus:border-amber-400 focus:outline-none"
      />
    </label>
  );
}
