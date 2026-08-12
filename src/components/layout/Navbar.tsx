"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/config/site";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleCooldown = useRef(false);
  const handleToggle = () => {
    if (toggleCooldown.current) return;
    toggleCooldown.current = true;
    setMobileOpen((prev) => !prev);
    setTimeout(() => {
      toggleCooldown.current = false;
    }, 350);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header>
      <nav
        id="navbar"
        aria-label="Main navigation"
        className={cn(
          "fixed top-0 right-0 left-0 z-[9998] px-0 py-4 transition-all duration-300",
          (scrolled || mobileOpen) && "border-b border-[var(--border-subtle)] bg-[var(--bg-primary)] backdrop-blur-[20px]",
        )}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 sm:px-8">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="font-display flex items-center gap-2 text-[20px] sm:text-[22px] font-bold tracking-tight text-[var(--text-primary)] no-underline"
              aria-label={`${siteConfig.name} home`}
            >
              Vishv <span className="text-[#E63946]">Technologies</span>
            </Link>
          </div>

          {/* Desktop nav */}
          <ul className="hidden list-none items-center gap-8 md:flex" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-[var(--text-secondary)] no-underline transition-colors hover:text-[var(--text-primary)] relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-[var(--accent)] transition-all group-hover:w-1 group-hover:-translate-x-1/2 rounded-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/contact" className="rounded-full bg-[var(--accent)] px-5 py-2 text-[13px] font-mono font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[var(--accent-hover)] no-underline">
              Get Started
            </Link>
          </div>

          {/* Hamburger button */}
          <button
            type="button"
            className="relative flex h-10 w-10 flex-col items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] md:hidden cursor-pointer"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={handleToggle}
          >
            <span
              className="absolute block h-[2px] w-5 rounded-full bg-[var(--text-primary)] transition-all duration-300"
              style={{
                transform: mobileOpen ? "rotate(45deg)" : "translateY(-6px)",
              }}
            />
            <span
              className="absolute block h-[2px] w-5 rounded-full bg-[var(--text-primary)] transition-all duration-300"
              style={{
                opacity: mobileOpen ? 0 : 1,
                transform: mobileOpen ? "scaleX(0)" : "scaleX(1)",
              }}
            />
            <span
              className="absolute block h-[2px] w-5 rounded-full bg-[var(--text-primary)] transition-all duration-300"
              style={{
                transform: mobileOpen ? "rotate(-45deg)" : "translateY(6px)",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        className={cn(
          "fixed inset-0 z-[9997] md:hidden flex flex-col",
          "transition-all duration-300 ease-in-out",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        style={{ top: "72px" }}
      >
        {/* Backdrop blur */}
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(10, 10, 11, 0.97)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu content */}
        <div className="relative z-10 flex flex-col h-full overflow-y-auto px-5 py-6">
          <hr className="section-rule mb-6" />

          <ul className="flex list-none flex-col gap-1" role="list">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                style={{
                  transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms",
                  transform: mobileOpen ? "translateY(0)" : "translateY(12px)",
                  opacity: mobileOpen ? 1 : 0,
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                }}
              >
                <Link
                  href={link.href}
                  className="flex items-center justify-between rounded-xl px-4 py-4 text-base font-medium text-white no-underline group"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid transparent",
                    transition: "background 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                    (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{link.label}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="opacity-30 group-hover:opacity-70 transition-opacity"
                    aria-hidden="true"
                  >
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <div
            className="mt-6"
            style={{
              transitionDelay: mobileOpen ? `${navLinks.length * 50}ms` : "0ms",
              transform: mobileOpen ? "translateY(0)" : "translateY(12px)",
              opacity: mobileOpen ? 1 : 0,
              transition: "transform 0.3s ease, opacity 0.3s ease",
            }}
          >
            <Link
              href="/contact"
              className="btn-primary w-full"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </div>

          <hr className="section-rule mt-6" />
        </div>
      </div>
    </header>
  );
}
