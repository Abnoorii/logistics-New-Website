"use client";

import { motion } from "framer-motion";
import { CONTACT } from "@/lib/site";
import { useEffect, useState } from "react";

export function WhatsAppFAB() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.a
      href={CONTACT.sales.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with sales on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={visible ? { scale: 1, opacity: 1 } : {}}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.55)] transition-all hover:bg-[#20bd5c] hover:shadow-[0_12px_36px_-6px_rgba(37,211,102,0.7)] md:bottom-6 md:right-6"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inset-0 animate-ping rounded-full bg-white/60" />
        <span className="relative h-2.5 w-2.5 rounded-full bg-white" />
      </span>
      <WhatsAppIcon />
      <span className="hidden md:inline">Chat on WhatsApp</span>
    </motion.a>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-current"
      aria-hidden
      focusable="false"
    >
      <path d="M20.52 3.48A11.79 11.79 0 0 0 12 0C5.37 0 0 5.37 0 12a11.85 11.85 0 0 0 1.61 5.94L0 24l6.24-1.63A11.9 11.9 0 0 0 12 24c6.63 0 12-5.37 12-12a11.79 11.79 0 0 0-3.48-8.52Zm-8.52 18.42a9.9 9.9 0 0 1-5-1.36l-.36-.21-3.71.97.99-3.62-.23-.37A9.9 9.9 0 1 1 22 12a9.86 9.86 0 0 1-10 9.9Zm5.44-7.42c-.3-.15-1.77-.87-2.05-.97s-.47-.15-.67.15-.77.97-.94 1.17-.35.22-.65.07a8.13 8.13 0 0 1-2.4-1.48 9 9 0 0 1-1.66-2.06c-.17-.3 0-.46.13-.6s.3-.35.45-.52a2 2 0 0 0 .3-.5.55.55 0 0 0 0-.53c-.07-.15-.67-1.62-.92-2.22s-.49-.5-.67-.51h-.57a1.1 1.1 0 0 0-.8.37 3.36 3.36 0 0 0-1.05 2.5c0 1.47 1.07 2.9 1.22 3.1s2.11 3.22 5.11 4.51c.71.3 1.27.48 1.71.62.72.23 1.37.2 1.89.12a3.09 3.09 0 0 0 2.03-1.43 2.5 2.5 0 0 0 .17-1.43c-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}
