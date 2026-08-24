"use client";

import Link from "next/link";
import { useEffect } from "react";
import { AlertTriangle, RotateCw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="relative min-h-[80svh] overflow-hidden pt-40 pb-24">
      <div className="absolute inset-0 bg-mesh-1 opacity-70" />
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 text-red-300 ring-1 ring-inset ring-red-500/30">
            <AlertTriangle className="h-7 w-7" />
          </div>
          <div className="mb-4 font-mono text-xs uppercase tracking-widest text-red-300">
            Exception · Ops has been paged
          </div>
          <h1 className="font-display text-4xl leading-tight text-steel-100 text-balance md:text-5xl">
            A stop-work happened on our end.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-steel-300 text-pretty">
            Not you. This page threw an error and our team has been notified.
            Try again — if it repeats, contact us and we&rsquo;ll trace it.
          </p>
          {error.digest && (
            <p className="mt-3 font-mono text-xs text-steel-500">
              ref: {error.digest}
            </p>
          )}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-full bg-brand-red-500 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-red-600"
            >
              <RotateCw className="h-4 w-4" /> Try again
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm text-steel-100 backdrop-blur transition-colors hover:border-brand-red-500 hover:text-brand-red-300"
            >
              Report the error
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
