"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// Code lines with syntax highlighting configuration
const codeLines = [
  { text: "const developer = {", type: "keyword" },
  { text: "  name: 'Falak Sher',", type: "property" },
  { text: "  skills: ['React', 'Next.js', 'TypeScript'],", type: "property" },
  { text: "  experience: '4+ years',", type: "property" },
  { text: "  passion: 'Building amazing UIs'", type: "property" },
  { text: "};", type: "bracket" },
  { text: "// Ready to build something great ✨", type: "comment" },
];

const getHighlightedLine = (text: string, type: string) => {
  if (type === "keyword") {
    return (
      <>
        <span className="text-purple-600 dark:text-purple-400">const</span>
        <span className="text-[var(--ink)]/90 dark:text-[var(--ink)]/90">
          {" "}
          developer ={" "}
        </span>
        <span className="text-[var(--ink)]/60 dark:text-[var(--ink)]/60">
          {"{"}
        </span>
      </>
    );
  }
  if (type === "property") {
    const parts = text.split(":");
    if (parts.length === 2) {
      const key = parts[0].trim();
      const value = parts[1].trim();
      return (
        <>
          <span className="text-blue-600 dark:text-blue-400">{key}</span>
          <span className="text-[var(--ink)]/60 dark:text-[var(--ink)]/60">
            :{" "}
          </span>
          <span className="text-green-700 dark:text-green-400">{value}</span>
        </>
      );
    }
  }
  if (type === "bracket") {
    return (
      <span className="text-[var(--ink)]/60 dark:text-[var(--ink)]/60">
        {"};"}
      </span>
    );
  }
  if (type === "comment") {
    return (
      <span className="text-[var(--ink-muted)]/40 dark:text-[var(--ink-muted)]/40">
        {text}
      </span>
    );
  }
  return (
    <span className="text-[var(--ink)]/90 dark:text-[var(--ink)]/90">
      {text}
    </span>
  );
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-6xl px-6 md:px-10"
      >
        <div className="flex flex-col lg:flex-row items-start lg:gap-12 gap-16">
          {/* Left side - Content */}
          <div className="flex-1">
            <motion.div
              variants={item}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[var(--bg-elevated)] px-3 py-1.5 text-xs text-[var(--ink-muted)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-2)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent-2)]" />
              </span>
              {profile.availability}
            </motion.div>

            <motion.p
              variants={item}
              className="mb-3 font-[family-name:var(--font-mono)] text-base md:text-xl tracking-tight text-[var(--accent)] font-medium"
            >
              Frontend Specialist · Full Stack Capable
            </motion.p>

            <motion.h1
              variants={item}
              className="max-w-3xl font-[family-name:var(--font-display)] text-balance text-3xl font-medium leading-[1.05] tracking-tight text-[var(--ink)] sm:text-4xl md:text-5xl"
            >
              {profile.name.split(" ")[0]} turning complex problems into clean,
              performant interfaces.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-xl text-balance text-base leading-relaxed text-[var(--ink-muted)] md:text-md"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
              >
                View my work
                <ArrowDownRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>
              <a
                href={profile.resumeUrl}
                className="group inline-flex items-center gap-2 rounded-md border border-[var(--line-strong)] px-5 py-3 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Resume
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-[var(--line)] pt-8"
            >
              {[
                { label: "Years building", value: "4+" },
                { label: "Shipped products", value: "12" },
                { label: "Stack", value: "MERN" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-[family-name:var(--font-display)] text-2xl font-medium text-[var(--ink)] md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-[var(--ink-muted)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Code Editor Animation */}
          <motion.div variants={item} className="flex-1 w-full max-w-[450px]">
            <div className="relative">
              {/* Terminal/Code window */}
              <div className="bg-[var(--bg-elevated)] rounded-xl border border-[var(--line-strong)] overflow-hidden shadow-2xl">
                {/* Window controls */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--line)] bg-[var(--bg)]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] text-[var(--ink-muted)]/60 font-mono ml-2">
                    portfolio.js — ~/developer
                  </span>
                </div>

                {/* Code content */}
                <div className="p-4 font-mono text-xs leading-7 bg-[var(--bg)]">
                  <div className="flex">
                    <div className="text-[var(--ink-muted)]/30 w-6 text-right select-none mr-3">
                      {codeLines.map((_, i) => (
                        <div key={i}>{i + 1}</div>
                      ))}
                    </div>
                    <div className="flex-1">
                      {codeLines.map((line, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.8 + index * 0.3,
                            duration: 0.4,
                            ease: "easeOut",
                          }}
                          className="whitespace-pre"
                        >
                          {getHighlightedLine(line.text, line.type)}
                        </motion.div>
                      ))}
                      {/* Blinking cursor */}
                      <motion.div
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="inline-block w-2 h-4 bg-[var(--accent)] ml-1"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{
                  y: [-8, 8, -8],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-3 -right-3 bg-[var(--accent)]/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[var(--accent)]/20 text-[10px] font-mono text-[var(--accent)]"
              >
                ⚡ 99.9% uptime
              </motion.div>

              <motion.div
                animate={{
                  y: [8, -8, 8],
                  rotate: [2, -2, 2],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-3 -left-3 bg-[var(--bg-elevated)] px-3 py-1.5 rounded-lg border border-[var(--line-strong)] text-[10px] font-mono text-[var(--ink-muted)]"
              >
                🚀 v3.2.1
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
