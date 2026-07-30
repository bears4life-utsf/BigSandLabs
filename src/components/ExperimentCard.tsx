import type { Experiment, ExperimentStatus } from "@/content/experiments";

type ExperimentCardProps = {
  experiment: Experiment;
};

function statusClass(status: ExperimentStatus) {
  return status === "Live"
    ? "experiment-status-chip experiment-status-live"
    : "experiment-status-chip experiment-status-experiment";
}

export function ExperimentCard({ experiment }: ExperimentCardProps) {
  const content = (
    <>
      <div className="experiment-heading">
        <h3 className="experiment-name">{experiment.name}</h3>
        <span className={statusClass(experiment.status)}>
          {experiment.status}
        </span>
      </div>

      <div className="experiment-why">
        <h4 className="experiment-why-label">Why it exists</h4>
        <p className="experiment-why-text">{experiment.why}</p>
        {experiment.whyHighlight ? (
          <p className="experiment-why-highlight">{experiment.whyHighlight}</p>
        ) : null}
      </div>

      {experiment.href ? (
        <p className="experiment-link">
          {experiment.hrefLabel ?? "Open experiment"}
          <span aria-hidden="true"> →</span>
        </p>
      ) : (
        <p className="experiment-link experiment-link-muted">
          Still on the workbench
        </p>
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
