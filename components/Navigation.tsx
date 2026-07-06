"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { BriefcaseBusiness, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";
import { GitHubIcon, LinkedInIcon } from "./ui/BrandIcons";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" }
];

export function Navigation() {
  const ids = useMemo(() => navItems.map((item) => item.id), []);
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();
  const compact = useTransform(scrollY, [0, 120], [0, 1]);

  return (
    <motion.header className="fixed inset-x-0 top-4 z-50 px-4" style={{ y: useTransform(compact, [0, 1], [0, -4]) }}>
      <nav className="section-shell glass flex items-center justify-between rounded-full px-3 py-3">
        <Link href="#home" className="flex items-center gap-3 rounded-full pl-2 pr-3 focus-visible:outline-offset-8">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--accent)] text-sm font-black text-slate-950">LH</span>
          <motion.span className="hidden text-sm font-semibold sm:block" style={{ opacity: useTransform(compact, [0, 1], [1, 0.78]) }}>
            Luis Hernandez
          </motion.span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--foreground)]",
                active === item.id && "bg-[var(--accent-soft)] text-[var(--foreground)]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            aria-label="GitHub profile"
            className="hidden rounded-full p-2 text-[var(--muted)] transition hover:bg-[var(--accent-soft)] hover:text-[var(--foreground)] sm:inline-flex"
          >
            <GitHubIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={profile.linkedin}
            aria-label="LinkedIn profile"
            className="hidden rounded-full p-2 text-[var(--muted)] transition hover:bg-[var(--accent-soft)] hover:text-[var(--foreground)] sm:inline-flex"
          >
            <LinkedInIcon className="h-[18px] w-[18px]" />
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            className="rounded-full p-2 text-[var(--muted)] transition hover:bg-[var(--accent-soft)] hover:text-[var(--foreground)]"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link
            href={profile.resumePath}
            className="hidden items-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--accent)] px-4 py-2 text-sm font-bold text-[#020617] transition hover:brightness-110 md:inline-flex"
          >
            <BriefcaseBusiness size={16} />
            Resume
          </Link>
          <button
            type="button"
            className="rounded-full p-2 text-[var(--foreground)] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Open menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="section-shell glass mt-3 rounded-3xl p-3 lg:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-2xl px-4 py-3 text-sm font-semibold text-[var(--muted)]",
                  active === item.id && "bg-[var(--accent-soft)] text-[var(--foreground)]"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link onClick={() => setOpen(false)} href={profile.resumePath} className="mt-2 block rounded-2xl bg-[var(--accent)] px-4 py-3 text-center text-sm font-bold text-slate-950">
              View Resume
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
