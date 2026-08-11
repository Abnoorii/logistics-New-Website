import type { Metadata } from "next";
import { LegalShell, LegalHeading, LegalP, LegalList } from "@/components/ui/legal-shell";
import { SITE, CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `${SITE.name} privacy policy — what data we collect, how we use it, and your rights.`,
  alternates: { canonical: `${SITE.url}/privacy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalShell eyebrow="Legal" title="Privacy Policy" updated="August 2026">
      <LegalHeading>1. Who we are</LegalHeading>
      <LegalP>
        {SITE.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates{" "}
        <a href={SITE.url}>{SITE.domain}</a> and provides freight forwarding
        services. Questions about this policy can be sent to{" "}
        <a href={`mailto:${CONTACT.emails.info}`}>{CONTACT.emails.info}</a>.
      </LegalP>

      <LegalHeading>2. What we collect</LegalHeading>
      <LegalP>
        When you use our website or engage us as a customer, we may collect:
      </LegalP>
      <LegalList>
        <li>Contact information you submit — name, email, company, phone.</li>
        <li>Details of the shipment or quote you request — origin, destination, ship-by date, commodity.</li>
        <li>Technical information — IP address, browser type, pages visited, referrer, timestamps.</li>
        <li>Analytics events collected via Vercel Analytics (anonymized, no cookies).</li>
      </LegalList>

      <LegalHeading>3. How we use it</LegalHeading>
      <LegalList>
        <li>To respond to your quote request or inquiry.</li>
        <li>To provide the freight services you have contracted us to perform.</li>
        <li>To comply with customs, tax, and other legal obligations.</li>
        <li>To improve the website and understand how it is used.</li>
      </LegalList>

      <LegalHeading>4. Who we share it with</LegalHeading>
      <LegalP>
        We share your data only where necessary to deliver the service you
        requested:
      </LegalP>
      <LegalList>
        <li>Carriers, shipping lines, airlines and haulers moving your cargo.</li>
        <li>Customs authorities and licensed brokers.</li>
        <li>Our subprocessors — hosting (Vercel), email delivery (Resend). Contracts require them to protect your data at least as strictly as we do.</li>
      </LegalList>
      <LegalP>
        We do not sell personal data. We do not share it for advertising.
      </LegalP>

      <LegalHeading>5. How long we keep it</LegalHeading>
      <LegalP>
        Contact form submissions are retained for as long as needed to
        answer them and comply with any resulting engagement — typically up
        to 7 years for customs and accounting records, then deleted.
      </LegalP>

      <LegalHeading>6. Your rights</LegalHeading>
      <LegalP>
        Depending on where you are, you may have the right to access,
        correct, delete, or export your personal data, and to withdraw
        consent to processing. To exercise any of these, contact{" "}
        <a href={`mailto:${CONTACT.emails.info}`}>{CONTACT.emails.info}</a>.
      </LegalP>

      <LegalHeading>7. Security</LegalHeading>
      <LegalP>
        Data is transmitted over TLS and stored on infrastructure with
        industry-standard access controls. No system is perfectly secure —
        report a suspected incident to{" "}
        <a href={`mailto:${CONTACT.emails.info}`}>{CONTACT.emails.info}</a>.
      </LegalP>

      <LegalHeading>8. Changes to this policy</LegalHeading>
      <LegalP>
        We may update this policy from time to time. The &ldquo;Last
        updated&rdquo; date at the top reflects the current version. Material
        changes will be highlighted at the top of the page.
      </LegalP>
    </LegalShell>
  );
}
