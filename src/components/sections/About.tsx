import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { WayfindingRow } from "@/components/ui/WayfindingRow";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[var(--bg-primary)] pt-[120px] pb-[40px]"
      aria-labelledby="about-heading"
    >
      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
        
        {/* Monospace Eyebrow */}
        <RevealOnScroll>
          <div className="font-mono text-[12px] font-bold uppercase tracking-widest text-[var(--text-tertiary)] mb-12">
            .1 // ABOUT
          </div>
        </RevealOnScroll>

        {/* ── Editorial Statement ── */}
        <div className="relative z-10 max-w-[900px] pb-[80px]">
          
          {/* Oversized Monogram Background */}
          <div className="absolute -left-10 -top-20 z-[-1] font-display text-[300px] font-bold italic leading-none text-[var(--accent-blue-tint)] opacity-30 select-none">
            V
          </div>

          <RevealOnScroll>
            <p className="font-display text-[clamp(28px,4vw,48px)] leading-[1.25] tracking-[-0.01em]">
              <span className="font-semibold text-[var(--text-primary)]">We build tools that outlast the hype cycle. </span>
              <span className="font-normal text-[var(--text-dim)]">Founded in 2026 in Satara, our purpose is straightforward: </span>
              <span className="font-semibold text-[var(--text-primary)]">build software that works, </span>
              <span className="font-normal text-[var(--text-dim)]">teach people how to build it themselves, and </span>
              <span className="font-semibold text-[var(--text-primary)]">keep the whole thing connected </span>
              <span className="font-normal text-[var(--text-dim)]">through community. We partner with startups to craft digital products. Our learning platform offers structured curricula with real projects. And our open Discord ecosystem of 500+ developers </span>
              <span className="italic font-semibold text-[var(--text-primary)]">keeps the feedback loop alive.</span>
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="mt-12 flex gap-4 items-center">
              <Link href="/contact" className="rounded-full bg-[var(--accent)] px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[var(--accent-hover)]">
                MEET THE TEAM ↗
              </Link>
              
              {/* Mobile Avatars (hidden on desktop) */}
              <div className="flex -space-x-3 lg:hidden">
                <div className="h-10 w-10 rounded-full border-2 border-[var(--bg-primary)] bg-[var(--border-subtle)]"></div>
                <div className="h-10 w-10 rounded-full border-2 border-[var(--bg-primary)] bg-[var(--border-subtle)]"></div>
                <div className="h-10 w-10 rounded-full border-2 border-[var(--bg-primary)] bg-[var(--border-subtle)]"></div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* ── Desktop Orbiting Avatars ── */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] hidden lg:block pointer-events-none">
          <div className="absolute inset-0 rounded-full border border-dashed border-[var(--border-subtle)] animate-[spin_30s_linear_infinite]">
            <div className="absolute top-0 left-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[var(--bg-primary)] bg-[var(--border-subtle)]" />
            <div className="absolute bottom-[15%] left-[5%] h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[var(--bg-primary)] bg-[var(--border-subtle)]" />
            <div className="absolute bottom-[15%] right-[5%] h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[var(--bg-primary)] bg-[var(--border-subtle)]" />
          </div>
        </div>

      </div>

      {/* ── Wayfinding Row ── */}
      <WayfindingRow nextSectionName="SERVICES" nextSectionLink="/#services" supportLinkName="CAPABILITIES" />
    </section>
  );
}
