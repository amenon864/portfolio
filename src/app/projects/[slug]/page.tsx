import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Tag } from "@/components/Tag";
import { getProject, projects, type Project } from "@/data/projects";
import { isExternalUrl } from "@/lib/utils";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

const whyBySlug: Record<string, string> = {
  securepaste:
    "This project is a practical way to connect frontend usability, backend API shape, database persistence, and security-conscious product decisions in one deployable system.",
  "orbital-firmware":
    "Firmware work makes software constraints concrete: timing, bus communication, hardware behavior, and failure handling all matter at once.",
  interpreter:
    "Interpreters are a compact way to study how syntax becomes structure, how environments model state, and how language rules turn into executable behavior.",
  algorithms:
    "Algorithmic problem solving builds the habit of finding the shape of a problem before writing code, then choosing data structures that make the solution efficient.",
  portfolio:
    "The portfolio is intentionally part of the body of work: it shows frontend architecture, static content design, accessibility, and restraint in a small public codebase.",
};

const technicalBySlug: Record<string, string[]> = {
  securepaste: [
    "Frontend and backend split designed around clear API boundaries.",
    "Database-backed paste storage with deployment and local development in mind.",
    "Containerized development flow so services can be run consistently.",
  ],
  "orbital-firmware": [
    "I2C communication with an LM75BD temperature sensor.",
    "Periodic thermal management logic for sensor reads and state updates.",
    "Interrupt-driven overtemperature handling for event-oriented firmware behavior.",
  ],
  interpreter: [
    "Programs are represented structurally through parsed forms and AST-like data.",
    "Evaluation follows recursive rules over expressions, environments, and values.",
    "The project emphasizes semantics and implementation clarity over surface syntax.",
  ],
  algorithms: [
    "Practice spans data structures, graph/search patterns, dynamic programming, and optimization.",
    "Contest settings force fast decomposition, correctness checks, and efficient implementation.",
    "The work is measured through solved problems and timed performance, not presentation polish.",
  ],
  portfolio: [
    "Next.js App Router routes render mostly as server components.",
    "TypeScript data files drive project cards and detail pages.",
    "Tailwind CSS handles a responsive workbench layout with minimal client JavaScript.",
    "Reusable components keep cards, tags, filters, shell navigation, and footer links easy to extend.",
  ],
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return {
    title: project ? project.title : "Project",
    description: project?.summary,
  };
}

function LinkButton({ href, children, icon }: { href: string; children: React.ReactNode; icon?: React.ReactNode }) {
  const className =
    "focus-ring inline-flex min-h-10 items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-text transition duration-150 hover:border-accent/50 hover:bg-raised";

  if (isExternalUrl(href)) {
    return (
      <a className={className} href={href}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {icon}
      {children}
    </Link>
  );
}

function ProofLinks({ project }: { project: Project }) {
  const links = project.links;

  return (
    <div className="flex flex-wrap gap-2">
      {links?.github ? (
        <LinkButton href={links.github} icon={<Github aria-hidden="true" size={16} />}>
          GitHub
        </LinkButton>
      ) : null}
      {links?.live ? (
        <LinkButton href={links.live} icon={<ExternalLink aria-hidden="true" size={16} />}>
          Live demo
        </LinkButton>
      ) : null}
      {links?.caseStudy ? <LinkButton href={links.caseStudy}>Case study</LinkButton> : null}
    </div>
  );
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const technicalDetails = technicalBySlug[project.slug] ?? project.highlights;

  return (
    <article className="max-w-4xl space-y-9">
      <SectionHeader eyebrow="Project" title={project.title}>
        <p>{project.subtitle}</p>
      </SectionHeader>

      <div className="flex flex-wrap gap-2">
        <Tag tone="accent">{project.status}</Tag>
        {project.categories.map((category) => (
          <Tag key={category}>{category}</Tag>
        ))}
        {project.stack.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>

      {project.privateNote ? (
        <p className="rounded-lg border border-line bg-raised p-4 text-sm leading-6 text-muted">
          {project.privateNote}
        </p>
      ) : null}

      <section aria-labelledby="overview-title" className="space-y-3">
        <h2 id="overview-title" className="text-xl font-semibold text-text">
          Overview
        </h2>
        <p className="leading-7 text-muted">{project.summary}</p>
      </section>

      <section aria-labelledby="why-title" className="space-y-3">
        <h2 id="why-title" className="text-xl font-semibold text-text">
          Why it matters
        </h2>
        <p className="leading-7 text-muted">{whyBySlug[project.slug]}</p>
      </section>

      <section aria-labelledby="technical-title" className="space-y-3">
        <h2 id="technical-title" className="text-xl font-semibold text-text">
          Technical details
        </h2>
        <ul className="space-y-2 text-muted">
          {technicalDetails.map((detail) => (
            <li key={detail} className="flex gap-3 leading-7">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="proof-title" className="space-y-3">
        <h2 id="proof-title" className="text-xl font-semibold text-text">
          Proof
        </h2>
        <ul className="space-y-2 text-muted">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 leading-7">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-good" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <ProofLinks project={project} />
      </section>
    </article>
  );
}
