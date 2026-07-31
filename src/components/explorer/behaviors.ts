/**
 * Explorer behavior registry — timing defaults and class names.
 * Future behaviors (walk, sit, sun-gaze, etc.) register here.
 */

export type ExplorerSpecialId =
  | "blink"
  | "blink-double"
  | "compass"
  | "glance"
  | "weight"
  | "hat-tilt";

export type ScheduledSpecialId = "blink" | "compass" | "glance" | "weight";

export type ExplorerBehaviorSpec = {
  id: ScheduledSpecialId;
  /** Min ms between this behavior's runs (from schedule start). */
  minGap: number;
  /** Max ms between this behavior's runs. */
  maxGap: number;
  /** How long the CSS class stays applied. */
  duration: number;
  /** Class applied to `.bsl-explorer` root. */
  className: string;
  /** Relative pick weight for weighted random (idle + click). */
  weight: number;
};

/** Idle specials — each schedules itself with randomized gaps. */
export const EXPLORER_SPECIALS: readonly ExplorerBehaviorSpec[] = [
  {
    id: "blink",
    minGap: 5_000,
    maxGap: 10_000,
    duration: 300,
    className: "is-blink",
    weight: 2,
  },
  {
    id: "compass",
    minGap: 8_000,
    maxGap: 16_000,
    duration: 2_800,
    className: "is-compass",
    weight: 3,
  },
  {
    id: "glance",
    minGap: 12_000,
    maxGap: 24_000,
    duration: 2_400,
    className: "is-glance",
    weight: 2,
  },
  {
    id: "weight",
    minGap: 16_000,
    maxGap: 32_000,
    duration: 2_800,
    className: "is-weight",
    weight: 2,
  },
] as const;

/** Click pool — always pick one of these for immediate feedback. */
export const CLICK_SPECIALS: readonly {
  className: string;
  duration: number;
  weight: number;
}[] = [
  { className: "is-blink-double", duration: 560, weight: 2 },
  { className: "is-compass", duration: 2_800, weight: 3 },
  { className: "is-glance", duration: 2_400, weight: 2 },
  { className: "is-weight", duration: 2_800, weight: 2 },
  { className: "is-hat-tilt", duration: 1_000, weight: 2 },
] as const;

/** Chance a scheduled blink becomes a double blink. */
export const BLINK_DOUBLE_CHANCE = 0.28;

/** Click cooldown — short enough that first click always feels responsive. */
export const CLICK_COOLDOWN_MS = 1_200;

export function randomBetween(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

export function pickWeighted<T extends { weight: number }>(items: readonly T[]): T {
  const total = items.reduce((sum, item) => sum + item.weight, 0);
  let roll = Math.random() * total;
  for (const item of items) {
    roll -= item.weight;
    if (roll <= 0) return item;
  }
  return items[items.length - 1]!;
}
