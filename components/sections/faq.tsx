"use client";

import { Section } from "@/components/ui/section";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/interactive/reveal";

const FAQS = [
  {
    q: "What modes and lanes do you cover?",
    a: "Full-service across air, ocean, road and rail, plus warehousing and 3PL. Named hubs in Sydney, Auckland, Shanghai, Shenzhen, Hong Kong, Ho Chi Minh City, Bangkok, LA, Hamburg and London — with agent networks everywhere else.",
  },
  {
    q: "How quickly can I get a rate?",
    a: "Standard lanes get a firm rate within four business hours. Project cargo and out-of-scope movements get an engineering-led quote in one to three business days, depending on permits and equipment.",
  },
  {
    q: "Do you offer bonded warehousing?",
    a: "Yes — bonded and general storage at all five owned hubs, with pick-pack, kitting, DTC fulfilment, and integrations for Shopify, Amazon, and major WMS platforms.",
  },
  {
    q: "How do you handle customs?",
    a: "In-house licensed brokers on both ends of every lane we run. That includes tariff advice, FTA optimisation, permits, quarantine, drawback claims and disputes.",
  },
  {
    q: "What tracking visibility do I get?",
    a: "One dashboard, real-time, from booking to POD. Vessel and flight-level tracking, milestone alerts pushed to email, Slack or webhook, and photo documentation on collection and delivery.",
  },
  {
    q: "Do you handle project and oversize cargo?",
    a: "Regularly. Breakbulk, RoRo, oversized crates, multi-modal moves — planned lane-by-lane with permit management across borders and a single point of accountability.",
  },
  {
    q: "How does pricing work?",
    a: "Published rate cards, no surprise ancillaries. Documentation, ISF, AMS, standard filing fees are included. Storage and demurrage are billed at cost with photo evidence attached.",
  },
  {
    q: "What SLA do you commit to?",
    a: "98% on-time to milestone by lane, 4-hour rate response on standard lanes, and a named account lead reachable in your time zone 24/7 during active shipments.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section
      id="faq"
      eyebrow="Frequently asked"
      title="The questions we get most before people move."
    >
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="text-lg leading-relaxed text-steel-300">
              Straight answers to what shippers ask us before they switch
              forwarders. Missing yours? Get in touch and we&apos;ll respond in
              the same tone.
            </p>
          </Reveal>
          <Reveal>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-steel-200">
              <span className="h-2 w-2 rounded-full bg-signal-400" />
              Avg. reply time: 42 minutes
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <div className="divide-y divide-white/10 border-y border-white/10">
            {FAQS.map((item, i) => (
              <FAQRow
                key={i}
                q={item.q}
                a={item.a}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function FAQRow({
  q,
  a,
  open,
  onToggle,
  index,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;
  return (
    <div className="py-2">
      <button
        onClick={onToggle}
        id={buttonId}
        aria-controls={panelId}
        aria-expanded={open}
        className="group flex w-full items-start justify-between gap-6 py-6 text-left"
      >
        <div className="flex items-start gap-6">
          <span className="mt-1.5 font-mono text-xs text-steel-500">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-lg text-steel-100 transition-colors group-hover:text-amber-300 md:text-xl">
            {q}
          </span>
        </div>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-1 shrink-0 rounded-full border border-white/15 bg-white/5 p-2 text-steel-200 transition-colors group-hover:border-amber-400 group-hover:text-amber-300"
        >
          <Plus className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-8 pl-12 pr-4 text-steel-300 md:text-lg">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
