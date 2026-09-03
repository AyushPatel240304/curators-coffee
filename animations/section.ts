import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface CineSceneRefs {
  /** The pinned full-viewport wrapper */
  section: HTMLElement;
  /** The background image/layer that scales + pans */
  media: HTMLElement;
  /** The copy block that fades up */
  copy: HTMLElement;
}

/**
 * The signature cinematic move, reused by every story scene.
 * The scene pins for ~pinLength of scroll while the media slowly
 * scales and pans and the copy fades in then drifts away — creating
 * the illusion of one continuous camera travelling through the story.
 *
 * scrub:true ties every frame of the motion to scroll position.
 */
export function createCineScene(
  { section, media, copy }: CineSceneRefs,
  opts: {
    /** how far (in vh) the scene stays pinned */
    pinLength?: number;
    /** starting scale of the media */
    fromScale?: number;
    /** ending scale of the media */
    toScale?: number;
    /** horizontal pan in % */
    panX?: number;
    /** vertical pan in % */
    panY?: number;
  } = {}
) {
  const {
    pinLength = 180,
    fromScale = 1.08,
    toScale = 1.28,
    panX = 0,
    panY = -4,
  } = opts;

  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduced) {
    gsap.set(copy, { opacity: 1, y: 0 });
    gsap.set(media, { scale: 1 });
    return () => {};
  }

  const ctx = gsap.context(() => {
    // Slow, continuous camera push on the media across the whole pin.
    gsap.fromTo(
      media,
      { scale: fromScale, xPercent: 0, yPercent: 0 },
      {
        scale: toScale,
        xPercent: panX,
        yPercent: panY,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${pinLength}%`,
          scrub: true,
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
        },
      }
    );

    // Copy fades up as the scene enters, then eases away before it leaves,
    // so the next scene begins appearing before this one is gone.
    gsap
      .timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${pinLength}%`,
          scrub: true,
        },
      })
      .fromTo(
        copy,
        { opacity: 0, y: 48 },
        { opacity: 1, y: 0, ease: "power2.out", duration: 0.28 }
      )
      .to(copy, { opacity: 1, duration: 0.44 })
      .to(copy, { opacity: 0, y: -40, ease: "power2.in", duration: 0.28 });
  }, section);

  return () => ctx.revert();
}
