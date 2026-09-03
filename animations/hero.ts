import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface HeroRefs {
  section: HTMLElement;
  bean: HTMLElement;
  content: HTMLElement;
  scrollHint: HTMLElement;
}

/**
 * Hero: the bean idles with a slow ambient rotation, then on scroll the
 * camera appears to rush toward it — the bean scales up dramatically and
 * the hero UI fades, handing off into The Bean section.
 */
export function createHeroScene({ section, bean, content, scrollHint }: HeroRefs) {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const ctx = gsap.context(() => {
    if (!reduced) {
      // Ambient idle spin — the one allowed independent loop.
      gsap.to(bean, {
        rotation: 360,
        duration: 46,
        repeat: -1,
        ease: "none",
      });

      // Scroll hand-off: camera dives into the bean.
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=140%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        })
        .to(scrollHint, { opacity: 0, duration: 0.1 }, 0)
        .to(content, { opacity: 0, y: -30, duration: 0.4 }, 0)
        .to(bean, { scale: 6.5, opacity: 0, ease: "power2.in", duration: 1 }, 0);
    }
  }, section);

  return () => ctx.revert();
}
