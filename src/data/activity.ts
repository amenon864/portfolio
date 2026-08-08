export type EducationFact = {
  label: string;
  value: string;
};

export type CourseReference = {
  code: string;
  title: string;
  href?: string;
};

export type CourseGroup = {
  heading: string;
  courses: CourseReference[];
};

export type ActivityLink = {
  label: string;
  href: string;
  icon?: "github" | "external";
};

type ActivityEntryBase = {
  id: string;
  period: string;
  type: string;
  title: string;
  organization?: string;
  subtitle?: string;
  homeSummary?: string;
  description: string[];
  tags?: string[];
  links?: ActivityLink[];
};

export type ActivityEntry = ActivityEntryBase &
  (
    | { status: "current"; sortDate?: string }
    | { status: "upcoming"; sortDate: string }
    | { status: "past"; sortDate: string }
  );

export type RecognitionItem = {
  date?: string;
  title: string;
  detail?: string;
};

export const activityPageContent = {
  metadataTitle: "Activity",
  eyebrow: "Activity",
  title: "Activity",
  introduction: [] as string[],
  education: {
    heading: "Education",
    institution: "University of Waterloo",
    program: "Computer Science Honours, Pure Mathematics Joint Honours",
    period: "",
    description: [] as string[],
    facts: [] as EducationFact[],
    interests: {
      heading: "Mathematical interests",
      items: [] as string[],
    },
    courseGroups: [
      { heading: "Courses that shaped my interests", courses: [] },
      { heading: "Courses I want to take", courses: [] },
    ] as CourseGroup[],
    recognition: {
      heading: "Recognition",
      items: [] as RecognitionItem[],
    },
  },
  chronologyHeading: "Chronology",
};

export const activityEntries: ActivityEntry[] = [
  {
    id: "ford-fall-2026",
    status: "upcoming",
    sortDate: "2026-09",
    period: "Fall 2026",
    type: "Co-op",
    title: "Firmware Development, Ford Canada",
    homeSummary: "Firmware Development at Ford Canada — Fall 2026",
    description: [],
  },
  {
    id: "drp-fall-2026",
    status: "upcoming",
    sortDate: "2026-09",
    period: "Fall 2026",
    type: "Academic",
    title: "DRP",
    homeSummary: "Directed Research Program: Lattice Cryptography — Fall 2026",
    description: [],
  },
  {
    id: "securepaste",
    status: "current",
    period: "Present",
    type: "Project",
    title: "SecurePaste",
    subtitle: "Encrypted secret-sharing app",
    description: [
      "A secure secret-sharing app built around encrypted storage, one-time links, expiry, and reliable failure handling.",
    ],
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
    status: "current",
    period: "Present",
    type: "Project",
    title: "Portfolio Site",
    subtitle: "Personal project notebook",
    description: [
      "A personal technical homepage for my interests, activity, and current work.",
    ],
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
