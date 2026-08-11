"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { serviceColumns, slugify } from "@/lib/services-data";

// Main navigation links that appear beside the Services dropdown.
const navLinks = [
  { label: "Off-the-Shelf Solutions", href: "/off-the-shelf-solutions" },
  { label: "About Us", href: "/about" },
  { label: "Hire Developers", href: "/hire-developers" },
];

export default function Header() {
  // Route state lets the header highlight active pages and adjust About-page copy.
  const pathname = usePathname();
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const aboutActive = pathname === "/about";
  const logoLabel = aboutActive ? "Softzino Technologies" : "Softzino";
  const ctaLabel = aboutActive ? "Schedule a Call" : "Contact Us";

  // Keep the desktop mega-menu open while the cursor moves between trigger and panel.
  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120);
  };

  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  // Used by desktop links to apply the teal active state from the Figma header.
  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full bg-navy-header shadow-header">
      {/* Shared top bar: logo, desktop nav/CTA, and mobile hamburger. */}
      <div className="mx-auto flex h-20 w-full min-w-0 max-w-content items-center justify-between px-4 md:px-16">
        <Link href="/" className="min-w-0 text-base font-bold text-white md:text-lg">
          {logoLabel}
        </Link>

        {/* Desktop navigation. Hidden on smaller screens in favor of the mobile menu below. */}
        <nav className="hidden items-center gap-8 lg:flex">
          <div className="relative" onMouseEnter={openMega} onMouseLeave={scheduleClose}>
            <button
              className="flex items-center gap-1 text-base font-medium text-white/80 transition-colors hover:text-white"
              aria-expanded={megaOpen}
              onClick={() => setMegaOpen((value) => !value)}
            >
              Services
              <ChevronDown
                size={14}
                className={`transition-transform ${megaOpen ? "rotate-180" : ""}`}
              />
            </button>

            {megaOpen && (
              /* Full-width Services mega-menu using the shared serviceColumns data. */
              <div
                className="fixed left-0 right-0 top-20 z-40 border-b border-border-light bg-white shadow-card-md"
                onMouseEnter={openMega}
                onMouseLeave={scheduleClose}
              >
                <div className="mx-auto grid max-w-content grid-cols-3 gap-y-10 px-16 pb-14 pt-32 xl:grid-cols-6">
                  {serviceColumns.map((col, index) => (
                    <div
                      key={col.title}
                      className={`flex flex-col gap-5 ${
                        index > 0 ? "border-l border-border-light pl-8" : "pr-8"
                      }`}
                    >
                      <h3 className="text-lg font-bold leading-snug text-navy-header">
                        {col.title}
                      </h3>
                      <ul className="flex flex-col gap-3">
                        {col.items.map((item) => (
                          <li key={item}>
                            <Link
                              href={`/services#${slugify(item)}`}
                              className="text-base leading-relaxed text-body-text transition-colors hover:text-teal-primary"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mx-auto max-w-content border-t border-border-light px-16 py-9">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-base font-bold text-teal-primary hover:underline"
                  >
                    View all Services <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium transition-colors ${
                isActive(link.href)
                  ? "border-b-2 border-teal-secondary pb-1 font-bold text-teal-secondary"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/hire-developers#request-talent"
            className="rounded-2xl bg-teal-primary px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-secondary"
          >
            <span className={aboutActive ? "" : "uppercase tracking-wide"}>{ctaLabel}</span>
          </Link>
        </div>

        <button
          className="shrink-0 text-white lg:hidden"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        /* Mobile menu mirrors the desktop navigation in a stacked, tap-friendly layout. */
        <div className="border-t border-white/10 bg-navy-header px-4 pb-6 lg:hidden">
          <nav className="flex flex-col gap-1 pt-4">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-base font-medium text-white/90">
                Services
                <ChevronDown size={16} className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="flex flex-col gap-4 py-2 pl-2">
                {serviceColumns.map((col) => (
                  <div key={col.title}>
                    <p className="mb-1 text-sm font-bold text-teal-mint">{col.title}</p>
                    <ul className="flex flex-col gap-1">
                      {col.items.map((item) => (
                        <li key={item}>
                          <Link
                            href={`/services#${slugify(item)}`}
                            className="block py-1 text-sm text-white/70"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 py-1 text-sm font-bold text-teal-mint"
                >
                  View all Services <ArrowRight size={14} />
                </Link>
              </div>
            </details>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-base font-medium text-white/90"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/hire-developers#request-talent"
              className="mt-3 rounded-2xl bg-teal-primary px-6 py-3 text-center text-sm font-bold text-white"
            >
              <span className={aboutActive ? "" : "uppercase tracking-wide"}>{ctaLabel}</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
