# COWORKLY — Coworking Space Website Build Prompt

> One-shot prompt for an AI code generator (Claude Code, Cursor, v0, Bolt, etc.). Paste this entire file into an **empty directory** that already contains the attached COWORKLY photo/logo assets (see **Asset inventory**). Build a complete, production-quality **static multi-page website** (HTML + CSS + vanilla JS only) that lets visitors experience COWORKLY — Rourkela’s first coworking office.

---

## What this project is

**COWORKLY** is a real coworking space in **Rourkela**. The site must feel like a **2026-world showcase**: cinematic, warm, confident, and motion-led — not a generic Bootstrap template, not a purple SaaS landing, not a newspaper layout, not cream-and-terracotta “AI default” design.

**Brand DNA (from real assets):**
- Name: **COWORKLY**
- Motto: **WORK · CONNECT · GROW** (also appears as WORK · CONNECT · CREATE on glass decals — prefer GROW for site-wide branding)
- Tagline: **Where Ideas Begin**
- Positioning: **Rourkela’s 1st coworking office** for freelancers, entrepreneurs, WFH developers/professionals, students, and teams
- Web / social: `www.coworkly.space` · `@coworkly.space` (Instagram)
- Local identity: Odia script **କାଉର୍କଲି** may appear once (footer or about), never as the primary logo
- Palette: deep near-black ground, molten orange / amber accents, clean white type — sampled from the logo and Fluxora-style ember hero
  - Ground: `#120400` → `#2a0b02`
  - Flame: `#ff3d00` → `#ff8a1f` (logo orange ≈ `#ff6600`)
  - Ink: `#ffffff` / soft whites
  - Warm glass: `rgba(56, 20, 6, 0.42)`
- Logo mark: wordmark with the second **O** replaced by a **three-people community icon**; surrounding orange network arcs/nodes (see logo asset)

**Named spaces inside the venue (use these exact names):**
| Space | Type | Motto / label |
|---|---|---|
| **UDAAN** | Main hall · open workspace | Where Ideas Begin |
| **LAKSHYA** | Cabin 3 · private cabin | Where Focus Creates Impact |
| **MANTHA** | Meeting Room 1 | Where Ideas Evolve |
| **CHARCHA** | Meeting Room 2 | Where Ideas Are Discussed |
| **SAMVA** | Named room (entrance corridor) | (pair with UDAAN in “spaces” grid) |

**Amenities (from brand badge):** High-Speed Wi-Fi · Tea & Coffee · Power Backup · Meeting Rooms · Separate Washrooms · RO Water

**Wall / space copy you may reuse on the site:**
- THINK OUTSIDE THE BOX
- MAKE IT HAPPEN
- Stay Curious · Keep Building
- CREATIVE IDEA
- BUILD THE FUTURE
- GREAT IDEAS DON’T WORK ALONE…
- GOOD IDEAS GROW HERE
- Eat · Paint · Read · Work · Play (COWORKLY Cafe line)

---

## Critical product goals

1. **Coworking showcase first** — visitors must feel the *space*: glass cabins, open desks, murals, pendant light bank, entrance glow sign, amenities. Photography of the real venue drives the experience.
2. **Landing page motion like Fluxora** — same *feel* of craft: transparent pill navbar, full-bleed cinematic hero, asymmetric scrim, staggered CSS `rise` entrances, flame-gradient pill CTA, glass stats, optional low-opacity “ghost” panel on wide screens, huge watermark + partners/foot band. **Do not clone Fluxora copy or React stack** — adapt the *effects system* to COWORKLY and static HTML.
3. **Video testimonials** — first-class section + page pattern for **customer Instagram-style reels** (9:16). Placeholder video slots + a clear drop-in convention so reels can be added later without redesign.
4. **Crop / edit the attached images** — do not dump raw phone photos full-bleed with plastic chair covers, sealant tubes, or clutter. Crop, color-grade, and compose deliberately (instructions below).
5. **Static only** — plain HTML pages, shared CSS, shared JS. No React, no Vite, no Tailwind, no animation libraries (no GSAP / Framer). CSS `@keyframes` + small vanilla JS only.
6. **Aesthetic of 2026** — expressive typography, atmospheric gradients, glass, intentional motion (2–3+ purposeful motions), full-bleed hero imagery, brand-first first viewport. Mobile-perfect.

