"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-[var(--line)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="tick-corners rounded-xl border border-[var(--line)] bg-[var(--bg-elevated)] px-8 py-14 text-center md:px-16"
        >
          <p className="mb-3 font-[family-name:var(--font-mono)] text-xs text-[var(--accent)]">
            fig. 06 — get in touch
          </p>
          <h2 className="mx-auto max-w-xl font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight text-[var(--ink)] md:text-4xl">
            Have a project in mind? Let&apos;s build it.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[var(--ink-muted)]">
            {profile.availability}. I usually reply within a day.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            <Mail size={16} />
            {profile.email}
          </a>
        </motion.div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-[var(--line)] pt-8 sm:flex-row">
          <p className="text-sm text-[var(--ink-muted)]">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Tailwind CSS.
          </p>
          <div className="flex gap-5">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--accent)]"
              >
                {s.label}
                <ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
