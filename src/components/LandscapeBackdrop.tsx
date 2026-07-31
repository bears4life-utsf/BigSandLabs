"use client";

import { useCallback, useSyncExternalStore } from "react";
import { applyTheme, getDocumentTheme, type Theme } from "@/lib/theme";

const listeners = new Set<() => void>();

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => listeners.delete(onStoreChange);
}

function emitThemeChange() {
  listeners.forEach((listener) => listener());
}

function getClientTheme(): Theme {
  return getDocumentTheme();
}

function getServerTheme(): Theme {
  return "day";
}

/** Full-bleed landscape plane for the hero — sand, water, and ridge light. */
export function LandscapeBackdrop() {
  const theme = useSyncExternalStore(
    subscribe,
    getClientTheme,
    getServerTheme,
  );

  const toggleTheme = useCallback(() => {
    const next: Theme = getDocumentTheme() === "day" ? "night" : "day";
    applyTheme(next);
    emitThemeChange();
  }, []);

  const isNight = theme === "night";

  return (
    <div className="landscape-backdrop absolute inset-0">
      <div className="landscape-sky pointer-events-none" aria-hidden="true" />
      <div className="landscape-water pointer-events-none" aria-hidden="true" />
      <div
        className="landscape-dune landscape-dune-far pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="landscape-dune landscape-dune-near pointer-events-none"
        aria-hidden="true"
      />
      <div className="landscape-glow pointer-events-none" aria-hidden="true" />
      <div className="landscape-grain pointer-events-none" aria-hidden="true" />
      <svg
        className="landscape-ridges pointer-events-none"
        viewBox="0 0 1440 640"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          className="ridge ridge-a"
          d="M-40 410C180 340 320 360 470 390C640 425 760 330 940 300C1120 270 1280 320 1500 280"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <path
          className="ridge ridge-b"
          d="M-40 470C160 430 300 450 470 480C680 520 820 430 1000 410C1180 390 1320 430 1500 400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <path
          className="ridge ridge-c"
          d="M-40 530C200 500 340 520 520 545C740 575 900 510 1080 495C1240 482 1360 510 1500 490"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
        />

        <g className="celestial-bodies">
          <circle className="ridge-sun" cx="1180" cy="168" r="53" />

          <circle className="ridge-moon" cx="1180" cy="168" r="40" />

          <g className="ridge-stars">
            <circle cx="980" cy="92" r="1.6" />
            <circle cx="1060" cy="138" r="1.2" />
            <circle cx="1285" cy="78" r="1.4" />
            <circle cx="1340" cy="150" r="1.1" />
            <circle cx="1115" cy="58" r="1.3" />
            <circle cx="1245" cy="210" r="1.0" />
          </g>
        </g>
      </svg>

      <button
        type="button"
        className="celestial-toggle"
        aria-label={
          isNight ? "Switch to day mode" : "Switch to night mode"
        }
        onClick={toggleTheme}
      />
    </div>
  );
}