---

## Tech stack (required — do not substitute)

- **Static site**: multiple `.html` pages
- **CSS**: real stylesheets (`css/tokens.css`, `css/base.css`, `css/layout.css`, `css/components.css`, `css/pages/*.css` or equivalent). Design tokens as CSS custom properties in `:root`. No Tailwind, no Bootstrap, no CSS-in-JS.
- **JS**: vanilla ES modules in `js/` (nav, mobile menu, hero video ready state, testimonial reel player, reveal-on-scroll, lightbox optional)
- **Fonts** via Google Fonts `<link>`:
  - **Inter Tight** 400/500/600/700 — display / UI
  - **Inter** 400/500/600 — body
  - **Instrument Serif** italic only — single serif accent word in the hero headline (Fluxora gesture)
- **Icons**: inline SVG only (no icon pack)
- **No build step required** — open via a simple static server (`npx serve` or `python -m http.server`). Optional tiny script to optimize images is fine; keep the site runnable as static files.

---

## Pages to ship

| File | Purpose |
|---|---|
| `index.html` | Landing — Fluxora-grade hero + space teaser + amenities + reel testimonials + CTA |
| `spaces.html` | Full space showcase (UDAAN, LAKSHYA, MANTHA, CHARCHA, SAMVA + open desks) |
| `amenities.html` | Wi-Fi, coffee, power, washrooms, RO, cafe vibe |
| `community.html` | Who it’s for + **video testimonials / reels gallery** |
| `visit.html` / `contact.html` | Visit / book a tour — Rourkela, Instagram, website, form stub |
| Shared partials pattern via JS include **or** duplicated header/footer kept identical — prefer a small `js/include.js` that injects `partials/nav.html` + `partials/footer.html` |

Optional thin pages only if needed: `pricing.html` can be a simple “Plans — enquire” stub with glass cards (Hot desk / Dedicated desk / Cabin / Meeting room) and no fake prices unless placeholder “Ask us” CTAs.

---

## Landing page — Fluxora-grade hero (adapt, don’t paste Fluxora)

Reproduce this **effect system** on `index.html`:

### Navbar
- Absolute / sticky-transparent over hero
- Layout: **logo-left · pill-nav-center · CTA-right**
- Pill nav: hairline border, warm glass blur, chip-like links
- CTA: white pill “Book a Tour” (or “Get started”)
- ≤940px: burger + slide-down sheet; hide desktop pill
- Skip link: `.skip-link` → `#main`
- A11y: `aria-expanded`, `aria-label`, `aria-hidden` where appropriate

### Hero composition (first viewport — brand first)
One composition, not a dashboard. First viewport should contain roughly:
1. **COWORKLY** as a hero-level brand signal (logo + wordmark, not nav-only)
2. One display headline
3. One short supporting sentence
4. One CTA group
5. One dominant full-bleed visual (photo or subtle looping video of the space)

**Suggested headline (edit for rhythm, keep meaning):**
```
Work.
Connect.
Grow in *Rourkela*
```
— with **Rourkela** (or one key word) in Instrument Serif italic `<em>`.

**Suggested lede:** Rourkela’s first coworking office — glass cabins, open desks, and a community built to ship ideas.

**CTA:** flame-gradient pill “Book a Tour” with white arrow tile (Fluxora `.btn--flame` geometry).

**Social proof row:** overlapping tinted avatar dots + “Happy members · Live community” (use soft figures; no fake exact claims if unknown — prefer “Join Rourkela’s makers” or omit invented numbers; if using stats, keep them clearly marketing-soft: e.g. “6 named spaces”, “Always-on Wi-Fi”, “Cafe + RO”).

