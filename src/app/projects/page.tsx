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
      <SectionHeader eyebrow="Project archive" title="Projects">
        <p>
          A compact index of projects, experiments, and notes from things I have
          been building.
        </p>
      </SectionHeader>
      <ProjectGrid projects={projects} />
    </div>
  );
}
