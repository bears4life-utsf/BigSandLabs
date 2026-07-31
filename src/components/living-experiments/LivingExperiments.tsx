"use client";

import { useCallback, useEffect, useState } from "react";
import { pickLivingExperiment } from "./registry";
import type {
  LivingExperimentDefinition,
  LivingExperimentVariant,
} from "./types";

type ActiveExperiment = {
  definition: LivingExperimentDefinition;
  variant: LivingExperimentVariant;
};

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function readForcedExperimentId() {
  try {
    const params = new URLSearchParams(window.location.search);
    return params.get("living");
  } catch {
    return null;
  }
}

/**
 * Homepage Living Experiments controller.
 *
 * Force a specific event during development with:
 *   ?living=tiny-explorer
 *   ?living=explorer-dog
 *   ?living=ufo-flyover
 */
export function LivingExperiments() {
  const [active, setActive] = useState<ActiveExperiment | null>(null);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const forcedId = readForcedExperimentId();
    const delayMs = forcedId
      ? 600
      : 3000 + Math.floor(Math.random() * 5000);

    const startTimer = window.setTimeout(() => {
      if (prefersReducedMotion()) return;
      const definition = pickLivingExperiment(forcedId);
      setActive({
        definition,
        variant: definition.createVariant(),
      });
    }, delayMs);

    return () => {
      window.clearTimeout(startTimer);
    };
  }, []);

  const handleComplete = useCallback(() => {
    setActive(null);
    setFinished(true);
  }, []);

  if (finished || !active) return null;

  const { definition, variant } = active;
  const Experiment = definition.Component;

  return (
    <div className="living-experiments-stage" aria-hidden="true">
      <Experiment variant={variant} onComplete={handleComplete} />
    </div>
  );
}
