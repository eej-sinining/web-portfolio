"use client";

import { ReactNode } from "react";
import FadeIn from "@/components/common/FadeIn";

interface SectionProps {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
  className?: string;
  action?: ReactNode;
}

export default function Section({
  id,
  label,
  title,
  children,
  className = "",
  action,
}: SectionProps) {
  return (
    <section id={id} className={`py-20 scroll-mt-24 ${className}`}>
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="section-label mb-2">{label}</p>
              <h2 className="section-title">{title}</h2>
            </div>
            {action}
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>{children}</FadeIn>
      </div>
    </section>
  );
}
