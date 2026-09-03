"use client";

import { useRef } from "react";
import { menu } from "@/lib/content";
import { revealUp, revealStagger } from "@/animations/reveal";
import { useScrollAnimation } from "@/hooks/useScrollAnimations";

export function FeaturedMenu() {
  const head = useRef<HTMLDivElement>(null);
  const grid = useRef<HTMLDivElement>(null);

  useScrollAnimation(() => {
    const cleanups: (() => void)[] = [];
    if (head.current) cleanups.push(revealUp(head.current));
    if (grid.current) cleanups.push(revealStagger(grid.current, "[data-card]"));
    return () => cleanups.forEach((c) => c());
  });

  return (
    <section id="menu" className="relative bg-cream py-28 text-coffee lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={head} className="mb-16 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-copper">
            Featured Menu
          </span>
          <h2 className="mt-5 text-4xl leading-[1.05] tracking-tightest md:text-6xl">
            Made with the same care you just watched.
          </h2>
        </div>

        <div ref={grid} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {menu.map((item) => (
            <article
              key={item.name}
              data-card
              className="group flex flex-col overflow-hidden rounded-2xl bg-white/60 ring-1 ring-coffee/5 transition-all duration-500 ease-glide hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-coffee/10"
            >
              <div
                className="aspect-[4/5] w-full overflow-hidden"
                style={{ background: item.gradient }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full scale-105 object-cover transition-transform duration-700 ease-glide group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl tracking-tight">{item.name}</h3>
                  <span className="font-mono text-sm text-copper">{item.price}</span>
                </div>
                <p className="mt-2 font-body text-sm leading-relaxed text-coffee/60">
                  {item.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
