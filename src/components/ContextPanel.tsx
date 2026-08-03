"use client";

import { ExternalLink } from "lucide-react";
import { Tag } from "@/components/Tag";
import {
  externalQuickLinks,
  navigationContent,
  primaryNavigation,
  routes,
} from "@/data/navigation";
import { profile } from "@/data/profile";
import { useMountedPathname } from "@/lib/useMountedPathname";

function currentPageLabel(pathname: string) {
  const item = primaryNavigation.find((navigationItem) =>
    navigationItem.href === routes.home
      ? pathname === routes.home
      : pathname.startsWith(navigationItem.href),
  );

  return item?.label ?? navigationContent.contextDefaultLabel;
}
export function ContextPanel() {
  const pathname = useMountedPathname();
  const label = currentPageLabel(pathname ?? routes.home);

  return (
    <aside className="site-context hidden border-l border-line px-5 py-10 xl:block">
      <div className="sticky top-10 space-y-8">
        <section aria-labelledby="focus-title">
          <h2 id="focus-title" className="text-xs font-semibold uppercase text-muted">
            {navigationContent.contextTitle}
          </h2>
          <p className="mt-3 text-sm leading-6 text-text">{label}</p>
        </section>
        <section aria-labelledby="quick-links-title">
          <h2 id="quick-links-title" className="text-xs font-semibold uppercase text-muted">
            {navigationContent.quickLinksTitle}
          </h2>
          <div className="mt-3 space-y-2 text-sm">
            {externalQuickLinks.map((link) => (
              <a
                key={link.href}
                className="focus-ring inline-flex items-center gap-1 rounded-sm text-muted hover:text-text"
                href={link.href}
              >
                {link.label} <ExternalLink aria-hidden="true" size={13} />
              </a>
            ))}
          </div>
        </section>
        <section aria-labelledby="interests-title">
          <h2 id="interests-title" className="text-xs font-semibold uppercase text-muted">
            {navigationContent.interestsTitle}
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {profile.interests.map((interest) => (
              <Tag key={interest}>{interest}</Tag>
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
}
