import { Logo } from "./Logo";

const nav = ["Menu", "Gallery", "About", "Visit"];
const social = ["Instagram", "Facebook", "Threads"];

export function Footer() {
  return (
    <footer className="relative bg-ink pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-cream/10 pb-14 md:grid-cols-3">
          <div>
            <Logo className="text-3xl text-cream" />
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-cream/50">
              A cinematic coffee house. From a single bean to the room it's
              served in.
            </p>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-cream/40">
              Explore
            </div>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n}>
                  <a
                    href={`#${n.toLowerCase()}`}
                    className="font-body text-sm text-cream/70 transition-colors hover:text-copper"
                  >
                    {n}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-cream/40">
              Follow
            </div>
            <ul className="mt-5 space-y-3">
              {social.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="font-body text-sm text-cream/70 transition-colors hover:text-copper"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 font-body text-sm text-cream/50">
              hello@curators.coffee
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 md:flex-row">
          <span className="font-mono text-xs text-cream/30">
            © {new Date().getFullYear()} Curators Coffee. All rights reserved.
          </span>
          <span className="font-mono text-xs text-cream/30">
            Crafted as a demo · placeholder imagery
          </span>
        </div>
      </div>
    </footer>
  );
}
