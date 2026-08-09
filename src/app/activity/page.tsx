import type { Metadata } from "next";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Tag } from "@/components/Tag";
import { activityEntries, activityPageContent } from "@/data/activity";
import { routes } from "@/data/navigation";

export const metadata: Metadata = {
  title: activityPageContent.metadataTitle,
  alternates: {
    canonical: routes.activity,
  },
};

const populatedCourseGroups = activityPageContent.education.courseGroups.filter(
  (group) => group.courses.length > 0,
);
const statusOrder = { upcoming: 0, current: 1, past: 2 } as const;
const chronologicalEntries = [...activityEntries].sort((first, second) => {
  if (first.status !== second.status) return statusOrder[first.status] - statusOrder[second.status];
  return (second.sortDate ?? "").localeCompare(first.sortDate ?? "");
});

export default function ActivityPage() {
  return (
    <div className="max-w-4xl space-y-10">
      <SectionHeader eyebrow={activityPageContent.eyebrow} title={activityPageContent.title}>
        {activityPageContent.introduction.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </SectionHeader>

      <section aria-labelledby="education-title" className="space-y-5 border-y border-line py-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 id="education-title" className="text-xl font-semibold text-text">
              {activityPageContent.education.heading}
            </h2>
            <p className="mt-3 text-base font-medium text-text">
              {activityPageContent.education.institution}
            </p>
            <p className="mt-1 text-sm leading-6 text-muted">
              {activityPageContent.education.program}
            </p>
          </div>
          {activityPageContent.education.period ? (
            <p className="font-mono text-xs text-muted">{activityPageContent.education.period}</p>
          ) : null}
        </div>

        {activityPageContent.education.description.length > 0 ? (
          <div className="max-w-3xl space-y-3 text-sm leading-7 text-muted">
            {activityPageContent.education.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : null}

        {activityPageContent.education.facts.length > 0 ? (
          <dl className="grid gap-3 sm:grid-cols-2">
            {activityPageContent.education.facts.map((fact) => (
              <div key={fact.label} className="border-l border-line pl-3">
                <dt className="font-mono text-xs uppercase text-subtle">{fact.label}</dt>
                <dd className="mt-1 text-sm text-muted">{fact.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        {populatedCourseGroups.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2">
            {populatedCourseGroups.map((group, index) => (
              <section
                key={group.heading}
                aria-labelledby={`course-group-${index}`}
                className="sm:col-span-2"
              >
                <h3 id={`course-group-${index}`} className="text-sm font-semibold text-text">
                  {group.heading}
                </h3>
                <ul className="mt-3 grid gap-x-5 gap-y-2 text-sm text-muted sm:grid-cols-2">
                  {group.courses.map((course) => (
                    <li key={`${course.code}-${course.title}`}>
                      {course.href ? (
                        <a className="focus-ring rounded-sm hover:text-text" href={course.href}>
                          <span className="font-mono text-xs text-accent">{course.code}</span>{" "}
                          {course.title}
                        </a>
                      ) : (
                        <>
                          <span className="font-mono text-xs text-accent">{course.code}</span>{" "}
                          {course.title}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        ) : null}
      </section>

      {activityPageContent.recognition.items.length > 0 ? (
        <section aria-labelledby="recognition-title" className="space-y-3">
          <h2 id="recognition-title" className="text-xl font-semibold text-text">
            {activityPageContent.recognition.heading}
          </h2>
          <ul className="space-y-2">
            {activityPageContent.recognition.items.map((item) => (
              <li
                key={`${item.date}-${item.title}`}
                className="grid gap-1 text-sm sm:grid-cols-[120px_minmax(0,1fr)]"
              >
                <span className="font-mono text-xs text-accent">{item.date}</span>
                <span className="text-muted">
                  <strong className="font-medium text-text">{item.title}</strong>
                  {item.detail ? ` - ${item.detail}` : null}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {chronologicalEntries.length > 0 ? (
        <section aria-labelledby="timeline-title" className="space-y-5">
          <h2 id="timeline-title" className="text-xl font-semibold text-text">
            {activityPageContent.chronologyHeading}
          </h2>
          <div className="divide-y divide-line border-y border-line">
            {chronologicalEntries.map((entry) => (
              <article
                key={entry.id}
                className="grid gap-4 py-5 sm:grid-cols-[150px_minmax(0,1fr)]"
              >
                <div>
                  <p className="font-mono text-xs text-accent">{entry.period}</p>
                  <p className="mt-2 font-mono text-[11px] uppercase text-subtle">{entry.type}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text">{entry.title}</h3>
                  {entry.subtitle ? (
                    <p className="mt-1 text-sm text-muted">{entry.subtitle}</p>
                  ) : null}
                  {entry.organization ? (
                    <p className="mt-1 text-sm text-muted">{entry.organization}</p>
                  ) : null}
                  <div className="mt-3 space-y-3 text-sm leading-7 text-muted">
                    {entry.description.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {entry.tags && entry.tags.length > 0 ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  ) : null}
                  {entry.links && entry.links.length > 0 ? (
                    <div className="mt-4 flex flex-wrap gap-4 text-sm">
                      {entry.links.map((link) => (
                        <a
                          key={link.href}
                          className="focus-ring inline-flex items-center gap-1 rounded-sm text-muted hover:text-text"
                          href={link.href}
                        >
                          {link.icon === "github" ? (
                            <Github aria-hidden="true" size={14} />
                          ) : (
                            <ExternalLink aria-hidden="true" size={13} />
                          )}
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
