"use client";

import { Section } from "@/components/ui/section";
import { RevealItem, RevealStagger } from "@/components/interactive/reveal";
import { motion } from "framer-motion";
import {
  Compass,
  Headphones,
  ShieldCheck,
  Sparkles,
  Timer,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Benefit = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const BENEFITS: Benefit[] = [
  {
    icon: Compass,
    title: "One dashboard",
    desc: "Bookings, milestones, docs and invoices — never scattered across email chains.",
  },
  {
    icon: Timer,
    title: "Priority uplift",
    desc: "Named carrier allocations mean space when the market is tight.",
  },
  {
    icon: ShieldCheck,
    title: "Bonded network",
    desc: "Licensed brokers and bonded warehouses on both ends of every lane.",
  },
  {
    icon: Headphones,
    title: "Humans, always",
    desc: "A named account lead, plus a 24/7 ops desk in your time zone.",
  },
  {
    icon: Sparkles,
    title: "No junk fees",
    desc: "Flat, published rate cards. Documentation, ISF, AMS — included.",
  },
];

export function Why() {
  return (
    <Section
      id="why"
      eyebrow="Why Logistics.af"
      title="The reasons customers rebook — every quarter, every peak."
      intro="Freight forwarders promise the world. Here's what earns repeat business, according to the operations leaders we work with."
    >
      <RevealStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {BENEFITS.map((b) => (
          <RevealItem key={b.title}>
            <BenefitCard {...b} />
          </RevealItem>
        ))}
      </RevealStagger>
    </Section>
  );
}

function BenefitCard({ icon: Icon, title, desc }: Benefit) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur transition-colors hover:border-amber-400/40"
    >
      <motion.div
        className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300 ring-1 ring-inset ring-amber-400/20"
        whileHover={{ rotate: -6, scale: 1.05 }}
      >
        <Icon className="h-5 w-5" />
      </motion.div>
      <h3 className="font-display text-lg text-steel-100">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-steel-400">{desc}</p>
      <span className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-amber-400/0 blur-2xl transition-colors duration-500 group-hover:bg-amber-400/10" />
    </motion.div>
  );
}
