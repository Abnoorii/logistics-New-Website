# Logistics.af — Photography & Motion Brief

_Hand this to your photographer, videographer or brand agency. Everything below is scoped for the site as it exists at logistics.af. Amend for print, out-of-home or trade-show use._

---

## 1. Voice

**Documentary photojournalism.** Not editorial glamour, not corporate stock. Think Reuters or a FedEx annual report — real operations, natural light, no posed smiles, no fake meetings.

The site's copy is deliberately terse and confident. The imagery has to match: quiet, competent, unfiltered. If it looks like it was made for a brochure, it fails.

### Reference boards (public examples of the target)

- Maersk stories / editorial site
- Kuehne+Nagel corporate imagery
- DHL Trend Radar reports
- FedEx annual reports (photography spreads, not renders)
- The New York Times' shipping-crisis photography, 2021–2023
- Instagram: `@shippingnerd`, `@marinetraffic`, `@aeronews.tv`

### Reference boards (what we are NOT)

- Business handshake / whiteboard stock
- Fake diverse-team-around-a-laptop photography
- Colour-graded "epic" drone reels
- Neon-lit "tech-startup" desks

---

## 2. Colour, treatment, format

- **Palette on set:** natural light. Prefer golden-hour or blue-hour where practical. Avoid mid-day flat sunlight.
- **Post-production:** the site applies a subtle in-browser treatment (light desat, warm-shadow lift, grid + noise overlays). Raw files should stay natural — do NOT deliver hand-graded duotones or heavy edits. We colour in code.
- **Deliver:** high-res JPEG or WebP, sRGB, ≥ 2400 px on longest side. RAW files as backup if colour will be re-graded elsewhere.
- **Aspect ratios in use on the site:** 21:9 (hero strips), 16:9 (banner), 5:4 (card thumbnails), 16:10 (about mid-band). Shoot loose so we can crop later.
- **Naming:** `logisticsaf_<section>_<location>_<n>.jpg` (e.g. `logisticsaf_air_kbl_012.jpg`).

---

## 3. Shot list (Phase 2 — half-day shoot, ~$500–$2,000)

The single most valuable half-day. Priority order for hire-a-local-photographer with 6 hours on the ground.

### 3.1 Kabul HQ / ops room (2 hours)

| # | Description | Composition notes |
|---|-------------|-------------------|
| 1 | Ops desk with three monitors, one showing a tracking dashboard | Landscape, tight, no faces required |
| 2 | Two ops leads in unposed conversation over a printed manifest | Mid-shot, natural window light |
| 3 | Board (whiteboard or wall) with lane names, container numbers | Detail, sharp on text |
| 4 | Overhead of a desk — pen, phone, paperwork, coffee | 90° down, top-down flat lay |
| 5 | Founder or lead operator, environmental portrait, at their desk | ¾ view, eyes off camera, one hand on desk |

### 3.2 Warehouse (1.5 hours)

| # | Description | Composition notes |
|---|-------------|-------------------|
| 6 | Wide interior of high-bay racking, forklift in soft focus | 24mm equivalent, low ISO, tripod |
| 7 | Detail — labelled carton on shelf edge, hand reaching | Macro-ish, brand visible on carton |
| 8 | Worker in hi-vis logging a receipt on a handheld | Mid-shot, over-shoulder |
| 9 | Loading dock with a truck backed in, doors open | Wide, sunset backlight ideal |
| 10 | Bonded cage / locked area with sign | Straight-on, respect security |

### 3.3 Truck depot / road (2 hours)

| # | Description | Composition notes |
|---|-------------|-------------------|
| 11 | Line-up of trucks at depot, magic hour | Wide, low angle |
| 12 | Driver checking log at cab door | ¾ back, no ID visible |
| 13 | Container being coupled to trailer, twist-lock detail | Macro |
| 14 | Truck on the road, mountain backdrop (Salang or Kabul-Kandahar) | Long lens, compressed |
| 15 | Convoy from above — drone if permits allow, otherwise elevated static | Wide |

### 3.4 Reserve / weather-permitting

| # | Description | Notes |
|---|-------------|-------|
| 16 | Torkham or Islam Qala crossing — customs, trucks queued | Sensitive locations — clear permits first |
| 17 | Air cargo apron, Kabul airport | Very sensitive — likely requires official escort |
| 18 | Night shot of depot with sodium lights, truck idling | Golden hour extending into blue hour |

