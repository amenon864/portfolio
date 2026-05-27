import type { Metadata } from "next";
import Link from "next/link";
import { Download, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Tag } from "@/components/Tag";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Resume",
};

const languages = ["C", "C++", "Python", "Racket", "SQL", "TypeScript", "CSS", "Shell"];
const technologies = ["Next.js", "FastAPI", "PostgreSQL", "Docker", "OpenCV", "Git", "Linux", "I2C"];
const interests = ["systems", "algorithms", "embedded software", "graphics", "programming languages"];

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
      <SectionHeader eyebrow="Resume" title="Technical summary">
        <p>
          Computer Science student at the University of Waterloo focused on systems,
          algorithms, embedded software, graphics, programming languages, and practical
          web tools.
        </p>
      </SectionHeader>

      <div className="flex flex-wrap gap-2">
        <a
          className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-text transition duration-150 hover:border-accent/50 hover:bg-raised"
          href={profile.resumeUrl}
        >
          <Download aria-hidden="true" size={16} />
          Resume PDF
        </a>
        <Link
          className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-text transition duration-150 hover:border-accent/50 hover:bg-raised"
          href="/projects"
        >
          <ExternalLink aria-hidden="true" size={16} />
          Project index
        </Link>
      </div>

      <section aria-labelledby="experience-title" className="space-y-3">
        <h2 id="experience-title" className="text-xl font-semibold text-text">
          Experience highlights
        </h2>
        <ul className="space-y-2 text-muted">
          <li className="leading-7">
            Embedded firmware @ UW Orbital, including hardware-facing C, I2C sensor
            communication, and overtemperature event handling.
          </li>
          <li className="leading-7">
            Competitive programming and algorithmic problem solving, including a top 25
            finish at Waterloo&apos;s local ICPC contest.
          </li>
          <li className="leading-7">
            Full-stack project work with typed frontend code, API design, PostgreSQL, and
            Dockerized local development.
          </li>
        </ul>
      </section>

      <section aria-labelledby="project-highlights-title" className="space-y-3">
        <h2 id="project-highlights-title" className="text-xl font-semibold text-text">
          Project highlights
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "SecurePaste: encrypted paste-sharing app with full-stack architecture.",
            "UW Orbital Firmware: thermal monitoring firmware around low-level sensor communication.",
            "Interpreter: language semantics, parsing, environments, and recursive evaluation.",
            "Portfolio Site: static content architecture, responsive layout, and accessible navigation.",
          ].map((item) => (
            <p key={item} className="rounded-lg border border-line bg-panel p-3 text-sm leading-6 text-muted">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section aria-labelledby="skills-title" className="space-y-5">
        <h2 id="skills-title" className="text-xl font-semibold text-text">
          Skills
        </h2>
        <SkillGroup title="Languages" items={languages} />
        <SkillGroup title="Technologies" items={technologies} />
        <SkillGroup title="Interests" items={interests} />
      </section>
    </div>
  );
}
