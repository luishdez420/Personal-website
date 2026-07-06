import type { Metadata } from "next";
import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume summary for Luis Hernandez, Software Engineer."
};

export default function ResumePage() {
  return (
    <main className="section-shell min-h-screen py-28">
      <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)]">
        <ArrowLeft size={16} />
        Back to portfolio
      </Link>
      <article className="glass mt-8 rounded-[2rem] p-6 sm:p-10">
        <div className="flex flex-col gap-5 border-b border-[var(--line)] pb-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="eyebrow">Resume</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight">{profile.name}</h1>
            <p className="mt-3 text-xl text-[var(--muted)]">{profile.title} · Drexel University Software Engineering graduate</p>
          </div>
          <a href="/resume-luis-hernandez.txt" download className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-bold text-slate-950">
            <Download size={17} />
            Download TXT
          </a>
        </div>

        <section className="mt-8">
          <h2 className="text-2xl font-bold">Summary</h2>
          <p className="mt-3 max-w-4xl leading-8 text-[var(--muted)]">
            {profile.summary} Experienced in designing APIs, distributed backend systems, databases, AWS infrastructure, authentication, AI integrations, CI/CD, and reliable product workflows.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold">Selected Projects</h2>
          <div className="mt-4 grid gap-4">
            {projects.map((project) => (
              <div key={project.key} className="rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-5">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-1 text-sm font-semibold text-[var(--accent-strong)]">{project.role}</p>
                <p className="mt-3 leading-7 text-[var(--muted)]">{project.impact}</p>
                <p className="mt-3 text-sm text-[var(--muted)]">{project.stack.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