### 3.5 What we do NOT need

- People smiling at camera
- Handshakes
- Whiteboard-meeting scenes
- Anyone wearing branded competitor gear (delete or reshoot)

---

## 4. Team portraits (Phase 2, separate afternoon)

- Four to six senior operators
- Environmental (at their desk / on the floor), not against a coloured backdrop
- Half-body, ¾ view, eyes just off-camera
- Consistent lens: 50mm or 85mm equivalent
- Same lighting kit across every subject (one softbox, one bounce)
- Neutral clothing preferred — remove strong logos
- We do NOT want LinkedIn-headshot vibe — we want "operator caught between two tasks"

---

## 5. Phase 3 (later, $5–15k) — full brand shoot

Once budget allows. Same voice, wider scope.

- Aerial drone: convoy through Salang tunnel approach
- Torkham crossing, morning shift changeover
- Kabul airport freight apron, escorted access
- Cold-chain warehouse interior, if applicable
- Port shots at Karachi or Bandar Abbas — origin/destination coverage
- Motion: two 30–60s cutdowns (silent loops for web hero + subtitled for social)

**Motion (video) spec, when we get to it:**

- 4K, 24 fps, log profile
- Deliver two versions: silent 8-second loop (H.265, ~4 MB) for use as web hero backdrop; 30–45s cut with music and subtitles for social.
- Same colour philosophy as stills — natural, we grade in-house.
- Never autoplay with sound. Never gate content behind video.

---

## 6. Rights & delivery

- Full commercial buy-out, perpetual, worldwide.
- No usage restrictions (web, print, social, out-of-home, trade shows).
- Photographer keeps portfolio rights subject to a 90-day quiet period post-launch.
- Deliverables: RAW + edited JPEG on a shared drive within 10 days of shoot.

---

## 7. What we place where on the site

This is what each image will actually be used for, so shoot with the crop in mind. See `lib/images.ts` in the codebase for the current placeholder mapping — swap URLs there when owned assets are ready.

| Site placement | Aspect | Character |
|----------------|--------|-----------|
| `/about` hero strip | 21:9 | Wide infrastructure — container yard or apron at dusk |
| `/about` team band | 16:10 | Team at work, unposed, mid-shot |
| `/services/air-freight` hero | 21:9 | Cargo aircraft, ramp lit |
| `/services/ocean-freight` hero | 21:9 | Aerial container ship / port |
| `/services/customs-brokerage` hero | 21:9 | Paperwork detail, desk, hands |
| `/services/warehousing-3pl` hero | 21:9 | Warehouse interior, high-bay |
| `/services/project-cargo` hero | 21:9 | Crane on oversize, twist-lock detail |
| `/services/domestic-transport` hero | 21:9 | Truck on highway, mountains |
| `/scenarios` cards (3×) | 5:4 | Category-relevant hero moment |
| `/scenarios/[slug]` heroes | 21:9 | Full-bleed image per story |
| `/pricing` strip | 21:8 | Mountainous crossing, indicator of geography |
| `/contact` closing band | 21:7 | Quiet, port cranes silhouetted at twilight |
| Home / Reliability section | Backdrop | Same style, heavily veiled — reads as texture, not photo |

---

## 8. Legal & sensitivity

- Border crossings, airports, military-adjacent sites (Bagram) require official permission before shooting. Do not photograph without written clearance.
- No images of individuals without signed release, except in crowd wides where faces are not identifiable.
- No branded competitor equipment in the frame — reshoot or crop out.
- No photographs that could identify security arrangements at any facility.

---

## 9. Success criteria

An image is delivered if:

1. It could sit alongside a Maersk or Kuehne+Nagel campaign without looking out of place.
2. It reads as _our_ operation — Central Asia geography, not generic port.
3. It survives the site's in-code treatment (subtle desat + amber overlay + grid) without going muddy or washed out.
4. It is licensed for full commercial buy-out with no time or geographic restriction.

If it does not clear all four, we do not use it.

---

_Owner: Logistics.af brand._
_Contact: <info@logistics.af>._
_Version: v1, August 2026._
