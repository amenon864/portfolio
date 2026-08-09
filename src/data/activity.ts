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
  introduction: [
    "A selective record of projects, research, "
    + "co-op work, and academic activities I've been "
    + "a part of.",
  ],
  education: {
    heading: "Education",
    institution: "University of Waterloo",
    program: "Computer Science Honours, Pure Mathematics Joint Honours",
    period: "September 2025 - April 2030",
    description: [
      "My main mathematical interests are analysis, "
      + "graph theory, and logic, especially "
      + "computability and formal reasoning.",
      "In computer science, I’m most interested in "
      + "algorithms, programming languages, embedded "
      + "systems, and lower-level software.",
    ],
    facts: [
      { label: "Expected graduation", value: "2030" },
      { label: "Program type", value: "Co-op" },
    ] as EducationFact[],
    courseGroups: [
      {
        heading: "Courses that shaped my interests",
        courses: [
          { code: "MATH 145", title: "Algebra (Advanced Level)" },
          { code: "MATH 147/148/247", title: "Calculus (Advanced Level)" },          {
            code: "MATH 249",
            title: "Introduction to Combinatorics (Advanced Level)",
          },
          {
            code: "CS 146",
            title: "Elementary Algorithm Design and Data Abstraction (Advanced Level)",
          },
          { code: "CS 245", title: "Logic and Computation" },
        ],
      },
    ] as CourseGroup[],
  },
  recognition: {
    heading: "Recognition",
    items: [
      {
        date: "October 2025",
        title: "Waterloo ICPC Local Contest",
        detail: "Placed 22nd out of 100+ participants.",
      },
      {
        date: "February 2025",
        title: "Indian National Olympiad in Informatics",
        detail: "Received a Bronze Medal.",
      },
      {
        date: "September 2024",
        title: "Qatar Collegiate Programming Contest",
        detail: "Placed 1st as a team.",
      },
    ] as RecognitionItem[],
  },
  chronologyHeading: "Chronology",
};

export const activityEntries: ActivityEntry[] = [
  {
    id: "ford-fall-2026",
    status: "upcoming",
    sortDate: "2026-09",
    period: "September–December 2026",
    type: "Co-op",
    title: "Firmware Development",
    organization: "Ford Canada",
    homeSummary: "Firmware Development at Ford Canada — Fall 2026",
    description: [
      "I will be joining Ford Canada for a firmware "
      + "development co-op in Fall 2026."
    ],
    tags: ["Firmware", "Embedded Systems"],
  },
  {
    id: "drp-fall-2026",
    status: "upcoming",
    sortDate: "2026-09",
    period: "Fall 2026",
    type: "Research",
    title: "Introduction to Lattice Cryptography",
    organization: "University of Waterloo",
    homeSummary: "Directed Research Program: Lattice Cryptography — Fall 2026",
    description: [
      "I will be taking part in a Directed Research Program "
      + "on lattice cryptography in Fall 2026."
    ],
    tags: ["Lattice Cryptography"],
  },
  {
    id: "securepaste",
    status: "past",
    sortDate: "2026-05",
    period: "May 2026",
    type: "Project",
    title: "SecurePaste",
    subtitle: "Encrypted secret-sharing app",
    description: [
      "SecurePaste is an expiring secret-sharing web app "
      + "I built as a security-focused project. "
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
    tags: [
      "Security",
      "Cryptography",
      "FastAPI",
      "Next.js",
      "PostgreSQL",
    ],
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
