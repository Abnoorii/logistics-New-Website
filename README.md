# Logistics.af — Marketing Site

Highly interactive marketing site for a global freight forwarder, built with
Next.js 16 (App Router), TypeScript, Tailwind, Framer Motion, GSAP and Lenis.

Live at https://logistics.af.

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy

Auto-deployed by Vercel on every push to `claude/keen-turing-ft5zbl` (until a
production branch is chosen).

### Environment variables

Add these in Vercel → Project → Settings → Environment Variables (production
scope):

| Name | Value | Required |
|------|-------|----------|
| `RESEND_API_KEY` | Your Resend API key from https://resend.com | Yes, to receive form emails |
| `CONTACT_TO` | Inbox for quote requests | Default: `sales@logistics.af` |
| `CONTACT_FROM` | Verified sender for outbound | Default: `Logistics.af Website <noreply@logistics.af>` |

**Without `RESEND_API_KEY`**, the form still accepts submissions and returns a
success screen to the user, but the message is only written to Vercel server
logs — you will *not* receive an email. Wire the key before real traffic.

**To verify sending works:**
1. Sign up at https://resend.com, add `logistics.af` as a domain, follow their
   DNS setup (adds SPF + DKIM records to Hostinger).
2. Copy the API key into Vercel.
3. Redeploy.
4. Submit the form on `/contact` from your phone; expect email in `sales@`.

## Structure

- `app/` — App Router entry, layout, global styles, SEO (`robots.ts`,
  `sitemap.ts`, `opengraph-image.tsx`, `icon.tsx`, `apple-icon.tsx`), API route
- `app/services/[slug]` — Statically prerendered detail page per service
- `components/sections/` — every page section as its own file
- `components/interactive/` — reusable primitives (cursor, reveal, counter,
  marquee, magnetic button, partner logos)
- `components/providers/` — Lenis smooth scroll provider
- `components/ui/` — base UI (Button, Section, PageHero)
- `lib/site.ts` — brand name + contact info (single source of truth)
- `lib/services.ts` — service list + copy
- `lib/countries.ts` — country selector list
- `DESIGN.md` — design system reference

## Sections (home)

1. Preloader — dot-grid world map with progress (home page only)
2. Nav — sticky, condenses on scroll, 9-country selector, mobile menu
3. Hero — animated headline, orbit graphic, parallax blurs
4. Stats — animated counters
5. Services — 6-card grid with hover lift + icon animation
6. Reliability — parallax truck + container tracking
7. Why us — 5-column benefit grid
8. Testimonials — auto-playing carousel with progress dots
9. Partners — dual marquee (air + ocean, stylized SVG wordmarks)
10. Insights — hover-reveal news cards with category badges
11. FAQ — animated accordion
12. CTA + Footer — closing call to action

## Routes

| Path | Type | Notes |
|------|------|-------|
| `/` | Static | Full landing page |
| `/about` | Static | Company story, timeline, footprint |
| `/services` | Static | Index of all services |
| `/services/[slug]` | SSG | 6 statically generated pages |
| `/contact` | Static | Contact form + info |
| `/track` | Static | Sample-data shipment lookup |
| `/api/contact` | Server | POST endpoint, Resend integration |
| `/sitemap.xml` | Auto | Generated from `app/sitemap.ts` |
| `/robots.txt` | Auto | Generated from `app/robots.ts` |
| `/opengraph-image` | Auto | 1200×630 OG image for social shares |
| `/icon` | Auto | Favicon |

## Interactivity

- Lenis smooth scroll
- Custom cursor with hover expansion (desktop only)
- Magnetic buttons
- IntersectionObserver-driven reveals with stagger
- Animated counters that trigger on view
- Parallax on hero + reliability
- Pause-on-hover marquees
- Framer Motion accordion, carousel, tabs
- `prefers-reduced-motion` respected

## Known follow-ups

Everything in the site's spec is functional. Content still to firm up:

- Testimonials are drafted placeholders — replace with real quotes before launch
- Insights cards are not linked to real articles yet
- Partner logos are stylized wordmarks — swap for licensed brand assets when available
- Country selector saves choice locally but does not yet localize page content
- Track page uses sample data — connect to a real carrier feed to make it live
