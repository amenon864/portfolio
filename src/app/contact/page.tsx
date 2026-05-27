import type { Metadata } from "next";
import { ExternalLink, Github, Mail } from "lucide-react";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { SectionHeader } from "@/components/SectionHeader";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <SectionHeader eyebrow="Contact" title="Get in touch">
        <p>
          Interested in software engineering, systems, algorithms, embedded
          software, and research-oriented technical work.
        </p>
      </SectionHeader>

      <section aria-labelledby="contact-links-title" className="space-y-3">
        <h2 id="contact-links-title" className="text-xl font-semibold text-text">
          Links
        </h2>
        <div className="flex flex-wrap gap-2">
          <a
            className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-text transition duration-150 hover:border-accent/50 hover:bg-raised"
            href={`mailto:${profile.email}`}
          >
            <Mail aria-hidden="true" size={16} />
            Email
          </a>
          <CopyEmailButton />
          <a
            className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-text transition duration-150 hover:border-accent/50 hover:bg-raised"
            href={profile.github}
          >
            <Github aria-hidden="true" size={16} />
            GitHub
          </a>
          <a
            className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-text transition duration-150 hover:border-accent/50 hover:bg-raised"
            href={profile.resumeUrl}
          >
            Resume
          </a>
          <a
            className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-text transition duration-150 hover:border-accent/50 hover:bg-raised"
            href={profile.portfolioSource}
          >
            <ExternalLink aria-hidden="true" size={16} />
            Portfolio source
          </a>
          <a
            className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-text transition duration-150 hover:border-accent/50 hover:bg-raised"
            href={profile.linkedin}
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
