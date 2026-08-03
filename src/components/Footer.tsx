import Link from "next/link";
import { Github } from "lucide-react";
import { footerLinks, navigationContent } from "@/data/navigation";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mt-14 border-t border-line pt-5 text-sm text-muted">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>{profile.name}</p>
        <nav aria-label={navigationContent.footerAriaLabel} className="flex flex-wrap items-center gap-4">
          {footerLinks.map((link) => {
            const contents = (
              <>
                {link.icon === "github" ? <Github aria-hidden="true" size={14} /> : null}
                {link.label}
              </>
            );
            const className =
              "focus-ring inline-flex items-center gap-1 rounded-sm hover:text-text";

            return link.kind === "internal" ? (
              <Link key={link.href} className={className} href={link.href}>
                {contents}
              </Link>
            ) : (
              <a
                key={link.href}
                className={className}
                href={link.href}
                target={link.kind === "document" ? "_blank" : undefined}
                rel={link.kind === "document" ? "noreferrer" : undefined}
              >
                {contents}
              </a>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
