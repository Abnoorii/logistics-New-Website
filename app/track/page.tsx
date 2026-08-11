import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { TrackForm } from "@/components/sections/track-form";
import { Reveal } from "@/components/interactive/reveal";
import { PhoneCall, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Track a shipment — Meridian Freight",
  description:
    "Look up the status of your Meridian shipment. Enter a reference or B/L number to see live milestones.",
};

export default function TrackPage() {
  return (
    <>
      <PageHero
        eyebrow="Live tracking"
        title="Where is my cargo?"
        intro="Enter a Meridian reference, container number, master B/L or AWB. You'll see the same milestones your account team sees — as they land."
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
                    href="tel:+61200000000"
                    className="flex items-center gap-3 text-steel-100 transition-colors hover:text-amber-300"
                  >
                    <PhoneCall className="h-4 w-4 text-amber-300" />
                    +61 2 0000 0000 (Sydney ops)
                  </a>
                  <a
                    href="mailto:ops@meridianfreight.example"
                    className="flex items-center gap-3 text-steel-100 transition-colors hover:text-amber-300"
                  >
                    <Mail className="h-4 w-4 text-amber-300" />
                    ops@meridianfreight.example
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
