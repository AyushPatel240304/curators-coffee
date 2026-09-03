import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Fade-up reveal for a single element (or the container itself).
 */
export function revealUp(el: HTMLElement, opts: { y?: number; delay?: number } = {}) {
  if (reduced()) {
    gsap.set(el, { opacity: 1, y: 0 });
    return () => {};
  }
  const anim = gsap.fromTo(
    el,
    { opacity: 0, y: opts.y ?? 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      delay: opts.delay ?? 0,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
    }
  );
  return () => anim.scrollTrigger?.kill();
}

/**
 * Staggered fade-up for a group of children (cards, gallery tiles, etc).
 */
export function revealStagger(
  container: HTMLElement,
  selector: string,
  opts: { y?: number; stagger?: number } = {}
) {
  const items = container.querySelectorAll<HTMLElement>(selector);
  if (!items.length) return () => {};

  if (reduced()) {
    items.forEach((i) => gsap.set(i, { opacity: 1, y: 0 }));
    return () => {};
  }

  const anim = gsap.fromTo(
    items,
    { opacity: 0, y: opts.y ?? 48 },
    {
      opacity: 1,
      y: 0,
      duration: 0.85,
      ease: "power3.out",
      stagger: opts.stagger ?? 0.12,
      scrollTrigger: { trigger: container, start: "top 78%", once: true },
    }
  );
  return () => anim.scrollTrigger?.kill();
}

/**
 * Split reveal for the About section: image from left, copy from right.
 */
export function revealSplit(image: HTMLElement, copy: HTMLElement) {
  if (reduced()) {
    gsap.set([image, copy], { opacity: 1, x: 0 });
    return () => {};
  }
  const tl = gsap.timeline({
    scrollTrigger: { trigger: image, start: "top 80%", once: true },
  });
  tl.fromTo(image, { opacity: 0, x: -60 }, { opacity: 1, x: 0, duration: 1, ease: "power3.out" }, 0)
    .fromTo(copy, { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 1, ease: "power3.out" }, 0.1);
  return () => tl.scrollTrigger?.kill();
}
