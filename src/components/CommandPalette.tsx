"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ExternalLink, Github, Mail, Search } from "lucide-react";
import { navigationIcons } from "@/components/navigationIcons";
import { navigationContent, primaryNavigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { setDisplayMode } from "@/lib/displayMode";

type CommandItem = {
  label: string;
  hint: string;
  action: () => void;
  icon?: React.ReactNode;
};

export function CommandPalette() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const commands = useMemo<CommandItem[]>(
    () => {
      const navigationCommands = primaryNavigation.map((item) => {
        const Icon = navigationIcons[item.icon];

        return {
          label: item.commandLabel,
          hint: item.commandHint,
          icon: <Icon aria-hidden="true" size={16} />,
          action: () => router.push(item.href),
        };
      });

      return [
        ...navigationCommands,
        {
          label: navigationContent.displayCommands.terminal.label,
          hint: navigationContent.displayCommands.terminal.hint,
          action: () => setDisplayMode("terminal"),
        },
        {
          label: navigationContent.displayCommands.docs.label,
          hint: navigationContent.displayCommands.docs.hint,
          action: () => setDisplayMode("docs"),
        },
        {
          label: navigationContent.copyEmailCommandLabel,
          hint: profile.email,
          icon: <Mail aria-hidden="true" size={16} />,
          action: () => navigator.clipboard.writeText(profile.email),
        },
        {
          label: navigationContent.openGitHubCommandLabel,
          hint: navigationContent.externalCommandHint,
          icon: <Github aria-hidden="true" size={16} />,
          action: () => window.location.assign(profile.github),
        },
        {
          label: navigationContent.openSourceCommandLabel,
          hint: navigationContent.externalCommandHint,
          icon: <ExternalLink aria-hidden="true" size={16} />,
          action: () => window.location.assign(profile.portfolioSource),
        },
      ];
    },
    [router],
  );

  const filteredCommands = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return commands;

    return commands.filter((command) => {
      const value = `${command.label} ${command.hint}`.toLowerCase();
      return value.includes(normalizedQuery);
    });
  }, [commands, query]);

  useEffect(() => {
    function onOpenPalette() {
      setOpen(true);
    }

    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }
    }

    window.addEventListener("open-command-palette", onOpenPalette);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("open-command-palette", onOpenPalette);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    setQuery("");
    setActiveIndex(0);
    window.setTimeout(() => inputRef.current?.focus(), 0);

    return () => {
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  if (!open) return null;

  function runCommand(command: CommandItem) {
    command.action();
    setOpen(false);
  }

  function onInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, filteredCommands.length - 1));
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    }
    if (event.key === "Enter" && filteredCommands[activeIndex]) {
      event.preventDefault();
      runCommand(filteredCommands[activeIndex]);
    }
  }

  function onDialogKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
      return;
    }

    if (event.key !== "Tab" || !panelRef.current) return;

    const focusableElements = Array.from(
      panelRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
      ),
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements.at(-1);

    if (!firstElement || !lastElement) return;
    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-[var(--scrim)] px-4 py-20"
      role="dialog"
      aria-modal="true"
      aria-labelledby="command-title"
      onMouseDown={() => setOpen(false)}
      onKeyDown={onDialogKeyDown}
    >
      <div
        ref={panelRef}
        className="mx-auto max-w-xl overflow-hidden rounded-lg border border-line bg-panel shadow-[0_18px_60px_var(--scrim)]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-line px-4 py-3">
          <Search aria-hidden="true" size={17} className="text-muted" />
          <label id="command-title" className="sr-only" htmlFor="command-input">
            {navigationContent.paletteTitle}
          </label>
          <input
            ref={inputRef}
            id="command-input"
            className="h-10 min-w-0 flex-1 bg-transparent text-sm text-text outline-none placeholder:text-muted"
            placeholder={navigationContent.palettePlaceholder}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={onInputKeyDown}
          />
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((command, index) => (
              <button
                key={`${command.label}-${command.hint}`}
                type="button"
                className={`flex w-full items-center justify-between gap-4 rounded-md px-3 py-3 text-left text-sm transition-colors duration-100 ${
                  index === activeIndex ? "bg-raised text-text" : "text-muted hover:bg-raised hover:text-text"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => runCommand(command)}
              >
                <span className="flex min-w-0 items-center gap-3">
                  {command.icon ? <span className="text-accent">{command.icon}</span> : null}
                  <span className="truncate">{command.label}</span>
                </span>
                <span className="shrink-0 font-mono text-xs text-muted">{command.hint}</span>
              </button>
            ))
          ) : (
            <p className="px-3 py-6 text-sm text-muted">
              {navigationContent.paletteEmptyMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
