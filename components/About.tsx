import { Code2, Database, GraduationCap, Rocket, ShieldCheck } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionReveal } from "./animations/SectionReveal";

const journey = [
  {
    icon: GraduationCap,
    title: "Drexel foundation",
    body: "Software Engineering graduate with a systems-first view of product, architecture, and maintainable delivery."
  },
  {
    icon: Database,
    title: "Backend depth",
    body: "API design, distributed backend workflows, relational data modeling, authentication, RBAC, and performance-minded services."
  },
  {
    icon: ShieldCheck,
    title: "Cloud reliability",
    body: "AWS Lambda, API Gateway, Cognito, Bedrock, SES, EventBridge, CloudWatch, S3, CI/CD, and deployment automation."
  },
  {
    icon: Rocket,
    title: "Product instincts",
    body: "Full-stack and mobile projects that turn technical choices into experiences people can understand and use."
  }
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1fr]">
        <SectionReveal>
          <p className="eyebrow">About</p>
          <h2 className="mt-4 text-balance text-4xl font-black tracking-tight sm:text-5xl">Engineering judgment with product taste.</h2>
          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            Luis is a full-stack and cloud-focused developer who designs APIs, distributed backend systems, databases, AWS infrastructure, authentication flows, AI integrations, and CI/CD pipelines.
          </p>
          <blockquote className="mt-8 rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-6 text-xl font-semibold leading-8 backdrop-blur-xl">
            &quot;{profile.philosophy}&quot;
          </blockquote>
        </SectionReveal>

        <SectionReveal className="grid gap-4" delay={0.1}>
          {journey.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="glass relative overflow-hidden rounded-3xl p-5">
                <div className="absolute left-9 top-16 h-full w-px bg-[var(--line)]" aria-hidden="true" />
                <div className="relative flex gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">Step {index + 1}</p>
                    <h3 className="mt-1 text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 leading-7 text-[var(--muted)]">{item.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="rounded-3xl border border-[var(--line)] bg-slate-950 p-5 font-mono text-sm text-slate-100 shadow-2xl">
            <p className="text-teal-300">const engineeringStyle = {"{"}</p>
            <p className="pl-4">clarity: &quot;make systems legible&quot;,</p>
            <p className="pl-4">pressure: &quot;test the paths that matter&quot;,</p>
            <p className="pl-4">impact: &quot;ship value, then measure&quot;</p>
            <p className="text-teal-300">{"}"};</p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
