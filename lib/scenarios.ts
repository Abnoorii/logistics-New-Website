export type Scenario = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  challenge: string[];
  approach: string[];
  outcome: string[];
  metrics: { label: string; value: string }[];
  image: string;
};

export const SCENARIOS: Scenario[] = [
  {
    slug: "ecommerce-brand-multi-forwarder",
    category: "E-commerce",
    title: "Home-goods brand: consolidating 3 forwarders into 1",
    summary:
      "A 7-SKU home-goods brand shipping FCL out of Shenzhen and LCL out of Ho Chi Minh City. Three forwarders, three dashboards, one very unhappy ops manager.",
    challenge: [
      "Rates and cut-offs on three different portals",
      "Weekly reconciliation of demurrage and detention across carriers",
      "No unified visibility on peak-season allocations",
    ],
    approach: [
      "One booking channel with rate cards published quarterly",
      "Combined FCL + LCL under our weekly consolidation ex-Shenzhen",
      "Single dashboard, single accounts payable contact",
    ],
    outcome: [
      "Ops time on freight halved by month two",
      "First peak season through us: 99.1% on-time",
      "Reduced landed cost via better carrier mix and drawback claims",
    ],
    metrics: [
      { label: "Time saved", value: "~14 hrs / week" },
      { label: "On-time (Q4)", value: "99.1%" },
      { label: "Landed cost", value: "−7.4%" },
    ],
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1600&q=70",
  },
  {
    slug: "industrial-project-cargo",
    category: "Industrial",
    title: "Project cargo: 10 oversize crates, 3 borders, 1 permit chain",
    summary:
      "Heavy equipment from a European OEM to a mining customer in Central Asia. Ten oversize crates, multi-modal, three cross-border permit regimes.",
    challenge: [
      "No single provider willing to own the full multi-modal chain",
      "Route survey needed for bridge and gauge clearance",
      "Convert permits engineered lane-by-lane",
    ],
    approach: [
      "Route engineering in-house — bridge sweeps, cranage plan, escort permits",
      "RoRo + breakbulk combination optimised for cost + calendar",
      "Single project lead through every hand-off, one invoice at the end",
    ],
    outcome: [
      "Delivered on the customer's promised commissioning date",
      "Zero damage claims across ten movements",
      "Single P&L closed 4% under budget",
    ],
    metrics: [
      { label: "Crates", value: "10 × oversize" },
      { label: "Countries", value: "5 in transit" },
      { label: "On-schedule", value: "yes" },
    ],
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=70",
  },
  {
    slug: "humanitarian-cold-chain",
    category: "Humanitarian",
    title: "Cold-chain pharma into constrained-access regions",
    summary:
      "Recurrent medical shipments into logistically difficult regions, temperature-controlled from origin to warehouse.",
    challenge: [
      "Cold-chain integrity across a 4–6 day multi-modal move",
      "Documentation for donor reporting on every consignment",
      "Turnaround times measured in hours, not days",
    ],
    approach: [
      "Named air uplift with cold-chain-certified carriers",
      "Bonded, temperature-monitored warehouse at destination",
      "Reporting exports auto-generated for donor compliance",
    ],
    outcome: [
      "Zero cold-chain breaches across a rolling 24-month engagement",
      "Documentation turnaround reduced from days to same-day",
      "Repeat allocations from multiple donor organisations",
    ],
    metrics: [
      { label: "Cold-chain breaches", value: "0" },
      { label: "Consignments", value: "60+ / yr" },
      { label: "Reporting SLA", value: "Same-day" },
    ],
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1600&q=70",
  },
];

export function getScenario(slug: string) {
  return SCENARIOS.find((s) => s.slug === slug);
}
