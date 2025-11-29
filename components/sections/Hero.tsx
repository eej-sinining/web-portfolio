"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { socialLinks } from "@/lib/data/socialLink"; // adjust path as needed

export default function Hero() {
  const roles = [
    "Computer Science Student",
    "Software Developer",
    "Freelancer",
    "Shopify Store Builder",
  ];

  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="flex flex-col items-center justify-center text-center py-24 px-6 min-h-screen"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1
        className="text-6xl font-extrabold mb-6 tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]"
        style={{ fontFamily: "'Geist Sans', sans-serif", paddingLeft: "1rem" }}
      >
        Greetings! <span className="inline-block animate-wave">👋</span>
      </h1>

      <p
        className="text-3xl font-semibold mb-8 leading-relaxed max-w-lg text-slate-200 whitespace-nowrap"
        style={{ fontFamily: "'Geist Mono', monospace", letterSpacing: "0.04em" }}
      >
        I'm{" "}
        <span className="text-cyan-300 underline decoration-cyan-500 decoration-2 underline-offset-2 drop-shadow-[0_0_12px_rgba(0,255,255,0.5)]">
          Ean Endrew Jade Sinining
        </span>
        ,
      </p>

      <div className="relative h-16 w-72 overflow-hidden pl-0">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute w-full text-2xl font-semibold text-slate-300 leading-8 tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            {roles[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Social Links */}
      <div className="mt-8 flex space-x-6 justify-center">
        {socialLinks.map(({ href, label, icon }) => (
          <motion.div
            key={label}
            onMouseEnter={() => setHovered(label)}
            onMouseLeave={() => setHovered(null)}
            className="flex flex-col items-center cursor-pointer"
            whileHover={{ scale: 1.15, color: "#22d3ee" }} // cyan-400 or whatever color you want
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[var(--foreground)]"
            >
              {icon}
            </a>

            <AnimatePresence>
              {hovered === label && (
                <motion.span
                  initial={{ opacity: 0, y: 12, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.95 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="mt-1 text-cyan-300 text-sm font-semibold underline decoration-cyan-500 decoration-2 underline-offset-2 drop-shadow-[0_0_12px_rgba(0,255,255,0.7)] select-none pointer-events-none"
                >
                  {label}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <style>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-wave {
          display: inline-block;
          animation-name: wave;
          animation-duration: 2.5s;
          animation-iteration-count: infinite;
          transform-origin: 70% 70%;
        }
      `}</style>
    </motion.section>
  );
}
