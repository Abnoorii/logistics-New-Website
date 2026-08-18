import Link from "next/link";
import { ArrowRight, MapPinOff } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative min-h-[80svh] overflow-hidden pt-40 pb-24">
      <div className="absolute inset-0 bg-mesh-1 opacity-70" />
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="noise" />
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300 ring-1 ring-inset ring-amber-400/30">
            <MapPinOff className="h-7 w-7" />
          </div>
          <div className="mb-4 font-mono text-xs uppercase tracking-widest text-amber-400">
            404 · Off-route
          </div>
          <h1 className="font-display text-4xl leading-tight text-steel-100 text-balance md:text-6xl">
            This lane doesn&rsquo;t run.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-steel-300 text-pretty">
            The page you asked for isn&rsquo;t on any of our 13 trade lanes.
            Either the URL is stale or the cargo hasn&rsquo;t been booked yet.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-amber-500"
            >
              Back to home <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm text-steel-100 backdrop-blur transition-colors hover:border-amber-400 hover:text-amber-300"
            >
              Talk to ops
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
