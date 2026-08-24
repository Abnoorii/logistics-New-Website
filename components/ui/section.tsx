import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export function Section({
  id,
  className,
  children,
  eyebrow,
  title,
  intro,
}: {
  id?: string;
  className?: string;
  children?: ReactNode;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <section id={id} className={cn("relative py-24 md:py-32", className)}>
      <div className="container relative">
        {(eyebrow || title || intro) && (
          <header className="mb-14 max-w-3xl md:mb-20">
            {eyebrow && (
              <div className="mb-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-red-500">
                <span className="h-1 w-6 bg-brand-red-500" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="font-display text-display-3 text-steel-100 text-balance">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel-300 text-pretty">
                {intro}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
