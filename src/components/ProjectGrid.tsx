"use client";

import { useMemo, useState } from "react";
import { FilterTabs, type ProjectFilter } from "@/components/FilterTabs";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/data/projects";

type ProjectGridProps = {
  projects: Project[];
  withFilters?: boolean;
};

function matchesFilter(project: Project, filter: ProjectFilter) {
  if (filter === "All") return true;
  return project.categories.includes(filter);
}

export function ProjectGrid({ projects, withFilters = false }: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const visibleProjects = useMemo(
    () => projects.filter((project) => matchesFilter(project, activeFilter)),
    [projects, activeFilter],
  );

  return (
    <div className="space-y-5">
      {withFilters ? <FilterTabs active={activeFilter} onChange={setActiveFilter} /> : null}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      {visibleProjects.length === 0 ? (
        <p className="rounded-lg border border-line bg-panel p-4 text-sm text-muted">
          No projects match this filter yet.
        </p>
      ) : null}
    </div>
  );
}
