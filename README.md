# Curators Coffee — Cinematic Demo

A Next.js + TypeScript + Tailwind + GSAP + Lenis demo. The first act is a
scroll-driven cinematic story (bean → roasting → grinding → brewing → cup →
café); the second act releases into a normal premium business site (menu,
gallery, about, testimonials, visit, footer).

Photography is stubbed with tasteful warm-gradient placeholders — swap them for
real images (or the production frame sequence) without touching the animation
layer.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

Requires internet on first run so `next/font/google` can fetch Fraunces, Inter,
and IBM Plex Mono. (If you're ever offline, see the note at the bottom.)

```bash
npm run build && npm start   # production
```

## Design tokens

Defined in `tailwind.config.ts`:

- **ink** `#0B0A09` cinematic base · **charcoal** `#1A1613` panels
- **cream** `#F3ECE1` light sections · **sand** `#E4D8C7` neutral
- **coffee** `#3A2A1E` deep brown · **copper** `#C6784A` accent
- Display **Fraunces** · Body **Inter** · Mono **IBM Plex Mono**

## Architecture

```
app/
  layout.tsx          fonts + smooth-scroll provider
  page.tsx            assembles the journey in order
  globals.css         base styles, vignette/scrim helpers, reduced-motion

components/
  Nav, Hero, Logo, Placeholder, Ambient (Steam/Particles)
  CineScene           reusable pinned cinematic scene
  StorySections       the 6 thin scene wrappers (Bean…Cafe)
  FeaturedMenu, Gallery, About, Testimonials, Visit, Footer
  SmoothScrollProvider

animations/            (framework-agnostic GSAP modules)
  hero.ts   section.ts   reveal.ts   gallery.ts

hooks/
  useSmoothScroll.ts       Lenis <-> ScrollTrigger bridge
  useScrollAnimations.ts   run-once setup/cleanup helper

lib/
  content.ts          all copy + placeholder gradients in one place
```

## How the cinematic effect works

Each story scene pins for ~180vh of scroll (`scrub: true`), while its media
slowly scales and pans and the copy fades up then away — so the next scene is
already appearing before the previous one is gone. This is the "one continuous
camera" illusion, built only from `transform` + `opacity` for 60fps.

`prefers-reduced-motion` is respected everywhere: pins/scrubs are skipped and
all content renders statically visible.

## Swapping in real images

1. Drop files into `public/` (e.g. `public/scenes/roasting.jpg`).
2. In `components/Placeholder.tsx`, replace the gradient `<div>` with
   `next/image`, or add an `image` field to each scene in `lib/content.ts` and
   render `<Image fill>` inside `CineScene`.
3. The animation layer is untouched — it animates whatever media element it's
   given.

### Later: real frame-sequence cinematic

`CineScene` is the seam. Replace its media layer with a `<canvas>` that draws
frames by scroll progress (map the same ScrollTrigger progress to a frame
index). Everything else — pinning, copy timing, the Act One → Act Two handoff —
stays as is.

## Offline note

`next/font/google` needs network on first build. If you must run fully offline,
switch `app/layout.tsx` to plain CSS `font-family` fallbacks (the `--font-*`
variables in `globals.css` already provide them).
