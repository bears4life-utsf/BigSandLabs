import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
};

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className="project-visual relative aspect-[16/10] overflow-hidden border-b border-border"
      style={{ ["--project-accent" as string]: project.accent }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-40">
        <svg
          className="h-full w-full"
          viewBox="0 0 320 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="28"
            y="36"
            width="264"
            height="128"
            rx="10"
            stroke={project.accent}
            strokeOpacity="0.35"
            strokeWidth="1.5"
          />
          <path
            d="M48 148C88 108 120 96 160 112C200 128 232 104 272 72"
            stroke={project.accent}
            strokeOpacity="0.55"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle
            cx="248"
            cy="84"
            r="7"
            fill={project.accent}
            fillOpacity="0.7"
          />
          <rect
            x="48"
            y="52"
            width="72"
            height="8"
            rx="4"
            fill={project.accent}
            fillOpacity="0.28"
          />
          <rect
            x="48"
            y="68"
            width="108"
            height="6"
            rx="3"
            fill={project.accent}
            fillOpacity="0.16"
          />
        </svg>
      </div>
      <p className="absolute right-4 bottom-4 left-4 text-xs font-medium tracking-wide text-foreground/70">
        {project.visualLabel}
      </p>
    </div>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const content = (
    <>
      <ProjectVisual project={project} />
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
    </>
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
