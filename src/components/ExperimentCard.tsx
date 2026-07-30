import type { Experiment } from "@/content/experiments";

type ExperimentCardProps = {
  experiment: Experiment;
};

export function ExperimentCard({ experiment }: ExperimentCardProps) {
  const content = (
    <>
      <div className="experiment-heading">
        <h3 className="experiment-name">{experiment.name}</h3>
        <span className="experiment-status-chip">{experiment.status}</span>
      </div>

      <div className="experiment-story">
        <p className="experiment-observation">{experiment.observation}</p>
        {experiment.observationHighlight ? (
          <p className="experiment-observation-highlight">
            {experiment.observationHighlight}
          </p>
        ) : null}
        <p className="experiment-exploration">{experiment.exploration}</p>
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
