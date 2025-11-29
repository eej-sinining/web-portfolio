"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className="
        w-full fixed top-0 left-0 z-50
        bg-white/10
        backdrop-blur-sm
        border border-white/20
        shadow-[0_0_10px_2px_rgba(255,255,255,0.15)]
      "
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-12 px-6">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold text-white leading-none drop-shadow-md">
          EEJS
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/certificates", label: "Certificates" },
            { href: "/projects", label: "Projects" },
            { href: "/experiences", label: "Experiences" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`
                  text-lg leading-none relative border-b-2 border-transparent
                  hover:border-white/70 transition-colors duration-300
                  ${isActive(href) ? "border-white font-semibold" : ""}
                `}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden block text-white text-2xl leading-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            md:hidden
            bg-white/10
            backdrop-blur-sm
            border border-white/20
            shadow-[0_0_10px_2px_rgba(255,255,255,0.15)]
            p-4
          "
        >
          <ul className="flex flex-col gap-4 text-white">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/certificates", label: "Certificates" },
              { href: "/projects", label: "Projects" },
              { href: "/experiences", label: "Experiences" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`text-lg ${isActive(href) ? "font-bold underline" : ""}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
