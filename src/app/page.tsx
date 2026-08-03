import { ProjectGrid } from "@/components/ProjectGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { Tag } from "@/components/Tag";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

const selectedSlugs = ["securepaste", "orbital-firmware", "algorithms", "portfolio"];
const selectedProjects = projects.filter((project) => selectedSlugs.includes(project.slug));

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-6">
        <SectionHeader title={profile.name}>
          <p>{profile.title}.</p>
          <p className="mt-3">
            I like building software close to the boundary between theory and systems:
            algorithms, embedded software, programming languages, graphics, and practical
            web tools.
          </p>
        </SectionHeader>
        <div className="flex flex-wrap gap-2">
          {profile.interests.map((interest) => (
            <Tag key={interest} tone="accent">
              {interest}
            </Tag>
          ))}
        </div>
      </section>

      <section aria-labelledby="currently-title" className="rounded-lg border border-line bg-panel p-4">
        <h2 id="currently-title" className="text-sm font-semibold text-text">
          Currently
        </h2>
        <ul className="mt-3 grid gap-2 text-sm leading-6 text-muted md:grid-cols-3">
          <li>Embedded firmware @ UW Orbital</li>
          <li>Building SecurePaste, an encrypted paste-sharing app</li>
          <li>Interested in systems, algorithms, graphics, and performance-oriented software</li>
        </ul>
      </section>

      <section aria-labelledby="selected-projects-title" className="space-y-5">
        <div>
          <p className="font-mono text-xs uppercase text-accent">Selected work</p>
          <h2 id="selected-projects-title" className="mt-2 text-2xl font-semibold text-text">
            Selected project notes
          </h2>
        </div>
        <ProjectGrid projects={selectedProjects} />
      </section>
    </div>
  );
}
