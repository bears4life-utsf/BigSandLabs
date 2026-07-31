import {
  createExplorerDogVariant,
  ExplorerDogExperiment,
} from "./ExplorerDogExperiment";
import {
  createTinyExplorerVariant,
  TinyExplorerExperiment,
} from "./TinyExplorerExperiment";
import {
  createUfoFlyoverVariant,
  UfoFlyoverExperiment,
} from "./UfoFlyoverExperiment";
import type {
  LivingExperimentDefinition,
  LivingExperimentId,
} from "./types";

export const livingExperiments: LivingExperimentDefinition[] = [
  {
    id: "tiny-explorer",
    label: "Tiny Explorer",
    Component: TinyExplorerExperiment,
    createVariant: createTinyExplorerVariant,
  },
  {
    id: "explorer-dog",
    label: "Explorer with Dog",
    Component: ExplorerDogExperiment,
    createVariant: createExplorerDogVariant,
  },
  {
    id: "ufo-flyover",
    label: "UFO Flyover",
    Component: UfoFlyoverExperiment,
    createVariant: createUfoFlyoverVariant,
  },
];

export function getLivingExperiment(
  id: LivingExperimentId,
): LivingExperimentDefinition | undefined {
  return livingExperiments.find((experiment) => experiment.id === id);
}

export function pickLivingExperiment(
  forcedId?: string | null,
): LivingExperimentDefinition {
  if (forcedId) {
    const forced = livingExperiments.find(
      (experiment) => experiment.id === forcedId,
    );
    if (forced) return forced;
  }

  const index = Math.floor(Math.random() * livingExperiments.length);
  return livingExperiments[index] ?? livingExperiments[0];
}
