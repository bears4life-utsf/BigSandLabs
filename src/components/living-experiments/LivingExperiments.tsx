"use client";

import { Explorer } from "@/components/Explorer";

/**
 * Living landscape presence for the homepage hero.
 * Guide on the near dune crest — facing the manifesto.
 */
export function LivingExperiments() {
  return (
    <div className="living-experiments-stage">
      <div className="explorer-presence">
        <span className="explorer-contact-shadow" aria-hidden="true" />
        <Explorer className="explorer-presence-figure" size="100%" interactive />
      </div>
    </div>
  );
}
