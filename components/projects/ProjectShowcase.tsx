"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Layers3, X } from "lucide-react";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import type { Project } from "@/types/portfolio";
import { SectionReveal } from "../animations/SectionReveal";
import { GitHubIcon } from "../ui/BrandIcons";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { ProjectVisual } from "./ProjectVisuals";

export function ProjectShowcase() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight") setActiveIndex((index) => (index + 1) % projects.length);
      if (event.key === "ArrowLeft") setActiveIndex((index) => (index - 1 + projects.length) % projects.length);
      if (event.key === "Escape") setSelected(null);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section id="projects" className="py-24">
      <div className="section-shell">
        <SectionReveal className="max-w-3xl">
          <p className="eyebrow">Featured project experience</p>
          <h2 className="mt-4 text-balance text-4xl font-black tracking-tight sm:text-5xl">Case studies, not just cards.</h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">Use the arrow keys to move between projects. Open a case study for architecture, decisions, challenges, and results.</p>
        </SectionReveal>

        <div className="mt-10 grid gap-6">
          {projects.map((project, index) => (
            <SectionReveal key={project.key} delay={index * 0.05}>
              <motion.article
                className="glass grid gap-6 overflow-hidden rounded-[2rem] p-5 lg:grid-cols-[0.9fr_1.1fr]"
                onMouseEnter={() => setActiveIndex(index)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                style={{ borderColor: activeIndex === index ? project.accent : "var(--line)" }}
              >
                <div className={`flex flex-col gap-6 ${project.key === "macros-ai" ? "justify-center lg:px-4" : "justify-between"}`}>
                  <div>
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1.5 text-sm text-[var(--muted)]">
                      <Layers3 size={15} style={{ color: project.accent }} />
                      {project.role}
                    </div>
                    <h3 className="text-3xl font-black tracking-tight sm:text-4xl">{project.title}</h3>
                    <p className="mt-4 text-lg leading-8 text-[var(--muted)]">{project.impact}</p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 8).map((tech) => (
                        <span key={tech} className="rounded-full border border-[var(--line)] px-3 py-1.5 text-xs font-semibold text-[var(--muted)]">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => setSelected(project)}
                        className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-bold text-slate-950"
                      >
                        Detailed case study
                      </button>
                      <a href={project.githubUrl} className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-semibold">
                        <GitHubIcon className="h-4 w-4" />
                        GitHub
                      </a>
                      {project.liveUrl && (
                        <a href={project.liveUrl} className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-semibold">
                          <ExternalLink size={16} />
                          Live demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <ProjectVisual projectKey={project.key} />
              </motion.article>
            </SectionReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
      className="fixed inset-0 z-[90] overflow-y-auto bg-black/55 px-4 py-8 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={onClose}
    >
      <motion.div
        className="glass mx-auto max-w-5xl rounded-[2rem] p-5 sm:p-8"
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">{project.role}</p>
            <h3 className="mt-3 text-4xl font-black tracking-tight">{project.title}</h3>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--muted)]">{project.impact}</p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close case study" className="rounded-full border border-[var(--line)] p-2">
            <X size={20} />
          </button>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <CaseBlock title="Problem" body={project.problem} />
          <CaseBlock title="Solution" body={project.solution} />
        </div>

        <div className="mt-8">
          <h4 className="mb-4 text-2xl font-bold">Architecture</h4>
          <ArchitectureDiagram nodes={project.architecture} accent={project.accent} />
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <ListBlock title="Technical decisions" items={project.decisions} />
          <ListBlock title="Challenges" items={project.challenges} />
          <ListBlock title="Results" items={project.results} />
        </div>

        {project.caseStudySections && (
          <div className="mt-8">
            <h4 className="mb-4 text-2xl font-bold">Deep dive</h4>
            <div className="grid gap-5 md:grid-cols-2">
              {project.caseStudySections.map((section) => (
                <DetailBlock key={section.title} title={section.title} summary={section.summary} items={section.items} />
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

function CaseBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-5">
      <h4 className="text-xl font-bold">{title}</h4>
      <p className="mt-3 leading-7 text-[var(--muted)]">{body}</p>
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-5">
      <h4 className="text-xl font-bold">{title}</h4>
      <ul className="mt-3 space-y-3 text-sm leading-6 text-[var(--muted)]">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

function DetailBlock({ title, summary, items }: { title: string; summary?: string; items: string[] }) {
  return (
    <section className="rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-5">
      <h5 className="text-xl font-bold">{title}</h5>
      {summary && <p className="mt-3 leading-7 text-[var(--muted)]">{summary}</p>}
      <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