**Glass stat cards** (below CTA, Fluxora-like): e.g. “Named cabins & halls”, “Meeting rooms ready”, not corporate SaaS vanity metrics.

**Ghost panel** (≥1120px only): low-opacity atmospheric panel (occupancy vibe / “Focus hours” / abstract bars) — texture, not a real analytics product.

**Footer band of hero:** huge low-opacity watermark `COWORKLY` or `UDAAN` left; right side “Built for” chips: Freelancers · Founders · Students · Teams.

### Motion (CSS only — mandatory)
- Media cross-fades in via `.is-ready` toggled when hero media can play / image loaded
- Blocks (note, title, sub, cta, stats, foot) share one `rise` keyframe with staggered `animation-delay`
- Honor `prefers-reduced-motion: reduce` (disable rise; show media immediately; pause any video)
- No animation library

### Scrim
Asymmetric dark wash under copy (left/bottom), lighter over the photographic subject — same philosophy as Fluxora’s measured scrim.

### Beyond the hero (same landing page)
After the hero, continue the showcase (still aesthetic, not cluttered):
1. **Spaces strip** — horizontal or grid of cropped room shots with names (UDAAN, LAKSHYA, MANTHA, CHARCHA…) linking to `spaces.html`
2. **Amenities** — 6 icon row (recreate flat icons from the circular badge, or extract)
3. **Video testimonials** — see dedicated section below
4. **Visit CTA** — map pin Rourkela + Instagram + Book tour

---

## Video testimonials (mandatory)

COWORKLY has **customer reels**. Build the UI so reels drop in without redesign.

### UX
- Section title e.g. **Member reels** / **Heard in the hall**
- **9:16 portrait players** in a horizontal snap-scroll carousel (mobile) and a 3–4 column grid (desktop)
- Each card: muted preview loop optional, play button overlay, member name + role (placeholders OK), brand-orange progress/hairline
- Click/tap opens an accessible modal / expanded player with controls; `Esc` closes; focus trap
- Support both:
  - local files: `assets/reels/member-01.mp4`
  - and a data config: `js/testimonials.js` exporting an array

```js
// js/testimonials.js — edit this file to add reels
export const testimonials = [
  {
    id: 'reel-01',
    name: 'Member name',
    role: 'Founder · Startup',
    poster: 'assets/reels/member-01.jpg', // optional still
    src: 'assets/reels/member-01.mp4',
    quote: 'Optional one-line quote overlay'
  },
  // Add more objects as reels arrive
]
```

### Placeholders until real reels arrive
- Ship **3–4 empty reel shells** with poster stills cropped from space photos (faces of murals / desks — not fake people photos) and a clear “Reel coming soon” state
- Document in an HTML comment at the top of the testimonials section: how to drop MP4s into `assets/reels/` and append to `testimonials.js`

### Do not
- Do not embed Instagram iframes as the primary solution (fragile). Local/self-hosted MP4 first; optional “Watch on Instagram” link beside each card pointing to `@coworkly.space`

---

## Image pipeline — crop & edit (mandatory)

All source photos live in the project’s input folder (UUID filenames from the chat attachments). **Copy, rename, crop, and grade them** into a clean `assets/` tree. Never hotlink external URLs for these photos.

### Output tree
```
assets/
  brand/
    logo-full.png          # clean logo on transparent or white cropped tight
    logo-mark.svg          # recreate people-in-O mark as SVG if possible
    badge-circle.png       # circular promo badge (optional, cropped)
    favicon.svg
  hero/
    hero-entrance.jpg      # glowing Coworkly entrance sign — primary hero candidate
    hero-open-plan.jpg     # wide open desks + plants
    hero-window.jpg        # pendant lights + city window (grade warmer)
  spaces/
    udaan.jpg
    lakshya.jpg
    mantha.jpg
    charcha.jpg
    cabin-think-outside.jpg
    cabin-creative-idea.jpg
    open-desks.jpg
    mural-curious.jpg
  amenities/
    coffee-pantry.jpg      # crop NESCAFÉ/pantry reflections carefully or avoid logos if messy
    washroom-detail.jpg    # optional; prefer branded door signs over fixture close-ups
    ro-water.jpg           # crop to branded RO WATER STATION sticker + clean sink
  reels/
    .gitkeep
    (member-*.mp4 later)
  illustrations/
    coworkly-scene.png     # promotional illustration (transparent)
```

