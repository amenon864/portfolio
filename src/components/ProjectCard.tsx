import Link from "next/link";
import { ExternalLink, Github, Layers } from "lucide-react";
import { Tag } from "@/components/Tag";
import type { Project } from "@/data/projects";
import { isExternalUrl, projectHref } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
};

function LinkButton({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  const className =
    "focus-ring inline-flex min-h-9 items-center gap-2 rounded-md border border-line px-3 py-1.5 text-sm text-text transition duration-150 hover:border-accent/50 hover:bg-raised";

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

export function ProjectCard({ project }: ProjectCardProps) {
  const detailHref = projectHref(project.slug);
  const caseStudy = project.links?.caseStudy;

  return (
    <article className="group flex h-full flex-col rounded-lg border border-line bg-panel p-4 transition duration-150 hover:border-accent/40">
      <div className="flex flex-wrap gap-2">
        {project.categories.map((category) => (
          <Tag key={category}>{category}</Tag>
        ))}
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-text">
          <Link className="focus-ring rounded-sm" href={detailHref}>
            {project.title}
          </Link>
        </h2>
        <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
      </div>
      <p className="mt-4 text-sm leading-6 text-muted">{project.summary}</p>
      <p className="mt-4 font-mono text-xs leading-5 text-muted">
        {project.stack.join(" / ")}
      </p>
      {project.privateNote ? (
        <p className="mt-4 rounded-md border border-line bg-raised px-3 py-2 text-xs leading-5 text-muted">
          {project.privateNote}
        </p>
      ) : null}
      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        <LinkButton href={detailHref} icon={<Layers aria-hidden="true" size={15} />}>
          View project
        </LinkButton>
        {project.links?.github ? (
          <LinkButton href={project.links.github} icon={<Github aria-hidden="true" size={15} />}>
            GitHub
          </LinkButton>
        ) : null}
        {project.links?.live ? (
          <LinkButton href={project.links.live} icon={<ExternalLink aria-hidden="true" size={15} />}>
            Live Demo
          </LinkButton>
        ) : null}
        {caseStudy && caseStudy !== detailHref ? (
          <LinkButton href={caseStudy}>Case Study</LinkButton>
        ) : null}
      </div>
    </article>
  );
}
