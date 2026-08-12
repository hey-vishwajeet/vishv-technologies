"use client";

import { useState } from "react";
import { faqItems } from "@/config/site";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { WayfindingRow } from "@/components/ui/WayfindingRow";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden px-8 py-[120px] max-md:py-20"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-[800px]">
        <RevealOnScroll>
          <div className="section-eyebrow">FAQ</div>
          <h2 id="faq-heading" className="section-title">
            Frequently Asked Questions
          </h2>
        </RevealOnScroll>

        <div className="mt-12 flex flex-col">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <RevealOnScroll key={item.question}>
                <div className={`overflow-hidden ${index !== 0 ? 'border-t' : ''} border-[var(--border-subtle)]`}>
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      className="flex w-full items-center justify-between py-6 text-left text-[18px] font-semibold text-[var(--text-primary)] transition-colors hover:text-[var(--accent)] cursor-pointer bg-transparent border-none"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      {item.question}
                      <span aria-hidden="true" className="ml-4 text-2xl font-light text-[var(--accent)]">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={cn(
                      "overflow-hidden text-[16px] leading-relaxed text-[var(--text-secondary)] transition-all duration-200 ease-in-out",
                      isOpen ? "max-h-60 pb-6 opacity-100" : "max-h-0 opacity-0",
                    )}
                  >
                    {item.answer}
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
      <div className="mt-20">
        <WayfindingRow nextSectionName="CONTACT" nextSectionLink="/#contact" supportLinkName="LET'S TALK" />
      </div>
    </section>
  );
}
