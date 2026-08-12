import { approachItems } from "@/config/site";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { WayfindingRow } from "@/components/ui/WayfindingRow";

export function WhyChooseUs() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden px-8 py-[120px] max-md:py-20"
      aria-labelledby="approach-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[0.45fr_0.55fr]">
          {/* ── Left: sticky editorial header ── */}
          <RevealOnScroll>
            <div className="lg:sticky lg:top-32">
              <div className="section-eyebrow">Our Approach</div>
              <h2 id="approach-heading" className="section-title">
                How we work
              </h2>
              <p className="section-desc">
                Six principles that shape every project we take on. Not
                slogans — operating decisions that affect your outcome.
              </p>
            </div>
          </RevealOnScroll>

          {/* ── Right: approach items in an editorial list ── */}
          <div className="flex flex-col gap-12 border-l border-[var(--border-subtle)] pl-8 lg:pl-12">
            {approachItems.map((item, index) => (
              <RevealOnScroll key={item.title}>
                <article className="relative">
                  <div className="mb-3 flex items-baseline gap-4">
                    <span
                      className="absolute -left-[45px] lg:-left-[61px] top-1 font-display text-[24px] font-light text-[var(--text-tertiary)] bg-[var(--bg-primary)] py-1"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-[20px] font-semibold text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[16px] leading-relaxed text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-20">
        <WayfindingRow nextSectionName="SELECTED WORK" nextSectionLink="/#work" supportLinkName="PORTFOLIO" />
      </div>
    </section>
  );
}
