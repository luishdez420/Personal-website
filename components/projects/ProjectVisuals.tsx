"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, Bookmark, ChartNoAxesColumnIncreasing, Home, Leaf, ScanLine, Search, UserRound } from "lucide-react";
import type { ProjectKey } from "@/types/portfolio";

export function ProjectVisual({ projectKey }: { projectKey: ProjectKey }) {
  if (projectKey === "sentinel") return <ApiRequestDemo />;
  if (projectKey === "movie-room") return <MovieRoomDemo />;
  if (projectKey === "macros-ai") return <NutritionPhoneMockup />;
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

function NutritionPhoneMockup() {
  const reduceMotion = useReducedMotion();
  const macros = [
    { name: "Protein", value: "18 / 130g", width: "18%", color: "#9b6bd6" },
    { name: "Carbs", value: "0 / 257g", width: "3%", color: "#e6ad27" },
    { name: "Fat", value: "12 / 62g", width: "22%", color: "#dc6076" }
  ];

  return (
    <motion.div
      role="img"
      className="relative mx-auto w-full max-w-[310px] overflow-hidden rounded-[2rem] border border-emerald-200/20 bg-[#07110c] p-2.5 shadow-[0_28px_80px_rgba(3,18,11,0.52)]"
      animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      aria-label="Animated Living Nutrition mobile dashboard"
    >
      <div className="relative min-h-[560px] overflow-hidden rounded-[1.55rem] bg-[#09140e] px-4 pb-4 pt-5 text-[#eff8ef]">
        <motion.div
          aria-hidden="true"
          className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-[#294427]/70"
          animate={reduceMotion ? undefined : { scale: [1, 1.08, 1], x: [0, -4, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <div aria-hidden="true" className="absolute -bottom-24 -left-20 h-44 w-44 rounded-full bg-[#102a35]/75" />

        <div className="relative flex items-center justify-between text-[10px] font-bold">
          <span>5:06</span>
          <span className="rounded-full bg-[#eff8ef] px-2 py-0.5 text-[#162219]">80%</span>
        </div>

        <div className="relative mt-10">
          <p className="text-[10px] font-bold uppercase text-[#a9baad]">Living Nutrition</p>
          <h4 className="mt-1 text-2xl font-black">Good afternoon.</h4>
          <p className="mt-1 text-xs text-[#a9baad]">Mon, Jul 20</p>
        </div>

        <motion.div
          className="relative mt-5 inline-flex items-center gap-3 rounded-full border border-emerald-200/10 bg-[#214f32] px-4 py-2.5"
          animate={reduceMotion ? undefined : { boxShadow: ["0 0 0 rgba(110,231,183,0)", "0 0 24px rgba(110,231,183,.14)", "0 0 0 rgba(110,231,183,0)"] }}
          transition={{ duration: 3.4, repeat: Infinity }}
        >
          <Leaf size={18} className="text-[#8be3af]" />
          <span>
            <span className="block text-[10px] text-[#afc6b4]">Logging rhythm</span>
            <strong className="block text-sm">1 of 7 days logged</strong>
          </span>
        </motion.div>

        <div className="relative mt-5 rounded-[1.75rem] border border-[#718269]/30 bg-[linear-gradient(145deg,#34482d,#20331f)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,.08)]">
          <div className="flex items-center justify-between rounded-2xl bg-[#1b2b22]/90 px-3 py-2.5">
            <span className="text-lg font-black text-[#168461]">‹</span>
            <span className="text-center">
              <span className="block text-[9px] font-bold uppercase text-[#afc0b0]">Today</span>
              <strong className="text-sm">Mon, Jul 20</strong>
            </span>
            <span className="text-lg font-black text-[#168461]">›</span>
          </div>

          <div className="mt-3 grid grid-cols-[1fr_92px] items-center gap-3">
            <div>
              <p className="text-[9px] font-bold uppercase text-[#087254]">Daily target</p>
              <p className="mt-1 text-4xl font-black">180<span className="ml-1 text-xs text-[#b3c0af]">kcal</span></p>
              <p className="mt-1 text-[11px] text-[#b5c3b2]">1925 remaining today</p>
            </div>
            <div className="relative grid h-[86px] w-[86px] place-items-center">
              <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#66745e" strokeWidth="9" />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#e3d43d"
                  strokeWidth="9"
                  strokeLinecap="round"
                  pathLength="1"
                  strokeDasharray="1"
                  initial={{ strokeDashoffset: 1 }}
                  whileInView={{ strokeDashoffset: 0.91 }}
                  viewport={{ once: true }}
                  transition={{ duration: reduceMotion ? 0 : 1.4, ease: "easeOut" }}
                />
              </svg>
              <span className="text-center">
                <strong className="block text-xl">180</strong>
                <span className="text-[9px] text-[#b5c3b2]">kcal logged</span>
              </span>
            </div>
          </div>

          <p className="mt-2 text-[11px] font-semibold text-[#8de3ad]">About 112 g of protein remains.</p>
          <div className="mt-3 space-y-2.5">
            {macros.map((macro, index) => (
              <div key={macro.name}>
                <div className="flex justify-between text-[10px] font-semibold">
                  <span>{macro.name}</span>
                  <span className="text-[#b5c3b2]">{macro.value}</span>
                </div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-[#66745e]">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: macro.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: macro.width }}
                    viewport={{ once: true }}
                    transition={{ duration: reduceMotion ? 0 : 1, delay: index * 0.16, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-5">
          <div className="flex items-end justify-between gap-3">
            <h5 className="text-lg font-black">Add to today</h5>
            <span className="text-[9px] text-[#a9baad]">Choose your quickest way</span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2.5">
            <motion.div className="rounded-2xl bg-[#1b2b22] p-3" whileHover={reduceMotion ? undefined : { y: -3 }}>
              <ScanLine size={20} className="text-[#138a67]" />
              <p className="mt-2 text-xs font-bold">Scan meal</p>
              <p className="mt-1 text-[9px] text-[#a9baad]">Review an assisted estimate.</p>
            </motion.div>
            <motion.div className="rounded-2xl bg-[#1b2b22] p-3" whileHover={reduceMotion ? undefined : { y: -3 }}>
              <Search size={20} className="text-[#138a67]" />
              <p className="mt-2 text-xs font-bold">Search food</p>
              <p className="mt-1 text-[9px] text-[#a9baad]">Use a verified record.</p>
            </motion.div>
          </div>
        </div>

        <div className="relative mt-4 grid grid-cols-5 items-center rounded-full border border-white/10 bg-[#1d2922]/95 px-3 py-2 text-[#a9baad] shadow-2xl backdrop-blur-xl">
          <Home size={17} className="mx-auto text-[#168a66]" />
          <ChartNoAxesColumnIncreasing size={17} className="mx-auto" />
          <motion.span
            className="mx-auto grid h-11 w-11 place-items-center rounded-full border-4 border-[#e5f4e7] bg-[#168a66] text-white"
            animate={reduceMotion ? undefined : { scale: [1, 1.06, 1] }}
            transition={{ duration: 2.8, repeat: Infinity }}
          >
            <ScanLine size={20} />
          </motion.span>
          <Bookmark size={17} className="mx-auto" />
          <UserRound size={17} className="mx-auto" />
        </div>

        <Activity aria-hidden="true" className="absolute right-5 top-[112px] text-[#0a7658]" size={17} />
      </div>
    </motion.div>
  );
}
