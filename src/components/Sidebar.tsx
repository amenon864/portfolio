"use client";

import Link from "next/link";
import { Command } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import { navigationIcons } from "@/components/navigationIcons";
import { navigationContent, primaryNavigation, routes } from "@/data/navigation";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { useMountedPathname } from "@/lib/useMountedPathname";

export function Sidebar() {
  const pathname = useMountedPathname();

  return (
    <aside className="site-sidebar sticky top-0 hidden h-screen border-r border-line px-5 py-7 lg:block">
      <div className="flex h-full flex-col">
        <Link href={routes.home} className="focus-ring rounded-sm">
          <p className="text-base font-semibold text-text">{profile.initials}.</p>
          <p className="mt-1 text-xs leading-5 text-muted">{profile.location}</p>
        </Link>
        <div className="mt-6">
          <ModeToggle />
        </div>
        <nav aria-label={navigationContent.primaryAriaLabel} className="mt-8 space-y-1">
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
                  "focus-ring flex items-center gap-3 rounded-md px-3 py-2 text-sm transition duration-150",
                  active
                    ? "bg-raised text-text"
                    : "text-muted hover:bg-raised hover:text-text",
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
          className="focus-ring mt-8 flex w-full items-center justify-between rounded-md border border-line px-3 py-2 text-left text-xs text-muted transition duration-150 hover:border-accent hover:text-text"
          onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
        >
          <span className="inline-flex items-center gap-2">
            <Command aria-hidden="true" size={14} />
            {navigationContent.paletteButtonLabel}
          </span>
          <span className="font-mono">{navigationContent.paletteButtonShortcut}</span>
        </button>
        <p className="mt-auto text-xs leading-5 text-muted">
          {navigationContent.paletteHint}
        </p>
      </div>
    </aside>
  );
}
