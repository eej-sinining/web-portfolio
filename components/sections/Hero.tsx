"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { profile } from "@/lib/data/profile";
import { vaProfile } from "@/lib/data/vaProfile";
import { socialLinks } from "@/lib/data/socialLink";
import { usePersona } from "@/components/common/PersonaProvider";
import { heroStagger, fadeUp, defaultTransition, quickTransition } from "@/lib/motion";

export default function Hero() {
  const { isDeveloper, isVa, setPersona } = usePersona();
  const prefersReduced = useReducedMotion();

  const content = isDeveloper
    ? {
        label: "Software Engineer",
        roles: profile.roles,
        tagline: profile.tagline,
        cta: "Send Email",
        secondary: "View Resume",
        secondaryHref: socialLinks.find((l) => l.label === "Resume")?.href,
      }
    : {
        label: vaProfile.label,
        roles: vaProfile.roles,
        tagline: vaProfile.tagline,
        cta: vaProfile.ctaPrimary,
        secondary: "See Services",
        secondaryHref: "#services",
      };

  const motionProps = prefersReduced
    ? {}
    : {
        initial: "hidden" as const,
        animate: "visible" as const,
        variants: heroStagger,
      };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center max-w-3xl mx-auto px-6 pt-24 pb-16">
      <motion.div {...motionProps}>
        <motion.div className="flex items-center gap-3 mb-4" variants={fadeUp}>
          <AnimatePresence mode="wait">
            <motion.p
              key={content.label}
              className="section-label"
              initial={prefersReduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReduced ? undefined : { opacity: 0, y: -8 }}
              transition={quickTransition}
            >
              {content.label}
            </motion.p>
          </AnimatePresence>
          <span className="text-border">·</span>
          <button
            onClick={() => setPersona(isDeveloper ? "va" : "developer")}
            className="text-xs font-mono text-subtle hover:text-accent transition-colors"
          >
            {isDeveloper ? "Also a Shopify VA →" : "← Software Engineer side"}
          </button>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground leading-tight"
          variants={fadeUp}
        >
          {profile.name}
        </motion.h1>

        <motion.p
          className="mt-3 text-sm text-muted font-mono"
          variants={fadeUp}
        >
          {profile.location}
        </motion.p>

        <AnimatePresence mode="wait">
          <motion.div
            key={isDeveloper ? "dev-roles" : "va-roles"}
            initial={prefersReduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReduced ? undefined : { opacity: 0, y: -12 }}
            transition={quickTransition}
          >
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
              {content.roles.join(" \\ ")}
            </p>
            <p className="mt-4 text-base text-subtle leading-relaxed max-w-lg">
              {content.tagline}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div className="mt-10 flex flex-wrap gap-3" variants={fadeUp}>
          <motion.a
            href={`mailto:${profile.email}`}
            className="btn-primary"
            whileHover={prefersReduced ? undefined : { scale: 1.02 }}
            whileTap={prefersReduced ? undefined : { scale: 0.98 }}
            transition={quickTransition}
          >
            {content.cta}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </motion.a>
          {content.secondaryHref && (
            <motion.a
              href={content.secondaryHref}
              target={content.secondaryHref.startsWith("http") ? "_blank" : undefined}
              rel={content.secondaryHref.startsWith("http") ? "noopener noreferrer" : undefined}
              className="btn-ghost"
              whileHover={prefersReduced ? undefined : { scale: 1.02 }}
              whileTap={prefersReduced ? undefined : { scale: 0.98 }}
              transition={quickTransition}
            >
              {content.secondary}
            </motion.a>
          )}
        </motion.div>

        <motion.div
          className="mt-12 flex items-center gap-5"
          variants={fadeUp}
        >
          {socialLinks
            .filter((l) => (isVa ? l.label !== "Resume" && l.label !== "GitHub" : l.label !== "Resume"))
            .map(({ href, label, icon }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-subtle hover:text-accent transition-colors"
                initial={prefersReduced ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...defaultTransition, delay: 0.5 + i * 0.06 }}
                whileHover={prefersReduced ? undefined : { y: -2 }}
              >
                <span className="w-5 h-5 block [&>svg]:w-5 [&>svg]:h-5">
                  {icon}
                </span>
              </motion.a>
            ))}
        </motion.div>
      </motion.div>

      {!prefersReduced && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span className="text-[10px] font-mono text-subtle uppercase tracking-widest">Scroll</span>
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-accent/60 to-transparent"
            animate={{ scaleY: [1, 0.4, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </motion.div>
      )}
    </section>
  );
}
