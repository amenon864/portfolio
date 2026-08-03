import { ProjectGrid } from "@/components/ProjectGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { Tag } from "@/components/Tag";
import { homeContent } from "@/data/home";
import { profile } from "@/data/profile";
import { currentProjects } from "@/data/projects";

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

      {currentProjects.length > 0 ? (
        <section aria-labelledby="current-work-title" className="space-y-5">
          <h2 id="current-work-title" className="text-2xl font-semibold text-text">
            {homeContent.currentWork.heading}
          </h2>
          <ProjectGrid projects={currentProjects} />
        </section>
      ) : null}
    </div>
  );
}
