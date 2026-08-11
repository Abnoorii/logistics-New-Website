import { type ReactNode } from "react";

/**
 * Stylized placeholder wordmarks. Not real trademarked logos —
 * swap for licensed brand assets when available.
 */

type LogoProps = { className?: string; "aria-label"?: string };

const Wrap = ({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) => (
  <svg
    viewBox="0 0 220 40"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label={label}
    className="h-8 w-auto"
  >
    {children}
  </svg>
);

// ————— Airlines —————

export const LogoQantas = () => (
  <Wrap label="Qantas Freight">
    <path d="M20 8 L32 32 H24 L22 28 H14 L12 32 H4 Z M18 14 L15 24 H21 Z" fill="currentColor" />
    <text x="42" y="26" fill="currentColor" fontFamily="Space Grotesk, sans-serif" fontWeight="600" fontSize="16" letterSpacing="0.5">
      QANTAS
    </text>
    <text x="42" y="36" fill="currentColor" opacity="0.55" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="1.6">
      FREIGHT
    </text>
  </Wrap>
);

export const LogoCathay = () => (
  <Wrap label="Cathay Cargo">
    <path d="M6 20 C6 12 12 6 20 6 C24 6 27 8 29 10 L26 13 C25 12 23 10 20 10 C14 10 10 14 10 20 C10 26 14 30 20 30 C23 30 25 28 26 27 L29 30 C27 32 24 34 20 34 C12 34 6 28 6 20 Z" fill="currentColor" />
    <text x="40" y="26" fill="currentColor" fontFamily="Space Grotesk, sans-serif" fontWeight="600" fontSize="16">
      CATHAY
    </text>
    <text x="40" y="36" fill="currentColor" opacity="0.55" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="1.6">
      CARGO
    </text>
  </Wrap>
);

export const LogoSingapore = () => (
  <Wrap label="Singapore Airlines">
    <path d="M8 22 L20 8 L32 22 L26 22 L20 15 L14 22 Z M8 26 H32 V30 H8 Z" fill="currentColor" />
    <text x="42" y="26" fill="currentColor" fontFamily="Space Grotesk, sans-serif" fontWeight="600" fontSize="14">
      SINGAPORE
    </text>
    <text x="42" y="36" fill="currentColor" opacity="0.55" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="1.4">
      AIRLINES CARGO
    </text>
  </Wrap>
);

export const LogoEmirates = () => (
  <Wrap label="Emirates SkyCargo">
    <path d="M6 24 C10 8 30 8 34 24 L28 24 C26 16 14 16 12 24 Z" fill="currentColor" />
    <text x="44" y="26" fill="currentColor" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="16" fontStyle="italic">
      EMIRATES
    </text>
    <text x="44" y="36" fill="currentColor" opacity="0.55" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="1.4">
      SKYCARGO
    </text>
  </Wrap>
);

export const LogoLufthansa = () => (
  <Wrap label="Lufthansa Cargo">
    <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <path d="M13 20 L27 20 M20 13 L20 27" stroke="currentColor" strokeWidth="2" />
    <text x="40" y="26" fill="currentColor" fontFamily="Space Grotesk, sans-serif" fontWeight="600" fontSize="14">
      LUFTHANSA
    </text>
    <text x="40" y="36" fill="currentColor" opacity="0.55" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="1.4">
      CARGO
    </text>
  </Wrap>
);

export const LogoKorean = () => (
  <Wrap label="Korean Air Cargo">
    <path d="M20 6 L26 20 L20 34 L14 20 Z" fill="currentColor" opacity="0.85" />
    <circle cx="20" cy="20" r="3" fill="currentColor" />
    <text x="36" y="26" fill="currentColor" fontFamily="Space Grotesk, sans-serif" fontWeight="600" fontSize="14">
      KOREAN AIR
    </text>
    <text x="36" y="36" fill="currentColor" opacity="0.55" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="1.4">
      CARGO
    </text>
  </Wrap>
);

export const LogoChinaAir = () => (
  <Wrap label="China Airlines Cargo">
    <path d="M10 30 C10 14 30 14 30 30 M14 30 C14 20 26 20 26 30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    <circle cx="20" cy="12" r="3" fill="currentColor" />
    <text x="38" y="26" fill="currentColor" fontFamily="Space Grotesk, sans-serif" fontWeight="600" fontSize="13">
      CHINA AIRLINES
    </text>
    <text x="38" y="36" fill="currentColor" opacity="0.55" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="1.4">
      CARGO
    </text>
  </Wrap>
);

export const LogoAirNZ = () => (
  <Wrap label="Air New Zealand Cargo">
    <path d="M6 26 L20 8 L34 26 L28 26 L20 16 L12 26 Z" fill="currentColor" />
    <text x="42" y="26" fill="currentColor" fontFamily="Space Grotesk, sans-serif" fontWeight="600" fontSize="12">
      AIR NEW ZEALAND
    </text>
    <text x="42" y="36" fill="currentColor" opacity="0.55" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="1.4">
      CARGO
    </text>
  </Wrap>
);

export const LogoANA = () => (
  <Wrap label="ANA Cargo">
    <text x="6" y="28" fill="currentColor" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="22" letterSpacing="1">
      ANA
    </text>
    <path d="M62 20 H80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <text x="86" y="26" fill="currentColor" opacity="0.6" fontFamily="Inter, sans-serif" fontSize="10" letterSpacing="2">
      CARGO
    </text>
  </Wrap>
);

// ————— Shipping lines —————

export const LogoMaersk = () => (
  <Wrap label="Maersk">
    <path d="M6 20 L14 20 L18 26 L22 14 L26 26 L30 20 L36 20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <text x="46" y="26" fill="currentColor" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="18" letterSpacing="1">
      MAERSK
    </text>
  </Wrap>
);

export const LogoMSC = () => (
  <Wrap label="MSC">
    <text x="6" y="30" fill="currentColor" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="26" letterSpacing="2">
      MSC
    </text>
    <text x="90" y="28" fill="currentColor" opacity="0.55" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="1.4">
      MEDITERRANEAN SHIPPING
    </text>
  </Wrap>
);

export const LogoCMA = () => (
  <Wrap label="CMA CGM">
    <path d="M6 20 C6 12 14 8 20 12 L18 16 C14 14 10 16 10 20 C10 24 14 26 18 24 L20 28 C14 32 6 28 6 20 Z" fill="currentColor" />
    <text x="30" y="26" fill="currentColor" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="16" letterSpacing="1">
      CMA CGM
    </text>
  </Wrap>
);

export const LogoHapag = () => (
  <Wrap label="Hapag-Lloyd">
    <rect x="6" y="10" width="20" height="20" fill="currentColor" />
    <path d="M10 20 L14 16 L18 22 L22 14" stroke="#05070d" strokeWidth="1.6" fill="none" />
    <text x="32" y="22" fill="currentColor" fontFamily="Space Grotesk, sans-serif" fontWeight="600" fontSize="14">
      Hapag-Lloyd
    </text>
    <text x="32" y="32" fill="currentColor" opacity="0.55" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="1.4">
      OCEAN LINE
    </text>
  </Wrap>
);

export const LogoONE = () => (
  <Wrap label="Ocean Network Express">
    <path d="M6 12 H34 V16 H6 Z M6 20 H34 V24 H6 Z M6 28 H34 V32 H6 Z" fill="currentColor" opacity="0.4" />
    <text x="40" y="26" fill="currentColor" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="18" letterSpacing="1.5">
      ONE
    </text>
    <text x="80" y="26" fill="currentColor" opacity="0.55" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="1.4">
      OCEAN NETWORK EXPRESS
    </text>
  </Wrap>
);

export const LogoCOSCO = () => (
  <Wrap label="COSCO Shipping">
    <circle cx="20" cy="20" r="12" fill="currentColor" opacity="0.15" />
    <path d="M8 20 C10 14 30 14 32 20 C30 26 10 26 8 20 Z" stroke="currentColor" strokeWidth="1.6" fill="none" />
    <text x="40" y="26" fill="currentColor" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="16" letterSpacing="1">
      COSCO
    </text>
    <text x="40" y="36" fill="currentColor" opacity="0.55" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="1.4">
      SHIPPING LINES
    </text>
  </Wrap>
);

export const LogoEvergreen = () => (
  <Wrap label="Evergreen Marine">
    <path d="M20 6 L30 30 L20 24 L10 30 Z" fill="currentColor" opacity="0.9" />
    <text x="36" y="26" fill="currentColor" fontFamily="Space Grotesk, sans-serif" fontWeight="600" fontSize="14">
      EVERGREEN
    </text>
    <text x="36" y="36" fill="currentColor" opacity="0.55" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="1.4">
      MARINE
    </text>
  </Wrap>
);

export const LogoYangMing = () => (
  <Wrap label="Yang Ming">
    <path d="M20 8 L28 20 L20 32 L12 20 Z" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="20" cy="20" r="4" fill="currentColor" />
    <text x="34" y="26" fill="currentColor" fontFamily="Space Grotesk, sans-serif" fontWeight="600" fontSize="14">
      YANG MING
    </text>
    <text x="34" y="36" fill="currentColor" opacity="0.55" fontFamily="Inter, sans-serif" fontSize="7" letterSpacing="1.4">
      MARINE TRANSPORT
    </text>
  </Wrap>
);

export const LogoOOCL = () => (
  <Wrap label="OOCL">
    <circle cx="14" cy="20" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="24" cy="20" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
    <text x="38" y="26" fill="currentColor" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="18" letterSpacing="2">
      OOCL
    </text>
  </Wrap>
);

export const LogoHMM = () => (
  <Wrap label="HMM">
    <path d="M6 30 L6 10 L12 10 L12 18 L20 18 L20 10 L26 10 L26 30 L20 30 L20 24 L12 24 L12 30 Z" fill="currentColor" />
    <text x="34" y="26" fill="currentColor" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="18" letterSpacing="1.5">
      HMM
    </text>
    <text x="80" y="26" fill="currentColor" opacity="0.55" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="1.4">
      SEA THE VALUE
    </text>
  </Wrap>
);

// ————— Registries —————

export const AIRLINE_LOGOS = [
  { name: "Qantas Freight", Logo: LogoQantas },
  { name: "Cathay Cargo", Logo: LogoCathay },
  { name: "Singapore Airlines Cargo", Logo: LogoSingapore },
  { name: "Emirates SkyCargo", Logo: LogoEmirates },
  { name: "Lufthansa Cargo", Logo: LogoLufthansa },
  { name: "Korean Air Cargo", Logo: LogoKorean },
  { name: "China Airlines Cargo", Logo: LogoChinaAir },
  { name: "Air New Zealand Cargo", Logo: LogoAirNZ },
  { name: "ANA Cargo", Logo: LogoANA },
];

export const SHIPPING_LOGOS = [
  { name: "Maersk", Logo: LogoMaersk },
  { name: "MSC", Logo: LogoMSC },
  { name: "CMA CGM", Logo: LogoCMA },
  { name: "Hapag-Lloyd", Logo: LogoHapag },
  { name: "ONE", Logo: LogoONE },
  { name: "COSCO", Logo: LogoCOSCO },
  { name: "Evergreen", Logo: LogoEvergreen },
  { name: "Yang Ming", Logo: LogoYangMing },
  { name: "OOCL", Logo: LogoOOCL },
  { name: "HMM", Logo: LogoHMM },
];
