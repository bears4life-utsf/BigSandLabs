import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const content = (
    <div className="flex flex-1 flex-col p-5 sm:p-6">
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full border border-border bg-background px-2.5 py-1 text-muted">
          {project.category}
        </span>
        <span
          className="rounded-full px-2.5 py-1 font-medium"
          style={{
            backgroundColor: `color-mix(in srgb, ${project.accent} 14%, transparent)`,
            color: project.accent,
          }}
        >
          {project.status}
        </span>
      </div>

      <h3 className="mt-4 font-serif text-xl tracking-tight text-foreground">
        {project.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      {project.href ? (
        <p className="mt-5 text-sm font-medium text-accent">
          {project.hrefLabel ?? "View project"}
          <span aria-hidden="true"> →</span>
        </p>
      ) : (
        <p className="mt-5 text-sm text-stone">In progress</p>
      )}
    </div>
  );

  const className =
    "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background-elevated shadow-soft transition-[border-color,box-shadow,transform] duration-300 hover:border-border-strong hover:shadow-hover focus-within:border-border-strong";

  if (project.href) {
    return (
      <a
        href={project.href}
        className={`${className} focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent`}
        rel="noopener noreferrer"
        target="_blank"
        aria-label={`${project.name} — ${project.hrefLabel ?? "View project"}`}
      >
        {content}
      </a>
    );
  }

  return <article className={className}>{content}</article>;
}
