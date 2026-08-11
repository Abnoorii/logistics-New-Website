export const SITE = {
  name: "Logistics.af",
  shortName: "Logistics.af",
  domain: "logistics.af",
  url: "https://logistics.af",
  description:
    "Afghanistan-based freight forwarding across air, ocean, road and rail — moving import and export shipments between Afghanistan and 13 principal trading partners.",
  tagline: "Every leg of the journey",
} as const;

export const CONTACT = {
  sales: {
    phone: "+93 777 992 997",
    phoneHref: "tel:+93777992997",
    whatsapp: "https://wa.me/93777992997",
    label: "Sales & Quotes",
  },
  ops: {
    phone: "+93 780 103 220",
    phoneHref: "tel:+93780103220",
    whatsapp: "https://wa.me/93780103220",
    label: "Operations · 24/7",
  },
  emails: {
    info: "info@logistics.af",
    sales: "sales@logistics.af",
  },
} as const;

export const ADDRESS = {
  street: "House 18, Darulaman Rd & Karte 3 St",
  landmark: "near Kabul Dubai Hotel",
  city: "Kabul",
  country: "Afghanistan",
  countryCode: "AF",
  /** Rough geo for map embeds / structured data. Kabul city centre. */
  lat: 34.5117,
  lon: 69.1548,
  /** Full formatted single-line address. */
  full:
    "House 18, Darulaman Rd & Karte 3 St, near Kabul Dubai Hotel, Kabul, Afghanistan",
} as const;

/**
 * Accreditations — replace placeholder numbers with real ones from
 * your ops / compliance team before launch.
 */
export const ACCREDITATIONS = [
  {
    body: "FIATA",
    label: "Freight Forwarders Association member",
    ref: "Membership: pending / TODO",
  },
  {
    body: "IATA",
    label: "Cargo Agent",
    ref: "Cargo Agent Code: pending / TODO",
  },
  {
    body: "Afghan Customs",
    label: "Licensed customs broker",
    ref: "Broker Licence: pending / TODO",
  },
  {
    body: "ACCI",
    label: "Afghan Chamber of Commerce",
    ref: "Registration: pending / TODO",
  },
] as const;
