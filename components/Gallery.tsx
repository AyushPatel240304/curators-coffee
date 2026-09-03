"use client";

import { useRef, useState } from "react";
import { galleryTiles } from "@/lib/content";
import { revealStagger } from "@/animations/reveal";
import { openLightbox, closeLightbox } from "@/animations/gallery";
import { useScrollAnimation } from "@/hooks/useScrollAnimations";

export function Gallery() {
  const grid = useRef<HTMLDivElement>(null);
  const overlay = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  useScrollAnimation(() => {
    if (!grid.current) return;
    return revealStagger(grid.current, "[data-tile]", { stagger: 0.08 });
  });

  const open = (i: number) => {
    setActive(i);
    requestAnimationFrame(() => {
      if (overlay.current && panel.current) openLightbox(overlay.current, panel.current);
    });
  };

  const close = () => {
    if (overlay.current && panel.current)
      closeLightbox(overlay.current, panel.current, () => setActive(null));
    else setActive(null);
  };

  return (
    <section id="gallery" className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-copper">
              The Atmosphere
            </span>
            <h2 className="mt-5 text-4xl leading-[1.05] tracking-tightest text-cream md:text-6xl">
              A room worth staying in.
            </h2>
          </div>
          <p className="max-w-sm font-body text-sm text-cream/50">
            Coffee, light, and the small moments in between. Tap any frame to
            look closer.
          </p>
        </div>

        <div
          ref={grid}
          className="grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4"
        >
          {galleryTiles.map((tile, i) => (
            <button
              key={i}
              data-tile
              onClick={() => open(i)}
              className={`group relative overflow-hidden rounded-xl ring-1 ring-cream/5 ${tile.span}`}
              style={{ background: tile.gradient }}
              aria-label={`Open gallery image ${i + 1}`}
            >
              <span className="absolute inset-0 scale-100 transition-transform duration-700 ease-glide group-hover:scale-110" style={{ background: tile.gradient }} />
              <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          ref={overlay}
          onClick={close}
          className="fixed inset-0 z-[60] hidden items-center justify-center bg-ink/90 p-6 backdrop-blur-sm"
        >
          <div
            ref={panel}
            onClick={(e) => e.stopPropagation()}
            className="relative aspect-[3/2] w-full max-w-4xl overflow-hidden rounded-2xl ring-1 ring-cream/10"
            style={{ background: galleryTiles[active].gradient }}
          >
            <button
              onClick={close}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink/50 text-cream/80 transition hover:bg-ink hover:text-cream"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
