export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  status: "Active" | "Complete" | "In progress" | "Concept";
  categories: string[];
  stack: string[];
  summary: string;
  highlights: string[];
  privateNote?: string;
  links?: {
    github?: string;
    live?: string;
    caseStudy?: string;
  };
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
    highlights: [
      "Designed frontend/backend split",
      "Uses database-backed paste storage",
      "Built with deployment and containerization in mind"
    ],
    links: {
      github: "https://github.com/amenon864/SecurePaste",
    },
  },
  {
    slug: "portfolio",
    title: "Portfolio Site",
    subtitle: "Fast technical workbench for my projects",
    status: "In progress",
    categories: ["Web", "Frontend", "Design"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    summary:
      "This site! Currently empty, but I have plans for it.",
    highlights: [
      "Built with Next.js App Router, TypeScript, and Tailwind CSS",
      "Designed around compact project cards and evidence-focused writing",
      "Includes optional command palette and keyboard navigation"
    ],
    links: {
      github: "https://github.com/amenon864/portfolio",
    },
  },
];
