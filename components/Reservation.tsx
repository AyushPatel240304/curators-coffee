"use client";

import { useRef, useState } from "react";
import { revealUp } from "@/animations/reveal";
import { useScrollAnimation } from "@/hooks/useScrollAnimations";

const partySizes = ["1", "2", "3", "4", "5", "6", "7+"];
const times = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
];

const inputClass =
  "w-full rounded-xl border border-cream/15 bg-cream/5 px-4 py-3 font-body text-sm text-cream placeholder:text-cream/30 outline-none transition-colors focus:border-copper";

export function Reservation() {
  const wrap = useRef<HTMLDivElement>(null);
  const [confirmed, setConfirmed] = useState<{ name: string; date: string; time: string; guests: string } | null>(
    null
  );

  useScrollAnimation(() => {
    if (!wrap.current) return;
    return revealUp(wrap.current);
  });

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setConfirmed({
      name: String(data.get("name") ?? ""),
      date: String(data.get("date") ?? ""),
      time: String(data.get("time") ?? ""),
      guests: String(data.get("guests") ?? ""),
    });
    e.currentTarget.reset();
  };

  return (
    <section id="reserve" className="relative bg-coffee py-28 text-cream lg:py-36">
      <div ref={wrap} className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-copper">
            Reserve a Table
          </span>
          <h2 className="mt-5 text-4xl leading-[1.05] tracking-tightest md:text-5xl">
            Save your seat.
          </h2>
          <p className="mx-auto mt-5 max-w-md font-body text-sm leading-relaxed text-cream/60">
            Tell us when you're coming and for how many — we'll hold the table.
          </p>
        </div>

        {confirmed ? (
          <div className="mt-12 rounded-2xl border border-copper/30 bg-cream/5 p-8 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-copper text-ink">
              ✓
            </div>
            <p className="mt-5 font-display text-2xl">Thank you, {confirmed.name}.</p>
            <p className="mt-2 font-body text-sm text-cream/60">
              Table for {confirmed.guests} on {confirmed.date} at {confirmed.time} is
              requested. We'll confirm shortly by phone or email.
            </p>
            <button
              onClick={() => setConfirmed(null)}
              className="mt-7 rounded-full border border-cream/20 px-6 py-2.5 font-body text-sm transition-all duration-300 ease-glide hover:border-copper hover:text-copper"
            >
              Make another reservation
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-2 block font-mono text-[11px] uppercase tracking-wide text-cream/40">
                Full Name
              </label>
              <input name="name" type="text" required placeholder="Jane Doe" className={inputClass} />
            </div>

            <div>
              <label className="mb-2 block font-mono text-[11px] uppercase tracking-wide text-cream/40">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="jane@email.com"
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-2 block font-mono text-[11px] uppercase tracking-wide text-cream/40">
                Phone
              </label>
              <input name="phone" type="tel" required placeholder="+91 98765 43210" className={inputClass} />
            </div>

            <div>
              <label className="mb-2 block font-mono text-[11px] uppercase tracking-wide text-cream/40">
                Date
              </label>
              <input name="date" type="date" required min={today} className={inputClass} />
            </div>

            <div>
              <label className="mb-2 block font-mono text-[11px] uppercase tracking-wide text-cream/40">
                Time
              </label>
              <select name="time" required defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Select a time
                </option>
                {times.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block font-mono text-[11px] uppercase tracking-wide text-cream/40">
                Party Size
              </label>
              <div className="flex flex-wrap gap-2">
                {partySizes.map((size, i) => (
                  <label key={size} className="cursor-pointer">
                    <input
                      type="radio"
                      name="guests"
                      value={size}
                      defaultChecked={i === 1}
                      required
                      className="peer sr-only"
                    />
                    <span className="block rounded-full border border-cream/15 px-4 py-2 font-body text-sm text-cream/70 transition-all duration-300 ease-glide peer-checked:border-copper peer-checked:bg-copper peer-checked:text-ink">
                      {size}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block font-mono text-[11px] uppercase tracking-wide text-cream/40">
                Notes (optional)
              </label>
              <textarea
                name="notes"
                rows={3}
                placeholder="Window seat, allergies, celebrating something..."
                className={inputClass}
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full rounded-full bg-copper px-7 py-3.5 font-body text-sm text-ink transition-all duration-300 ease-glide hover:bg-copperlt"
              >
                Confirm Reservation
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
