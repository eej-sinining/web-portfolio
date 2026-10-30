"use client";

import { useRef } from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import TechStack from "@/components/sections/TechStack";
import DevServices from "@/components/sections/DevServices";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Certificates from "@/components/sections/Certificates";
import VaServices from "@/components/sections/VaServices";
import VaToolkit from "@/components/sections/VaToolkit";
import VaWork from "@/components/sections/VaWork";
import Contact from "@/components/sections/Contact";
import RoamingCursor from "@/components/common/RoamingCursor";
import { usePersona } from "@/components/common/PersonaProvider";
import { profile } from "@/lib/data/profile";
import { vaProfile } from "@/lib/data/vaProfile";

// Bento grid: three columns on large screens; the stack/toolkit card spans two rows.
export default function HomePage() {
  const { isDeveloper } = usePersona();
  const containerRef = useRef<HTMLDivElement>(null);
  const notes = isDeveloper ? profile.cursorNotes : vaProfile.cursorNotes;

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto px-4 sm:px-6">
      <RoamingCursor containerRef={containerRef} label="Ean" notes={notes} />
      <Hero />
      <div className="grid gap-4 lg:grid-cols-3">
        <About className="lg:col-span-3" />
        <Experience className="lg:col-span-2" />
        {isDeveloper ? (
          <>
            <TechStack className="lg:row-span-2" />
            <Education className="lg:col-span-2" />
            <Certificates />
            <Projects className="lg:col-span-2" />
            <DevServices className="lg:col-span-2" />
            <Contact />
          </>
        ) : (
          <>
            <VaToolkit className="lg:row-span-2" />
            <VaServices className="lg:col-span-2" />
            <VaWork className="lg:col-span-2" />
            <Contact />
          </>
        )}
      </div>
    </div>
  );
}
