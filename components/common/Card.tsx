import { ReactNode } from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@/components/common/icons";

interface CardProps {
  id: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
  viewAllHref?: string;
  className?: string;
}

export default function Card({ id, title, icon, children, viewAllHref, className = "" }: CardProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`rounded-xl border border-border bg-surface p-5 scroll-mt-6 ${className}`}
    >
      <div className="flex items-center justify-between gap-4 mb-4">
        <h2 id={`${id}-title`} className="flex items-center gap-2 text-base font-semibold text-foreground">
          <span className="text-subtle">{icon}</span>
          {title}
        </h2>
        {viewAllHref && (
          <Link
            href={viewAllHref}
            className="flex items-center gap-0.5 text-xs font-medium text-subtle hover:text-accent transition-colors"
          >
            View all
            <ChevronRightIcon className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}