### Source → use map (rename after copying)

| Source file (attachment) | Role after edit |
|---|---|
| `2523dba6-…png` | **Master logo** — crop tight; use in nav; recreate SVG mark |
| `51bc78e4-…png` | Circular badge — amenities icons reference + “Rourkela 1st” claim |
| `4c0f544a-…png` | Illustrative community scene — about / community page hero accent |
| `ff8f5d94-…jpg` | Entrance glow sign — **landing hero** or brand moment |
| `8ec47cc3-…jpg` | Pendant lights + MAKE IT HAPPEN + street — lifestyle hero alternate |
| `ff74c5e3-…jpg` | LAKSHYA Cabin 3 glass branding |
| `a6b25939-…jpg` | UDAAN main hall glass branding |
| `5d4fcb7b-…jpg` | CHARCHA Meeting Room 2 |
| `b200f544-…jpg` | MANTHA Meeting Room 1 |
| `cce1ab03-…jpg` | Private cabin orange wall THINK OUTSIDE THE BOX |
| `6e89a61f-…jpg` | Cabin CREATIVE IDEA bulbs wall |
| `6613e16c-…jpg` / `5dd8005e-…jpg` | Open-plan desks + planters + murals |
| `cc8dfec7-…jpg` | “Stay Curious Keep Building” mural desks |
| `2385ed82-…jpg` / `58b3f1d4-…jpg` | Washroom door branding — amenities only, cropped to sign |
| `7058a658-…jpg` | RO station — crop to brand sticker + faucet |

### Editing rules (do this, not optional)
1. **Crop for composition** — hero crops should feel cinematic (rule of thirds, subject large). Prefer edge-to-edge hero planes; no inset rounded “card photo” in the hero.
2. **Remove / avoid clutter** — plastic chair wraps, sealant tubes, trash, messy cables: crop out or clone-stamp lightly.
3. **Color grade** toward warm ember: slightly deeper shadows, protect orange murals, keep skin/wood warm. Match site tokens.
4. **Straighten & lens-correct** glass door shots so branding reads.
5. **Generate Web-friendly sizes**: ~1600–2400px wide JPEG/WebP for heroes; ~900–1200px for cards; compress sensibly.
6. **Do not** put restroom interiors as hero or above-the-fold content.
7. **Brand first test:** if you remove the nav, the first viewport must still obviously be COWORKLY (logo lockup or entrance sign or wordmark in the headline block).

If an image tool isn’t available in the environment, still copy/rename assets into the tree and apply CSS `object-position` crops as a fallback — but prefer real cropped files.

---

## Design system

### Tokens (put in `css/tokens.css`)
```css
:root {
  --ground: #2a0b02;
  --ground-deep: #120400;
  --ink: #ffffff;
  --ink-soft: rgba(255, 255, 255, 0.72);
  --ink-faint: rgba(255, 255, 255, 0.46);
  --flame: #ff3d00;
  --flame-mid: #ff6600;   /* logo orange */
  --flame-lit: #ff8a1f;
  --glass: rgba(56, 20, 6, 0.42);
  --glass-strong: rgba(40, 13, 3, 0.62);
  --hair: rgba(255, 255, 255, 0.14);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --gutter: clamp(18px, 2.6vw, 44px);
  --font-display: 'Inter Tight', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-italic: 'Instrument Serif', Georgia, serif;
  --radius-pill: 999px;
}
```

