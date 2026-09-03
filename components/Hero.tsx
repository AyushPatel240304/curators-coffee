"use client";

import { useRef } from "react";
import { Logo } from "./Logo";
import { Particles } from "./Ambient";
import { createHeroScene } from "@/animations/hero";
import { useScrollAnimation } from "@/hooks/useScrollAnimations";

export function Hero() {
  const section = useRef<HTMLElement>(null);
  const bean = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const scrollHint = useRef<HTMLDivElement>(null);

  useScrollAnimation(() => {
    if (!section.current || !bean.current || !content.current || !scrollHint.current)
      return;
    return createHeroScene({
      section: section.current,
      bean: bean.current,
      content: content.current,
      scrollHint: scrollHint.current,
    });
  });

  return (
    <section
      ref={section}
      id="top"
      className="relative flex h-screen items-center justify-center overflow-hidden bg-ink"
    >
      <Particles count={20} />

      {/* The floating bean — CSS-drawn stand-in for the hero render */}
      <div
        ref={bean}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: "transform" }}
      >
        <div className="relative h-40 w-28 md:h-52 md:w-36">
          <div
            className="absolute inset-0 rounded-[50%]"
            style={{
              background:
                "radial-gradient(60% 60% at 38% 32%, #6B4A2E 0%, #3A2A1E 45%, #1A120C 100%)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.6), inset -8px -12px 30px rgba(0,0,0,0.5)",
            }}
          />
          {/* centre crease */}
          <div
            className="absolute left-1/2 top-1/2 h-[82%] w-[3px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background: "linear-gradient(180deg, transparent, #0B0A09 20%, #0B0A09 80%, transparent)",
              boxShadow: "0 0 12px rgba(0,0,0,0.8)",
            }}
          />
        </div>
      </div>

      {/* Hero copy */}
      <div
        ref={content}
        className="relative z-10 flex flex-col items-center px-6 text-center"
        style={{ willChange: "transform, opacity" }}
      >
        <Logo className="text-5xl text-cream md:text-7xl" />
        <p className="mt-6 max-w-md font-body text-base text-cream/60 md:text-lg">
          A cinematic journey through every cup — from a single bean to the room
          it's served in.
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollHint}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-cream/40">
          Scroll
        </span>
        <span className="relative flex h-10 w-[1px] overflow-hidden bg-cream/15">
          <span className="absolute inset-x-0 top-0 h-4 bg-copper animate-scrollline" />
        </span>
        <style jsx>{`
          @keyframes scrollline {
            0% {
              transform: translateY(-100%);
            }
            100% {
              transform: translateY(250%);
            }
          }
          .animate-scrollline {
            animation: scrollline 2s ease-in-out infinite;
          }
        `}</style>
      </div>
    </section>
  );
}
