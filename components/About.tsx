"use client";

import { useRef } from "react";
import { Placeholder } from "./Placeholder";
import { revealSplit } from "@/animations/reveal";
import { useScrollAnimation } from "@/hooks/useScrollAnimations";

export function About() {
  const image = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);

  useScrollAnimation(() => {
    if (!image.current || !copy.current) return;
    return revealSplit(image.current, copy.current);
  });

  return (
    <section id="about" className="relative overflow-hidden bg-cream py-28 text-coffee lg:py-36">
      {/* Decorative slow-rotating bean */}
      <div
        className="pointer-events-none absolute -right-24 top-16 h-64 w-64 rounded-[50%] opacity-[0.06]"
        style={{
          background: "radial-gradient(60% 60% at 38% 32%, #3A2A1E, #1A120C)",
          animation: "aboutspin 60s linear infinite",
        }}
        aria-hidden
      />
      <style jsx>{`
        @keyframes aboutspin {
          to {
            transform: rotate(360deg);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          div[aria-hidden] {
            animation: none !important;
          }
        }
      `}</style>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div
          ref={image}
          className="aspect-[4/5] w-full overflow-hidden rounded-3xl ring-1 ring-coffee/10"
        >
          <Placeholder
            gradient="linear-gradient(160deg,#3A2A1E,#5B4029 60%,#241812)"
            image="https://images.pexels.com/photos/6205635/pexels-photo-6205635.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Founder in the roastery"
            grain
          />
        </div>

        <div ref={copy}>
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-copper">
            About Curators
          </span>
          <h2 className="mt-5 text-4xl leading-[1.08] tracking-tightest md:text-5xl">
            We curate coffee the way a gallery curates art.
          </h2>
          <div className="mt-7 space-y-5 font-body text-base leading-relaxed text-coffee/70">
            <p>
              Every bean we serve is chosen for a reason — a farm, a season, a
              flavour we couldn't stop thinking about. We roast in small batches
              and taste relentlessly, because consistency is a form of respect.
            </p>
            <p>
              But coffee is only half of it. Curators is built around
              hospitality and the quiet community that forms over a good cup. A
              place to think, to meet, to slow down.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-coffee/10 pt-8">
            {[
              ["12", "Single origins"],
              ["3", "Roasts weekly"],
              ["1", "Cup at a time"],
            ].map(([n, label]) => (
              <div key={label}>
                <dt className="font-display text-3xl tracking-tight text-copper">{n}</dt>
                <dd className="mt-1 font-body text-xs uppercase tracking-wide text-coffee/50">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
