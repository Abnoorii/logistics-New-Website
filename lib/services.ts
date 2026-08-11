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
      "Consolidated, express and charter — with priority uplift on partner carriers when hours matter.",
    intro:
      "When ship-by dates shift and cargo has to move now, air is the answer. We hold named allocations with Qantas, Cathay, Singapore Airlines and Lufthansa Cargo, plus charter capacity for oversize and time-critical.",
    highlights: [
      {
        label: "Priority uplift",
        body: "Named-allocation space with our carrier partners, even during peak.",
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
      "Sydney ↔ Shanghai",
      "Auckland → LA",
      "Hong Kong → Hamburg",
      "London → Sydney",
    ],
  },
  {
    slug: "ocean-freight",
    icon: Ship,
    title: "Ocean Freight",
    tag: "02 / Sea",
    desc:
      "FCL and LCL sailings across every major trade lane, with weekly consolidations ex-Asia.",
    intro:
      "The backbone of most supply chains. FCL, LCL, buyer's consolidation, and named contracts with Maersk, MSC, CMA CGM, Hapag-Lloyd and ONE. Weekly ex-Asia consolidations to Sydney, Auckland and LA.",
    highlights: [
      {
        label: "FCL & LCL",
        body: "Weekly departures from every major origin, with door-to-door options.",
      },
      {
        label: "Contract rates",
        body: "Named-account allocations that hold when spot rates spike.",
      },
      {
        label: "Documentation",
        body: "Bill of lading, ISF, AMS, telex release — handled in-house, no extra fees.",
      },
    ],
    lanes: [
      "Shanghai → Sydney",
      "Shenzhen → Auckland",
      "Ho Chi Minh City → LA",
      "Hamburg → Melbourne",
    ],
  },
  {
    slug: "customs-brokerage",
    icon: ScrollText,
    title: "Customs Brokerage",
    tag: "03 / Trade",
    desc: "Licensed brokers on both ends — tariff advice, FTAs, permits, quarantine, drawbacks.",
    intro:
      "In-house licensed brokers at every gateway we work through. That means faster clearance, fewer surprises, and someone who owns the disputes when they happen.",
    highlights: [
      {
        label: "Tariff & FTA advice",
        body: "Correct classification, FTA eligibility, drawback claims and rulings.",
      },
      {
        label: "Permits & quarantine",
        body: "AQIS, DAFF, and equivalent authorities across every hub.",
      },
      {
        label: "Dispute management",
        body: "Detention, demurrage and misdeclaration disputes handled end-to-end.",
      },
    ],
    lanes: [
      "AU import clearance",
      "NZ MPI-cleared release",
      "US CBP entries",
      "EU AEO status",
    ],
  },
  {
    slug: "warehousing-3pl",
    icon: Warehouse,
    title: "Warehousing & 3PL",
    tag: "04 / Store",
    desc: "Bonded and general storage with pick-pack, kitting, and DTC fulfilment out of five hubs.",
    intro:
      "Five owned facilities — Sydney, Auckland, Shanghai, LA, London — plus partner networks in Ho Chi Minh City, Bangkok and Hamburg. Bonded and general storage, real WMS, real people.",
    highlights: [
      {
        label: "Bonded storage",
        body: "Duty-deferred until cargo is called out — helpful for high-value inventory.",
      },
      {
        label: "Fulfilment",
        body: "Pick-pack, kitting, DTC packaging, and same-day dispatch cut-offs.",
      },
      {
        label: "Integrations",
        body: "Shopify, Amazon, NetSuite, and any WMS/ERP via webhooks or EDI.",
      },
    ],
    lanes: [
      "Sydney bonded",
      "Auckland general",
      "LA DTC hub",
      "London European",
    ],
  },
  {
    slug: "project-cargo",
    icon: Boxes,
    title: "Project Cargo",
    tag: "05 / Heavy",
    desc:
      "Oversize, breakbulk, RoRo and multi-modal moves engineered lane-by-lane, permit-by-permit.",
    intro:
      "When the freight doesn't fit in a container, our project team takes over. We handle route surveys, permits, cranage, and cross-border escorts as a single accountable engagement.",
    highlights: [
      {
        label: "Route engineering",
        body: "Bridge clearances, road permits, and cranage plans engineered by our team.",
      },
      {
        label: "Modal combinations",
        body: "RoRo, breakbulk, heavy-lift air, barge — combined for cost or speed.",
      },
      {
        label: "Single P&L",
        body: "One quote, one invoice, one accountable project lead through completion.",
      },
    ],
    lanes: [
      "Hamburg → Melbourne (wind)",
      "Shanghai → Sydney (mining)",
      "Rotterdam → Auckland (renewables)",
    ],
  },
  {
    slug: "domestic-transport",
    icon: Truck,
    title: "Domestic & Interstate",
    tag: "06 / Road",
    desc:
      "Line-haul, last-mile and dedicated fleets across ANZ — same asset base your ocean cargo lands on.",
    intro:
      "Owned truck fleet across ANZ metros plus partner line-haul to every regional centre. Same team owns the container from the wharf to your dock — no baton handoffs.",
    highlights: [
      {
        label: "Line-haul",
        body: "Nightly linehaul between Sydney, Melbourne, Brisbane, Perth and Adelaide.",
      },
      {
        label: "Last-mile",
        body: "Time-slot delivery, tail-lift, and white-glove options for retail.",
      },
      {
        label: "Dedicated fleet",
        body: "Named vehicles and drivers for retailers with weekly recurring volume.",
      },
    ],
    lanes: [
      "Sydney metro",
      "Melbourne CBD & M2 corridor",
      "Brisbane metro",
      "Perth metro",
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
