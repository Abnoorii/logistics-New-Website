"use client";

import { Reveal } from "@/components/interactive/reveal";
import { Section } from "@/components/ui/section";
import { CalendarClock, ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * Cal.com booking widget.
 *
 * When NEXT_PUBLIC_CAL_LINK is set (e.g. "logistics-af/sales-intro"),
 * an inline iframe embed renders. Otherwise a placeholder appears
 * with instructions.
 *
 * Setup:
 *  1. Sign up at https://cal.com (free tier available).
 *  2. Create a 20-minute "Sales intro" event type.
 *  3. Copy the link slug (yourname/event-slug).
 *  4. Add to Vercel env: NEXT_PUBLIC_CAL_LINK=yourname/event-slug
 *  5. Redeploy.
 */
export function BookACall({
  eyebrow = "Prefer a call?",
  title = "Book 20 minutes with sales.",
  intro = "Pick a time that suits you. A named account lead will call you at that time to walk through your lane.",
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
}) {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK;

  return (
    <Section eyebrow={eyebrow} title={title} intro={intro}>
      <Reveal>
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-ink-800/40 backdrop-blur">
          {calLink ? (
            <iframe
              src={`https://cal.com/${calLink}?embed=true&theme=dark`}
              title="Book a call"
              className="h-[720px] w-full"
              loading="lazy"
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 p-16 text-center">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-amber-400/10 text-amber-300 ring-1 ring-inset ring-amber-400/20">
                <CalendarClock className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl text-steel-100">
                Scheduling coming soon.
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-steel-400">
                In the meantime, send us a quick note about your lane and a
                named account lead will call you back within four business hours.
              </p>
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-medium text-ink-950 transition-colors hover:bg-amber-300"
              >
                Send a note <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
