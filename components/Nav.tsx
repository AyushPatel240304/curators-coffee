"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Visit", href: "#visit" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-glide ${
        solid ? "bg-ink/80 backdrop-blur-md border-b border-cream/5" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="text-xl text-cream lg:text-2xl">
          <Logo />
        </a>
        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-sm tracking-wide text-cream/70 transition-colors hover:text-cream"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#visit"
          className="rounded-full border border-copper/60 px-5 py-2 font-body text-sm text-copperlt transition-all duration-300 ease-glide hover:border-copper hover:bg-copper hover:text-ink"
        >
          Reserve
        </a>
      </nav>
    </header>
  );
}
