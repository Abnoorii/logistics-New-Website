import type { Metadata } from "next";
import { LegalShell, LegalHeading, LegalP, LegalList } from "@/components/ui/legal-shell";
import { SITE, CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `${SITE.name} website terms — the conditions under which you may use this site.`,
  alternates: { canonical: `${SITE.url}/terms` },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalShell eyebrow="Legal" title="Terms of Service" updated="August 2026">
      <LegalHeading>1. Scope</LegalHeading>
      <LegalP>
        These terms govern your use of the {SITE.domain} website. Freight
        forwarding services provided by {SITE.name} are subject to a
        separate service agreement and to Standard Trading Conditions
        applicable in the relevant jurisdiction.
      </LegalP>

      <LegalHeading>1a. Standard Trading Conditions</LegalHeading>
      <LegalP>
        Unless a separate written agreement states otherwise, all freight
        forwarding services are provided under the{" "}
        <strong>FIATA Model Rules for Freight Forwarding Services</strong>{" "}
        and, where applicable, the standard trading conditions of the Afghan
        Freight Forwarders Association. These conditions govern liability
        limits, claims windows, jurisdiction, and force-majeure — including
        the standard 9-month claims window and unit-based liability caps
        typical to FIATA-based conditions. A copy is available on request.
      </LegalP>

      <LegalHeading>2. Use of the website</LegalHeading>
      <LegalList>
        <li>You may browse and use the site for lawful purposes.</li>
        <li>You may not attempt to disrupt the site, access it through automated means at high volumes, or use it to distribute malicious content.</li>
        <li>Rate cards and other pricing information published on this site are indicative and not binding until confirmed in writing for a specific shipment.</li>
      </LegalList>

      <LegalHeading>3. Intellectual property</LegalHeading>
      <LegalP>
        The design, text, and marks on this website belong to {SITE.name} or
        our licensors. Partner brand marks displayed on the site remain the
        property of their respective owners.
      </LegalP>

      <LegalHeading>4. No warranty</LegalHeading>
      <LegalP>
        The site is provided &ldquo;as is&rdquo; without warranty of any
        kind. We do not guarantee that information on the site is complete
        or up to date at every moment.
      </LegalP>

      <LegalHeading>5. Limitation of liability</LegalHeading>
      <LegalP>
        To the extent permitted by law, {SITE.name} is not liable for
        indirect, consequential, or incidental damages arising from your use
        of the website. Liability arising from freight services is governed
        by the applicable service agreement and standard trading conditions.
      </LegalP>

      <LegalHeading>6. Governing law</LegalHeading>
      <LegalP>
        These terms are governed by the law of the jurisdiction in which
        {SITE.name} is registered, without regard to conflict-of-laws
        principles. Disputes will be resolved by the competent courts of
        that jurisdiction.
      </LegalP>

      <LegalHeading>7. Contact</LegalHeading>
      <LegalP>
        Questions about these terms may be sent to{" "}
        <a href={`mailto:${CONTACT.emails.info}`}>{CONTACT.emails.info}</a>.
      </LegalP>
    </LegalShell>
  );
}
