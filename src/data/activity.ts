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
    description: [
      "I will be joining Ford Canada for a firmware "
      + "development co-op in Fall 2026."
    ],
  },
  {
    id: "drp-fall-2026",
    status: "upcoming",
    sortDate: "2026-09",
    period: "Fall 2026",
    type: "Academic",
    title: "DRP",
    homeSummary: "Directed Research Program: Lattice Cryptography — Fall 2026",
    description: [
      "I will be taking part in a Directed Research Program "
      + "on lattice cryptography in Fall 2026."
    ],
  },
  {
    id: "securepaste",
    status: "current",
    period: "Present",
    type: "Project",
    title: "SecurePaste",
    subtitle: "Encrypted secret-sharing app",
    description: [
      "SecurePaste is an expiring secret-sharing web app "
      + "I  built as a security-focused project. "
      + "Secret contents are encrypted before being "
      + "stored, access tokens are hashed rather "
      + "than stored directly in the database, and "
      + "links support expiration, revocation, and "
      + "view limits. I also worked through the "
      + "concurrency needed to make one-time and "
      + "view-limited links behave correctly under "
      + "PostgreSQL. I consider it a completed prototype "
      + "rather than something I would use for real "
      + "secrets, since there are issues with token "
      + "handling and client-side caching. It would take "
      + "additional security hardening to get it "
      + "production-ready."
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
