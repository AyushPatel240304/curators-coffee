"use client";

import { useEffect, useRef } from "react";

/**
 * Small convenience hook: runs an animation setup fn once on mount and
 * calls its returned cleanup on unmount. Keeps section components tidy.
 */
export function useScrollAnimation(setup: () => (() => void) | void) {
  const ran = useRef(false);
  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    const cleanup = setup();
    return () => {
      if (typeof cleanup === "function") cleanup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
