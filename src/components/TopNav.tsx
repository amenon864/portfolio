"use client";

import Link from "next/link";
import { Command, FileText, FolderKanban, Home, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { useMountedPathname } from "@/lib/useMountedPathname";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/resume", label: "Resume", icon: FileText },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function TopNav() {
  const pathname = useMountedPathname();

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-canvas/95 px-4 py-3 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-3">
        <Link href="/" className="focus-ring min-w-0 rounded-sm">
          <p className="truncate text-sm font-semibold text-text">{profile.initials}.</p>
        </Link>
        <nav aria-label="Mobile primary" className="flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname
              ? item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
              : false;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md transition duration-150",
                  active
                    ? "bg-raised text-text"
                    : "text-muted hover:bg-raised/70 hover:text-text",
                )}
                aria-label={item.label}
                aria-current={active ? "page" : undefined}
              >
                <Icon aria-hidden="true" size={17} />
              </Link>
            );
          })}
          <button
            type="button"
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md text-muted transition duration-150 hover:bg-raised/70 hover:text-text"
            aria-label="Open command palette"
            onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
          >
            <Command aria-hidden="true" size={17} />
          </button>
        </nav>
      </div>
    </header>
  );
}
