"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { education, additionalExperience } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section
      id="education"
      className="relative border-t border-[var(--line)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          tag="fig. 04 — education"
          title="Formal education and Additional Experience."
        />

        <div className="grid gap-6 md:grid-cols-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-lg border border-[var(--line)] bg-[var(--bg-elevated)] p-6"
          >
            <div className="mb-5 flex items-center gap-2 text-[var(--accent)]">
              <GraduationCap size={18} />
              <h3 className="font-[family-name:var(--font-mono)] text-xs">
                Degrees
              </h3>
            </div>
            <ul className="space-y-5">
              {education.map((edu) => (
                <li
                  key={edu.school}
                  className="border-l-2 border-[var(--line)] pl-4"
                >
                  <p className="font-[family-name:var(--font-display)] font-medium text-[var(--ink)]">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-[var(--ink-muted)]">
                    {edu.school}
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-mono)] text-xs text-[var(--ink-muted)]">
                    {edu.duration}
                  </p>
                  {edu.detail && (
                    <p className="mt-1 text-sm text-[var(--ink)]">
                      {edu.detail}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-lg border border-[var(--line)] bg-[var(--bg-elevated)] p-6"
          >
            <div className="mb-5 flex items-center gap-2 text-[var(--accent)]">
              <Briefcase size={18} />
              <h3 className="font-[family-name:var(--font-mono)] text-xs">
                Additional Experience
              </h3>
            </div>
            <ul className="space-y-3">
              {additionalExperience.map((cert) => (
                <li
                  key={cert}
                  className="flex gap-2 border-b border-[var(--line)] pb-3 text-sm text-[var(--ink)] last:border-none last:pb-0"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
