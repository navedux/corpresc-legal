"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/how-we-work", label: "How We Work" },
  {
    label: "Careers",
    children: [
      { href: "/careers/legal", label: "Legal" },
      { href: "/careers/support", label: "Support Services" },
      { href: "/careers/internships", label: "Internships" },
    ],
  },
  {
    label: "Resources",
    children: [
      { href: "/resources/news", label: "News & Media" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header className="sticky top-0 w-full px-4 sm:px-6 lg:px-10 py-5 lg:py-7 flex justify-between items-center bg-white z-50">
      {/* Logo */}
      <Link href="/" className="shrink-0">
        <Image src="/Logo.webp" alt="CORPRESC LEGAL" width={160} height={40} className="h-8 sm:h-9 lg:h-10 w-auto object-contain" />
      </Link>

      {/* Desktop Nav */}
      <div className="flex items-center gap-10" ref={dropdownRef}>
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium text-slate-900">
          {navItems.map((item) => {
            if ("children" in item && item.children) {
              const isActive = item.children.some((c) => pathname.startsWith(c.href));
              return (
                <div key={item.label} className="relative">
                  <button
                    className={`link-underline flex items-center gap-1 transition-colors duration-300 ${
                      isActive ? "text-navy" : "hover:text-navy"
                    }`}
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  >
                    {item.label}
                    <svg
                      className={`w-3 h-3 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-3 bg-white border border-line shadow-lg min-w-[180px] py-2 animate-hero">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-5 py-2.5 text-[13px] transition-colors duration-200 ${
                            pathname === child.href
                              ? "text-navy bg-navy/[0.04]"
                              : "text-slate-600 hover:text-navy hover:bg-navy/[0.03]"
                          }`}
                          onClick={() => setOpenDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href!}
                className={`link-underline flex items-center gap-1.5 transition-colors duration-300 ${
                  pathname === item.href ? "text-navy" : "hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
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
              <span className={`block w-5 h-0.5 bg-navy transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-navy transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-navy transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-white border-t border-line z-50 lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 space-y-1 overflow-y-auto max-h-[70vh]">
          {navItems.map((item) => {
            if ("children" in item && item.children) {
              const isExpanded = mobileExpanded === item.label;
              return (
                <div key={item.label}>
                  <button
                    className="flex items-center justify-between w-full py-3 text-sm font-medium text-slate-800 border-b border-line/50"
                    onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      isExpanded ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-4 py-2 space-y-1 border-l-2 border-navy/10 ml-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block py-2 text-[13px] ${
                            pathname === child.href ? "text-navy font-medium" : "text-slate-600 hover:text-navy"
                          }`}
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href!}
                className={`block py-3 text-sm font-medium border-b border-line/50 ${
                  pathname === item.href ? "text-navy" : "text-slate-800 hover:text-navy"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="block mt-4 bg-navy text-white px-6 py-3 text-[13px] font-medium text-center hover:bg-navy-dark transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
