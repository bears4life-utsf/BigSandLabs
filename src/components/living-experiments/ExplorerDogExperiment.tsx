"use client";

import { useEffect, type CSSProperties } from "react";
import type { LivingExperimentProps } from "./types";

function pickDirection(): "ltr" | "rtl" {
  return Math.random() < 0.5 ? "ltr" : "rtl";
}

export function createExplorerDogVariant() {
  return {
    direction: pickDirection(),
    lane: 0.14 + Math.random() * 0.2,
    durationMs: 15500 + Math.floor(Math.random() * 3500),
    pauseMs: 1600 + Math.floor(Math.random() * 700),
  };
}

export function ExplorerDogExperiment({
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
      className="living-actor living-pair"
      style={
        {
          "--living-duration": `${variant.durationMs}ms`,
          "--living-pause": `${variant.pauseMs}ms`,
          "--living-lane": `${variant.lane}`,
          "--living-facing": facing,
          animationName:
            variant.direction === "ltr"
              ? "living-pair-ltr"
              : "living-pair-rtl",
        } as CSSProperties
      }
    >
      <div className="living-pair-inner">
        <svg
          className="living-explorer-svg living-pair-explorer"
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
            d="M20 18.5C24 19.5 26.5 21 27 24"
            stroke="currentColor"
            strokeWidth="2.1"
            strokeLinecap="round"
            opacity="0.7"
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

        <svg
          className="living-dog-svg"
          viewBox="0 0 48 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse cx="22" cy="26" rx="10" ry="1.4" fill="currentColor" opacity="0.1" />
          <path
            d="M10 16C12 10 18 8 26 9C32 10 36 13 38 16C34 18 28 19 20 18C15 17.5 12 17 10 16Z"
            fill="currentColor"
            opacity="0.72"
          />
          <path
            d="M36 15.5C39 13.5 42 12.5 44.5 13.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.7"
          />
          <circle cx="41.5" cy="13.2" r="1.4" fill="currentColor" opacity="0.75" />
          <path
            d="M12 16C10 14 8.5 11.5 9 9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.55"
          />
          <path
            className="living-dog-leg"
            d="M16 18V24.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            className="living-dog-leg"
            d="M22 18.5V25"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            className="living-dog-leg"
            d="M28 18V24.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            className="living-dog-leg"
            d="M33 17.5V23.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
      </div>
    </div>
  );
}
