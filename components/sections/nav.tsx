"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ChevronDown, Globe2, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { COUNTRIES, type Country } from "@/lib/countries";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/track", label: "Track" },
  { href: "/#insights", label: "Insights" },
  { href: "/#faq", label: "FAQ" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [country, setCountry] = useState<Country>(COUNTRIES[0]);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  const entryDelay = pathname === "/" ? 1.6 : 0;

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: entryDelay }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-6"
        )}
      >
        <div className="container">
          <div
            className={cn(
              "flex items-center justify-between rounded-full border transition-all duration-500",
              scrolled
                ? "border-white/10 bg-ink-900/80 px-4 backdrop-blur-xl"
                : "border-transparent bg-transparent px-2"
            )}
          >
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium tracking-tight"
            >
              <LogoMark />
              <span className="font-display text-base">Meridian</span>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-full px-4 py-2 text-sm text-steel-200 transition-colors hover:text-amber-300"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <div className="relative">
                <button
                  onClick={() => setPickerOpen((v) => !v)}
                  className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-steel-100 transition-colors hover:border-amber-400 md:flex"
                  aria-expanded={pickerOpen}
                >
                  <Globe2 className="h-4 w-4 text-amber-400" />
                  <span className="hidden sm:inline">{country.flag}</span>
                  <span>{country.code}</span>
                  <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                </button>
                <AnimatePresence>
                  {pickerOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full z-50 mt-3 w-72 rounded-2xl border border-white/10 bg-ink-800/95 p-2 backdrop-blur-xl shadow-2xl"
                    >
                      <div className="px-3 py-2 text-[10px] uppercase tracking-widest text-steel-400">
                        Choose region
                      </div>
                      {COUNTRIES.map((c) => (
                        <button
                          key={c.code}
                          onClick={() => {
                            setCountry(c);
                            setPickerOpen(false);
                          }}
                          className={cn(
                            "flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition-colors",
                            country.code === c.code
                              ? "bg-amber-400/10 text-amber-300"
                              : "text-steel-100 hover:bg-white/5"
                          )}
                        >
                          <span className="flex items-center gap-3">
                            <span className="text-lg">{c.flag}</span>
                            <span>{c.name}</span>
                          </span>
                          <span className="text-xs text-steel-400">{c.hub}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/contact" className="hidden md:block">
                <Button size="sm" variant="primary">Get a quote</Button>
              </Link>

              <button
                onClick={() => setMobileOpen(true)}
                className="rounded-full border border-white/10 bg-white/5 p-2 text-steel-100 lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink-950/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container flex items-center justify-between py-6">
              <span className="font-display text-lg">Meridian</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-full border border-white/10 bg-white/5 p-2"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { staggerChildren: 0.05 } }}
              className="container flex flex-col gap-2 pt-10"
            >
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-white/5 py-4 font-display text-3xl text-steel-100"
                >
                  {l.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="mt-10 block">
                <Button size="lg" variant="primary" magnetic={false}>
                  Get a quote
                </Button>
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function LogoMark() {
  return (
    <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400 text-ink-950">
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
        <path
          d="M3 12L12 3l9 9-9 9-9-9zm9-5l-5 5 5 5 5-5-5-5z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}
