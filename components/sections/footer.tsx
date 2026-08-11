import Link from "next/link";
import { COUNTRIES } from "@/lib/countries";
import { SERVICES } from "@/lib/services";
import { SITE, CONTACT, ADDRESS, ACCREDITATIONS } from "@/lib/site";
import { MapPin, PhoneCall, Mail } from "lucide-react";
import { NewsletterForm } from "@/components/sections/newsletter-form";

const COMPANY = [
  { label: "About", href: "/about" },
  { label: "How we work", href: "/scenarios" },
  { label: "Pricing", href: "/pricing" },
  { label: "Compare", href: "/compare" },
  { label: "Sustainability", href: "/sustainability" },
];

const SUPPORT = [
  { label: "Contact", href: "/contact" },
  { label: "Track a shipment", href: "/track" },
  { label: "Rate request", href: "/contact" },
  { label: "API & integrations", href: "/api-docs" },
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
              <span className="font-display text-xl">{SITE.name}</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-steel-400">
              {SITE.description}
            </p>

            <address className="mt-8 space-y-3 not-italic text-sm text-steel-200">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                <span>
                  {ADDRESS.street}
                  <br />
                  {ADDRESS.landmark}
                  <br />
                  {ADDRESS.city}, {ADDRESS.country}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneCall className="h-4 w-4 shrink-0 text-amber-300" />
                <a href={CONTACT.sales.phoneHref} className="hover:text-amber-300">
                  {CONTACT.sales.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-amber-300" />
                <a
                  href={`mailto:${CONTACT.emails.info}`}
                  className="hover:text-amber-300"
                >
                  {CONTACT.emails.info}
                </a>
              </div>
            </address>

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

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-5">
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

          <div className="lg:col-span-3">
            <NewsletterForm />
          </div>
        </div>

        {/* Accreditations */}
        <div className="mt-16 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-2 md:items-center lg:grid-cols-5">
          <div className="text-[10px] uppercase tracking-widest text-steel-500 lg:col-span-1">
            Accreditations
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:col-span-4">
            {ACCREDITATIONS.map((a) => (
              <div
                key={a.body}
                className="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2"
              >
                <div className="text-xs font-medium text-amber-300">{a.body}</div>
                <div className="mt-0.5 text-[10px] leading-tight text-steel-400">
                  {a.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-steel-500 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
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
