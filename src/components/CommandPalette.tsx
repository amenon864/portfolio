"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ExternalLink, Github, Mail, Search } from "lucide-react";
import { profile } from "@/data/profile";

type CommandItem = {
  label: string;
  hint: string;
  action: () => void;
  icon?: React.ReactNode;
};

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName.toLowerCase();
  return tag === "input" || tag === "textarea" || tag === "select" || target.isContentEditable;
}

export function CommandPalette() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const commands = useMemo<CommandItem[]>(
    () => [
      { label: "Go to Home", hint: "Navigation", action: () => router.push("/") },
      { label: "Go to Projects", hint: "Navigation", action: () => router.push("/projects") },
      { label: "Go to Resume", hint: "Navigation", action: () => router.push("/resume") },
      { label: "Go to Contact", hint: "Navigation", action: () => router.push("/contact") },
      {
        label: "Copy email",
        hint: profile.email,
        icon: <Mail aria-hidden="true" size={16} />,
        action: () => navigator.clipboard.writeText(profile.email),
      },
      {
        label: "Open GitHub",
        hint: "External",
        icon: <Github aria-hidden="true" size={16} />,
        action: () => window.location.assign(profile.github),
      },
      {
        label: "Open portfolio source",
        hint: "External",
        icon: <ExternalLink aria-hidden="true" size={16} />,
        action: () => window.location.assign(profile.portfolioSource),
      },
    ],
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
        return;
      }

      if (!open || isTypingTarget(event.target)) return;
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("open-command-palette", onOpenPalette);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("open-command-palette", onOpenPalette);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setActiveIndex(0);
    window.setTimeout(() => inputRef.current?.focus(), 0);
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
    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
    }
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

  return (
    <div
      className="fixed inset-0 z-50 bg-black/55 px-4 py-20"
      role="dialog"
      aria-modal="true"
      aria-labelledby="command-title"
      onMouseDown={() => setOpen(false)}
    >
      <div
        className="mx-auto max-w-xl overflow-hidden rounded-lg border border-line bg-panel shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-line px-4 py-3">
          <Search aria-hidden="true" size={17} className="text-muted" />
          <label id="command-title" className="sr-only" htmlFor="command-input">
            Command palette
          </label>
          <input
            ref={inputRef}
            id="command-input"
            className="h-10 min-w-0 flex-1 bg-transparent text-sm text-text outline-none placeholder:text-muted"
            placeholder="Search commands or projects"
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
                className={`flex w-full items-center justify-between gap-4 rounded-md px-3 py-3 text-left text-sm transition duration-100 ${
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
            <p className="px-3 py-6 text-sm text-muted">No commands found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
