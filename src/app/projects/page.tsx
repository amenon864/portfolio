import type { Metadata } from "next";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <SectionHeader eyebrow="Project index" title="Technical work">
        <p>
          Compact project cards focused on architecture, constraints, implementation
          details, and proof of work.
        </p>
      </SectionHeader>
      <ProjectGrid projects={projects} />
    </div>
  );
}
