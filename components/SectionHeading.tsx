"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeading({
  tag,
  title,
  description,
}: {
  tag: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12 max-w-2xl"
    >
      <p className="mb-3 font-[family-name:var(--font-mono)] text-xs text-[var(--accent)]">
        {tag}
      </p>
      <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-[var(--ink)] md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[var(--ink-muted)]">{description}</p>
      )}
    </motion.div>
  );
}
