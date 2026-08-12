"use client";

import { useState } from "react";
import { communityItems, learningItems } from "@/config/site";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { WayfindingRow } from "@/components/ui/WayfindingRow";
import { cn } from "@/lib/utils";

type TabId = "learning" | "community";

export function Community() {
  const [activeTab, setActiveTab] = useState<TabId>("learning");

  const tabs: { id: TabId; label: string }[] = [
    { id: "learning", label: "Education" },
    { id: "community", label: "Community" },
  ];

  const items = activeTab === "learning" ? learningItems : communityItems;

  return (
    <section
      id="community"
      className="relative overflow-hidden px-8 py-[120px] max-md:py-20"
      aria-labelledby="community-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <RevealOnScroll>
          <div className="section-eyebrow">Beyond Software</div>
          <h2 id="community-heading" className="section-title max-w-[500px]">
            Education and community
            <br />
            that accelerate careers
          </h2>
          <p className="section-desc">
            We run a structured learning platform and an active developer
            community — because great engineers are built, not found.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="mt-16">
          <div
            className="mb-10 flex w-fit gap-2 rounded-full bg-[var(--bg-surface)] p-1.5 border border-[var(--border-subtle)]"
            role="tablist"
            aria-label="Education and community options"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                className={cn(
                  "cursor-pointer rounded-full px-6 py-2.5 text-[14px] font-medium transition-all border-none",
                  "font-[var(--font-display)]",
                  activeTab === tab.id
                    ? "bg-[var(--accent-muted)] text-[var(--accent)]"
                    : "bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
                )}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div
            id={`panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {items.map((item) => (
              <ServiceCard key={item.title} {...item} />
            ))}
          </div>
        </RevealOnScroll>
      </div>
      <div className="mt-20">
        <WayfindingRow nextSectionName="FAQ" nextSectionLink="/#faq" supportLinkName="SUPPORT" />
      </div>
    </section>
  );
}
