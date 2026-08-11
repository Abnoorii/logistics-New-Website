import Link from "next/link";
import { type ReactNode } from "react";
import { AlertTriangle } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";

export function LegalShell({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={`Last updated: ${updated}.`} />
      <Section>
        <div className="mb-10 flex items-start gap-3 rounded-2xl border border-amber-400/30 bg-amber-400/[0.06] p-5 text-sm text-amber-100">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
          <div>
            <span className="font-medium text-amber-200">Template — review with counsel before launch.</span>{" "}
            This text is a reasonable starting point but has not been reviewed
            by a lawyer. Adapt to your jurisdiction and the actual data flows
            in your business before publishing to production.
          </div>
        </div>
        <div className="max-w-3xl space-y-6 text-base leading-relaxed text-steel-300">
          {children}
        </div>
        <div className="mt-14 flex flex-wrap gap-6 text-sm text-steel-400">
          <Link href="/privacy" className="hover:text-amber-300">Privacy</Link>
          <Link href="/terms" className="hover:text-amber-300">Terms</Link>
          <Link href="/cookies" className="hover:text-amber-300">Cookies</Link>
        </div>
      </Section>
    </>
  );
}

export function LegalHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="!mt-12 font-display text-2xl text-steel-100 first:!mt-0">
      {children}
    </h2>
  );
}

export function LegalP({ children }: { children: ReactNode }) {
  return <p className="text-base leading-relaxed text-steel-300">{children}</p>;
}

export function LegalList({ children }: { children: ReactNode }) {
  return (
    <ul className="space-y-2 pl-5 [&>li]:list-disc [&>li]:text-steel-300">
      {children}
    </ul>
  );
}
