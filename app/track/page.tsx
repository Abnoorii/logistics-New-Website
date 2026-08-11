import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { TrackForm } from "@/components/sections/track-form";
import { Reveal, RevealItem, RevealStagger } from "@/components/interactive/reveal";
import { PhoneCall, Mail, CheckCircle2 } from "lucide-react";
import { CONTACT, SITE } from "@/lib/site";

const description =
  "Client portal launching Q4. Preview the tracking experience today. Enter a reference, container number, master B/L or AWB to see the demo interface.";

export const metadata: Metadata = {
  title: "Track a shipment",
  description,
  alternates: { canonical: `${SITE.url}/track` },
  openGraph: {
    title: `Track a shipment — ${SITE.name}`,
    description,
    url: `${SITE.url}/track`,
    siteName: SITE.name,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `Track a shipment — ${SITE.name}`, description },
};

const PORTAL_FEATURES = [
  "Live milestone tracking from booking to POD",
  "Vessel and flight-level positions via carrier feeds",
  "Photo POD on collection and delivery",
  "Document library — B/L, invoices, permits, packing lists",
  "Slack, email and webhook alerts to your ops team",
  "Named account lead reachable in your time zone",
];

export default function TrackPage() {
  return (
    <>
      <PageHero
        eyebrow="Client portal · Q4 2026"
        title="Full tracking, coming soon."
        intro="A signed-in client portal with live carrier feeds, milestone alerts, and a document library is landing Q4. Until then, active shipments are tracked through your named account lead — see below."
      />

      <Section
        eyebrow="What's coming"
        title="What the portal will do."
      >
        <RevealStagger className="grid gap-4 md:grid-cols-2">
          {PORTAL_FEATURES.map((f) => (
            <RevealItem key={f}>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-signal-400" />
                <span className="text-sm text-steel-200">{f}</span>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      <Section
        eyebrow="Preview"
        title="See the tracking view."
        intro="A working preview of the tracking interface — with sample data so you can see how milestones and alerts will present. Try the demo reference to explore it."
      >
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <TrackForm />
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur">
                <h3 className="font-display text-xl text-steel-100">
                  For live shipments today
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-300">
                  Active shipments are tracked through your named account lead.
                  Call the ops desk any time during your shipment window —
                  someone is on the phone 24/7 during active moves.
                </p>
                <div className="mt-6 space-y-4 text-sm">
                  <a
                    href={CONTACT.ops.phoneHref}
                    className="flex items-center gap-3 text-steel-100 transition-colors hover:text-amber-300"
                  >
                    <PhoneCall className="h-4 w-4 text-amber-300" />
                    {CONTACT.ops.phone} · {CONTACT.ops.label}
                  </a>
                  <a
                    href={`mailto:${CONTACT.emails.info}`}
                    className="flex items-center gap-3 text-steel-100 transition-colors hover:text-amber-300"
                  >
                    <Mail className="h-4 w-4 text-amber-300" />
                    {CONTACT.emails.info}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
