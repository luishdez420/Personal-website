"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import Link from "next/link";
import type { MouseEvent, MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  "aria-label"?: string;
};

export function MagneticButton({ href, children, variant = "primary", className, ...buttonProps }: MagneticButtonProps) {
  const reduceMotion = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 180, damping: 16 });
  const y = useSpring(useMotionValue(0), { stiffness: 180, damping: 16 });

  const classes = cn(
    "inline-flex min-h-11 items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-offset-4",
    variant === "primary" && "border-transparent bg-[var(--accent)] text-slate-950 shadow-[0_18px_50px_rgba(45,212,191,0.24)] hover:brightness-110",
    variant === "secondary" && "border-[var(--line)] bg-[var(--panel)] text-[var(--foreground)] backdrop-blur-xl hover:border-[var(--accent)]",
    variant === "ghost" && "border-transparent text-[var(--muted)] hover:text-[var(--foreground)]",
    className
  );

  function handleMove(event: MouseEvent<HTMLElement>) {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.16);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.16);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  if (href) {
    return (
      <motion.span style={{ x, y }} onMouseMove={handleMove} onMouseLeave={handleLeave} className="inline-flex">
        <Link className={classes} href={href}>
          {children}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={classes}
      {...buttonProps}
    >
      {children}
    </motion.button>
  );
}
