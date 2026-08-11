"use client";

import { Section } from "@/components/ui/section";
import { RevealItem, RevealStagger } from "@/components/interactive/reveal";
import { motion } from "framer-motion";
import {
  Plane,
  Ship,
  ScrollText,
  Warehouse,
  Boxes,
  Truck,
  ArrowUpRight,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";
import Link from "next/link";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tag: string;
};

const SERVICES: Service[] = [
  {
    icon: Plane,
    title: "Air Freight",
    tag: "01 / Air",
    desc: "Consolidated, express and charter — with priority uplift on partner carriers when hours matter.",
  },
  {
    icon: Ship,
    title: "Ocean Freight",
    tag: "02 / Sea",
    desc: "FCL and LCL sailings across every major trade lane, with weekly consolidations ex-Asia.",
  },
  {
    icon: ScrollText,
    title: "Customs Brokerage",
    tag: "03 / Trade",
    desc: "Licensed brokers on both ends — tariff advice, FTAs, permits, quarantine, drawbacks.",
  },
  {
    icon: Warehouse,
    title: "Warehousing & 3PL",
    tag: "04 / Store",
    desc: "Bonded and general storage with pick-pack, kitting, and DTC fulfilment out of five hubs.",
  },
  {
    icon: Boxes,
    title: "Project Cargo",
    tag: "05 / Heavy",
    desc: "Oversize, breakbulk, RoRo and multi-modal moves engineered lane-by-lane, permit-by-permit.",
  },
  {
    icon: Truck,
    title: "Domestic & Interstate",
    tag: "06 / Road",
    desc: "Line-haul, last-mile and dedicated fleets across ANZ — same asset base your ocean cargo lands on.",
  },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="What we move"
      title="Six services. One accountable team behind every move."
      intro="Choose the mode. We handle the choreography — from booking to proof of delivery, on one dashboard."
    >
      <RevealStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <RevealItem key={s.title}>
            <ServiceCard {...s} index={i} />
          </RevealItem>
        ))}
      </RevealStagger>
    </Section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
  tag,
  index,
}: Service & { index: number }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-ink-800/60 p-8 backdrop-blur transition-colors duration-500 hover:border-amber-400/50"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--x,50%) var(--y,0%), rgba(249,171,39,0.12), transparent 40%)",
        }}
      />
      <div className="relative flex items-start justify-between">
        <span className="font-mono text-xs uppercase tracking-widest text-steel-500">
          {tag}
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 p-2 text-amber-300 transition-transform duration-500 group-hover:-rotate-12 group-hover:border-amber-400 group-hover:text-amber-400">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <div className="relative mt-16">
        <motion.div
          initial={{ y: 0 }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-400/0 text-amber-300 ring-1 ring-inset ring-amber-400/30"
        >
          <Icon className="h-6 w-6" />
        </motion.div>
        <h3 className="font-display text-2xl font-medium text-steel-100">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-steel-300">{desc}</p>
      </div>

      <div className="relative mt-8 border-t border-white/5 pt-5">
        <Link
          href="#"
          className="inline-flex items-center gap-2 text-sm font-medium text-steel-200 transition-colors group-hover:text-amber-300"
        >
          Learn more
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <span className="absolute right-6 top-6 font-display text-[7rem] font-medium leading-none tracking-tighter text-white/[0.03] transition-transform duration-700 group-hover:-translate-y-1">
        {String(index + 1).padStart(2, "0")}
      </span>
    </motion.div>
  );
}
