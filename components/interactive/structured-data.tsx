import { SITE, ADDRESS, CONTACT } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { COUNTRIES } from "@/lib/countries";

/**
 * JSON-LD structured data. Rendered once in the root layout so every
 * page carries the Organization + LocalBusiness markup. Search engines
 * use this to populate rich cards, knowledge-panel entries, and the
 * business's map/hours/contact block.
 */
export function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/brand/logistics-af-logo-primary.png`,
    description: SITE.description,
    email: CONTACT.emails.info,
    telephone: CONTACT.sales.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${ADDRESS.street}, ${ADDRESS.landmark}`,
      addressLocality: ADDRESS.city,
      addressCountry: ADDRESS.countryCode,
    },
    areaServed: COUNTRIES.map((c) => ({
      "@type": "Country",
      name: c.name,
    })),
    sameAs: [] as string[],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}#business`,
    name: SITE.name,
    image: `${SITE.url}/opengraph-image`,
    url: SITE.url,
    telephone: CONTACT.sales.phone,
    email: CONTACT.emails.info,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${ADDRESS.street}, ${ADDRESS.landmark}`,
      addressLocality: ADDRESS.city,
      addressCountry: ADDRESS.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: ADDRESS.lat,
      longitude: ADDRESS.lon,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": `${SITE.url}#organization` },
  };

  const services = SERVICES.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}/services/${s.slug}#service`,
    serviceType: s.title,
    name: s.title,
    description: s.desc,
    url: `${SITE.url}/services/${s.slug}`,
    provider: { "@id": `${SITE.url}#organization` },
    areaServed: COUNTRIES.map((c) => ({ "@type": "Country", name: c.name })),
  }));

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, localBusiness, website, ...services],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
