/**
 * SVG filter definitions used by TreatedImage. Rendered once, hidden,
 * at the root of the layout so CSS `filter: url(#name)` works everywhere.
 *
 * Two treatments:
 *  - `duotone-brand`  → dramatic ink→brand-red mapping (editorial)
 *  - `subtle-brand`   → light desaturation + red shadow-lift (understated corporate)
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
        {/* Editorial duotone: brand-navy → brand-red-100 (was ink→amber) */}
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
            {/* Shadows map to brand-navy #16305A (0.086, 0.188, 0.353)
                Highlights map to brand-red-100 #fee2e2 (0.996, 0.886, 0.886) */}
            <feFuncR tableValues="0.086 0.996" />
            <feFuncG tableValues="0.188 0.886" />
            <feFuncB tableValues="0.353 0.886" />
          </feComponentTransfer>
        </filter>

        {/* Understated: preserve colour, drop saturation slightly, warm red shadows */}
        <filter id="subtle-brand" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="
              0.78 0.14 0.10 0 0.02
              0.06 0.80 0.10 0 0
              0.05 0.10 0.80 0 0.01
              0    0    0    1 0
            "
          />
          <feComponentTransfer>
            {/* Lift shadows warm (red-ish), keep highlights neutral */}
            <feFuncR tableValues="0.07 1" />
            <feFuncG tableValues="0.04 0.97" />
            <feFuncB tableValues="0.06 0.94" />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
  );
}
