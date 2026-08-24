"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Languages, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLocale, type Locale } from "@/components/providers/locale-provider";

const LOCALES: { code: Locale; label: string; dir: "ltr" | "rtl" }[] = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "fa", label: "دری", dir: "rtl" },
  { code: "ps", label: "پښتو", dir: "rtl" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-steel-100 transition-colors hover:border-brand-red-500"
      >
        <Languages className="h-4 w-4 text-brand-red-500" />
        <span dir={current.dir}>{current.label}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            role="listbox"
            className="absolute right-0 top-full z-50 mt-3 w-40 rounded-2xl border border-white/10 bg-ink-800/95 p-2 backdrop-blur-xl shadow-2xl"
          >
            {LOCALES.map((l) => (
              <li key={l.code}>
                <button
                  onClick={() => {
                    setLocale(l.code);
                    setOpen(false);
                  }}
                  role="option"
                  aria-selected={locale === l.code}
                  className={cn(
                    "flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition-colors",
                    locale === l.code
                      ? "bg-brand-red-500/10 text-brand-red-300"
                      : "text-steel-100 hover:bg-white/5"
                  )}
                >
                  <span dir={l.dir}>{l.label}</span>
                  {locale === l.code && <Check className="h-4 w-4" />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
