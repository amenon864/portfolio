import { profile } from "@/data/profile";

export const routes = {
  home: "/",
  activity: "/activity",
  notes: "/notes",
  links: "/links",
} as const;

export type NavigationIconKey = "home" | "activity" | "notes" | "links";

export type NavigationItem = {
  href: string;
  label: string;
  commandLabel: string;
  commandHint: string;
  shortcut: string;
  icon: NavigationIconKey;
};

export const primaryNavigation: NavigationItem[] = [
  {
    href: routes.home,
    label: "Home",
    commandLabel: "Go to Home",
    commandHint: "Navigation",
    shortcut: "h",
    icon: "home",
  },
  {
    href: routes.activity,
    label: "Activity",
    commandLabel: "Go to Activity",
    commandHint: "Chronological activity",
    shortcut: "a",
    icon: "activity",
  },
  {
    href: routes.notes,
    label: "Notes",
    commandLabel: "Go to Notes",
    commandHint: "Course notes",
    shortcut: "n",
    icon: "notes",
  },
  {
    href: routes.links,
    label: "Links",
    commandLabel: "Go to Links",
    commandHint: "Contact and profiles",
    shortcut: "l",
    icon: "links",
  },
];

export const navigationContent = {
  primaryAriaLabel: "Primary",
  mobileAriaLabel: "Mobile primary",
  paletteButtonLabel: "Navigate",
  paletteButtonShortcut: "Ctrl K",
  paletteButtonAriaLabel: "Open command palette",
  paletteHint: "Press Ctrl+K to navigate.",
  paletteTitle: "Command palette",
  palettePlaceholder: "Search commands",
  paletteEmptyMessage: "No commands found.",
  displayCommands: {
    terminal: {
      label: "Use terminal display",
      hint: "Appearance",
    },
    docs: {
      label: "Use document display",
      hint: "Appearance",
    },
  },
  copyEmailCommandLabel: "Copy email address",
  openGitHubCommandLabel: "Open GitHub",
  openSourceCommandLabel: "Open site source",
  externalCommandHint: "External link",
  displayModeAriaLabel: "Switch display mode",
  contextTitle: "Current page",
  contextDefaultLabel: "Home",
  quickLinksTitle: "Quick links",
  interestsTitle: "Interests",
  footerAriaLabel: "Footer",
};

export type FooterLink = {
  label: string;
  href: string;
  kind: "internal" | "external" | "document";
  icon?: "github";
};

export const footerLinks: FooterLink[] = [
  { label: "Activity", href: routes.activity, kind: "internal" },
  { label: "Notes", href: routes.notes, kind: "internal" },
  { label: "Links", href: routes.links, kind: "internal" },
  { label: "Resume PDF", href: profile.resumeUrl, kind: "document" },
  { label: "Source", href: profile.portfolioSource, kind: "external", icon: "github" },
];

export const externalQuickLinks = [
  { label: "GitHub", href: profile.github },
];
