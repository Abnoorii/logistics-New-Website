import {
  Plane,
  Ship,
  ScrollText,
  Warehouse,
  Boxes,
  Truck,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  tag: string;
  desc: string;
  intro: string;
  highlights: { label: string; body: string }[];
  lanes: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "air-freight",
    icon: Plane,
    title: "Air Freight",
    tag: "01 / Air",
    desc:
      "Consolidated, express and charter — priority uplift out of Kabul, Dubai, Istanbul and Delhi when hours matter.",
    intro:
      "When ship-by dates shift and cargo has to move now, air is the answer. We hold named allocations out of Kabul (KBL) and named gateway partners at Dubai (DXB), Istanbul (IST) and Delhi (DEL), plus ad-hoc charter capacity for oversize and time-critical.",
    highlights: [
      {
        label: "Priority uplift",
        body: "Named allocations with our carrier partners into KBL, even during peak.",
      },
      {
        label: "Express & charter",
        body: "Next-flight-out, hand-carry, and full-freighter charters engineered lane-by-lane.",
      },
      {
        label: "Trade compliance",
        body: "Dangerous goods, pharma cold chain, perishables — with the paperwork done right.",
      },
    ],
    lanes: [
      "Dubai ↔ Kabul",
      "Istanbul → Kabul",
      "Delhi → Kabul",
      "Kabul → Frankfurt (export cargo)",
    ],
  },
  {
    slug: "ocean-freight",
    icon: Ship,
    title: "Ocean Freight",
    tag: "02 / Sea",
    desc:
      "FCL and LCL to Karachi, Bandar Abbas and Chabahar — then trucked overland into Kabul.",
    intro:
      "Afghanistan is landlocked. Every ocean lane we run terminates at Karachi, Bandar Abbas or Chabahar, then transitions to road for the final leg. Named contracts with Maersk, MSC, CMA CGM and Hapag-Lloyd. Weekly consolidations ex-Asia via Karachi.",
    highlights: [
      {
        label: "FCL & LCL",
        body: "Weekly departures from every major East Asia and Europe origin.",
      },
      {
        label: "Multi-modal by design",
        body: "Sea-to-road handoff at Karachi or Bandar Abbas is our specialty, not an afterthought.",
      },
      {
        label: "Documentation",
        body: "Bill of lading, ISF, AMS, telex release — handled in-house, no extra fees.",
      },
    ],
    lanes: [
      "Shanghai → Karachi → Kabul",
      "Shenzhen → Bandar Abbas → Kabul",
      "Mumbai → Chabahar → Kabul",
      "Hamburg → Karachi → Kabul",
    ],
  },
  {
    slug: "customs-brokerage",
    icon: ScrollText,
    title: "Customs Brokerage",
    tag: "03 / Trade",
    desc:
      "Licensed brokers at every border crossing — Torkham, Chaman, Islam Qala, Turgundi, Sher Khan Bandar, Hairatan.",
    intro:
      "In-house licensed brokers at every named crossing we work through. That means faster clearance at Torkham and Chaman, correct paperwork through Islam Qala, and someone who owns the disputes when they happen.",
    highlights: [
      {
        label: "Border crossings",
        body: "Torkham, Chaman (PK); Islam Qala (IR); Turgundi (TM); Hairatan, Sher Khan Bandar (UZ/TJ).",
      },
      {
        label: "Tariff & FTA advice",
        body: "Correct HS classification, ATA carnets, drawback claims and rulings.",
      },
      {
        label: "Dispute management",
        body: "Detention, demurrage and misdeclaration disputes handled end-to-end.",
      },
    ],
    lanes: [
      "Torkham & Chaman (PK)",
      "Islam Qala (IR)",
      "Turgundi (TM)",
      "Hairatan · Sher Khan Bandar",
    ],
  },
  {
    slug: "warehousing-3pl",
    icon: Warehouse,
    title: "Warehousing & 3PL",
    tag: "04 / Store",
    desc:
      "Bonded and general storage in Kabul, with pick-pack, kitting and last-mile dispatch.",
    intro:
      "Owned facilities in Kabul plus partner networks in Karachi, Dubai and Istanbul at the origin end. Bonded and general storage, real WMS, real people — with dispatch cut-offs designed around Afghan retail and NGO calendars.",
    highlights: [
      {
        label: "Bonded storage",
        body: "Duty-deferred until cargo is called out — helpful for high-value inventory.",
      },
      {
        label: "Fulfilment",
        body: "Pick-pack, kitting, and same-day dispatch cut-offs from our Kabul hub.",
      },
      {
        label: "Origin storage",
        body: "Partner networks at Dubai, Karachi and Istanbul for pre-consolidation.",
      },
    ],
    lanes: [
      "Kabul bonded",
      "Kabul general",
      "Dubai partner",
      "Karachi partner",
    ],
  },
  {
    slug: "project-cargo",
    icon: Boxes,
    title: "Project Cargo",
    tag: "05 / Heavy",
    desc:
      "Oversize, breakbulk and multi-modal moves — mining, energy, infrastructure and humanitarian.",
    intro:
      "When the freight doesn't fit in a container, our project team takes over. Route surveys through Salang, cross-border escort permits, mountain-pass cranage plans — as a single accountable engagement.",
    highlights: [
      {
        label: "Route engineering",
        body: "Bridge clearances, road permits, and cranage plans engineered by our team.",
      },
      {
        label: "Modal combinations",
        body: "RoRo at Bandar Abbas, breakbulk into Karachi, heavy-lift air into Kabul.",
      },
      {
        label: "Single P&L",
        body: "One quote, one invoice, one accountable project lead through completion.",
      },
    ],
    lanes: [
      "Bandar Abbas → Herat (energy)",
      "Karachi → Kabul (mining)",
      "Hamburg → Kabul (infrastructure)",
    ],
  },
  {
    slug: "domestic-transport",
    icon: Truck,
    title: "Domestic & Regional Road",
    tag: "06 / Road",
    desc:
      "Line-haul into every Afghan provincial centre plus cross-border road into Pakistan, Iran, Uzbekistan and Turkmenistan.",
    intro:
      "Owned truck fleet across Afghanistan plus partner line-haul into every regional centre. Same team owns the container from the border crossing to your dock — no baton handoffs.",
    highlights: [
      {
        label: "Line-haul",
        body: "Nightly linehaul between Kabul, Herat, Kandahar, Mazar-i-Sharif and Jalalabad.",
      },
      {
        label: "Cross-border road",
        body: "Direct road into PK, IR, UZ and TM — one carrier, one bill.",
      },
      {
        label: "Dedicated fleet",
        body: "Named vehicles and drivers for retailers with weekly recurring volume.",
      },
    ],
    lanes: [
      "Kabul metro",
      "Herat corridor",
      "Kandahar corridor",
      "Mazar-i-Sharif corridor",
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
