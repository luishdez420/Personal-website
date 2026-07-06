"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useSpring(useMotionValue(-100), { stiffness: 420, damping: 32 });
  const y = useSpring(useMotionValue(-100), { stiffness: 420, damping: 32 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const enableTimer = window.setTimeout(() => setEnabled(finePointer && !reduceMotion), 0);

    function move(event: PointerEvent) {
      x.set(event.clientX - 10);
      y.set(event.clientY - 10);
    }

    window.addEventListener("pointermove", move);
    return () => {
      window.clearTimeout(enableTimer);
      window.removeEventListener("pointermove", move);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[80] h-5 w-5 rounded-full border border-[var(--accent)] mix-blend-difference"
      style={{ x, y }}
    />
  );
}
