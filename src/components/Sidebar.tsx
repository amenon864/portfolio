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

export function Sidebar() {
  const pathname = useMountedPathname();

  return (
    <aside className="sticky top-0 hidden h-screen border-r border-line px-5 py-7 lg:block">
      <div className="flex h-full flex-col">
        <Link href="/" className="focus-ring rounded-sm">
          <p className="text-base font-semibold text-text">{profile.initials}.</p>
          <p className="mt-1 text-xs leading-5 text-muted">{profile.location}</p>
        </Link>
        <nav aria-label="Primary" className="mt-8 space-y-1">
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
                  "focus-ring flex items-center gap-3 rounded-md px-3 py-2 text-sm transition duration-150",
                  active
                    ? "bg-raised text-text"
                    : "text-muted hover:bg-raised/70 hover:text-text",
                )}
                aria-current={active ? "page" : undefined}
              >
                <Icon aria-hidden="true" size={16} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className="focus-ring mt-8 flex w-full items-center justify-between rounded-md border border-line px-3 py-2 text-left text-xs text-muted transition duration-150 hover:border-accent/40 hover:text-text"
          onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
        >
          <span className="inline-flex items-center gap-2">
            <Command aria-hidden="true" size={14} />
            Navigate
          </span>
          <span className="font-mono">Ctrl K</span>
        </button>
        <p className="mt-auto text-xs leading-5 text-muted">
          Press <span className="font-mono text-text">Ctrl+K</span> to navigate.
        </p>
      </div>
    </aside>
  );
}
