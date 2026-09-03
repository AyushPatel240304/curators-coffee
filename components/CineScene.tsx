"use client";

import { useRef, type ReactNode } from "react";
import { Placeholder } from "./Placeholder";
import { createCineScene } from "@/animations/section";
import { useScrollAnimation } from "@/hooks/useScrollAnimations";
import type { Scene } from "@/lib/content";

interface CineSceneProps {
  scene: Scene;
  /** ambient extras like steam/particles layered over the media */
  ambient?: ReactNode;
  pinLength?: number;
  toScale?: number;
  panX?: number;
}

/**
 * One pinned, full-viewport cinematic scene. The media slowly scales/pans
 * under a vignette while the copy fades up and away — the shared building
 * block that produces the "one continuous camera" illusion across scenes.
 */
export function CineScene({
  scene,
  ambient,
  pinLength = 180,
  toScale = 1.26,
  panX = 0,
}: CineSceneProps) {
  const section = useRef<HTMLElement>(null);
  const media = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);

  useScrollAnimation(() => {
    if (!section.current || !media.current || !copy.current) return;
    return createCineScene(
      { section: section.current, media: media.current, copy: copy.current },
      { pinLength, toScale, panX }
    );
  });

  const headlineLines = scene.headline.split("\n");

  return (
    <section
      ref={section}
      id={scene.id}
      className="cine-vignette relative h-screen w-full overflow-hidden bg-ink"
    >
      {/* Media layer (scales + pans) */}
      <div ref={media} className="absolute inset-0" style={{ willChange: "transform" }}>
        <Placeholder
          gradient={scene.gradient}
          label={`Scene ${scene.index} · ${scene.id} · replace with photography`}
        />
      </div>

      {ambient}

      {/* Copy */}
      <div className="relative z-10 flex h-full items-center">
        <div
          ref={copy}
          className="mx-auto w-full max-w-4xl px-6 text-center lg:px-10"
          style={{ willChange: "transform, opacity" }}
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-copper">
              {scene.index}
            </span>
            <span className="h-px w-8 bg-copper/40" />
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-cream/50">
              {scene.eyebrow}
            </span>
          </div>
          <h2 className="text-4xl leading-[1.05] tracking-tightest text-cream md:text-6xl lg:text-7xl">
            {headlineLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mx-auto mt-7 max-w-xl font-body text-base leading-relaxed text-cream/70 md:text-lg">
            {scene.description}
          </p>
        </div>
      </div>
    </section>
  );
}
