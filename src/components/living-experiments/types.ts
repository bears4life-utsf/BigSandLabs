import type { ComponentType } from "react";

export type LivingExperimentId =
  | "tiny-explorer"
  | "explorer-dog"
  | "ufo-flyover";

export type LivingExperimentVariant = {
  /** Horizontal travel direction. */
  direction: "ltr" | "rtl";
  /** Vertical offset within the stage lane (0–1). */
  lane: number;
  /** Playback duration in ms. */
  durationMs: number;
  /** Pause duration in ms (where applicable). */
  pauseMs: number;
};

export type LivingExperimentProps = {
  variant: LivingExperimentVariant;
  onComplete: () => void;
};

export type LivingExperimentDefinition = {
  id: LivingExperimentId;
  label: string;
  Component: ComponentType<LivingExperimentProps>;
  /** Build a controlled random variant for this event. */
  createVariant: () => LivingExperimentVariant;
};
