# Meridian Freight — Marketing Site

Highly interactive marketing site for a global freight forwarder, built with
Next.js 15 (App Router), TypeScript, Tailwind, Framer Motion, GSAP and Lenis.

## Run

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Structure

- `app/` — App Router entry, layout, global styles
- `components/sections/` — every homepage section as its own file
- `components/interactive/` — reusable primitives (cursor, reveal, counter, marquee, magnetic button)
- `components/providers/` — Lenis smooth scroll provider
- `components/ui/` — base UI (Button, Section shell)
- `lib/` — utilities, country list
- `DESIGN.md` — design system reference

## Sections

1. **Preloader** — dot-grid world map with progress
2. **Nav** — sticky, condenses on scroll, 9-country selector, mobile menu
3. **Hero** — animated headline, orbit graphic, parallax blurs
4. **Stats** — animated counters
5. **Services** — 6-card grid with hover lift + icon animation
6. **Reliability** — parallax truck + container tracking
7. **Why us** — 5-column benefit grid
8. **Testimonials** — auto-playing carousel with progress dots
9. **Partners** — dual marquee (air + ocean)
10. **Insights** — hover-reveal news cards with category badges
11. **FAQ** — animated accordion
12. **CTA + Footer** — closing call to action

## Interactivity

- Lenis smooth scroll
- Custom cursor with hover expansion
- Magnetic buttons
- IntersectionObserver-driven reveals with stagger
- Animated counters that trigger on view
- Parallax on hero + reliability
- Pause-on-hover marquees
- Framer Motion accordion, carousel, tabs
- `prefers-reduced-motion` respected

## Notes

- Copy (testimonials, FAQ) is drafted from spec; substitute your real content.
- Partner names render as text — swap in SVG logos when you have them.
