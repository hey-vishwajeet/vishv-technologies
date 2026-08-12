"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { WayfindingRow } from "@/components/ui/WayfindingRow";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import animationData from "@/assets/lottie/business-group-meeting.json";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100vh] overflow-hidden bg-[var(--bg-primary)] pt-[120px] md:pt-[180px]"
      aria-labelledby="hero-heading"
    >
      {/* ── Lottie Animation ── */}
      <div
        className="pointer-events-none absolute right-[15%] top-[8%] z-0 hidden w-[550px] select-none lg:block opacity-90"
        aria-hidden="true"
      >
        <Lottie animationData={animationData} loop={true} />
      </div>

      {/* ── Atmospheric background gradient ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 30%, var(--accent-muted), transparent 70%)",
        }}
      />

      {/* ── Content — Editorial ── */}
      <div className="relative z-[2] mx-auto w-full max-w-[1200px] px-5 sm:px-8">

        {/* Monospace annotation */}

        <div className="mt-16 max-w-[800px]">
          <h1
            id="hero-heading"
            className="font-display animate-fade-up flex flex-col text-[clamp(44px,7vw,80px)] leading-[1.05] tracking-tight"
          >
            <span className="font-bold text-[var(--text-primary)]">TECHNOLOGY</span>
            <span className="italic text-[var(--text-dim)] font-medium md:pl-[12%]">THAT SERVES</span>
            <span className="font-bold uppercase text-[var(--text-primary)] md:pl-[4%]">YOUR DIGITAL</span>
            <span className="italic text-[var(--accent)] font-medium md:pl-[20%]">VISION.</span>
          </h1>
        </div>

        {/* ── Feature Card Row (replaces buttons & About pillars) ── */}
        <div className="animate-fade-up mt-24 mb-16 grid grid-cols-1 gap-4 md:grid-cols-[2fr_1.2fr_1.2fr]">

          {/* Card 1: Wide Headline CTA */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-raised)] p-6 min-h-[180px]">
            <div className="flex justify-between items-start mb-6">
              <span className="inline-block rounded-full bg-[var(--accent-muted)] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--accent)]">
                PRODUCTION
              </span>
              <a href="/#services" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">Explore our work</h3>
              <p className="text-[14px] text-[var(--text-secondary)] max-w-[280px]">High-performance software systems for modern web & native platforms.</p>
            </div>
          </div>

          {/* Card 2: Media/Education */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-raised)] p-6 min-h-[180px]">
            <div className="mb-6 h-10 w-10 overflow-hidden rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-full w-full text-[var(--text-primary)]"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
            </div>
            <div>
              <span className="font-mono text-[10px] text-[var(--text-tertiary)] uppercase tracking-wider mb-1 block">Education</span>
              <a href="/#community" className="text-[14px] font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1">
                Developer Academy <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>

          {/* Card 3: Utility/Community CTA */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-raised)] p-6 min-h-[180px]">
            <div className="mb-4">
              <span className="font-mono text-[10px] text-[var(--text-tertiary)] uppercase tracking-wider block mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-orange)]"></span> COMMUNITY
              </span>
              <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed">Join our open-source ecosystem.</p>
            </div>
            <div className="flex gap-2">
              <Link href="https://discord.gg/7RKBmEfqKm" className="flex-1 text-center rounded-lg bg-[var(--accent)] py-2 text-[12px] font-bold text-white hover:bg-[var(--accent-hover)] transition-colors">Start</Link>
              <Link href="/contact" className="flex-1 text-center rounded-lg border border-[var(--border-subtle)] py-2 text-[12px] font-bold text-[var(--text-primary)] hover:bg-[var(--border-subtle)] transition-colors">Contact</Link>
            </div>
          </div>

        </div>

      </div>

      {/* ── Wayfinding Row ── */}
      <WayfindingRow nextSectionName="ABOUT" nextSectionLink="/#about" />
    </section>
  );
}
