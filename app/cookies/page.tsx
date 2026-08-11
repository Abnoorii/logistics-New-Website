import type { Metadata } from "next";
import { LegalShell, LegalHeading, LegalP, LegalList } from "@/components/ui/legal-shell";
import { SITE, CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `${SITE.name} cookie policy — what we set, why, and how to opt out.`,
  alternates: { canonical: `${SITE.url}/cookies` },
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <LegalShell eyebrow="Legal" title="Cookie Policy" updated="August 2026">
      <LegalHeading>1. What are cookies</LegalHeading>
      <LegalP>
        Cookies are small text files stored on your device by websites you
        visit. They help sites remember your preferences and understand how
        visitors use the site.
      </LegalP>

      <LegalHeading>2. What we use</LegalHeading>
      <LegalP>
        This site is deliberately minimal. We use:
      </LegalP>
      <LegalList>
        <li>
          <strong>Local storage</strong> to remember your selected region so
          it persists between visits (single key,{" "}
          <code>logisticsaf.region</code>). No personal data.
        </li>
        <li>
          <strong>Session storage</strong> to skip the intro animation on
          repeat visits within a session.
        </li>
        <li>
          <strong>Vercel Analytics</strong> for anonymized usage statistics.
          Vercel Analytics does not use cookies and does not track visitors
          across sites.
        </li>
        <li>
          <strong>Vercel Speed Insights</strong> for anonymized performance
          measurements. No cookies, no cross-site tracking.
        </li>
      </LegalList>

      <LegalHeading>3. What we do not use</LegalHeading>
      <LegalP>
        We do not use advertising cookies, third-party marketing pixels,
        session replay, or cross-site tracking.
      </LegalP>

      <LegalHeading>4. Opting out</LegalHeading>
      <LegalP>
        You can clear local and session storage at any time from your
        browser&rsquo;s settings. If you disable JavaScript, none of the
        above will run.
      </LegalP>

      <LegalHeading>5. Contact</LegalHeading>
      <LegalP>
        Questions about this policy may be sent to{" "}
        <a href={`mailto:${CONTACT.emails.info}`}>{CONTACT.emails.info}</a>.
      </LegalP>
    </LegalShell>
  );
}
