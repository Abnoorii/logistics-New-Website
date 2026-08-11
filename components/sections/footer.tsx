import Link from "next/link";
import { COUNTRIES } from "@/lib/countries";
import { SERVICES } from "@/lib/services";

const COMPANY = [
  { label: "About", href: "/about" },
  { label: "How we work", href: "/scenarios" },
  { label: "Pricing", href: "/pricing" },
  { label: "Careers", href: "/about" },
  { label: "Press", href: "/about" },
];

const SUPPORT = [
  { label: "Contact", href: "/contact" },
  { label: "Track a shipment", href: "/track" },
  { label: "Rate request", href: "/contact" },
  { label: "FAQ", href: "/#faq" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950 pt-24 pb-10">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-amber-400 text-ink-950">
                <svg viewBox="0 0 24 24" className="h-4 w-4">
                  <path d="M3 12L12 3l9 9-9 9-9-9zm9-5l-5 5 5 5 5-5-5-5z" fill="currentColor" />
                </svg>
              </span>
              <span className="font-display text-xl">Logistics.af</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-steel-400">
              Global freight forwarding across air, ocean, road and rail — with
              the visibility, precision, and human care your supply chain
              deserves.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {COUNTRIES.map((c) => (
                <span
                  key={c.code}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-steel-300"
                  title={c.name}
                >
                  <span>{c.flag}</span>
                  {c.code}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            <FooterCol heading="Services">
              {SERVICES.map((s) => (
                <FooterLink key={s.slug} href={`/services/${s.slug}`}>
                  {s.title}
                </FooterLink>
              ))}
            </FooterCol>
            <FooterCol heading="Company">
              {COMPANY.map((l) => (
                <FooterLink key={l.label} href={l.href}>
                  {l.label}
                </FooterLink>
              ))}
            </FooterCol>
            <FooterCol heading="Support">
              {SUPPORT.map((l) => (
                <FooterLink key={l.label} href={l.href}>
                  {l.label}
                </FooterLink>
              ))}
            </FooterCol>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-steel-500 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Logistics.af. All rights reserved.</span>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy" className="hover:text-steel-100">Privacy</Link>
            <Link href="/terms" className="hover:text-steel-100">Terms</Link>
            <Link href="/cookies" className="hover:text-steel-100">Cookies</Link>
          </div>
          <span className="font-mono uppercase tracking-widest">
            Made for cargo · Kabul → World
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="mb-5 text-[10px] uppercase tracking-widest text-steel-500">
        {heading}
      </h4>
      <ul className="space-y-3 text-sm text-steel-200">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link href={href} className="transition-colors hover:text-amber-300">
        {children}
      </Link>
    </li>
  );
}
