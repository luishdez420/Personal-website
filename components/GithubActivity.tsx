import { Star, GitFork, Code2 } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { SectionReveal } from "./animations/SectionReveal";
import { GitHubIcon } from "./ui/BrandIcons";

export function GithubActivity() {
  const languages = ["TypeScript", "Python", "SQL", "JavaScript", "Java"];

  return (
    <section id="github" className="py-24">
      <div className="section-shell">
        <SectionReveal className="glass grid gap-8 rounded-[2rem] p-6 lg:grid-cols-[0.8fr_1.2fr] lg:p-8">
          <div>
            <p className="eyebrow">GitHub activity</p>
            <h2 className="mt-4 text-balance text-4xl font-black tracking-tight">Repository signal without API fragility.</h2>
            <p className="mt-5 leading-8 text-[var(--muted)]">
              This section is designed to work with static fallback content first. A live GitHub API integration can be added later without making the portfolio depend on network availability.
            </p>
            <a
              href={profile.github}
              className="github-activity-cta mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--accent)] px-5 py-2.5 text-sm font-bold shadow-[0_18px_50px_rgba(45,212,191,0.22)] transition hover:brightness-110"
              aria-label="Open Luis Hernandez GitHub profile"
            >
              <GitHubIcon className="h-[17px] w-[17px]" />
              Open GitHub
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.slice(0, 4).map((project) => (
              <a key={project.key} href={project.githubUrl} className="rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-5 transition hover:-translate-y-1 hover:border-[var(--accent)]">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{project.impact}</p>
                <div className="mt-4 flex gap-4 text-xs text-[var(--muted)]">
                  <span className="inline-flex items-center gap-1"><Star size={14} /> Featured</span>
                  <span className="inline-flex items-center gap-1"><GitFork size={14} /> Case study</span>
                </div>
              </a>
            ))}
            <div className="rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-5 sm:col-span-2">
              <div className="flex items-center gap-2 font-bold">
                <Code2 size={18} className="text-[var(--accent)]" />
                Main languages
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {languages.map((language) => (
                  <span key={language} className="rounded-full border border-[var(--line)] px-3 py-1.5 text-sm text-[var(--muted)]">
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
