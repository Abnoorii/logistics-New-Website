/**
 * Air freight carrier partners.
 *
 * Logo assets live in `public/brand/partners/airlines/` and are
 * rendered via next/image with a fixed height and object-contain
 * so mixed aspect ratios sit level on the marquee.
 */

export type PartnerLogo = {
  name: string;
  src: string;
  /** Fallback natural width. Used by next/image only for aspect-ratio math. */
  width: number;
  height: number;
};

const P = "/brand/partners/airlines";

export const AIRLINE_LOGOS: PartnerLogo[] = [
  { name: "Emirates", src: `${P}/emirates.png`, width: 448, height: 448 },
  { name: "Qatar Airways", src: `${P}/qatar-airways.png`, width: 600, height: 200 },
  { name: "Etihad Airways", src: `${P}/etihad-airways.png`, width: 600, height: 200 },
  { name: "Turkish Airlines", src: `${P}/turkish-airlines.png`, width: 400, height: 200 },
  { name: "flydubai", src: `${P}/flydubai.png`, width: 500, height: 200 },
  { name: "Air Arabia", src: `${P}/air-arabia.webp`, width: 600, height: 200 },
  { name: "Kam Air", src: `${P}/kam-air.png`, width: 600, height: 400 },
  { name: "Ariana Afghan Airlines", src: `${P}/ariana-afghan-airlines.png`, width: 800, height: 400 },
];
