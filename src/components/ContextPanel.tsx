"use client";

import { ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";
import { useMountedPathname } from "@/lib/useMountedPathname";
import { Tag } from "@/components/Tag";

function currentFocus(pathname: string) {
  if (pathname.startsWith("/resume")) return "Background";
  if (pathname.startsWith("/contact")) return "Links";
  return "Workspace";
}

export function ContextPanel() {
  const pathname = useMountedPathname();
  const focus = currentFocus(pathname ?? "/");

  return (
    <aside className="hidden border-l border-line px-5 py-10 xl:block">
      <div className="sticky top-10 space-y-8">
        <section aria-labelledby="focus-title">
          <h2 id="focus-title" className="text-xs font-semibold uppercase text-muted">
            Current page
          </h2>
          <p className="mt-3 text-sm leading-6 text-text">{focus}</p>
        </section>
        <section aria-labelledby="quick-links-title">
          <h2 id="quick-links-title" className="text-xs font-semibold uppercase text-muted">
            Quick links
          </h2>
          <div className="mt-3 space-y-2 text-sm">
            <a
              className="focus-ring inline-flex items-center gap-1 rounded-sm text-muted hover:text-text"
              href={profile.github}
            >
              GitHub <ExternalLink aria-hidden="true" size={13} />
            </a>
          </div>
        </section>
        <section aria-labelledby="interests-title">
          <h2 id="interests-title" className="text-xs font-semibold uppercase text-muted">
            Interests
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
