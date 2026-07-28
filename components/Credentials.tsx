import { Award, BadgeCheck, CalendarDays, ExternalLink, FileText } from "lucide-react";
import Image from "next/image";
import { credentials } from "@/data/credentials";
import { SectionReveal } from "./animations/SectionReveal";

export function Credentials() {
  return (
    <section id="credentials" className="py-24">
      <div className="section-shell">
        <SectionReveal className="max-w-3xl">
          <p className="eyebrow">Credentials</p>
          <h2 className="mt-4 text-balance text-4xl font-black sm:text-5xl">Verified learning, applied in practice.</h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
            Professional credentials that reinforce the engineering, product, and responsible-AI work represented throughout this portfolio.
          </p>
        </SectionReveal>

        <div className="mt-10 grid gap-6">
          {credentials.map((credential) => (
            <SectionReveal key={credential.title}>
              <article className="glass grid overflow-hidden rounded-[2rem] lg:grid-cols-[1.1fr_0.9fr]">
                <a
                  href={credential.certificatePath}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${credential.title} certificate PDF`}
                  className="group relative min-h-[260px] overflow-hidden border-b border-[var(--line)] bg-white lg:min-h-[410px] lg:border-b-0 lg:border-r"
                >
                  <Image
                    src={credential.previewPath}
                    alt={`${credential.title} certificate issued to Luis Hernandez by ${credential.issuer}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-contain p-3 transition duration-500 group-hover:scale-[1.015] sm:p-5"
                    priority={false}
                  />
                  <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-slate-950/90 px-3 py-2 text-xs font-bold text-white shadow-xl backdrop-blur">
                    <FileText size={15} />
                    View PDF
                  </span>
                </a>

                <div className="flex flex-col justify-center p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0f62fe] font-black text-white">IBM</span>
                    <div>
                      <p className="text-sm font-bold">{credential.organization}</p>
                      <p className="text-sm text-[var(--muted)]">{credential.issuer}</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5 text-sm text-[var(--muted)]">
                      <Award size={16} className="text-[var(--accent)]" />
                      Professional certificate
                    </div>
                    <h3 className="mt-4 text-3xl font-black sm:text-4xl">{credential.title}</h3>
                    <p className="mt-4 leading-7 text-[var(--muted)]">{credential.description}</p>
                  </div>

                  <div className="mt-6 flex items-center gap-3 text-sm text-[var(--muted)]">
                    <CalendarDays size={17} className="text-[var(--accent)]" />
                    <span>
                      Issued <time dateTime={credential.issuedOn}>{credential.issuedLabel}</time>
                    </span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {credential.skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-[var(--line)] px-3 py-1.5 text-xs font-semibold text-[var(--muted)]">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={credential.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-bold transition hover:brightness-110"
                      style={{ color: "#020617" }}
                    >
                      <BadgeCheck size={17} />
                      Verify on Credly
                    </a>
                    <a
                      href={credential.certificatePath}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-semibold transition hover:border-[var(--accent)]"
                    >
                      <ExternalLink size={16} />
                      Open certificate
                    </a>
                  </div>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
