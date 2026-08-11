"use client";

import { createContext, useContext, useEffect, useState } from "react";
import en from "@/messages/en.json";
import fa from "@/messages/fa.json";
import ps from "@/messages/ps.json";

export type Locale = "en" | "fa" | "ps";

const MESSAGES: Record<Locale, typeof en> = { en, fa: fa as typeof en, ps: ps as typeof en };
const RTL: Locale[] = ["fa", "ps"];

const STORAGE_KEY = "logisticsaf.locale";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (path: string) => string;
  isRtl: boolean;
  hydrated: boolean;
};

const LocaleContext = createContext<Ctx | null>(null);

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    // Fallback identity translator so components don't crash if used outside provider.
    return {
      locale: "en" as const,
      setLocale: () => {},
      t: (path: string) => path,
      isRtl: false,
      hydrated: false,
    };
  }
  return ctx;
}

/** Shorter alias for consumers: const t = useT(); t("nav.services") */
export function useT() {
  return useLocale().t;
}

function resolve(obj: unknown, path: string): string {
  const parts = path.split(".");
  let cur: unknown = obj;
  for (const p of parts) {
    if (cur && typeof cur === "object" && p in cur) {
      cur = (cur as Record<string, unknown>)[p];
    } else {
      return path;
    }
  }
  return typeof cur === "string" ? cur : path;
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let saved: Locale | null = null;
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (v === "en" || v === "fa" || v === "ps") saved = v;
    } catch {
      /* ignore */
    }
    // Fall back to browser preference if nothing saved.
    if (!saved && typeof navigator !== "undefined") {
      const lang = navigator.language.slice(0, 2).toLowerCase();
      if (lang === "fa" || lang === "ps") saved = lang;
    }
    if (saved) setLocaleState(saved);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = locale;
    document.documentElement.dir = RTL.includes(locale) ? "rtl" : "ltr";
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  };

  const t = (path: string) => resolve(MESSAGES[locale], path);
  const isRtl = RTL.includes(locale);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, isRtl, hydrated }}>
      {children}
    </LocaleContext.Provider>
  );
}
