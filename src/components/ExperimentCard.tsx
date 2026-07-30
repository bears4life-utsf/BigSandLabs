import type { Experiment, ExperimentStatus } from "@/content/experiments";

type ExperimentCardProps = {
  experiment: Experiment;
};

function statusClass(status: ExperimentStatus) {
  switch (status) {
    case "Live":
      return "status-live";
    case "Building":
      return "status-building";
    case "Exploring":
      return "status-exploring";
    case "Archived":
      return "status-archived";
  }
}

function ExperimentMark({ accent }: { accent: string }) {
  return (
    <span
      className="mark-tile"
      style={{ color: accent }}
      aria-hidden="true"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M2.5 11.5C4.8 9.2 6.6 8.2 8.3 9C10 9.8 11.5 8.7 13.5 7"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle cx="11.6" cy="7.6" r="1.15" fill="currentColor" />
      </svg>
    </span>
  );
}

export function ExperimentCard({ experiment }: ExperimentCardProps) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <ExperimentMark accent={experiment.accent} />
        <span className={`status-pill ${statusClass(experiment.status)}`}>
          {experiment.status}
        </span>
      </div>

      <p className="mt-5 text-xs font-medium tracking-[0.08em] text-stone uppercase">
        {experiment.category}
      </p>

      <h3 className="mt-2 font-serif text-2xl tracking-tight text-foreground">
        {experiment.name}
      </h3>

      <p className="experiment-problem mt-4">{experiment.problem}</p>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {experiment.description}
      </p>

      {experiment.href ? (
        <p className="mt-6 text-sm font-medium text-accent">
          {experiment.hrefLabel ?? "Open experiment"}
          <span aria-hidden="true"> →</span>
        </p>
      ) : (
        <p className="mt-6 text-sm text-stone">Still on the workbench</p>
      )}
    </>
  );

  const className = "experiment-card group";

  if (experiment.href) {
    return (
      <a
        href={experiment.href}
        className={`${className} focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent`}
        rel="noopener noreferrer"
        target="_blank"
        aria-label={`${experiment.name} — ${experiment.hrefLabel ?? "Open experiment"}`}
      >
        {content}
      </a>
    );
  }

  return <article className={className}>{content}</article>;
}
