"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePersona } from "@/components/common/PersonaProvider";
import { profile } from "@/lib/data/profile";
import { quickTransition } from "@/lib/motion";

const STORAGE_KEY = "stackforge-promo-dismissed";
const GITHUB_URL = "https://github.com/eej-sinining/stackforge-cli";

const messages = [
  `Hey! 👋 I'm ${profile.name.split(" ")[0]} — I created StackForge.`,
  "It's a CLI that scaffolds .NET Clean Architecture projects in minutes.",
  "JWT, PostgreSQL, Docker, Swagger… all wired up out of the box.",
];

export default function StackForgePromo() {
  const { isDeveloper } = usePersona();
  const prefersReduced = useReducedMotion();
  const [dismissed, setDismissed] = useState(true);
  const [open, setOpen] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const [typing, setTyping] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const wasDismissed = localStorage.getItem(STORAGE_KEY) === "true";
    setDismissed(wasDismissed);
    if (!wasDismissed) {
      const timer = setTimeout(() => setOpen(true), prefersReduced ? 500 : 2200);
      return () => clearTimeout(timer);
    }
  }, [prefersReduced]);

  useEffect(() => {
    if (!open || prefersReduced) {
      setVisibleLines(messages.length);
      setTyping(false);
      return;
    }

    setVisibleLines(0);
    setTyping(true);

    let line = 0;
    const interval = setInterval(() => {
      line += 1;
      setVisibleLines(line);
      if (line >= messages.length) {
        setTyping(false);
        clearInterval(interval);
      }
    }, 900);

    return () => clearInterval(interval);
  }, [open, prefersReduced]);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setOpen(false);
    setDismissed(true);
  };

  if (!mounted || !isDeveloper || dismissed) return null;

  return (
    <div className="fixed top-20 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 max-w-[min(100vw-2rem,20rem)]">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="relative w-full"
          >
            <div className="absolute -bottom-1.5 right-5 w-3 h-3 bg-surface border-r border-b border-border-subtle rotate-45" />

            <div className="card p-4 shadow-lg shadow-accent/5 border-accent/20 bg-surface/95 backdrop-blur-md">
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">
                    SF
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-foreground">StackForge</p>
                    <p className="text-[10px] font-mono text-subtle">Created by {profile.shortName}</p>
                    <p className="text-[10px] font-mono text-subtle/80">pip install stackforge-cli</p>
                  </div>
                </div>
                <button
                  onClick={dismiss}
                  aria-label="Dismiss"
                  className="text-subtle hover:text-foreground transition-colors p-0.5"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-2 min-h-[4.5rem]">
                {messages.slice(0, visibleLines).map((msg, i) => (
                  <motion.p
                    key={i}
                    initial={prefersReduced ? false : { opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xs text-muted leading-relaxed rounded-lg bg-surface-raised px-3 py-2"
                  >
                    {msg}
                  </motion.p>
                ))}
                {typing && (
                  <div className="flex gap-1 px-3 py-2">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-accent"
                        animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.9,
                          delay: i * 0.15,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {visibleLines >= messages.length && !typing && (
                <motion.div
                  initial={prefersReduced ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={quickTransition}
                  className="flex flex-wrap gap-2 mt-3"
                >
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs py-2 px-3"
                  >
                    Try it →
                  </a>
                  <button
                    onClick={() => setOpen(false)}
                    className="btn-ghost text-xs py-2 px-3"
                  >
                    Later
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close StackForge promo" : "Open StackForge promo"}
        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-surface border border-border-subtle shadow-lg hover:border-accent/40 transition-colors"
        initial={prefersReduced ? false : { scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 22, delay: 1.5 }}
        whileHover={prefersReduced ? undefined : { scale: 1.06 }}
        whileTap={prefersReduced ? undefined : { scale: 0.95 }}
      >
        {!prefersReduced && (
          <motion.span
            className="absolute inset-0 rounded-full border border-accent/40"
            animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          />
        )}
        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
          />
        </svg>
        {!open && (
          <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-accent border-2 border-background" />
        )}
      </motion.button>
    </div>
  );
}
