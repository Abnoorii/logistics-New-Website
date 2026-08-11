"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Plane, Ship, Truck } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const blurY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const orbitRot = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden pt-32 md:pt-40"
    >
      <div className="absolute inset-0 bg-mesh-1" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <motion.div
        style={{ y: blurY }}
        className="absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full bg-amber-400/20 blur-[120px]"
      />
      <motion.div
        style={{ y: blurY }}
        className="absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-signal-500/15 blur-[100px]"
      />
      <div className="noise" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-steel-200 backdrop-blur"
        >
          <span className="h-1 w-6 bg-amber-400" />
          Air · Ocean · Road · Customs · 3PL
        </motion.div>

        <motion.h1
          style={{ y: titleY }}
          className="max-w-[14ch] font-display text-display-1 font-medium text-steel-100 text-balance md:max-w-[15ch] lg:max-w-[18ch]"
        >
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            Every leg
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            of the{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                journey
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-2 left-0 h-1 w-full origin-left bg-amber-400/60"
              />
            </span>
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-steel-300 text-pretty md:text-xl"
        >
          Logistics.af moves cargo across air, ocean, road and rail — with the
          visibility, precision, and human care your supply chain deserves.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link href="/contact">
            <Button size="lg" variant="primary">
              Get a quote <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm font-medium text-steel-100 backdrop-blur transition-colors hover:border-amber-400 hover:text-amber-300"
          >
            Explore services
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        <div className="mt-24 flex flex-wrap items-center gap-x-8 gap-y-4 text-xs uppercase tracking-widest text-steel-400 md:mt-32">
          <span>Kabul · Tehran · Karachi · Dubai · Istanbul · Beijing · Moscow · Almaty</span>
        </div>
      </div>

      {/* Orbit graphic */}
      <motion.div
        style={{ rotate: orbitRot }}
        className="pointer-events-none absolute -right-[18%] top-[16%] hidden aspect-square w-[880px] origin-center scale-[0.55] items-center justify-center md:flex lg:-right-[28%] lg:top-[8%] lg:scale-100"
      >
        <div className="absolute inset-0 rounded-full border border-white/10" />
        <div className="absolute inset-16 rounded-full border border-white/10" />
        <div className="absolute inset-32 rounded-full border border-white/10" />
        <div className="absolute inset-52 rounded-full border border-dashed border-amber-400/40" />
        <Orbiter icon={<Plane className="h-4 w-4" />} radius={440} speed={22} />
        <Orbiter icon={<Ship className="h-4 w-4" />} radius={370} speed={30} reverse />
        <Orbiter icon={<Truck className="h-4 w-4" />} radius={300} speed={18} />
      </motion.div>
    </section>
  );
}

function Orbiter({
  icon,
  radius,
  speed,
  reverse = false,
}: {
  icon: React.ReactNode;
  radius: number;
  speed: number;
  reverse?: boolean;
}) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{ width: radius * 2, height: radius * 2, marginLeft: -radius, marginTop: -radius }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
    >
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-ink-800/80 p-2 text-amber-300 backdrop-blur"
        style={{ left: "50%", top: 0 }}
      >
        {icon}
      </div>
    </motion.div>
  );
}
