"use client";

import { cn } from "@/lib/utils";

export const projectFilters = [
  "All",
  "Systems",
  "Web",
  "Algorithms",
  "Embedded",
  "Programming Languages",
  "Security",
  "Frontend",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];

type FilterTabsProps = {
  active: ProjectFilter;
  onChange: (filter: ProjectFilter) => void;
};

export function FilterTabs({ active, onChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
      {projectFilters.map((filter) => (
        <button
          key={filter}
          type="button"
          role="tab"
          aria-selected={active === filter}
          className={cn(
            "focus-ring min-h-9 rounded-md border px-3 py-1.5 text-sm transition duration-150",
            active === filter
              ? "border-accent/50 bg-accent/10 text-accent"
              : "border-line bg-panel text-muted hover:border-accent/40 hover:text-text",
          )}
          onClick={() => onChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
