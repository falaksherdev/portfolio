"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-[var(--line)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          tag="fig. 03 — work history"
          title="Where I've worked, and what I moved forward."
        />

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-[var(--line)] md:block" />

          <ol className="space-y-10">
            {experience.map((job, i) => (
              <motion.li
                key={job.company + job.role}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative grid gap-2 md:grid-cols-[220px_1fr] md:gap-8 md:pl-8"
              >
                <span className="absolute left-0 top-2 hidden h-3.5 w-3.5 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] md:block" />

                <div>
                  <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--ink-muted)]">
                    {job.duration}
                  </p>
                  <p className="mt-1 text-xs text-[var(--ink-muted)]">
                    {job.location}
                  </p>
                </div>

                <div className="rounded-lg border border-[var(--line)] bg-[var(--bg-elevated)] p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-[var(--ink)]">
                    {job.role}
                  </h3>
                  <p className="mb-4 text-sm text-[var(--accent)]">
                    {job.company}
                  </p>
                  <ul className="space-y-2">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-sm text-[var(--ink-muted)]"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                        <span className="text-[var(--ink)]">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
