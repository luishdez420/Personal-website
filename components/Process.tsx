import { ArrowRight, Search, DraftingCompass, ServerCog, TestTube2, Workflow, Gauge } from "lucide-react";
import { SectionReveal } from "./animations/SectionReveal";

const steps = [
  { icon: Search, title: "Understand", body: "Start with the user, workflow, and business constraint." },
  { icon: DraftingCompass, title: "Design", body: "Shape the system boundary, data model, and API contract." },
  { icon: ServerCog, title: "Build", body: "Implement reliable services and interfaces with clear ownership." },
  { icon: TestTube2, title: "Test", body: "Cover critical behavior, error paths, and integration boundaries." },
  { icon: Workflow, title: "Automate", body: "Use CI/CD and deployment discipline to reduce release friction." },
  { icon: Gauge, title: "Improve", body: "Measure performance, observe behavior, and iterate with evidence." }
];

export function Process() {
  return (
    <section id="process" className="py-24">
      <div className="section-shell">
        <SectionReveal className="max-w-3xl">
          <p className="eyebrow">Engineering process</p>
          <h2 className="mt-4 text-balance text-4xl font-black tracking-tight sm:text-5xl">A pipeline for shipping calmly.</h2>
        </SectionReveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <SectionReveal key={step.title} delay={index * 0.05}>
                <div className="glass relative h-full rounded-3xl p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                      <Icon size={21} />
                    </div>
                    {index < steps.length - 1 && <ArrowRight size={18} className="hidden text-[var(--muted)] lg:block" />}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">0{index + 1}</p>
                  <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{step.body}</p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
