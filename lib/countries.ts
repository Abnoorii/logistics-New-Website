export type TradeType = "both" | "import" | "export";
export type Region =
  | "central-asia"
  | "south-asia"
  | "middle-east"
  | "east-asia"
  | "eurasia";

export type Country = {
  code: string;
  name: string;
  flag: string;
  region: Region;
  type: TradeType;
  /** Position in degrees on the compass around Kabul, for the hub-and-spoke SVG. 0 = north, 90 = east. */
  angle: number;
  /** How far out on the spoke (0–1). Slight variation avoids label collisions. */
  distance: number;
  hub: string;
};

export const REGIONS: Record<Region, string> = {
  "central-asia": "Central Asia",
  "south-asia": "South Asia",
  "middle-east": "Middle East",
  "east-asia": "East Asia",
  eurasia: "Eurasia",
};

/**
 * The 13 principal trading partners we move import + export between.
 * Angles are laid out to roughly match real-world compass bearings
 * from Kabul, then nudged to prevent label overlap in the SVG.
 */
export const COUNTRIES: Country[] = [
  // Central Asia (north)
  { code: "UZ", name: "Uzbekistan", flag: "🇺🇿", region: "central-asia", type: "import", angle: 355, distance: 0.9, hub: "Termez / Hairatan corridor" },
  { code: "TM", name: "Turkmenistan", flag: "🇹🇲", region: "central-asia", type: "both", angle: 305, distance: 0.98, hub: "Turgundi corridor" },
  { code: "TJ", name: "Tajikistan", flag: "🇹🇯", region: "central-asia", type: "both", angle: 35, distance: 0.9, hub: "Sher Khan Bandar corridor" },
  { code: "KZ", name: "Kazakhstan", flag: "🇰🇿", region: "central-asia", type: "import", angle: 55, distance: 1.0, hub: "Almaty via Uzbekistan" },

  // South Asia (east/southeast)
  { code: "PK", name: "Pakistan", flag: "🇵🇰", region: "south-asia", type: "both", angle: 105, distance: 0.85, hub: "Torkham & Chaman crossings" },
  { code: "IN", name: "India", flag: "🇮🇳", region: "south-asia", type: "both", angle: 130, distance: 1.0, hub: "Chabahar / Karachi transit" },

  // East Asia
  { code: "CN", name: "China", flag: "🇨🇳", region: "east-asia", type: "both", angle: 75, distance: 1.0, hub: "Karachi + air freight" },

  // Middle East (west/southwest)
  { code: "IR", name: "Iran", flag: "🇮🇷", region: "middle-east", type: "both", angle: 245, distance: 0.85, hub: "Islam Qala corridor" },
  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪", region: "middle-east", type: "both", angle: 200, distance: 1.0, hub: "Dubai air + sea" },
  { code: "IQ", name: "Iraq", flag: "🇮🇶", region: "middle-east", type: "export", angle: 225, distance: 1.0, hub: "Via Iran corridor" },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", region: "middle-east", type: "export", angle: 215, distance: 0.9, hub: "Jeddah / Dammam" },
  { code: "TR", name: "Türkiye", flag: "🇹🇷", region: "middle-east", type: "both", angle: 275, distance: 0.95, hub: "Istanbul air + sea" },

  // Eurasia
  { code: "RU", name: "Russia", flag: "🇷🇺", region: "eurasia", type: "import", angle: 325, distance: 1.0, hub: "Via Central Asia corridor" },
];

export const TRADE_TYPES: Record<TradeType, { label: string; color: string; dotClass: string }> = {
  both: { label: "Import & export", color: "#4ad8c6", dotClass: "bg-signal-400" },
  import: { label: "Import", color: "#f9ab27", dotClass: "bg-amber-400" },
  export: { label: "Export", color: "#60a5fa", dotClass: "bg-[#60a5fa]" },
};

export function countriesByRegion() {
  const grouped: Record<Region, Country[]> = {
    "central-asia": [],
    "south-asia": [],
    "middle-east": [],
    "east-asia": [],
    eurasia: [],
  };
  for (const c of COUNTRIES) grouped[c.region].push(c);
  return grouped;
}