### Visual rules
- Dark ember site overall (Fluxora ground) — photography punches through scrims
- Flame gradient CTAs; white secondary buttons
- Glass panels with `backdrop-filter` for stats / pricing / reel chrome
- **No cards in the hero.** Cards OK for spaces grid, amenities, reel shells (interaction containers)
- One job per section: one headline + one short line
- Avoid: purple gradients, Inter-only default look without Instrument Serif accent, emoji decoration, glow spam, multi-layer drop shadows, rounded-full pill clusters as decoration, broadsheet dense columns, cream `#F4F1EA` terracotta themes
- Ship at least these motions: (1) hero `rise` stagger, (2) media fade-in, (3) reel carousel snap or scroll-reveal on spaces strip

### Copy tone
Warm, direct, local pride. Short sentences. Hindi/English room names stay as branded proper nouns. No fake “150+ projects” SaaS language.

---

## Component checklist

- [ ] Skip link
- [ ] Transparent pill navbar + mobile sheet
- [ ] Flame CTA button system
- [ ] Hero with scrim + rise motion + ready state
- [ ] Spaces showcase grid/strip with real cropped photos + room mottos
- [ ] Amenities icon row (6)
- [ ] **Testimonials reels** module + `js/testimonials.js` config
- [ ] Footer with logo, WORK · CONNECT · GROW, Instagram, www.coworkly.space, Rourkela
- [ ] Favicon derived from people-in-O mark (orange/black — not an unrelated purple mark)

---

## Suggested file tree

```
/
  index.html
  spaces.html
  amenities.html
  community.html
  visit.html
  partials/
    nav.html
    footer.html
  css/
    tokens.css
    base.css
    layout.css
    components.css
    hero.css
    testimonials.css
  js/
    main.js
    nav.js
    hero.js
    testimonials.js
    include.js
  assets/
    brand/ …
    hero/ …
    spaces/ …
    amenities/ …
    reels/ …
    illustrations/ …
  README.md          # how to add reels + run locally
```

---

## Steps to build

1. Create the folder structure above.
2. **Process images first** — copy attachments → rename → crop/grade → write into `assets/` as mapped.
3. Recreate / extract the logo mark; write `assets/brand/favicon.svg`.
4. Write `css/tokens.css` + `base.css` (reset, fonts, `.btn`, reduced-motion).
5. Build shared nav/footer; wire `include.js` or duplicate consistently.
6. Build `index.html` hero to Fluxora motion spec (adapted copy + COWORKLY media).
7. Build spaces, amenities, community (reels), visit pages.
8. Implement testimonials player + placeholder shells + config file.
9. Pass a responsive pass (375 / 768 / 1120 / 1440). Confirm ghost panel only ≥1120px.
10. Run a static server; verify hero motion, mobile nav, reel modal, and that all images are local.

---

## Acceptance criteria

- Landing hero feels **cinematic and 2026**, clearly **COWORKLY**, with Fluxora-like rise/scrim/pill-nav/flame CTA
- Real venue photos are **cropped and graded**, not raw dumps
- All named spaces appear with correct mottos
- Video testimonial UI is ready for customer reels via `assets/reels/` + `testimonials.js`
- Static HTML/CSS/JS only; no React/Tailwind/GSAP
- Accessible basics: skip link, focus states, `prefers-reduced-motion`, modal keyboard support
- Mobile and desktop both polished
- Footer/contact point to **Rourkela**, **www.coworkly.space**, **@coworkly.space**

---

## Design notes (context)

- Fluxora is the **motion & craft reference**, not the product. Never leave the word “Fluxora”, “AIM”, or fake partners (BookStore, zantic, etc.) in the COWORKLY site.
- The single Instrument Serif italic word is a deliberate typographic gesture — use it once in the hero headline, not everywhere.
- Prefer atmosphere over chrome: fewer sections, stronger photos, clearer CTAs.
- Community page can feature the promotional illustration (`4c0f544a`) as a full-bleed story panel with the line **Build the Future** / **GOOD IDEAS GROW HERE**.
- Cafe line “Eat · Paint · Read · Work · Play” belongs in amenities or community, not the first viewport.

---

## One-line mission (print this at the top of your working notes)

**Build a static, ember-dark, motion-led COWORKLY website that showcases the real Rourkela coworking space through edited photography, Fluxora-grade hero craft, and a reel-ready video testimonial system.**
