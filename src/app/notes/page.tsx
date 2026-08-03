import type { Metadata } from "next";
import { Download, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { notesContent } from "@/data/notes";

export const metadata: Metadata = {
  title: notesContent.metadataTitle,
  description: notesContent.metadataDescription,
  keywords: notesContent.entries.flatMap((note) => [
    note.courseCode,
    note.courseName,
    `${note.courseCode} ${note.courseName}`,
    `${note.courseCode} notes`,
  ]),
};

const orderedNotes = [...notesContent.entries].sort((first, second) =>
  first.courseCode.localeCompare(second.courseCode, undefined, {
    numeric: true,
    sensitivity: "base",
  }),
);

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: orderedNotes.map((note, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "LearningResource",
      name: `${note.courseCode}: ${note.courseName}`,
      learningResourceType: notesContent.learningResourceType,
      educationalLevel: note.courseCode,
      temporalCoverage: note.term,
      encodingFormat: "application/pdf",
      provider: {
        "@type": "CollegeOrUniversity",
        name: note.institution,
      },
    },
  })),
};

export default function NotesPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
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
          {orderedNotes.map((item) => (
            <article
              key={item.fileName}
              className="grid gap-4 py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center"
            >
              <div>
                <p className="font-mono text-xs uppercase text-accent">{item.courseCode}</p>
                <h3 className="mt-2 text-xl font-semibold text-text">{item.courseName}</h3>
                <p className="mt-2 text-sm text-muted">
                  {[item.institution, item.term].join(" / ")}
                </p>
              </div>
              <a
                className="focus-ring inline-flex min-h-10 w-fit items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-text transition duration-150 hover:border-accent hover:bg-raised"
                href={item.href}
                type="application/pdf"
                target="_blank"
                rel="noreferrer"
                aria-label={`${notesContent.pdfLabel}: ${item.courseCode} ${item.courseName}`}
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
