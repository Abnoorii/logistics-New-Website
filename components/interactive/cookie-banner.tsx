"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "logisticsaf.cookieAck";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      /* private mode */
    }
    if (!seen) {
      const t = setTimeout(() => setVisible(true), 1800);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-4 bottom-4 z-40 mx-auto max-w-2xl rounded-2xl border border-white/10 bg-ink-800/95 p-4 backdrop-blur-xl shadow-2xl md:inset-x-auto md:right-24 md:bottom-6 md:p-5"
          role="dialog"
          aria-labelledby="cookie-title"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-start">
            <div className="flex-1">
              <div id="cookie-title" className="text-sm font-medium text-steel-100">
                Minimal cookies, no tracking.
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-steel-300">
                We use browser storage to remember your region and skip the
                intro on repeat visits, plus anonymized Vercel Analytics. No
                advertising, no cross-site tracking. See our{" "}
                <Link href="/cookies" className="text-amber-300 underline underline-offset-4 hover:text-amber-200">
                  cookie policy
                </Link>.
              </p>
            </div>
            <button
              onClick={dismiss}
              className="rounded-full bg-amber-400 px-4 py-2 text-xs font-medium text-ink-950 transition-colors hover:bg-amber-300"
            >
              Got it
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
