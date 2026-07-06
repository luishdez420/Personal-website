"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Radio } from "lucide-react";
import type { PointerEvent } from "react";
import { profile } from "@/data/profile";
import { MagneticButton } from "./ui/MagneticButton";
import { GitHubIcon, LinkedInIcon } from "./ui/BrandIcons";

const nodes = [
  { label: "API", x: 20, y: 40 },
  { label: "Auth", x: 42, y: 22 },
  { label: "Lambda", x: 58, y: 44 },
  { label: "DB", x: 36, y: 66 },
  { label: "AI", x: 76, y: 28 },
  { label: "Events", x: 78, y: 68 }
];

const edges = [
  [0, 1],
  [0, 3],
  [1, 2],
  [2, 4],
  [2, 5],
  [3, 2]
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const pointerX = useSpring(useMotionValue(0), { stiffness: 80, damping: 20 });
  const pointerY = useSpring(useMotionValue(0), { stiffness: 80, damping: 20 });
  const rotateX = useTransform(pointerY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(pointerX, [-0.5, 0.5], [-9, 9]);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section id="home" onPointerMove={handlePointerMove} className="section-shell relative grid min-h-screen items-center gap-12 pb-20 pt-36 lg:grid-cols-[1fr_0.9fr]">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-2 text-sm text-[var(--muted)] backdrop-blur-xl"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
          </span>
          Available for software engineering opportunities
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className="eyebrow">
          {profile.title}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1 }}
          className="mt-4 max-w-5xl text-balance text-6xl font-black tracking-tight sm:text-7xl lg:text-8xl"
        >
          {profile.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.18 }}
          className="mt-6 max-w-2xl text-balance text-2xl font-semibold leading-tight text-[var(--foreground)] sm:text-3xl"
        >
          {profile.statement}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.26 }}
          className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]"
        >
          {profile.summary} I specialize in backend systems, AWS infrastructure, databases, authentication, CI/CD, and AI integrations that solve real product problems.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.34 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <MagneticButton href="#projects">Explore My Work</MagneticButton>
          <MagneticButton href={profile.resumePath} variant="secondary">
            View Resume
          </MagneticButton>
          <a href={profile.github} aria-label="GitHub" className="rounded-full border border-[var(--line)] p-3 text-[var(--muted)] transition hover:text-[var(--foreground)]">
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a href={profile.linkedin} aria-label="LinkedIn" className="rounded-full border border-[var(--line)] p-3 text-[var(--muted)] transition hover:text-[var(--foreground)]">
            <LinkedInIcon className="h-5 w-5" />
          </a>
        </motion.div>
      </div>

      <motion.div style={{ rotateX, rotateY, transformPerspective: 900 }} className="glass relative min-h-[440px] overflow-hidden rounded-[2rem] p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,var(--accent-soft),transparent_38%)]" />
        <div className="relative flex items-center justify-between border-b border-[var(--line)] pb-4">
          <span className="flex items-center gap-2 text-sm font-semibold">
            <Radio size={17} className="text-[var(--accent)]" />
            live system map
          </span>
          <span className="rounded-full border border-[var(--line)] px-2.5 py-1 text-xs text-[var(--muted)]">p95 &lt; 130 ms</span>
        </div>

        <svg className="absolute inset-x-0 top-20 h-[280px] w-full" viewBox="0 0 100 100" role="img" aria-label="Animated software system diagram">
          {edges.map(([from, to], index) => (
            <motion.line
              key={`${from}-${to}`}
              x1={nodes[from].x}
              y1={nodes[from].y}
              x2={nodes[to].x}
              y2={nodes[to].y}
              stroke="var(--line)"
              strokeWidth="0.55"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.45 + index * 0.08 }}
            />
          ))}
          {edges.map(([from, to], index) => (
            <motion.circle
              key={`packet-${from}-${to}`}
              r="1.15"
              fill="var(--accent)"
              initial={{ cx: nodes[from].x, cy: nodes[from].y, opacity: 0 }}
              animate={
                reduceMotion
                  ? undefined
                  : {
                      cx: [nodes[from].x, nodes[to].x],
                      cy: [nodes[from].y, nodes[to].y],
                      opacity: [0, 1, 0]
                    }
              }
              transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.38, ease: "easeInOut" }}
            />
          ))}
        </svg>

        <div className="relative mt-10 h-[300px]">
          {nodes.map((node, index) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.35 + index * 0.08 }}
              className="absolute grid h-20 w-20 place-items-center rounded-3xl border border-[var(--line)] bg-[var(--panel-strong)] text-center text-sm font-bold backdrop-blur-xl"
              style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
            >
              {node.label}
            </motion.div>
          ))}
        </div>

        <div className="relative grid gap-3 sm:grid-cols-3">
          {["99.9% mindset", "CI/CD ready", "Cloud native"].map((item) => (
            <div key={item} className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-4 py-3 text-sm text-[var(--muted)]">
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      <a href="#about" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full text-sm text-[var(--muted)] transition hover:text-[var(--foreground)] md:flex">
        Scroll
        <ArrowDown size={16} />
      </a>
    </section>
  );
}
