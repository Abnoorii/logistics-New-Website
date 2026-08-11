/**
 * Central registry of imagery used across the site.
 *
 * Every asset is a curated open-source placeholder (Unsplash) to be
 * replaced with owned photography once a shoot is commissioned. See
 * PHOTOGRAPHY_BRIEF.md for the shot list and voice guide.
 *
 * Swapping a placeholder for owned art is a one-line change here —
 * update the URL, focal, and (optionally) the caption, and every page
 * that references the key picks it up automatically.
 */

export type ImageAsset = {
  /** Absolute URL. Use Next.js `next/image` remote patterns to authorise the host. */
  src: string;
  /** Alt text — describe the image, not the intent. */
  alt: string;
  /** CSS object-position value for tight crops. */
  focal?: string;
  /** Optional attribution — leave blank if licence doesn't require it. */
  credit?: string;
};

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=2000&q=75`;

export const IMAGES = {
  // ── Home page ──────────────────────────────────────────────────────
  homeReliabilityStrip: {
    src: u("1494412651409-8963ce7935a7"),
    alt: "Container terminal at dusk with stacked shipping containers",
    focal: "center 40%",
  },

  // ── About page ─────────────────────────────────────────────────────
  aboutHero: {
    src: u("1494412651409-8963ce7935a7"),
    alt: "Container yard at dusk",
    focal: "center 40%",
  },
  aboutTeam: {
    src: u("1600880292203-757bb62b4baf"),
    alt: "Team members working at a shared table with laptops",
    focal: "center 45%",
  },

  // ── Services (one per mode) ────────────────────────────────────────
  serviceAir: {
    src: u("1436491865332-7a61a109cc05"),
    alt: "Wide-body cargo aircraft taxiing at dusk",
    focal: "center 45%",
  },
  serviceOcean: {
    src: u("1494412519320-aa613dfb7738"),
    alt: "Aerial view of a container ship at sea",
    focal: "center center",
  },
  serviceCustoms: {
    src: u("1554224155-6726b3ff858f"),
    alt: "Hands reviewing paperwork on a desk",
    focal: "center 60%",
  },
  serviceWarehouse: {
    src: u("1586528116311-ad8dd3c8310d"),
    alt: "Warehouse interior with high-bay racking and pallets",
    focal: "center center",
  },
  serviceProject: {
    src: u("1568122506084-57d4437ca9c6"),
    alt: "Heavy-lift crane against a construction skyline",
    focal: "center 40%",
  },
  serviceDomestic: {
    src: u("1601584115197-04ecc0da31d7"),
    alt: "Freight truck on a mountain highway at golden hour",
    focal: "center 55%",
  },

  // ── Scenarios ──────────────────────────────────────────────────────
  scenarioEcommerce: {
    src: u("1494412651409-8963ce7935a7"),
    alt: "Container terminal at dusk",
    focal: "center 40%",
  },
  scenarioIndustrial: {
    src: u("1578575437130-527eed3abbec"),
    alt: "Heavy industrial equipment on transport",
    focal: "center center",
  },
  scenarioHumanitarian: {
    src: u("1587293852726-70cdb56c2866"),
    alt: "Temperature-controlled pharma cold-chain storage",
    focal: "center 40%",
  },

  // ── Pricing / Contact ──────────────────────────────────────────────
  pricingBorder: {
    src: u("1616138622949-3f8dbafd9f38"),
    alt: "Mountainous terrain crossing at golden hour",
    focal: "center 55%",
  },
  contactQuiet: {
    src: u("1544197150-b99a580bb7a8"),
    alt: "Container port cranes silhouetted at twilight",
    focal: "center 50%",
  },
} as const satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof IMAGES;
