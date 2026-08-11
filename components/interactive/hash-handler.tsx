"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useLenis } from "@/components/providers/lenis-provider";

/**
 * Watches the URL hash and scrolls to the target element after route
 * transitions. Handles the Next-App-Router + Lenis case where native
 * hash-jump doesn't fire (Lenis intercepts scroll).
 */
export function HashHandler() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (!hash) return;

    let attempt = 0;
    const tryScroll = () => {
      const el = document.querySelector(hash);
      if (el) {
        if (lenis) {
          lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.4 });
        } else {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        return;
      }
      if (attempt++ < 20) requestAnimationFrame(tryScroll);
    };
    tryScroll();
  }, [pathname, lenis]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onHashChange = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const el = document.querySelector(hash);
      if (!el) return;
      if (lenis) {
        lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.4 });
      } else {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [lenis]);

  return null;
}
