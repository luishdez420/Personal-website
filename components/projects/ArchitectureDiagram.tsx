"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { ArchitectureNode } from "@/types/portfolio";

type ArchitectureDiagramProps = {
  nodes: ArchitectureNode[];
  accent: string;
};

export function ArchitectureDiagram({ nodes, accent }: ArchitectureDiagramProps) {
  const [activeId, setActiveId] = useState(nodes[0]?.id ?? "");
  const active = nodes.find((node) => node.id === activeId) ?? nodes[0];

  return (
    <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="relative min-h-[300px] overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-4">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden="true">
          {nodes.slice(0, -1).map((node, index) => {
            const next = nodes[index + 1];
            return (
              <motion.line
                key={`${node.id}-${next.id}`}
                x1={node.x}
                y1={node.y}
                x2={next.x}
                y2={next.y}
                stroke="var(--line)"
                strokeWidth="0.6"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.08 }}
              />
            );
          })}
          {nodes.slice(0, -1).map((node, index) => {
            const next = nodes[index + 1];
            return (
              <motion.circle
                key={`dot-${node.id}-${next.id}`}
                r="1"
                fill={accent}
                animate={{ cx: [node.x, next.x], cy: [node.y, next.y], opacity: [0, 1, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, delay: index * 0.3, ease: "easeInOut" }}
              />
            );
          })}
        </svg>
        {nodes.map((node) => (
          <button
            type="button"
            key={node.id}
            onClick={() => setActiveId(node.id)}
            className="absolute min-w-20 -translate-x-1/2 -translate-y-1/2 rounded-2xl border px-3 py-2 text-xs font-bold backdrop-blur-xl transition hover:scale-105"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              borderColor: activeId === node.id ? accent : "var(--line)",
              background: activeId === node.id ? `${accent}22` : "var(--panel-strong)"
            }}
          >
            {node.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active?.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-6"
        >
          <p className="eyebrow">Selected node</p>
          <h4 className="mt-3 text-2xl font-bold">{active?.label}</h4>
          <p className="mt-4 leading-7 text-[var(--muted)]">{active?.detail}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
