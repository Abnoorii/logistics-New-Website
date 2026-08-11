"use client";

import { Section } from "@/components/ui/section";
import { RevealItem, RevealStagger } from "@/components/interactive/reveal";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

type Insight = {
  category: string;
  title: string;
  date: string;
  readTime: string;
  gradient: string;
};

const INSIGHTS: Insight[] = [
  {
    category: "Market update",
    title: "Trans-Pacific ocean rates: what to expect through Q3",
    date: "Aug 2026",
    readTime: "6 min",
    gradient: "from-amber-400/25 via-transparent to-transparent",
  },
  {
    category: "Compliance",
    title: "IMO 2027 sulphur rules and what shippers should renegotiate now",
    date: "Aug 2026",
    readTime: "4 min",
    gradient: "from-signal-500/25 via-transparent to-transparent",
  },
  {
    category: "Playbook",
    title: "Peak season air freight: our booking playbook, unedited",
    date: "Jul 2026",
    readTime: "8 min",
    gradient: "from-purple-500/20 via-transparent to-transparent",
  },
  {
    category: "Customer story",
    title: "How Halcyon Home cut landed cost 11% without changing suppliers",
    date: "Jul 2026",
    readTime: "5 min",
    gradient: "from-amber-400/25 via-transparent to-transparent",
  },
];

export function Insights() {
  return (
    <Section
      id="insights"
      eyebrow="Insights"
      title="What our operations team is watching."
      intro="Field notes from the desk: rate movements, compliance updates, and playbooks from live customer work."
    >
      <RevealStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {INSIGHTS.map((post) => (
          <RevealItem key={post.title}>
            <InsightCard {...post} />
          </RevealItem>
        ))}
      </RevealStagger>

      <div className="mt-14 flex justify-center">
        <Link
          href="#"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-steel-100 transition-colors hover:border-amber-400 hover:text-amber-300"
        >
          Read all insights
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}

function InsightCard({ category, title, date, readTime, gradient }: Insight) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-800/60 backdrop-blur"
    >
      <div className={`relative aspect-[5/3] w-full overflow-hidden bg-gradient-to-br ${gradient} bg-ink-700`}>
        <div className="absolute inset-0 bg-grid opacity-40" />
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />
        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-white/15 bg-ink-900/70 px-3 py-1 text-[10px] uppercase tracking-widest text-amber-300 backdrop-blur">
            {category}
          </span>
        </div>
        <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-steel-100 opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100">
          <ArrowUpRight className="h-3.5 w-3.5" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg leading-snug text-steel-100 text-balance transition-colors group-hover:text-amber-200">
          {title}
        </h3>
        <div className="mt-auto flex items-center justify-between pt-6 text-xs text-steel-500">
          <span>{date}</span>
          <span>{readTime} read</span>
        </div>
      </div>
    </motion.article>
  );
}
