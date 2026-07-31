import { ExperimentIllustrationMark } from "@/components/ExperimentIllustration";
import type { Experiment } from "@/content/experiments";

type ExperimentCardProps = {
  experiment: Experiment;
};

export function ExperimentCard({ experiment }: ExperimentCardProps) {
  const content = (
    <>
      <div className="experiment-meta">
        <span className="experiment-catalog-id">{experiment.catalogId}</span>
        <span className="experiment-status-chip">{experiment.status}</span>
      </div>

      <h3 className="experiment-name">{experiment.name}</h3>

      <ExperimentIllustrationMark
        kind={experiment.illustration}
        className={`experiment-illustration experiment-illustration--${experiment.illustration}`}
      />

      <div className="experiment-why">
        <p className="experiment-why-line">{experiment.whySetup}</p>
        <p className="experiment-why-line">{experiment.whySupport}</p>
        <p className="experiment-why-highlight">{experiment.whyHighlight}</p>
      </div>

      {experiment.href ? (
        <p className="experiment-link">
          {experiment.hrefLabel ?? "Open experiment"}
          <span className="experiment-link-arrow" aria-hidden="true">
            {" "}
            →
          </span>
        </p>
      ) : (
        <p className="experiment-link experiment-link-muted">
          Still on the workbench
        </p>
      )}
    </>
  );

  const className = `experiment-card experiment-accent-${experiment.accent} group`;

  if (experiment.href) {
    return (
      <a
        href={experiment.href}
        className={`${className} focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent`}
        rel="noopener noreferrer"
        target="_blank"
        aria-label={`${experiment.catalogId}: ${experiment.name} — ${experiment.hrefLabel ?? "Open experiment"}`}
      >
        {content}
      </a>
    );
  }

  return <article className={className}>{content}</article>;
}
