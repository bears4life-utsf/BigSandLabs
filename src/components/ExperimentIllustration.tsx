import type { ReactElement } from "react";
import type { ExperimentIllustration } from "@/content/experiments";

type ExperimentIllustrationProps = {
  kind: ExperimentIllustration;
  className?: string;
};

const svgProps = {
  fill: "none" as const,
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function PokeScoutMark() {
  return (
    <svg viewBox="0 0 64 64" {...svgProps}>
      <circle cx="32" cy="32" r="18" />
      <path d="M14 32h36" />
      <circle cx="32" cy="32" r="5.5" />
      <circle cx="32" cy="32" r="2.2" fill="currentColor" stroke="none" opacity="0.55" />
    </svg>
  );
}

function FairwayCastMark() {
  return (
    <svg viewBox="0 0 64 64" {...svgProps}>
      <path d="M14 48c6-8 14-12 22-10 7 2 12 7 14 14" />
      <path d="M28 46V18" />
      <path d="M28 18l16 7-16 7V18z" />
      <circle cx="28" cy="48" r="1.8" fill="currentColor" stroke="none" opacity="0.5" />
    </svg>
  );
}

function PaysonFootballMark() {
  return (
    <svg viewBox="0 0 64 64" {...svgProps}>
      <path d="M16 40c4-14 14-22 24-22s16 10 12 24c-4 12-16 16-24 12s-16-8-12-14z" />
      <path d="M26 28l12 12" />
      <path d="M30 26l2.5 2.5M34 30l2.5 2.5M38 34l2.5 2.5" />
      <path d="M24 36l2.5 2.5M28 40l2.5 2.5" />
    </svg>
  );
}

function ChordFrameMark() {
  return (
    <svg viewBox="0 0 64 64" {...svgProps}>
      <path d="M28 14v28" />
      <circle cx="28" cy="46" r="8" />
      <circle cx="28" cy="46" r="3.2" />
      <path d="M28 14c6 0 11 3 13 8" />
      <path d="M24 18h8M23 22h10M24 26h8" />
      <path d="M41 22v8" />
    </svg>
  );
}

function ClosetCastMark() {
  return (
    <svg viewBox="0 0 64 64" {...svgProps}>
      <path d="M32 14c0-3 2.5-5 5-5" />
      <path d="M32 14v6" />
      <path d="M18 34l14-14 14 14" />
      <path d="M22 34h20" />
    </svg>
  );
}

function TimeFrameMark() {
  return (
    <svg viewBox="0 0 64 64" {...svgProps}>
      <path d="M22 16h20" />
      <path d="M22 48h20" />
      <path d="M24 16c0 8 4 12 8 16 4-4 8-8 8-16" />
      <path d="M24 48c0-8 4-12 8-16 4 4 8 8 8 16" />
      <path d="M29 32h6" />
    </svg>
  );
}

const illustrations: Record<ExperimentIllustration, () => ReactElement> = {
  pokescout: PokeScoutMark,
  fairwaycast: FairwayCastMark,
  "payson-football": PaysonFootballMark,
  chordframe: ChordFrameMark,
  closetcast: ClosetCastMark,
  timeframe: TimeFrameMark,
};

export function ExperimentIllustrationMark({
  kind,
  className,
}: ExperimentIllustrationProps) {
  const Illustration = illustrations[kind];

  return (
    <span className={className ?? "experiment-illustration"}>
      <Illustration />
    </span>
  );
}
