export const displayModes = ["terminal", "docs"] as const;

export type DisplayMode = (typeof displayModes)[number];

export const displayModeLabels: Record<DisplayMode, string> = {
  terminal: "Terminal",
  docs: "Paper",
};

const storageKey = "display-mode";

export function isDisplayMode(value: string | null): value is DisplayMode {
  return value === "terminal" || value === "docs";
}

export function getStoredDisplayMode(): DisplayMode | null {
  const storedMode = window.localStorage.getItem(storageKey);
  return isDisplayMode(storedMode) ? storedMode : null;
}

export function getCurrentDisplayMode(): DisplayMode {
  const documentMode = document.documentElement.dataset.mode ?? null;
  if (isDisplayMode(documentMode)) return documentMode;
  return getStoredDisplayMode() ?? "terminal";
}

export function setDisplayMode(mode: DisplayMode) {
  document.documentElement.dataset.mode = mode;
  window.localStorage.setItem(storageKey, mode);
  window.dispatchEvent(new CustomEvent<DisplayMode>("display-mode-change", { detail: mode }));
}
