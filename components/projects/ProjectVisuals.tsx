"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  Activity,
  BarChart3,
  Bookmark,
  Boxes,
  ChartNoAxesColumnIncreasing,
  Globe2,
  Home,
  LayoutDashboard,
  Leaf,
  PackageCheck,
  ScanLine,
  Search,
  ShoppingBag,
  ShoppingCart,
  Store,
  UserRound,
  UsersRound
} from "lucide-react";
import type { ProjectKey } from "@/types/portfolio";

export function ProjectVisual({ projectKey }: { projectKey: ProjectKey }) {
  if (projectKey === "sentinel") return <ApiRequestDemo />;
  if (projectKey === "comercio-os") return <ComercioOSDashboard />;
  if (projectKey === "movie-room") return <CuezlyPreview />;
  if (projectKey === "macros-ai") return <NutritionPhoneMockup />;
  return <SystemStatusPanel />;
}

function ComercioOSDashboard() {
  const reduceMotion = useReducedMotion();
  const navigation = [
    { label: "Resumen", icon: LayoutDashboard, active: true },
    { label: "Productos", icon: Boxes },
    { label: "Pedidos", icon: ShoppingBag },
    { label: "Clientes", icon: UsersRound },
    { label: "Reportes", icon: BarChart3 }
  ];
  const metrics = [
    { label: "Pedidos abiertos", value: "12", note: "3 listos para entrega" },
    { label: "Productos activos", value: "148", note: "6 con stock bajo" },
    { label: "Conversión", value: "3.8%", note: "Datos de demostración" }
  ];

  return (
    <motion.div
      role="img"
      aria-label="Demo-safe ComercioOS merchant dashboard for a fictional Dominican store, showing orders, inventory, storefront status, and tenant-scoped operations"
      className="relative self-center overflow-hidden rounded-3xl border border-amber-200/20 bg-[#07110f] p-2 text-[#edf8f2] shadow-[0_28px_80px_rgba(2,20,14,0.45)] sm:p-3"
      initial={reduceMotion ? undefined : { opacity: 0.86, y: 10 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative min-h-[420px] overflow-hidden rounded-[1.2rem] border border-white/8 bg-[#0b1714]">
        <div aria-hidden="true" className="absolute -right-20 -top-28 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-amber-300/8 blur-3xl" />

        <div className="relative flex items-center justify-between border-b border-white/8 px-4 py-3">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#fbbf24] text-xs font-black text-[#142017]">CO</span>
            <div>
              <p className="text-sm font-black">ComercioOS</p>
              <p className="text-[9px] text-[#8ea49a]">Operaciones comerciales</p>
            </div>
          </div>
          <span className="rounded-full border border-amber-200/20 bg-amber-300/10 px-2.5 py-1 text-[9px] font-bold text-amber-200">Datos ficticios</span>
        </div>

        <div className="relative grid min-h-[356px] sm:grid-cols-[118px_1fr]">
          <aside className="hidden border-r border-white/8 bg-black/10 p-3 sm:flex sm:flex-col">
            <div className="mb-4 flex items-center gap-2 rounded-xl bg-white/5 px-2.5 py-2">
              <Store size={14} className="text-amber-300" />
              <span className="text-[9px] font-bold">Tienda Demo</span>
            </div>
            <nav className="space-y-1.5">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2 rounded-xl px-2.5 py-2 text-[9px] font-semibold ${item.active ? "bg-emerald-300/12 text-emerald-200" : "text-[#8ea49a]"}`}
                  >
                    <Icon size={13} />
                    {item.label}
                  </div>
                );
              })}
            </nav>
            <div className="mt-auto rounded-xl border border-white/8 p-2.5">
              <div className="flex items-center gap-2 text-[9px] font-semibold">
                <Globe2 size={13} className="text-emerald-300" />
                Tienda publicada
              </div>
              <p className="mt-1 text-[8px] text-[#789087]">Español · RD</p>
            </div>
          </aside>

          <div className="p-3.5 sm:p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[9px] font-bold uppercase text-emerald-300">Panel del comercio</p>
                <h4 className="mt-1 text-lg font-black sm:text-xl">Tienda Demo Quisqueya</h4>
                <p className="mt-1 text-[9px] text-[#8ea49a]">Operación segura y aislada por comercio</p>
              </div>
              <motion.span
                className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-300"
                animate={reduceMotion ? undefined : { boxShadow: ["0 0 0 rgba(110,231,183,0)", "0 0 0 7px rgba(110,231,183,.08)", "0 0 0 rgba(110,231,183,0)"] }}
                transition={{ duration: 2.8, repeat: Infinity }}
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className={`${index === 2 ? "col-span-2 md:col-span-1" : ""} rounded-xl border border-white/8 bg-white/[0.035] p-3`}
                  initial={reduceMotion ? undefined : { opacity: 0.7, y: 6 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <p className="text-[8px] font-semibold text-[#8ea49a]">{metric.label}</p>
                  <p className="mt-1 text-lg font-black tabular-nums">{metric.value}</p>
                  <p className="mt-1 text-[8px] text-[#6f857b]">{metric.note}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-3 grid gap-2 md:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-xl border border-white/8 bg-white/[0.035] p-3">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-bold">Fulfillment</p>
                  <span className="text-[8px] text-[#8ea49a]">Hoy</span>
                </div>
                <div className="mt-3 space-y-2">
                  <DemoOrder id="#1048" method="Entrega" status="Preparando" total="RD$ 3,450" />
                  <DemoOrder id="#1049" method="Recogida" status="Por confirmar" total="RD$ 1,280" />
                </div>
              </div>

              <div className="rounded-xl border border-white/8 bg-white/[0.035] p-3">
                <div className="flex items-center gap-2">
                  <PackageCheck size={14} className="text-amber-300" />
                  <p className="text-[10px] font-bold">Inventario</p>
                </div>
                <p className="mt-3 text-[8px] text-[#8ea49a]">Reservas confirmadas</p>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/8">
                  <motion.div
                    className="h-full rounded-full bg-[linear-gradient(90deg,#34d399,#fbbf24)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: "72%" }}
                    viewport={{ once: true }}
                    transition={{ duration: reduceMotion ? 0 : 0.9, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
                <div className="mt-3 flex items-center gap-2 text-[8px] text-[#8ea49a]">
                  <ShoppingCart size={12} className="text-emerald-300" />
                  Totales validados por el servidor
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function DemoOrder({ id, method, status, total }: { id: string; method: string; status: string; total: string }) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 rounded-lg bg-black/15 px-2.5 py-2 text-[8px]">
      <span className="font-bold text-emerald-200">{id}</span>
      <span className="text-[#8ea49a]">{method} · {status}</span>
      <span className="font-bold tabular-nums">{total}</span>
    </div>
  );
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

function CuezlyPreview() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.figure
      className="relative self-center overflow-hidden rounded-3xl border border-violet-300/20 bg-[#070b17] p-2 shadow-[0_24px_70px_rgba(76,61,145,0.24)] sm:p-3"
      initial={reduceMotion ? undefined : { opacity: 0.82, scale: 0.985 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
      whileHover={reduceMotion ? undefined : { y: -4, scale: 1.008 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src="/projects/cuezly-image.webp"
          alt="Cuezly collaborative movie discovery room showing watch options, recommendations, and group compatibility"
          width={1800}
          height={1221}
          sizes="(max-width: 1024px) calc(100vw - 72px), 52vw"
          loading="eager"
          unoptimized
          className="h-auto w-full"
        />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm"
          animate={reduceMotion ? undefined : { x: ["0%", "440%"] }}
          transition={{ duration: 1.4, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </motion.figure>
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
