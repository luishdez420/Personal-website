"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { profile } from "@/data/profile";

const commands = [
  { label: "Explore projects", href: "#projects", detail: "Jump to flagship case studies" },
  { label: "Read about Luis", href: "#about", detail: "Engineering story and philosophy" },
  { label: "Inspect skills", href: "#skills", detail: "Interactive technical ecosystem" },
  { label: "Start a conversation", href: "#contact", detail: "Contact form and social links" },
  { label: "View resume", href: profile.resumePath, detail: "Concise resume page" },
  { label: "Open GitHub", href: profile.github, detail: "Featured repositories", external: true },
  { label: "Open LinkedIn", href: profile.linkedin, detail: "Professional profile", external: true }
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return commands;
    return commands.filter((command) => `${command.label} ${command.detail}`.toLowerCase().includes(normalized));
  }, [query]);

  function run(href: string) {
    setOpen(false);
    setQuery("");
    window.location.assign(href);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
          className="fixed inset-0 z-[90] grid place-items-start bg-black/40 px-4 pt-24 backdrop-blur-sm sm:place-items-center sm:pt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={() => setOpen(false)}
        >
          <motion.div
            className="glass w-full max-w-2xl overflow-hidden rounded-3xl"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-[var(--line)] px-5 py-4">
              <Search size={19} className="text-[var(--accent)]" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search sections, projects, links..."
                className="w-full bg-transparent text-base outline-none placeholder:text-[var(--muted)]"
              />
              <kbd className="rounded-lg border border-[var(--line)] px-2 py-1 text-xs text-[var(--muted)]">Esc</kbd>
            </div>
            <div className="max-h-[55vh] overflow-y-auto p-2">
              {filtered.map((command) => (
                <button
                  key={command.label}
                  type="button"
                  onClick={() => run(command.href)}
                  className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition hover:bg-[var(--accent-soft)]"
                >
                  <span>
                    <span className="block text-sm font-semibold">{command.label}</span>
                    <span className="text-xs text-[var(--muted)]">{command.detail}</span>
                  </span>
                  {command.external && <ExternalLink size={16} className="text-[var(--muted)]" />}
                </button>
              ))}
            </div>
            <div className="border-t border-[var(--line)] px-5 py-3 text-xs text-[var(--muted)]">
              Press Command/Ctrl + K anytime. Try typing &quot;terminal&quot; on the page for a tiny Easter egg.
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
