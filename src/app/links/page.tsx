import type { Metadata } from "next";
import { ExternalLink, Github, Mail } from "lucide-react";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { SectionHeader } from "@/components/SectionHeader";
import { linksContent } from "@/data/links";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: linksContent.metadataTitle,
};

const linkClassName =
  "focus-ring inline-flex min-h-10 items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-text transition duration-150 hover:border-accent hover:bg-raised";

export default function LinksPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <SectionHeader eyebrow={linksContent.eyebrow} title={linksContent.title}>
        {linksContent.introduction.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </SectionHeader>

      <section aria-labelledby="links-title" className="space-y-3">
        <h2 id="links-title" className="text-xl font-semibold text-text">
          {linksContent.sectionTitle}
        </h2>
        <div className="flex flex-wrap gap-2">
          <a className={linkClassName} href={`mailto:${profile.email}`}>
            <Mail aria-hidden="true" size={16} />
            {linksContent.labels.email}
          </a>
          <CopyEmailButton />
          <a className={linkClassName} href={profile.github}>
            <Github aria-hidden="true" size={16} />
            {linksContent.labels.github}
          </a>
          <a className={linkClassName} href={profile.resumeUrl} target="_blank" rel="noreferrer">
            {linksContent.labels.resume}
          </a>
          <a className={linkClassName} href={profile.portfolioSource}>
            <ExternalLink aria-hidden="true" size={16} />
            {linksContent.labels.source}
          </a>
          <a className={linkClassName} href={profile.linkedin}>
            {linksContent.labels.linkedin}
          </a>
        </div>
      </section>
    </div>
  );
}

