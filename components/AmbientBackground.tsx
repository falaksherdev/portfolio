"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type Node = { cx: number; cy: number; r: number; kind: "via" | "pad" };
type Chip = { x: number; y: number; w: number; h: number };

const NODES: Node[] = [
  { cx: 90, cy: 160, r: 3, kind: "via" },
  { cx: 90, cy: 340, r: 2.5, kind: "via" },
  { cx: 250, cy: 80, r: 3, kind: "pad" },
  { cx: 250, cy: 340, r: 2.5, kind: "via" },
  { cx: 430, cy: 160, r: 3.5, kind: "pad" },
  { cx: 430, cy: 500, r: 2.5, kind: "via" },
  { cx: 620, cy: 90, r: 2.5, kind: "via" },
  { cx: 620, cy: 260, r: 3, kind: "pad" },
  { cx: 620, cy: 440, r: 2.5, kind: "via" },
  { cx: 800, cy: 160, r: 3, kind: "pad" },
  { cx: 800, cy: 380, r: 2.5, kind: "via" },
  { cx: 960, cy: 90, r: 2.5, kind: "via" },
  { cx: 960, cy: 300, r: 3.5, kind: "pad" },
  { cx: 960, cy: 500, r: 2.5, kind: "via" },
  { cx: 140, cy: 520, r: 2.5, kind: "via" },
  { cx: 340, cy: 580, r: 3, kind: "pad" },
];

const TRACES = [
  "M90,160 L90,80 L250,80",
  "M90,160 L170,160 L170,260 L250,260 L250,340",
  "M250,80 L430,80 L430,160",
  "M430,160 L520,160 L520,90 L620,90",
  "M430,160 L430,340 L620,340 L620,260",
  "M620,260 L620,90",
  "M620,260 L700,260 L700,160 L800,160",
  "M800,160 L960,160 L960,90",
  "M800,160 L800,380 L960,380 L960,300",
  "M620,440 L620,340",
  "M620,440 L800,440 L800,380",
  "M430,500 L430,340",
  "M430,500 L340,500 L340,580",
  "M90,340 L90,520 L140,520",
  "M140,520 L340,520 L340,580",
  "M960,500 L960,380",
];

const CHIPS: Chip[] = [
  { x: 396, y: 126, w: 68, h: 68 },
  { x: 586, y: 226, w: 68, h: 68 },
  { x: 926, y: 266, w: 68, h: 68 },
];

export function AmbientBackground() {
  const drift = useMemo(
    () =>
      NODES.map((_, i) => ({
        dur: 6 + ((i * 7) % 5),
        delay: (i % 6) * 0.3,
      })),
    [],
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden blueprint-grid-fine opacity-[0.4] dark:opacity-[0.3]"
    >
      <div
        className="absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full opacity-[0.12] blur-3xl"
        style={{ background: "var(--accent)" }}
      />
      <div
        className="absolute -bottom-52 -right-24 h-[520px] w-[520px] rounded-full opacity-[0.1] blur-3xl"
        style={{ background: "var(--accent-2)" }}
      />
    </div>
  );
}
