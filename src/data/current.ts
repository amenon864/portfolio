export type CurrentSurface = "home" | "activity";

export type CurrentItem = {
  id: string;
  title: string;
  homeSummary: string;
  surfaces: CurrentSurface[];
  subtitle?: string;
  description?: string;
  tags?: string[];
  links?: Array<{
    label: string;
    href: string;
    icon: "github" | "external";
  }>;
};

export const currentItems: CurrentItem[] = [
  {
    id: "securepaste",
    title: "SecurePaste",
    homeSummary: "Building SecurePaste, an encrypted secret-sharing application.",
    surfaces: ["home", "activity"],
    subtitle: "Encrypted secret-sharing app",
    description:
      "A secure secret-sharing app built around encrypted storage, one-time links, expiry, and reliable failure handling.",
    tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/amenon864/SecurePaste",
        icon: "github",
      },
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio Site",
    homeSummary: "Developing this site as a personal technical homepage.",
    surfaces: ["home", "activity"],
    subtitle: "Personal project notebook",
    description: "A personal technical homepage for my interests, activity, and current work.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/amenon864/portfolio",
        icon: "github",
      },
    ],
  },
];
