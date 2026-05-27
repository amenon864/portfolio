import Link from "next/link";
import { Github } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mt-14 border-t border-line pt-5 text-sm text-muted">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>{profile.name}</p>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-4">
          <a className="focus-ring rounded-sm hover:text-text" href={profile.github}>
            GitHub
          </a>
          <Link className="focus-ring rounded-sm hover:text-text" href="/resume">
            Resume
          </Link>
          <a
            className="focus-ring inline-flex items-center gap-1 rounded-sm hover:text-text"
            href={profile.portfolioSource}
          >
            <Github aria-hidden="true" size={14} />
            Source
          </a>
        </nav>
      </div>
    </footer>
  );
}
