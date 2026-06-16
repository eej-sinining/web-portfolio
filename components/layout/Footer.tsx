"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/lib/data/profile";
import { socialLinks } from "@/lib/data/socialLink";
import FadeIn from "@/components/common/FadeIn";
import { quickTransition } from "@/lib/motion";

export default function Footer() {
  const year = new Date().getFullYear();
  const prefersReduced = useReducedMotion();

  return (
    <footer className="border-t border-border-subtle">
      <FadeIn className="max-w-3xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-foreground">{profile.name}</p>
            <p className="text-xs text-subtle mt-1">
              © {year} All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, label, icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-subtle hover:text-foreground transition-colors"
                whileHover={prefersReduced ? undefined : { y: -2, color: "var(--accent)" }}
                transition={quickTransition}
              >
                <span className="w-5 h-5 block [&>svg]:w-5 [&>svg]:h-5">
                  {icon}
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="divider mt-8 mb-4" />

        <p className="text-xs text-subtle">
          Built with{" "}
          <Link href="https://nextjs.org" className="text-muted hover:text-foreground transition-colors">
            Next.js
          </Link>{" "}
          &{" "}
          <Link href="https://tailwindcss.com" className="text-muted hover:text-foreground transition-colors">
            Tailwind CSS
          </Link>
        </p>
      </FadeIn>
    </footer>
  );
}
