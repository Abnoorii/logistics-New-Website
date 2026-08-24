import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Reveal, RevealItem, RevealStagger } from "@/components/interactive/reveal";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";
import { SITE } from "@/lib/site";
import { ArrowRight, Code2, Zap, Webhook, FileJson } from "lucide-react";

const description =
  "API access and ERP integrations for enterprise shippers — bookings, milestones, documents and invoices over REST + webhooks.";

export const metadata: Metadata = {
  title: "API & integrations",
  description,
  alternates: { canonical: `${SITE.url}/api-docs` },
  openGraph: {
    title: `API & integrations — ${SITE.name}`,
    description,
    url: `${SITE.url}/api-docs`,
    siteName: SITE.name,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `API & integrations — ${SITE.name}`, description },
};

const CAPABILITIES = [
  { icon: Code2, title: "REST API", body: "Book a shipment, request a quote, pull milestones and documents." },
  { icon: Webhook, title: "Webhooks", body: "Push milestone updates and document events to your ERP or ops channel." },
  { icon: FileJson, title: "EDI messages", body: "IFTMIN, IFTSTA and IFCSUM in UN/EDIFACT for enterprise supply-chain teams." },
  { icon: Zap, title: "Slack / Teams", body: "Turn milestone alerts into channel updates or DMs, keyed to shipment ID." },
];

const INTEGRATIONS = [
  "NetSuite", "SAP", "Oracle Fusion", "Microsoft Dynamics",
  "Shopify", "WooCommerce", "Amazon", "Odoo",
];

export default function ApiDocsPage() {
  return (
    <>
      <PageHero
        eyebrow="API & integrations"
        title={<>Wire us into your ops stack.</>}
        intro="For enterprise shippers running EDI, ERPs and dedicated ops platforms, we offer a REST API, webhooks, and standard EDI messages so freight data flows into the same place as everything else."
        actions={
          <>
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Request API access <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </>
        }
      />

      <Section
        eyebrow="Capabilities"
        title="What you can do."
      >
        <RevealStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((c) => (
            <RevealItem key={c.title}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red-500/10 text-brand-red-300 ring-1 ring-inset ring-brand-red-500/20">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg text-steel-100">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-400">{c.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      <Section
        eyebrow="Integrations"
        title="Systems we&rsquo;ve wired into before."
        intro="Full list on request. If your ERP or WMS isn&rsquo;t here, we&rsquo;ll build the connector or advise a middleware."
      >
        <div className="flex flex-wrap gap-3">
          {INTEGRATIONS.map((i) => (
            <span
              key={i}
              className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-steel-200"
            >
              {i}
            </span>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="rounded-2xl border border-brand-red-500/30 bg-brand-red-500/[0.04] p-6 text-sm text-brand-red-100">
            <span className="font-medium text-brand-red-200">Docs on request.</span>{" "}
            Public API documentation is being finalised. For access, an
            OpenAPI spec, sandbox credentials and a dedicated integration lead,
            request via the button above.
          </div>
        </Reveal>
      </Section>

      <CTA />
    </>
  );
}
