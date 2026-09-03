import { gsap } from "gsap";

/**
 * Opens a lightbox overlay with a soft scale/opacity entrance.
 * Returns a close handler.
 */
export function openLightbox(overlay: HTMLElement, panel: HTMLElement) {
  gsap.set(overlay, { display: "flex", opacity: 0 });
  gsap.set(panel, { opacity: 0, scale: 0.94 });
  gsap.to(overlay, { opacity: 1, duration: 0.35, ease: "power2.out" });
  gsap.to(panel, { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" });
}

export function closeLightbox(overlay: HTMLElement, panel: HTMLElement, done: () => void) {
  gsap.to(panel, { opacity: 0, scale: 0.96, duration: 0.28, ease: "power2.in" });
  gsap.to(overlay, {
    opacity: 0,
    duration: 0.32,
    ease: "power2.in",
    onComplete: () => {
      gsap.set(overlay, { display: "none" });
      done();
    },
  });
}
