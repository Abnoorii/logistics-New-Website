import { cn } from "@/lib/utils";

/**
 * Brand mark — three ascending parallelograms.
 *
 * Two variants:
 *  - "onDark"  (default): white lower parallelograms + red accent top,
 *              matches the on-dark navy-background app icon.
 *  - "onLight": brand navy lower parallelograms + red accent top,
 *              use on white / light backgrounds.
 */
export function LogoMark({
  variant = "onDark",
  className,
}: {
  variant?: "onDark" | "onLight";
  className?: string;
}) {
  const base = variant === "onDark" ? "#FFFFFF" : "#16305A";
  return (
    <svg
      viewBox="0 0 103 70"
      role="img"
      aria-label="Logistics.af"
      className={cn("h-6 w-auto", className)}
    >
      <polygon points="0,70 20,70 33.103,34 13.103,34" fill={base} />
      <polygon points="34.687,53 54.687,53 67.79,17 47.79,17" fill={base} />
      <polygon points="69.374,36 89.374,36 102.477,0 82.477,0" fill="#DA262E" />
    </svg>
  );
}

/**
 * Full lockup — the mark + "logistics.af" wordmark.
 * The mark keeps brand colours; the wordmark inherits the containing
 * element's text colour so it works on any background.
 */
export function LogoLockup({
  variant = "onDark",
  className,
  markClassName,
  wordmarkClassName,
}: {
  variant?: "onDark" | "onLight";
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark variant={variant} className={cn("h-6 w-auto", markClassName)} />
      <span
        className={cn(
          "font-display text-base tracking-tight",
          wordmarkClassName
        )}
      >
        logistics.af
      </span>
    </span>
  );
}
