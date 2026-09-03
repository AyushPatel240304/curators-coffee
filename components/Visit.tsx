"use client";

import { useRef } from "react";
import { revealUp, revealSplit } from "@/animations/reveal";
import { useScrollAnimation } from "@/hooks/useScrollAnimations";

const hours = [
  ["Mon – Fri", "7:30 — 22:00"],
  ["Saturday", "8:00 — 23:00"],
  ["Sunday", "8:00 — 21:00"],
];

export function Visit() {
  const info = useRef<HTMLDivElement>(null);
  const map = useRef<HTMLDivElement>(null);

  useScrollAnimation(() => {
    if (!map.current || !info.current) return;
    return revealSplit(map.current, info.current);
  });

  return (
    <section id="visit" className="relative bg-cream py-28 text-coffee lg:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        {/* Map placeholder */}
        <div
          ref={map}
          className="relative min-h-[360px] overflow-hidden rounded-3xl ring-1 ring-coffee/10"
          style={{
            background:
              "linear-gradient(160deg,#2A201640,#3A2A1E),radial-gradient(60% 60% at 40% 40%,#5B402955,transparent)",
          }}
        >
          <div className="absolute inset-0 grid place-items-center">
            <div className="flex flex-col items-center gap-3 text-cream/70">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-copper text-ink">
                ◉
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
                Embed Google Map here
              </span>
            </div>
          </div>
        </div>

        {/* Info */}
        <div ref={info} className="flex flex-col justify-center">
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-copper">
            Visit Us
          </span>
          <h2 className="mt-5 text-4xl leading-[1.05] tracking-tightest md:text-5xl">
            The journey ends where yours begins.
          </h2>

          <div className="mt-9 space-y-6 font-body">
            <div>
              <div className="font-mono text-xs uppercase tracking-wide text-coffee/40">
                Address
              </div>
              <p className="mt-1 text-lg">
                14 Riverside Walk, Navrangpura
                <br />
                Ahmedabad, Gujarat 380009
              </p>
            </div>

            <div>
              <div className="font-mono text-xs uppercase tracking-wide text-coffee/40">
                Hours
              </div>
              <dl className="mt-2 space-y-1">
                {hours.map(([day, time]) => (
                  <div key={day} className="flex justify-between gap-8 text-sm">
                    <dt className="text-coffee/70">{day}</dt>
                    <dd className="font-mono text-coffee">{time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <div className="font-mono text-xs uppercase tracking-wide text-coffee/40">
                Phone
              </div>
              <p className="mt-1 text-lg">+91 79 4000 1234</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#"
              className="rounded-full bg-coffee px-7 py-3 font-body text-sm text-cream transition-all duration-300 ease-glide hover:bg-copper hover:text-ink"
            >
              Get Directions
            </a>
            <a
              href="#reserve"
              className="rounded-full border border-coffee/30 px-7 py-3 font-body text-sm text-coffee transition-all duration-300 ease-glide hover:border-coffee hover:bg-coffee hover:text-cream"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
