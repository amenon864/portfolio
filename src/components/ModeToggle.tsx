"use client";

import { useEffect, useState } from "react";
import {
  displayModeLabels,
  displayModes,
  getCurrentDisplayMode,
  setDisplayMode,
  type DisplayMode,
} from "@/lib/displayMode";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const [mode, setMode] = useState<DisplayMode | null>(null);

  useEffect(() => {
    setMode(getCurrentDisplayMode());

    function onModeChange(event: Event) {
      setMode((event as CustomEvent<DisplayMode>).detail);
    }

    window.addEventListener("display-mode-change", onModeChange);
    return () => window.removeEventListener("display-mode-change", onModeChange);
  }, []);

  function selectMode(nextMode: DisplayMode) {
    setMode(nextMode);
    setDisplayMode(nextMode);
  }

  return (
    <div
      className="inline-flex w-fit rounded-md border border-line bg-panel p-0.5 text-xs transition-colors duration-150"
      role="group"
      aria-label="Switch display mode"
    >
      {displayModes.map((displayMode) => {
        const active = mode === displayMode;

        return (
          <button
            key={displayMode}
            type="button"
            className={cn(
              "focus-ring min-h-8 rounded px-2.5 font-mono transition-colors duration-150",
              active
                ? "bg-raised text-accent"
                : "text-muted hover:bg-raised hover:text-text",
            )}
            aria-pressed={active}
            onClick={() => selectMode(displayMode)}
          >
            {displayModeLabels[displayMode]}
          </button>
        );
      })}
    </div>
  );
}
