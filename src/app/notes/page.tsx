import type { Metadata } from "next";
import { Download, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { notesContent } from "@/data/notes";

export const metadata: Metadata = {
  title: notesContent.metadataTitle,
};

export default function NotesPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <SectionHeader eyebrow={notesContent.eyebrow} title={notesContent.title}>
        {notesContent.introduction.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </SectionHeader>

      <section aria-labelledby="notes-title" className="space-y-3">
        <h2 id="notes-title" className="sr-only">
          {notesContent.availableNotesLabel}
        </h2>
        <div className="divide-y divide-line border-y border-line">
          {notesContent.entries.map((item) => (
            <article
              key={item.fileName}
              className="grid gap-4 py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center"
            >
              <div>
                <p className="font-mono text-xs uppercase text-accent">{item.courseCode}</p>
                <h3 className="mt-2 text-xl font-semibold text-text">{item.courseName}</h3>
                <p className="mt-2 text-sm text-muted">
                  {[item.institution, item.term].filter(Boolean).join(" / ")}
                </p>
              </div>
              <a
                className="focus-ring inline-flex min-h-10 w-fit items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-text transition duration-150 hover:border-accent hover:bg-raised"
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                <Download aria-hidden="true" size={16} />
                {notesContent.pdfLabel}
                <ExternalLink aria-hidden="true" size={14} />
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
