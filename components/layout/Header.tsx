"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/lib/data/profile";
import ThemeToggle from "@/components/common/ThemeToggle";
import PersonaSwitcher from "@/components/common/PersonaSwitcher";

// The home page hero carries its own switchers, so this bar only shows on sub-pages.
export default function Header() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <header className="max-w-4xl mx-auto w-full px-4 sm:px-6 pt-6 flex items-center justify-between">
      <Link
        href="/"
        className="text-sm font-semibold text-foreground hover:text-accent transition-colors"
      >
        {profile.shortName}
      </Link>
      <div className="flex items-center gap-2">
        <PersonaSwitcher />
        <ThemeToggle />
      </div>
    </header>
  );
}
