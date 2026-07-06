"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Copy, Terminal } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export function LocalTime() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const startTimer = window.setTimeout(() => setNow(new Date()), 0);
    const timer = window.setInterval(() => setNow(new Date()), 1000 * 30);
    return () => {
      window.clearTimeout(startTimer);
      window.clearInterval(timer);
    };
  }, []);

  const value = useMemo(() => {
    if (!now) return "Loading local time";
    return new Intl.DateTimeFormat("en", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "America/Santo_Domingo",
      timeZoneName: "short"
    }).format(now);
  }, [now]);

  return <span>{value}</span>;
}

export function TabStatus() {
  useEffect(() => {
    const original = document.title;
    function handleVisibility() {
      document.title = document.hidden ? "Luis is still building systems" : original;
    }
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      document.title = original;
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return null;
}

export function EasterEggTerminal() {
  const [sequence, setSequence] = useState("");
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const command = "curl /api/reliable-systems --ship-with-care";

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const next = `${sequence}${event.key.toLowerCase()}`.slice(-8);
      setSequence(next);
      if (next.endsWith("terminal")) setOpen(true);
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [sequence]);

  async function copyCommand() {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed bottom-5 left-1/2 z-[85] w-[min(680px,calc(100%-24px))] -translate-x-1/2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
        >
          <div className="glass overflow-hidden rounded-3xl">
            <div className="flex items-center justify-between border-b border-[var(--line)] px-4 py-3">
              <span className="flex items-center gap-2 text-sm font-semibold">
                <Terminal size={17} className="text-[var(--accent)]" />
                portfolio.status
              </span>
              <button type="button" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]" onClick={() => setOpen(false)}>
                close
              </button>
            </div>
            <div className="space-y-3 p-4 font-mono text-sm">
              <p className="text-[var(--muted)]">$ {command}</p>
              <p>200 OK - systems operational, latency disciplined, deploy path clear.</p>
              <button type="button" onClick={copyCommand} className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1.5 text-xs">
                {copied ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                {copied ? "Copied" : "Copy command"}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
