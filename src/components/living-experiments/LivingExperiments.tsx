"use client";

import { StickFigureDweller } from "./StickFigureDweller";

/**
 * Living landscape presence for the homepage hero.
 * Currently: a tiny stick figure that wanders the sand.
 */
export function LivingExperiments() {
  return (
    <div className="living-experiments-stage" aria-hidden="true">
      <StickFigureDweller />
    </div>
  );
}
