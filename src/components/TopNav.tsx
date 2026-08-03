"use client";

import Link from "next/link";
import { Command } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import { navigationIcons } from "@/components/navigationIcons";
import { navigationContent, primaryNavigation, routes } from "@/data/navigation";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { useMountedPathname } from "@/lib/useMountedPathname";

export function TopNav() {
  const pathname = useMountedPathname();

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-canvas px-4 py-3 lg:hidden">
      <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-3">
          <Link href={routes.home} className="focus-ring min-w-0 rounded-sm">
            <p className="truncate text-sm font-semibold text-text">{profile.initials}.</p>
          </Link>
          <ModeToggle />
        </div>
        <nav aria-label={navigationContent.mobileAriaLabel} className="flex items-center gap-1">
          {primaryNavigation.map((item) => {
            const Icon = navigationIcons[item.icon];
            const active = pathname
              ? item.href === routes.home ? pathname === routes.home : pathname.startsWith(item.href)
              : false;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md transition duration-150",
                  active
                    ? "bg-raised text-text"
                    : "text-muted hover:bg-raised hover:text-text",
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
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md text-muted transition duration-150 hover:bg-raised hover:text-text"
            aria-label={navigationContent.paletteButtonAriaLabel}
            onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
          >
            <Command aria-hidden="true" size={17} />
          </button>
        </nav>
      </div>
    </header>
  );
}
