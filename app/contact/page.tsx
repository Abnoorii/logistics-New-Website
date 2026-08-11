import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/sections/contact-form";
import { Reveal } from "@/components/interactive/reveal";
import { COUNTRIES } from "@/lib/countries";
import { PhoneCall, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Get a quote — Meridian Freight",
  description:
    "Tell us the lane, the ship-by date, and what's in the box. Firm quote and a named contact within four business hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={
          <>
            Tell us the lane.
            <br />
            We&rsquo;ll build the plan.
          </>
        }
        intro="A firm quote and a named contact within four business hours. If it's urgent, call the ops desk — someone's always on the phone."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="rounded-3xl border border-amber-400/30 bg-amber-400/[0.04] p-8">
                <div className="text-[10px] uppercase tracking-widest text-amber-300">
                  What to expect
                </div>
                <ul className="mt-6 space-y-4 text-sm text-steel-200">
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                    Firm rate within four business hours on standard lanes.
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                    Project cargo: engineering-led quote in 1–3 business days.
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                    Named account lead on the reply, reachable in your time zone.
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
                <h3 className="font-display text-xl text-steel-100">Prefer to call?</h3>
                <div className="mt-6 space-y-4 text-sm">
                  <a
                    href="tel:+61200000000"
                    className="flex items-center gap-3 text-steel-100 transition-colors hover:text-amber-300"
                  >
                    <PhoneCall className="h-4 w-4 text-amber-300" />
                    +61 2 0000 0000 (Sydney HQ)
                  </a>
                  <a
                    href="mailto:hello@meridianfreight.example"
                    className="flex items-center gap-3 text-steel-100 transition-colors hover:text-amber-300"
                  >
                    <Mail className="h-4 w-4 text-amber-300" />
                    hello@meridianfreight.example
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
                <h3 className="font-display text-xl text-steel-100">Offices</h3>
                <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                  {COUNTRIES.map((c) => (
                    <div key={c.code} className="flex items-center gap-2">
                      <span>{c.flag}</span>
                      <span className="text-steel-300">{c.hub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
