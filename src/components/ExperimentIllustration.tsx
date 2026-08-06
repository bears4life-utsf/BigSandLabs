import type { ReactElement } from "react";
import type { ExperimentIllustration } from "@/content/experiments";

type ExperimentIllustrationProps = {
  kind: ExperimentIllustration;
  className?: string;
};

/** Shared notebook-sketch stroke — one weight, open lines, no fills. */
const svgProps = {
  fill: "none" as const,
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true as const,
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function PorchLightMark() {
  return (
    <svg className="experiment-mark" viewBox="0 0 64 64" {...svgProps}>
      <g className="experiment-mark-motion">
        <path d="M14.5 29.2 32 15.8 49.5 29.2" />
        <path d="M18.2 29.2V48.4" />
        <path d="M45.8 29.2V48.4" />
        <path d="M13.2 48.4h37.6" />
        <path d="M22.4 48.4V41.2h19.2v7.2" />
        <path d="M32 21.4v7.2" />
        <path d="M27.4 28.6h9.2" />
        <path d="M28.2 28.6v9.8h7.6V28.6" />
        <path d="M28.2 38.4 32 41.2 35.8 38.4" />
        <path d="M22.8 33.6h4.2" />
        <path d="M37 33.6h4.2" />
        <path d="M24.6 37.8h2.8" />
        <path d="M36.6 37.8h2.8" />
      </g>
    </svg>
  );
}

function PokeScoutMark() {
  return (
    <svg className="experiment-mark" viewBox="0 0 64 64" {...svgProps}>
      <g className="experiment-mark-motion">
        <path d="M30.8 12.9c10.4.6 18.2 9.1 17.4 19.1-.7 9.6-9.6 17-19.2 16.2-9.4-.8-16.8-9.1-16-18.6.7-9.2 8.4-17.3 17.8-16.7z" />
        <path d="M13.9 31.4h35.8" />
        <path d="M32.2 25.6c3.2.2 5.5 2.9 5.2 5.8-.3 2.9-3 5-5.9 4.7-2.8-.3-4.9-2.9-4.6-5.6.2-2.7 2.5-5.1 5.3-4.9z" />
        <path d="M29.4 14.2c.8-1.1 2.4-1.4 3.3-.4" />
      </g>
    </svg>
  );
}

function FairwayCastMark() {
  return (
    <svg className="experiment-mark" viewBox="0 0 64 64" {...svgProps}>
      <path d="M12.8 50.1c5.6-8 14.1-12.6 22.6-10.6 7.1 1.6 12.8 6.9 15.1 14" />
      <path d="M28.2 47.2V16.9" />
      <g className="experiment-mark-motion experiment-mark-flag">
        <path d="M28.2 16.9l16.4 6.1-16.6 7.4.2-13.5z" />
      </g>
      <path d="M26.4 49c.5-.9 1.6-1.2 2.4-.6.7.5.9 1.5.3 2.1" />
    </svg>
  );
}

function PaysonFootballMark() {
  return (
    <svg className="experiment-mark" viewBox="0 0 64 64" {...svgProps}>
      <g className="experiment-mark-motion">
        <path d="M16.4 40.2c3.6-13.4 13.2-21.6 23.4-20.8 9.6.8 16.4 9.8 12.6 21.4-3.4 10.8-14.8 15.6-23.6 12-7.8-3.2-16-8-12.4-12.6z" />
        <path d="M25.8 28.6l12.2 11.8" />
        <path d="M29.6 26.8l2.4 2.2M33.8 30.8l2.3 2.3M37.8 34.8l2.4 2.2" />
        <path d="M23.8 36.6l2.3 2.3M27.8 40.6l2.4 2.2" />
      </g>
    </svg>
  );
}

function ChordFrameMark() {
  return (
    <svg className="experiment-mark" viewBox="0 0 64 64" {...svgProps}>
      <g className="experiment-mark-motion">
        <path d="M27.2 12.8v28.4" />
        <path d="M27.2 41.4c4.9-.3 9.1 3.5 8.8 8.4-.3 4.7-4.5 8.1-9.1 7.7-4.4-.4-7.8-4.4-7.5-8.9.3-4.3 3.7-7.1 7.8-7.2z" />
        <path d="M27.2 46.2c1.9.1 3.4 1.6 3.2 3.4-.1 1.7-1.7 3-3.4 2.8" />
        <path d="M27.4 13c5.9-.3 11.4 2.7 13.8 8.1" />
        <path d="M23.2 17.8h8.4M22.4 21.9h10M23.3 26h8.2" />
        <path d="M41.2 21.2v8.2" />
      </g>
    </svg>
  );
}

function ClosetCastMark() {
  return (
    <svg className="experiment-mark" viewBox="0 0 64 64" {...svgProps}>
      <g className="experiment-mark-motion">
        <path d="M32.1 13.6c.3-3 2.6-5.2 5.3-4.9" />
        <path d="M32 13.8v6.2" />
        <path d="M17.6 35.1 31.7 20.1l14.4 14.8" />
        <path d="M21.4 35.3h20.8" />
        <path d="M31.8 35.3v4.1" />
      </g>
    </svg>
  );
}

function TimeFrameMark() {
  return (
    <svg className="experiment-mark" viewBox="0 0 64 64" {...svgProps}>
      <g className="experiment-mark-motion">
        <path d="M21.8 15.6h20.4" />
        <path d="M22 48.4h20" />
        <path d="M23.6 15.8c.4 7.8 4.1 12.2 8.4 16.2 4.4-3.9 7.9-8.6 8.2-16" />
        <path d="M23.8 48.2c.3-7.7 3.9-12 8.2-15.9 4.5 3.8 8 8.4 8.1 16.1" />
        <path d="M28.8 32h6.6" />
      </g>
    </svg>
  );
}

const illustrations: Record<ExperimentIllustration, () => ReactElement> = {
  porchlight: PorchLightMark,
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
