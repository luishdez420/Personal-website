"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { projects, skillCategories } from "@/data/projects";
import type { ProjectKey } from "@/types/portfolio";
import { SectionReveal } from "./animations/SectionReveal";

export function SkillsEcosystem() {
  const [hoveredProjects, setHoveredProjects] = useState<ProjectKey[]>([]);
  const projectMap = new Map(projects.map((project) => [project.key, project]));

  return (
    <section id="skills" className="py-24">
      <div className="section-shell">
        <SectionReveal className="max-w-3xl">
          <p className="eyebrow">Skills</p>
          <h2 className="mt-4 text-balance text-4xl font-black tracking-tight sm:text-5xl">An engineering ecosystem, connected by shipped work.</h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">Hover or focus a technology to highlight the projects where it appears.</p>
        </SectionReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_330px]">
          <div className="grid gap-5">
            {skillCategories.map((category, categoryIndex) => (
              <SectionReveal key={category.name} delay={categoryIndex * 0.05}>
                <div className="glass rounded-[2rem] p-5">
                  <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-black">{category.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{category.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <button
                        type="button"
                        key={skill.name}
                        onMouseEnter={() => setHoveredProjects(skill.projects)}
                        onFocus={() => setHoveredProjects(skill.projects)}
                        onMouseLeave={() => setHoveredProjects([])}
                        onBlur={() => setHoveredProjects([])}
                        className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-2 text-sm font-semibold text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)] focus-visible:text-[var(--foreground)]"
                      >
                        {skill.name}
                      </button>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.12}>
            <div className="sticky top-28 glass rounded-[2rem] p-5">
              <p className="eyebrow">Project signal</p>
              <div className="mt-5 space-y-3">
                {projects.map((project) => {
                  const highlighted = hoveredProjects.includes(project.key);
                  return (
                    <motion.div
                      key={project.key}
                      className="rounded-3xl border p-4"
                      animate={{
                        opacity: hoveredProjects.length === 0 || highlighted ? 1 : 0.38,
                        borderColor: highlighted ? project.accent : "var(--line)",
                        scale: highlighted ? 1.02 : 1
                      }}
                    >
                      <h4 className="font-bold">{project.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{projectMap.get(project.key)?.role}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
