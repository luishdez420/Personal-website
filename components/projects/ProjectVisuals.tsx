"use client";

import { motion } from "framer-motion";
import type { ProjectKey } from "@/types/portfolio";

export function ProjectVisual({ projectKey }: { projectKey: ProjectKey }) {
  if (projectKey === "sentinel") return <ApiRequestDemo />;
  if (projectKey === "movie-room") return <MovieRoomDemo />;
  if (projectKey === "betterdays") return <PhoneMockup />;
  return <SystemStatusPanel />;
}

function SystemStatusPanel() {
  return (
    <div className="rounded-3xl border border-[var(--line)] bg-slate-950 p-5 font-mono text-sm text-slate-100">
      {["auth/rbac checks", "scheduled notification job", "bedrock summary", "ses delivery", "cloudwatch trace"].map((item, index) => (
        <motion.div
          key={item}
          className="mb-3 flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3"
          animate={{ opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 2.3, repeat: Infinity, delay: index * 0.25 }}
        >
          <span>{item}</span>
          <span className="text-teal-300">OK</span>
        </motion.div>
      ))}
    </div>
  );
}

function ApiRequestDemo() {
  const steps = ["POST /auth/login", "sign JWT", "GET /protected/items", "Redis rate-limit check", "PostgreSQL response"];
  return (
    <div className="rounded-3xl border border-[var(--line)] bg-slate-950 p-5 font-mono text-xs text-slate-100">
      {steps.map((step, index) => (
        <motion.div
          key={step}
          className="relative mb-3 overflow-hidden rounded-2xl bg-white/5 px-4 py-3"
          initial={{ opacity: 0.45 }}
          animate={{ opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 2.6, repeat: Infinity, delay: index * 0.42 }}
        >
          <motion.span
            className="absolute inset-y-0 left-0 w-1 bg-blue-300"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, delay: index * 0.42 }}
          />
          {index + 1}. {step}
        </motion.div>
      ))}
    </div>
  );
}

function MovieRoomDemo() {
  const participants = ["Luis", "Ana", "Sam", "Maya"];
  return (
    <div className="rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-5">
      <div className="flex items-center justify-between">
        <h4 className="font-bold">Friday movie room</h4>
        <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-bold">Live sync</span>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {participants.map((person, index) => (
          <motion.div
            key={person}
            className="rounded-2xl border border-[var(--line)] p-4"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.2 }}
          >
            <p className="text-sm font-bold">{person}</p>
            <p className="mt-2 text-xs text-[var(--muted)]">voted for a sci-fi thriller</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="mx-auto max-w-[250px] rounded-[2rem] border border-[var(--line)] bg-slate-950 p-3 shadow-2xl">
      <div className="rounded-[1.5rem] bg-slate-100 p-4 text-slate-950">
        <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-slate-300" />
        <p className="text-xs font-bold uppercase tracking-widest text-rose-500">BetterDays</p>
        <h4 className="mt-2 text-2xl font-black">Today</h4>
        {["Drink water", "30 min focus", "Evening reset"].map((goal, index) => (
          <motion.div
            key={goal}
            className="mt-3 rounded-2xl bg-white p-3 shadow-sm"
            animate={{ x: [0, index % 2 ? -3 : 3, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.25 }}
          >
            <p className="text-sm font-bold">{goal}</p>
            <div className="mt-2 h-2 rounded-full bg-slate-200">
              <motion.div className="h-2 rounded-full bg-rose-400" initial={{ width: "18%" }} animate={{ width: `${45 + index * 18}%` }} transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
