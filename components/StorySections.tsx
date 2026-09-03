"use client";

import { CineScene } from "./CineScene";
import { Steam, Particles } from "./Ambient";
import { scenes } from "@/lib/content";

const byId = (id: string) => scenes.find((s) => s.id === id)!;

// Each section is a thin wrapper over the reusable CineScene, matching the
// component architecture in the brief while keeping animation logic shared.

export function BeanSection() {
  return <CineScene scene={byId("bean")} toScale={1.5} ambient={<Particles count={14} />} />;
}

export function RoastingSection() {
  return <CineScene scene={byId("roasting")} panX={-6} toScale={1.3} />;
}

export function GrindingSection() {
  return <CineScene scene={byId("grinding")} toScale={1.34} />;
}

export function BrewingSection() {
  return <CineScene scene={byId("brewing")} toScale={1.24} ambient={<Steam />} />;
}

export function CupSection() {
  return <CineScene scene={byId("cup")} toScale={1.2} ambient={<Steam />} />;
}

export function CafeSection() {
  return (
    <CineScene scene={byId("cafe")} toScale={1.18} pinLength={160} ambient={<Particles count={16} />} />
  );
}
