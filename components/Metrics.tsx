"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { metrics } from "@/data/projects";
import { SectionReveal } from "./animations/SectionReveal";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const spring = useSpring(count, { stiffness: 70, damping: 18 });
  const rounded = useTransform(spring, (latest) => `${Math.round(latest)}${suffix}`);

  useEffect(() => {
    if (inView) count.set(value);
  }, [count, inView, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function Metrics() {
  return (
    <section id="experience" className="py-24">
      <div className="section-shell">
        <SectionReveal className="max-w-3xl">
          <p className="eyebrow">Experience and impact</p>
          <h2 className="mt-4 text-balance text-4xl font-black tracking-tight sm:text-5xl">Numbers with operational context.</h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">These metrics represent systems Luis designed, led, tested, or shipped across cloud, API, real-time, and mobile projects.</p>
        </SectionReveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric, index) => (
            <SectionReveal key={metric.label} delay={index * 0.04}>
              <div className="glass h-full rounded-3xl p-6">
                <p className="text-5xl font-black tracking-tight text-[var(--accent)]">
                  <Counter value={metric.value} suffix={metric.suffix} />
                </p>
                <h3 className="mt-4 text-xl font-bold">{metric.label}</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">{metric.context}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
