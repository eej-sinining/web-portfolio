"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Certificates from "@/components/sections/Certificates";
import VaServices from "@/components/sections/VaServices";
import VaToolkit from "@/components/sections/VaToolkit";
import VaWork from "@/components/sections/VaWork";
import Contact from "@/components/sections/Contact";
import { usePersona } from "@/components/common/PersonaProvider";
import { quickTransition } from "@/lib/motion";

const personaMotion = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

export default function HomePage() {
  const { isDeveloper } = usePersona();
  const prefersReduced = useReducedMotion();

  const motionProps = prefersReduced
    ? {}
    : {
        ...personaMotion,
        transition: quickTransition,
      };

  return (
    <>
      <Hero />
      <motion.div
        className="divider max-w-3xl mx-auto"
        initial={prefersReduced ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ transformOrigin: "left" }}
      />
      <About />
      <Experience />

      <AnimatePresence mode="wait">
        {isDeveloper ? (
          <motion.div key="developer-sections" {...motionProps}>
            <TechStack />
            <Projects />
            <Certificates />
          </motion.div>
        ) : (
          <motion.div key="va-sections" {...motionProps}>
            <VaServices />
            <VaToolkit />
            <VaWork />
          </motion.div>
        )}
      </AnimatePresence>

      <Contact />
    </>
  );
}
