"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "#", label: "Insights", disabled: true },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 w-full px-4 sm:px-6 lg:px-10 py-5 lg:py-7 flex justify-between items-center bg-white z-50">
      {/* Logo */}
      <Link href="/" className="shrink-0">
        <Image src="/Logo.webp" alt="CORPRESC LEGAL" width={160} height={40} className="h-8 sm:h-9 lg:h-10 w-auto object-contain" />
      </Link>

      {/* Desktop Nav */}
      <div className="flex items-center gap-10">
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium text-slate-900">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.disabled ? "#" : item.href}
              className={`link-underline flex items-center gap-1.5 transition-colors duration-300 ${
                item.disabled
                  ? "text-slate-400 cursor-not-allowed pointer-events-none"
                  : pathname === item.href
                  ? "text-navy"
                  : "hover:text-navy"
              }`}
              onClick={item.disabled ? (e) => e.preventDefault() : undefined}
            >
              {item.label}
              {item.disabled && (
                <span className="text-[10px] text-slate-400 ml-0.5">(Soon)</span>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/contact"
            className="group hidden sm:flex bg-navy text-white px-6 py-2.5 text-[13px] font-medium items-center gap-2 hover:bg-navy-dark hover:scale-[1.02] transition-all duration-300"
          >
            Contact Us
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden border border-slate-300 p-2 sm:p-2.5 hover:bg-slate-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-5 h-0.5 bg-navy transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-navy transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-navy transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-bg border-t border-line z-50 lg:hidden animate-hero">
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.disabled ? "#" : item.href}
                className={`block py-2 text-sm font-medium ${
                  item.disabled ? "text-slate-400" : "text-slate-800"
                }`}
                onClick={() => { if (!item.disabled) setMobileOpen(false); }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-2 bg-navy text-white px-6 py-2.5 text-[13px] font-medium text-center"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
