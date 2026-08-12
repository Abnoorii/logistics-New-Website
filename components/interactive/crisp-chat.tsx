"use client";

import { useEffect } from "react";

/**
 * Crisp live-chat integration.
 *
 * Activates only when NEXT_PUBLIC_CRISP_ID is set at build time.
 * Otherwise renders nothing — the WhatsApp FAB remains the primary
 * conversational entry point.
 *
 * Setup:
 *  1. Sign up at https://crisp.chat (free tier available).
 *  2. Copy the Website ID from Settings → Website Settings.
 *  3. Add to Vercel env: NEXT_PUBLIC_CRISP_ID=your-website-id
 *  4. Redeploy.
 *
 * The Crisp widget renders in the bottom-right by default. We nudge
 * it up on mobile so it doesn't collide with the WhatsApp FAB.
 */
declare global {
  interface Window {
    $crisp: unknown[];
    CRISP_WEBSITE_ID: string;
  }
}

export function CrispChat() {
  useEffect(() => {
    const id = process.env.NEXT_PUBLIC_CRISP_ID;
    if (!id) return;
    if (typeof window === "undefined") return;
    if (document.getElementById("crisp-loader")) return;

    window.$crisp = [];
    window.CRISP_WEBSITE_ID = id;

    // Position tweaks so it doesn't collide with the WhatsApp FAB
    window.$crisp.push(["config", "position:reverse", [true]]);

    const s = document.createElement("script");
    s.id = "crisp-loader";
    s.src = "https://client.crisp.chat/l.js";
    s.async = true;
    document.head.appendChild(s);
  }, []);

  return null;
}
