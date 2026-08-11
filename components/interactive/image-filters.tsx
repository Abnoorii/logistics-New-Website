/**
 * SVG filter definitions used by TreatedImage. Rendered once, hidden,
 * at the root of the layout so CSS `filter: url(#name)` works everywhere.
 *
 * Two treatments:
 *  - `duotone-amber`  → dramatic ink→amber mapping (editorial)
 *  - `subtle-brand`   → light desaturation + warm-shadow lift (understated corporate)
 */
export function ImageFilters() {
  return (
    <svg
      aria-hidden
      focusable="false"
      style={{
        position: "absolute",
        width: 0,
        height: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <defs>
        {/* Editorial duotone: ink-800 → amber-100 */}
        <filter id="duotone-amber" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="
              0.33 0.33 0.33 0 0
              0.33 0.33 0.33 0 0
              0.33 0.33 0.33 0 0
              0    0    0    1 0
            "
          />
          <feComponentTransfer>
            <feFuncR tableValues="0.063 0.996" />
            <feFuncG tableValues="0.090 0.937" />
            <feFuncB tableValues="0.156 0.788" />
          </feComponentTransfer>
        </filter>

        {/* Understated: preserve original color, drop saturation slightly, warm shadows */}
        <filter id="subtle-brand" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="
              0.72 0.20 0.08 0 0.01
              0.10 0.78 0.12 0 0.005
              0.05 0.15 0.75 0 0
              0    0    0    1 0
            "
          />
          <feComponentTransfer>
            <feFuncR tableValues="0.04 1" />
            <feFuncG tableValues="0.03 0.97" />
            <feFuncB tableValues="0.06 0.93" />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
  );
}
