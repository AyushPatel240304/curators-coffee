"use client";

import { useRef } from "react";
import { testimonials } from "@/lib/content";
import { revealUp, revealStagger } from "@/animations/reveal";
import { useScrollAnimation } from "@/hooks/useScrollAnimations";

function Stars() {
  return (
    <span className="text-copper" aria-hidden>
      ★★★★★
    </span>
  );
}

export function Testimonials() {
  const head = useRef<HTMLDivElement>(null);
  const grid = useRef<HTMLDivElement>(null);

  useScrollAnimation(() => {
    const cleanups: (() => void)[] = [];
    if (head.current) cleanups.push(revealUp(head.current));
    if (grid.current) cleanups.push(revealStagger(grid.current, "[data-review]"));
    return () => cleanups.forEach((c) => c());
  });

  return (
    <section className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={head} className="mb-16 flex flex-col items-center text-center">
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-copper">
            Loved Locally
          </span>
          <h2 className="mt-5 text-4xl leading-[1.05] tracking-tightest text-cream md:text-6xl">
            2,600+ reasons to visit.
          </h2>
          <div className="mt-6 flex items-center gap-3 font-body text-cream/70">
            <Stars />
            <span className="font-display text-2xl text-cream">4.6</span>
            <span className="text-sm text-cream/50">· 2,600+ reviews</span>
          </div>
        </div>

        <div ref={grid} className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              data-review
              className="group flex flex-col rounded-2xl border border-cream/10 bg-charcoal/60 p-8 transition-all duration-500 ease-glide hover:-translate-y-1.5 hover:border-copper/40 hover:shadow-[0_0_40px_-12px_rgba(198,120,74,0.4)]"
            >
              <Stars />
              <p className="mt-5 flex-1 font-display text-lg leading-relaxed tracking-tight text-cream/90">
                “{t.quote}”
              </p>
              <footer className="mt-6 border-t border-cream/10 pt-5">
                <div className="font-body text-sm text-cream">{t.name}</div>
                <div className="font-mono text-xs uppercase tracking-wide text-cream/40">
                  {t.meta}
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
