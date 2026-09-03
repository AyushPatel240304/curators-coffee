"use client";

import { useMemo } from "react";

/**
 * Floating dust particles — the one kind of independent looping motion the
 * brief permits. Deterministic positions so SSR and client agree.
 */
export function Particles({ count = 18 }: { count?: number }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const seed = (i * 9301 + 49297) % 233280;
        const rnd = seed / 233280;
        const rnd2 = ((i * 4021 + 12345) % 100) / 100;
        return {
          left: `${(rnd * 100).toFixed(2)}%`,
          top: `${(rnd2 * 100).toFixed(2)}%`,
          size: 1 + (i % 3),
          delay: `${(rnd * 6).toFixed(2)}s`,
          dur: `${(7 + rnd2 * 8).toFixed(2)}s`,
        };
      }),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-cream/30 animate-drift"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            animationDelay: d.delay,
            animationDuration: d.dur,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes drift {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          15% {
            opacity: 0.7;
          }
          85% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-60px) translateX(12px);
            opacity: 0;
          }
        }
        .animate-drift {
          animation-name: drift;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-drift {
            animation: none;
            opacity: 0.35;
          }
        }
      `}</style>
    </div>
  );
}

/**
 * Soft rising steam — used over the cup and brewing scenes.
 */
export function Steam() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-2/3 overflow-hidden" aria-hidden>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="absolute bottom-0 left-1/2 h-40 w-24 -translate-x-1/2 rounded-full blur-2xl animate-steam"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 60%, rgba(243,236,225,0.22), transparent 70%)",
            marginLeft: `${(i - 1) * 40}px`,
            animationDelay: `${i * 1.6}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes steam {
          0% {
            transform: translate(-50%, 20%) scale(0.8);
            opacity: 0;
          }
          25% {
            opacity: 0.6;
          }
          100% {
            transform: translate(-50%, -120%) scale(1.4);
            opacity: 0;
          }
        }
        .animate-steam {
          animation: steam 7s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-steam {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
