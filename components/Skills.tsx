"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

const groups = [
  { key: "frontend", label: "Frontend", items: skills.frontend },
  { key: "backend", label: "Backend", items: skills.backend },
  { key: "tools", label: "Tools & workflow", items: skills.tools },
] as const;

export function Skills() {
  return (
    <section id="skills" className="relative border-t border-[var(--line)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          tag="fig. 02 — capabilities"
          title="Frontend-first, comfortable across the stack."
          description="React and Next.js are where I spend most of my time — Node and MongoDB round out the picture when a feature needs a real backend."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {groups.map((group, gi) => (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="rounded-lg border border-[var(--line)] bg-[var(--bg-elevated)] p-6"
            >
              <h3 className="mb-5 font-[family-name:var(--font-mono)] text-xs text-[var(--ink-muted)]">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-[var(--line)] px-3 py-1.5 text-sm text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
