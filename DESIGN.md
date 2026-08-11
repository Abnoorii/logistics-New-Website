# Logistics.af — Design System

## Voice
Industrial precision, humanized. The tone should feel like an operations
control tower: confident, terse, factual. Never salesy.

## Palette

| Token | Hex | Role |
|-------|-----|------|
| ink-950 | `#05070d` | Page background |
| ink-900 | `#0a0e1a` | Section background |
| ink-800 | `#101728` | Elevated surface |
| ink-700 | `#182236` | Card background |
| ink-600 | `#243049` | Card hover |
| steel-100 | `#e6ebf3` | Primary text |
| steel-300 | `#9ba7bb` | Secondary text |
| steel-400 | `#6b7891` | Muted / caption |
| amber-400 | `#f9ab27` | **Brand accent** — CTAs, active state |
| amber-300 | `#fcc353` | Hover accent |
| signal-500 | `#1ec2ad` | Secondary accent — data, status pips |

Base is deep navy (ink). Amber is used sparingly — reserve it for the one
thing you want the user to look at in each viewport. Teal shows up in
data indicators, small icons, and micro-flourishes.

## Typography

- **Display**: Space Grotesk (500/600/700) — geometric, technical, but warmer than Grotesks
- **Body**: Inter (400/500) — neutral workhorse
- Fluid scale via `clamp()` — see `display-1`, `display-2`, `display-3` in `tailwind.config.ts`
- Track headlines tight (`-0.02em` to `-0.03em`)

## Spacing / Layout

- Container max-width **1360px** at 2xl
- Section vertical rhythm: `py-24 md:py-32`
- 12-column grid; hero and services use asymmetric splits (7-5 or 8-4)

## Motion

Timing curve of choice: `[0.22, 1, 0.36, 1]` (custom out-expo).

| Preset | Duration | Use |
|--------|----------|-----|
| reveal | 0.8s | Section fade + slide-up on scroll |
| stagger | 0.08s | Between children |
| hover-lift | 0.35s | Card / button hover |
| marquee | 40–70s linear | Logo strips |
| counter | 2.2s | Animated numbers |

All scroll reveal uses IntersectionObserver with a 15% threshold and
`once: true`. Respects `prefers-reduced-motion`.

## Components

- **Magnetic button** — cursor pulls the button 8px toward it, releases on leave
- **Custom cursor** — 6px dot + 34px ring, expands to 68px on hover targets
- **Reveal** — wraps any child; opacity 0 → 1, y 24px → 0
- **Counter** — starts on view, cubic-out easing
- **Marquee** — CSS keyframe, duplicated content, pause on hover
- **Accordion** — Framer `motion.div` height auto
