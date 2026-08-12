import React from "react";

interface WayfindingRowProps {
  nextSectionName: string;
  nextSectionLink?: string;
  supportLinkName?: string;
  supportLinkHref?: string;
}

export function WayfindingRow({
  nextSectionName,
  nextSectionLink = "#",
  supportLinkName = "SUPPORT",
  supportLinkHref = "/contact",
}: WayfindingRowProps) {
  return (
    <div className="border-t border-[var(--border-subtle)] w-full">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-5 py-4 sm:px-8">
        <a href={nextSectionLink} className="flex items-center gap-3 group no-underline cursor-pointer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] transition-colors"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
          <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
            {nextSectionName}
          </span>
        </a>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--text-tertiary)] hidden sm:block">
            {supportLinkName}
          </span>
          <a href={supportLinkHref} className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors cursor-pointer bg-transparent">
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}
