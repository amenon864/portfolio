import type { Metadata } from "next";
import { Download } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Tag } from "@/components/Tag";
import { profile } from "@/data/profile";
import { resume } from "@/data/resume";

export const metadata: Metadata = {
  title: "Background",
};

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <section aria-labelledby={`${title.toLowerCase()}-title`} className="space-y-3">
      <h2 id={`${title.toLowerCase()}-title`} className="text-sm font-semibold text-text">
        {title}
      </h2>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
    </section>
  );
}

export default function ResumePage() {
  return (
    <div className="max-w-4xl space-y-9">
      <SectionHeader eyebrow="Background" title="Notes">
        <p>{resume.summary}</p>
      </SectionHeader>

      <div className="flex flex-wrap gap-2">
        <a
          className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-text transition duration-150 hover:border-accent hover:bg-raised"
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
        >
          <Download aria-hidden="true" size={16} />
          PDF version
        </a>
      </div>

      <section aria-labelledby="experience-title" className="space-y-3">
        <h2 id="experience-title" className="text-xl font-semibold text-text">
          Work notes
        </h2>
        <ul className="space-y-2 text-muted">
          {resume.experienceHighlights.map((highlight) => (
            <li key={highlight} className="leading-7">
              {highlight}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="project-highlights-title" className="space-y-3">
        <h2 id="project-highlights-title" className="text-xl font-semibold text-text">
          Project notes
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {resume.projectHighlights.map((item) => (
            <p key={item} className="rounded-lg border border-line bg-panel p-3 text-sm leading-6 text-muted">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section aria-labelledby="skills-title" className="space-y-5">
        <h2 id="skills-title" className="text-xl font-semibold text-text">
          Tools and languages
        </h2>
        {resume.skills.map((skillGroup) => (
          <SkillGroup key={skillGroup.title} title={skillGroup.title} items={skillGroup.items} />
        ))}
      </section>
    </div>
  );
}
