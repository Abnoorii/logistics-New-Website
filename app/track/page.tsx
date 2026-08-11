import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { TrackForm } from "@/components/sections/track-form";
import { Reveal } from "@/components/interactive/reveal";
import { PhoneCall, Mail } from "lucide-react";
import { CONTACT, SITE } from "@/lib/site";

const description =
  "Look up the status of your Logistics.af shipment. Enter a reference, container number, master B/L or AWB to see live milestones.";

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

export default function TrackPage() {
  return (
    <>
      <PageHero
        eyebrow="Live tracking · preview"
        title="Where is my cargo?"
        intro="Real-time tracking connects to carrier feeds and our internal dispatch system. This page is a preview — try the demo reference to see what it feels like. Real accounts get their own login and live milestones from day one."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <TrackForm />
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur">
                <h3 className="font-display text-xl text-steel-100">
                  Prefer a human?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-300">
                  If you know your account manager, message them directly. Or reach the ops desk in your region — someone is on the desk 24/7 during active shipments.
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
