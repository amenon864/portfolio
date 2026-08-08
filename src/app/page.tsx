import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { Tag } from "@/components/Tag";
import { activityEntries } from "@/data/activity";
import { homeContent } from "@/data/home";
import { profile } from "@/data/profile";
import { routes } from "@/data/navigation";

export const metadata: Metadata = {
  alternates: {
    canonical: routes.home,
  },
};

const homeCurrentItems = activityEntries
  .filter((entry) => entry.status === "current" && entry.homeSummary)
  .slice(0, homeContent.current.maxItems);
const homeUpcomingItems = activityEntries
  .filter((entry) => entry.status === "upcoming" && entry.homeSummary)
  .slice(0, homeContent.upcoming.maxItems);

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

      {homeCurrentItems.length > 0 ? (
        <section aria-labelledby="currently-title" className="border-y border-line py-5">
          <h2 id="currently-title" className="text-xl font-semibold text-text">
            {homeContent.current.heading}
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
            {homeCurrentItems.map((item) => (
              <li key={item.id} className="grid grid-cols-[1rem_minmax(0,1fr)] gap-2">
                <span aria-hidden="true" className="font-mono text-accent">
                  &gt;
                </span>
                <span>{item.homeSummary}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {homeUpcomingItems.length > 0 ? (
        <section aria-labelledby="upcoming-title" className="border-y border-line py-5">
          <h2 id="upcoming-title" className="text-xl font-semibold text-text">
            {homeContent.upcoming.heading}
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
            {homeUpcomingItems.map((item) => (
              <li key={item.id} className="grid grid-cols-[1rem_minmax(0,1fr)] gap-2">
                <span aria-hidden="true" className="font-mono text-accent">
                  &gt;
                </span>
                <span>{item.homeSummary}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
