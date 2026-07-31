"use client";

import { useEffect, type CSSProperties } from "react";
import type { LivingExperimentProps } from "./types";

function pickDirection(): "ltr" | "rtl" {
  return Math.random() < 0.5 ? "ltr" : "rtl";
}

export function createUfoFlyoverVariant() {
  return {
    direction: pickDirection(),
    lane: 0.12 + Math.random() * 0.16,
    durationMs: 10000 + Math.floor(Math.random() * 2500),
    pauseMs: 1100 + Math.floor(Math.random() * 600),
  };
}

export function UfoFlyoverExperiment({
  variant,
  onComplete,
}: LivingExperimentProps) {
  useEffect(() => {
    const timer = window.setTimeout(onComplete, variant.durationMs);
    return () => window.clearTimeout(timer);
  }, [onComplete, variant.durationMs]);

  return (
    <div
      className="living-actor living-ufo"
      style={
        {
          "--living-duration": `${variant.durationMs}ms`,
          "--living-pause": `${variant.pauseMs}ms`,
          "--living-lane": `${variant.lane}`,
          animationName:
            variant.direction === "ltr" ? "living-ufo-ltr" : "living-ufo-rtl",
        } as CSSProperties
      }
    >
      <svg
        className="living-ufo-svg"
        viewBox="0 0 64 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse
          className="living-ufo-beam"
          cx="32"
          cy="30"
          rx="8"
          ry="9"
          fill="currentColor"
          opacity="0.08"
        />
        <ellipse cx="32" cy="18" rx="18" ry="6.5" fill="currentColor" opacity="0.55" />
        <ellipse cx="32" cy="15.5" rx="10" ry="5" fill="currentColor" opacity="0.35" />
        <ellipse cx="32" cy="13.5" rx="7" ry="3.2" fill="currentColor" opacity="0.28" />
        <circle cx="24" cy="18" r="1.2" fill="currentColor" opacity="0.55" />
        <circle cx="32" cy="18.5" r="1.2" fill="currentColor" opacity="0.55" />
        <circle cx="40" cy="18" r="1.2" fill="currentColor" opacity="0.55" />
      </svg>
    </div>
  );
}
