"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { COUNTRIES, type Country } from "@/lib/countries";

const STORAGE_KEY = "logisticsaf.region";

type Ctx = {
  country: Country;
  setCountry: (c: Country) => void;
  hydrated: boolean;
};

const RegionContext = createContext<Ctx | null>(null);

export function useRegion() {
  const ctx = useContext(RegionContext);
  if (!ctx) {
    return { country: COUNTRIES[0], setCountry: () => {}, hydrated: false };
  }
  return ctx;
}

export function RegionProvider({ children }: { children: React.ReactNode }) {
  const [country, setCountryState] = useState<Country>(COUNTRIES[0]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const found = COUNTRIES.find((c) => c.code === saved);
        if (found) setCountryState(found);
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  const setCountry = (c: Country) => {
    setCountryState(c);
    try {
      localStorage.setItem(STORAGE_KEY, c.code);
    } catch {
      /* ignore */
    }
  };

  return (
    <RegionContext.Provider value={{ country, setCountry, hydrated }}>
      {children}
    </RegionContext.Provider>
  );
}
