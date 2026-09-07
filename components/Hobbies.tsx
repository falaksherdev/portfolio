"use client";

import { motion } from "framer-motion";
import { hobbies, profile } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Hobbies() {
  return (
    <section id="about" className="relative border-t border-[var(--line)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          tag="fig. 05 — beyond the editor"
          title="A little about who I am off-screen."
          description={`Based in ${profile.location}. Here's what fills the time between deploys.`}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby, i) => (
            <motion.div
              key={hobby.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="rounded-lg border border-[var(--line)] bg-[var(--bg-elevated)] p-5 transition-colors hover:border-[var(--accent)]"
            >
              <p className="font-[family-name:var(--font-display)] text-base font-medium text-[var(--ink)]">
                {hobby.label}
              </p>
              <p className="mt-1 text-sm text-[var(--ink-muted)]">{hobby.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
