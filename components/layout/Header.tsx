"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Helper to check if link is active
  const isActive = (href: string) => pathname === href;

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm border-b">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-12 px-4">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold text-black leading-none">
          EEJS
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-black">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/projects", label: "Projects" },
            { href: "/experiences", label: "Experiences" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`
                  text-lg leading-none
                  relative
                  border-b-2 border-transparent
                  hover:border-gray-400
                  transition-colors duration-300
                  ${isActive(href) ? "border-gray-600 font-semibold" : ""}
                `}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden block text-black text-2xl leading-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md p-4">
          <ul className="flex flex-col gap-4 text-black">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/projects", label: "Projects" },
              { href: "/experiences", label: "Experiences" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`text-lg ${
                    isActive(href) ? "font-bold text-indigo-600" : ""
                  }`}
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