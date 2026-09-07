"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Circle } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section
      id="work"
      className="relative border-t border-[var(--line)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          tag="fig. 01 — selected work"
          title="Products I've designed, built, and shipped."
          description="A mix of live client work and a few things still in the shop."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: (i % 2) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="tick-corners flex flex-col justify-between rounded-lg border border-[var(--line)] bg-[var(--bg-elevated)] p-6 transition-colors hover:border-[var(--accent)]"
            >
              <div>
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-[var(--ink)]">
                    {project.name}
                  </h3>
                  <span
                    className={`flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] ${
                      project.status === "live"
                        ? "border-[var(--accent-2)] text-[var(--accent-2)]"
                        : "border-[var(--line-strong)] text-[var(--ink-muted)]"
                    }`}
                  >
                    <Circle
                      size={7}
                      className={
                        project.status === "live"
                          ? "fill-[var(--accent-2)]"
                          : "fill-[var(--ink-muted)]"
                      }
                    />
                    {project.statusLabel ??
                      (project.status === "live" ? "Live" : "Not live yet")}
                  </span>
                </div>

                <p className="mb-4 text-sm text-[var(--ink-muted)]">
                  {project.description}
                </p>

                <ul className="mb-5 space-y-2">
                  {project.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm text-[var(--ink)]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-[var(--line)] px-2 py-1 font-[family-name:var(--font-mono)] text-[11px] text-[var(--ink-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-3">
                {/* Live Demo Link */}
                {project.status === "live" && project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[var(--accent)]"
                  >
                    Visit project
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                ) : (
                  <span className="w-fit text-sm text-[var(--ink-muted)]">
                    {project.statusLabel
                      ? "No public link available"
                      : "In progress — link coming soon"}
                  </span>
                )}

                {/* Figma Design Link - Always show if figmaUrl exists */}
                {project.figmaUrl && project.figmaUrl !== "#" && (
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[var(--ink-muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    🎨 Figma Design
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
