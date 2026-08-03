import { ProjectGrid } from "@/components/ProjectGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { Tag } from "@/components/Tag";
import { homeContent } from "@/data/home";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

const selectedProjects = projects.filter((project) =>
  homeContent.selectedWork.projectSlugs.includes(project.slug),
);

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-6">
        <SectionHeader title={profile.name}>
          <p>{profile.title}</p>
          {homeContent.introduction.map((paragraph) => (
            <p key={paragraph} className="mt-3">
              {paragraph}
            </p>
          ))}
        </SectionHeader>
        <div aria-label={homeContent.interestsLabel} className="flex flex-wrap gap-2">
          {profile.interests.map((interest) => (
            <Tag key={interest} tone="accent">
              {interest}
            </Tag>
          ))}
        </div>
      </section>

      {homeContent.current.items.length > 0 ? (
        <section aria-labelledby="currently-title" className="rounded-lg border border-line bg-panel p-4">
          <h2 id="currently-title" className="text-sm font-semibold text-text">
            {homeContent.current.heading}
          </h2>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-muted md:grid-cols-3">
            {homeContent.current.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {selectedProjects.length > 0 ? (
        <section aria-labelledby="selected-projects-title" className="space-y-5">
          <div>
            <p className="font-mono text-xs uppercase text-accent">
              {homeContent.selectedWork.eyebrow}
            </p>
            <h2 id="selected-projects-title" className="mt-2 text-2xl font-semibold text-text">
              {homeContent.selectedWork.heading}
            </h2>
          </div>
          <ProjectGrid projects={selectedProjects} />
        </section>
      ) : null}
    </div>
  );
}
