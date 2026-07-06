"use client";

import { motion } from "framer-motion";
import { Loader2, Mail, MapPin, Send, ShieldCheck } from "lucide-react";
import type { FormEvent, InputHTMLAttributes, ReactNode } from "react";
import { useState } from "react";
import { profile } from "@/data/profile";
import { SectionReveal } from "./animations/SectionReveal";
import { LocalTime } from "./ExperienceEnhancers";
import { GitHubIcon, LinkedInIcon } from "./ui/BrandIcons";

type FormState = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const body = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(body.message ?? "The message could not be sent.");
      setState("success");
      setMessage(body.message ?? "Message sent.");
      event.currentTarget.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "The message could not be sent.");
    }
  }

  return (
    <section id="contact" className="pb-24 pt-16">
      <div className="section-shell">
        <SectionReveal className="grid gap-8 lg:grid-cols-[0.85fr_1fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-4 text-balance text-5xl font-black tracking-tight sm:text-6xl">Let&apos;s build something valuable.</h2>
            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              Luis is available for software engineering opportunities across backend, cloud, full-stack, and AI-powered product teams.
            </p>
            <div className="mt-8 grid gap-3">
              <ContactLink icon={<Mail size={18} />} label={profile.email} href={`mailto:${profile.email}`} />
              <ContactLink icon={<LinkedInIcon className="h-[18px] w-[18px]" />} label="LinkedIn" href={profile.linkedin} />
              <ContactLink icon={<GitHubIcon className="h-[18px] w-[18px]" />} label="GitHub" href={profile.github} />
              <ContactLink
                icon={<MapPin size={18} />}
                label={
                  <>
                    {profile.location} · <LocalTime />
                  </>
                }
              />
            </div>
            <div className="mt-6 rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-5">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-[var(--accent)]" size={22} />
                <div>
                  <h3 className="font-bold">Portfolio operational</h3>
                  <p className="text-sm text-[var(--muted)]">Static-first, Vercel-ready, accessible, and built to fail honestly.</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="glass rounded-[2rem] p-5 sm:p-6" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="name" label="Name" autoComplete="name" required />
              <Field name="email" label="Email" type="email" autoComplete="email" required />
            </div>
            <Field name="company" label="Company" autoComplete="organization" className="mt-4" />
            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-semibold">Message</span>
              <textarea
                name="message"
                required
                minLength={20}
                rows={7}
                className="w-full resize-y rounded-3xl border border-[var(--line)] bg-[var(--panel)] px-4 py-3 outline-none transition focus:border-[var(--accent)]"
                placeholder="Tell me about the team, product, or engineering problem."
              />
            </label>
            <motion.button
              type="submit"
              disabled={state === "loading"}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 font-bold text-slate-950 disabled:cursor-not-allowed disabled:opacity-70"
              whileTap={{ scale: 0.98 }}
            >
              {state === "loading" ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              Send message
            </motion.button>
            {message && (
              <p role="status" className={`mt-4 rounded-2xl border px-4 py-3 text-sm ${state === "success" ? "border-emerald-400/40 text-emerald-300" : "border-rose-400/40 text-rose-300"}`}>
                {message}
              </p>
            )}
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}

function Field({ label, className, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className={className}>
      <span className="mb-2 block text-sm font-semibold">{label}</span>
      <input
        {...props}
        className="w-full rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 py-3 outline-none transition focus:border-[var(--accent)]"
      />
    </label>
  );
}

function ContactLink({ icon, label, href }: { icon: ReactNode; label: ReactNode; href?: string }) {
  const content = (
    <>
      <span className="text-[var(--accent)]">{icon}</span>
      <span>{label}</span>
    </>
  );

  if (!href) return <div className="flex items-center gap-3 rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-4 py-3 text-sm">{content}</div>;

  return (
    <a href={href} className="flex items-center gap-3 rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-4 py-3 text-sm transition hover:border-[var(--accent)]">
      {content}
    </a>
  );
}
