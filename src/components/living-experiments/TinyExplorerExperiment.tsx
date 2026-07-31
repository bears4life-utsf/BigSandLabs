"use client";

import { useEffect, type CSSProperties } from "react";
import type { LivingExperimentProps } from "./types";

function pickDirection(): "ltr" | "rtl" {
  return Math.random() < 0.5 ? "ltr" : "rtl";
}

export function createTinyExplorerVariant() {
  return {
    direction: pickDirection(),
    lane: 0.18 + Math.random() * 0.22,
    durationMs: 7200 + Math.floor(Math.random() * 1800),
    pauseMs: 900 + Math.floor(Math.random() * 500),
  };
}

export function TinyExplorerExperiment({
  variant,
  onComplete,
}: LivingExperimentProps) {
  useEffect(() => {
    const timer = window.setTimeout(onComplete, variant.durationMs);
    return () => window.clearTimeout(timer);
  }, [onComplete, variant.durationMs]);

  const facing = variant.direction === "ltr" ? 1 : -1;

  return (
    <div
      className="living-actor living-explorer"
      style={
        {
          "--living-duration": `${variant.durationMs}ms`,
          "--living-pause": `${variant.pauseMs}ms`,
          "--living-lane": `${variant.lane}`,
          "--living-facing": facing,
          animationName:
            variant.direction === "ltr"
              ? "living-explorer-ltr"
              : "living-explorer-rtl",
        } as CSSProperties
      }
    >
      <svg
        className="living-explorer-svg"
        viewBox="0 0 40 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse cx="20" cy="54" rx="9" ry="1.6" fill="currentColor" opacity="0.12" />
        <circle cx="20" cy="10" r="5.2" fill="currentColor" opacity="0.78" />
        <path
          d="M12 8.5C14 5.5 18 4.2 22.5 5.2C26.2 6 28.5 7.8 29 10.2"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M20 15.5V30"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          className="living-explorer-arm"
          d="M20 18.5C24 19.5 27 17.5 28.5 14"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          opacity="0.75"
        />
        <path
          d="M20 18.5C16.5 20 14.5 23 14 26"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          opacity="0.65"
        />
        <path
          d="M20 30C17 38 15.5 46 14.5 52"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
          opacity="0.78"
        />
        <path
          d="M20 30C23.5 38 25 45.5 26 52"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
          opacity="0.78"
        />
      </svg>
    </div>
  );
}
