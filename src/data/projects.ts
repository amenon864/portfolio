export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  status: "Active" | "Complete" | "In progress" | "Concept";
  categories: string[];
  stack: string[];
  summary: string;
  privateNote?: string;
  links?: {
    github?: string;
    live?: string;
    caseStudy?: string;
  };
};

export const projectContent = {
  linkLabels: {
    github: "GitHub",
    live: "Live demo",
    caseStudy: "Case study",
  },
};

export const projects: Project[] = [
  {
    slug: "securepaste",
    title: "SecurePaste",
    subtitle: "Encrypted secret-sharing app",
    status: "In progress",
    categories: ["Web", "Security", "Databases"],
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
    summary:
      "A secure secret-sharing app built around encrypted storage, one-time links, expiry, and reliable failure handling.",
    links: {
      github: "https://github.com/amenon864/SecurePaste",
    },
  },
  {
    slug: "portfolio",
    title: "Portfolio Site",
    subtitle: "Personal project notebook",
    status: "In progress",
    categories: ["Web", "Frontend", "Design"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    summary:
      "A personal technical homepage for activity, course notes, and things I am building.",
    links: {
      github: "https://github.com/amenon864/portfolio",
    },
  },
];
