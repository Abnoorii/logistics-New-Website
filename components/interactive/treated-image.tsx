import Image from "next/image";
import { cn } from "@/lib/utils";
import { type CSSProperties } from "react";

type Treatment = "duotone" | "subtle" | "none";

export type TreatedImageProps = {
  src: string;
  alt: string;
  /** Aspect ratio class, e.g. "aspect-[16/9]". */
  aspect?: string;
  /** Focal point, e.g. "center 30%" — critical for wide crops. */
  focal?: string;
  /** Treatment intensity. Default "subtle" (understated). */
  treatment?: Treatment;
  /** Adds the branded grid mask on top. */
  gridOverlay?: boolean;
  /** Adds ink→transparent gradient at the bottom for text legibility. */
  textGradient?: boolean;
  /** Adds a small caption chip in the bottom-left. */
  caption?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Wraps in a rounded card border. */
  bordered?: boolean;
};

const filterClass: Record<Treatment, string> = {
  duotone: "[filter:url(#duotone-amber)]",
  subtle: "[filter:url(#subtle-brand)] saturate-[.9] contrast-[1.03]",
  none: "",
};

export function TreatedImage({
  src,
  alt,
  aspect = "aspect-[16/9]",
  focal = "center center",
  treatment = "subtle",
  gridOverlay = true,
  textGradient = false,
  caption,
  className,
  sizes = "(min-width: 1024px) 60vw, 100vw",
  priority = false,
  bordered = true,
}: TreatedImageProps) {
  const imgStyle: CSSProperties = { objectPosition: focal };
  return (
    <figure
      className={cn(
        "relative w-full overflow-hidden bg-ink-800",
        aspect,
        bordered && "rounded-[2rem] border border-white/10",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={imgStyle}
        className={cn("object-cover", filterClass[treatment])}
      />

      {/* Amber warm-shadow lift, keeps images cohesive with brand */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950/50 mix-blend-multiply" />
      <div className="pointer-events-none absolute inset-0 bg-amber-400/[0.06] mix-blend-overlay" />

      {gridOverlay && (
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(230,235,243,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(230,235,243,0.08) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, transparent 85%)",
          }}
        />
      )}

      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.9'/></svg>\")",
        }}
      />

      {textGradient && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent" />
      )}

      {caption && (
        <figcaption className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-ink-900/70 px-3 py-1 text-[10px] uppercase tracking-widest text-steel-200 backdrop-blur">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
